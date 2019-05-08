import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const colors = {
    green: "#b7bf10",
    lightBlue: "#009cde",
    purple: "#84329b",
    orange: "#eaaa00",
    grey: "#777777",
    red: "#b7312c"
  };

const ButtonBase = styled.button`
  height: 50px;
  width: 200px;
  color: white;
  background-color: ${({ color }) => colors[color]};
  border-radius: 5px;
`;

const Button = ({type, onCick, color, children}) => {
  return (
    <ButtonBase type={type} color={color} onClick={onCick}>
      {children}
    </ButtonBase>
  );
};

Button.propTypes = {
  /** button type */
  type: propTypes.oneOf(["button", "submit", "reset"]),
  /** click event - not required for submit or reset if contained within a form */
  onClick: propTypes.func,
  /** color "lightBlue", "green", "orange", "purple", "grey", "red" */
  color: propTypes.oneOf(["lightBlue", "green", "orange", "purple", "grey", "red"]),
  /** button child */
  children: propTypes.oneOfType([propTypes.element, propTypes.string])
    .isRequired,

};

Button.defaultProps = {
  type: "button",
  color: "green",
  onClick: () => {}
};

export default Button;
