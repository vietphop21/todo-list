import { useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import { FooterButton } from "./FooterButton";
import { Header } from "./Header/header";
import ListMenu from "./ListMenu/listMenu";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/danh-sach-admin") {
      navigate("/danh-sach-admin");
    }
  }, [location, navigate]);

  return (
    <>
      <Header />
      <ListMenu />
      <FooterButton />
    </>
  );
}

export default App;
