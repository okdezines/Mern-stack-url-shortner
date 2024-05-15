import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import * as React from "react";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default App;
