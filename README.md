# NagendraPortfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# personalWebsite

1. Prerequisites

1. Node js version 10.9.
2. Npm (version 8.x or 10.x).

a. Install NPM : node -v
b. install CLI : npm install -g @angular/cli
    ng -v
c.  create a new workspace and initial starter app: ng new Personal-Portfolio
d. run app: ng serve --open

Let’s go one by one and see what the purpose of each file and folder is.

e2e(end-to-end) — This folder contains test cases for testing the complete application along with its specific configuration files.
node_modules — This contains all the node modules used in the angular application.
src — Complete source code of the application resides in the src folder.
app — root component of the application.
assets — contains all the images or resources used in the application.
environments — contains build configuration environments of the application. We can create any target environment and specify its configuration here.
index.html — This is the main HTML page that is rendered when someone opens your website or application.
main.ts — This is the main entry point of the angular application which compiles the AppModule and renders the specified bootstrap component in the browser.
styles.css — Contains all the styles to be used globally in the application.
.editorconfig — This file is used for defining a consistent configuration.
angular.json — This file is mainly used for specifying the configuration of CLI. It includes configuration of build, serves, tests, lint, e2e commands which are used by @angular-cli.
karma.conf.js — This specifies the configuration for karma, which is used for testing angular applications.
package.json — Specifies all the project dependencies.
tsconfig.json — defines the configuration of TypeScript in the project.
tslint.json — defines TSLint configuration for the project. TSLint is an extensible static analysis tool for TypeScript.

Make sure to use sudo npm install -g npm if on a Mac. You can also update all outdated local packages by doing npm update without any arguments, or global packages by doing npm update -g

# Update node js
1. nove -v

2. install n package : sudo npm install -g n
3. update node js
    install stable node release: sudo n stable
    install/update latest node release
    install/update latest LTS node release




# Git
# Add your local project to new Github repo

git add .
git commit -m "Commit message"
git push origin main
git remote add origin https://github.com/NdagiStanley/new-repository.git
git branch -M `main`
git push -u origin `main`


# COMMANDS
create Service: ng g s serviceName
create Module: ng g m moduleName
