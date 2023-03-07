# flower-lover

Diploma

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Pre requirements

- `node.js`: `18.*`
- `yarn`: `1.22.*`

## Development

1. install `node`, `yarn`
2. run `yarn install` on repository root
3. run parallel:

```sh
yarn run watch:storybook
```

```sh
yarn run watch
```

## Production

Just merge the changes into the `main` branch.

### Manual deploy

1. run `yarn install --frozen-lockfile` on repository root.
2. run `yarn run build`

When the build is complete, serve the files from the `/build` directory using nginx as regular static files.

## Available Scripts

In the project directory, you can run:

### `yarn run postinstall`

Run husky.\
See the [documentation](https://typicode.github.io/husky/#/) for the `husky` package for details.

### `yarn run prettier`

Run prettier.\
See the [documentation](https://prettier.io/docs/en/cli.html) for the `prettier` package for details.

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run build:storybook`

Build storybook stories as static website.

### `yarn run watch`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn run watch:storybook`

Runs the storybook in the development mode.\
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

The page will reload if you make edits.

### `yarn run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run typecheck`

Run TypeScript typecheck.

### `yarn run lint`

Run eslint.

### `yarn run lint:fix`

Corrects the problems that eslint found.

### `yarn run test:storybook`

Storybook test runner turns all of your stories into executable tests. These tests run in a live browser and can be executed via the command line or your CI server.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
