import { CocheTaller } from "@/interfaces/CocheTaller";
import { AxiosResponse } from "axios";
import axios from "./axios";

export const getCochesTaller = async (): Promise<AxiosResponse<CocheTaller[]>> =>
  await axios.get("/cocheTaller");

export const getCocheTaller = async (id: string): Promise<AxiosResponse<CocheTaller>> =>
  await axios.get(`/cocheTaller/${id}`);

export const createCocheTaller= async (cocheTaller: CocheTaller): Promise<AxiosResponse> =>
  await axios.post("/cocheTaller", cocheTaller);

export const updateCocheTaller = async (
  id: string,
  newCocheTaller: CocheTaller
): Promise<AxiosResponse<CocheTaller>> => await axios.put(`/cocheTaller/${id}`, newCocheTaller);

export const deleteCocheTaller = async (id: string): Promise<AxiosResponse> =>
  await axios.delete(`/cocheTaller/${id}`);
