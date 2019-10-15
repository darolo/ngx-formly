(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"5nzg":function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormArray, FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">interface</span> TabType {\n  label: <span class="hljs-built_in">string</span>;\n  fields: FormlyFieldConfig[];\n}\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  model = {};\n  tabs: TabType[] = [\n    {\n      label: <span class="hljs-string">\'Personal data\'</span>,\n      fields: [\n        {\n          key: <span class="hljs-string">\'firstname\'</span>,\n          <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n          templateOptions: {\n            label: <span class="hljs-string">\'First name\'</span>,\n            required: <span class="hljs-literal">true</span>,\n          },\n        },\n        {\n          key: <span class="hljs-string">\'age\'</span>,\n          <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n          templateOptions: {\n            <span class="hljs-keyword">type</span>: <span class="hljs-string">\'number\'</span>,\n            label: <span class="hljs-string">\'Age\'</span>,\n            required: <span class="hljs-literal">true</span>,\n          },\n        },\n      ],\n    },\n    {\n      label: <span class="hljs-string">\'Destination\'</span>,\n      fields: [\n        {\n          key: <span class="hljs-string">\'country\'</span>,\n          <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n          templateOptions: {\n            label: <span class="hljs-string">\'Country\'</span>,\n            required: <span class="hljs-literal">true</span>,\n          },\n        },\n      ],\n    },\n    {\n      label: <span class="hljs-string">\'Day of the trip\'</span>,\n      fields: [\n        {\n          key: <span class="hljs-string">\'day\'</span>,\n          <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n          templateOptions: {\n            <span class="hljs-keyword">type</span>: <span class="hljs-string">\'date\'</span>,\n            label: <span class="hljs-string">\'Day of the trip\'</span>,\n            required: <span class="hljs-literal">true</span>,\n          },\n        },\n      ],\n    },\n  ];\n  form = <span class="hljs-keyword">new</span> FormArray(<span class="hljs-keyword">this</span>.tabs.map(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-keyword">new</span> FormGroup({})));\n  options = <span class="hljs-keyword">this</span>.tabs.map(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> &lt;FormlyFormOptions&gt; {});\n\n  submit() {\n    alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n  }\n}\n'},Kgeu:function(n,s,a){"use strict";a.r(s);var l=a("Mlb/"),t=a("QZuW");class e{constructor(){this.model={},this.tabs=[{label:"Personal data",fields:[{key:"firstname",type:"input",templateOptions:{label:"First name",required:!0}},{key:"age",type:"input",templateOptions:{type:"number",label:"Age",required:!0}}]},{label:"Destination",fields:[{key:"country",type:"input",templateOptions:{label:"Country",required:!0}}]},{label:"Day of the trip",fields:[{key:"day",type:"input",templateOptions:{type:"date",label:"Day of the trip",required:!0}}]}],this.form=new t.FormArray(this.tabs.map(()=>new t.FormGroup({}))),this.options=this.tabs.map(()=>({}))}submit(){alert(JSON.stringify(this.model))}}const p={examples:[{title:"Tabs Form",description:'\n              This is an example of Tabs form using <a href="https://material.angular.io/components/tabs/overview" target="_blank">Material Tabs</a>\n            ',component:e,files:[{file:"app.component.html",content:a("UZIy"),filecontent:a("qzrs")},{file:"app.component.ts",content:a("5nzg"),filecontent:a("ey2E")},{file:"app.module.ts",content:a("d007"),filecontent:a("Shje")}]}]};class o{}var r=a("n91+"),i=a("aUi8"),m=a("xRU+"),d=a("l9Gt"),c=a("tb2p"),u=a("5swT"),g=a("rGUg"),f=a("qEw3"),h=a("KL5v"),b=a("WPgD"),y=a("wR1y"),j=a("fYis"),k=a("mSm0"),v=a("GTPT"),w=a("2lML"),F=a("g/x9"),x=a("Ea/l"),C=a("kY9M"),M=a("cXvR"),_=a("P6pJ"),T=a("vk2e"),q=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function R(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,16777216,null,null,6,"mat-tab",[],null,null,null,v.d,v.a)),l["\u0275did"](1,770048,[[1,4]],2,w.c,[l.ViewContainerRef],{disabled:[0,"disabled"],textLabel:[1,"textLabel"]},null),l["\u0275qud"](603979776,2,{templateLabel:0}),l["\u0275qud"](335544320,3,{_explicitContent:0}),(n()(),l["\u0275eld"](4,0,null,0,2,"formly-form",[],null,null,null,F.b,F.a)),l["\u0275prd"](512,null,x.a,x.a,[C.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275did"](6,966656,null,0,M.a,[x.a,C.b,[2,t.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),l["\u0275and"](0,null,null,0))],(function(n,s){var a=s.component,l=null;n(s,1,0,0!==s.context.index&&!(null!=(l=a.form.at(s.context.index-1))&&l.valid),s.context.$implicit.label),n(s,6,0,a.form.at(s.context.index),a.model,s.context.$implicit.fields,a.options[s.context.index])}),null)}function S(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,16,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,s,a){var t=!0,e=n.component;return"submit"===s&&(t=!1!==l["\u0275nov"](n,2).onSubmit(a)&&t),"reset"===s&&(t=!1!==l["\u0275nov"](n,2).onReset()&&t),"ngSubmit"===s&&(t=!1!==e.submit()&&t),t}),null,null)),l["\u0275did"](1,16384,null,0,t["\u0275angular_packages_forms_forms_z"],[],null,null),l["\u0275did"](2,540672,null,0,t.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),l["\u0275prd"](2048,null,t.ControlContainer,null,[t.FormGroupDirective]),l["\u0275did"](4,16384,null,0,t.NgControlStatusGroup,[[4,t.ControlContainer]],null,null),(n()(),l["\u0275eld"](5,0,null,null,11,"mat-tab-group",[["class","mat-tab-group"]],[[2,"mat-tab-group-dynamic-height",null],[2,"mat-tab-group-inverted-header",null]],null,null,v.c,v.b)),l["\u0275did"](6,3325952,null,1,w.f,[l.ElementRef,l.ChangeDetectorRef,[2,w.a],[2,_.a]],null,null),l["\u0275qud"](603979776,1,{_tabs:1}),(n()(),l["\u0275and"](16777216,null,null,1,null,R)),l["\u0275did"](9,278528,null,0,T.NgForOf,[l.ViewContainerRef,l.TemplateRef,l.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),l["\u0275eld"](10,16777216,null,null,6,"mat-tab",[["label","Submit"]],null,null,null,v.d,v.a)),l["\u0275did"](11,770048,[[1,4]],2,w.c,[l.ViewContainerRef],{textLabel:[0,"textLabel"]},null),l["\u0275qud"](603979776,4,{templateLabel:0}),l["\u0275qud"](335544320,5,{_explicitContent:0}),(n()(),l["\u0275eld"](14,0,null,0,2,"div",[],null,null,null,null,null)),(n()(),l["\u0275eld"](15,0,null,null,1,"button",[["class","btn btn-primary"],["mat-raised-button",""],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Submit"]))],(function(n,s){var a=s.component;n(s,2,0,a.form),n(s,9,0,a.tabs),n(s,11,0,"Submit")}),(function(n,s){var a=s.component;n(s,0,0,l["\u0275nov"](s,4).ngClassUntouched,l["\u0275nov"](s,4).ngClassTouched,l["\u0275nov"](s,4).ngClassPristine,l["\u0275nov"](s,4).ngClassDirty,l["\u0275nov"](s,4).ngClassValid,l["\u0275nov"](s,4).ngClassInvalid,l["\u0275nov"](s,4).ngClassPending),n(s,5,0,l["\u0275nov"](s,6).dynamicHeight,"below"===l["\u0275nov"](s,6).headerPosition),n(s,15,0,!a.form.valid)}))}function O(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,S,q)),l["\u0275did"](1,49152,null,0,e,[],null,null)],null,null)}var A=l["\u0275ccf"]("formly-app-example",e,O,{},{},[]),D=a("o3+a"),N=a("9b0e"),L=a("6YJn"),G=a("dvHj"),P=a("C0xW"),U=a("W9sv"),I=a("m6lo"),J=a("S6Ld"),z=a("cTZo"),V=a("Kfqh"),E=a("Ienz"),K=a("KuLc"),W=a("Z7++"),B=a("pgVP"),Z=a("pk7F"),Y=a("T8+l"),X=a("0hby"),H=a("tVba"),$=a("XX7/"),Q=a("pLrJ"),nn=a("U5/R"),sn=a("TqxR"),an=a("soK0"),ln=a("1k+g"),tn=a("pAed"),en=a("VtvF"),pn=a("lN7U"),on=a("NPi3"),rn=a("PCNd"),mn=a("WCiw"),dn=a("Vtge"),cn=a("+5Wd"),un=a("+R4m"),gn=a("SSYk"),fn=a("KJU8"),hn=a("eTA3"),bn=a("o12O"),yn=a("iWYX"),jn=a("h18T");class kn{}var vn=a("qk26"),wn=a("P+xK");a.d(s,"ConfigModuleNgFactory",(function(){return Fn}));var Fn=l["\u0275cmf"](o,[],(function(n){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,i.a,m.a,d.a,c.a,u.a,g.a,f.a,h.a,b.a,y.a,j.a,k.a,A]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,T.NgLocalization,T.NgLocaleLocalization,[l.LOCALE_ID,[2,T["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](4608,D.c,D.c,[]),l["\u0275mpd"](4608,N.c,N.c,[N.i,N.e,l.ComponentFactoryResolver,N.h,N.f,l.Injector,l.NgZone,T.DOCUMENT,L.b,[2,T.Location]]),l["\u0275mpd"](5120,N.j,N.k,[N.c]),l["\u0275mpd"](5120,G.b,G.c,[N.c]),l["\u0275mpd"](4608,P.e,U.c,[[2,U.g],[2,U.l]]),l["\u0275mpd"](5120,I.c,I.j,[N.c]),l["\u0275mpd"](4608,J.a,J.a,[]),l["\u0275mpd"](4608,z.a,z.a,[]),l["\u0275mpd"](4608,t.FormBuilder,t.FormBuilder,[]),l["\u0275mpd"](4608,t["\u0275angular_packages_forms_forms_o"],t["\u0275angular_packages_forms_forms_o"],[]),l["\u0275mpd"](4608,x.a,x.a,[C.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275mpd"](1073742336,T.CommonModule,T.CommonModule,[]),l["\u0275mpd"](1073742336,V.b,V.b,[]),l["\u0275mpd"](1073742336,D.d,D.d,[]),l["\u0275mpd"](1073742336,E.a,E.a,[]),l["\u0275mpd"](1073742336,L.a,L.a,[]),l["\u0275mpd"](1073742336,K.g,K.g,[]),l["\u0275mpd"](1073742336,W.ScrollingModule,W.ScrollingModule,[]),l["\u0275mpd"](1073742336,N.g,N.g,[]),l["\u0275mpd"](1073742336,U.l,U.l,[[2,U.d],[2,P.f]]),l["\u0275mpd"](1073742336,G.e,G.e,[]),l["\u0275mpd"](1073742336,U.v,U.v,[]),l["\u0275mpd"](1073742336,w.j,w.j,[]),l["\u0275mpd"](1073742336,I.i,I.i,[]),l["\u0275mpd"](1073742336,I.f,I.f,[]),l["\u0275mpd"](1073742336,B.c,B.c,[]),l["\u0275mpd"](1073742336,Z.c,Z.c,[]),l["\u0275mpd"](1073742336,Y.b,Y.b,[]),l["\u0275mpd"](512,C.b,C.b,[]),l["\u0275mpd"](1024,C.a,(function(n){return[{wrappers:[{name:"form-field",component:X.a}]},{types:[{name:"input",component:H.a,wrappers:["form-field"]}]},{types:[{name:"textarea",component:$.a,wrappers:["form-field"]}]},{types:[{name:"radio",component:Q.a,wrappers:["form-field"]}]},{types:[{name:"checkbox",component:nn.a,wrappers:["form-field"]}]},{types:[{name:"multicheckbox",component:sn.a,wrappers:["form-field"]}]},{types:[{name:"select",component:an.a,wrappers:["form-field"]}]},{wrappers:[{name:"addons",component:ln.a}],extensions:[{name:"addons",extension:{postPopulate:tn.a}}]},en.b(n),{validationMessages:[{name:"required",message:"This field is required"}]}]}),[C.b]),l["\u0275mpd"](1073742336,en.a,en.a,[C.b,[2,C.a]]),l["\u0275mpd"](1073742336,pn.h,pn.h,[]),l["\u0275mpd"](1073742336,on.b,on.b,[]),l["\u0275mpd"](1073742336,rn.a,rn.a,[]),l["\u0275mpd"](1073742336,t["\u0275angular_packages_forms_forms_d"],t["\u0275angular_packages_forms_forms_d"],[]),l["\u0275mpd"](1073742336,t.ReactiveFormsModule,t.ReactiveFormsModule,[]),l["\u0275mpd"](1073742336,mn.a,mn.a,[]),l["\u0275mpd"](1073742336,dn.a,dn.a,[]),l["\u0275mpd"](1073742336,cn.a,cn.a,[]),l["\u0275mpd"](1073742336,un.a,un.a,[]),l["\u0275mpd"](1073742336,gn.a,gn.a,[]),l["\u0275mpd"](1073742336,fn.a,fn.a,[]),l["\u0275mpd"](1073742336,hn.a,hn.a,[]),l["\u0275mpd"](1073742336,bn.a,bn.a,[]),l["\u0275mpd"](1073742336,yn.a,yn.a,[]),l["\u0275mpd"](1073742336,jn.a,jn.a,[]),l["\u0275mpd"](1073742336,kn,kn,[]),l["\u0275mpd"](1073742336,vn.t,vn.t,[[2,vn.y],[2,vn.p]]),l["\u0275mpd"](1073742336,o,o,[]),l["\u0275mpd"](1024,vn.n,(function(){return[[{path:"",component:wn.a,data:p}]]}),[])])}))},Shje:function(n,s,a){"use strict";a.r(s),s.default="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\nimport { MatTabsModule } from '@angular/material/tabs';\n\nimport { AppComponent } from './app.component';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    MatTabsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        { name: 'required', message: 'This field is required' },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},UZIy:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-tab-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-tab</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">"let tab of tabs;let index = index;"</span>\n      [<span class="hljs-attr">label</span>]=<span class="hljs-string">"tab.label"</span>\n      [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"index !== 0 &amp;&amp; !form.at(index - 1)?.valid"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span>\n        [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form.at(index)"</span>\n        [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span>\n        [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"tab.fields"</span>\n        [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options[index]"</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">mat-tab</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Submit"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">mat-raised-button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"!form.valid"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">mat-tab</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-tab-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},d007:function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n<span class="hljs-keyword">import</span> { MatTabsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/material/tabs\'</span>;\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    MatTabsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        { name: <span class="hljs-string">\'required\'</span>, message: <span class="hljs-string">\'This field is required\'</span> },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},ey2E:function(n,s,a){"use strict";a.r(s),s.default="import { Component } from '@angular/core';\nimport { FormArray, FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\nexport interface TabType {\n  label: string;\n  fields: FormlyFieldConfig[];\n}\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  model = {};\n  tabs: TabType[] = [\n    {\n      label: 'Personal data',\n      fields: [\n        {\n          key: 'firstname',\n          type: 'input',\n          templateOptions: {\n            label: 'First name',\n            required: true,\n          },\n        },\n        {\n          key: 'age',\n          type: 'input',\n          templateOptions: {\n            type: 'number',\n            label: 'Age',\n            required: true,\n          },\n        },\n      ],\n    },\n    {\n      label: 'Destination',\n      fields: [\n        {\n          key: 'country',\n          type: 'input',\n          templateOptions: {\n            label: 'Country',\n            required: true,\n          },\n        },\n      ],\n    },\n    {\n      label: 'Day of the trip',\n      fields: [\n        {\n          key: 'day',\n          type: 'input',\n          templateOptions: {\n            type: 'date',\n            label: 'Day of the trip',\n            required: true,\n          },\n        },\n      ],\n    },\n  ];\n  form = new FormArray(this.tabs.map(() => new FormGroup({})));\n  options = this.tabs.map(() => <FormlyFormOptions> {});\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n}\n"},qzrs:function(n,s,a){"use strict";a.r(s),s.default='<form [formGroup]="form" (ngSubmit)="submit()">\n  <mat-tab-group>\n    <mat-tab *ngFor="let tab of tabs;let index = index;"\n      [label]="tab.label"\n      [disabled]="index !== 0 && !form.at(index - 1)?.valid">\n      <formly-form\n        [form]="form.at(index)"\n        [model]="model"\n        [fields]="tab.fields"\n        [options]="options[index]">\n      </formly-form>\n    </mat-tab>\n    <mat-tab label="Submit">\n      <div>\n        <button mat-raised-button class="btn btn-primary" [disabled]="!form.valid" type="submit">Submit</button>\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n</form>\n'}}]);