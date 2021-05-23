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

## Added Jest Testing Library

We have added jest inorder to test this project, we have installed packages `Jest`, `@testing-library/jest-dom`, `@testing-library/react`, and pluggin for esling lint called `eslint-plugin-jest`. In `eslintrc.json` file we have added both the env for jest and the installed jest plugin. We have created a `__tests__` folder inside the rootdir of the project which will contain all the test files for our project. And we have created a test file naming `index.spec.tsx`, which had a few issues like it was not able to find the absolute path of the `pages/index` and it was asking to add the missing file extension i.e tsx.

The absolute path problem was sorted out by creating a new config file for jest naming `jest.config.js`, in which we added a line called `moduleDirectories: ['node_modules', '.']` and for the missing extention file problem we added the import/extensions rule in the eslintrc.json file.

The code had a expect function called `tobeinthedocument()`, this function is not part of the jest library. So we installed the `@testing-library/jest-dom` package and imported the same into the project by creating a new setup fle for jest naming jestSetup.js and adding the line `import '@testing-library/jest-dom/extend-expect'`. This brought in a new error in the eslint state that this package should not be part of devDependencies, so we added another rule in eslintrc.json file i.e `import/no-extraneous-dependencies`. In order to run the tests, we have created two scripts one is test which will run the tests and another test:watch which will test as we are solving the problems.

## Added Github WorkFlow Actions

We have added gitbub workflow actions in our project by creating the .github directory and workflows directory inside it. In the workflow directory we added another file called main.yml which had a few yml commands that the github will use to test the project as soon as it gets pushed in the remote repository. The syntax of the yml file can be found [here](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions).

## Code Checking

We have performed code checking on the site [w3 Validator](https://validator.w3.org/). After performing the checking directly on the source code, we found out that our page needed a language info and a title. In order to achieve that we have created another tsx file inside the `pages` folder naming `_document.tsx`, we have got the information about it [here](https://nextjs.org/docs/advanced-features/custom-document). And copied the first example of the document. The eslint was showing some error regarding typechecking, we added two types as `DocumentContext` and `DocumentInitialProps` in the file, also the `render()` function was given the type of `ReactElement`.

We added `lang` attribute to the html element tag and in order to provide title, we have added head elememt in the `_app.tsx` file. The title of the project was taken from the `name` attribute present in the `package.json` file.

## Using Lighthouse

[Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en) is an open-source, automated tool for improving the performance, quality, and correctness of your web apps. We have used Lighthouse to get results out of our created websites. It had showed a little performance issue and also a little bit on Search Engine Optimization. There was suggestion in the results, that we should add `meta` tag for description in our project in order to improve our site's SEO. So we have added the same in the head of the `_api.tsx` file.
