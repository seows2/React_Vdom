const convertToReadlDOM = (vdom) => {
  if (typeof vdom === "string") return document.createTextNode(vdom);

  const $el = document.createElement(vdom.tagName);

  vdom.children.map(convertToReadlDOM).forEach((node) => {
    $el.appendChild(node);
  });

  return $el;
};

const render = (vdom, container) => {
  container.appendChild(convertToReadlDOM(vdom));
};

const createElement = (tagName, props, ...children) => {
  if (typeof tagName === "function") {
    return tagName(props, ...children);
  }
  return { tagName, props, children: children.flat() };
};

export { render, createElement };
