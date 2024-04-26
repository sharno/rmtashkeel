// @ts-check

function rmTashkeel() {
  let text = document.getElementById("input")?.value;
  text = text.replace(/([^\u0621-\u064A\u0660-\u0669a-zA-Z 0-9\r\n])/g, "");
  const output = document.getElementById("output");
  output.value = text;
}
