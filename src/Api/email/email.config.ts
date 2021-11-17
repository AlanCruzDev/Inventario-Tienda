import nodemailer, { Transporter } from "nodemailer";
import { MailOptions } from "nodemailer/lib/json-transport";
import HtmlDesign from "./plantilla.html";

export default class EmailService {

  private static _instance:EmailService;
  private options!: MailOptions;
  private plantilla: HtmlDesign = new HtmlDesign();

  public static get instanceEmail(){
    return this._instance || (this._instance = new this())
  }

  private transporter: Transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port:465,
    secure:true,
    auth: {
      user: process.env.EMAIL_USSER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  async sendMail(
    emisor: string,
    receptor: string,
    asunto: string,
    texto: string,
    empresa: string,
    codigo: string,
    direccion: string
  ) {
    this.options = {
      from: emisor,
      to: receptor,
      subject: asunto,
      text: texto,
      html: this.plantilla.getHtml(empresa,codigo,direccion)
    };
    const result = await this.transporter.sendMail(this.options);
    console.log(result);
  }
}