import { HttpClient } from "../../infra/HttpClient/HttpClient";
import { tokenService } from "./tokenService";

export const authService = {
  async login({ username, password }) {
    return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`, {
      method: "POST",
      body: {
        username,
        password,
      },
    }).then(async (res) => {
      if (!res.ok) throw new Error("Usuário ou senha inválida");
      const body = res.body;

      tokenService.save(body.data.access_token);
    });
  },
};
