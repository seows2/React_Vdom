const render = (component, container) => {
  console.log(component);
};

const createElement = (tagName, props, ...children) => {
  if (typeof tagName === "function") {
    return tagName(props, ...children);
  }
  return { tagName, props, children: children.flat() };
};

export { render, createElement };
