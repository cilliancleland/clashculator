(function(e){function t(t){for(var i,o,n=t[0],l=t[1],d=t[2],c=0,p=[];c<n.length;c++)o=n[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,d||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],i=!0,n=1;n<a.length;n++){var l=a[n];0!==r[l]&&(i=!1)}i&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var i={},r={app:0},s=[];function o(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=i,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(a,i,function(t){return e[t]}.bind(null,i));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var d=0;d<n.length;d++)t(n[d]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"1d90":function(e,t,a){"use strict";var i=a("4a14"),r=a.n(i);r.a},"31a8":function(e,t,a){},4977:function(e,t,a){},"4a14":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Calculator")],1)},s=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v(e._s(e.title))]),e.selectedNation?e._e():a("intro-screen",{attrs:{"selected-army":e.selectedNation,lists:e.lists,"local-saves":e.localSaves,"saved-name":e.savedName},on:{"load-army":e.loadArmy,"select-nation":e.selectNation}}),e.selectedNation?a("div",[a("header-section",{attrs:{"army-changed":e.armyChanged,"army-contents":e.armyContents,"selected-nation":e.selectedNation,"army-name":e.armyName,lists:e.lists,"unit-to-add":e.unitToAdd},on:{"update-army-name":e.updateArmyName,reset:e.reset,"save-locally":e.saveLocally,"delete-locally":e.deleteLocally,"add-unit":e.addUnit}}),a("title-row"),e._l(e.armyContents,(function(t,i){return a("unit-row",{key:t.id,attrs:{row:t,index:i,"num-units":e.armyContents.length},on:{"remove-unit":e.removeUnit,"repos-up":e.reposUp,"repos-down":e.reposDown}})})),a("sharable-link",{attrs:{sharable:e.sharable},on:{"show-toastr":e.showToastr}})],2):e._e(),a("toastr",{attrs:{message:e.toastrMessage}})],1)},n=[],l=(a("a4d3"),a("99af"),a("4de4"),a("c975"),a("a434"),a("e439"),a("dbb4"),a("b64b"),a("841c"),a("159b"),a("ade3")),d="no shield",u="no armour",c="full armour",p="partial armour",m="shield",v="heavy shield",f="throwing spear",g="thrusting spear",h="cavalry spear",y="long spear",b="javelin",w="cavalry spear & javelin",C="sling",S="bow",N={name:"add buckler (+1pts/model)",cost:1,upgradeWeapon:"",upgradeArmour:"",upgradeShield:m,upgradeTraits:[]},_={name:"downgrade to no armour",cost:-2,upgradeWeapon:"",upgradeArmour:u,upgradeShield:"",upgradeTraits:[]},O={name:"downgrade to partial armour",cost:-1,upgradeWeapon:"",upgradeArmour:p,upgradeShield:"",upgradeTraits:[]},W={name:"upgrade to partial armor (+2 pts/model)",cost:2,upgradeWeapon:"",upgradeArmour:p,upgradeShield:"",upgradeTraits:[]},A={name:"upgrade to full armor (+1 pts/model)",cost:1,upgradeWeapon:"",upgradeArmour:c,upgradeShield:"",upgradeTraits:[]},k={name:"upgrade to gain javelin and extra equipment javelin (+3 pts/model)",cost:3,upgradeWeapon:"javelin and extra equipment javelin",upgradeArmour:"",upgradeShield:"",upgradeTraits:[]},I={name:"downgrade heavy shield to shield ( -1 pts)",cost:-1,upgradeWeapon:"",upgradeArmour:"",upgradeShield:m,upgradeTraits:[]},P={name:"upgrade to gain: impetus, cavalry spear & extra equipment-(cavalry spear) (+ 3pts/model)",cost:3,upgradeWeapon:h,upgradeArmour:"",upgradeShield:"",upgradeTraits:["impetus"]},T=[{name:"Upgrade to thrusting spear",cost:1,upgradeArmour:"",upgradeShield:"",upgradeWeapon:g,upgradeTraits:[]},{name:"Upgrade to throwing spear",cost:1,upgradeArmour:"",upgradeShield:"",upgradeWeapon:f,upgradeTraits:[]},{name:"Upgrade to Cavalry Spear(must be mounted)",cost:1,upgradeArmour:"",upgradeShield:"",upgradeWeapon:h,requiresMounted:!0,upgradeTraits:[]},{name:"Upgrade to Javelin",cost:2,upgradeArmour:"",upgradeShield:"",upgradeWeapon:b,upgradeTraits:[]},{name:"Upgrade to Horse",cost:4,upgradeArmour:"",upgradeShield:"",upgradeWeapon:"",unlessMounted:!0,upgradeTraits:["mounted"]},{name:"Downgrade to no armor",cost:-3,upgradeArmour:u,upgradeShield:"",upgradeWeapon:"",upgradeTraits:[]},{name:"Downgrade to partial armor",cost:-1,upgradeArmour:p,upgradeShield:"",upgradeWeapon:"",upgradeTraits:[]},{name:"Downgrade to no shield",cost:-1,upgradeArmour:"",upgradeShield:d,upgradeWeapon:"",upgradeTraits:[]},{name:"Upgrade to heavy shield",cost:1,upgradeArmour:"",upgradeShield:v,upgradeWeapon:"",unlessMounted:!0,upgradeTraits:[]}],B={Samnite:{lvl5:{isCharacter:!0,displayName:"Level V leader",availability:"leader",cost:155,options:T,combat:3,ranged:5,grit:3,commandRange:10,commandPoints:5,defaultShield:v,defaultBody:c,traits:"attacks(3), wounds(3), Iron Will"},lvl4:{isCharacter:!0,displayName:"Level IV leader",availability:"leader",cost:125,options:T,combat:3,ranged:5,grit:3,commandRange:10,commandPoints:4,defaultShield:v,defaultBody:c,traits:"attacks(2), wounds(3), Iron Will"},lvl3:{isCharacter:!0,displayName:"Level III leader",availability:"leader",cost:95,options:T,combat:3,ranged:5,grit:3,commandRange:8,commandPoints:5,defaultShield:v,defaultBody:c,traits:"attacks(2), wounds(2), Iron Will"},lv2:{isCharacter:!0,displayName:"Level II leader",availability:"leader",cost:65,options:T,combat:3,ranged:5,grit:3,commandRange:10,commandPoints:5,defaultShield:v,defaultBody:c,traits:"wounds(2), Iron Will"},soothsayer:{isCharacter:!0,displayName:"Soothsayer",availability:"leader",cost:15,options:[],combat:0,ranged:0,grit:0,commandRange:0,commandPoints:0,defaultShield:d,defaultBody:u,traits:"luck"},javelinmen:{displayName:"Javelin men",availability:"civis",traits:"skirmish specialist",cost:8,options:[N],defaultWeapon:b,combat:5,ranged:5,grit:5,defaultShield:d,defaultBody:u},hoplites:{displayName:"Campanian Allied Hoplites",availability:"civis",traits:"shield overlap, wall of spears, offensive spear, allies",cost:18,options:[_],defaultWeapon:g,combat:4,ranged:5,grit:4,defaultShield:v,defaultBody:p},tribesmen:{displayName:"Tribesmen",availability:"civis",traits:"",cost:12,options:[],defaultWeapon:g,combat:4,ranged:5,grit:5,defaultShield:v,defaultBody:u},samnite:{displayName:"Samnite Warriors",availability:"civis",traits:"shield overlap, wall of spears, guerrilla",cost:19,options:[_],defaultWeapon:f,combat:4,ranged:5,grit:4,defaultShield:v,defaultBody:p},veterans:{displayName:"Veteran Samnite Warriors",availability:"milites",traits:"shield overlap, wall of spears, guerrilla",cost:23,options:[A],defaultWeapon:f,combat:3,ranged:5,grit:3,defaultShield:v,defaultBody:p},slingers:{displayName:"Slingers",availability:"milites",traits:"skirmish specialist",cost:8,options:[N],defaultWeapon:C,combat:5,ranged:5,grit:5,defaultShield:d,defaultBody:u},cavalry:{displayName:"Samnite Cavalry",availability:"rare",traits:"mounted",cost:8,options:[P,O],defaultWeapon:C,combat:5,ranged:5,grit:5,defaultShield:m,defaultBody:c}},Roman:{lvl5:{isCharacter:!0,displayName:"Level V leader",availability:"leader",cost:155,options:T,combat:3,ranged:5,grit:3,commandRange:10,commandPoints:5,defaultShield:v,defaultBody:c,traits:"attacks(3), wounds(3), Iron Will"},lvl4:{isCharacter:!0,displayName:"Level IV leader",availability:"leader",cost:125,options:T,combat:3,ranged:5,grit:3,commandRange:10,commandPoints:4,defaultShield:v,defaultBody:c,traits:"attacks(2), wounds(3), Iron Will"},lvl3:{isCharacter:!0,displayName:"Level III leader",availability:"leader",cost:95,options:T,combat:3,ranged:5,grit:3,commandRange:8,commandPoints:5,defaultShield:v,defaultBody:c,traits:"attacks(2), wounds(2), Iron Will"},lv2:{isCharacter:!0,displayName:"Level II leader",availability:"leader",cost:65,options:T,combat:3,ranged:5,grit:3,commandRange:10,commandPoints:5,defaultShield:v,defaultBody:c,traits:"wounds(2), Iron Will"},soothsayer:{isCharacter:!0,displayName:"Soothsayer",availability:"leader",cost:15,options:[],combat:0,ranged:0,grit:0,commandRange:0,commandPoints:0,defaultShield:d,defaultBody:u,traits:"luck"},leves:{displayName:"Leves",availability:"civis",traits:"skirmish specialist",cost:8,options:[N],defaultWeapon:b,combat:5,ranged:5,grit:5,defaultShield:d,defaultBody:u},velites:{displayName:"Velites",availability:"civis",traits:"skirmish specialist",cost:13,options:[],defaultWeapon:b,combat:4,ranged:5,grit:4,defaultShield:m,defaultBody:u},raw:{displayName:"Raw Legionnaries",availability:"civis",traits:"shield overlap, wall of spears",cost:14,options:[W],defaultWeapon:f,combat:4,ranged:5,grit:5,defaultShield:v,defaultBody:u},samnite:{displayName:"Samnite Allies",availability:"civis",traits:"shield overlap, wall of spears, guerrilla, allies",cost:19,options:[_],defaultWeapon:f,combat:4,ranged:5,grit:4,defaultShield:v,defaultBody:p},hastati:{displayName:"Hastati",availability:"civis",traits:"shield overlap, wall of spears, impulsum, drilled",cost:20,options:[_],defaultWeapon:f,combat:4,ranged:5,grit:4,defaultShield:v,defaultBody:p},principes:{displayName:"Principes",availability:"milites",traits:"shield overlap, wall of spears, impulsum, drilled",cost:25,options:[O],defaultWeapon:f,combat:3,ranged:5,grit:3,defaultShield:v,defaultBody:c},tirarii:{displayName:"tirarii",availability:"rare",traits:"shield overlap, wall of spears, offensive spear, fidelis, drilled",cost:24,options:[],defaultWeapon:g,combat:3,ranged:5,grit:3,defaultShield:v,defaultBody:c},extraordinarii:{displayName:"Italian Extraordinarii",availability:"rare",traits:"shield overlap, wall of spears, guerilla tactics, allies",cost:24,options:[_],defaultWeapon:f,combat:3,ranged:5,grit:3,defaultShield:v,defaultBody:p},equites:{displayName:"Equites or Alae",availability:"rare",traits:"mounted, impetus",cost:23,options:[k],defaultWeapon:h,combat:3,ranged:5,grit:3,defaultShield:m,defaultBody:c},cretan:{displayName:"Cretan Archers",availability:"rare",traits:"skirmish specialist, aimed shot, allies",cost:17,options:[N],defaultWeapon:S,combat:4,ranged:4,grit:3,defaultShield:d,defaultBody:u}},Carthaginian:{lvl5:{isCharacter:!0,displayName:"Level V leader",availability:"leader",cost:155,options:T,combat:3,ranged:5,grit:3,commandRange:10,commandPoints:5,defaultShield:v,defaultBody:c,traits:"attacks(3), wounds(3), Iron Will"},lvl4:{isCharacter:!0,displayName:"Level IV leader",availability:"leader",cost:125,options:T,combat:3,ranged:5,grit:3,commandRange:10,commandPoints:4,defaultShield:v,defaultBody:c,traits:"attacks(2), wounds(3), Iron Will"},lvl3:{isCharacter:!0,displayName:"Level III leader",availability:"leader",cost:95,options:T,combat:3,ranged:5,grit:3,commandRange:8,commandPoints:5,defaultShield:v,defaultBody:c,traits:"attacks(2), wounds(2), Iron Will"},lv2:{isCharacter:!0,displayName:"Level II leader",availability:"leader",cost:65,options:T,combat:3,ranged:5,grit:3,commandRange:10,commandPoints:5,defaultShield:v,defaultBody:c,traits:"wounds(2), Iron Will"},soothsayer:{isCharacter:!0,displayName:"Soothsayer",availability:"leader",cost:15,options:[],combat:0,ranged:0,grit:0,commandRange:0,commandPoints:0,defaultShield:d,defaultBody:u,traits:"luck"},javelinmen:{displayName:"Javelin men",availability:"civis",traits:"skirmish specialist",cost:8,options:[N],defaultWeapon:b,combat:5,ranged:5,grit:5,defaultShield:d,defaultBody:u},citizen:{displayName:"Punic Citizens Levy",availability:"civis",traits:"shield overlap, wall of spears, offensive spear",cost:13,options:[I],defaultWeapon:y,combat:4,ranged:5,grit:5,defaultShield:v,defaultBody:u},infantry:{displayName:"Punic Infantry",availability:"civis",traits:"shield overlap, wall of spears, offensive spear, drilled",cost:18,options:[],defaultWeapon:y,combat:4,ranged:5,grit:4,defaultShield:v,defaultBody:p},scutarii:{displayName:"Iberian Scutarii",availability:"civis",traits:"wall of spears, guerrilla , impulsum, determined, allies",cost:18,options:[],defaultWeapon:f,combat:4,ranged:5,grit:4,defaultShield:v,defaultBody:u},veteran:{displayName:"Veteran Punic Infantry",availability:"milites",traits:"shield overlap, wall of spears, offensive spear, drilled",cost:23,options:[O],defaultWeapon:y,combat:3,ranged:5,grit:3,defaultShield:v,defaultBody:c},romanised:{displayName:"Romanized Veteran Infantry",availability:"milites",traits:"shield overlap, wall of spears, drilled",cost:24,options:[O],defaultWeapon:f,combat:3,ranged:5,grit:3,defaultShield:v,defaultBody:c},numidian:{displayName:"Numidian light cavalry",availability:"milites",traits:"mounted, marauders",cost:17,options:[O],defaultWeapon:b,combat:4,ranged:5,grit:4,defaultShield:m,defaultBody:u},iberianCav:{displayName:"Iberian noble cavalry",availability:"milites",traits:"mounted, impetus, allies, extra equipment-(javelin)",cost:25,options:[_],defaultWeapon:w,combat:3,ranged:5,grit:3,defaultShield:m,defaultBody:p},balearic:{displayName:"Balearic slingers",availability:"rare",traits:"skirmish specialist, sling specialist, allies",cost:17,options:[N],defaultWeapon:C,combat:4,ranged:4,grit:3,defaultShield:d,defaultBody:u},punicCav:{displayName:"Punic cavalry",availability:"rare",traits:"mounted, impetus, extra equipment-(javelin)",cost:26,options:[O],defaultWeapon:w,combat:3,ranged:5,grit:3,defaultShield:m,defaultBody:c}}},j=B,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",{staticClass:"army-title"},[e._v(" "+e._s(e.selectedNation)+" ("+e._s(e.totalCost)+" points) "),a("span",[e._v(" ("+e._s(e.totalFiguresCount)+" figures in "+e._s(e.armyContents.length)+" units) ")])]),a("div",{staticClass:"top-buttons"},[a("button",{staticClass:"top-button",attrs:{title:"Reset"},on:{click:function(t){return e.$emit("reset")}}},[a("i",{staticClass:"fa fa-undo top-button-icon"}),e._v(" Reset ")]),a("button",{class:{"top-button":1,"top-button-disabled":e.armyChanged},attrs:{title:"Save locally",disabled:e.armyChanged},on:{click:function(t){return e.$emit("save-locally")}}},[a("i",{staticClass:"fa fa-floppy-o top-button-icon"}),e._v(" Save ")]),a("button",{class:{"top-button":1,"top-button-disabled":!e.armyChanged},attrs:{title:"Delete army from device",disabled:!e.armyChanged},on:{click:function(t){return e.$emit("delete-locally")}}},[a("i",{staticClass:"fa fa-trash top-button-icon"}),e._v(" Delete ")])]),a("div",{staticClass:"army-breakup"},[a("label",[e._v(" Army name "),a("input",{staticClass:"army-name",domProps:{value:e.armyName},on:{keyup:function(t){return e.$emit("update-army-name",t.target.value)}}})]),a("div",{staticClass:"button-bar"},[e.selectedNation?a("select",{staticClass:"add-unit",domProps:{value:e.unitToAdd},on:{change:function(t){return e.$emit("add-unit",t.target.value)}}},[a("option",{attrs:{value:""}},[e._v("Add a unit")]),e._l(e.lists[e.selectedNation],(function(t,i){return a("option",{key:i,domProps:{value:i}},[e._v(" "+e._s(t.displayName)+" ")])}))],2):e._e()]),a("div",[e._v("Leaders: "+e._s(e.leadersCount))]),a("div",[e._v("Civis: "+e._s(e.civisCount))]),a("div",[e._v("Milites"+e._s(e.militesCount))]),a("div",[e._v("Rare: "+e._s(e.rareCount))])])])},R=[],L={name:"HeaderSection",props:["armyContents","selectedNation","armyName","lists","unitToAdd","armyChanged","reset","saveLocally","deleteLocally","addUnit","updateArmyName"],computed:{totalCost:function(){return this.armyContents.reduce((function(e,t){var a=t.selectedOptions.reduce((function(e,a){return e+t.options[a].cost}),0);return e+t.size*(t.cost+a)}),0)},totalFiguresCount:function(){return this.armyContents.reduce((function(e,t){return e+t.size}),0)},leadersCount:function(){return this.armyContents.reduce((function(e,t){return"leader"===t.availability?e+t.size:e}),0)},civisCount:function(){return this.armyContents.reduce((function(e,t){return"civis"===t.availability?e+t.size:e}),0)},militesCount:function(){return this.armyContents.reduce((function(e,t){return"milites"===t.availability?e+t.size:e}),0)},rareCount:function(){return this.armyContents.reduce((function(e,t){return"rare"===t.availability?e+t.size:e}),0)}}},J=L,$=(a("b210"),a("2877")),U=Object($["a"])(J,x,R,!1,null,"4d78e1d2",null),D=U.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("select",{staticClass:"add-unit",attrs:{id:"armySelect"},domProps:{value:e.selectedNation},on:{change:function(t){return e.$emit("select-nation",t.target.value)}}},[a("option",{attrs:{value:""}},[e._v("Please select an army to start")]),e._l(e.lists,(function(t,i){return a("option",{key:i,domProps:{value:i}},[e._v(" "+e._s(i)+" ")])}))],2),e.localSaves.length?a("span",[e._v(" or "),a("select",{staticClass:"add-unit",attrs:{id:"saveSelect"},domProps:{value:e.savedName},on:{change:function(t){return e.$emit("load-army",t.target.value)}}},[a("option",{attrs:{value:""}},[e._v("Load a saved army")]),e._l(e.localSaves,(function(t){return a("option",{key:t,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])}))],2)]):e._e()])},M=[],z={name:"IntroScreen",props:["selectedNation","lists","localSaves","savedName","loadArmy","selectNation"]},F=z,V=(a("e695"),Object($["a"])(F,E,M,!1,null,"2b5f20b6",null)),q=V.exports,H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"sharable-link",attrs:{title:"Click to copy sharable link"}},[a("label",[e._v("Share this list "),a("div",{staticClass:"input-flag"},[a("i",{staticClass:"fa fa-link",on:{click:e.copyToClip}})]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.sharable,expression:"sharable"}],ref:"sharableInput",staticClass:"sharable-input",attrs:{readonly:""},domProps:{value:e.sharable},on:{click:e.copyToClip,input:function(t){t.target.composing||(e.sharable=t.target.value)}}})])])])},G=[],Y={name:"SharableLink",props:["sharable","showToastr"],methods:{copyToClip:function(){this.$refs.sharableInput.focus(),this.$refs.sharableInput.select(),this.$refs.sharableInput.setSelectionRange(0,99999),document.execCommand("copy"),this.$emit("show-toastr","Sharing link copied to clipboard")}}},K=Y,Q=(a("73cc"),Object($["a"])(K,H,G,!1,null,"596e0ec5",null)),X=Q.exports,Z=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ee=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"unit-row unit-row-title",staticStyle:{"padding-left":"32px"}},[a("div",{staticClass:"unit-cell unit-cell-wide"},[e._v(" Troop type ")]),a("div",{staticClass:"unit-cell unit-cell-small"},[e._v(" ML ")]),a("div",{staticClass:"unit-cell unit-cell-small"},[e._v(" SH ")]),a("div",{staticClass:"unit-cell unit-cell-small"},[e._v(" GR ")]),a("div",{staticClass:"unit-cell unit-cell-small"},[e._v(" SV ")]),a("div",{staticClass:"unit-cell unit-cell-medium"},[e._v(" Weapon ")]),a("div",{staticClass:"unit-cell unit-cell-medium"},[e._v(" Armour ")]),a("div",{staticClass:"unit-cell unit-cell-medium"},[e._v(" Traits ")])])}],te={name:"TitleRow"},ae=te,ie=(a("5844"),Object($["a"])(ae,Z,ee,!1,null,"a8d710c0",null)),re=ie.exports,se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.displayClasses},[a("div",{staticClass:"toastr-message"},[e._v(" "+e._s(e.message)+" ")])])},oe=[],ne={name:"Toastr",props:{message:String},computed:{displayClasses:function(){return""===this.message?"toastr":"toastr toastr-visible"}}},le=ne,de=(a("1d90"),Object($["a"])(le,se,oe,!1,null,"4528465a",null)),ue=de.exports,ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"unit-row"},[a("div",{staticClass:"row-reposition"},[0!=e.index?a("button",{staticClass:"unit-up",attrs:{title:"Move up"},on:{click:function(t){return e.$emit("repos-up",e.index)}}},[a("i",{staticClass:"fa fa-arrow-up"})]):e._e(),e.numUnits-1!=e.index?a("button",{staticClass:"unit-down",attrs:{title:"Move down"},on:{click:function(t){return e.$emit("repos-down",e.index)}}},[a("i",{staticClass:"fa fa-arrow-down"})]):e._e()]),a("div",{staticStyle:{"margin-left":"32px"}},[a("div",{staticClass:"unit-row-stats"},[a("div",{staticClass:"unit-cell unit-cell-wide"},[a("strong",[e._v(e._s(e.row.displayName))]),e._v(" ("+e._s(e.row.availability)+") ")]),a("div",{staticClass:"unit-cell unit-cell-small"},[e._v(" "+e._s(e.row.combat)+"+ ")]),a("div",{staticClass:"unit-cell unit-cell-small"},[e._v(" "+e._s(e.row.ranged)+"+ ")]),a("div",{staticClass:"unit-cell unit-cell-small"},[e._v(" "+e._s(e.row.grit)+"+ ")]),a("div",{staticClass:"unit-cell unit-cell-small"},[e._v(" "+e._s(e.calculateSave)+"+ ")]),a("div",{staticClass:"unit-cell unit-cell-medium"},[e._v(" "+e._s(e.row.upgradedWeapon?e.row.upgradedWeapon:e.row.defaultWeapon)+" ")]),a("div",{staticClass:"unit-cell unit-cell-medium"},[e._v(" "+e._s(e.row.upgradedShield?e.row.upgradedShield:e.row.defaultShield)+" "+e._s(e.row.upgradedArmour?e.row.upgradedArmour:e.row.defaultBody)+" ")]),a("div",{staticClass:"unit-cell unit-cell-medium"},[e._v(" "+e._s(e.row.traits)+" "),e.upgradedTraits.length?a("span",[e._v(" , "+e._s(e.upgradedTraits.join(", "))+" ")]):e._e(),e.row.commandPoints?a("span",[e._v(" , "+e._s(e.row.commandPoints)+" command points @ "+e._s(e.row.commandRange)+'" ')]):e._e()]),a("button",{staticClass:"unit-delete",attrs:{title:"Remove unit"},on:{click:function(t){return e.$emit("remove-unit",e.index)}}},[a("i",{staticClass:"fa fa-times"})])]),a("div",{staticClass:"unit-row-stats"},[a("div",{staticClass:"unit-cell unit-cell-full-on-mob"},["leader"!=e.row.availability?a("button",{staticClass:"adjust-figure",attrs:{title:"Remove figure"},on:{click:e.removeFigure}},[a("i",{staticClass:"fa fa-minus"})]):e._e(),e._v(" "+e._s(e.row.size)+" figures "),"leader"!=e.row.availability?a("button",{staticClass:"adjust-figure",attrs:{title:"Add figure"},on:{click:e.addFigure}},[a("i",{staticClass:"fa fa-plus"})]):e._e()]),a("div",{staticClass:"unit-cell unit-cell-wide"},[e._v(" @ "+e._s(e.row.cost)+" "),e.optionsCostPerFigure>0?a("span",[e._v("(+"+e._s(e.optionsCostPerFigure)+")")]):e._e(),e.optionsCostPerFigure<0?a("span",[e._v("("+e._s(e.optionsCostPerFigure)+")")]):e._e(),e._v(" points each ")]),a("div",{staticClass:"unit-cell unit-cell-wide"},[a("strong",[e._v("Total unit cost: "+e._s(e.row.size*(e.row.cost+e.optionsCostPerFigure)))])])]),e._l(e.row.selectedOptions,(function(t,i){return a("button",{key:i,staticClass:"unit-option-remove",on:{click:function(a){return e.removeOption(t)}}},[a("i",{staticClass:"fa fa-times"}),e._v(" "+e._s(e.row.options[t].name)+" ")])})),e.row.options.length&&e.row.options.length>e.excludedOptions.length?a("select",{directives:[{name:"model",rawName:"v-model",value:e.optionToAdd,expression:"optionToAdd"}],staticClass:"unit-option",on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.optionToAdd=t.target.multiple?a:a[0]},function(t){return e.addOption(e.index)}]}},[a("option",{attrs:{value:"-1"}},[e._v("Add an option")]),e._l(e.availableOptions,(function(t,i){return a("option",{key:i,domProps:{value:i}},[e._v(" "+e._s(e.row.options[t].name)+" ")])}))],2):e._e()],2)])},pe=[],me=(a("b0c0"),a("2909")),ve={name:"UnitRow",data:function(){return{optionToAdd:-1}},props:["row","index","num-units"],computed:{availableOptions:function(){var e=this;return this.row.options.reduce((function(t,a,i){return e.excludedOptions.indexOf(i)<0&&t.push(i),t}),[])},upgradedTraits:function(){var e=this,t=[];return this.row.selectedOptions.forEach((function(a){t.push.apply(t,Object(me["a"])(e.row.options[a].upgradeTraits))})),t},excludedOptions:function(){var e=this,t=!1,a=!1,i=!1,r=[],s=!1;return this.row.selectedOptions.forEach((function(r){e.row.options[r].upgradeArmour&&(a=!0),e.row.options[r].upgradeWeapon&&(t=!0),e.row.options[r].upgradeShield&&(i=!0),"Upgrade to Horse"===e.row.options[r].name&&(s=!0)})),this.row.options.forEach((function(e,o){(i&&e.upgradeShield||t&&e.upgradeWeapon||a&&e.upgradeArmour||s&&e.unlessMounted||!s&&e.requiresMounted)&&r.push(o)})),r},optionsCostPerFigure:function(){var e=this;return this.row.selectedOptions.reduce((function(t,a){return t+e.row.options[a].cost}),0)},calculateSave:function(){var e=7,t={};t[u]=0,t[d]=0,t[c]=2,t[p]=1,t[m]=1,t[v]=2;var a=this.row.upgradedArmour?this.row.upgradedArmour:this.row.defaultBody,i=this.row.upgradedShield?this.row.upgradedShield:this.row.defaultShield;return a&&(e-=t[a]),i&&(e-=t[i]),e}},methods:{removeOption:function(e){var t=this.row.options[e];t.upgradeWeapon&&(this.row.upgradedWeapon=""),t.upgradeArmour&&(this.row.upgradedArmour=""),t.upgradeShield&&(this.row.upgradedShield=""),this.row.selectedOptions.splice(this.row.selectedOptions.indexOf(e),1)},addOption:function(){var e=this.availableOptions[this.optionToAdd],t=this.row.options[e];this.row.selectedOptions.push(e),t.upgradeWeapon&&(this.row.upgradedWeapon=t.upgradeWeapon),t.upgradeArmour&&(this.row.upgradedArmour=t.upgradeArmour),t.upgradeShield&&(this.row.upgradedShield=t.upgradeShield),this.optionToAdd=-1},addFigure:function(){this.row.size=this.row.size+1},removeFigure:function(){this.row.size=this.row.size-1}}},fe=ve,ge=Object($["a"])(fe,ce,pe,!1,null,"579c99e4",null),he=ge.exports;function ye(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function be(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ye(Object(a),!0).forEach((function(t){Object(l["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ye(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var we={name:"Calculator",components:{"header-section":D,"intro-screen":q,"sharable-link":X,"title-row":re,toastr:ue,"unit-row":he},data:function(){return{title:"Clashculator",lists:j,selectedNation:"",armyContents:[],onDiskArmy:[],savedArmyName:[],unitToAdd:"",armyName:"Unknown soldiers",localSaves:[],savedName:"",toastrMessage:"",toastrTimeout:0}},computed:{armyChanged:function(){return JSON.stringify(this.armyContents)===JSON.stringify(this.onDiskArmy)&&this.armyName===this.savedArmyName},sharable:function(){var e="".concat(document.location.protocol,"//").concat(document.location.host).concat(document.location.pathname);return"".concat(e,"?a=").concat(JSON.stringify({sa:this.selectedNation,ac:this.armyContents,an:this.armyName}))}},created:function(){var e=decodeURI(document.location.search);if("?a="===e.substr(0,3)){e=e.substr(3);var t=JSON.parse(e);this.selectedNation=t.sa,this.armyContents=t.ac,this.armyName=t.an}this.localSaves=JSON.parse(localStorage.getItem("armyNames"))||[]},methods:{loadArmy:function(e){var t=JSON.parse(localStorage.getItem("armies"))||{},a=t[e];this.selectedNation=a.selectedNation,this.armyContents=JSON.parse(JSON.stringify(a.armyContents)),this.onDiskArmy=a.armyContents,this.armyName=e,this.savedArmyName=e,this.savedName=""},selectNation:function(e){this.selectedNation=e},saveLocally:function(){var e=JSON.parse(localStorage.getItem("armyNames"))||[],t=JSON.parse(localStorage.getItem("armies"))||{};(e.indexOf(this.armyName)>-1&&confirm("Click ok to overwrite!")||e.indexOf(this.armyName)<0)&&(e.indexOf(this.armyName)<0&&e.push(this.armyName),t[this.armyName]={selectedNation:this.selectedNation,armyContents:this.armyContents},localStorage.setItem("armyNames",JSON.stringify(e)),localStorage.setItem("armies",JSON.stringify(t)),this.onDiskArmy=JSON.parse(JSON.stringify(this.armyContents)),this.savedArmyName=this.armyName,this.showToastr("Your army has been saved to this device"))},deleteLocally:function(){var e=JSON.parse(localStorage.getItem("armyNames"))||[],t=JSON.parse(localStorage.getItem("armies"))||{};e.splice(e.indexOf(this.armyName),1),delete t[this.armyName],localStorage.setItem("armyNames",JSON.stringify(e)),localStorage.setItem("armies",JSON.stringify(t)),this.reset()},showToastr:function(e){clearTimeout(this.toastrTimeout),this.toastrMessage=e;var t=this;this.toastrTimeout=setTimeout((function(){t.toastrMessage=""}),3e3)},addUnit:function(e){var t=be({},this.lists[this.selectedNation][e]);i["a"].set(t,"id",Date.now()),i["a"].set(t,"size",t.isCharacter?1:6),i["a"].set(t,"selectedOptions",[]),i["a"].set(t,"excludedOptions",[]),i["a"].set(t,"upgradedArmour",""),i["a"].set(t,"upgradedShield",""),i["a"].set(t,"upgradedWeapon",""),this.armyContents.push(t),this.unitToAdd=""},removeUnit:function(e){this.armyContents.splice(e,1)},reset:function(){this.selectedNation="",this.armyContents=[],this.armyName="Unknown soldiers",this.onDiskArmy="",this.savedArmyName="",this.localSaves=JSON.parse(localStorage.getItem("armyNames"))||[]},reposUp:function(e){var t=this.armyContents[e];this.armyContents.splice(e,1),this.armyContents.splice(e-1,0,t)},reposDown:function(e){var t=this.armyContents[e];this.armyContents.splice(e,1),this.armyContents.splice(e+1,0,t)},updateArmyName:function(e){this.armyName=e}}},Ce=we,Se=Object($["a"])(Ce,o,n,!1,null,"27db0d82",null),Ne=Se.exports,_e={name:"app",components:{Calculator:Ne}},Oe=_e,We=(a("5c0b"),Object($["a"])(Oe,r,s,!1,null,null,null)),Ae=We.exports,ke=a("9483");Object(ke["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(Ae)}}).$mount("#app")},5844:function(e,t,a){"use strict";var i=a("9423"),r=a.n(i);r.a},"5c0b":function(e,t,a){"use strict";var i=a("9c0c"),r=a.n(i);r.a},"73cc":function(e,t,a){"use strict";var i=a("a56d"),r=a.n(i);r.a},9423:function(e,t,a){},"9c0c":function(e,t,a){},a56d:function(e,t,a){},b210:function(e,t,a){"use strict";var i=a("4977"),r=a.n(i);r.a},e695:function(e,t,a){"use strict";var i=a("31a8"),r=a.n(i);r.a}});
//# sourceMappingURL=app.fd4db07a.js.map