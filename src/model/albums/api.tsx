import { responseHandler } from "../utils";

export async function getAlbums(type: String) {
  const response = await fetch(`http://localhost:3000/${type}`);
  const json = await response.json();
  return json;
}

export async function getAlbum(id : String | undefined) {
  try {
    const response = await fetch(`http://localhost:3000/albums/${id}`);
    return await responseHandler(response);
  } catch (error) {
    throw new Error("api not found");
  }
}