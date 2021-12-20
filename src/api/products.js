import axios from "axios";

export async function getProductsByPage(page) {
  try {
    const response = await axios.get(
      `https://veterinaria-web-server-rest.herokuapp.com/producto/listaByPage/${
        page > 0 ? page : 0
      }`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
