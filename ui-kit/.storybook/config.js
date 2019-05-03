import { configure } from '@storybook/react';

//uses webpacks require.context https://webpack.js.org/guides/dependency-management/#require-context
//directory to search, a flag indicating whether subdirectories should be searched too, and a regular expression to match files against

const req = require.context("../src", true, /\.stories\.js$/);

const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};


configure(loadStories, module);
