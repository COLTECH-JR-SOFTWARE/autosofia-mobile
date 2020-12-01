import React from 'react';
import { useSelector } from 'react-redux';

import Routes from './Routes/index';


export default function Route(){
  const signed = useSelector(state => state.auth.signed);

  return (
    <Routes signed={signed} />

  )
}