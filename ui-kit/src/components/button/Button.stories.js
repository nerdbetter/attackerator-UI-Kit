import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";
import { text, select } from "@storybook/addon-knobs";

const colorOptions = {
  green: "green",
  lightBlue: "lightBlue",
  purple: "purple",
  orange: "orange",
  grey: "grey",
  red: "red"
};

storiesOf("Button", module).add("Basic Button", () => {
  const color = select("color", colorOptions);
  const children = text("children", "submit");
  return <Button color={color}>{children}</Button>;
});
