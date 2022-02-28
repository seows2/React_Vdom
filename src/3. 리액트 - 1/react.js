const renderRealDOM = (vdom) => {
  const $el = document.createElement(vdom.tagName);
  return $el;
};

const render = (vdom, container) => {
  container.appendChild(renderRealDOM(vdom));
};

const createElement = (tagName, props, ...children) => {
  if (typeof tagName === "function") {
    return tagName(props, ...children);
  }
  return { tagName, props, children: children.flat() };
};

export { render, createElement };
