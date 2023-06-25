import { Schema, model } from "mongoose";

const empleadoSchema = new Schema(
  {
    username: String,
    password: String,
    email: String,
    idEmpleado:String
    
  }
);

export default model("empleado", empleadoSchema);
