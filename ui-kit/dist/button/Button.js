"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 50px;\n  width: 200px;\n  color: white;\n  background-color: ", ";\n  border-radius: 5px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var colors = {
  green: "#b7bf10",
  lightBlue: "#009cde",
  purple: "#84329b",
  orange: "#eaaa00",
  grey: "#777777",
  red: "#b7312c"
};

var ButtonBase = _styledComponents.default.button(_templateObject(), function (_ref) {
  var color = _ref.color;
  return colors[color];
});

var Button = function Button(_ref2) {
  var type = _ref2.type,
      onCick = _ref2.onCick,
      color = _ref2.color,
      children = _ref2.children;
  return _react.default.createElement(ButtonBase, {
    type: type,
    color: color,
    onClick: onCick
  }, children);
};

Button.propTypes = {
  /** button type */
  type: _propTypes.default.oneOf(["button", "submit", "reset"]),

  /** click event - not required for submit or reset if contained within a form */
  onClick: _propTypes.default.func,

  /** color "lightBlue", "green", "orange", "purple", "grey", "red" */
  color: _propTypes.default.oneOf(["lightBlue", "green", "orange", "purple", "grey", "red"]),

  /** button child */
  children: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.string]).isRequired
};
Button.defaultProps = {
  type: "button",
  color: "green",
  onClick: function onClick() {}
};
var _default = Button;
exports.default = _default;