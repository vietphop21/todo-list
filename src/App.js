import "./App.css";
import { Header } from "./Header/header";
import { ListAdmin } from "./ListAdmin/listAdmin";
import ListMenu from "./ListMenu/listMenu";

function App() {
  return (
    <>
      <Header />
      <ListMenu />
      <ListAdmin />
    </>
  );
}

export default App;
