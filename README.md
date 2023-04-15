
npx lerna@3.22.1 init

lerna link

## Troubleshooting

Packages not hoisting | Error: Cannot find module
lerna bootstrap --force-local && lerna link --force-local

Lerna Publish when pushing to npm but already pushed to git (Lerna 6)
Uncommit from the local repo and tag.

git reset --hard HEAD^
git tag -d v1.0.0
Remove the last commit and tag in the remote (Github) pushed by Lerna.

git push origin +HEAD
git push --delete origin v1.0.0
Retry lerna publish

lerna publish
## Storybook Staging
https://erockdotdev.github.io/component-library/

## Tutorials
[Writing your first React UI Library]
(https://dev.to/davixyz/writing-your-first-react-ui-library-part-1-lerna-17kc)



https://dev.to/shnydercom/monorepos-lerna-typescript-cra-and-storybook-combined-4hli



// these will all probably need to be removed when switching to TS
lerna add rollup --scope=@erockdotdev/phoenix-builder
lerna add @babel/core --scope=@erockdotdev/phoenix-builder
lerna add @babel/preset-env --scope=@erockdotdev/phoenix-builder
lerna add @babel/preset-react --scope=@erockdotdev/phoenix-builder
lerna add @rollup/plugin-babel --scope=@erockdotdev/phoenix-builder
lerna add @rollup/plugin-node-resolve --scope=@erockdotdev/phoenix-builder

// storybook
    @storybook/addon-actions@5.3.19 @storybook/addon-links@5.3.19 @storybook/addons@5.3.19 @storybook/react@5.3.19


    
