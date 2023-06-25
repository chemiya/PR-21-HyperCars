import { CocheTaller } from "@/interfaces/CocheTaller";
import { AxiosResponse } from "axios";
import axios from "./axios";
import { Empleado } from "@/interfaces/Empleado";



export const createEmpleado= async (empleado: Empleado): Promise<AxiosResponse> =>
  await axios.post("/empleado", empleado);

  export const identificarEmpleado= async (empleado: Empleado): Promise<AxiosResponse> =>
  await axios.post("/empleado/identificacion", empleado);




