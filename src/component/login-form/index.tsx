import { useState } from "react";

const LoginForm = () => {
  const [formState,setFormState]  = useState({
    email: '',
    password: '',
    remember_me: false
  })

  const onChangeHandler = (e: any) =>{
    const { name , value, type ,checked } = e.target;
    const controlValue = type === 'checkbox' ? checked: value
    setFormState({...formState,[name]:controlValue})
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
        <label htmlFor="checbox">
        Remember me
          <input type={'checkbox'} name="remember_me" onChange={onChangeHandler} />
        </label>
        <label htmlFor="dropdown">
         Sitename
          <select onChange={onChangeHandler} name='sitename'>
            <option value={'edureka.co'}>edureka.co</option>
            <option value={'edureka.in'}>edureka.in</option>
          </select>
        </label>
        <label htmlFor="gender">
         Gender
         Male
         <input type={'radio'} name="gender" value={"male"} onChange={onChangeHandler} />
         Female
         <input type={'radio'} name="gender" value={"female"} onChange={onChangeHandler} />
        </label>
      </p>
      <button>Submit</button>
    </form>
  );
};

export default LoginForm;
