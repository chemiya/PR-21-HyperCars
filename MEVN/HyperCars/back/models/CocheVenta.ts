import { Schema, model } from "mongoose";

const cocheVentaSchema = new Schema(
  {
    matricula: String,
    marca: String,
    modelo: String,
    caballos:Number,
    agno:Number,
    estadoVenta:String,
    fechaPublicacion:String,
    precio:Number,
    url:String

    
  }
);

export default model("cocheVenta", cocheVentaSchema);