import {Server,Socket} from 'socket.io';
export default class Sockets{

  public io:Server;

  constructor(io:Server){
    this.io=io;
    this.socketEventos();
  }

  private socketEventos():void{
    console.log('Escuchando sockets');
    this.io.on('connection', (cliente:Socket)=>{
      console.log('cliente conectado');

    });
  }
}