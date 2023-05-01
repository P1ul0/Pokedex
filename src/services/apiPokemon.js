import axios from "axios";

export const url = "https://pokeapi.co/api/v2/"

export const apiPokemon = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json"
  }
})