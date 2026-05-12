import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import FutureSelf from "./pages/FutureSelf/FutureSelf";

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

function App() {
  // console.log("Production or Dev mode?? :>> ", import.meta.env.MODE);
  return (
    <>
      {/* <AuthContextProvider>
        <MenuProvider> */}
      <BrowserRouter>
        <Routes>
          {/* //REVIEW the two routes for Home component are redundant */}
          <Route element={<Root />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/futureSelf" element={<FutureSelf />} />
            {/* <Route path="/registration" element={<Registration />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/sunsets" element={<Sunsets />} />
                <Route path="/sunsets/add" element={<AddSunset />} />
                <Route path="/sunsets/:id/update" element={<UpdateSunset />} />
                <Route path="/sunsets/:id" element={<DetailSunset />} />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />
                <Route path="*" element={<ErrorPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
      {/* </MenuProvider>
      </AuthContextProvider> */}
    </>
  );
}

export default App;
