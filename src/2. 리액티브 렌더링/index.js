// 데이터를 가지는 상태 객체
const state = { _data: "Hello World" };

// 엘리먼트를 준비한다
const h1 = document.createElement("h1");
document.body.appendChild(h1);

// DOM에 변경된 내용을 반영하는 함수
const render = () => (h1.textContent = state.data);

// state.data 속성을 추가한다. 게터/세터를 만든다.
Object.defineProperty(state, "data", {
  get() {
    return state._data;
  },
  set(value) {
    state._data = value;
    render();
  },
});

// "Hello World" 가 그려진다
render();

setTimeout(() => {
  // state.data 값을 변경하는 것만으로 "안녕하세요"가 화면에 출력된다.
  state.data = "안녕하세요";
}, 2000);
