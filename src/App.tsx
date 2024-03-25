import Header from "./component/header";
import Footer from "./component/footer";
import { Route, Routes } from "react-router-dom";
import HomepageScreen from "./screens/homepage";
import LoginpageScreen from "./screens/loginpage";
import ErrorpageScreen from "./screens/errorpage";
import AlbumDetailpageScreen from "./screens/album-detail-page";
import CartpageScreen from "./screens/cartpage";
import { ThemeContext, ThemeOptions } from "./context/theme";
import { useContext } from "react";

function App() {
  const { theme } = useContext(ThemeContext);
  const bgTextColor =
    theme === ThemeOptions.dark
      ? "bg-gray-900 text-white"
      : "bg-white-900 text-black";

  return (
    <>
      <Header title="Awesome Music Store" />
      <main className={`container mx-auto p-0 ${bgTextColor}`}>
        <Routes>
          <Route path="/" element={<HomepageScreen />} />
          <Route path="/albums/:id" element={<AlbumDetailpageScreen />} />
          <Route path="/login" element={<LoginpageScreen />} />
          <Route path="/cart" element={<CartpageScreen />} />
          <Route path="/404" element={<ErrorpageScreen show="404" />} />
          <Route path="*" element={<ErrorpageScreen />} />

          {/* when there is not route found screen navigate to here */}
        </Routes>
      </main>
      {/* <LoginForm /> */}
      <Footer />
    </>
  );
}

export default App;
