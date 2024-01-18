import axios from "axios";
import { apiDomain, tokenCybersoft } from "../constants/api_path";


export let https = axios.create({
  baseURL: apiDomain,
  headers: {
    TokenCybersoft:
      tokenCybersoft,
    Authorization:
      "bearer " + JSON.parse(localStorage.getItem("USER_INFOR"))?.accessToken,
  },
});
