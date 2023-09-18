# AngularProgramme
Angular Learning Programme

## Introduction
Angular is web application framework and was built in 2012 on top of Javascript(ES5). To make webpages are independent if any part of information is required to change from backend response then entire page needs to be refreshed. Using Javascript/Angular we can only refresh part of web page. 
Angular has several versions of its latest releases and the current one is 16.0. 
Angular 1.0 to 1.7 is used to call as Angular JS and then later major changes are added to this programe renamed as Angular 2+ version in 2016 second half.

Angular is a combination of TypeScript, ES6(Advanced Java Script) and ES5(Java Script).
1. TypeScript : Superset of ES6 and Supports for Types and Annotations
2. ES6 : Superset of ES5 and Supports for Classes and Modules
3. ES2: Basic Javascript features

### Angular CLI
1. CLI is a Code generator
2. it's a Development tools set like build, Local server, auto-refresh
3. It's Set of build tools like complier, lint, minfy etc for compiling and deployments
4.  As this very helpful for testing Angular code
## Angular Commands
ng serve :  Is a basic command in Angular and identifies TypeScript, compile and then start webserver. Webserver automatically compiles and made available new changes without redeploying an application.
ng generate component <compoenent-name>: Is to generate a compoenent in current project
ng new <project-name> : To create a new project
ng build: To build a project
Follow below url for more cli commands
https://angular.io/cli

## Angular Topics are like
1. Component(@Component)
2. Model(ngModel) : used for two way data binding
3. Directives(@Directive)
4. Switch(ngSwitch)
5. list(ngFor)
6. if(ngIf)
7. Routers
8. bindings
9. Module(@ngModule)
10. Service (@Injectable())
11. Pipes(@Pipes)

ng generate component <component-name> 
 
1. component name as directory in your app
2. Generates an componnet typescipt class as <component-name>.component.ts
3. generates HTML template as <component-name>.component.html
4. Generates a CSS file as <component-name>.component.css
5. a testing specifiation file as <component-name>.component.sepc.ts

To define a component use @component decorator

Approach 1 for TemplateURL and styelURL
-----------------------
import { Component } '@angular/core'

@Component({
   Selector: 'app-<component-name>',
   templateURL: './<component-name>.component.html',
   styleURL: ['./<component-name>.component.css']

})
export class <component-name>Component{

}


Approach 2 for deifining "template" and styleURL
==================================
import { Component } '@angular/core'

@Component({
   selector: 'app-<component-name>',
   template: '<h2>Hello-world</h2>',
   styleURL: ['./<component-name>.component.css']

})

export class <component-name>Component{

}

Approach 3 for defining style
=============================
import { Component } '@angular/core'

@Component({
   selector: 'app-<component-name>',
   template: '<h2>Hello-world</h2>',
   style: ['h1 { font-weight: normal; }']

})

export class <component-name>Component{

}

LifeCycle of Component and Directives
=====================================
Life Cycle of Compoenent is start from Angular to initiate, to detect any changes in componenets and then untill it destros. Directive has alos similar lifecycle of Components like Create(Initiate), update and destroy execution.

Can apply LifeCycel hook methods to tap (perform) into any key events in the lifecycle of Component or Directive to initiate new instances, to detect change when needed and respond to updates during a chang detect and before cleanup(deletion) instances. 

LifeCycle Hook Method
---------------------
An interface that allows you to tap into the lifecycle of Component and Directive like Create, update and destroy life cycle.

Each interface as has one single hook method and its name start with "ng". Fo example an interface "OnInit" has single hook method called "ngOnInit()".

1. ngOnChnages()  		-> Any change detected on Input and Output bindings
2. ngOnInit()    		-> Afetr the first ngOnChanges()
3. ngDoCheck(0   		-> Develper custome change detection
4. ngAfterContentInit 	-> After Component contect initialization
5. ngAfterContentCheck  -> After every check of Component content
6. ngAfterViewInit      -> After Component view Initialization
7. ngAfterViewCheck     -> After Every check of Views of the component
8. ngOnDestroy   		-> Just before the directive is destroyed
