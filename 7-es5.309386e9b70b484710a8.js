function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{vBIj:function(t,e,n){"use strict";n.r(e),n.d(e,"FrontendModule",(function(){return y}));var o,r,i,a=n("ofXK"),l=n("tyNb"),c=n("mrSG"),s=n("fXoL"),u=n("lGQG"),b=n("3Pt+"),f=n("Wp6s"),m=n("kmnG"),p=n("qFsG"),d=n("bTqV"),h=n("NFeN"),g=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:(o=function(){function t(e,n,o){_classCallCheck(this,t),this.authService=e,this.formBuilder=n,this.router=o,this.color="accent",this.mode="indeterminate",this.value=50,this.loginForm=this.formBuilder.group({email:"",password:""}),this.authService.currentUserValue&&this.router.navigate(["/dashboard"])}return _createClass(t,[{key:"ngOnInit",value:function(){console.log(this.authService.currentUserValue),this.authService.currentUserValue&&this.router.navigate(["/dashboard"])}},{key:"login",value:function(){return Object(c.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.authService.login("mail@florianstolz.net","password");case 2:e=t.sent,console.log("Token in login:"+e),this.router.navigate(["/dashboard"]);case 4:case"end":return t.stop()}}),t,this)})))}},{key:"logout",value:function(){console.log("logout"),this.authService.logout()}}]),t}(),o.\u0275fac=function(t){return new(t||o)(s.Pb(u.a),s.Pb(b.c),s.Pb(l.a))},o.\u0275cmp=s.Jb({type:o,selectors:[["app-loginpage"]],decls:22,vars:1,consts:[[1,"formwrapper"],[1,"loginCard"],[1,"login-form",3,"formGroup","ngSubmit"],["appearance","fill",1,"example-full-width"],["matInput","","type","email","formControlName","email"],["email",""],["mat-icon-button","","matSuffix",""],["matInput","","type","password","formControlName","password"],["password",""],["mat-raised-button","","color","accent","type","submit",1,"example-full-width"]],template:function(t,e){1&t&&(s.Vb(0,"div",0),s.Vb(1,"mat-card",1),s.Vb(2,"mat-card-content"),s.Vb(3,"form",2),s.dc("ngSubmit",(function(){return e.login()})),s.Vb(4,"mat-form-field",3),s.Vb(5,"mat-label"),s.yc(6,"Email"),s.Ub(),s.Qb(7,"input",4,5),s.Vb(9,"button",6),s.Vb(10,"mat-icon"),s.yc(11,"email"),s.Ub(),s.Ub(),s.Ub(),s.Vb(12,"mat-form-field",3),s.Vb(13,"mat-label"),s.yc(14,"Enter your password"),s.Ub(),s.Qb(15,"input",7,8),s.Vb(17,"button",6),s.Vb(18,"mat-icon"),s.yc(19,"visibility_off"),s.Ub(),s.Ub(),s.Ub(),s.Vb(20,"button",9),s.yc(21,"Login"),s.Ub(),s.Ub(),s.Ub(),s.Ub(),s.Ub()),2&t&&(s.Cb(3),s.mc("formGroup",e.loginForm))},directives:[f.a,f.b,b.o,b.k,b.e,m.b,m.e,p.a,b.b,b.j,b.d,d.a,m.f,h.a],styles:[".loginCard[_ngcontent-%COMP%]{width:250px}.formwrapper[_ngcontent-%COMP%]{height:100vh;display:flex;justify-content:center;align-items:center}.login-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}.mat-form-field-underline[_ngcontent-%COMP%]{background-color:green}"]}),o)}],w=((r=function t(){_classCallCheck(this,t)}).\u0275mod=s.Nb({type:r}),r.\u0275inj=s.Mb({factory:function(t){return new(t||r)},imports:[[l.d.forChild(g)],l.d]}),r),v=n("jAig"),y=((i=function t(){_classCallCheck(this,t)}).\u0275mod=s.Nb({type:i}),i.\u0275inj=s.Mb({factory:function(t){return new(t||i)},imports:[[a.c,w,v.a,b.f,b.n]]}),i)}}]);