/* @jsx createElement */
import { createElement } from "./react.js";

const Title = () => {
  return <div className="title">hello</div>;
};

createElement(<Title />, document.querySelector("#root"));
