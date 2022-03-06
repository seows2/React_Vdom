class Component {
  render() {
    return "";
  }
}

const convertToReadlDOM = (vdom) => {
  if (typeof vdom === "string") return document.createTextNode(vdom);

  const $el = document.createElement(vdom.tagName);

  vdom.children.map(convertToReadlDOM).forEach((node) => {
    $el.appendChild(node);
  });

  return $el;
};

const render = (function () {
  let prevVdom = null;

  return function (nextVdom, container) {
    if (prevVdom === null) {
      prevVdom = nextVdom;
    }

    // 재조정 알고리즘

    container.appendChild(convertToReadlDOM(nextVdom));
  };
})();

const createElement = (tagName, props, ...children) => {
  if (typeof tagName === "function") {
    if (tagName.prototype instanceof Component) {
      const instance = new tagName({ props, ...children });
      return instance.render();
    } else {
      return tagName(props, ...children);
    }
  }
  return { tagName, props, children: children.flat() };
};

export { render, createElement, Component };
