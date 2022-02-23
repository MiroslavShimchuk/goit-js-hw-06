const inputNode = document.querySelector("#font-size-control");
const outNode = document.querySelector("#text");

inputNode.addEventListener("input", inputStatus);

outNode.setAttribute("style", `font-size: ${inputNode.value}px`);

function inputStatus(e) {
  outNode.setAttribute("style", `font-size: ${inputNode.value}px`);
}
