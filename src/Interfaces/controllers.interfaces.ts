import {Router} from 'express';

export default interface Controller{
    path:string,
    router:Router,
    initializeRoutes():void,
    server:any,
    validacion:any
}