import {useState} from "react";
import Header from "./component/header";
import Footer from "./component/footer";
import Left from "./component/left";
import LoginForm from "./component/login-form";

function App() {
  const [counter, setCounter] = useState(0);

  const counterOnePlus = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <Header
        counterChange={counterOnePlus}
        title="Awesome Music Store"
        date={new Date().toISOString()}
      />
      <LoginForm />
      <Footer counter={counter} />
      {/* <Left/> */}
    </>
  );
}

export default App;
