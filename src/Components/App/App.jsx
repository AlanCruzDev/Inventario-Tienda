import React,{useState} from 'react';
import {Rutas} from '../../Routers/rutas';
import {store} from '../../store/store';
import {Provider} from 'react-redux';


function App() {
  return (
    <Provider store={store}>
        <Rutas/>
    </Provider>
  );
}
export default App;
