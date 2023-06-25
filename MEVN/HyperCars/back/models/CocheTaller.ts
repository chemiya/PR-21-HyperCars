import { Schema, model } from "mongoose";

const cocheTallerSchema = new Schema(
  {
    matricula: String,
    marca: String,
    modelo: String,
    incidencia:String,
    comentarios:String,
    propietario:String,
    estadoTaller:String,
    fechaLlegada:String,
    precio:Number,
    url:String

    
  }
);

export default model("cocheTaller", cocheTallerSchema);