# Organizer

[![build status](https://github.com/CodingForFunAndProfit/Organizer/workflows/Build%20and%20Deploy/badge.svg)](https://github.com/CodingForFunAndProfit/Organizer/actions)

## Technologies

-   angular, material, apollo, graphql, jwt, github actions

## Current Project features

-   Workflow: Work on feature branches -> pull request -> github actions lint, test, build and deploy to gh-pages
-   Login page // if no access token all pages redirect to /login
-   Dashboard // empty
-   Settings // Choose theme and mode
-   User administration // currently just a paged table

## TODOS

-   logging for problems like the login problem
-   register form
-   website
-   confirm user
-   refresh token
-   split admin components in featuremodul
-   role base authorization
-   settings (database -> localStorage -> Default Configfile )
-   tests for the current features
-   setup the corrent url for the api

## Things

// run a single test-file  
npm run test -- --include src/app/components/component/component-name.component.spec.ts  
// directory or bunch of files  
npm run test -- --include src/app/components

## to checkout

https://blog.w3radar.com/less-known-angular-features-probably-never-used/

-   Meta Service
-   Title Service
-   Location Service
-   @Attribute Decorator
-   NgPlural Directive
-   APP_INITIALIZER Token
-   APP_BOOTSTRAP_LISTENER Token
-   Content Projection with <ng-content>
    https://medium.com/claritydesignsystem/ng-content-the-hidden-docs-96a29d70d11b

https://itnext.io/improve-your-angular-apps-performance-66032f63dc09

https://www.chromium.org/developers/design-documents/form-styles-that-chromium-understands
https://blog.angular-university.io/debug-rxjs/
https://medium.com/angular-in-depth/total-guide-to-dynamic-angular-animations-that-can-be-toggled-at-runtime-be5bb6778a0a
https://dev.to/johncarroll/angular-how-to-easily-display-loading-indicators-4359
https://angular.io/guide/testing
https://typegraphql.com/docs/validation.html
https://www.apollographql.com/docs/apollo-server/data/errors/
https://www.codemag.com/Article/1711021/Logging-in-Angular-Applications
https://material.angular.io/components/snack-bar/overview
https://www.learnrxjs.io/learn-rxjs/operators/creation/throw
https://codecraft.tv/courses/angular/routing/parameterised-routes/
https://angular.io/tutorial/toh-pt5
https://www.apollographql.com/docs/angular/recipes/simple-example/
https://blog.angular-university.io/how-to-build-angular2-apps-using-rxjs-observable-data-services-pitfalls-to-avoid/
https://blog.angular-university.io/angular-2-rxjs-common-pitfalls/

## how parts work

Document each possible functionality of services/components/processes

### Login

-   show loginform
-   disable button without valid input
-   enable button with valid input
-   show field hints with invalid input
-   show login status (loading) when submitting
-   forward to certain page after successful login
-   show error message if something went wrong on the server side
