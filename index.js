// @ts-check

function rmTashkeel() {
  let text = document.getElementById("input")?.value;
  text = text.replace(/([\u064B-\u0652])/g, "");
  const output = document.getElementById("output");
  output.value = text;
}
