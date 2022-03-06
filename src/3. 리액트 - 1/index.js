/** @jsx createElement */
import { render, createElement, Component } from "./react.js";

class TitleClass extends Component {
  render() {
    return <h2>리얼돔으로 바꿔죠</h2>;
  }
}

const Title = () => {
  return (
    <div>
      <TitleClass />
      <div>divdiv</div>
    </div>
  );
};

render(<Title />, document.querySelector("#root"));
