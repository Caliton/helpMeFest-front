(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"013e":function(t,e,n){"use strict";var a=n("7803"),i=n.n(a);i.a},"0fc1":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"q-pa-md"},[n("q-table",{staticStyle:{"min-height":"80vmin"},attrs:{"row-key":"name",data:t.data,columns:t.columns,filter:t.filter,"hide-header":"",loading:t.loading,grid:""},scopedSlots:t._u([{key:"top",fn:function(){return[n("div",{staticClass:"col-6 q-table__title"},[t._v(t._s(t.title||"Eventos"))]),n("div",{staticClass:"col-6"},[n("q-input",{staticClass:"float-right q-ml-lg",staticStyle:{"max-width":"40%"},attrs:{dense:"",filled:"",debounce:"300",placeholder:"Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}},[n("q-icon",{attrs:{slot:"append",name:"search"},slot:"append"})],1),t.isManager?n("q-btn",{staticClass:"float-right",attrs:{color:"deep-purple-6",rounded:"","no-caps":"",label:"Adicionar Eventos"},on:{click:t.addEvents}}):t._e()],1)]},proxy:!0},{key:"top-right",fn:function(){return[n("q-input",{attrs:{borderless:"",dense:"",debounce:"300",placeholder:"Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}},[n("q-icon",{attrs:{slot:"append",name:"search"},slot:"append"})],1)]},proxy:!0},{key:"item",fn:function(e){return[n("div",{staticClass:"area-card"},[n("card-events",{attrs:{title:e.row.name,description:e.row.description,date:e.row.dateInitial,isParticipateProp:e.row.isParticipating,data:e.row,isOnwer:t.isOnwer}})],1)]}},{key:"no-data",fn:function(e){var a=e.icon,i=(e.message,e.filter);return[n("div",{staticClass:"full-width row flex-center text-accent q-gutter-sm"},[n("q-icon",{attrs:{size:"2em",name:"sentiment_dissatisfied"}}),n("span",[t._v("\n          Uhm que pena não temos eventos...\n        ")]),n("q-icon",{attrs:{size:"2em",name:i?"filter_b_and_w":a}})],1)]}},{key:"bottom",fn:function(e){return n("div",{staticClass:"flex flex-center",staticStyle:{width:"100%"}},[n("div",{staticClass:"q-pa-lg flex flex-center"},[n("q-pagination",{attrs:{max:e.pagesNumber,"direction-links":!0},model:{value:e.pagination.page,callback:function(n){t.$set(e.pagination,"page",n)},expression:"props.pagination.page"}})],1)])}}])})],1)},i=[],s=n("967e"),o=n.n(s),r=(n("96cf"),n("fa84")),c=n.n(r),l=(n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-card",{staticClass:"my-card"},[n("q-card-section",{class:{"my-card-participate":t.isParticipate},attrs:{horizontal:"",flat:"",bordered:""},on:{click:t.openDetailsEventParticipate}},[n("q-card-section",{staticStyle:{"min-height":"166px","max-height":"167px"}},[n("div",{staticClass:"text-overline"},[n("q-icon",{attrs:{size:"sm",name:"event"}}),t._v(" "+t._s(t._f("moment")(t.date,"DD-MM-YYYY, h:mm:ss a")))],1),n("div",{staticClass:"text-h5 q-mt-sm q-mb-xs"},[t._v(t._s(t.title||"Aqui fica o Título"))]),n("div",{staticClass:"text-caption text-grey"},[t._v("\n              "+t._s(t.descriptionClean||"Aqui fica à descrição")+"\n      ")])])],1),t.isOnwer?t._e():n("q-card-actions",{staticClass:"absolute-bottom-right",staticStyle:{padding:"1rem","padding-right":"1.5rem"},attrs:{align:"right"}},[n("div",{staticClass:"check",staticStyle:{transform:"scale(1.8)"},on:{click:t.openDetailsEvent}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.isParticipate,expression:"isParticipate"}],attrs:{id:"check-"+t.data.id,type:"checkbox"},domProps:{checked:Array.isArray(t.isParticipate)?t._i(t.isParticipate,null)>-1:t.isParticipate},on:{change:function(e){var n=t.isParticipate,a=e.target,i=!!a.checked;if(Array.isArray(n)){var s=null,o=t._i(n,s);a.checked?o<0&&(t.isParticipate=n.concat([s])):o>-1&&(t.isParticipate=n.slice(0,o).concat(n.slice(o+1)))}else t.isParticipate=i}}}),n("label",{attrs:{for:"check-"+t.data.id}}),t.isParticipate?t._e():n("q-tooltip",{attrs:{anchor:"bottom right",self:"top right"}},[t._v("\n        ZzzZZzz..zZzz.\n      ")]),t.isParticipate?n("q-tooltip",{attrs:{anchor:"bottom right",self:"top right","content-class":"bg-purple text-white shadow-4","transition-show":"rotate","transition-hide":"rotate"}},[t._v("\n        Uhuulll!!!! Eu irei!!!\n      ")]):t._e()],1)]),t.isOnwer?n("q-card-actions",{attrs:{align:"right"}},[n("q-btn",{staticStyle:{"background-color":"none",color:"#e74c3c","box-shadow":"none !important"},attrs:{icon:"eva-trash-2-outline","no-caps":"",flat:""},on:{click:t.openExcludeEvent}}),n("q-btn",{staticStyle:{"background-color":"none",color:"#9b59b6"},attrs:{icon:"eva-edit-2-outline","no-caps":"",flat:""},on:{click:t.openEditEvent}})],1):t._e(),n("q-dialog",{attrs:{persistent:""},model:{value:t.invite,callback:function(e){t.invite=e},expression:"invite"}},[n("q-card",[n("q-card-section",{staticClass:"row items-center"},[n("q-icon",{attrs:{size:"2em",name:"sentiment_dissatisfied",color:"purple"}}),n("span",{staticClass:"q-ml-sm"},[t._v("Deseja mesmo não participar do Evento?")])],1),n("q-card-actions",{attrs:{align:"right"}},[n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"","no-caps":"",label:"Vou pensar melhor...",color:"grey"},on:{click:function(e){t.isParticipate=!0}}}),n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"","no-caps":"",label:"Não quero mais!",color:"negative"},on:{click:t.cancelParticipate}})],1)],1)],1),n("q-dialog",{attrs:{persistent:""},model:{value:t.showDelete,callback:function(e){t.showDelete=e},expression:"showDelete"}},[n("q-card",[n("q-card-section",{staticClass:"row items-center"},[n("q-icon",{attrs:{size:"2em",name:"thumb_down",color:"red"}}),n("span",{staticClass:"q-ml-sm"},[t._v("Deseja mesmo acabar com o Evento?")])],1),n("q-card-actions",{attrs:{align:"right"}},[n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"","no-caps":"",label:"Vou pensar melhor...",color:"grey"},on:{click:function(e){t.isParticipate=!0}}}),n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"","no-caps":"",label:"Sim, não quero mais!",color:"red"},on:{click:t.excludeEvent}})],1)],1)],1)],1)}),d=[],u=n("1f7c"),p={name:"card-events",events:["on-participate"],props:{title:{type:String},description:{type:String,default:""},date:{type:String},data:{type:Object},isOnwer:{type:Boolean,default:!1},isParticipateProp:{type:Boolean,default:!1}},computed:{descriptionClean:function(){return this.description.substr(0,136)+"..."}},data:function(){return{isParticipate:this.data.isParticipating,invite:!1,showDelete:!1}},watch:{isParticipate:function(t){t||(this.invite=!0)}},methods:{openDetailsEvent:function(){this.isParticipate||u["a"].$emit("on-participate-event",this.data)},openEditEvent:function(){u["a"].$emit("on-edit-event",this.data)},openExcludeEvent:function(){this.showDelete=!0},excludeEvent:function(){u["a"].$emit("on-delete-event",this.data)},openDetailsEventParticipate:function(){u["a"].$emit("on-participate-event",this.data)},cancelParticipate:function(){u["a"].$emit("on-leave-event",this.data)}}},v=p,f=(n("52d4"),n("2877")),m=Object(f["a"])(v,l,d,!1,null,null,null),h=m.exports,g=n("ba3e"),b={name:"list-events",components:{"card-events":h},created:function(){var t=this;u["a"].$on("on-save-event",(function(e){t.onShow=!0,t.event=e,t.registerEvents(e)})),u["a"].$on("on-delete-event",(function(e){t.deleteEvent(e)})),u["a"].$on("on-leave-event",(function(e){t.leaveEvent(e)}))},beforeDestroy:function(){u["a"].$off("on-save-event",this.event),u["a"].$off("on-delete-event"),u["a"].$off("on-leave-event")},props:{title:{type:String},endpoint:{type:String},isOnwer:{type:Boolean,default:!1},isManager:{type:Boolean,default:!1}},data:function(){return{filter:"",loading:!1,columns:[{name:"name",required:!0,label:"Titulo",align:"left",field:function(t){return t.name},format:function(t){return"".concat(t)},sortable:!0},{name:"description",align:"center",label:"description",field:"description",sortable:!0},{name:"isParticipating",align:"center",label:"isParticipating",field:"isParticipating",sortable:!0}],data:[]}},mounted:function(){this.getEvents()},methods:{refresh:function(){this.getEvents()},addEvents:function(){u["a"].$emit("on-create-event")},saveEvents:function(){var t={operation:g["a"].create};this.registerEvents(t)},getEvents:function(){var t=this;return c()(o.a.mark((function e(){var n;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,t.data=[],e.next=5,t.$axios.get(t.endpoint,t.dataEndpoint);case 5:n=e.sent,console.log("Lista de Eventos: ",n.data),t.data=n.data,t.loading=!1,e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](0),t.loading=!1,console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))()},registerEvents:function(t){var e=this;return c()(o.a.mark((function n(){var a,i;return o.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,a=e.$axios.post,i="/event/",t.id&&(i+="".concat(t.id,"/"),a=e.$axios.put),e.loading=!0,n.next=7,a(i,t);case 7:e.getEvents(),e.loading=!1,n.next=15;break;case 11:n.prev=11,n.t0=n["catch"](0),console.log(n.t0),e.loading=!1;case 15:case"end":return n.stop()}}),n,null,[[0,11]])})))()},leaveEvent:function(t){var e=this;return c()(o.a.mark((function n(){return o.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,e.loading=!0,n.next=4,e.$axios.post("userevent/leaveevent/".concat(t.id,"?userId=").concat(localStorage.getItem("userId")));case 4:e.loading=!1,n.next=11;break;case 7:n.prev=7,n.t0=n["catch"](0),console.log(n.t0),e.loading=!1;case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))()},deleteEvent:function(t){var e=this;return c()(o.a.mark((function n(){return o.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,e.loading=!0,n.next=4,e.$axios.delete("/event/".concat(t.id));case 4:e.getEvents(),e.loading=!1,n.next=12;break;case 8:n.prev=8,n.t0=n["catch"](0),e.loading=!1,console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})))()}}},x=b,w=(n("013e"),Object(f["a"])(x,a,i,!1,null,null,null));e["a"]=w.exports},"1ee7":function(t,e,n){},"4a56":function(t,e,n){"use strict";var a=n("941f"),i=n.n(a);i.a},"52d4":function(t,e,n){"use strict";var a=n("bf72"),i=n.n(a);i.a},"6dec":function(t,e,n){"use strict";var a=n("1ee7"),i=n.n(a);i.a},7803:function(t,e,n){},"8b24":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"flex flex-center"},[n("div",{staticClass:"events-page"},[n("list-events",{ref:"listEvents",attrs:{endpoint:"/event/allbyuser/"+t.idUser}})],1),n("dialog-events",{on:{"on-close":t.refreshListEvents}})],1)},i=[],s=n("0fc1"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-dialog",{attrs:{"transition-show":"scale","transition-hide":"scale"},model:{value:t.onShow,callback:function(e){t.onShow=e},expression:"onShow"}},[n("q-card",{staticClass:"cachorro",staticStyle:{width:"1000px","max-width":"80vw"}},[n("q-card-section",[n("q-btn",{staticClass:"float-right",attrs:{icon:"close",flat:"",round:"",dense:""},on:{click:t.canceled}}),n("div",{staticClass:"text-h2 q-mt-sm q-mb-xs",staticStyle:{color:"#6F6F6F"}},[t._v(t._s(t.event.name||"Aqui fica o Título"))]),n("div",{staticClass:"text-caption text-grey q-mt-lg",staticStyle:{"font-size":"1rem"}},[t._v("\n                  "+t._s(t.event.description||"Aqui fica à descrição")+"\n      ")])],1),n("q-card-section",[n("div",{staticClass:"text-overline"},[n("q-icon",{attrs:{size:"sm",name:"event"}}),t._v(" "+t._s(t._f("moment")(t.event.dateInitial,"DD-MM-YYYY, h:mm:ss a")))],1),n("q-btn",{staticClass:"btn btn-secondary button q-ma-sm",attrs:{"no-caps":"",color:"cyan",size:"sm",rounded:"",label:"Adicionar Convidado"},on:{click:t.add}}),n("vue-draggable",{staticClass:"list-guest",staticStyle:{width:"100%"},attrs:{tag:"ul",list:t.guests,handle:".handle"}},t._l(t.guests,(function(e,a){return n("li",{key:e.idFront,staticClass:"item-guest row"},[n("q-input",{staticClass:"col-md-6 q-mr-sm",attrs:{"input-style":"color: #6F6F6F;",color:"primary",filled:"",placeholder:"Convidado",dense:"","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Preencha com o nome de seu convidado"}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("q-icon",{staticStyle:{color:"#6F6F6F !important"},attrs:{name:"eva-people"}})]},proxy:!0}],null,!0),model:{value:e.name,callback:function(n){t.$set(e,"name",n)},expression:"element.name"}}),n("q-input",{staticClass:"col-md-3",staticStyle:{"max-width":"200px"},attrs:{"input-style":"color: #6F6F6F;",color:"primary",dense:"",filled:"",placeholder:"Relação","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Preencha com o nome de seu convidado"}]},scopedSlots:t._u([{key:"after",fn:function(){return[n("q-btn",{staticStyle:{color:"#6F6F6F !important"},attrs:{flat:"",round:"",icon:"fa fa-times close"},on:{click:function(e){return t.removeAt(a)}}})]},proxy:!0}],null,!0),model:{value:e.relationship,callback:function(n){t.$set(e,"relationship",n)},expression:"element.relationship"}})],1)})),0)],1),n("q-card-section"),n("q-card-actions",{staticClass:"text-teal container-card absolute-bottom-right",staticStyle:{margin:"10px"}},[n("q-btn",{attrs:{color:"light-blue",dense:"","no-caps":"",label:"Quero Participar!"},on:{click:t.confirm}})],1)],1)],1)},r=[],c=(n("a481"),n("4db1")),l=n.n(c),d=n("967e"),u=n.n(d),p=(n("96cf"),n("fa84")),v=n.n(p),f=(n("f751"),n("310e")),m=n.n(f),h=n("1f7c"),g=n("ba3e"),b={name:"dialog-events",components:{"vue-draggable":m.a},events:["on-close"],created:function(){var t=this;h["a"].$on("on-participate-event",(function(e){t.event=e,t.onShowModal(),t.getGuests(e)}))},beforeDestroy:function(){h["a"].$off("on-participate-event",this.event)},computed:{draggingInfo:function(){return this.dragging?"under drag":""}},data:function(){return{onShow:!1,event:{},guests:[],guestsExcludeds:[],id:0,idFront:0,userId:localStorage.getItem("userId"),dragging:!1}},methods:{add:function(){this.idFront++,this.guests.push({idFront:this.idFront,id:0,name:"",relationship:"",relatedUserId:this.userId,enumCrud:67})},removeAt:function(t){this.guestsExcludeds.push(this.guests.splice(t,1)[0])},onShowModal:function(t){this.event=Object.assign({},t),this.onShow=!0},onHideModal:function(){this.$emit("on-close"),this.resetVariables(),this.onShow=!1},getGuests:function(t){var e=this;return v()(u.a.mark((function n(){var a;return u.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,e.event=t,n.next=4,e.$axios.get("/Event/".concat(t.id,"?userId=").concat(e.userId));case 4:a=n.sent,e.guests=a.data.guests,e.id=e.guests.length,n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))()},confirm:function(){var t=this;return v()(u.a.mark((function e(){var n,a;return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,t.guestsExcludeds.forEach((function(e,n){t.guestsExcludeds[n].enumCrud=g["a"].delete})),n=[].concat(l()(t.guests),l()(t.guestsExcludeds)),a=t.event,a.guests=n,a.currentUserId=t.userId,e.next=8,t.$axios.put("/event/{id}".replace("{id}",t.event.id),a);case 8:t.loading=!1,t.onHideModal();case 10:case"end":return e.stop()}}),e)})))()},canceled:function(){this.onHideModal()},resetVariables:function(){this.event={},this.guests=[],this.guestsExcludeds=[],this.id=0,this.idFront=0}}},x=b,w=(n("4a56"),n("2877")),q=Object(w["a"])(x,o,r,!1,null,null,null),y=q.exports,k={name:"PageIndex",components:{"list-events":s["a"],"dialog-events":y},data:function(){return{idUser:localStorage.getItem("userId")}},methods:{refreshListEvents:function(){this.$refs.listEvents.refresh()}}},E=k,_=(n("6dec"),Object(w["a"])(E,a,i,!1,null,null,null));e["default"]=_.exports},"941f":function(t,e,n){},ba3e:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a={update:85,create:67,delete:68}},bf72:function(t,e,n){}}]);