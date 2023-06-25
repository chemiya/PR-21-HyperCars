import { CocheTaller } from "@/interfaces/CocheTaller";
import { AxiosResponse } from "axios";
import axios from "./axios";
import { CocheVenta } from "@/interfaces/CocheVenta";

export const getCochesVenta = async (): Promise<AxiosResponse<CocheVenta[]>> =>
  await axios.get("/cocheVenta");

export const getCocheVenta = async (id: string): Promise<AxiosResponse<CocheVenta>> =>
  await axios.get(`/cocheVenta/${id}`);

export const createCocheVenta= async (cocheVenta: CocheVenta): Promise<AxiosResponse> =>
  await axios.post("/cocheVenta", cocheVenta);

export const updateCocheVenta = async (
  id: string,
  newCocheVenta: CocheVenta
): Promise<AxiosResponse<CocheVenta>> => await axios.put(`/cocheVenta/${id}`, newCocheVenta);

export const deleteCocheVenta = async (id: string): Promise<AxiosResponse> =>
  await axios.delete(`/cocheVenta/${id}`);
