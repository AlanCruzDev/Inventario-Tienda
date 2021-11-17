import fs from 'fs';
import {Request,Response,NextFunction} from 'express';
import {JsonWebTokenError} from 'jsonwebtoken';
import jwt from 'jsonwebtoken';

export default class Authentication {

    private Algol: Algorithm | any = "HS512";
    private static instance:Authentication;

    public static get instanceWEB(){
      return this.instance || (this.instance = new this());
    } 

    public isAuth = (req: Request, res: Response, next: NextFunction) => {
      if (req.headers.authorization !== null) {
        let Token =<string> req.headers.authorization;
        let PrivateKey = fs.readFileSync("./src/security/private.pem", "utf8");        
        jwt.verify(
          Token,
          PrivateKey,
          {algorithms:this.Algol},
          (error:JsonWebTokenError | null)=>{
            if (error) {
                res.status(500).json({ error: "Not Authorized" });
                return false;}
            return next();
          }
        );
      } else {
        res.status(500).json({ error: "Not Authorized" });
        return false;
      }
    };
    public GenerarToken=():string=>{
      const PrivateKey: string = fs.readFileSync(
        "./src/security/private.pem",
        "utf8"
      );
      const token: string = jwt.sign({ body: "stuff" }, PrivateKey, {
        algorithm: this.Algol,
      });
      return token;
    }
  }