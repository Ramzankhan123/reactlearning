import { useState } from "react";

const LoginForm = () => {
  const [formState,setFormState]  = useState({
    email: '',
    password: ''
  })

  const onChangeHandler = (e: any) =>{
    const { name , value } = e.target;
    setFormState({...formState,[name]:value})
  }

  const onLogin = () => {
    console.log(">>>>", formState);
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
          <input name="email" onChange={onChangeHandler} />
        </label>
        <label htmlFor="password">
          Password
          <input type={'Password'} name="password" onChange={onChangeHandler} />
        </label>
      </p>
      <button>Submit</button>
    </form>
  );
};

export default LoginForm;
