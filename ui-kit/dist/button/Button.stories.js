"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Button = _interopRequireDefault(require("./Button"));

var _addonKnobs = require("@storybook/addon-knobs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var colorOptions = {
  green: "green",
  lightBlue: "lightBlue",
  purple: "purple",
  orange: "orange",
  grey: "grey",
  red: "red"
};
(0, _react2.storiesOf)("Button", module).add("Basic Button", function () {
  var color = (0, _addonKnobs.select)("color", colorOptions);
  var children = (0, _addonKnobs.text)("children", "submit");
  return _react.default.createElement(_Button.default, {
    color: color
  }, children);
});