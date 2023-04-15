/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../packages/phoenix-*/stories!(/components)**/*?!(/node_modules)(.stories).@(js|jsx|ts|tsx)",
  ],
  //../packages/mystuff-*/stories!(/components)/**/*?(.stories).@(js|jsx|ts|tsx|mdx)
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
