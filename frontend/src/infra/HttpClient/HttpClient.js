// Arquitetura Hexagonal (Ports & Adapters)
export async function HttpClient(fetchURL, fetchOptions) {
  return fetch(fetchURL, {
    // Requisição para o servidor
    ...fetchOptions,
    body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null,
    headers: {
      "Content-Type": "application/json",
      ...fetchOptions.headers,
    },
  }).then(async (res) => {
    return {
      // Retorno do Servidor
      ok: res.ok,
      status: res.status,
      body: await res.json(),
    };
  });
}
