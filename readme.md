Packages:

- @babel/core: The core or main package that is needed to use Babel in the project.
- @babel/cli: Allow to use Babel to compile files directly from the command line.
- @babel/preset-env: Used to convert ES6 JavaScript syntax into backward versions of JavaScript supported by older browsers.
- @babel/preset-react: Used to convert React syntax (jsx) into backward versions of JavaScript supported by older browsers.
- webpack: The actual package that enable to use webpack in the project.
- webpack-cli: Allow to run webpack commands in the command line.
- webpack-dev-server: Webpack server will act as server in development.
- html-webpack-plugin: HtmlWebpackPlugin simplifies creation of HTML files to serve webpack bundles.
- react: The actual react package that enables to use react in the project.
- react-dom: Serves as the entry point to the DOM and server renderers for React. It is intended to be paired with the react package.
- eslint: A lint for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- prettier: Code formatter that styles code consistently. It is supports HTML, CSS, Javascript, and most of their libraries.
- eslint-config-prettier: Turns off all eslint rules that are unnecessary or might conflict with Prettier and to make sure that eslint only check code syntax style while Prettier check code formatting.
- eslint-import-resolver-webpack: Resolve paths to dependencies, given a webpack.config.js.
- @testing-library/react: The core dependency that install react testing library.
- @testing-library/jest-dom: A virtual DOM for jest allow to use custom jest matchers to extend jest with react testing library.
- jest: the core dependency required for Jest to work.
- jest-environment-jsdom: To allow to use jsdom and will use it together with @testing-library/jest-dom.
- eslint-plugin-jest: To make sslint recognise jest code.
- tailwindcss: A core package that installs Tailwind CSS.
- autoprefixer: A PostCSS plugin that Tailwind CSS uses to automatically adds vendor prefixes to write styles supported by all browsers.
- postcss: A tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.
- style-loader: used by webpack to inject CSS into the DOM.
- css-loader: used by webpack to interprets and resolve imports in CSS
- postcss-loader: used by webpack to process PostCSS as we installed PostCSS earlier.

Configuration

- ESLint: On this project, the ESLint configured using Airbnb JavaScript styles by `npm init @eslint/config`.

- Husky and pre-commit: Allows to work with Git hooks. Git hooks are scripts that can set up to run at certain events in the Git lifecycle like before every commit or push. On this project, pre-commit and Husky configured using `lint-staged`.

- Storybook: a development tool that lets you run and test your UI components without a complete React environment for component-driven development.

Concept and Methodology

- Atomic Design
- Component-Driven Development (CDD)
