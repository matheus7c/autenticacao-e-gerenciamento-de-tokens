import React from "react";
import { useRouter } from "next/router";
import { route } from "next/dist/server/router";
import { authService } from "../src/services/auth/authService";

export default function HomeScreen() {
  const router = useRouter();
  const [values, setValues] = React.useState({
    user: "matheus7c",
    pwd: "123456",
  });

  function handleChange(event) {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    setValues((currentValue) => {
      return { ...currentValue, [fieldName]: fieldValue };
    });
  }

  return (
    <div>
      <h1>Login</h1>
      <form
        //Controller -> onSubmit (pega dados e envia para um serviço)
        // Serviço -> authService
        onSubmit={(event) => {
          event.preventDefault();
          authService
            .login({
              username: values.user,
              password: values.pwd,
            })
            .then(() => {
              router.push("/auth-page-ssr");
            })
            .catch(() => {
              alert("Usuário ou senha estão inválidos");
            });
        }}
      >
        <input
          placeholder="Usuário"
          name="user"
          value={values.user}
          onChange={handleChange}
        />
        <input
          placeholder="Senha"
          name="pwd"
          type="password"
          value={values.pwd}
          onChange={handleChange}
        />
        {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
        <div>
          <button>Entrar</button>
        </div>
      </form>
    </div>
  );
}
