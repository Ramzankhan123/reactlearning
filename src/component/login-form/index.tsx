import { useState } from "react";

const LoginForm = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    remember_me: false,
  });
  const [isValid, setIsValid] = useState(null);

  const validate = (formValue) => {
    const errors = {};

    if (formValue.email === "") {
      errors["email"] = "Email is required";
    }

    if (!formValue.email.includes("@")) {
      errors["email"] = "Email is not valid";
    }

    if (formValue.password === "") {
      errors["password"] = "Password is required";
    }

    if (Object.keys(errors).length > 0) {
      setIsValid(errors);
    } else {
      setIsValid(null);
    }
  };

  const onChangeHandler = (e: any) => {
    const { name, value, type, checked } = e.target;
    const controlValue = type === "checkbox" ? checked : value;
    const formValue = { ...formState, [name]: controlValue };
    setFormState(formValue);
    validate(formValue);
  };

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
          {isValid?.["email"] && <span className="text-red-600">{isValid?.["email"]}</span>}
        </label>
        <label htmlFor="password">
          Password
          <input type={"Password"} name="password" onChange={onChangeHandler} />
          {isValid?.["password"] && <span className="text-red-600">{isValid?.["password"]}</span>}
        </label>
        <label htmlFor="checbox">
          Remember me
          <input
            type={"checkbox"}
            name="remember_me"
            onChange={onChangeHandler}
          />
        </label>
        {/* <label htmlFor="dropdown">
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
        </label> */}
      </p>
      <button disabled={!!isValid}>Submit</button>
    </form>
  );
};

export default LoginForm;
