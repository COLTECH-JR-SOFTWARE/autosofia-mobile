import { store } from '../store';
import socketIOClient from 'socket.io-client';
import axios from 'axios';

const chatUrl = 'http://ec2-18-230-116-18.sa-east-1.compute.amazonaws.com:3333';

export function createChatApi(){
  const userToken = store.getState().auth.token;

  const api = axios.create({
    baseURL: chatUrl,
    headers: { Authorization: `Bearer ${userToken}` }
  })

  return api;
}

export function createSocket(){
  const userToken = store.getState().auth.token;

  const socket = socketIOClient.connect(chatUrl, {
    query: `token=${userToken}`
  });

  return socket;
}

