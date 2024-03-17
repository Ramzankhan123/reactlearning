import { useState } from "react";
import Header from "./component/header";
import Footer from "./component/footer";
import { Route, Routes } from "react-router-dom";
import HomepageScreen from "./screens/homepage";
import LoginpageScreen from "./screens/loginpage";
import ErrorpageScreen from "./screens/errorpage";

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
      <main className="container mx-auto p-8">
        <Routes>
          <Route path="/" element={<HomepageScreen />} />
          <Route path="/login" element={<LoginpageScreen />} />
          <Route path="*" element={<ErrorpageScreen />} />{" "}
          {/* when there is not route found screen navigate to here */}
        </Routes>
      </main>
      {/* <LoginForm /> */}
      <Footer />
    </>
  );
}

export default App;
