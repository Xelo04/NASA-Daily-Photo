import Main from "./components/Main";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Main></Main>
      {showModal && <SideBar />}
      <Footer></Footer>
    </>
  );
}

export default App;
