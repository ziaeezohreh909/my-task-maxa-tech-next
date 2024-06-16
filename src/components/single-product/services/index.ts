import { BASE_URL } from "@/constants/urls";
import axios from "axios";
import { IProduct, commentType } from "../hooks/types";
import { URL } from "../context";

function shuffleArray(array: IProduct[]): IProduct[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export async function getProductById(id: number): Promise<IProduct> {
  const res = await axios.get(BASE_URL + "/" + id);
  return res.data;
}

export async function getProductByCategory(
  category: string
): Promise<IProduct[]> {
  const res = await axios.get(`${BASE_URL}/?categoryName=${category}&_limit=7`);
  return shuffleArray(res.data);
}

export const getCommentData = async (): Promise<commentType[]> => {
  const response = await fetch(`${URL}/comments/`);
  if (!response.ok) {
    throw new Error("Failed to fetch comments");
  }
  return response.json();
};

export function getRandomSubset(
  arr: commentType[],
  size: number
): commentType[] {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, size);
}
