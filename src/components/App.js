import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App(props) {
  console.log(props);
  return (
    <div>
      <NavBar />
      <Home username="neets" city="melbourne"/>
      <About bio={"some writing"}/>
    </div>
  );
}

export default App;
