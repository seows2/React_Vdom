let data = "Hello World"; // (1)
const title = document.createElement("h1"); // (2)
document.body.appendChild(title); // (3)
title.textContent = data; // (4)

data = "안녕하세요"; // (1)
title.textContent = data; // (2)
