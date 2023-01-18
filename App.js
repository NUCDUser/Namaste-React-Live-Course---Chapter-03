import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import logo from "./static/VGB.png";
import user from "./static/blank.png";

// AS NATIVE

const header1 = React.createElement("h1", {}, "An H1 element");
const header2 = React.createElement("h2", {}, "An H2 element");
const header3 = React.createElement("h3", {}, "An H3 element");
const container = React.createElement(
  "div",
  { id: "container", className: "title" },
  [header1, header2, header3]
);

// AS JSX ELEMENT

const jsxElement = (
  <div id="container" className="title">
    <h1>An H1 element</h1>
    <h2>An H2 element</h2>
    <h3>An H3 element</h3>
  </div>
);

// AS A FUNCTION COMPONENT

const jsxFunctionComponent = (title) => (
  <div id="container" className="title">
    <h1>An H1 element</h1>
    <h2>An H2 element</h2>
    <h3>An H3 element</h3>
    <p>{title}</p>
  </div>
);

// COMPONENT COMPOSITION EXAMPLE

const JsxFunctionComponent2 = () => (
  <main id="main" className="main">
    {jsxFunctionComponent("A title to be rendered")}
  </main>
);

const HeaderComponent = () => (
  <nav className="nav">
    <img src={logo} height={32} width={32} />
    <div>
      <input type={"text"} name="search" placeholder="search"></input>
      <button>Search</button>
    </div>
    <img className="round" src={user} height={32} width={32}></img>
  </nav>
);

const MainComponent = () => (
  <>
    <HeaderComponent />
    <JsxFunctionComponent2 />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<MainComponent />);
