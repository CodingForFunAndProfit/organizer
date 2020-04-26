function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){return function(){var e,r=_getPrototypeOf(t);if(_isNativeReflectConstruct()){var n=_getPrototypeOf(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return _possibleConstructorReturn(this,e)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _createForOfIteratorHelper(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=_unsupportedIterableToArray(t))){var e=0,r=function(){};return{s:r,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,a=!0,i=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){i=!0,o=t},f:function(){try{a||null==n.return||n.return()}finally{if(i)throw o}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{vBIj:function(t,e,r){"use strict";r.r(e),r.d(e,"FrontendModule",(function(){return G}));var n,o,a,i,s=r("ofXK"),c=r("tyNb"),u=r("fXoL"),l=r("lGQG"),f=r("Wp6s"),p=r("wZkO"),b=r("mrSG"),h=r("3Pt+"),g=r("kmnG"),m=r("qFsG"),y=r("NFeN"),v=r("bTqV"),d=((n=function(){function t(e,r,n){_classCallCheck(this,t),this.authService=e,this.formBuilder=r,this.router=n,this.loginForm=this.formBuilder.group({email:["",h.o.required],password:["",h.o.required]})}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"login",value:function(){return Object(b.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.authService.login(this.loginForm.value.email,this.loginForm.value.password);case 2:this.router.navigate(["/dashboard"]);case 3:case"end":return t.stop()}}),t,this)})))}},{key:"logout",value:function(){this.authService.logout()}}]),t}()).\u0275fac=function(t){return new(t||n)(u.Pb(l.a),u.Pb(h.c),u.Pb(c.a))},n.\u0275cmp=u.Jb({type:n,selectors:[["app-login"]],decls:17,vars:2,consts:[[1,"standaloneForm",3,"formGroup","ngSubmit"],["appearance","fill",1,"fw"],["matInput","","type","email","formControlName","email","autocomplete","username"],["email",""],["matSuffix",""],["matInput","","type","password","formControlName","password","autocomplete","current-password"],["password",""],["mat-raised-button","","color","accent","type","submit",1,"fw",3,"disabled"]],template:function(t,e){1&t&&(u.Vb(0,"form",0),u.dc("ngSubmit",(function(){return e.login()})),u.Vb(1,"mat-form-field",1),u.Vb(2,"mat-label"),u.Ac(3,"Email"),u.Ub(),u.Qb(4,"input",2,3),u.Vb(6,"mat-icon",4),u.Ac(7,"email"),u.Ub(),u.Ub(),u.Vb(8,"mat-form-field",1),u.Vb(9,"mat-label"),u.Ac(10,"Enter your password"),u.Ub(),u.Qb(11,"input",5,6),u.Vb(13,"mat-icon",4),u.Ac(14,"visibility_off"),u.Ub(),u.Ub(),u.Vb(15,"button",7),u.Ac(16," Login "),u.Ub(),u.Ub()),2&t&&(u.mc("formGroup",e.loginForm),u.Cb(15),u.mc("disabled",!e.loginForm.valid))},directives:[h.p,h.k,h.e,g.b,g.e,m.a,h.b,h.j,h.d,y.a,g.f,v.a],styles:[""]}),n),w=function(t){return t[t.All=0]="All",t[t.Debug=1]="Debug",t[t.Info=2]="Info",t[t.Warn=3]="Warn",t[t.Error=4]="Error",t[t.Fatal=5]="Fatal",t[t.Off=6]="Off",t}({}),_=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_classCallCheck(this,t),Object.assign(this,e)}return _createClass(t,[{key:"toLogString",value:function(){var t="";return this.logWithDate&&(t=new Date+" - "),t+="Type: "+w[this.level],t+=" - Message: "+this.message,this.extraInfo.length&&(t+=" - Extra Info: "+this.formatParams(this.extraInfo)),t}},{key:"formatParams",value:function(t){var e=t.join(",");if(t.some((function(t){return"object"==typeof t}))){e="";var r,n=_createForOfIteratorHelper(t);try{for(n.s();!(r=n.n()).done;){var o=r.value;e+=JSON.stringify(o)+","}}catch(a){n.e(a)}finally{n.f()}}return e}}]),t}(),k=r("LRne"),C=function t(){_classCallCheck(this,t)},O=function(t){_inherits(r,t);var e=_createSuper(r);function r(){return _classCallCheck(this,r),e.apply(this,arguments)}return _createClass(r,[{key:"log",value:function(t){return console.log(t.toLogString()),Object(k.a)(!0)}},{key:"clear",value:function(){return console.clear(),Object(k.a)(!0)}}]),r}(C),S=[{loggerName:"console",loggerLocation:"",isActive:!0},{loggerName:"localstorage",loggerLocation:"logging",isActive:!0},{loggerName:"http",loggerLocation:"/api/log",isActive:!1}],A=function(t){_inherits(r,t);var e=_createSuper(r);function r(){var t;return _classCallCheck(this,r),(t=e.call(this)).location="logging",t}return _createClass(r,[{key:"log",value:function(t){var e,r=!1;try{(e=JSON.parse(localStorage.getItem(this.location))||[]).push(t),localStorage.setItem(this.location,JSON.stringify(e)),r=!0}catch(n){console.log(n)}return Object(k.a)(r)}},{key:"clear",value:function(){return localStorage.removeItem(this.location),Object(k.a)(!0)}}]),r}(C),j=r("z6cu"),I=r("tk/3"),P=r("JIr8"),U=function(t){_inherits(r,t);var e=_createSuper(r);function r(t){var n;return _classCallCheck(this,r),(n=e.call(this)).http=t,n.location="/api/log",n}return _createClass(r,[{key:"log",value:function(t){var e=new I.d({"Content-Type":"application/json"});return this.http.post(this.location,t,{headers:e}).pipe(Object(P.a)(this.handleError))}},{key:"clear",value:function(){return Object(k.a)(!0)}},{key:"handleError",value:function(t){var e,r=[];return e="Status: "+t.status,e+=" - Status Text: "+t.statusText,t.json()&&(e+=" - Exception Message: "+t.json().exceptionMessage),r.push(e),console.error("An error occurred",r),Object(j.a)(r)}}]),r}(C),V=((i=function(){function t(e){_classCallCheck(this,t),this.http=e,this.publishers=[],this.buildPublishers()}return _createClass(t,[{key:"buildPublishers",value:function(){var t,e,r=_createForOfIteratorHelper(S.filter((function(t){return t.isActive})));try{for(r.s();!(e=r.n()).done;){var n=e.value;switch(n.loggerName.toLowerCase()){case"console":t=new O;break;case"localstorage":t=new A;break;case"webapi":t=new U(this.http)}t.location=n.loggerLocation,this.publishers.push(t)}}catch(o){r.e(o)}finally{r.f()}}}]),t}()).\u0275fac=function(t){return new(t||i)(u.Zb(I.b))},i.\u0275prov=u.Lb({token:i,factory:i.\u0275fac,providedIn:"root"}),i),L=((a=function(){function t(e){_classCallCheck(this,t),this.publisherService=e,this.level=w.All,this.logWithDate=!0,this.publishers=this.publisherService.publishers}return _createClass(t,[{key:"writeToLog",value:function(t,e,r){if(this.shouldLog(e)){var n=new _;n.message=t,n.level=e,n.extraInfo=r,n.logWithDate=this.logWithDate;var o,a=_createForOfIteratorHelper(this.publishers);try{for(a.s();!(o=a.n()).done;)o.value.log(n).subscribe((function(t){t||console.error("Something went wrong while logging.")}))}catch(i){a.e(i)}finally{a.f()}}}},{key:"shouldLog",value:function(t){return t>=this.level&&t!==w.Off||this.level===w.All}},{key:"formatParams",value:function(t){var e=t.join(",");if(t.some((function(t){return"object"==typeof t}))){e="";var r,n=_createForOfIteratorHelper(t);try{for(n.s();!(r=n.n()).done;){var o=r.value;e+=JSON.stringify(o)+","}}catch(a){n.e(a)}finally{n.f()}}return e}},{key:"fatal",value:function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];this.writeToLog(t,w.Fatal,r)}},{key:"error",value:function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];this.writeToLog(t,w.Error,r)}},{key:"warn",value:function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];this.writeToLog(t,w.Warn,r)}},{key:"info",value:function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];this.writeToLog(t,w.Info,r)}},{key:"debug",value:function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];this.writeToLog(t,w.Debug,r)}},{key:"log",value:function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];this.writeToLog(t,w.All,r)}}]),t}()).\u0275fac=function(t){return new(t||a)(u.Zb(V))},a.\u0275prov=u.Lb({token:a,factory:a.\u0275fac,providedIn:"root"}),a),T=((o=function(){function t(e,r,n,o){_classCallCheck(this,t),this.authService=e,this.formBuilder=r,this.router=n,this.log=o,this.signupForm=this.formBuilder.group({signupemail:["",h.o.required],signuppassword:["",h.o.required]})}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"signup",value:function(){return Object(b.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.log.info("signing up");case 1:case"end":return t.stop()}}),t,this)})))}}]),t}()).\u0275fac=function(t){return new(t||o)(u.Pb(l.a),u.Pb(h.c),u.Pb(c.a),u.Pb(L))},o.\u0275cmp=u.Jb({type:o,selectors:[["app-signup"]],decls:19,vars:2,consts:[[1,"standaloneForm",3,"formGroup","ngSubmit"],["appearance","fill",1,"fw"],["matInput","","type","email","formControlName","signupemail","autocomplete","username"],["email",""],["mat-icon-button","","matSuffix",""],["matInput","","type","password","formControlName","signuppassword","autocomplete","new-password"],["password",""],["mat-raised-button","","color","accent","type","submit",1,"fw",3,"disabled"]],template:function(t,e){1&t&&(u.Vb(0,"form",0),u.dc("ngSubmit",(function(){return e.signup()})),u.Vb(1,"mat-form-field",1),u.Vb(2,"mat-label"),u.Ac(3,"Email"),u.Ub(),u.Qb(4,"input",2,3),u.Vb(6,"button",4),u.Vb(7,"mat-icon"),u.Ac(8,"email"),u.Ub(),u.Ub(),u.Ub(),u.Vb(9,"mat-form-field",1),u.Vb(10,"mat-label"),u.Ac(11,"Enter your password"),u.Ub(),u.Qb(12,"input",5,6),u.Vb(14,"button",4),u.Vb(15,"mat-icon"),u.Ac(16,"visibility_off"),u.Ub(),u.Ub(),u.Ub(),u.Vb(17,"button",7),u.Ac(18," Signup "),u.Ub(),u.Ub()),2&t&&(u.mc("formGroup",e.signupForm),u.Cb(17),u.mc("disabled",!e.signupForm.valid))},directives:[h.p,h.k,h.e,g.b,g.e,m.a,h.b,h.j,h.d,v.a,g.f,y.a],styles:[""]}),o);function F(t,e){1&t&&u.Ac(0," Login ")}function N(t,e){1&t&&u.Ac(0," Signup ")}var x,E,R,D=[{path:"",redirectTo:"auth",pathMatch:"full"},{path:"auth",component:(x=function(){function t(e,r){_classCallCheck(this,t),this.router=e,this.authService=r,this.authService.currentUserValue&&this.router.navigate(["/dashboard"])}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}(),x.\u0275fac=function(t){return new(t||x)(u.Pb(c.a),u.Pb(l.a))},x.\u0275cmp=u.Jb({type:x,selectors:[["app-userauth"]],decls:10,vars:0,consts:[[1,"formwrapper"],[1,"formCard"],["mat-tab-label",""]],template:function(t,e){1&t&&(u.Vb(0,"div",0),u.Vb(1,"mat-card",1),u.Vb(2,"mat-card-content"),u.Vb(3,"mat-tab-group"),u.Vb(4,"mat-tab"),u.zc(5,F,1,0,"ng-template",2),u.Qb(6,"app-login"),u.Ub(),u.Vb(7,"mat-tab"),u.zc(8,N,1,0,"ng-template",2),u.Qb(9,"app-signup"),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub())},directives:[f.a,f.b,p.b,p.a,p.c,d,T],styles:[".formCard[_ngcontent-%COMP%]{width:320px}.formwrapper[_ngcontent-%COMP%]{height:100vh;display:flex;justify-content:center;align-items:center}"]}),x)}],J=((E=function t(){_classCallCheck(this,t)}).\u0275mod=u.Nb({type:E}),E.\u0275inj=u.Mb({factory:function(t){return new(t||E)},imports:[[c.d.forChild(D)],c.d]}),E),M=r("jAig"),G=((R=function t(){_classCallCheck(this,t)}).\u0275mod=u.Nb({type:R}),R.\u0275inj=u.Mb({factory:function(t){return new(t||R)},imports:[[s.c,J,M.a,h.f,h.n]]}),R)}}]);