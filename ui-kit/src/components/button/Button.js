import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const ButtonBase = styled.button`
    height: 50px;
    width: 200px;
    color: white;
    background-color: green;
    border-radius: 5px;
`

const Button = () =>{
    return <ButtonBase>Submit</ButtonBase>
}

export default Button