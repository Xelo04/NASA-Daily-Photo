import Main from "./components/Main";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleToggleModal() {
    if (showModal) {
      // Start the slideOut animation
      setIsAnimating(true);
      setTimeout(() => {
        setShowModal(false); // Unmount after animation
        setIsAnimating(false);
      }, 300); // Match the duration of the slideOut animation (0.3s)
    } else {
      setShowModal(true); // Show the sidebar
    }
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;

      const today = new Date().toDateString();
      const localKey = "NASA-${today}";
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        console.log("Fetched from cache\n", apiData);
        return;
      }
      localStorage.clear();

      try {
        const res = await fetch(url);
        const apiData = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        console.log("Fetched from API\n", apiData);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchAPIData();
  }, []);

  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {(showModal || isAnimating) && (
        <SideBar
          data={data}
          handleToggleModal={handleToggleModal}
          showModal={showModal}
          isAnimating={isAnimating}
        />
      )}
      {data && <Footer data={data} handleToggleModal={handleToggleModal} />}
    </>
  );
}

export default App;
