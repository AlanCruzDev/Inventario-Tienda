import {Socket,Server} from 'socket.io';
let io:Server;

export const crearSocketServidor=(server:Server)=>{
  io=server;
  console.log('Escuchando sockets');
  io.on('connection',(socket:Socket)=>{
    console.log('cliente conectado');
  });
}

export const EnviarCodigo=(result:any[])=>{
  io.emit('enviar-codigo',result);
}