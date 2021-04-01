
export let code = "._wrapper_a4rkj_1 {\n  display: grid;\n  grid-gap: 10px;\n}\n\n._controls_a4rkj_6 {\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: repeat(auto-fit, minmax(100px, max-content));\n  align-items: center;\n}\n\n._label_a4rkj_13 {\n  display: grid;\n  grid-gap: 5px;\n  grid-template-columns: repeat(auto-fit, minmax(10px, max-content));\n  align-items: center;\n}\n\n._label_a4rkj_13 input {\n  margin: 0;\n}\n\n._board_a4rkj_24 {\n  display: grid;\n  grid-template-columns: repeat(3, 50px);\n  grid-template-rows: repeat(3, 50px);\n  grid-gap: 5px;\n}\n\n._item_a4rkj_31 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  font-size: 30px;\n  background: #479;\n  border-radius: 6px;\n}\n\n._winner-item_a4rkj_41 {\n  background: rgb(124, 15, 15);\n}";
let json = {"wrapper":"_wrapper_a4rkj_1","controls":"_controls_a4rkj_6","label":"_label_a4rkj_13","board":"_board_a4rkj_24","item":"_item_a4rkj_31","winner-item":"_winner-item_a4rkj_41"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}