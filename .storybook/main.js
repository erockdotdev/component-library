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
  webpackFinal: async config => {
    // remove default css rule from storybook
    config.module.rules = config.module.rules.filter(
      f => f.test.toString() !== "/\\.css$/"
    );

    // push our custom easy one
    config.module.rules.push({
      test: /\.css$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            // Key config
            modules: true,
          },
        },
      ],
    });
    // This is where we change the order of resolution of main fields
    config.resolve.mainFields = ["src", "module", "main"];

    // Return the altered config
    return config;
  },
};
export default config;
