import { api } from "../lib/api";
import { BudgetRequest } from "../models/budget-request";

interface FetchBudgetItemsResponse {
  data: BudgetRequest[];
}

export const fetchLogin = async () => {
  const response = await api.post("/login", 
    {
      "username": "admin",
      "password": "secret"
  }
  );
  const { data } = response.data;
  console.log(data); 
  return data;
};

export const fetchBudgetItems = async (): Promise<BudgetRequest[]> => {
  const response = await api.get<FetchBudgetItemsResponse>("/items");
  const { data } = response.data;
  return data;
};

// -------------------------------------

interface CreateBudgetItemRequest {
  title: string;
  quantity: number;
  amount: number;
  status?:string;
}

interface CreateBudgetItemResponse {
  data: BudgetRequest;
}

export const createBudgetItem = async (body: CreateBudgetItemRequest) => {
  const response = await api.post<CreateBudgetItemResponse>("/items", body);
  const { data } = response.data;
  return data;
};

export const updateBudgetItem = async (id: number, body: CreateBudgetItemRequest) => {
  const response = await api.put<CreateBudgetItemResponse>(`/items/${id}`, body);
  const { data } = response.data;
  return data;
};

export const patchBudgetItem = async (id: number, body: CreateBudgetItemRequest) => {
  const response = await api.patch<CreateBudgetItemResponse>(`/items/${id}`, body);
  const { data } = response.data;
  return data;
};
