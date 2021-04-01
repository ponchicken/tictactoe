import React from "../../../snowpack/pkg/react.js";
import {useGame} from "./useGame.js";
import styles from "./styles.module.css.proxy.js";
export const Game = () => {
  const game = useGame();
  return /* @__PURE__ */ React.createElement("div", {
    className: styles.wrapper
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles.controls
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: game.startNewGame
  }, "start new game"), /* @__PURE__ */ React.createElement("label", {
    className: styles.label
  }, /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    onChange: game.toggleAI,
    checked: game.isAIOn
  }), "with AI \u{1F916}")), game.winner ? /* @__PURE__ */ React.createElement("div", null, "winner: ", game.winner) : /* @__PURE__ */ React.createElement("div", null, "active player: ", game.activePlayer), /* @__PURE__ */ React.createElement("div", {
    className: styles.board
  }, game.board.map((item, i) => /* @__PURE__ */ React.createElement("button", {
    key: i,
    className: styles.item,
    onClick: () => game.makeAMove(game.activePlayer, i)
  }, item))));
};
