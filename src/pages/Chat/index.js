import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { ActivityIndicator } from 'react-native';

import {
  Container,
  Content,
  SenderMessage,
  MessageContainer,
  ReceiverMessage,
  MessageDate,
  MessageText,
  Input,
  IconContainer,
  BottomBar,
} from './styles';

import formatDate from './utils/formatDate';
import Header from './Header';
import { createChatApi, createSocket } from '../../services/chat';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasMoreMessages, setHasMoreMessages] = useState(true);

  const api = createChatApi();
  const socket = createSocket();

  socket.on('new-message', (message) => {
    setMessages([message, ...messages]);
  });

  useEffect(() => {
    loadLocalMessages();
  }, []);

  async function loadLocalMessages(){
    const messages = await AsyncStorage.getItem('@messages');

    if(messages){
      setMessages(JSON.parse(messages));
    } else {
      loadInitialMessages();
    }
  }
  
  async function loadInitialMessages(){
    const { data } = await api.get('users/messages');
    setMessages(data);
  }

  async function loadMoreMessages(){
    const lastIndex = messages.length - 1;

    if(lastIndex < 0 || !hasMoreMessages){
      return;
    }

    const { data } = await api.get('users/messages', {
      params: {
        olderThan: messages[lastIndex].createdAt,
      }
    });

    if(!data.length){
      setHasMoreMessages(false);
    }

    setMessages([...messages, ...data]);
  }

  async function setLocalMessages(messages){
    const jsonMessages = JSON.stringify(messages.slice(0, 40));
    await AsyncStorage.setItem('@messages', jsonMessages);
  }

  async function sendMessage(messageText){
    if(!text.length || loading){
      return;
    }

    setLoading(true);

    try{
      const { data: message } = await api.post('users/messages', {
        content: messageText,
      });

      setText('');
      setMessages([message, ...messages]);
      setLocalMessages([message, ...messages]);
    }catch(err){
      alert('Falha na conexão');
    }

    setLoading(false);
  }

  return (
    <Container>
      <Header />
      <Content
        onEndReached={loadMoreMessages}
        onEndReachedThreshold={0.3}
        inverted={true}
        data={messages}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 25 }}
        numColumns={1}
        keyExtractor={message => String(message.id)}
        renderItem={({ item: message })=>(
          <>
            {message.sender_is_admin ? (
              <MessageContainer admin>
                <ReceiverMessage>
                  <MessageText>{message.message.content}</MessageText>
                </ReceiverMessage>
                <MessageDate>{formatDate(message.createdAt)}</MessageDate>
              </MessageContainer>
            ) : (
              <MessageContainer>
                <SenderMessage>
                  <MessageText>{message.message.content}</MessageText>
                </SenderMessage>
                <MessageDate>{formatDate(message.createdAt)}</MessageDate>
              </MessageContainer>
            )}
          </>
        )}
      />
      <BottomBar>
        <Input 
          value={text}
          onChangeText={text => setText(text)}
        />
        <IconContainer onPress={() => sendMessage(text)}>
          {loading 
            ? <ActivityIndicator size="small" color="#FBDE0E"/> 
            : <Icon name="send" size={24} color="#FBDE0E" />
          }
        </IconContainer>
      </BottomBar>
    </Container>
  );
}

export default Chat;
