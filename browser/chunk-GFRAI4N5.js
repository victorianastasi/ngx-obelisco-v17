import{a as J}from"./chunk-OH7MJGZF.js";import{a as W,b as X}from"./chunk-OXPPZCB6.js";import{a as K}from"./chunk-NDIL4BDZ.js";import{$ as Q,A as j,E as r,Ea as q,F as H,Fa as U,Ga as A,H as D,Ia as P,L as i,La as V,N as n,P as w,Q as F,Ra as $,S as l,T as p,U as y,Ua as G,V as g,W as h,X as x,_ as o,aa as s,ea as z,fa as R,ga as T,ha as O,ia as f,ja as u,ka as C,la as M,n as b,q as S,r as B,ta as E,ua as N,va as L,x as v,ya as I}from"./chunk-LDCFWZ36.js";var ee=["info"],te=["card"],ae=[[["o-card-image"]],[["o-card-icon"]],[["o-card-header"]],[["o-card-headline"]],[["o-card-badges"]],[["o-card-title"]],[["o-card-content"]],[["o-card-footer"]],"*"],ne=["o-card-image","o-card-icon","o-card-header","o-card-headline","o-card-badges","o-card-title","o-card-content","o-card-footer","*"],re=(e,a,t)=>({"card-horizontal":e,"card-simple":a,unbordered:t}),ce=(e,a)=>[e,a],Y=e=>[e];function ie(e,a){if(e&1&&y(0,"i",11),e&2){let t=o(2);n("ngClass",N(1,ce,t.icon,t.isHorizontal?"card-icon-left":"card-icon"))}}function oe(e,a){if(e&1&&(l(0,"span",12),u(1),p()),e&2){let t=o(2);n("ngClass",E(2,Y,t.isHorizontal?"card-icon-left":"card-icon")),r(),C(t.icon)}}function de(e,a){if(e&1&&i(0,ie,1,4,"i",9)(1,oe,2,4,"span",10),e&2){let t=o();n("ngIf",t.icon&&t.icon.includes("bx")),r(),n("ngIf",t.icon&&!t.icon.includes("bx"))}}function me(e,a){e&1&&s(0,1)}function le(e,a){e&1&&x(0)}function pe(e,a){e&1&&x(0)}function se(e,a){if(e&1&&(g(0),i(1,le,1,0,"ng-container",13)(2,pe,1,0,"ng-container",13),h()),e&2){o();let t=f(1),d=f(3);r(),n("ngTemplateOutlet",d),r(),n("ngTemplateOutlet",t)}}function ge(e,a){if(e&1&&y(0,"img",14),e&2){let t=o();n("src",t.image==null?null:t.image.src,j)("ngClass",E(3,Y,t.isHorizontal||t.isThemeCard?"card-img-left":"card-img-top"))("alt",t.image!=null&&t.image.alt?t.image==null?null:t.image.alt:" ")}}function he(e,a){e&1&&x(0)}function xe(e,a){e&1&&x(0)}function fe(e,a){if(e&1&&(g(0),i(1,he,1,0,"ng-container",13)(2,xe,1,0,"ng-container",13),h()),e&2){o(2);let t=f(1),d=f(3);r(),n("ngTemplateOutlet",d),r(),n("ngTemplateOutlet",t)}}function ue(e,a){if(e&1&&(g(0),l(1,"p",18),u(2),p(),h()),e&2){let t=o(2);r(2),C(t.headline)}}function _e(e,a){if(e&1&&y(0,"o-badge",21),e&2){let t=a.$implicit;n("text",t.text)("type",t.type)("link",t.link)("route",t.route)}}function Ce(e,a){if(e&1&&(g(0),l(1,"div",19),i(2,_e,1,4,"o-badge",20),p(),h()),e&2){let t=o(2);r(2),n("ngForOf",t.cardBadges)}}function ke(e,a){if(e&1&&(g(0),l(1,"a",24,3),u(3),p(),h()),e&2){let t=o(3);r(),w("card-title-link",!0)("ellipsis-3",t.isTitleTruncate),n("routerLink",t.route),r(2),M(" ",t.title," ")}}function ye(e,a){if(e&1&&(l(0,"a",24,3),u(2),p()),e&2){let t=o(3);w("ellipsis-3",t.isTitleTruncate),n("routerLink",t.route),r(2),C(t.title)}}function Te(e,a){if(e&1&&(l(0,"h3",22),i(1,ke,4,6,"ng-container",23)(2,ye,3,4,"ng-template",null,2,I),p()),e&2){let t=f(3),d=o(2);r(),n("ngIf",d.isBordered)("ngIfElse",t)}}function Oe(e,a){if(e&1&&(l(0,"p",25),u(1),p()),e&2){let t=o(2);r(),C(t.description)}}function Ie(e,a){e&1&&(l(0,"div",26),s(1,8),p())}function ve(e,a){if(e&1&&(g(0),i(1,fe,3,2,"ng-container",5),s(2,2),s(3,3),i(4,ue,3,1,"ng-container",5),s(5,4),i(6,Ce,3,1,"ng-container",5),s(7,5),i(8,Te,4,2,"h3",15),s(9,6),i(10,Oe,2,1,"p",16),s(11,7),i(12,Ie,2,0,"div",17),h()),e&2){let t=o();r(),n("ngIf",!t.isHorizontal),r(3),n("ngIf",t.headline),r(2),n("ngIf",t.cardBadges),r(2),n("ngIf",t.title),r(2),n("ngIf",t.description),r(2),n("ngIf",t.infoContent)}}function we(e,a){if(e&1&&x(0,27),e&2){let t=o();n("ngTemplateOutlet",t.oCustomContent.template)}}var Re=(()=>{let a=class a{constructor(d){this.renderer=d,this.isHorizontal=!1,this.isBordered=!1,this.isThemeCard=!1,this.customClasses="",this.isTitleTruncate=!1}ngAfterViewInit(){this.link&&this.card?.nativeElement&&this.renderer.setAttribute(this.card?.nativeElement,"href",this.link)}};a.\u0275fac=function(m){return new(m||a)(H(D))},a.\u0275cmp=S({type:a,selectors:[["o-card"]],contentQueries:function(m,c,_){if(m&1&&(z(_,ee,5,v),z(_,K,7)),m&2){let k;T(k=O())&&(c.infoContent=k.first),T(k=O())&&(c.oCustomContent=k.first)}},viewQuery:function(m,c){if(m&1&&R(te,5,v),m&2){let _;T(_=O())&&(c.card=_.first)}},inputs:{isHorizontal:"isHorizontal",isBordered:"isBordered",isThemeCard:"isThemeCard",customClasses:"customClasses",isTitleTruncate:"isTitleTruncate",title:"title",description:"description",headline:"headline",cardBadges:"cardBadges",link:"link",route:"route",image:"image",icon:"icon"},ngContentSelectors:ne,decls:11,vars:11,consts:[["cardIcon",""],["contentIcon",""],["cardUnbordered",""],["card",""],[1,"card",3,"ngClass"],[4,"ngIf"],["oDefaultImage","",3,"src","ngClass","alt",4,"ngIf"],[1,"card-body"],[3,"ngTemplateOutlet",4,"ngIf"],[3,"ngClass",4,"ngIf"],["class","material-symbols-rounded o-icon","aria-hidden","true",3,"ngClass",4,"ngIf"],[3,"ngClass"],["aria-hidden","true",1,"material-symbols-rounded","o-icon",3,"ngClass"],[4,"ngTemplateOutlet"],["oDefaultImage","",3,"src","ngClass","alt"],["class","card-title",4,"ngIf"],["class","card-text",4,"ngIf"],["class","card-info",4,"ngIf"],[1,"card-headline"],[1,"card-badges"],[3,"text","type","link","route",4,"ngFor","ngForOf"],[3,"text","type","link","route"],[1,"card-title"],[4,"ngIf","ngIfElse"],[3,"routerLink"],[1,"card-text"],[1,"card-info"],[3,"ngTemplateOutlet"]],template:function(m,c){m&1&&(Q(ae),i(0,de,2,2,"ng-template",null,0,I)(2,me,1,0,"ng-template",null,1,I),l(4,"div",4),i(5,se,3,2,"ng-container",5),s(6),i(7,ge,1,5,"img",6),l(8,"div",7),i(9,ve,13,6,"ng-container",5)(10,we,1,1,"ng-container",8),p()()),m&2&&(r(4),F(c.customClasses),n("ngClass",c.isThemeCard?"card-horizontal card-simple card-lg":L(7,re,c.isHorizontal&&!c.isThemeCard,!c.isBordered&&!c.isHorizontal&&!c.isThemeCard,!c.isBordered&&c.isHorizontal)),r(),n("ngIf",c.isHorizontal),r(2),n("ngIf",c.image==null?null:c.image.src),r(2),n("ngIf",!c.oCustomContent),r(),n("ngIf",c.oCustomContent))},dependencies:[q,U,A,P,$,J,W],styles:["o-card o-badge{margin-right:.75rem}  o-card o-badge:last-child{margin-right:0}",".card-deck o-highlighted,   .card-deck o-card,   .card-deck .card{flex:1 0 35%;margin-top:0}  .card-deck o-highlighted:nth-of-type(n+3),   .card-deck o-card:nth-of-type(n+3),   .card-deck .card:nth-of-type(n+3){margin-top:30px}  .card-deck o-highlighted,   .card-deck o-card{margin-right:15px;margin-bottom:0;margin-left:15px}  .card-deck o-highlighted .card,   .card-deck o-highlighted .list-group-item,   .card-deck o-card .card,   .card-deck o-card .list-group-item{min-width:100%;width:100%;height:100%;margin:0}  .card-deck o-highlighted o-access{margin:0}@media (min-width: 576px){  .card-deck{display:flex;flex-flow:row wrap;margin-right:-15px;margin-left:-15px}}@media (max-width: 575.98px){  .card-deck o-highlighted:nth-of-type(2),   .card-deck o-card:nth-of-type(2),   .card-deck .card:nth-of-type(2){margin-top:30px}}@media (min-width: 768px){  .card-deck:not(.max-cards-2) o-highlighted,   .card-deck:not(.max-cards-2) o-card,   .card-deck:not(.max-cards-2) .card,   .card-deck.max-cards-3 o-highlighted,   .card-deck.max-cards-3 o-card,   .card-deck.max-cards-3 .card{flex:1 0 25%;margin-top:0}  .card-deck:not(.max-cards-2) o-highlighted:nth-of-type(n+4),   .card-deck:not(.max-cards-2) o-card:nth-of-type(n+4),   .card-deck:not(.max-cards-2) .card:nth-of-type(n+4),   .card-deck.max-cards-3 o-highlighted:nth-of-type(n+4),   .card-deck.max-cards-3 o-card:nth-of-type(n+4),   .card-deck.max-cards-3 .card:nth-of-type(n+4){margin-top:30px}}@media (min-width: 992px){  .card-deck:not(.max-cards-2):not(.max-cards-3) o-highlighted,   .card-deck:not(.max-cards-2):not(.max-cards-3) o-card,   .card-deck:not(.max-cards-2):not(.max-cards-3) .card{flex:1 0 19%;margin-top:0}  .card-deck:not(.max-cards-2):not(.max-cards-3) o-highlighted:nth-of-type(n+5),   .card-deck:not(.max-cards-2):not(.max-cards-3) o-card:nth-of-type(n+5),   .card-deck:not(.max-cards-2):not(.max-cards-3) .card:nth-of-type(n+5){margin-top:30px}}  .card-deck.max-cards-1 o-highlighted,   .card-deck.max-cards-1 o-card,   .card-deck.max-cards-1 .card{flex:1 0 55%!important;margin-top:0}  .card-deck.max-cards-1 o-highlighted:nth-of-type(n+2),   .card-deck.max-cards-1 o-card:nth-of-type(n+2),   .card-deck.max-cards-1 .card:nth-of-type(n+2){margin-top:30px}@media (max-width: 575.98px){  .card-deck.card-column{width:100%}}  .card-deck.card-column o-highlighted,   .card-deck.card-column o-card,   .card-deck.card-column .card{max-width:calc(25% - 30px)}@media (max-width: 991.98px){  .card-deck.card-column o-highlighted,   .card-deck.card-column o-card,   .card-deck.card-column .card{max-width:calc(33.3333333333% - 30px)}}@media (max-width: 767.98px){  .card-deck.card-column o-highlighted,   .card-deck.card-column o-card,   .card-deck.card-column .card{max-width:calc(50% - 30px)}}@media (max-width: 575.98px){  .card-deck.card-column o-highlighted,   .card-deck.card-column o-card,   .card-deck.card-column .card{display:flex;width:100%;max-width:328px;height:fit-content;margin-right:auto;margin-left:auto}  .card-deck.card-column o-highlighted[ng-reflect-is-horizontal=true],   .card-deck.card-column o-card[ng-reflect-is-horizontal=true],   .card-deck.card-column .card[ng-reflect-is-horizontal=true]{max-width:100%}}  .card-deck.max-cards-3.card-column o-highlighted,   .card-deck.max-cards-3.card-column o-card,   .card-deck.max-cards-3.card-column .card{max-width:calc(33.3333333333% - 30px)}@media (max-width: 767.98px){  .card-deck.max-cards-3.card-column o-highlighted,   .card-deck.max-cards-3.card-column o-card,   .card-deck.max-cards-3.card-column .card{max-width:calc(50% - 30px)}}@media (max-width: 575.98px){  .card-deck.max-cards-3.card-column o-highlighted,   .card-deck.max-cards-3.card-column o-card,   .card-deck.max-cards-3.card-column .card{max-width:328px}  .card-deck.max-cards-3.card-column o-highlighted[ng-reflect-is-horizontal=true],   .card-deck.max-cards-3.card-column o-card[ng-reflect-is-horizontal=true],   .card-deck.max-cards-3.card-column .card[ng-reflect-is-horizontal=true]{max-width:100%}}  .card-deck.max-cards-2.card-column o-highlighted,   .card-deck.max-cards-2.card-column o-card,   .card-deck.max-cards-2.card-column .card{max-width:calc(50% - 30px)}@media (max-width: 575.98px){  .card-deck.max-cards-2.card-column o-highlighted,   .card-deck.max-cards-2.card-column o-card,   .card-deck.max-cards-2.card-column .card{max-width:328px}  .card-deck.max-cards-2.card-column o-highlighted[ng-reflect-is-horizontal=true],   .card-deck.max-cards-2.card-column o-card[ng-reflect-is-horizontal=true],   .card-deck.max-cards-2.card-column .card[ng-reflect-is-horizontal=true]{max-width:100%}}  .card-deck.max-cards-1.card-column o-highlighted,   .card-deck.max-cards-1.card-column o-card,   .card-deck.max-cards-1.card-column .card{max-width:calc(33.3333333333% - 30px)}  .card-deck.max-cards-1.card-column o-highlighted:nth-of-type(-n+3),   .card-deck.max-cards-1.card-column o-card:nth-of-type(-n+3),   .card-deck.max-cards-1.card-column .card:nth-of-type(-n+3){margin-top:0}@media (max-width: 767.98px){  .card-deck.max-cards-1.card-column o-highlighted,   .card-deck.max-cards-1.card-column o-card,   .card-deck.max-cards-1.card-column .card{max-width:calc(50% - 30px)}  .card-deck.max-cards-1.card-column o-highlighted:nth-of-type(-n+3),   .card-deck.max-cards-1.card-column o-card:nth-of-type(-n+3),   .card-deck.max-cards-1.card-column .card:nth-of-type(-n+3){margin-top:30px}}@media (max-width: 575.98px){  .card-deck.max-cards-1.card-column o-highlighted,   .card-deck.max-cards-1.card-column o-card,   .card-deck.max-cards-1.card-column .card{max-width:100%}}"]});let e=a;return e})();var Ue=(()=>{let a=class a{};a.\u0275fac=function(m){return new(m||a)},a.\u0275mod=B({type:a}),a.\u0275inj=b({imports:[V,G,X]});let e=a;return e})();export{Re as a,Ue as b};
