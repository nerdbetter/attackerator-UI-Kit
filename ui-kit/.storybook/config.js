import { configure, addDecorator } from '@storybook/react';
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";

//uses webpacks require.context https://webpack.js.org/guides/dependency-management/#require-context
//directory to search, a flag indicating whether subdirectories should be searched too, and a regular expression to match files against

const req = require.context("../src", true, /\.stories\.js$/);

const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

//addon-info needs to be the first decorator or it gives info on previous decorator and not the component
//these are global decorators and will apply to every story, most add-ons also allow you to apply just to specific stories or groups of stories. 
// https://github.com/storybooks/storybook/tree/master/addons/info
addDecorator(
  withInfo({
    inline: true
  })
);

// https://github.com/storybooks/storybook/tree/master/addons/knobs
addDecorator(withKnobs)



configure(loadStories, module);