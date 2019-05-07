import { configure, addDecorator } from '@storybook/react';
import { withInfo } from "@storybook/addon-info";

//uses webpacks require.context https://webpack.js.org/guides/dependency-management/#require-context
//directory to search, a flag indicating whether subdirectories should be searched too, and a regular expression to match files against

const req = require.context("../src", true, /\.stories\.js$/);

const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

//addon-info needs to be the first decorator or it gives info on previous decorator and not the component
addDecorator(
  withInfo({
    inline: true
  })
);

configure(loadStories, module);