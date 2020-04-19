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
