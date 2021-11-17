import React from 'react';
import { useSocket } from '../Hooks/useSocket';
import proyectSocket from './socketContext';

const SocketState = (props) => {
  const {socket,online}=useSocket('http://192.168.100.3:5003');
  return ( 
    <proyectSocket.Provider
      value={{
        socket,
        online
      }}
    >
      {props.children}
    </proyectSocket.Provider>
   );
}
 
export default SocketState;
