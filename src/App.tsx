import {useState} from "react";
import Header from "./component/header";
import Footer from "./component/footer";

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
      <Footer counter={counter} />
    </>
  );
}

export default App;
