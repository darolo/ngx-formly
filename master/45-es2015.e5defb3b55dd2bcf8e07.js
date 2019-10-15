(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"89/6":function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n\n  model = {\n    lastName: <span class="hljs-string">\'Smith\'</span>,\n  };\n\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'firstName\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      defaultValue: <span class="hljs-string">\'This is a default value\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'First Name (initialized via default value)\'</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'lastName\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      defaultValue: <span class="hljs-string">\'This is a default value\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Last Name (initialized via the model)\'</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'candy\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'select\'</span>,\n      defaultValue: <span class="hljs-string">\'milky_way\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Favorite Candy (initialized via default value\'</span>,\n        options: [\n          { label: <span class="hljs-string">\'Snickers\'</span>, value: <span class="hljs-string">\'snickers\'</span> },\n          { label: <span class="hljs-string">\'Baby Ruth\'</span>, value: <span class="hljs-string">\'baby_ruth\'</span> },\n          { label: <span class="hljs-string">\'Milky Way\'</span>, value: <span class="hljs-string">\'milky_way\'</span> },\n        ],\n      },\n    },\n    {\n      key: <span class="hljs-string">\'agree\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'checkbox\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Agree? (not initialized at all)\'</span>,\n        required: <span class="hljs-literal">true</span>,\n      },\n    },\n  ];\n\n  submit() {\n    alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n  }\n}\n'},"e+vM":function(n,s,a){"use strict";a.r(s);var l=a("Mlb/"),e=a("QZuW");class o{constructor(){this.form=new e.FormGroup({}),this.model={lastName:"Smith"},this.options={},this.fields=[{key:"firstName",type:"input",defaultValue:"This is a default value",templateOptions:{label:"First Name (initialized via default value)"}},{key:"lastName",type:"input",defaultValue:"This is a default value",templateOptions:{label:"Last Name (initialized via the model)"}},{key:"candy",type:"select",defaultValue:"milky_way",templateOptions:{label:"Favorite Candy (initialized via default value",options:[{label:"Snickers",value:"snickers"},{label:"Baby Ruth",value:"baby_ruth"},{label:"Milky Way",value:"milky_way"}]}},{key:"agree",type:"checkbox",templateOptions:{label:"Agree? (not initialized at all)",required:!0}}]}submit(){alert(JSON.stringify(this.model))}}const t={examples:[{title:"Default Value",description:"\n              There are two ways to initialize the form with default values.\n              <ol>\n                <li>Default the model (preferred)</li>\n                <li>Use the\n                  <code>defaultValue</code> option on the field</li>\n              </ol>\n              Both methods are demonstrated below.\n            ",component:o,files:[{file:"app.component.html",content:a("sHGo"),filecontent:a("kncq")},{file:"app.component.ts",content:a("89/6"),filecontent:a("w4H/")},{file:"app.module.ts",content:a("jYaY"),filecontent:a("gRog")}]}]};class p{}var r=a("n91+"),i=a("aUi8"),m=a("xRU+"),d=a("l9Gt"),u=a("tb2p"),c=a("5swT"),f=a("rGUg"),h=a("qEw3"),g=a("KL5v"),y=a("WPgD"),j=a("wR1y"),b=a("fYis"),v=a("mSm0"),k=a("g/x9"),w=a("Ea/l"),F=a("kY9M"),C=a("cXvR"),M=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function _(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,s,a){var e=!0,o=n.component;return"submit"===s&&(e=!1!==l["\u0275nov"](n,2).onSubmit(a)&&e),"reset"===s&&(e=!1!==l["\u0275nov"](n,2).onReset()&&e),"ngSubmit"===s&&(e=!1!==o.submit()&&e),e}),null,null)),l["\u0275did"](1,16384,null,0,e["\u0275angular_packages_forms_forms_z"],[],null,null),l["\u0275did"](2,540672,null,0,e.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),l["\u0275prd"](2048,null,e.ControlContainer,null,[e.FormGroupDirective]),l["\u0275did"](4,16384,null,0,e.NgControlStatusGroup,[[4,e.ControlContainer]],null,null),(n()(),l["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,k.b,k.a)),l["\u0275prd"](512,null,w.a,w.a,[F.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275did"](7,966656,null,0,C.a,[w.a,F.b,[2,e.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),l["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Submit"]))],(function(n,s){var a=s.component;n(s,2,0,a.form),n(s,7,0,a.form,a.model,a.fields,a.options)}),(function(n,s){var a=s.component;n(s,0,0,l["\u0275nov"](s,4).ngClassUntouched,l["\u0275nov"](s,4).ngClassTouched,l["\u0275nov"](s,4).ngClassPristine,l["\u0275nov"](s,4).ngClassDirty,l["\u0275nov"](s,4).ngClassValid,l["\u0275nov"](s,4).ngClassInvalid,l["\u0275nov"](s,4).ngClassPending),n(s,8,0,!a.form.valid)}))}function N(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,_,M)),l["\u0275did"](1,49152,null,0,o,[],null,null)],null,null)}var x=l["\u0275ccf"]("formly-app-example",o,N,{},{},[]),R=a("vk2e"),S=a("o3+a"),O=a("9b0e"),z=a("6YJn"),V=a("dvHj"),G=a("C0xW"),T=a("W9sv"),A=a("m6lo"),L=a("S6Ld"),U=a("cTZo"),B=a("Kfqh"),W=a("Ienz"),q=a("KuLc"),D=a("Z7++"),Y=a("2lML"),J=a("pgVP"),P=a("pk7F"),I=a("T8+l"),K=a("0hby"),H=a("tVba"),E=a("XX7/"),X=a("pLrJ"),Z=a("U5/R"),Q=a("TqxR"),$=a("soK0"),nn=a("1k+g"),sn=a("pAed"),an=a("VtvF"),ln=a("lN7U"),en=a("NPi3"),on=a("PCNd"),tn=a("WCiw"),pn=a("Vtge"),rn=a("+5Wd"),mn=a("+R4m"),dn=a("SSYk"),un=a("KJU8"),cn=a("eTA3"),fn=a("o12O"),hn=a("iWYX"),gn=a("h18T");class yn{}var jn=a("qk26"),bn=a("P+xK");a.d(s,"ConfigModuleNgFactory",(function(){return vn}));var vn=l["\u0275cmf"](p,[],(function(n){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,i.a,m.a,d.a,u.a,c.a,f.a,h.a,g.a,y.a,j.a,b.a,v.a,x]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,R.NgLocalization,R.NgLocaleLocalization,[l.LOCALE_ID,[2,R["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](4608,S.c,S.c,[]),l["\u0275mpd"](4608,O.c,O.c,[O.i,O.e,l.ComponentFactoryResolver,O.h,O.f,l.Injector,l.NgZone,R.DOCUMENT,z.b,[2,R.Location]]),l["\u0275mpd"](5120,O.j,O.k,[O.c]),l["\u0275mpd"](5120,V.b,V.c,[O.c]),l["\u0275mpd"](4608,G.e,T.c,[[2,T.g],[2,T.l]]),l["\u0275mpd"](5120,A.c,A.j,[O.c]),l["\u0275mpd"](4608,L.a,L.a,[]),l["\u0275mpd"](4608,U.a,U.a,[]),l["\u0275mpd"](4608,e.FormBuilder,e.FormBuilder,[]),l["\u0275mpd"](4608,e["\u0275angular_packages_forms_forms_o"],e["\u0275angular_packages_forms_forms_o"],[]),l["\u0275mpd"](4608,w.a,w.a,[F.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275mpd"](1073742336,R.CommonModule,R.CommonModule,[]),l["\u0275mpd"](1073742336,B.b,B.b,[]),l["\u0275mpd"](1073742336,S.d,S.d,[]),l["\u0275mpd"](1073742336,W.a,W.a,[]),l["\u0275mpd"](1073742336,z.a,z.a,[]),l["\u0275mpd"](1073742336,q.g,q.g,[]),l["\u0275mpd"](1073742336,D.ScrollingModule,D.ScrollingModule,[]),l["\u0275mpd"](1073742336,O.g,O.g,[]),l["\u0275mpd"](1073742336,T.l,T.l,[[2,T.d],[2,G.f]]),l["\u0275mpd"](1073742336,V.e,V.e,[]),l["\u0275mpd"](1073742336,T.v,T.v,[]),l["\u0275mpd"](1073742336,Y.j,Y.j,[]),l["\u0275mpd"](1073742336,A.i,A.i,[]),l["\u0275mpd"](1073742336,A.f,A.f,[]),l["\u0275mpd"](1073742336,J.c,J.c,[]),l["\u0275mpd"](1073742336,P.c,P.c,[]),l["\u0275mpd"](1073742336,I.b,I.b,[]),l["\u0275mpd"](512,F.b,F.b,[]),l["\u0275mpd"](1024,F.a,(function(n){return[{wrappers:[{name:"form-field",component:K.a}]},{types:[{name:"input",component:H.a,wrappers:["form-field"]}]},{types:[{name:"textarea",component:E.a,wrappers:["form-field"]}]},{types:[{name:"radio",component:X.a,wrappers:["form-field"]}]},{types:[{name:"checkbox",component:Z.a,wrappers:["form-field"]}]},{types:[{name:"multicheckbox",component:Q.a,wrappers:["form-field"]}]},{types:[{name:"select",component:$.a,wrappers:["form-field"]}]},{wrappers:[{name:"addons",component:nn.a}],extensions:[{name:"addons",extension:{postPopulate:sn.a}}]},an.b(n),{}]}),[F.b]),l["\u0275mpd"](1073742336,an.a,an.a,[F.b,[2,F.a]]),l["\u0275mpd"](1073742336,ln.h,ln.h,[]),l["\u0275mpd"](1073742336,en.b,en.b,[]),l["\u0275mpd"](1073742336,on.a,on.a,[]),l["\u0275mpd"](1073742336,e["\u0275angular_packages_forms_forms_d"],e["\u0275angular_packages_forms_forms_d"],[]),l["\u0275mpd"](1073742336,e.ReactiveFormsModule,e.ReactiveFormsModule,[]),l["\u0275mpd"](1073742336,tn.a,tn.a,[]),l["\u0275mpd"](1073742336,pn.a,pn.a,[]),l["\u0275mpd"](1073742336,rn.a,rn.a,[]),l["\u0275mpd"](1073742336,mn.a,mn.a,[]),l["\u0275mpd"](1073742336,dn.a,dn.a,[]),l["\u0275mpd"](1073742336,un.a,un.a,[]),l["\u0275mpd"](1073742336,cn.a,cn.a,[]),l["\u0275mpd"](1073742336,fn.a,fn.a,[]),l["\u0275mpd"](1073742336,hn.a,hn.a,[]),l["\u0275mpd"](1073742336,gn.a,gn.a,[]),l["\u0275mpd"](1073742336,yn,yn,[]),l["\u0275mpd"](1073742336,jn.t,jn.t,[[2,jn.y],[2,jn.p]]),l["\u0275mpd"](1073742336,p,p,[]),l["\u0275mpd"](1024,jn.n,(function(){return[[{path:"",component:bn.a,data:t}]]}),[])])}))},gRog:function(n,s,a){"use strict";a.r(s),s.default="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},jYaY:function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},kncq:function(n,s,a){"use strict";a.r(s),s.default='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>\n</form>'},sHGo:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"!form.valid"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>'},"w4H/":function(n,s,a){"use strict";a.r(s),s.default="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n\n  model = {\n    lastName: 'Smith',\n  };\n\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'firstName',\n      type: 'input',\n      defaultValue: 'This is a default value',\n      templateOptions: {\n        label: 'First Name (initialized via default value)',\n      },\n    },\n    {\n      key: 'lastName',\n      type: 'input',\n      defaultValue: 'This is a default value',\n      templateOptions: {\n        label: 'Last Name (initialized via the model)',\n      },\n    },\n    {\n      key: 'candy',\n      type: 'select',\n      defaultValue: 'milky_way',\n      templateOptions: {\n        label: 'Favorite Candy (initialized via default value',\n        options: [\n          { label: 'Snickers', value: 'snickers' },\n          { label: 'Baby Ruth', value: 'baby_ruth' },\n          { label: 'Milky Way', value: 'milky_way' },\n        ],\n      },\n    },\n    {\n      key: 'agree',\n      type: 'checkbox',\n      templateOptions: {\n        label: 'Agree? (not initialized at all)',\n        required: true,\n      },\n    },\n  ];\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n}\n"}}]);