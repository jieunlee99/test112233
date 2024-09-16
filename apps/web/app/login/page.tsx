"use client";

import { useState } from "react";

export default function Page() {
  const [result, setResult] = useState();
  console.log("fff", result);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const emailInput = event.currentTarget.elements.namedItem(
          "email"
        ) as HTMLInputElement;
        const passwordInput = event.currentTarget.elements.namedItem(
          "password"
        ) as HTMLInputElement;

        fetch(`http://localhost:3000/auth`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            email: emailInput.value,
            password: passwordInput.value,
          }),
        })
          .then((res) => {
            res.json().then((result) => {
              setResult(result);
            });
          })
          .catch((e) => {
            console.log("error", e);
          });
      }}
    >
      <input name="email" />
      <input type="password" name="password" />
      <button type="submit">Login</button>
      <pre style={{ whiteSpace: "pre-line" }}>{JSON.stringify(result)}</pre>
    </form>
  );
}
