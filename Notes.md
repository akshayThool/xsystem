# Notes

## Repo Maintenance

Everytime try updating the packages in our project in order to have the latest available versions of all the dependencies. The link to the `npm outdate` is [here](https://docs.npmjs.com/cli/v7/commands/npm-outdated).
Once all the packages are found out which are not in their latest version form, they can be updated by using the command `npm update`. More info about it can be found [here](https://docs.npmjs.com/cli/v7/commands/npm-update).

## Added Max line Rule

Using Eslint Max lines rule, we have added another rule in the rule section of eslintrc.json file, where in the rule states `"max-lines": ["error", 80]`, which states that the maximum number of lines a particular file would have would be 80.

## Sorting the imports

We have also added extra eslint guidelines in our project using the package [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort), which basically order the imports and exports in the files.

## Added Sass Guidelines

We have also added Sass guidelines in our project using the [stylelint-config-sass-guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines). This configs the sass guidelines properly with the stylelint.

## Added Husky pre-commit hook support

[Husky](https://github.com/typicode/husky) is a tool that allows us to easily wrangle Git hooks and run the scripts we want at those stages. It works by including an object right within our package. json file that configures Husky to run the scripts we specify. After that, Husky handles managing at which point in the Git lifecycle our scripts will run.

## How to run eslint with --fix

Use command `npm run eslint -- --fix`
