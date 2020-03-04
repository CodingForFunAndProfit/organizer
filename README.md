# Organizer

ng new Organizer

-   routing
-   scss

ng add @angular/material

ng generate m shared/material

problem:
@angular/material/index.d.ts' is not a module.

found: Components can no longer be imported through "@angular/material".
Use the individual secondary entry-points, such as @angular/material/button.

problem: vscode & prettier autoformat singlequotes -> typescript error
solution: prettierrc

npm install --save-dev rimraf
and buildscripts:
"scripts": {
"clean": "rimraf ./dist",
"ng": "ng",
"start": "ng serve",
"build": "ng build",
"build:prod": "ng build --prod",
"test": "ng test",
"lint": "ng lint",
"e2e": "ng e2e",
"build:ci": "npm run clean && npm run test && npm run build:prod"
},
