import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [passs, setPass] = useState("");

  const onLogin = () => {
    console.log(">>>>", email,passs);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onLogin();
      }}
    >
      <p>
        <label htmlFor="email">
          Email
          <input name="email" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label htmlFor="password">
          Password
          <input type={'Password'} name="password" onChange={(e) => setPass(e.target.value)} />
        </label>
      </p>
      <button>Submit</button>
    </form>
  );
};

export default LoginForm;
