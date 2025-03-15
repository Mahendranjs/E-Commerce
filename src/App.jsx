import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./modules/layout/Header";
import Body from "./modules/layout/Body";
import Footer from "./modules/layout/Footer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="flex flex-col h-screen">
      <Header setSearchTerm={(text) => setSearchTerm(text)} />
      <Body searchTerm={searchTerm} />
      <Footer />
    </div>
  );
}

export default App;
