(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"7RZD":function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component, TemplateRef, ViewChild, AfterViewInit } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FieldWrapper } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-wrapper-addons\'</span>,\n  template: <span class="hljs-string">`\n  &lt;ng-template #matPrefix&gt;\n    &lt;span\n      *ngIf="to.addonLeft"\n      [ngStyle]="{cursor: to.addonLeft.onClick ? \'pointer\' : \'inherit\'}"\n      (click)="addonLeftClick($event)"\n    &gt;\n      &lt;i *ngIf="to.addonLeft.class" [ngClass]="to.addonLeft.class"&gt;&lt;/i&gt;&amp;nbsp;\n      &lt;span *ngIf="to.addonLeft.text"&gt;{{ to.addonLeft.text }}&lt;/span&gt;&amp;nbsp;\n    &lt;/span&gt;\n  &lt;/ng-template&gt;\n\n  &lt;ng-container #fieldComponent&gt;&lt;/ng-container&gt;\n\n  &lt;ng-template #matSuffix&gt;\n    &lt;span\n      *ngIf="to.addonRight"\n      [ngStyle]="{cursor: to.addonRight.onClick ? \'pointer\' : \'inherit\'}"\n      (click)="addonRightClick($event)"\n    &gt;\n      &amp;nbsp;&lt;i *ngIf="to.addonRight.class" [ngClass]="to.addonRight.class"&gt;&lt;/i&gt;\n      &amp;nbsp;&lt;span *ngIf="to.addonRight.text"&gt;{{ to.addonRight.text }}&lt;/span&gt;\n    &lt;/span&gt;\n  &lt;/ng-template&gt;\n  `</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> FormlyWrapperAddons <span class="hljs-keyword">extends</span> FieldWrapper <span class="hljs-keyword">implements</span> AfterViewInit {\n  <span class="hljs-meta">@ViewChild</span>(<span class="hljs-string">\'matPrefix\'</span>, { <span class="hljs-keyword">static</span>: <span class="hljs-literal">true</span> }) matPrefix: TemplateRef&lt;<span class="hljs-built_in">any</span>&gt;;\n  <span class="hljs-meta">@ViewChild</span>(<span class="hljs-string">\'matSuffix\'</span>, { <span class="hljs-keyword">static</span>: <span class="hljs-literal">true</span> }) matSuffix: TemplateRef&lt;<span class="hljs-built_in">any</span>&gt;;\n\n  ngAfterViewInit() {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.matPrefix) {\n      <span class="hljs-keyword">this</span>.to.prefix = <span class="hljs-keyword">this</span>.matPrefix;\n    }\n\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.matSuffix) {\n      <span class="hljs-keyword">this</span>.to.suffix = <span class="hljs-keyword">this</span>.matSuffix;\n    }\n  }\n\n  addonRightClick($event: <span class="hljs-built_in">any</span>) {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.to.addonRight.onClick) {\n      <span class="hljs-keyword">this</span>.to.addonRight.onClick(<span class="hljs-keyword">this</span>.to, <span class="hljs-keyword">this</span>, $event);\n    }\n  }\n\n  addonLeftClick($event: <span class="hljs-built_in">any</span>) {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.to.addonLeft.onClick) {\n      <span class="hljs-keyword">this</span>.to.addonLeft.onClick(<span class="hljs-keyword">this</span>.to, <span class="hljs-keyword">this</span>, $event);\n    }\n  }\n}\n'},HJAn:function(n,s,l){"use strict";l.r(s),s.default="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyMaterialModule } from '@ngx-formly/material';\n\nimport { AppComponent } from './app.component';\nimport { FormlyWrapperAddons } from './addons.wrapper';\nimport { addonsExtension } from './addons.extension';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyMaterialModule,\n    FormlyModule.forRoot({\n      wrappers: [\n        { name: 'addons', component: FormlyWrapperAddons },\n      ],\n      extensions: [\n        { name: 'addons', extension: { onPopulate: addonsExtension } },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n    FormlyWrapperAddons,\n  ],\n})\nexport class AppModule { }\n"},KK5C:function(n,s,l){"use strict";l.r(s),s.default="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'input',\n      type: 'input',\n      templateOptions: {\n        label: 'Firstname',\n        addonLeft: {\n          class: 'fa fa-dashboard',\n        },\n        addonRight: {\n          text: '$',\n        },\n      },\n    },\n  ];\n}\n"},LhLJ:function(n,s,l){"use strict";l.r(s);var a=l("Mlb/"),o=l("QZuW");class t{constructor(){this.form=new o.FormGroup({}),this.model={},this.options={},this.fields=[{key:"input",type:"input",templateOptions:{label:"Firstname",addonLeft:{class:"fa fa-dashboard"},addonRight:{text:"$"}}}]}}const e={examples:[{title:"Material Prefix and Suffix",description:"\n              This demonstrates adding a material suffix and prefix for material form fields.\n            ",component:t,files:[{file:"app.component.html",content:l("WPhX"),filecontent:l("NdzE")},{file:"app.component.ts",content:l("xnnS"),filecontent:l("KK5C")},{file:"addons.wrapper.ts",content:l("7RZD"),filecontent:l("v9bi")},{file:"addons.extension.ts",content:l("h9MB"),filecontent:l("svYT")},{file:"app.module.ts",content:l("UjKx"),filecontent:l("HJAn")}]}]};class p{}var r=l("n91+"),i=l("aUi8"),d=l("xRU+"),m=l("Y8ES"),f=l("7GfU"),c=l("dtEM"),u=l("RSMc"),g=l("HuvB"),h=l("jd7V"),y=l("lv5v"),j=l("vk2e"),w=l("B/Is");class k extends w.c{ngAfterViewInit(){this.matPrefix&&(this.to.prefix=this.matPrefix),this.matSuffix&&(this.to.suffix=this.matSuffix)}addonRightClick(n){this.to.addonRight.onClick&&this.to.addonRight.onClick(this.to,this,n)}addonLeftClick(n){this.to.addonLeft.onClick&&this.to.addonLeft.onClick(this.to,this,n)}}var x=a["\u0275crt"]({encapsulation:2,styles:[],data:{}});function C(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,2,"i",[],null,null,null,null,null)),a["\u0275prd"](512,null,j["\u0275NgClassImpl"],j["\u0275NgClassR2Impl"],[a.IterableDiffers,a.KeyValueDiffers,a.ElementRef,a.Renderer2]),a["\u0275did"](2,278528,null,0,j.NgClass,[j["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null)],(function(n,s){n(s,2,0,s.component.to.addonLeft.class)}),null)}function R(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),a["\u0275ted"](1,null,["",""]))],null,(function(n,s){n(s,1,0,s.component.to.addonLeft.text)}))}function v(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,9,"span",[],null,[[null,"click"]],(function(n,s,l){var a=!0;return"click"===s&&(a=!1!==n.component.addonLeftClick(l)&&a),a}),null,null)),a["\u0275prd"](512,null,j["\u0275NgStyleImpl"],j["\u0275NgStyleR2Impl"],[a.ElementRef,a.KeyValueDiffers,a.Renderer2]),a["\u0275did"](2,278528,null,0,j.NgStyle,[j["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),a["\u0275pod"](3,{cursor:0}),(n()(),a["\u0275and"](16777216,null,null,1,null,C)),a["\u0275did"](5,16384,null,0,j.NgIf,[a.ViewContainerRef,a.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),a["\u0275ted"](-1,null,["\xa0 "])),(n()(),a["\u0275and"](16777216,null,null,1,null,R)),a["\u0275did"](8,16384,null,0,j.NgIf,[a.ViewContainerRef,a.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),a["\u0275ted"](-1,null,["\xa0 "]))],(function(n,s){var l=s.component,a=n(s,3,0,l.to.addonLeft.onClick?"pointer":"inherit");n(s,2,0,a),n(s,5,0,l.to.addonLeft.class),n(s,8,0,l.to.addonLeft.text)}),null)}function F(n){return a["\u0275vid"](0,[(n()(),a["\u0275and"](16777216,null,null,1,null,v)),a["\u0275did"](1,16384,null,0,j.NgIf,[a.ViewContainerRef,a.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),a["\u0275and"](0,null,null,0))],(function(n,s){n(s,1,0,s.component.to.addonLeft)}),null)}function I(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,2,"i",[],null,null,null,null,null)),a["\u0275prd"](512,null,j["\u0275NgClassImpl"],j["\u0275NgClassR2Impl"],[a.IterableDiffers,a.KeyValueDiffers,a.ElementRef,a.Renderer2]),a["\u0275did"](2,278528,null,0,j.NgClass,[j["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null)],(function(n,s){n(s,2,0,s.component.to.addonRight.class)}),null)}function b(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),a["\u0275ted"](1,null,["",""]))],null,(function(n,s){n(s,1,0,s.component.to.addonRight.text)}))}function L(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,9,"span",[],null,[[null,"click"]],(function(n,s,l){var a=!0;return"click"===s&&(a=!1!==n.component.addonRightClick(l)&&a),a}),null,null)),a["\u0275prd"](512,null,j["\u0275NgStyleImpl"],j["\u0275NgStyleR2Impl"],[a.ElementRef,a.KeyValueDiffers,a.Renderer2]),a["\u0275did"](2,278528,null,0,j.NgStyle,[j["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),a["\u0275pod"](3,{cursor:0}),(n()(),a["\u0275ted"](-1,null,[" \xa0"])),(n()(),a["\u0275and"](16777216,null,null,1,null,I)),a["\u0275did"](6,16384,null,0,j.NgIf,[a.ViewContainerRef,a.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),a["\u0275ted"](-1,null,[" \xa0"])),(n()(),a["\u0275and"](16777216,null,null,1,null,b)),a["\u0275did"](9,16384,null,0,j.NgIf,[a.ViewContainerRef,a.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,s){var l=s.component,a=n(s,3,0,l.to.addonRight.onClick?"pointer":"inherit");n(s,2,0,a),n(s,6,0,l.to.addonRight.class),n(s,9,0,l.to.addonRight.text)}),null)}function M(n){return a["\u0275vid"](0,[(n()(),a["\u0275and"](16777216,null,null,1,null,L)),a["\u0275did"](1,16384,null,0,j.NgIf,[a.ViewContainerRef,a.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),a["\u0275and"](0,null,null,0))],(function(n,s){n(s,1,0,s.component.to.addonRight)}),null)}function S(n){return a["\u0275vid"](0,[a["\u0275qud"](402653184,1,{fieldComponent:0}),a["\u0275qud"](402653184,2,{matPrefix:0}),a["\u0275qud"](402653184,3,{matSuffix:0}),(n()(),a["\u0275and"](0,[[2,2],["matPrefix",2]],null,0,null,F)),(n()(),a["\u0275eld"](4,16777216,[[1,3],["fieldComponent",1]],null,0,null,null,null,null,null,null,null)),(n()(),a["\u0275and"](0,[[3,2],["matSuffix",2]],null,0,null,M))],null,null)}function N(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"formly-wrapper-addons",[],null,null,null,S,x)),a["\u0275did"](1,4243456,null,0,k,[],null,null)],null,null)}var A=a["\u0275ccf"]("formly-wrapper-addons",k,N,{field:"field"},{},[]),_=l("fYis"),V=l("mSm0"),P=l("g/x9"),O=l("Ea/l"),E=l("kY9M"),T=l("cXvR"),W=a["\u0275crt"]({encapsulation:2,styles:[],data:{}});function D(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,7,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,s,l){var o=!0;return"submit"===s&&(o=!1!==a["\u0275nov"](n,2).onSubmit(l)&&o),"reset"===s&&(o=!1!==a["\u0275nov"](n,2).onReset()&&o),o}),null,null)),a["\u0275did"](1,16384,null,0,o["\u0275angular_packages_forms_forms_z"],[],null,null),a["\u0275did"](2,540672,null,0,o.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},null),a["\u0275prd"](2048,null,o.ControlContainer,null,[o.FormGroupDirective]),a["\u0275did"](4,16384,null,0,o.NgControlStatusGroup,[[4,o.ControlContainer]],null,null),(n()(),a["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,P.b,P.a)),a["\u0275prd"](512,null,O.a,O.a,[E.b,a.ComponentFactoryResolver,a.Injector]),a["\u0275did"](7,966656,null,0,T.a,[O.a,E.b,[2,o.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null)],(function(n,s){var l=s.component;n(s,2,0,l.form),n(s,7,0,l.form,l.model,l.fields,l.options)}),(function(n,s){n(s,0,0,a["\u0275nov"](s,4).ngClassUntouched,a["\u0275nov"](s,4).ngClassTouched,a["\u0275nov"](s,4).ngClassPristine,a["\u0275nov"](s,4).ngClassDirty,a["\u0275nov"](s,4).ngClassValid,a["\u0275nov"](s,4).ngClassInvalid,a["\u0275nov"](s,4).ngClassPending)}))}function $(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,D,W)),a["\u0275did"](1,49152,null,0,t,[],null,null)],null,null)}var K=a["\u0275ccf"]("formly-app-example",t,$,{},{},[]),G=l("o3+a"),U=l("9b0e"),q=l("6YJn"),Z=l("dvHj"),B=l("C0xW"),J=l("W9sv"),z=l("m6lo"),Y=l("S6Ld"),H=l("cTZo"),X=l("EcxS"),Q=l("Kfqh"),nn=l("Ienz"),sn=l("KuLc"),ln=l("Z7++"),an=l("2lML"),on=l("pgVP"),tn=l("pk7F"),en=l("T8+l"),pn=l("Wtxj"),rn=l("cmU2"),dn=l("Gt8F"),mn=l("Jyuw"),fn=l("6A6+"),cn=l("nf7j"),un=l("f1dy"),gn=l("VtvF");function hn(n){!n.templateOptions||n.wrappers&&-1!==n.wrappers.indexOf("addons")||(n.templateOptions.addonLeft||n.templateOptions.addonRight)&&(n.wrappers=[...n.wrappers||[],"addons"])}var yn=l("lN7U"),jn=l("NPi3"),wn=l("PCNd"),kn=l("kALn"),xn=l("PWbI"),Cn=l("BZv6"),Rn=l("rhKd"),vn=l("ANqV"),Fn=l("ucDi"),In=l("pZFe"),bn=l("+R4m"),Ln=l("nVmk"),Mn=l("gUwI"),Sn=l("EyxR"),Nn=l("4TAE"),An=l("67SU"),_n=l("XnbF");class Vn{}var Pn=l("qk26"),On=l("P+xK");l.d(s,"ConfigModuleNgFactory",(function(){return En}));var En=a["\u0275cmf"](p,[],(function(n){return a["\u0275mod"]([a["\u0275mpd"](512,a.ComponentFactoryResolver,a["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,i.a,d.a,m.a,f.a,c.a,u.a,g.a,h.a,y.a,A,_.a,V.a,K]],[3,a.ComponentFactoryResolver],a.NgModuleRef]),a["\u0275mpd"](4608,j.NgLocalization,j.NgLocaleLocalization,[a.LOCALE_ID,[2,j["\u0275angular_packages_common_common_a"]]]),a["\u0275mpd"](4608,G.c,G.c,[]),a["\u0275mpd"](4608,U.c,U.c,[U.i,U.e,a.ComponentFactoryResolver,U.h,U.f,a.Injector,a.NgZone,j.DOCUMENT,q.b,[2,j.Location]]),a["\u0275mpd"](5120,U.j,U.k,[U.c]),a["\u0275mpd"](5120,Z.b,Z.c,[U.c]),a["\u0275mpd"](4608,B.e,J.c,[[2,J.g],[2,J.l]]),a["\u0275mpd"](5120,z.c,z.j,[U.c]),a["\u0275mpd"](4608,Y.a,Y.a,[]),a["\u0275mpd"](4608,H.a,H.a,[]),a["\u0275mpd"](4608,o.FormBuilder,o.FormBuilder,[]),a["\u0275mpd"](4608,o["\u0275angular_packages_forms_forms_o"],o["\u0275angular_packages_forms_forms_o"],[]),a["\u0275mpd"](4608,O.a,O.a,[E.b,a.ComponentFactoryResolver,a.Injector]),a["\u0275mpd"](4608,J.b,J.b,[]),a["\u0275mpd"](5120,X.a,X.b,[U.c]),a["\u0275mpd"](1073742336,j.CommonModule,j.CommonModule,[]),a["\u0275mpd"](1073742336,Q.b,Q.b,[]),a["\u0275mpd"](1073742336,G.d,G.d,[]),a["\u0275mpd"](1073742336,nn.a,nn.a,[]),a["\u0275mpd"](1073742336,q.a,q.a,[]),a["\u0275mpd"](1073742336,sn.g,sn.g,[]),a["\u0275mpd"](1073742336,ln.ScrollingModule,ln.ScrollingModule,[]),a["\u0275mpd"](1073742336,U.g,U.g,[]),a["\u0275mpd"](1073742336,J.l,J.l,[[2,J.d],[2,B.f]]),a["\u0275mpd"](1073742336,Z.e,Z.e,[]),a["\u0275mpd"](1073742336,J.v,J.v,[]),a["\u0275mpd"](1073742336,an.j,an.j,[]),a["\u0275mpd"](1073742336,z.i,z.i,[]),a["\u0275mpd"](1073742336,z.f,z.f,[]),a["\u0275mpd"](1073742336,on.c,on.c,[]),a["\u0275mpd"](1073742336,tn.c,tn.c,[]),a["\u0275mpd"](1073742336,en.b,en.b,[]),a["\u0275mpd"](512,E.b,E.b,[]),a["\u0275mpd"](1024,E.a,(function(n){return[{wrappers:[{name:"form-field",component:pn.a}]},{types:[{name:"input",component:rn.a,wrappers:["form-field"]}]},{types:[{name:"textarea",component:dn.a,wrappers:["form-field"]}]},{types:[{name:"radio",component:mn.a,wrappers:["form-field"]}]},{types:[{name:"checkbox",component:fn.a,wrappers:["form-field"]}]},{types:[{name:"multicheckbox",component:cn.a,wrappers:["form-field"]}]},{types:[{name:"select",component:un.a,wrappers:["form-field"]}]},gn.b(n),{wrappers:[{name:"addons",component:k}],extensions:[{name:"addons",extension:{onPopulate:hn}}]}]}),[E.b]),a["\u0275mpd"](1073742336,gn.a,gn.a,[E.b,[2,E.a]]),a["\u0275mpd"](1073742336,yn.h,yn.h,[]),a["\u0275mpd"](1073742336,jn.b,jn.b,[]),a["\u0275mpd"](1073742336,wn.a,wn.a,[]),a["\u0275mpd"](1073742336,o["\u0275angular_packages_forms_forms_d"],o["\u0275angular_packages_forms_forms_d"],[]),a["\u0275mpd"](1073742336,o.ReactiveFormsModule,o.ReactiveFormsModule,[]),a["\u0275mpd"](1073742336,kn.e,kn.e,[]),a["\u0275mpd"](1073742336,xn.a,xn.a,[]),a["\u0275mpd"](1073742336,Cn.c,Cn.c,[]),a["\u0275mpd"](1073742336,Rn.c,Rn.c,[]),a["\u0275mpd"](1073742336,vn.a,vn.a,[]),a["\u0275mpd"](1073742336,Fn.a,Fn.a,[]),a["\u0275mpd"](1073742336,In.d,In.d,[]),a["\u0275mpd"](1073742336,bn.a,bn.a,[]),a["\u0275mpd"](1073742336,Ln.a,Ln.a,[]),a["\u0275mpd"](1073742336,Mn.d,Mn.d,[]),a["\u0275mpd"](1073742336,Mn.c,Mn.c,[]),a["\u0275mpd"](1073742336,Sn.a,Sn.a,[]),a["\u0275mpd"](1073742336,Nn.a,Nn.a,[]),a["\u0275mpd"](1073742336,J.t,J.t,[]),a["\u0275mpd"](1073742336,J.q,J.q,[]),a["\u0275mpd"](1073742336,X.d,X.d,[]),a["\u0275mpd"](1073742336,An.a,An.a,[]),a["\u0275mpd"](1073742336,_n.a,_n.a,[]),a["\u0275mpd"](1073742336,Vn,Vn,[]),a["\u0275mpd"](1073742336,Pn.t,Pn.t,[[2,Pn.y],[2,Pn.p]]),a["\u0275mpd"](1073742336,p,p,[]),a["\u0275mpd"](1024,Pn.n,(function(){return[[{path:"",component:On.a,data:e}]]}),[])])}))},NdzE:function(n,s,l){"use strict";l.r(s),s.default='<form [formGroup]="form">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n</form>\n'},UjKx:function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyMaterialModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/material\'</span>;\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-keyword">import</span> { FormlyWrapperAddons } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./addons.wrapper\'</span>;\n<span class="hljs-keyword">import</span> { addonsExtension } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./addons.extension\'</span>;\n\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyMaterialModule,\n    FormlyModule.forRoot({\n      wrappers: [\n        { name: <span class="hljs-string">\'addons\'</span>, component: FormlyWrapperAddons },\n      ],\n      extensions: [\n        { name: <span class="hljs-string">\'addons\'</span>, extension: { onPopulate: addonsExtension } },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n    FormlyWrapperAddons,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},WPhX:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},h9MB:function(n,s){n.exports='<span class="hljs-keyword">import</span> { FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addonsExtension</span>(<span class="hljs-params">field: FormlyFieldConfig</span>) </span>{\n  <span class="hljs-keyword">if</span> (!field.templateOptions || (field.wrappers &amp;&amp; field.wrappers.indexOf(<span class="hljs-string">\'addons\'</span>) !== <span class="hljs-number">-1</span>)) {\n    <span class="hljs-keyword">return</span>;\n  }\n\n  <span class="hljs-keyword">if</span> (field.templateOptions.addonLeft || field.templateOptions.addonRight) {\n    field.wrappers = [...(field.wrappers || []), <span class="hljs-string">\'addons\'</span>];\n  }\n}\n'},svYT:function(n,s,l){"use strict";l.r(s),s.default="import { FormlyFieldConfig } from '@ngx-formly/core';\n\nexport function addonsExtension(field: FormlyFieldConfig) {\n  if (!field.templateOptions || (field.wrappers && field.wrappers.indexOf('addons') !== -1)) {\n    return;\n  }\n\n  if (field.templateOptions.addonLeft || field.templateOptions.addonRight) {\n    field.wrappers = [...(field.wrappers || []), 'addons'];\n  }\n}\n"},v9bi:function(n,s,l){"use strict";l.r(s),s.default='import { Component, TemplateRef, ViewChild, AfterViewInit } from \'@angular/core\';\nimport { FieldWrapper } from \'@ngx-formly/core\';\n\n@Component({\n  selector: \'formly-wrapper-addons\',\n  template: `\n  <ng-template #matPrefix>\n    <span\n      *ngIf="to.addonLeft"\n      [ngStyle]="{cursor: to.addonLeft.onClick ? \'pointer\' : \'inherit\'}"\n      (click)="addonLeftClick($event)"\n    >\n      <i *ngIf="to.addonLeft.class" [ngClass]="to.addonLeft.class"></i>&nbsp;\n      <span *ngIf="to.addonLeft.text">{{ to.addonLeft.text }}</span>&nbsp;\n    </span>\n  </ng-template>\n\n  <ng-container #fieldComponent></ng-container>\n\n  <ng-template #matSuffix>\n    <span\n      *ngIf="to.addonRight"\n      [ngStyle]="{cursor: to.addonRight.onClick ? \'pointer\' : \'inherit\'}"\n      (click)="addonRightClick($event)"\n    >\n      &nbsp;<i *ngIf="to.addonRight.class" [ngClass]="to.addonRight.class"></i>\n      &nbsp;<span *ngIf="to.addonRight.text">{{ to.addonRight.text }}</span>\n    </span>\n  </ng-template>\n  `,\n})\nexport class FormlyWrapperAddons extends FieldWrapper implements AfterViewInit {\n  @ViewChild(\'matPrefix\', { static: true }) matPrefix: TemplateRef<any>;\n  @ViewChild(\'matSuffix\', { static: true }) matSuffix: TemplateRef<any>;\n\n  ngAfterViewInit() {\n    if (this.matPrefix) {\n      this.to.prefix = this.matPrefix;\n    }\n\n    if (this.matSuffix) {\n      this.to.suffix = this.matSuffix;\n    }\n  }\n\n  addonRightClick($event: any) {\n    if (this.to.addonRight.onClick) {\n      this.to.addonRight.onClick(this.to, this, $event);\n    }\n  }\n\n  addonLeftClick($event: any) {\n    if (this.to.addonLeft.onClick) {\n      this.to.addonLeft.onClick(this.to, this, $event);\n    }\n  }\n}\n'},xnnS:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'input\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Firstname\'</span>,\n        addonLeft: {\n          <span class="hljs-keyword">class</span>: <span class="hljs-string">\'fa fa-dashboard\'</span>,\n        },\n        addonRight: {\n          text: <span class="hljs-string">\'$\'</span>,\n        },\n      },\n    },\n  ];\n}\n'}}]);