import{a as G,b as K,c as Q,d as W,e as Z,f as ee}from"./chunk-QVBKOXPW.js";import{a as k,b as se}from"./chunk-VYK4GIE2.js";import{a as ie,b as ne}from"./chunk-HAMFJHD5.js";import{a as j}from"./chunk-DYZ3K4WC.js";import{e as J}from"./chunk-EHYA6QV2.js";import{a as Y}from"./chunk-XZ7AJCHR.js";import{h as w,i as z}from"./chunk-VRWHQ3CM.js";import{d as te}from"./chunk-DROMHMA7.js";import{a as q}from"./chunk-S2DW6XOG.js";import{E as r,Ea as X,F as C,Fa as P,Ga as D,K as H,L as g,La as L,N as m,P as y,Ra as B,S as t,T as i,U as l,Ua as A,Y as $,Z as E,_ as T,c as R,ia as I,j as V,ja as s,ka as O,la as d,ma as N,n as S,q as f,r as h,sa as F,u as v,v as x,y as U,ya as M}from"./chunk-LDCFWZ36.js";var re=()=>["/components/steps-form/examples"],oe=(()=>{let e=class e{constructor(){this.columns=J,this.dataSourceInputs=G,this.dataSourceOutput=K}};e.\u0275fac=function(p){return new(p||e)},e.\u0275cmp=f({type:e,selectors:[["app-steps-form-api"]],decls:51,vars:18,consts:[[1,"section-api"],[1,"section-title"],[1,"h3"],[1,""],["highlight-js","","code","import { OStepsFormModule } from 'ngx-obelisco-v17/steps-form';",3,"lang"],[1,"section-selector"],[1,"section-properties"],["highlight-js","","code","import { StepNextDirective } from 'ngx-obelisco';",3,"lang"],["highlight-js","","code","import { StepPreviousDirective } from 'ngx-obelisco';",3,"lang"],["fragment","example-directive",3,"routerLink"],["highlight-js","","code","import { StepService } from 'ngx-obelisco';",3,"lang"],[1,"mb-4"],["fragment","example-functionality",3,"routerLink"],[3,"isScrollable","columns","dataSource","isStriped","isBordered"]],template:function(p,o){p&1&&(t(0,"section",0)(1,"div",1)(2,"h2",2),s(3," Referencia de API para el componente Pasos de un formulario de Obelisco "),i(),t(4,"div",3),l(5,"code",4),i()(),t(6,"h2",2),s(7,"Etiqueta"),i(),l(8,"hr"),t(9,"div",5)(10,"p"),s(11,"Selector: "),t(12,"strong"),s(13,"o-steps-form"),i()(),t(14,"div",6)(15,"h2",2),s(16,"Como se usa"),i(),t(17,"p"),s(18," Se puede usar las directivas "),t(19,"strong"),s(20,"StepNextDirective"),i(),s(21," y "),t(22,"strong"),s(23,"StepPreviousDirective"),i(),s(24," importado en el modulo donde se va a usar y agregarlo en botones "),i(),t(25,"div",3),l(26,"code",7),i(),t(27,"div",3),l(28,"code",8),i(),t(29,"p"),s(30," Ver ejemplo "),t(31,"a",9),s(32,"con botones y directiva"),i()(),t(33,"p"),s(34," O de otra manera, se puede usar inyectando su servicio para inicializar los "),t(35,"strong"),s(36,"steps"),i(),s(37," y luego darle funcionalidad. "),i(),t(38,"div",3),l(39,"code",10),i(),t(40,"p",11),s(41," Ver ejemplo "),t(42,"a",12),s(43," con botones y funcionalidad "),i()(),t(44,"h2",2),s(45,"Propiedades"),i(),l(46,"o-table",13)(47,"br"),t(48,"h2",2),s(49,"M\xE9todos"),i(),l(50,"o-table",13),i()()()),p&2&&(r(5),m("lang","ts"),r(21),m("lang","ts"),r(2),m("lang","ts"),r(3),m("routerLink",F(16,re)),r(8),m("lang","ts"),r(3),m("routerLink",F(17,re)),r(4),m("isScrollable",!0)("columns",o.columns)("dataSource",o.dataSourceInputs)("isStriped",!0)("isBordered",!0),r(4),m("isScrollable",!0)("columns",o.columns)("dataSource",o.dataSourceOutput)("isStriped",!0)("isBordered",!0))},dependencies:[B,ie,w]});let n=e;return n})();function Se(n,e){if(n&1&&(t(0,"p",7),s(1),i()),n&2){let u=T();r(),d("Paso siguiente: ",u.nextStepName,"")}}function fe(n,e){n&1&&(t(0,"p",7),s(1,"Ultimo paso"),i())}function he(n,e){if(n&1&&l(0,"div",8),n&2){let u=e.$implicit;y("active",u.active)}}var pe=(()=>{let e=class e extends se{get isLastStep(){return this.stepsForm.indexOf(this.actualStep)===this.stepsForm.length-1}get nextStepName(){let a=this.stepsForm.indexOf(this.actualStep);return this.stepsForm[a+1].name}get currentStepNumber(){return this.stepsForm.indexOf(this.actualStep)+1}constructor(a){super(a),this.setpsService=a,this.stepsForm=[],this.steps=[],this.customClasses="",this.stopSteps=new U,this.onDestroy$=new R}ngOnInit(){this.setpsService.getNext.pipe(V(this.onDestroy$)).subscribe(()=>{this.nextStep()}),this.setpsService.getPrevious.pipe(V(this.onDestroy$)).subscribe(()=>{this.previousStep()}),this.stepsForm=this.steps.map((a,p)=>({name:a,active:p===0})),this.actualStep=this.stepsForm[0]}previousStep(){if(this.setpsService.isFirstStep.emit(!1),this.currentStepNumber===1){this.setpsService.isFirstStep.emit(!0);return}this.actualStep=this.stepsForm[this.stepsForm.indexOf(this.actualStep)-1],this.stepsForm[this.currentStepNumber].active=!1}nextStep(){if(this.setpsService.isFirstStep.emit(!1),this.isLastStep){this.setpsService.stopEmmiter.emit(!0),this.stopSteps.emit(!0),this.setpsService.stop();return}this.actualStep=this.stepsForm[this.currentStepNumber],this.actualStep.active=!0}ngOnDestroy(){this.onDestroy$.next(),this.onDestroy$.complete()}};e.\u0275fac=function(p){return new(p||e)(C(k))},e.\u0275cmp=f({type:e,selectors:[["o-steps-form"]],inputs:{steps:"steps",customClasses:"customClasses"},outputs:{stopSteps:"stopSteps"},features:[H],decls:10,vars:7,consts:[["lastStep",""],[1,"stepper",3,"ngClass"],[1,"step-title"],["class","step-next",4,"ngIf","ngIfElse"],[1,"steps"],["class","step",3,"active",4,"ngFor","ngForOf"],[1,"step-text"],[1,"step-next"],[1,"step"]],template:function(p,o){if(p&1&&(t(0,"div",1)(1,"h2",2),s(2),i(),g(3,Se,2,1,"p",3)(4,fe,2,0,"ng-template",null,0,M),t(6,"div",4),g(7,he,1,2,"div",5),i(),t(8,"span",6),s(9),i()()),p&2){let c=I(5);m("ngClass",o.customClasses),r(2),O(o.actualStep.name),r(),m("ngIf",!o.isLastStep)("ngIfElse",c),r(4),m("ngForOf",o.stepsForm),r(2),N("Paso ",o.currentStepNumber," de ",o.stepsForm.length,"")}},dependencies:[X,P,D]});let n=e;return n})();var xe=()=>["Paso 1","Paso 2","Paso 3"];function ge(n,e){if(n&1&&(t(0,"p",19),s(1),i()),n&2){let u=T();r(),d("Paso siguiente: ",u.nextStepName,"")}}function Ee(n,e){n&1&&(t(0,"p",19),s(1,"Ultimo paso"),i())}function Fe(n,e){if(n&1&&l(0,"div",20),n&2){let u=e.$implicit;y("active",u.active)}}var ae=(()=>{let e=class e{get isLastStep(){return this.stepsForm.indexOf(this.actualStep)===this.stepsForm.length-1}get nextStepName(){let a=this.stepsForm.indexOf(this.actualStep);return this.stepsForm[a+1].name}get currentStepNumber(){return this.stepsForm.indexOf(this.actualStep)+1}constructor(a){this.stepsFormService=a,this.exmapleDirectiveHTML=Q,this.exmapleDirectiveTS=W,this.exmapleFunctionalityHTML=Z,this.exmapleFunctionalityTS=ee,this.stepsForm=[],this.steps=["Paso 1","Paso 2","Paso 3"]}ngOnInit(){this.stepsFormService.initialize(),this.stepsForm=this.steps.map((a,p)=>({name:a,active:p===0})),this.actualStep=this.stepsForm[0]}nextStep(){this.stepsFormService.next()}previousStep(){this.stepsFormService.previous()}previousStepExample(){this.actualStep=this.stepsForm[this.stepsForm.indexOf(this.actualStep)-1],this.stepsForm[this.currentStepNumber].active=!1,this.currentStepNumber}nextStepExample(){this.isLastStep||(this.actualStep=this.stepsForm[this.currentStepNumber],this.actualStep.active=!0)}stopProgress(a){a&&console.log("Completado")}};e.\u0275fac=function(p){return new(p||e)(C(k))},e.\u0275cmp=f({type:e,selectors:[["app-steps-form-examples"]],decls:42,vars:16,consts:[["lastStep",""],[1,"section-example"],["title","Con botones y directiva","id","example-directive",3,"isNavCode"],["component",""],[3,"stopSteps","steps"],[1,"btn","btn-sm","btn-link","mr-2",3,"click"],[1,"btn","btn-sm","btn-link",3,"click"],["appClipboard","","component-html","",1,"d-flex","flex-column","align-items-end","p-0"],[1,"btn","btn-sm","btn-outline-tertiary","btn-clipboard","btn-icon"],["highlight-js",""],["appClipboard","","component-ts","",1,"d-flex","flex-column","align-items-end","p-0"],["highlight-js","",3,"lang"],["title","Con botones y funcionalidad","id","example-functionality",3,"isNavCode"],[1,"stepper"],[1,"step-title"],["class","step-next",4,"ngIf","ngIfElse"],[1,"steps"],["class","step",3,"active",4,"ngFor","ngForOf"],[1,"step-text"],[1,"step-next"],[1,"step"]],template:function(p,o){if(p&1){let c=$();t(0,"section",1)(1,"app-viewer",2)(2,"div",3)(3,"o-steps-form",4),E("stopSteps",function(ce){return v(c),x(o.stopProgress(ce))}),i(),l(4,"br"),t(5,"button",5),E("click",function(){return v(c),x(o.previousStep())}),s(6,"Anterior"),i(),t(7,"button",6),E("click",function(){return v(c),x(o.nextStep())}),s(8,"Siguiente"),i()(),t(9,"div",7),l(10,"button",8),t(11,"code",9),s(12),i()(),t(13,"div",10),l(14,"button",8),t(15,"code",11),s(16),i()()(),t(17,"app-viewer",12)(18,"div",3)(19,"div",13)(20,"p",14),s(21),i(),g(22,ge,2,1,"p",15)(23,Ee,2,0,"ng-template",null,0,M),t(25,"div",16),g(26,Fe,1,2,"div",17),i(),t(27,"span",18),s(28),i()(),l(29,"br"),t(30,"button",5),E("click",function(){return v(c),x(o.previousStepExample())}),s(31,"Anterior"),i(),t(32,"button",6),E("click",function(){return v(c),x(o.nextStepExample())}),s(33,"Siguiente"),i()(),t(34,"div",7),l(35,"button",8),t(36,"code",9),s(37),i()(),t(38,"div",10),l(39,"button",8),t(40,"code",11),s(41),i()()()()}if(p&2){let c=I(24);r(),m("isNavCode",!0),r(2),m("steps",F(15,xe)),r(9),d(" ",o.exmapleDirectiveHTML," "),r(3),m("lang","ts"),r(),d(" ",o.exmapleDirectiveTS," "),r(),m("isNavCode",!0),r(4),O(o.actualStep.name),r(),m("ngIf",!o.isLastStep)("ngIfElse",c),r(4),m("ngForOf",o.stepsForm),r(2),N("Paso ",o.currentStepNumber," de ",o.stepsForm.length,""),r(9),d(" ",o.exmapleFunctionalityHTML," "),r(3),m("lang","ts"),r(),d(" ",o.exmapleFunctionalityTS," ")}},dependencies:[P,D,pe,j,w,Y]});let n=e;return n})();var be=[{path:"api",component:oe},{path:"examples",component:ae},{path:"**",pathMatch:"full",redirectTo:"api"}],me=(()=>{let e=class e{};e.\u0275fac=function(p){return new(p||e)},e.\u0275mod=h({type:e}),e.\u0275inj=S({imports:[A.forChild(be),A]});let n=e;return n})();var le=(()=>{let e=class e{};e.\u0275fac=function(p){return new(p||e)},e.\u0275mod=h({type:e}),e.\u0275inj=S({imports:[L]});let n=e;return n})();var at=(()=>{let e=class e{};e.\u0275fac=function(p){return new(p||e)},e.\u0275mod=h({type:e}),e.\u0275inj=S({imports:[L,me,te,ne,le,j,z,q]});let n=e;return n})();export{at as StepsFormModule};
