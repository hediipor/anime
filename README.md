# Anime

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.0.
It fetches and displays information about anime using the Jikan API.The result resembles user-friendly interface for users to explore anime details.

## Setup Instructions

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Project Structure:

Under the /src/app we have our components :

### Models

1. anime.ts
   - a class for anime t
2. listResponseModel.ts
   - created to in-take data as array
3. responseModel.ts
   - created to in-take data of type anime

### services

1. anime.service.ts
   - This service fetches data from the API and route it to the other components to exploit as a `ResponseModel` or `ListResponseModel`
2. events.service.ts
   - This service give the other componentsthe ability to exploit `emit()` and `listen()` for events

### navi component

This component contains the html and the css code to style a navbar containig a hyperlink to the `anime component` and a searchbar that emits an event when clicked to send the searched anime name to the `anime component` to display the searched anime that the user seeks using a search method.

### anime component

This component contains the html and the css code to style a page which displays the animes from `animeList`which is updated through the `events.listen()` method to match what the user seeks.It utilises the `getAnimes()` method injected from `anime.service.ts`.
And when the user clicks on an anime image or title he will be directed to `anime-detail component`.

### anime-detail component

This component contains the html and the css code to style a page that shows the user details about the anime he selected on the `anime component` and it utilises the `getAnime()` method injected from `anime.service.ts`.
it also has a button, when clicked the method `goBack()` redirects the user the the `anime component`.
