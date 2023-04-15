
npx lerna@3.22.1 init

lerna link

## Troubleshooting

Packages not hoisting | Error: Cannot find module
lerna bootstrap --force-local && lerna link --force-local

https://dev.to/shnydercom/monorepos-lerna-typescript-cra-and-storybook-combined-4hli

https://dev.to/davixyz/writing-your-first-react-ui-library-part-1-lerna-17kc

// these will all probably need to be removed when switching to TS
lerna add rollup --scope=@erockdotdev/phoenix-builder
lerna add @babel/core --scope=@erockdotdev/phoenix-builder
lerna add @babel/preset-env --scope=@erockdotdev/phoenix-builder
lerna add @babel/preset-react --scope=@erockdotdev/phoenix-builder
lerna add @rollup/plugin-babel --scope=@erockdotdev/phoenix-builder
lerna add @rollup/plugin-node-resolve --scope=@erockdotdev/phoenix-builder

// storybook
    @storybook/addon-actions@5.3.19 @storybook/addon-links@5.3.19 @storybook/addons@5.3.19 @storybook/react@5.3.19
