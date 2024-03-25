import Header from "./component/header";
import Footer from "./component/footer";
import { Route, Routes } from "react-router-dom";
import HomepageScreen from "./screens/homepage";
import LoginpageScreen from "./screens/loginpage";
import ErrorpageScreen from "./screens/errorpage";
import AlbumDetailpageScreen from "./screens/album-detail-page";
import CartpageScreen from "./screens/cartpage";

function App() {
  return (
    <>
      <Header
        title="Awesome Music Store"
      />
      <main className="container mx-auto p-8">
        <Routes>
          <Route path="/" element={<HomepageScreen />} /> 
          <Route path="/albums/:id" element={<AlbumDetailpageScreen />} />
          <Route path="/login" element={<LoginpageScreen />} />
          <Route path="/cart" element={<CartpageScreen />} />
          <Route path="/404" element={<ErrorpageScreen show="404"/>} />
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
