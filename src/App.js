import React from "react";
import InitialDisplay from "./InitialDisplay";
import Header from './Header';
import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <InitialDisplay />
      <Header />
    </div>
  );
}
