# SosPageStyleChExtension

This application is an chrome extension starter for angular using [yarn 2](https://yarnpkg.com/getting-started).

## Installation
Angular CLI >= 9.0 does not natively support Yarn 2.0
1. Create a new angular project: `ng new sos-page-style-ch-extension --skip-install` or `yarn add @angular/core @angular/common @angular/compiler @angular/platform-browser @angular/platform-browser-dynamic @angular/router`
2. Install the workspace dependencies using Yarn 2: `yarn` or `yarn install`
3. Generate yarn configuration (for yarn v2): `yarn set version berry`
4. Install the pnpify package: `yarn add -D @yarnpkg/pnpify`
5. Unplug all Angular related packages including third-party libraries used within the application via `yarn unplug @angular`.
6. [Optional] If using the E2E command: `yarn unplug webdriver-manager`
7. Update scripts of package.json file: `yarn pnpify ng build` or `yarn pnpify ng serve`, respectively.
```
"scripts": {
    "ng": "yarn pnpify ng",
    "start": "yarn pnpify ng serve",
    "build": "yarn pnpify ng build",
    "watch": "yarn pnpify ng build --watch --configuration development",
    "test": "yarn pnpify ng test"
}
```
8. Add `manifest.json` file inside `/src, edit `angular.json` file to dist. 
9. [Material UI](https://material.angular.io/guide/getting-started) `ng add @angular/material` 
10 optional, Adding SaSS support `ng add schematics-scss-migrate`

## Build

Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
