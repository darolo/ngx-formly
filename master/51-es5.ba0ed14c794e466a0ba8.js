(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"2cec":function(n,s,a){"use strict";a.r(s),s.default="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},IpUt:function(n,s,a){"use strict";a.r(s),s.default="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {\n    formState: {\n      selectOptionsData: {\n        teams: [\n          { id: '1', name: 'Bayern Munich', sportId: '1' },\n          { id: '2', name: 'Real Madrid', sportId: '1' },\n          { id: '3', name: 'Cleveland', sportId: '2' },\n          { id: '4', name: 'Miami', sportId: '2' },\n        ],\n        players: [\n          { id: '1', name: 'Bayern Munich (Player 1)', teamId: '1' },\n          { id: '2', name: 'Bayern Munich (Player 2)', teamId: '1' },\n          { id: '3', name: 'Real Madrid (Player 1)', teamId: '2' },\n          { id: '4', name: 'Real Madrid (Player 2)', teamId: '2' },\n          { id: '5', name: 'Cleveland (Player 1)', teamId: '3' },\n          { id: '6', name: 'Cleveland (Player 2)', teamId: '3' },\n          { id: '7', name: 'Miami (Player 1)', teamId: '4' },\n          { id: '8', name: 'Miami (Player 2)', teamId: '4' },\n        ],\n      },\n    },\n  };\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'sport',\n      type: 'select',\n      templateOptions: {\n        label: 'Sport',\n        options: [\n          { id: '1', name: 'Soccer' },\n          { id: '2', name: 'Basketball' },\n        ],\n        valueProp: 'id',\n        labelProp: 'name',\n      },\n    },\n    {\n      key: 'team',\n      type: 'select',\n      templateOptions: {\n        label: 'Team',\n        options: [],\n        valueProp: 'id',\n        labelProp: 'name',\n      },\n      expressionProperties: {\n        'templateOptions.options': 'formState.selectOptionsData.teams.filter(team => team.sportId === model.sport)',\n        // reset model when updating select options\n        'model.team': `field.templateOptions.options.find(o => o.id === model.team) ? model.team:null`,\n      },\n    },\n    {\n      key: 'player',\n      type: 'select',\n      templateOptions: {\n        label: 'Player',\n        options: [],\n        valueProp: 'id',\n        labelProp: 'name',\n      },\n      expressionProperties: {\n        'templateOptions.options': 'formState.selectOptionsData.players.filter(player => player.teamId === model.team)',\n        // reset model when updating select options\n        'model.player': `field.templateOptions.options.find(o => o.id === model.player) ? model.player:null`,\n      },\n    },\n  ];\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n}\n"},TT1c:function(n,s,a){"use strict";a.r(s),s.default='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>\n</form>\n'},XepZ:function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},"fo+c":function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"!form.valid"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},oUPz:function(n,s,a){"use strict";a.r(s);var l=a("Mlb/"),e=a("QZuW"),p=function(){function n(){this.form=new e.FormGroup({}),this.model={},this.options={formState:{selectOptionsData:{teams:[{id:"1",name:"Bayern Munich",sportId:"1"},{id:"2",name:"Real Madrid",sportId:"1"},{id:"3",name:"Cleveland",sportId:"2"},{id:"4",name:"Miami",sportId:"2"}],players:[{id:"1",name:"Bayern Munich (Player 1)",teamId:"1"},{id:"2",name:"Bayern Munich (Player 2)",teamId:"1"},{id:"3",name:"Real Madrid (Player 1)",teamId:"2"},{id:"4",name:"Real Madrid (Player 2)",teamId:"2"},{id:"5",name:"Cleveland (Player 1)",teamId:"3"},{id:"6",name:"Cleveland (Player 2)",teamId:"3"},{id:"7",name:"Miami (Player 1)",teamId:"4"},{id:"8",name:"Miami (Player 2)",teamId:"4"}]}}},this.fields=[{key:"sport",type:"select",templateOptions:{label:"Sport",options:[{id:"1",name:"Soccer"},{id:"2",name:"Basketball"}],valueProp:"id",labelProp:"name"}},{key:"team",type:"select",templateOptions:{label:"Team",options:[],valueProp:"id",labelProp:"name"},expressionProperties:{"templateOptions.options":"formState.selectOptionsData.teams.filter(team => team.sportId === model.sport)","model.team":"field.templateOptions.options.find(o => o.id === model.team) ? model.team:null"}},{key:"player",type:"select",templateOptions:{label:"Player",options:[],valueProp:"id",labelProp:"name"},expressionProperties:{"templateOptions.options":"formState.selectOptionsData.players.filter(player => player.teamId === model.team)","model.player":"field.templateOptions.options.find(o => o.id === model.player) ? model.player:null"}}]}return n.prototype.submit=function(){alert(JSON.stringify(this.model))},n}(),o={examples:[{title:"Cascaded Select JSON powered",description:"",component:p,files:[{file:"app.component.html",content:a("fo+c"),filecontent:a("TT1c")},{file:"app.component.ts",content:a("te2w"),filecontent:a("IpUt")},{file:"app.module.ts",content:a("XepZ"),filecontent:a("2cec")}]}]},t=function(){},r=a("n91+"),m=a("aUi8"),i=a("xRU+"),d=a("l9Gt"),c=a("tb2p"),u=a("5swT"),g=a("rGUg"),f=a("qEw3"),h=a("KL5v"),y=a("WPgD"),j=a("wR1y"),b=a("fYis"),v=a("mSm0"),M=a("g/x9"),P=a("Ea/l"),k=a("kY9M"),w=a("cXvR"),C=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function I(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,s,a){var e=!0,p=n.component;return"submit"===s&&(e=!1!==l["\u0275nov"](n,2).onSubmit(a)&&e),"reset"===s&&(e=!1!==l["\u0275nov"](n,2).onReset()&&e),"ngSubmit"===s&&(e=!1!==p.submit()&&e),e}),null,null)),l["\u0275did"](1,16384,null,0,e["\u0275angular_packages_forms_forms_z"],[],null,null),l["\u0275did"](2,540672,null,0,e.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),l["\u0275prd"](2048,null,e.ControlContainer,null,[e.FormGroupDirective]),l["\u0275did"](4,16384,null,0,e.NgControlStatusGroup,[[4,e.ControlContainer]],null,null),(n()(),l["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,M.b,M.a)),l["\u0275prd"](512,null,P.a,P.a,[k.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275did"](7,966656,null,0,w.a,[P.a,k.b,[2,e.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),l["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Submit"]))],(function(n,s){var a=s.component;n(s,2,0,a.form),n(s,7,0,a.form,a.model,a.fields,a.options)}),(function(n,s){var a=s.component;n(s,0,0,l["\u0275nov"](s,4).ngClassUntouched,l["\u0275nov"](s,4).ngClassTouched,l["\u0275nov"](s,4).ngClassPristine,l["\u0275nov"](s,4).ngClassDirty,l["\u0275nov"](s,4).ngClassValid,l["\u0275nov"](s,4).ngClassInvalid,l["\u0275nov"](s,4).ngClassPending),n(s,8,0,!a.form.valid)}))}var F=l["\u0275ccf"]("formly-app-example",p,(function(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,I,C)),l["\u0275did"](1,49152,null,0,p,[],null,null)],null,null)}),{},{},[]),O=a("vk2e"),S=a("o3+a"),x=a("9b0e"),R=a("6YJn"),_=a("dvHj"),B=a("C0xW"),N=a("W9sv"),D=a("m6lo"),T=a("S6Ld"),G=a("cTZo"),U=a("Kfqh"),A=a("Ienz"),L=a("KuLc"),J=a("Z7++"),W=a("2lML"),K=a("pgVP"),X=a("pk7F"),Z=a("T8+l"),z=a("0hby"),V=a("tVba"),Y=a("XX7/"),q=a("pLrJ"),E=a("U5/R"),H=a("TqxR"),Q=a("soK0"),$=a("1k+g"),nn=a("pAed"),sn=a("VtvF"),an=a("lN7U"),ln=a("NPi3"),en=a("PCNd"),pn=a("WCiw"),on=a("Vtge"),tn=a("+5Wd"),rn=a("+R4m"),mn=a("SSYk"),dn=a("KJU8"),cn=a("eTA3"),un=a("o12O"),gn=a("iWYX"),fn=a("h18T"),hn=function(){},yn=a("qk26"),jn=a("P+xK");a.d(s,"ConfigModuleNgFactory",(function(){return bn}));var bn=l["\u0275cmf"](t,[],(function(n){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,m.a,i.a,d.a,c.a,u.a,g.a,f.a,h.a,y.a,j.a,b.a,v.a,F]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,O.NgLocalization,O.NgLocaleLocalization,[l.LOCALE_ID,[2,O["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](4608,S.c,S.c,[]),l["\u0275mpd"](4608,x.c,x.c,[x.i,x.e,l.ComponentFactoryResolver,x.h,x.f,l.Injector,l.NgZone,O.DOCUMENT,R.b,[2,O.Location]]),l["\u0275mpd"](5120,x.j,x.k,[x.c]),l["\u0275mpd"](5120,_.b,_.c,[x.c]),l["\u0275mpd"](4608,B.e,N.c,[[2,N.g],[2,N.l]]),l["\u0275mpd"](5120,D.c,D.j,[x.c]),l["\u0275mpd"](4608,T.a,T.a,[]),l["\u0275mpd"](4608,G.a,G.a,[]),l["\u0275mpd"](4608,e.FormBuilder,e.FormBuilder,[]),l["\u0275mpd"](4608,e["\u0275angular_packages_forms_forms_o"],e["\u0275angular_packages_forms_forms_o"],[]),l["\u0275mpd"](4608,P.a,P.a,[k.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275mpd"](1073742336,O.CommonModule,O.CommonModule,[]),l["\u0275mpd"](1073742336,U.b,U.b,[]),l["\u0275mpd"](1073742336,S.d,S.d,[]),l["\u0275mpd"](1073742336,A.a,A.a,[]),l["\u0275mpd"](1073742336,R.a,R.a,[]),l["\u0275mpd"](1073742336,L.g,L.g,[]),l["\u0275mpd"](1073742336,J.ScrollingModule,J.ScrollingModule,[]),l["\u0275mpd"](1073742336,x.g,x.g,[]),l["\u0275mpd"](1073742336,N.l,N.l,[[2,N.d],[2,B.f]]),l["\u0275mpd"](1073742336,_.e,_.e,[]),l["\u0275mpd"](1073742336,N.v,N.v,[]),l["\u0275mpd"](1073742336,W.j,W.j,[]),l["\u0275mpd"](1073742336,D.i,D.i,[]),l["\u0275mpd"](1073742336,D.f,D.f,[]),l["\u0275mpd"](1073742336,K.c,K.c,[]),l["\u0275mpd"](1073742336,X.c,X.c,[]),l["\u0275mpd"](1073742336,Z.b,Z.b,[]),l["\u0275mpd"](512,k.b,k.b,[]),l["\u0275mpd"](1024,k.a,(function(n){return[{wrappers:[{name:"form-field",component:z.a}]},{types:[{name:"input",component:V.a,wrappers:["form-field"]}]},{types:[{name:"textarea",component:Y.a,wrappers:["form-field"]}]},{types:[{name:"radio",component:q.a,wrappers:["form-field"]}]},{types:[{name:"checkbox",component:E.a,wrappers:["form-field"]}]},{types:[{name:"multicheckbox",component:H.a,wrappers:["form-field"]}]},{types:[{name:"select",component:Q.a,wrappers:["form-field"]}]},{wrappers:[{name:"addons",component:$.a}],extensions:[{name:"addons",extension:{postPopulate:nn.a}}]},sn.b(n),{}]}),[k.b]),l["\u0275mpd"](1073742336,sn.a,sn.a,[k.b,[2,k.a]]),l["\u0275mpd"](1073742336,an.h,an.h,[]),l["\u0275mpd"](1073742336,ln.b,ln.b,[]),l["\u0275mpd"](1073742336,en.a,en.a,[]),l["\u0275mpd"](1073742336,e["\u0275angular_packages_forms_forms_d"],e["\u0275angular_packages_forms_forms_d"],[]),l["\u0275mpd"](1073742336,e.ReactiveFormsModule,e.ReactiveFormsModule,[]),l["\u0275mpd"](1073742336,pn.a,pn.a,[]),l["\u0275mpd"](1073742336,on.a,on.a,[]),l["\u0275mpd"](1073742336,tn.a,tn.a,[]),l["\u0275mpd"](1073742336,rn.a,rn.a,[]),l["\u0275mpd"](1073742336,mn.a,mn.a,[]),l["\u0275mpd"](1073742336,dn.a,dn.a,[]),l["\u0275mpd"](1073742336,cn.a,cn.a,[]),l["\u0275mpd"](1073742336,un.a,un.a,[]),l["\u0275mpd"](1073742336,gn.a,gn.a,[]),l["\u0275mpd"](1073742336,fn.a,fn.a,[]),l["\u0275mpd"](1073742336,hn,hn,[]),l["\u0275mpd"](1073742336,yn.t,yn.t,[[2,yn.y],[2,yn.p]]),l["\u0275mpd"](1073742336,t,t,[]),l["\u0275mpd"](1024,yn.n,(function(){return[[{path:"",component:jn.a,data:o}]]}),[])])}))},te2w:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {\n    formState: {\n      selectOptionsData: {\n        teams: [\n          { id: <span class="hljs-string">\'1\'</span>, name: <span class="hljs-string">\'Bayern Munich\'</span>, sportId: <span class="hljs-string">\'1\'</span> },\n          { id: <span class="hljs-string">\'2\'</span>, name: <span class="hljs-string">\'Real Madrid\'</span>, sportId: <span class="hljs-string">\'1\'</span> },\n          { id: <span class="hljs-string">\'3\'</span>, name: <span class="hljs-string">\'Cleveland\'</span>, sportId: <span class="hljs-string">\'2\'</span> },\n          { id: <span class="hljs-string">\'4\'</span>, name: <span class="hljs-string">\'Miami\'</span>, sportId: <span class="hljs-string">\'2\'</span> },\n        ],\n        players: [\n          { id: <span class="hljs-string">\'1\'</span>, name: <span class="hljs-string">\'Bayern Munich (Player 1)\'</span>, teamId: <span class="hljs-string">\'1\'</span> },\n          { id: <span class="hljs-string">\'2\'</span>, name: <span class="hljs-string">\'Bayern Munich (Player 2)\'</span>, teamId: <span class="hljs-string">\'1\'</span> },\n          { id: <span class="hljs-string">\'3\'</span>, name: <span class="hljs-string">\'Real Madrid (Player 1)\'</span>, teamId: <span class="hljs-string">\'2\'</span> },\n          { id: <span class="hljs-string">\'4\'</span>, name: <span class="hljs-string">\'Real Madrid (Player 2)\'</span>, teamId: <span class="hljs-string">\'2\'</span> },\n          { id: <span class="hljs-string">\'5\'</span>, name: <span class="hljs-string">\'Cleveland (Player 1)\'</span>, teamId: <span class="hljs-string">\'3\'</span> },\n          { id: <span class="hljs-string">\'6\'</span>, name: <span class="hljs-string">\'Cleveland (Player 2)\'</span>, teamId: <span class="hljs-string">\'3\'</span> },\n          { id: <span class="hljs-string">\'7\'</span>, name: <span class="hljs-string">\'Miami (Player 1)\'</span>, teamId: <span class="hljs-string">\'4\'</span> },\n          { id: <span class="hljs-string">\'8\'</span>, name: <span class="hljs-string">\'Miami (Player 2)\'</span>, teamId: <span class="hljs-string">\'4\'</span> },\n        ],\n      },\n    },\n  };\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'sport\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'select\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Sport\'</span>,\n        options: [\n          { id: <span class="hljs-string">\'1\'</span>, name: <span class="hljs-string">\'Soccer\'</span> },\n          { id: <span class="hljs-string">\'2\'</span>, name: <span class="hljs-string">\'Basketball\'</span> },\n        ],\n        valueProp: <span class="hljs-string">\'id\'</span>,\n        labelProp: <span class="hljs-string">\'name\'</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'team\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'select\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Team\'</span>,\n        options: [],\n        valueProp: <span class="hljs-string">\'id\'</span>,\n        labelProp: <span class="hljs-string">\'name\'</span>,\n      },\n      expressionProperties: {\n        <span class="hljs-string">\'templateOptions.options\'</span>: <span class="hljs-string">\'formState.selectOptionsData.teams.filter(team =&gt; team.sportId === model.sport)\'</span>,\n        <span class="hljs-comment">// reset model when updating select options</span>\n        <span class="hljs-string">\'model.team\'</span>: <span class="hljs-string">`field.templateOptions.options.find(o =&gt; o.id === model.team) ? model.team:null`</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'player\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'select\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Player\'</span>,\n        options: [],\n        valueProp: <span class="hljs-string">\'id\'</span>,\n        labelProp: <span class="hljs-string">\'name\'</span>,\n      },\n      expressionProperties: {\n        <span class="hljs-string">\'templateOptions.options\'</span>: <span class="hljs-string">\'formState.selectOptionsData.players.filter(player =&gt; player.teamId === model.team)\'</span>,\n        <span class="hljs-comment">// reset model when updating select options</span>\n        <span class="hljs-string">\'model.player\'</span>: <span class="hljs-string">`field.templateOptions.options.find(o =&gt; o.id === model.player) ? model.player:null`</span>,\n      },\n    },\n  ];\n\n  submit() {\n    alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n  }\n}\n'}}]);