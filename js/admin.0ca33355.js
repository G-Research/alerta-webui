(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["admin"],{"08ca":function(t,e,s){},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},1711:function(t,e,s){"use strict";var a=s("8336"),i=s("0789"),r=s("132d"),o=function(){var t=this,e=t._self._c;return e(i["b"],[e(a["a"],{directives:[{name:"has-perms",rawName:"v-has-perms",value:t.perms,expression:"perms"}],key:"add",staticClass:"mb-5",attrs:{color:"accent",fab:"",fixed:"",bottom:"",right:""},on:{click:t.addToList}},[e(r["a"],{attrs:{color:"white"}},[t._v(" add ")])],1)],1)},n=[],l={props:{perms:{type:String,required:!0}},methods:{addToList:function(){this.$emit("add-to-list")}}},c=l,d=(s("b0f2"),s("2877")),u=Object(d["a"])(c,o,n,!1,null,null,null);e["a"]=u.exports},"4c41":function(t,e,s){},"5e62":function(t,e,s){"use strict";s("4c41")},"696f":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"groups"},[e("group-list")],1)},i=[],r=s("bee2"),o=s("d4ec"),n=s("262e"),l=s("2caf"),c=s("9ab4"),d=s("60a3"),u=s("0798"),m=s("c6a6"),p=s("8336"),f=s("b0af"),h=s("99d9"),v=s("12b2"),g=s("cc20"),_=s("a523"),b=s("8fea"),x=s("169a"),I=s("0e8f"),w=s("4bd4"),$=s("132d"),k=s("a722"),y=s("8860"),C=s("ba95"),P=s("40fe"),S=s("c954"),O=s("5d23"),j=s("9910"),N=s("2677"),U=s("53ca"),G=(s("b0c0"),s("498a"),s("ac1f"),s("841c"),function(){var t=this,e=t._self._c;return e("div",[e(x["a"],{attrs:{"max-width":"500px"},model:{value:t.listbox,callback:function(e){t.listbox=e},expression:"listbox"}},[e(w["a"],{ref:"form"},[e(f["a"],[e(v["a"],[e("span",{staticClass:"headline"},[t._v(" "+t._s(t.$t("AddRemoveUsers"))+" ")])]),e(h["b"],[e(_["a"],{attrs:{"grid-list-md":""}},[e(k["a"],{attrs:{wrap:""}},[e(I["a"],{attrs:{xs9:""}},[e(m["a"],{attrs:{disabled:t.isLoading,items:t.allUsers,autofocus:"",box:"",chips:"",label:t.$t("Addusers"),"item-text":"name","item-value":"id"},on:{change:t.addUser},scopedSlots:t._u([{key:"selection",fn:function(s){return[e(g["a"],{staticClass:"chip--select-multi",attrs:{selected:s.selected,close:""},on:{input:function(e){return t.removeUser(s.item)}}},[e($["a"],[t._v("person")]),t._v(" "+t._s(s.item.name)+" ")],1)]}},{key:"item",fn:function(s){return["object"!==Object(U["a"])(s.item)?[e(O["a"],{domProps:{textContent:t._s(s.item)}})]:[e(S["a"],[e($["a"],[t._v("person")])],1),e(O["a"],[e(O["c"],{domProps:{innerHTML:t._s(s.item.name)}}),e(O["b"],{domProps:{innerHTML:t._s(s.item.email)}})],1)]]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1)],1)],1),e(v["a"],{attrs:{"primary-title":""}},[e("div",[e("div",{staticClass:"headline"},[t._v(" "+t._s(t.groupName)+" ")]),e("span",[t._v(t._s(t.$t("UsersInGroup")))])])]),e(y["a"],t._l(t.groupUsers,(function(s){return e(C["a"],{key:s.id,attrs:{avatar:""},on:{click:function(e){return t.removeUser(s.id)}}},[e(S["a"],[e($["a"],[t._v("person")])],1),e(O["a"],[e(O["c"],{domProps:{innerHTML:t._s(s.name)}}),e(O["b"],{domProps:{innerHTML:t._s(s.login)}})],1),e(P["a"],[e($["a"],[t._v(" "+t._s("active"==s.status?"remove_circle":"remove_circle_outline")+" ")])],1)],1)})),1),e(h["a"],[e(j["a"]),e(p["a"],{attrs:{color:"blue darken-1",flat:""},on:{click:t.close}},[t._v(" Close ")])],1)],1)],1)],1),e(x["a"],{attrs:{"max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(w["a"],{ref:"form"},[e(f["a"],[e(v["a"],[e("span",{staticClass:"headline"},[t._v(" "+t._s(t.formTitle)+" ")])]),e(h["b"],[e(_["a"],{attrs:{"grid-list-md":""}},[e(k["a"],{attrs:{wrap:""}},[e(I["a"],{attrs:{xs12:"",sm6:"",md12:""}},[e(g["a"],{directives:[{name:"show",rawName:"v-show",value:t.editedItem.name,expression:"editedItem.name"}],attrs:{close:""},on:{click:function(e){t.editedItem.name=null}}},[e("strong",[t._v(t._s(t.editedItem.name))]),t._v("  "),e("span",[t._v("("+t._s(t.$t("group"))+")")])])],1),e(N["a"],{attrs:{label:t.$t("Group"),rules:[t.rules.required],required:""},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name","string"===typeof e?e.trim():e)},expression:"editedItem.name"}}),e(I["a"],{attrs:{xs12:""}},[e(N["a"],{attrs:{label:t.$t("Description")},model:{value:t.editedItem.text,callback:function(e){t.$set(t.editedItem,"text","string"===typeof e?e.trim():e)},expression:"editedItem.text"}})],1)],1)],1)],1),e(h["a"],[e(j["a"]),e(p["a"],{attrs:{color:"blue darken-1",flat:""},on:{click:t.close}},[t._v(" "+t._s(t.$t("Cancel"))+" ")]),e(p["a"],{attrs:{color:"blue darken-1",flat:""},on:{click:t.validate}},[t._v(" "+t._s(t.$t("Save"))+" ")])],1)],1)],1)],1),e(f["a"],[e(v["a"],{staticClass:"title"},[t._v(" "+t._s(t.$t("Groups"))+" "),e(j["a"]),e(N["a"],{attrs:{"append-icon":"search",label:t.$t("Search"),"single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),e(b["a"],{staticClass:"px-2",attrs:{headers:t.headers,items:t.groups,"rows-per-page-items":t.rowsPerPageItems,pagination:t.pagination,search:t.search,loading:t.isLoading,"must-sort":"","sort-icon":"arrow_drop_down"},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"items",fn:function(s){return[e("td",[t._v(t._s(s.item.name))]),e("td",{staticClass:"text-xs-left"},[t._v(" "+t._s(s.item.text)+" ")]),e("td",[t._v(" "+t._s(s.item.count)+" ")]),e("td",{staticClass:"text-no-wrap"},[e(p["a"],{directives:[{name:"has-perms",rawName:"v-has-perms.disable",value:"admin:groups",expression:"'admin:groups'",modifiers:{disable:!0}}],staticClass:"btn--plain mr-0",attrs:{icon:""},on:{click:function(e){return t.editItem(s.item)}}},[e($["a"],{attrs:{small:"",color:"grey darken-3"}},[t._v(" edit ")])],1),e(p["a"],{directives:[{name:"has-perms",rawName:"v-has-perms.disable",value:"admin:groups",expression:"'admin:groups'",modifiers:{disable:!0}}],staticClass:"btn--plain mr-0",attrs:{icon:""},on:{click:function(e){return t.addRemoveUsers(s.item)}}},[e($["a"],{attrs:{small:"",color:"grey darken-3"}},[t._v(" person_add ")])],1),e(p["a"],{directives:[{name:"has-perms",rawName:"v-has-perms.disable",value:"admin:groups",expression:"'admin:groups'",modifiers:{disable:!0}}],staticClass:"btn--plain mx-0",attrs:{icon:""},on:{click:function(e){return t.deleteItem(s.item)}}},[e($["a"],{attrs:{small:"",color:"grey darken-3"}},[t._v(" delete ")])],1)],1)]}}])},[e("template",{slot:"no-data"},[e(u["a"],{attrs:{value:!0,color:"error",icon:"warning"}},[t._v(" "+t._s(t.$t("NoDisplay"))+" ")])],1),e(u["a"],{attrs:{slot:"no-results",value:!0,color:"error",icon:"warning"},slot:"no-results"},[t._v(" "+t._s(t.$t("SearchNoResult1"))+' "'+t._s(t.search)+'" '+t._s(t.$t("SearchNoResult2"))+" ")])],2)],1),e("list-button-add",{directives:[{name:"show",rawName:"v-show",value:t.isBasicAuth,expression:"isBasicAuth"}],attrs:{perms:"admin:groups"},on:{"add-to-list":function(e){t.dialog=!0}}})],1)}),L=[],R=s("1711"),A=s("fe0b"),B={components:{ListButtonAdd:R["a"]},data:function(t){return{descending:!0,page:1,rowsPerPageItems:[10,20,30,40,50],pagination:{sortBy:"name",rowsPerPage:20},search:"",dialog:!1,headers:[{text:A["a"].t("Name"),value:"name"},{text:A["a"].t("Description"),value:"text"},{text:A["a"].t("NumberUsers"),value:"count"},{text:A["a"].t("Actions"),value:"actions",sortable:!1}],editedId:null,editedItem:{name:null,text:""},menu1:!1,menu2:!1,defaultItem:{name:null,text:""},rules:{required:function(t){return!!t||A["a"].t("Required")}},groupId:null,groupName:"",listbox:!1,selected:null}},computed:{isBasicAuth:function(){return"basic"==this.$config.provider},groups:function(){return this.$store.state.groups.groups},groupUsers:function(){return this.$store.state.groups.users},allUsers:function(){return this.$store.state.users.users},isLoading:function(){return this.$store.state.groups.isLoading},formTitle:function(){return this.editedId?A["a"].t("EditGroup"):A["a"].t("NewGroup")},refresh:function(){return this.$store.state.refresh}},watch:{dialog:function(t){t||this.close()},refresh:function(t){t||this.getGroups()}},created:function(){this.getUsers(),this.getGroups()},methods:{getUsers:function(){this.$store.dispatch("users/getUsers")},getGroups:function(){this.$store.dispatch("groups/getGroups")},getGroupUsers:function(t){this.$store.dispatch("groups/getGroupUsers",t)},editItem:function(t){this.editedId=t.id,this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){confirm(A["a"].t("ConfirmDelete"))&&this.$store.dispatch("groups/deleteGroup",t.id)},close:function(){var t=this;this.dialog=!1,this.listbox=!1,setTimeout((function(){t.$refs.form.reset(),t.editedItem=Object.assign({},t.defaultItem),t.editedId=null,t.groupId=null,t.groupName="",t.$store.dispatch("groups/clearGroupUsers")}),300)},validate:function(){this.$refs.form.validate()&&(this.$refs.form.resetValidation(),this.save())},save:function(){this.editedId?this.$store.dispatch("groups/updateGroup",[this.editedId,{name:this.editedItem.name,text:this.editedItem.text}]):this.$store.dispatch("groups/createGroup",this.editedItem),this.close()},addRemoveUsers:function(t){this.groupId=t.id,this.groupName=t.name,this.getGroupUsers(this.groupId),this.listbox=!0},addUser:function(t){var e=this;this.$store.dispatch("groups/addUserToGroup",[this.groupId,t]),setTimeout((function(){e.$refs.form.reset(),e.selected=null}),300)},removeUser:function(t){this.$store.dispatch("groups/removeUserFromGroup",[this.groupId,t])}}},T=B,q=(s("5e62"),s("2877")),D=Object(q["a"])(T,G,L,!1,null,"19cc083e",null),V=D.exports,E=function(t){Object(n["a"])(s,t);var e=Object(l["a"])(s);function s(){return Object(o["a"])(this,s),e.apply(this,arguments)}return Object(r["a"])(s)}(d["c"]);E=Object(c["a"])([Object(d["a"])({components:{GroupList:V}})],E);var M=E,F=M,H=Object(q["a"])(F,a,i,!1,null,null,null);e["default"]=H.exports},"841c":function(t,e,s){"use strict";var a=s("c65b"),i=s("d784"),r=s("825a"),o=s("7234"),n=s("1d80"),l=s("129f"),c=s("577e"),d=s("dc4a"),u=s("14c3");i("search",(function(t,e,s){return[function(e){var s=n(this),i=o(e)?void 0:d(e,t);return i?a(i,e,s):new RegExp(e)[t](c(s))},function(t){var a=r(this),i=c(t),o=s(e,a,i);if(o.done)return o.value;var n=a.lastIndex;l(n,0)||(a.lastIndex=0);var d=u(a,i);return l(a.lastIndex,n)||(a.lastIndex=n),null===d?-1:d.index}]}))},"934c":function(t,e,s){},a0d4:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"perms"},[e("perm-list")],1)},i=[],r=s("bee2"),o=s("d4ec"),n=s("262e"),l=s("2caf"),c=s("9ab4"),d=s("60a3"),u=s("0798"),m=s("c6a6"),p=s("8336"),f=s("b0af"),h=s("99d9"),v=s("12b2"),g=s("cc20"),_=s("a523"),b=s("8fea"),x=s("169a"),I=s("0e8f"),w=s("4bd4"),$=s("132d"),k=s("a722"),y=s("9910"),C=s("2677"),P=s("3a2f"),S=(s("ac1f"),s("466d"),s("498a"),s("841c"),s("caad"),s("2532"),function(){var t=this,e=t._self._c;return e("div",[e(x["a"],{attrs:{"max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(w["a"],{ref:"form"},[e(f["a"],[e(v["a"],[e("span",{staticClass:"headline"},[t._v(" "+t._s(t.formTitle)+" ")])]),e(h["b"],[e(_["a"],{attrs:{"grid-list-md":""}},[e(k["a"],{attrs:{wrap:""}},[e(I["a"],{attrs:{xs12:"",sm6:"",md12:""}},[e(g["a"],{directives:[{name:"show",rawName:"v-show",value:t.editedItem.match,expression:"editedItem.match"}],attrs:{close:""},on:{click:function(e){t.editedItem.match=null}}},[e("strong",[t._v(t._s(t.editedItem.match))]),t._v("  "),e("span",[t._v("("+t._s(t.$t("role"))+")")])])],1),e(C["a"],{attrs:{label:t.$t("Role"),rules:[t.rules.required],required:""},model:{value:t.editedItem.match,callback:function(e){t.$set(t.editedItem,"match","string"===typeof e?e.trim():e)},expression:"editedItem.match"}}),e(I["a"],{attrs:{xs12:"",sm6:"",md12:""}},[e(m["a"],{attrs:{items:t.allowedScopes,label:t.$t("Scopes"),chips:"",clearable:"",solo:"",multiple:""},scopedSlots:t._u([{key:"selection",fn:function(s){return[e(g["a"],{attrs:{selected:s.selected,close:""}},[e("strong",[t._v(t._s(s.item))]),t._v("  "),e("span",[t._v("("+t._s(t.$t("scope"))+")")])])]}}]),model:{value:t.editedItem.scopes,callback:function(e){t.$set(t.editedItem,"scopes",e)},expression:"editedItem.scopes"}})],1)],1)],1)],1),e(h["a"],[e(y["a"]),e(p["a"],{attrs:{color:"blue darken-1",flat:""},on:{click:t.close}},[t._v(" "+t._s(t.$t("Cancel"))+" ")]),e(p["a"],{attrs:{color:"blue darken-1",flat:""},on:{click:t.validate}},[t._v(" "+t._s(t.$t("Save"))+" ")])],1)],1)],1)],1),e(f["a"],[e(v["a"],{staticClass:"title"},[t._v(" "+t._s(t.$t("Permissions"))+" "),e(y["a"]),e(I["a"],{staticClass:"mr-3 pt-3",attrs:{xs3:""}},[e(m["a"],{attrs:{items:t.scopes,label:t.$t("Scopes"),chips:"",multiple:""},scopedSlots:t._u([{key:"selection",fn:function(s){return[e(g["a"],{attrs:{selected:s.selected,close:""}},[e("strong",[t._v(t._s(s.item))]),t._v("  "),e("span",[t._v("("+t._s(t.$t("scope"))+")")])])]}}]),model:{value:t.wantScopes,callback:function(e){t.wantScopes=e},expression:"wantScopes"}})],1),e(I["a"],{attrs:{xs6:""}},[e(C["a"],{attrs:{"append-icon":"search",label:t.$t("Search"),"single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),e(b["a"],{staticClass:"px-2",attrs:{headers:t.headers,items:t.perms,"rows-per-page-items":t.rowsPerPageItems,pagination:t.pagination,search:t.search,"custom-filter":t.customFilter,loading:t.isLoading,"must-sort":"","sort-icon":"arrow_drop_down"},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"items",fn:function(s){return[e("td",[e(g["a"],{attrs:{small:""}},[e("strong",[t._v(t._s(s.item.match))]),t._v("  "),e("span",[t._v("("+t._s(t.$t("role"))+")")])]),e(P["a"],{attrs:{top:""}},[t.systemRoles.includes(s.item.match)?e($["a"],{attrs:{slot:"activator",small:""},slot:"activator"},[t._v(" lock ")]):t._e(),e("span",[t._v(t._s(t.$t("SystemRole")))])],1)],1),e("td",t._l(s.item.scopes,(function(s){return e(g["a"],{key:s,attrs:{small:""}},[e("strong",[t._v(t._s(s))]),t._v("  "),e("span",[t._v("("+t._s(t.$t("scope"))+")")])])})),1),e("td",{staticClass:"text-no-wrap"},[e(p["a"],{directives:[{name:"has-perms",rawName:"v-has-perms.disable",value:"admin:perms",expression:"'admin:perms'",modifiers:{disable:!0}}],staticClass:"btn--plain mr-0",attrs:{icon:"",disabled:t.systemRoles.includes(s.item.match)},on:{click:function(e){return t.editItem(s.item)}}},[e($["a"],{attrs:{small:"",color:"grey darken-3"}},[t._v(" edit ")])],1),e(p["a"],{directives:[{name:"has-perms",rawName:"v-has-perms.disable",value:"admin:perms",expression:"'admin:perms'",modifiers:{disable:!0}}],staticClass:"btn--plain mx-0",attrs:{icon:"",disabled:t.systemRoles.includes(s.item.match)},on:{click:function(e){return t.deleteItem(s.item)}}},[e($["a"],{attrs:{small:"",color:"grey darken-3"}},[t._v(" delete ")])],1)],1)]}}])},[e("template",{slot:"no-data"},[e(u["a"],{attrs:{value:!0,color:"error",icon:"warning"}},[t._v(" "+t._s(t.$t("NoDisplay"))+" ")])],1),e(u["a"],{attrs:{slot:"no-results",value:!0,color:"error",icon:"warning"},slot:"no-results"},[t._v(" "+t._s(t.$t("SearchNoResult1"))+' "'+t._s(t.search)+'" '+t._s(t.$t("SearchNoResult2"))+" ")])],2)],1),e("list-button-add",{attrs:{perms:"admin:perms"},on:{"add-to-list":function(e){t.dialog=!0}}})],1)}),O=[],j=(s("4de4"),s("d3b7"),s("b64b"),s("1711")),N=s("fe0b"),U=s("b74e"),G={components:{ListButtonAdd:j["a"]},data:function(){return{descending:!0,page:1,rowsPerPageItems:[10,20,30,40,50],pagination:{sortBy:"match",rowsPerPage:20},search:"",systemRoles:["admin","user","guest"],wantScopes:[],dialog:!1,headers:[{text:N["a"].t("Role"),value:"match"},{text:N["a"].t("Scopes"),value:"scopes"},{text:N["a"].t("Actions"),value:"name",sortable:!1}],editedId:null,editedItem:{match:"",scopes:[]},defaultItem:{match:"",scopes:[]},rules:{required:function(t){return!!t||N["a"].t("Required")}}}},computed:{perms:function(){return this.$store.state.perms.permissions},scopes:function(){return this.$store.state.perms.scopes},allowedScopes:function(){return U["a"].getAllowedScopes(this.$store.getters["auth/scopes"],this.$store.state.perms.scopes)},isLoading:function(){return this.$store.state.perms.isLoading},formTitle:function(){return this.editedId?N["a"].t("EditPermission"):N["a"].t("NewPermission")},refresh:function(){return this.$store.state.refresh}},watch:{dialog:function(t){t||this.close()},refresh:function(t){t||this.getPerms()}},created:function(){this.getPerms(),this.getScopes()},methods:{getPerms:function(){this.$store.dispatch("perms/getPerms")},getScopes:function(){this.$store.dispatch("perms/getScopes")},filterByScopes:function(t){this.wantScopes=t},customFilter:function(t,e,s){var a=this;return t=t.filter((function(t){return a.wantScopes.length>0?t.scopes.some((function(t){return a.wantScopes.includes(t)})):t})),""===e.trim()?t:t.filter((function(t){return Object.keys(t).some((function(a){return s(t[a],e)}))}))},editItem:function(t){this.editedId=t.id,this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){confirm(N["a"].t("ConfirmDelete"))&&this.$store.dispatch("perms/deletePerm",t.id)},close:function(){var t=this;this.dialog=!1,setTimeout((function(){t.$refs.form.reset(),t.editedItem=Object.assign({},t.defaultItem),t.editedId=null}),300)},validate:function(){this.$refs.form.validate()&&(this.$refs.form.resetValidation(),this.save())},save:function(){this.editedId?this.$store.dispatch("perms/updatePerm",[this.editedId,{match:this.editedItem.match,scopes:this.editedItem.scopes}]):this.$store.dispatch("perms/createPerm",this.editedItem),this.close()}}},L=G,R=s("2877"),A=Object(R["a"])(L,S,O,!1,null,null,null),B=A.exports,T=function(t){Object(n["a"])(s,t);var e=Object(l["a"])(s);function s(){return Object(o["a"])(this,s),e.apply(this,arguments)}return Object(r["a"])(s)}(d["c"]);T=Object(c["a"])([Object(d["a"])({components:{PermList:B}})],T);var q=T,D=q,V=Object(R["a"])(D,a,i,!1,null,null,null);e["default"]=V.exports},a609:function(t,e,s){"use strict";s("934c");var a=s("604c"),i=a["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},props:{activeClass:{type:String,default:"v-btn--active"}},computed:{classes:function(){return a["a"].options.computed.classes.call(this)}}}),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a])}return t};e["a"]=i.extend({name:"v-btn-toggle",props:{activeClass:{type:String,default:"v-btn--active"}},computed:{classes:function(){return r({},i.options.computed.classes.call(this),{"v-btn-toggle":!0,"v-btn-toggle--only-child":1===this.selectedItems.length,"v-btn-toggle--selected":this.selectedItems.length>0})}}})},b0f2:function(t,e,s){"use strict";s("08ca")},dfe8:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"customers"},[e("customer-list")],1)},i=[],r=s("bee2"),o=s("d4ec"),n=s("262e"),l=s("2caf"),c=s("9ab4"),d=s("60a3"),u=s("0798"),m=s("8336"),p=s("b0af"),f=s("99d9"),h=s("12b2"),v=s("cc20"),g=s("a523"),_=s("8fea"),b=s("169a"),x=s("0e8f"),I=s("4bd4"),w=s("132d"),$=s("a722"),k=s("9910"),y=s("2677"),C=(s("ac1f"),s("466d"),s("498a"),s("841c"),function(){var t=this,e=t._self._c;return e("div",[e(b["a"],{attrs:{"max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(I["a"],{ref:"form"},[e(p["a"],[e(h["a"],[e("span",{staticClass:"headline"},[t._v(" "+t._s(t.formTitle)+" ")])]),e(f["b"],[e(g["a"],{attrs:{"grid-list-md":""}},[e($["a"],{attrs:{wrap:""}},[e(x["a"],{attrs:{xs12:""}},[e(y["a"],{attrs:{label:t.$t("LookUp"),hint:t.$t("LookUpDescription"),"persistent-hint":"",rules:[t.rules.required],required:""},model:{value:t.editedItem.match,callback:function(e){t.$set(t.editedItem,"match","string"===typeof e?e.trim():e)},expression:"editedItem.match"}}),e(x["a"],{attrs:{xs12:""}},[e(v["a"],{directives:[{name:"show",rawName:"v-show",value:t.editedItem.customer,expression:"editedItem.customer"}],attrs:{close:""},on:{click:function(e){t.editedItem.customer=null}}},[e("strong",[t._v(t._s(t.editedItem.customer))]),t._v("  "),e("span",[t._v("("+t._s(t.$t("customer"))+")")])])],1),e(y["a"],{attrs:{label:t.$t("Customer"),rules:[t.rules.required],required:""},model:{value:t.editedItem.customer,callback:function(e){t.$set(t.editedItem,"customer","string"===typeof e?e.trim():e)},expression:"editedItem.customer"}})],1)],1)],1)],1),e(f["a"],[e(k["a"]),e(m["a"],{attrs:{color:"blue darken-1",flat:""},on:{click:t.close}},[t._v(" "+t._s(t.$t("Cancel"))+" ")]),e(m["a"],{attrs:{color:"blue darken-1",flat:""},on:{click:t.validate}},[t._v(" "+t._s(t.$t("Save"))+" ")])],1)],1)],1)],1),e(p["a"],[e(h["a"],{staticClass:"title"},[t._v(" "+t._s(t.$t("Customers"))+" "),e(k["a"]),e(y["a"],{attrs:{"append-icon":"search",label:t.$t("Search"),"single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),e(_["a"],{staticClass:"px-2",attrs:{headers:t.headers,items:t.customers,"rows-per-page-items":t.rowsPerPageItems,pagination:t.pagination,search:t.search,loading:t.isLoading,"must-sort":"","sort-icon":"arrow_drop_down"},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"items",fn:function(s){return[e("td",[t._v(t._s(s.item.match))]),e("td",[e(v["a"],[e("strong",[t._v(t._s(s.item.customer))]),t._v("  "),e("span",[t._v("("+t._s(t.$t("customer"))+")")])])],1),e("td",{staticClass:"text-no-wrap"},[e(m["a"],{directives:[{name:"has-perms",rawName:"v-has-perms.disable",value:"admin:customers",expression:"'admin:customers'",modifiers:{disable:!0}}],staticClass:"btn--plain mr-0",attrs:{icon:""},on:{click:function(e){return t.editItem(s.item)}}},[e(w["a"],{attrs:{small:"",color:"grey darken-3"}},[t._v(" edit ")])],1),e(m["a"],{directives:[{name:"has-perms",rawName:"v-has-perms.disable",value:"admin:customers",expression:"'admin:customers'",modifiers:{disable:!0}}],staticClass:"btn--plain mx-0",attrs:{icon:""},on:{click:function(e){return t.deleteItem(s.item)}}},[e(w["a"],{attrs:{small:"",color:"grey darken-3"}},[t._v(" delete ")])],1)],1)]}}])},[e("template",{slot:"no-data"},[e(u["a"],{attrs:{value:!0,color:"error",icon:"warning"}},[t._v(" "+t._s(t.$t("NoDisplay"))+" ")])],1),e(u["a"],{attrs:{slot:"no-results",value:!0,color:"error",icon:"warning"},slot:"no-results"},[t._v(" "+t._s(t.$t("SearchNoResult1"))+' "'+t._s(t.search)+'" '+t._s(t.$t("SearchNoResult2"))+" ")])],2)],1),e("list-button-add",{attrs:{perms:"admin:customers"},on:{"add-to-list":function(e){t.dialog=!0}}})],1)}),P=[],S=s("1711"),O=s("fe0b"),j={components:{ListButtonAdd:S["a"]},data:function(){return{descending:!0,page:1,rowsPerPageItems:[10,20,30,40,50],pagination:{sortBy:"match",rowsPerPage:20},search:"",dialog:!1,headers:[{text:O["a"].t("LookUp"),value:"match"},{text:O["a"].t("Customer"),value:"customer"},{text:O["a"].t("Actions"),value:"name",sortable:!1}],editedId:null,editedItem:{match:null,customer:null},defaultItem:{match:null,customer:null},rules:{required:function(t){return!!t||O["a"].t("Required")}}}},computed:{customers:function(){return this.$store.state.customers.customers},isLoading:function(){return this.$store.state.customers.isLoading},formTitle:function(){return this.editedId?O["a"].t("EditCustomer"):O["a"].t("NewCustomer")},refresh:function(){return this.$store.state.refresh}},watch:{dialog:function(t){t||this.close()},refresh:function(t){t||this.getCustomers()}},created:function(){this.getCustomers()},methods:{getCustomers:function(){this.$store.dispatch("customers/getCustomers")},editItem:function(t){this.editedId=t.id,this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){confirm(O["a"].t("ConfirmDelete"))&&this.$store.dispatch("customers/deleteCustomer",t.id)},close:function(){var t=this;this.dialog=!1,setTimeout((function(){t.$refs.form.reset(),t.editedItem=Object.assign({},t.defaultItem),t.editedId=null}),300)},validate:function(){this.$refs.form.validate()&&(this.$refs.form.resetValidation(),this.save())},save:function(){this.editedId?this.$store.dispatch("customers/updateCustomer",[this.editedId,{match:this.editedItem.match,customer:this.editedItem.customer}]):this.$store.dispatch("customers/createCustomer",this.editedItem),this.close()}}},N=j,U=s("2877"),G=Object(U["a"])(N,C,P,!1,null,null,null),L=G.exports,R=function(t){Object(n["a"])(s,t);var e=Object(l["a"])(s);function s(){return Object(o["a"])(this,s),e.apply(this,arguments)}return Object(r["a"])(s)}(d["c"]);R=Object(c["a"])([Object(d["a"])({components:{CustomerList:L}})],R);var A=R,B=A,T=Object(U["a"])(B,a,i,!1,null,null,null);e["default"]=T.exports},ed81:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"users"},[e("user-list")],1)},i=[],r=s("bee2"),o=s("d4ec"),n=s("262e"),l=s("2caf"),c=s("9ab4"),d=s("60a3"),u=s("0798"),m=s("c6a6"),p=s("8336"),f=s("a609"),h=s("b0af"),v=s("99d9"),g=s("12b2"),_=s("ac7c"),b=s("cc20"),x=s("a523"),I=s("8fea"),w=s("169a"),$=s("0e8f"),k=s("4bd4"),y=s("132d"),C=s("a722"),P=s("b56d"),S=s("9910"),O=s("b73d"),j=s("2677"),N=s("3a2f"),U=(s("b0c0"),s("498a"),s("ac1f"),s("841c"),function(){var t=this,e=t._self._c;return e("div",[e(w["a"],{attrs:{"max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(k["a"],{ref:"form",attrs:{autocomplete:"off"}},[e(h["a"],[e(g["a"],[e("span",{staticClass:"headline"},[t._v(" "+t._s(t.formTitle)+" ")])]),e(v["b"],[e(x["a"],{attrs:{"grid-list-md":""}},[e(C["a"],{attrs:{wrap:""}},[e($["a"],{attrs:{xs12:"",sm6:"",md9:""}},[e(j["a"],{attrs:{disabled:!t.isBasicAuth,label:t.$t("Name"),rules:[t.rules.required],required:""},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name","string"===typeof e?e.trim():e)},expression:"editedItem.name"}})],1),e($["a"],{attrs:{xs12:"",sm6:"",md3:""}},[e(O["a"],{attrs:{"true-value":"active","false-value":"inactive",label:t.$t("Active")},model:{value:t.editedItem.status,callback:function(e){t.$set(t.editedItem,"status",e)},expression:"editedItem.status"}})],1),e($["a"],{attrs:{xs12:"",sm6:"",md9:""}},[e(j["a"],{attrs:{disabled:!t.isBasicAuth,label:t.$t("Login"),rules:[t.rules.required],required:""},model:{value:t.editedItem.login,callback:function(e){t.$set(t.editedItem,"login","string"===typeof e?e.trim():e)},expression:"editedItem.login"}})],1),e($["a"],{attrs:{xs12:"",sm6:"",md9:""}},[e(j["a"],{attrs:{disabled:!t.isBasicAuth,label:t.$t("Email"),rules:[t.rules.required],required:""},model:{value:t.editedItem.email,callback:function(e){t.$set(t.editedItem,"email","string"===typeof e?e.trim():e)},expression:"editedItem.email"}})],1),e($["a"],{attrs:{xs12:"",sm6:"",md3:""}},[e(_["a"],{attrs:{label:t.$t("Verified")},model:{value:t.editedItem.email_verified,callback:function(e){t.$set(t.editedItem,"email_verified",e)},expression:"editedItem.email_verified"}})],1),e($["a"],{attrs:{xs12:"",sm6:""}},[e(j["a"],{directives:[{name:"show",rawName:"v-show",value:t.isBasicAuth,expression:"isBasicAuth"}],staticClass:"input-group--focused",attrs:{"append-icon":t.showPassword?"visibility_off":"visibility",rules:t.isBasicAuth?[t.rules.min]:[],type:t.showPassword?"text":"password",name:"input-10-2",label:t.$t("Password"),autocomplete:"new-password"},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.editedItem.password,callback:function(e){t.$set(t.editedItem,"password",e)},expression:"editedItem.password"}}),e(j["a"],{directives:[{name:"show",rawName:"v-show",value:!t.isBasicAuth,expression:"!isBasicAuth"}],attrs:{disabled:"","append-icon":"visibility",label:t.$t("Password")}})],1),e($["a"],{attrs:{xs12:"",sm6:""}},[e(j["a"],{directives:[{name:"show",rawName:"v-show",value:t.isBasicAuth,expression:"isBasicAuth"}],attrs:{"append-icon":t.showPassword?"visibility_off":"visibility",rules:t.isBasicAuth?[t.rules.passwordMatch]:[],type:t.showPassword?"text":"password",name:"input-10-2",label:t.$t("ConfirmPassword"),value:t.editedItem.confirmPassword,autocomplete:"new-password"},on:{"click:append":function(e){t.showPassword=!t.showPassword}}}),e(j["a"],{directives:[{name:"show",rawName:"v-show",value:!t.isBasicAuth,expression:"!isBasicAuth"}],attrs:{disabled:"","append-icon":"visibility",label:t.$t("ConfirmPassword")}})],1),e($["a"],{attrs:{xs12:"",sm6:"",md12:""}},[e(P["a"],{attrs:{items:t.allGroups,label:t.$t("Groups"),"item-text":"name","item-value":"id",chips:"",solo:"",multiple:"",disabled:!t.editedId},scopedSlots:t._u([{key:"selection",fn:function(s){return[e(b["a"],{attrs:{selected:s.selected,close:""}},[e("strong",[t._v(t._s(s.item.name))]),t._v("  "),e("span",[t._v("("+t._s(t.$t("Group"))+")")])])]}}]),model:{value:t.userGroups,callback:function(e){t.userGroups=e},expression:"userGroups"}})],1),e($["a"],{attrs:{xs12:"",sm6:"",md12:""}},[e(m["a"],{attrs:{items:t.allowedRoles,label:t.$t("Roles"),chips:"",clearable:"",solo:"",multiple:""},scopedSlots:t._u([{key:"selection",fn:function(s){return[e(b["a"],{attrs:{selected:s.selected,close:""}},[e("strong",[t._v(t._s(s.item))]),t._v("  "),e("span",[t._v("("+t._s(t.$t("role"))+")")])])]}}]),model:{value:t.editedItem.roles,callback:function(e){t.$set(t.editedItem,"roles",e)},expression:"editedItem.roles"}})],1),e($["a"],{attrs:{xs12:"",sm6:"",md12:""}},[e(j["a"],{attrs:{label:t.$t("Comment")},model:{value:t.editedItem.text,callback:function(e){t.$set(t.editedItem,"text","string"===typeof e?e.trim():e)},expression:"editedItem.text"}})],1)],1)],1)],1),e(v["a"],[e(S["a"]),e(p["a"],{attrs:{color:"blue darken-1",flat:""},on:{click:t.close}},[t._v(" "+t._s(t.$t("Cancel"))+" ")]),e(p["a"],{attrs:{color:"blue darken-1",flat:""},on:{click:t.validate}},[t._v(" "+t._s(t.$t("Save"))+" ")])],1)],1)],1)],1),e(h["a"],[e(g["a"],{staticClass:"title"},[t._v(" "+t._s(t.$t("Users"))+" "),e(S["a"]),e(f["a"],{staticClass:"transparent",attrs:{multiple:""},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[e(p["a"],{attrs:{value:"active",flat:""}},[e(N["a"],{attrs:{bottom:""}},[e(y["a"],{attrs:{slot:"activator"},slot:"activator"},[t._v(" check_circle ")]),e("span",[t._v(t._s(t.$t("Active")))])],1)],1),e(p["a"],{attrs:{value:"inactive",flat:""}},[e(N["a"],{attrs:{bottom:""}},[e(y["a"],{attrs:{slot:"activator"},slot:"activator"},[t._v(" block ")]),e("span",[t._v(t._s(t.$t("Inactive")))])],1)],1)],1),e(S["a"]),e($["a"],{staticClass:"mr-3 pt-3",attrs:{xs3:""}},[e(m["a"],{attrs:{items:t.allowedRoles,label:t.$t("Roles"),chips:"",multiple:""},scopedSlots:t._u([{key:"selection",fn:function(s){return[e(b["a"],{attrs:{selected:s.selected,close:""}},[e("strong",[t._v(t._s(s.item))]),t._v("  "),e("span",[t._v("("+t._s(t.$t("role"))+")")])])]}}]),model:{value:t.wantRoles,callback:function(e){t.wantRoles=e},expression:"wantRoles"}})],1),e($["a"],{attrs:{xs6:""}},[e(j["a"],{attrs:{"append-icon":"search",label:t.$t("Search"),"single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),e(I["a"],{staticClass:"px-2",attrs:{headers:t.headers,items:t.users,"rows-per-page-items":t.rowsPerPageItems,pagination:t.pagination,search:t.search,"custom-filter":t.customFilter,loading:t.isLoading,"must-sort":"","sort-icon":"arrow_drop_down"},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"items",fn:function(s){return[e("td",[t._v(t._s(s.item.name))]),e("td",{staticClass:"text-xs-center"},[e(N["a"],{attrs:{top:""}},[e(y["a"],{attrs:{slot:"activator",color:"active"==s.item.status?"primary":""},on:{click:function(e){return t.toggleUserStatus(s.item)}},slot:"activator"},[t._v(" "+t._s("active"===s.item.status?"toggle_on":"toggle_off")+" ")]),e("span",[t._v(t._s(t._f("capitalize")(s.item.status)))])],1)],1),e("td",[t._v(t._s(s.item.login))]),e("td",[t._v(t._s(s.item.email))]),e("td",{staticClass:"text-xs-center"},[e(N["a"],{attrs:{top:""}},[e(y["a"],{attrs:{slot:"activator"},on:{click:function(e){return t.toggleEmailVerified(s.item)}},slot:"activator"},[t._v(" "+t._s(s.item.email_verified?"check_box":"check_box_outline_blank")+" ")]),e("span",[t._v(" "+t._s(s.item.email_verified?t.$t("EmailVerified"):t.$t("EmailNotVerified"))+" ")])],1)],1),e("td",t._l(s.item.roles,(function(s){return e(b["a"],{key:s},[e("strong",[t._v(t._s(s))]),t._v("  "),e("span",[t._v("("+t._s(t.$t("role"))+")")])])})),1),e("td",{staticClass:"text-xs-right"},[e("date-time",{attrs:{value:s.item.createTime,format:"mediumDate"}})],1),e("td",{staticClass:"text-xs-right"},[s.item.lastLogin?e("date-time",{attrs:{value:s.item.lastLogin,format:"mediumDate"}}):t._e()],1),e("td",{staticClass:"text-xs-right"},[t._v(" "+t._s(s.item.text)+" ")]),e("td",{staticClass:"text-no-wrap"},[e(p["a"],{directives:[{name:"has-perms",rawName:"v-has-perms.disable",value:"admin:users",expression:"'admin:users'",modifiers:{disable:!0}}],staticClass:"btn--plain mr-0",attrs:{icon:""},on:{click:function(e){return t.editItem(s.item)}}},[e(y["a"],{attrs:{small:"",color:"grey darken-3"}},[t._v(" edit ")])],1),e(p["a"],{directives:[{name:"has-perms",rawName:"v-has-perms.disable",value:"admin:users",expression:"'admin:users'",modifiers:{disable:!0}}],staticClass:"btn--plain mx-0",attrs:{icon:""},on:{click:function(e){return t.deleteItem(s.item)}}},[e(y["a"],{attrs:{small:"",color:"grey darken-3"}},[t._v(" delete ")])],1)],1)]}}])},[e("template",{slot:"no-data"},[e(u["a"],{attrs:{value:!0,color:"error",icon:"warning"}},[t._v(" "+t._s(t.$t("NoDisplay"))+" ")])],1),e(u["a"],{attrs:{slot:"no-results",value:!0,color:"error",icon:"warning"},slot:"no-results"},[t._v(" "+t._s(t.$t("SearchNoResult1"))+' "'+t._s(t.search)+'" '+t._s(t.$t("SearchNoResult2"))+". ")])],2)],1),e("list-button-add",{directives:[{name:"show",rawName:"v-show",value:t.isBasicAuth,expression:"isBasicAuth"}],attrs:{perms:"admin:users"},on:{"add-to-list":function(e){t.dialog=!0}}})],1)}),G=[],L=(s("4de4"),s("d3b7"),s("caad"),s("2532"),s("b64b"),s("d81d"),s("6377")),R=s("1711"),A=s("fe0b"),B={components:{DateTime:L["a"],ListButtonAdd:R["a"]},data:function(t){return{descending:!0,page:1,rowsPerPageItems:[10,20,30,40,50],pagination:{sortBy:"name",rowsPerPage:20},status:["active","inactive"],search:"",wantRoles:[],dialog:!1,headers:[{text:A["a"].t("Name"),value:"name"},{text:A["a"].t("Status"),value:"status"},{text:A["a"].t("Login"),value:"login"},{text:A["a"].t("Email"),value:"email"},{text:A["a"].t("VerifiedOrNot"),value:"email_verified"},{text:A["a"].t("Roles"),value:"roles"},{text:A["a"].t("Created"),value:"createTime"},{text:A["a"].t("LastLogin"),value:"lastLogin"},{text:A["a"].t("Comment"),value:"text"},{text:A["a"].t("Actions"),value:"name",sortable:!1}],editedId:null,editedItem:{name:"",status:t.editedId?null:"active",login:"",email:"",email_verified:!1,password:"",confirmPassword:"",roles:[],text:""},editedGroups:null,defaultItem:{name:"",status:t.editedId?null:"active",login:"",email:"",email_verified:!1,password:"",confirmPassword:"",roles:[],text:""},showPassword:!1,rules:{required:function(t){return!!t||A["a"].t("Required")},min:function(e){return t.editedId&&null==e||e&&e.length>=6||A["a"].t("Min6Char")},passwordMatch:function(e){return t.editedId&&null==e||e&&e==t.editedItem.password||A["a"].t("PasswordNotMatch")}}}},computed:{isBasicAuth:function(){return"basic"==this.$config.provider},users:function(){var t=this;return this.$store.state.users.users.filter((function(e){return!t.status||t.status.includes(e.status)}))},allGroups:function(){return this.$store.state.groups.groups},userGroups:{get:function(){return this.$store.state.users.groups},set:function(t){this.editedGroups=t}},allowedRoles:function(){return this.$store.getters["perms/roles"]},isLoading:function(){return this.$store.state.users.isLoading},formTitle:function(){return this.editedId?A["a"].t("EditUser"):A["a"].t("NewUser")},refresh:function(){return this.$store.state.refresh}},watch:{dialog:function(t){t||this.close()},refresh:function(t){t||this.getUsers()}},created:function(){this.getUsers(),this.getGroups(),this.getPerms(),this.editedItem=Object.assign({},this.defaultItem)},methods:{getUsers:function(){this.$store.dispatch("users/getUsers")},getGroups:function(){this.$store.dispatch("groups/getGroups")},getUserGroups:function(t){this.$store.dispatch("users/getUserGroups",t)},getPerms:function(){this.$store.dispatch("perms/getPerms")},filterByRoles:function(t){this.wantRoles=t},customFilter:function(t,e,s){var a=this;return t=t.filter((function(t){return a.wantRoles.length>0?t.roles.some((function(t){return a.wantRoles.includes(t)})):t})),""===e.trim()?t:t.filter((function(t){return Object.keys(t).some((function(a){return s(t[a],e)}))}))},toggleUserStatus:function(t){this.$store.dispatch("users/setUserStatus",[t.id,"active"===t.status?"inactive":"active"])},toggleEmailVerified:function(t){this.$store.dispatch("users/setEmailVerified",[t.id,!t.email_verified])},editItem:function(t){this.editedId=t.id,this.editedItem=Object.assign({},t),this.getUserGroups(t.id),this.editedGroups=null,this.$refs.form.resetValidation(),this.dialog=!0},deleteItem:function(t){confirm(A["a"].t("ConfirmDelete"))&&this.$store.dispatch("users/deleteUser",t.id)},close:function(){var t=this;this.dialog=!1,setTimeout((function(){t.$refs.form.resetValidation(),t.editedItem=Object.assign({},t.defaultItem),t.editedId=null}),300)},validate:function(){this.$refs.form.validate()&&(this.$refs.form.resetValidation(),this.save())},save:function(){var t=this;if(this.editedId){if(this.$store.dispatch("users/updateUser",[this.editedId,{name:this.editedItem.name,email:this.editedItem.email,password:this.editedItem.password,status:this.editedItem.status,roles:this.editedItem.roles,text:this.editedItem.text,email_verified:this.editedItem.email_verified}]),this.editedGroups){var e=this.editedGroups.filter((function(e){return!t.userGroups.map((function(t){return t.id})).includes(e)})),s=this.userGroups.map((function(t){return t.id})).filter((function(e){return!t.editedGroups.includes(e)}));e.map((function(e){return t.$store.dispatch("groups/addUserToGroup",[e,t.editedId])})),s.map((function(e){return t.$store.dispatch("groups/removeUserFromGroup",[e,t.editedId])}))}}else this.$store.dispatch("users/createUser",this.editedItem);this.close()}}},T=B,q=s("2877"),D=Object(q["a"])(T,U,G,!1,null,null,null),V=D.exports,E=function(t){Object(n["a"])(s,t);var e=Object(l["a"])(s);function s(){return Object(o["a"])(this,s),e.apply(this,arguments)}return Object(r["a"])(s)}(d["c"]);E=Object(c["a"])([Object(d["a"])({components:{UserList:V}})],E);var M=E,F=M,H=Object(q["a"])(F,a,i,!1,null,null,null);e["default"]=H.exports}}]);
//# sourceMappingURL=admin.0ca33355.js.map