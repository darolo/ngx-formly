(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"2cec":function(s,n,a){"use strict";a.r(n),n.default="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},IpUt:function(s,n,a){"use strict";a.r(n),n.default="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {\n    formState: {\n      selectOptionsData: {\n        teams: [\n          { id: '1', name: 'Bayern Munich', sportId: '1' },\n          { id: '2', name: 'Real Madrid', sportId: '1' },\n          { id: '3', name: 'Cleveland', sportId: '2' },\n          { id: '4', name: 'Miami', sportId: '2' },\n        ],\n        players: [\n          { id: '1', name: 'Bayern Munich (Player 1)', teamId: '1' },\n          { id: '2', name: 'Bayern Munich (Player 2)', teamId: '1' },\n          { id: '3', name: 'Real Madrid (Player 1)', teamId: '2' },\n          { id: '4', name: 'Real Madrid (Player 2)', teamId: '2' },\n          { id: '5', name: 'Cleveland (Player 1)', teamId: '3' },\n          { id: '6', name: 'Cleveland (Player 2)', teamId: '3' },\n          { id: '7', name: 'Miami (Player 1)', teamId: '4' },\n          { id: '8', name: 'Miami (Player 2)', teamId: '4' },\n        ],\n      },\n    },\n  };\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'sport',\n      type: 'select',\n      templateOptions: {\n        label: 'Sport',\n        options: [\n          { id: '1', name: 'Soccer' },\n          { id: '2', name: 'Basketball' },\n        ],\n        valueProp: 'id',\n        labelProp: 'name',\n      },\n    },\n    {\n      key: 'team',\n      type: 'select',\n      templateOptions: {\n        label: 'Team',\n        options: [],\n        valueProp: 'id',\n        labelProp: 'name',\n      },\n      expressionProperties: {\n        'templateOptions.options': 'formState.selectOptionsData.teams.filter(team => team.sportId === model.sport)',\n        // reset model when updating select options\n        'model.team': `field.templateOptions.options.find(o => o.id === model.team) ? model.team:null`,\n      },\n    },\n    {\n      key: 'player',\n      type: 'select',\n      templateOptions: {\n        label: 'Player',\n        options: [],\n        valueProp: 'id',\n        labelProp: 'name',\n      },\n      expressionProperties: {\n        'templateOptions.options': 'formState.selectOptionsData.players.filter(player => player.teamId === model.team)',\n        // reset model when updating select options\n        'model.player': `field.templateOptions.options.find(o => o.id === model.player) ? model.player:null`,\n      },\n    },\n  ];\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n}\n"},TT1c:function(s,n,a){"use strict";a.r(n),n.default='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>\n</form>\n'},XepZ:function(s,n){s.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},"fo+c":function(s,n){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"!form.valid"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},oUPz:function(s,n,a){"use strict";a.r(n);var l=a("Mlb/"),e=a("QZuW");class p{constructor(){this.form=new e.FormGroup({}),this.model={},this.options={formState:{selectOptionsData:{teams:[{id:"1",name:"Bayern Munich",sportId:"1"},{id:"2",name:"Real Madrid",sportId:"1"},{id:"3",name:"Cleveland",sportId:"2"},{id:"4",name:"Miami",sportId:"2"}],players:[{id:"1",name:"Bayern Munich (Player 1)",teamId:"1"},{id:"2",name:"Bayern Munich (Player 2)",teamId:"1"},{id:"3",name:"Real Madrid (Player 1)",teamId:"2"},{id:"4",name:"Real Madrid (Player 2)",teamId:"2"},{id:"5",name:"Cleveland (Player 1)",teamId:"3"},{id:"6",name:"Cleveland (Player 2)",teamId:"3"},{id:"7",name:"Miami (Player 1)",teamId:"4"},{id:"8",name:"Miami (Player 2)",teamId:"4"}]}}},this.fields=[{key:"sport",type:"select",templateOptions:{label:"Sport",options:[{id:"1",name:"Soccer"},{id:"2",name:"Basketball"}],valueProp:"id",labelProp:"name"}},{key:"team",type:"select",templateOptions:{label:"Team",options:[],valueProp:"id",labelProp:"name"},expressionProperties:{"templateOptions.options":"formState.selectOptionsData.teams.filter(team => team.sportId === model.sport)","model.team":"field.templateOptions.options.find(o => o.id === model.team) ? model.team:null"}},{key:"player",type:"select",templateOptions:{label:"Player",options:[],valueProp:"id",labelProp:"name"},expressionProperties:{"templateOptions.options":"formState.selectOptionsData.players.filter(player => player.teamId === model.team)","model.player":"field.templateOptions.options.find(o => o.id === model.player) ? model.player:null"}}]}submit(){alert(JSON.stringify(this.model))}}const o={examples:[{title:"Cascaded Select JSON powered",description:"",component:p,files:[{file:"app.component.html",content:a("fo+c"),filecontent:a("TT1c")},{file:"app.component.ts",content:a("te2w"),filecontent:a("IpUt")},{file:"app.module.ts",content:a("XepZ"),filecontent:a("2cec")}]}]};class t{}var r=a("n91+"),m=a("aUi8"),i=a("xRU+"),d=a("l9Gt"),c=a("tb2p"),u=a("5swT"),g=a("rGUg"),f=a("qEw3"),h=a("KL5v"),y=a("WPgD"),j=a("wR1y"),b=a("fYis"),v=a("mSm0"),M=a("g/x9"),P=a("Ea/l"),k=a("kY9M"),w=a("cXvR"),C=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function I(s){return l["\u0275vid"](0,[(s()(),l["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(s,n,a){var e=!0,p=s.component;return"submit"===n&&(e=!1!==l["\u0275nov"](s,2).onSubmit(a)&&e),"reset"===n&&(e=!1!==l["\u0275nov"](s,2).onReset()&&e),"ngSubmit"===n&&(e=!1!==p.submit()&&e),e}),null,null)),l["\u0275did"](1,16384,null,0,e["\u0275angular_packages_forms_forms_z"],[],null,null),l["\u0275did"](2,540672,null,0,e.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),l["\u0275prd"](2048,null,e.ControlContainer,null,[e.FormGroupDirective]),l["\u0275did"](4,16384,null,0,e.NgControlStatusGroup,[[4,e.ControlContainer]],null,null),(s()(),l["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,M.b,M.a)),l["\u0275prd"](512,null,P.a,P.a,[k.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275did"](7,966656,null,0,w.a,[P.a,k.b,[2,e.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(s()(),l["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(s()(),l["\u0275ted"](-1,null,["Submit"]))],(function(s,n){var a=n.component;s(n,2,0,a.form),s(n,7,0,a.form,a.model,a.fields,a.options)}),(function(s,n){var a=n.component;s(n,0,0,l["\u0275nov"](n,4).ngClassUntouched,l["\u0275nov"](n,4).ngClassTouched,l["\u0275nov"](n,4).ngClassPristine,l["\u0275nov"](n,4).ngClassDirty,l["\u0275nov"](n,4).ngClassValid,l["\u0275nov"](n,4).ngClassInvalid,l["\u0275nov"](n,4).ngClassPending),s(n,8,0,!a.form.valid)}))}function F(s){return l["\u0275vid"](0,[(s()(),l["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,I,C)),l["\u0275did"](1,49152,null,0,p,[],null,null)],null,null)}var O=l["\u0275ccf"]("formly-app-example",p,F,{},{},[]),S=a("vk2e"),x=a("o3+a"),R=a("9b0e"),_=a("6YJn"),B=a("dvHj"),N=a("C0xW"),D=a("W9sv"),T=a("m6lo"),G=a("S6Ld"),U=a("cTZo"),A=a("Kfqh"),L=a("Ienz"),J=a("KuLc"),W=a("Z7++"),K=a("2lML"),X=a("pgVP"),Z=a("pk7F"),z=a("T8+l"),V=a("0hby"),Y=a("tVba"),q=a("XX7/"),E=a("pLrJ"),H=a("U5/R"),Q=a("TqxR"),$=a("soK0"),ss=a("1k+g"),ns=a("pAed"),as=a("VtvF"),ls=a("lN7U"),es=a("NPi3"),ps=a("PCNd"),os=a("WCiw"),ts=a("Vtge"),rs=a("+5Wd"),ms=a("+R4m"),is=a("SSYk"),ds=a("KJU8"),cs=a("eTA3"),us=a("o12O"),gs=a("iWYX"),fs=a("h18T");class hs{}var ys=a("qk26"),js=a("P+xK");a.d(n,"ConfigModuleNgFactory",(function(){return bs}));var bs=l["\u0275cmf"](t,[],(function(s){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,m.a,i.a,d.a,c.a,u.a,g.a,f.a,h.a,y.a,j.a,b.a,v.a,O]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,S.NgLocalization,S.NgLocaleLocalization,[l.LOCALE_ID,[2,S["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](4608,x.c,x.c,[]),l["\u0275mpd"](4608,R.c,R.c,[R.i,R.e,l.ComponentFactoryResolver,R.h,R.f,l.Injector,l.NgZone,S.DOCUMENT,_.b,[2,S.Location]]),l["\u0275mpd"](5120,R.j,R.k,[R.c]),l["\u0275mpd"](5120,B.b,B.c,[R.c]),l["\u0275mpd"](4608,N.e,D.c,[[2,D.g],[2,D.l]]),l["\u0275mpd"](5120,T.c,T.j,[R.c]),l["\u0275mpd"](4608,G.a,G.a,[]),l["\u0275mpd"](4608,U.a,U.a,[]),l["\u0275mpd"](4608,e.FormBuilder,e.FormBuilder,[]),l["\u0275mpd"](4608,e["\u0275angular_packages_forms_forms_o"],e["\u0275angular_packages_forms_forms_o"],[]),l["\u0275mpd"](4608,P.a,P.a,[k.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275mpd"](1073742336,S.CommonModule,S.CommonModule,[]),l["\u0275mpd"](1073742336,A.b,A.b,[]),l["\u0275mpd"](1073742336,x.d,x.d,[]),l["\u0275mpd"](1073742336,L.a,L.a,[]),l["\u0275mpd"](1073742336,_.a,_.a,[]),l["\u0275mpd"](1073742336,J.g,J.g,[]),l["\u0275mpd"](1073742336,W.ScrollingModule,W.ScrollingModule,[]),l["\u0275mpd"](1073742336,R.g,R.g,[]),l["\u0275mpd"](1073742336,D.l,D.l,[[2,D.d],[2,N.f]]),l["\u0275mpd"](1073742336,B.e,B.e,[]),l["\u0275mpd"](1073742336,D.v,D.v,[]),l["\u0275mpd"](1073742336,K.j,K.j,[]),l["\u0275mpd"](1073742336,T.i,T.i,[]),l["\u0275mpd"](1073742336,T.f,T.f,[]),l["\u0275mpd"](1073742336,X.c,X.c,[]),l["\u0275mpd"](1073742336,Z.c,Z.c,[]),l["\u0275mpd"](1073742336,z.b,z.b,[]),l["\u0275mpd"](512,k.b,k.b,[]),l["\u0275mpd"](1024,k.a,(function(s){return[{wrappers:[{name:"form-field",component:V.a}]},{types:[{name:"input",component:Y.a,wrappers:["form-field"]}]},{types:[{name:"textarea",component:q.a,wrappers:["form-field"]}]},{types:[{name:"radio",component:E.a,wrappers:["form-field"]}]},{types:[{name:"checkbox",component:H.a,wrappers:["form-field"]}]},{types:[{name:"multicheckbox",component:Q.a,wrappers:["form-field"]}]},{types:[{name:"select",component:$.a,wrappers:["form-field"]}]},{wrappers:[{name:"addons",component:ss.a}],extensions:[{name:"addons",extension:{postPopulate:ns.a}}]},as.b(s),{}]}),[k.b]),l["\u0275mpd"](1073742336,as.a,as.a,[k.b,[2,k.a]]),l["\u0275mpd"](1073742336,ls.h,ls.h,[]),l["\u0275mpd"](1073742336,es.b,es.b,[]),l["\u0275mpd"](1073742336,ps.a,ps.a,[]),l["\u0275mpd"](1073742336,e["\u0275angular_packages_forms_forms_d"],e["\u0275angular_packages_forms_forms_d"],[]),l["\u0275mpd"](1073742336,e.ReactiveFormsModule,e.ReactiveFormsModule,[]),l["\u0275mpd"](1073742336,os.a,os.a,[]),l["\u0275mpd"](1073742336,ts.a,ts.a,[]),l["\u0275mpd"](1073742336,rs.a,rs.a,[]),l["\u0275mpd"](1073742336,ms.a,ms.a,[]),l["\u0275mpd"](1073742336,is.a,is.a,[]),l["\u0275mpd"](1073742336,ds.a,ds.a,[]),l["\u0275mpd"](1073742336,cs.a,cs.a,[]),l["\u0275mpd"](1073742336,us.a,us.a,[]),l["\u0275mpd"](1073742336,gs.a,gs.a,[]),l["\u0275mpd"](1073742336,fs.a,fs.a,[]),l["\u0275mpd"](1073742336,hs,hs,[]),l["\u0275mpd"](1073742336,ys.t,ys.t,[[2,ys.y],[2,ys.p]]),l["\u0275mpd"](1073742336,t,t,[]),l["\u0275mpd"](1024,ys.n,(function(){return[[{path:"",component:js.a,data:o}]]}),[])])}))},te2w:function(s,n){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {\n    formState: {\n      selectOptionsData: {\n        teams: [\n          { id: <span class="hljs-string">\'1\'</span>, name: <span class="hljs-string">\'Bayern Munich\'</span>, sportId: <span class="hljs-string">\'1\'</span> },\n          { id: <span class="hljs-string">\'2\'</span>, name: <span class="hljs-string">\'Real Madrid\'</span>, sportId: <span class="hljs-string">\'1\'</span> },\n          { id: <span class="hljs-string">\'3\'</span>, name: <span class="hljs-string">\'Cleveland\'</span>, sportId: <span class="hljs-string">\'2\'</span> },\n          { id: <span class="hljs-string">\'4\'</span>, name: <span class="hljs-string">\'Miami\'</span>, sportId: <span class="hljs-string">\'2\'</span> },\n        ],\n        players: [\n          { id: <span class="hljs-string">\'1\'</span>, name: <span class="hljs-string">\'Bayern Munich (Player 1)\'</span>, teamId: <span class="hljs-string">\'1\'</span> },\n          { id: <span class="hljs-string">\'2\'</span>, name: <span class="hljs-string">\'Bayern Munich (Player 2)\'</span>, teamId: <span class="hljs-string">\'1\'</span> },\n          { id: <span class="hljs-string">\'3\'</span>, name: <span class="hljs-string">\'Real Madrid (Player 1)\'</span>, teamId: <span class="hljs-string">\'2\'</span> },\n          { id: <span class="hljs-string">\'4\'</span>, name: <span class="hljs-string">\'Real Madrid (Player 2)\'</span>, teamId: <span class="hljs-string">\'2\'</span> },\n          { id: <span class="hljs-string">\'5\'</span>, name: <span class="hljs-string">\'Cleveland (Player 1)\'</span>, teamId: <span class="hljs-string">\'3\'</span> },\n          { id: <span class="hljs-string">\'6\'</span>, name: <span class="hljs-string">\'Cleveland (Player 2)\'</span>, teamId: <span class="hljs-string">\'3\'</span> },\n          { id: <span class="hljs-string">\'7\'</span>, name: <span class="hljs-string">\'Miami (Player 1)\'</span>, teamId: <span class="hljs-string">\'4\'</span> },\n          { id: <span class="hljs-string">\'8\'</span>, name: <span class="hljs-string">\'Miami (Player 2)\'</span>, teamId: <span class="hljs-string">\'4\'</span> },\n        ],\n      },\n    },\n  };\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'sport\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'select\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Sport\'</span>,\n        options: [\n          { id: <span class="hljs-string">\'1\'</span>, name: <span class="hljs-string">\'Soccer\'</span> },\n          { id: <span class="hljs-string">\'2\'</span>, name: <span class="hljs-string">\'Basketball\'</span> },\n        ],\n        valueProp: <span class="hljs-string">\'id\'</span>,\n        labelProp: <span class="hljs-string">\'name\'</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'team\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'select\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Team\'</span>,\n        options: [],\n        valueProp: <span class="hljs-string">\'id\'</span>,\n        labelProp: <span class="hljs-string">\'name\'</span>,\n      },\n      expressionProperties: {\n        <span class="hljs-string">\'templateOptions.options\'</span>: <span class="hljs-string">\'formState.selectOptionsData.teams.filter(team =&gt; team.sportId === model.sport)\'</span>,\n        <span class="hljs-comment">// reset model when updating select options</span>\n        <span class="hljs-string">\'model.team\'</span>: <span class="hljs-string">`field.templateOptions.options.find(o =&gt; o.id === model.team) ? model.team:null`</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'player\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'select\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Player\'</span>,\n        options: [],\n        valueProp: <span class="hljs-string">\'id\'</span>,\n        labelProp: <span class="hljs-string">\'name\'</span>,\n      },\n      expressionProperties: {\n        <span class="hljs-string">\'templateOptions.options\'</span>: <span class="hljs-string">\'formState.selectOptionsData.players.filter(player =&gt; player.teamId === model.team)\'</span>,\n        <span class="hljs-comment">// reset model when updating select options</span>\n        <span class="hljs-string">\'model.player\'</span>: <span class="hljs-string">`field.templateOptions.options.find(o =&gt; o.id === model.player) ? model.player:null`</span>,\n      },\n    },\n  ];\n\n  submit() {\n    alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n  }\n}\n'}}]);