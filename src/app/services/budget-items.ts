import { api } from "../lib/api";
import { BudgetRequest, UsersRequest } from "../models/budget-request";

interface FetchBudgetItemsResponse {
  data: BudgetRequest[];
}

interface FetchUserResponse {
  data: UsersRequest[];
}

interface IUserLogin {
  username: string;
  password: string;
}

export const fetchLogin = async (body: IUserLogin) => {
  const response = await api.post("/users/login", body);
  const { data } = response.data;
  return data;
};
export const fetchLogined = async () => {
  const response = await api.get<FetchUserResponse>("/users");
  const { data } = response.data;
  
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
  status?: string;
}

interface CreateBudgetItemResponse {
  data: BudgetRequest;
}

export const createBudgetItem = async (body: CreateBudgetItemRequest) => {
  const response = await api.post<CreateBudgetItemResponse>("/items", body);
  const { data } = response.data;
  return data;
};

export const updateBudgetItem = async (
  id: number,
  body: CreateBudgetItemRequest
) => {
  const response = await api.put<CreateBudgetItemResponse>(
    `/items/${id}`,
    body
  );
  const { data } = response.data;
  return data;
};

export const patchBudgetItem = async (
  id: number,
  body: CreateBudgetItemRequest
) => {
  const response = await api.patch<CreateBudgetItemResponse>(
    `/items/${id}`,
    body
  );
  const { data } = response.data;
  return data;
};
