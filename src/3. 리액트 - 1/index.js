/** @jsx createElement */
import { render, createElement } from "./react.js";

const Title = () => {
  return (
    <div>
      <h2>리얼돔으로 바꿔죠</h2>
      <div>divdiv</div>
    </div>
  );
};

render(<Title />, document.querySelector("#root"));
