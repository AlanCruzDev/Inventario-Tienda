import React,{useState} from 'react';
import {Rutas} from '../../Routers/rutas';
import {store} from '../../store/store';
import {Provider} from 'react-redux';
import SocketState from '../../context/socket';

function App() {
  return (
    <Provider store={store}>
      <SocketState>
        <Rutas/>
      </SocketState>
    </Provider>
  );
}
export default App;
