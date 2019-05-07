import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Button", module).add("Basic Button", () => {
  return <Button color={"orange"} >Submit</Button>;
});
