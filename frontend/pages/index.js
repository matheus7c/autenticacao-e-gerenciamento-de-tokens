import React from "react";
import { useRouter } from "next/router";
import { route } from "next/dist/server/router";

export default function HomeScreen() {
  const router = useRouter();
  const [values, setValues] = React.useState({
    user: "matheus",
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
        onSubmit={(event) => {
          event.preventDefault();
          router.push("/auth-page-ssr");
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
