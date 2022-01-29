/** @jsx createElement */
import { render, createElement } from "./react.js";

const Title = () => {
  return (
    <h2>
      <Description desc="설명 props">
        <div>하이1</div>
      </Description>
      <div>안에 div도 있구요</div>
      <span>span도 있어요</span>
    </h2>
  );
};

const Description = (props, ...children) => {
  console.log(props);
  return (
    <h2>
      {children}
      <div>설명의</div>
    </h2>
  );
};

render(<Title />, document.querySelector("#root"));
