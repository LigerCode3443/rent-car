import axios from "axios";

export const carsAoi = axios.create({
  baseURL: "https://667d4747297972455f645a2a.mockapi.io/rent_car",
});
