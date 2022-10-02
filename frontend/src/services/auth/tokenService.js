import nookies from "nookies";

export const tokenService = {
  save(acessToken, ctx = null) {
    globalThis?.sessionStorage.setItem("ACCESS_TOKEN_KEY", acessToken);
    globalThis?.localStorage.setItem("ACCESS_TOKEN_KEY", acessToken);
    nookies.set(ctx, "ACCESS_TOKEN_KEY", acessToken, {
      maxAge: 1 * 60 * 60 * 24 * 365, //Um ano
      path: "/",
    });
  },
  get(ctx = null) {
    // return globalThis?.sessionStorage?.getItem("ACCESS_TOKEN_KEY");
    const cookies = nookies.get(ctx);
    return cookies["ACCESS_TOKEN_KEY"] || "";
  },
  delete(ctx = null) {
    globalThis?.sessionStorage?.removeItem("ACCESS_TOKEN_KEY");
    globalThis?.localStorage?.removeItem("ACCESS_TOKEN_KEY");
    nookies.destroy(ctx, "ACCESS_TOKEN_KEY");
  },
};
