(function(e){function t(t){for(var a,o,i=t[0],l=t[1],c=t[2],d=0,h=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&h.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(h.length)h.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,i=1;i<s.length;i++){var l=s[i];0!==n[l]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=s[0]))}return e}var a={},n={app:0},r=[];function o(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=a,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(s,a,function(t){return e[t]}.bind(null,a));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/kikolog/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;r.push([4,"chunk-vendors"]),s()})({0:function(e,t){},"034f":function(e,t,s){"use strict";s("85ec")},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t,s){e.exports=s("56d7")},"4ee3":function(e,t,s){"use strict";s("a46a")},5:function(e,t){},"50c9":function(e,t,s){"use strict";s("94be")},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"touch",rawName:"v-touch:swipe",value:e.swipeHandler,expression:"swipeHandler",arg:"swipe"}],attrs:{id:"app"}},[s("b-navbar",{attrs:{type:"light",variant:"primary",shadow:""}},[s("b-button",{staticClass:"mb-0 ml-0 mr-1",staticStyle:{background:"transparent",border:"none"},attrs:{"aria-controls":"scenebar"},on:{click:function(t){e.scenebarShown=!e.scenebarShown}}},[s("b-icon",{attrs:{icon:"justify"}})],1),s("b-navbar-brand",{staticClass:"mb-0 text-light",attrs:{tag:"b"}},[e._v("Hasakiko's Logbook")]),s("b-navbar-nav",{staticClass:"ml-auto"},[s("b-button",{staticStyle:{background:"transparent",border:"none"},attrs:{right:"",title:"Help"},on:{click:function(t){return e.$bvModal.show("helpModal")}}},[s("b-icon",{attrs:{icon:"question-circle-fill"}})],1),s("b-button",{staticStyle:{background:"transparent",border:"none"},attrs:{right:"",title:"Settings"},on:{click:function(t){e.settingsbarShown=!e.settingsbarShown}}},[s("b-icon",{attrs:{icon:"gear-fill"}})],1)],1)],1),s("b-sidebar",{attrs:{id:"scenebar",title:"Scenes","aria-expanded":!e.scenebarShown,shadow:"",backdrop:""},scopedSlots:e._u([{key:"header",fn:function(){return[s("div",{staticClass:"ml-auto mr-auto align-items-center"},[s("b-button",{staticClass:"mt-5",attrs:{variant:0==e.scene?"light":""},on:{click:function(t){return e.setScene(0)}}},[e._v("Show All ("+e._s(e.messages.size)+")")]),s("b-button-group",{staticClass:"mt-1 ml-auto"},[s("b-button",{attrs:{disabled:0==e.scene,variant:0==e.tab?"outline-dark":""},on:{click:function(t){e.tab=0}}},[e._v("IC")]),s("b-button",{attrs:{disabled:0==e.scene,variant:1==e.tab?"outline-dark":""},on:{click:function(t){e.tab=1}}},[e._v("Rolls")]),s("b-button",{attrs:{disabled:0==e.scene,variant:2==e.tab?"outline-dark":""},on:{click:function(t){e.tab=2}}},[e._v("OOC")]),s("b-button",{attrs:{disabled:0==e.scene,variant:3==e.tab?"outline-dark":""},on:{click:function(t){e.tab=3}}},[e._v("Misc")])],1)],1)]},proxy:!0}]),model:{value:e.scenebarShown,callback:function(t){e.scenebarShown=t},expression:"scenebarShown"}},[s("b-button-group",{staticClass:"mt-2 mb-2 mr-4 ml-0",attrs:{size:"sm",vertical:""}},e._l(e.scenes.filter((function(e){return e.count>0})),(function(t){return s("b-button",{key:"SceneSelect/"+t._id,staticStyle:{"text-align":"left",width:"100%"},attrs:{variant:e.scene==t._id?"":"light"},on:{click:function(s){return e.setScene(t._id)}}},[e._v("# "+e._s(t.name)+" ("+e._s(t.count)+") ")])})),1)],1),s("b-sidebar",{attrs:{id:"settingsbar",title:"Settings","aria-expanded":!e.settingsbarShown,shadow:"",right:"",backdrop:""},scopedSlots:e._u([{key:"footer",fn:function(){return[s("div",{staticClass:" align-items-center"},[s("b-button",{staticClass:"mb-2 mt-2",on:{click:function(t){return e.$bvModal.show("createModal")}}},[e._v("Edit Log")])],1)]},proxy:!0}]),model:{value:e.settingsbarShown,callback:function(t){e.settingsbarShown=t},expression:"settingsbarShown"}},[s("SettingsPanel",{attrs:{fontSize:e.settings.fontS,edit:e.settings.enableEdit},on:{fontSizeChange:function(t){return e.settings.fontS=t},editChange:function(t){return e.settings.enableEdit=t}}})],1),-1!=e.scene?s("div",{staticClass:"message-container",style:{"font-size":e.fontSize},on:{scroll:e.updateScroll}},e._l(e.chatSelect.slice(0,e.max),(function(t,a){return s("AppMessage",{key:t._id,attrs:{prev:a?e.chatSelect[a-1]:null,next:a-e.max-1?e.chatSelect[a+1]:null,message:t,users:e.users,actors:e.actors,scenes:e.scenes,showScene:!e.settings.splitScenes,edit:e.settings.enableEdit},on:{openMessage:e.setMessageToEdit}})})),1):s("LoadPanel",{on:{archiveRead:e.handleArchive}}),s("b-modal",{attrs:{size:"xl",title:"Log Editing",id:"createModal"}},[s("CreatePanel",{attrs:{users:e.users,actors:e.actors,scenes:e.scenes,settings:e.settings,messages:e.messages},on:{"chat-read":e.handleChat,"users-read":e.handleUsers,"actors-read":e.handleActors,"scenes-read":e.handleScenes,actorImageGet:e.handleActorImageGet,nameChange:function(t){return e.settings.name=t},filterMessages:e.applyFilter}})],1),s("b-modal",{attrs:{size:"xl",title:"Help",id:"helpModal"}},[s("HelpPanel")],1),s("b-modal",{attrs:{size:"xl",id:"editModal",title:"Edit Message","hide-header-close":""},scopedSlots:e._u([{key:"modal-footer",fn:function(){return[s("b-button",{staticClass:"mr-auto",attrs:{variant:"danger",size:"sm"},on:{click:function(t){return e.deleteMessage()}}},[e._v(" Delete? ")]),s("b-button",{staticClass:"float-right",attrs:{variant:"success",size:"sm"},on:{click:function(t){e.updateMessage(),e.$bvModal.hide("editModal")}}},[e._v(" Save ")]),s("b-button",{staticClass:"float-right",attrs:{variant:"primary",size:"sm"},on:{click:function(t){e.$bvModal.hide("editModal"),e.selectedMessage=null}}},[e._v(" Close ")])]},proxy:!0}])},[null!=e.selectedMessage?s("div",[s("b-form",{staticStyle:{display:"flex","flex-wrap":"wrap","justify-content":"space-between"}},[s("b-form-group",{staticStyle:{width:"10em"},attrs:{label:"Alias","label-for":"alias-input"}},[null!=e.selectedMessage.speaker?s("b-form-input",{attrs:{id:"alias-input",type:"text"},model:{value:e.selectedMessage.speaker.alias,callback:function(t){e.$set(e.selectedMessage.speaker,"alias",t)},expression:"selectedMessage.speaker.alias"}}):e._e()],1),s("b-form-group",{attrs:{label:"Type","label-for":"type-select"}},[s("b-form-select",{attrs:{id:"type-select",select:"",type:"number",options:e.chatTypes},model:{value:e.selectedMessage.type,callback:function(t){e.$set(e.selectedMessage,"type",t)},expression:"selectedMessage.type"}})],1),s("b-form-group",{attrs:{label:"User","label-for":"er-select"}},[s("b-form-select",{attrs:{id:"user-select",select:"",options:e.users.map((function(e){return{value:e._id,text:e.name}}))},model:{value:e.selectedMessage.user,callback:function(t){e.$set(e.selectedMessage,"user",t)},expression:"selectedMessage.user"}})],1),s("b-form-group",{attrs:{label:"Actor","label-for":"actor-select"}},[s("b-form-select",{attrs:{id:"actor-select",select:"",options:e.actors.map((function(e){return{value:e._id,text:e.name}})).concat({value:null,text:"None"})},model:{value:e.selectedMessage.speaker.actor,callback:function(t){e.$set(e.selectedMessage.speaker,"actor",t)},expression:"selectedMessage.speaker.actor"}})],1),s("b-form-group",{attrs:{label:"Scene","label-for":"scene-select"}},[s("b-form-select",{attrs:{id:"scene-select",select:"",options:e.scenes.map((function(e){return{value:e._id,text:e.name}})).concat({value:null,text:"None"})},model:{value:e.selectedMessage.speaker.scene,callback:function(t){e.$set(e.selectedMessage.speaker,"scene",t)},expression:"selectedMessage.speaker.scene"}})],1),s("b-form-textarea",{staticClass:"mt-2",attrs:{id:"textarea",placeholder:"",rows:"3"},model:{value:e.selectedMessage.content,callback:function(t){e.$set(e.selectedMessage,"content",t)},expression:"selectedMessage.content"}})],1),s("hr"),s("AppMessage",{attrs:{prev:null,message:e.selectedMessage,users:e.users,actors:e.actors,scenes:e.scenes,showScene:!0,edit:!1}})],1):e._e()])],1)},r=[],o=s("2909"),i=s("b85c"),l=(s("159b"),s("4e82"),s("d3b7"),s("6062"),s("3ca3"),s("ddb0"),s("b0c0"),s("7db0"),s("d81d"),s("4de4"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("b-form",{staticClass:"pt-2 px-1"},[s("b-form-group",{staticClass:"mr-0",attrs:{label:"Text Size","label-cols":"6","content-cols":"3","label-for":"fontSize"}},[s("b-form-input",{attrs:{id:"fontSize",type:"number"},model:{value:e.fontSize,callback:function(t){e.fontSize=t},expression:"fontSize"}})],1),s("b-form-group",{staticClass:"mr-0",attrs:{label:"Edit Messages","label-cols":"6","content-cols":"3","label-for":"edit"}},[s("b-form-checkbox",{attrs:{id:"edit"},model:{value:e.edit,callback:function(t){e.edit=t},expression:"edit"}})],1)],1)],1)}),c=[],u={name:"SettingsPanel",props:["edit","fontSize"],data:function(){return{url:""}},watch:{fontSize:function(e){this.$emit("fontSizeChange",e)},edit:function(e){this.$emit("editChange",e)}},methods:{passDecodedLog:function(e){this.$emit("archiveRead",JSON.parse(e.target.result))}}},d=u,h=s("2877"),p=Object(h["a"])(d,l,c,!1,null,"489a4241",null),f=p.exports,m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("b-container",{staticClass:"pt-5 px-5",attrs:{fluid:""}},[s("b-row",[s("b-col",[s("b-form-file",{attrs:{placeholder:"Load your .kiko file!","drop-placeholder":"Drop file here...",accept:".kiko",disabled:null!=e.k},model:{value:e.k,callback:function(t){e.k=t},expression:"k"}})],1)],1)],1)],1)},b=[],g={name:"LoadPanel",props:[],data:function(){return{reader:new FileReader,k:null,setActor:{name:null,avatar:""},url:""}},watch:{k:function(e){console.log("Inputted Log. Reading..."),this.reader.onload=this.passDecodedLog,this.reader.readAsText(e)}},methods:{passDecodedLog:function(e){this.$emit("archiveRead",JSON.parse(e.target.result))}}},v=g,_=Object(h["a"])(v,m,b,!1,null,"7e826d78",null),y=_.exports,w=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("b-form-file",{attrs:{placeholder:"Load your world's actors.db file...","drop-placeholder":"Drop file here...",accept:".db"},model:{value:e.a,callback:function(t){e.a=t},expression:"a"}}),s("b-form-file",{attrs:{placeholder:"Load your world's scenes.db file...","drop-placeholder":"Drop file here...",accept:".db",disabled:null==e.a},model:{value:e.s,callback:function(t){e.s=t},expression:"s"}}),s("b-form-file",{attrs:{placeholder:"Load your world's user.db file...","drop-placeholder":"Drop file here...",disabled:null==e.s,accept:".db"},model:{value:e.u,callback:function(t){e.u=t},expression:"u"}}),s("b-form-file",{attrs:{placeholder:"Load your world's chat files...","drop-placeholder":"Drop file here...",accept:".json, .db"},model:{value:e.c,callback:function(t){e.c=t},expression:"c"}}),s("hr"),s("b-container",[s("b-row",[e.actors.length>0?s("b-col",{attrs:{sm:"4"}},[s("h3",[e._v("Actors ("+e._s(e.actors.length)+")")]),s("div",{staticClass:"scroll"},e._l(e.actors,(function(t){return s("div",{key:t._id,staticClass:"actor-prev",attrs:{title:t._id}},[null==t.avatar?s("b-button",{attrs:{size:"sm"},on:{click:function(s){e.setActor=t,e.$bvModal.show("getImageModal")}}},[e._v(" Set Avatar ")]):e._e(),s("avatar",{staticClass:"avatar",attrs:{src:t.avatar},on:{click:function(s){e.setActor=t,e.$bvModal.show("getImageModal")}}}),e._v(e._s(t.name)+" ")],1)})),0)]):e._e(),e.scenes.length>0?s("b-col",{attrs:{sm:"4"}},[s("h3",[e._v("Scenes ("+e._s(e.scenes.length)+")")]),s("div",{staticClass:"scroll"},e._l(e.scenes,(function(t,a){return s("div",{key:a+"/"+t._id,attrs:{title:t._id}},[e._v(e._s(t.name))])})),0)]):e._e(),e.users.length>0?s("b-col",{attrs:{sm:"4"}},[s("h3",[e._v("Users ("+e._s(e.users.length)+")")]),s("div",{staticClass:"scroll"},e._l(e.users,(function(t){return s("div",{key:t._id,attrs:{title:t._id}},[s("b-form-input",{staticStyle:{width:"2em",height:"2em",display:"inline"},attrs:{type:"color"},model:{value:t.color,callback:function(s){e.$set(t,"color",s)},expression:"user.color"}}),e._v(" "),s("b-form-input",{style:{color:t.color,display:"inline",width:"calc(100% - 2.5em)"},attrs:{type:"text",title:"Rename User?",name:""},model:{value:t.name,callback:function(s){e.$set(t,"name",s)},expression:"user.name"}})],1)})),0)]):e._e()],1)],1),s("hr"),s("b-container",{attrs:{fluid:""}},[s("b-row",[s("b-col",{attrs:{sm:"3"}},[s("label",[e._v("Remove Messages:")])]),s("b-col",{attrs:{sm:"3"}},[s("b-form-select",{attrs:{options:e.filters},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})],1),s("b-col",[1==e.filter?s("b-form-select",{attrs:{options:e.subFilters},model:{value:e.subFilter,callback:function(t){e.subFilter=t},expression:"subFilter"}}):e.filter>1?s("b-form-input",{attrs:{type:"datetime-local"},model:{value:e.subFilter,callback:function(t){e.subFilter=t},expression:"subFilter"}}):e._e()],1),s("b-col",[s("b-button",{attrs:{disabled:0==e.filter||!e.subFilter},on:{click:e.applyFilter}},[e._v("Apply")])],1)],1)],1),s("hr"),s("b-container",{attrs:{fluid:""}},[s("b-row",[s("b-col",{attrs:{sm:"3"}},[s("label",[e._v("Log Name:")])]),s("b-col",{attrs:{sm:"3"}},[s("b-form-input",{attrs:{type:"text"},on:{change:function(t){return e.$emit("nameChange",t)}}})],1),s("b-col",[s("b-button",{on:{click:e.downloadLog}},[e._v("Save Log")])],1)],1)],1),s("b-modal",{attrs:{size:"xl",id:"getImageModal",title:"Set Avatar for "+e.setActor.name},scopedSlots:e._u([{key:"modal-footer",fn:function(){return[s("b-row",[s("b-col",[s("b-button",{staticClass:"float-right",attrs:{variant:"danger",size:"sm"},on:{click:function(t){return e.deleteImage()}}},[e._v(" Delete? ")])],1),s("b-col",[s("b-button",{staticClass:"float-right",attrs:{variant:"primary",size:"sm"},on:{click:function(t){return e.$bvModal.hide("getImageModal")}}},[e._v(" Close ")])],1)],1)]},proxy:!0}])},[s("avatar",{staticStyle:{width:"5em",height:"5em"},attrs:{src:e.setActor.avatar}}),s("b-form-file",{attrs:{placeholder:"Load an image to set as avatar...","drop-placeholder":"Drop file here...",accept:".jpg,.png,.svg,.bmp,.gif,.webm,.mp4"},model:{value:e.i,callback:function(t){e.i=t},expression:"i"}})],1)],1)},k=[],S=(s("ac1f"),s("1276"),s("fb6a"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:{circle:e.circle}},["image"==e.type?s("img",{attrs:{src:e.src}}):"video"==e.type?s("video",{ref:"vid",attrs:{autoplay:e.play,loop:"true"}},[s("source",{attrs:{src:e.src,type:e.type+"/"+e.format}})]):void 0!=e.alt?s("img",{attrs:{src:"https://ui-avatars.com/api/?background="+e.alt.color.slice(1)+"&color=fff&length=1&name="+e.alt.name}}):e._e()])}),x=[],M={name:"avatar",props:{src:null,play:{type:Boolean,default:!0},circle:{type:Boolean,default:!1,required:!1},alt:{type:Object,required:!1}},watch:{play:function(e){"video"==this.type&&(e?this.$refs.vid.play():this.$refs.vid.pause())}},computed:{type:function(e){return void 0!=e.src?e.src.slice(5).split("/")[0]:""},format:function(e){return void 0!=e.src?e.src.slice(5).split("]")[0].split("/")[1]:""}}},C=M,A=(s("da0b"),Object(h["a"])(C,S,x,!1,null,"748b1388",null)),O=A.exports,D={name:"CreatePanel",components:{Avatar:O},props:["users","actors","scenes","settings","messages"],data:function(){return{reader:new FileReader,c:null,u:null,a:null,s:null,i:null,name:"",setActor:{name:null,avatar:""},url:"",filter:0,filters:[{text:"That are...",value:1},{text:"Before...",value:2},{text:"After...",value:3}],subFilters:[{text:"Misc. Messages",value:function(e){return 0!=e.type}},{text:"OOC",value:function(e){return 1!=e.type}},{text:"Rolls",value:function(e){return 5!=e.type}},{text:"Whispers",value:function(e){return 0==e.whisper.length}}],subFilter:!1}},watch:{c:function(e){console.log("Inputted chat. Reading..."),this.reader.onload=this.passDecodedChat,this.reader.readAsText(e)},a:function(e){this.reader.onload=this.passDecodedActors,this.reader.readAsText(e)},u:function(e){this.reader.onload=this.passDecodedUsers,this.reader.readAsText(e)},s:function(e){this.reader.onload=this.passDecodedScenes,this.reader.readAsText(e)},i:function(e){this.reader.onload=this.setAvatar,this.reader.readAsDataURL(e)},fontSize:function(e){this.$emit("fontSizeChange",e)},splitScenes:function(e){this.$emit("splitScenesChange",e)}},methods:{applyFilter:function(){var e=this;1==this.filter&&this.$emit("filterMessages",this.subFilter),2==this.filter&&this.$emit("filterMessages",(function(t){return t.timestamp>new Date(e.subFilter)})),3==this.filter&&this.$emit("filterMessages",(function(t){return t.timestamp<new Date(e.subFilter)})),this.subFilter=!1,this.filter=0},downloadLog:function(){var e=JSON.stringify({version:"0.1",settings:this.settings,users:this.users,actors:this.actors,scenes:this.scenes,messages:Object(o["a"])(this.messages)});console.log("Size of Final JSON ",e.length/1024/1024,"MB");var t="data:text/json;charset=utf-8,"+encodeURIComponent(e),s=document.createElement("a");s.setAttribute("href",t),s.setAttribute("download",this.settings.name+".kiko"),document.body.appendChild(s),s.click(),s.remove()},passDecodedChat:function(e){console.log("Read chat "+this.c.name+". Decoding...");var t=e.target.result;"db"==this.c.name.split(".")[1]&&(t=this.correctDB(t)),this.$emit("chat-read",JSON.parse(t))},passDecodedUsers:function(e){this.$emit("users-read",JSON.parse(this.correctDB(e.target.result)))},passDecodedActors:function(e){this.$emit("actors-read",JSON.parse(this.correctDB(e.target.result)))},passDecodedScenes:function(e){var t=JSON.parse(this.correctDB(e.target.result));this.$emit("scenes-read",t)},correctDB:function(e){return"["+e.replaceAll("\n",",").slice(0,-1)+"]"},setAvatar:function(e){this.$set(this.setActor,"avatar",e.target.result)},log:function(e){console.log(e)}}},$=D,L=(s("50c9"),Object(h["a"])($,w,k,!1,null,"043d782c",null)),j=L.exports,F=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"accordion",attrs:{role:"tablist"}},[s("h1",[e._v("Hasakiko's Logbook")]),s("p",[e._v("A simple online reader for your Foundry VTT chatlogs.")]),s("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[s("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-1",modifiers:{"accordion-1":!0}}],attrs:{block:"",variant:"secondary"}},[e._v("Reading a Log")])],1),s("b-collapse",{attrs:{id:"accordion-1",accordion:"my-accordion",role:"tabpanel"}},[s("b-card-body",[s("b-card-text",[s("p",[e._v("Simply drag the "),s("code",[e._v(".kiko")]),e._v(" file provided by your GM or fellow player onto the indicated area on the home screen, or select it by clicking on it and browsing your files. Hasakiko's logbook will present you with the earliest scene on the log, and from there, "),s("b",[e._v("Simply swipe right, or click "),s("b-icon",{attrs:{icon:"justify"}})],1),e._v(" to open the "),s("b",[e._v("Chat Sidebar")]),e._v(". You can, from there, choose what kinds of chats you want to see, and from which scene.")])])],1)],1)],1),s("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[s("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-2",modifiers:{"accordion-2":!0}}],attrs:{block:"",variant:"secondary"}},[e._v("Creating a Log")])],1),s("b-collapse",{attrs:{id:"accordion-2",accordion:"my-accordion",role:"tabpanel"}},[s("b-card-body",[s("b-card-text",[s("p",[s("b",[e._v("Swipe Left, or press "),s("b-icon",{attrs:{icon:"gear-fill"}})],1),e._v(" to bring up the "),s("b",[e._v("Settings Sidebar")]),e._v(". On the bottom, press "),s("b",[e._v("Edit Log")]),e._v(" to bring up the Log Editing menu.")]),s("br"),s("b-list-group",[s("b-list-group-item",[s("span",[e._v("Load the "),s("b",[e._v("Actors")]),e._v(":")]),e._v(" "),s("p",[e._v("Drag or select the "),s("code",[e._v("actors.db")]),e._v(" file from your Foundry "),s("code",[e._v("/worlds/{your campaign name}/data")]),e._v(" to load the Actor Data. This represents the characters of your game, you will see them listed on the menu, and will be able to "),s("b",[e._v("assign an image")]),e._v(" to each actor, which will be shown as an avatar for their messages. "),s("code",[e._v(".jpg .png .svg .bmp")]),e._v(" images and "),s("code",[e._v(".gif .webm .mp4")]),e._v(" videos are supported as profile images.")])]),s("b-list-group-item",[s("span",[e._v("Load the "),s("b",[e._v("Scenes")]),e._v(":")]),e._v(" "),s("p",[e._v("Drag or select the "),s("code",[e._v("scenes.db")]),e._v(" file from your Foundry "),s("code",[e._v("/worlds/{your campaign name}/data")]),e._v(" to load the Scene Data. This represents the screens or maps in your game, which you will see listed on the menu.")])]),s("b-list-group-item",[s("span",[e._v("Load the "),s("b",[e._v("Users")]),e._v(":")]),e._v(" "),s("p",[e._v("Drag or select the "),s("code",[e._v("user.db")]),e._v(" file from your Foundry "),s("code",[e._v("/worlds/{your campaign name}/data")]),e._v(" to load the User Data. This contains the username of you, and your players, and allows all messages to be properly attributed to them. You can rename your players if desired, and change their selected color, which provides a slight flair to their corresponding messages. This app will not load their password information.")])]),s("b-list-group-item",[s("span",[e._v("Load the "),s("b",[e._v("Chats")]),e._v(":")]),e._v(" "),s("p",[e._v("Drag or select the "),s("code",[e._v("chat.db")]),e._v(" file from your Foundry "),s("code",[e._v("/worlds/{your campaign name}/data")]),e._v(", or the "),s("code",[e._v(".json")]),e._v(" files exported by "),s("b",[e._v("DF Chat Enhancements")]),e._v(", to load the messages from your game. You can do this repeatedly, to add messages from different files where necessary, as long as they belong to the same campaign. "),s("br"),s("br"),e._v("You will be able to edit or delete these messages individually, or remove whole groups of them, by selecting a rule to filter them by.")])]),s("b-list-group-item",[s("span",[e._v("Name your "),s("b",[e._v("Log")]),e._v(":")]),e._v(" "),s("p",[e._v("Write on the labeled textbox to set the name of the log, which will be reflected on the tab name, and be used as the name for your archive.")])]),s("b-list-group-item",[s("span",[s("b",[e._v("Save")]),e._v(" your Log:")]),e._v(" "),s("p",[e._v("Press the "),s("b",[e._v("Save Log")]),e._v(" button to start a download for "),s("code",[e._v("{Log Name}.kiko")]),e._v(", a single file which your players will be able to load to read the message logs you loaded and edited at their leisure, on this same site.")])])],1)],1)],1)],1)],1),s("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[s("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-3",modifiers:{"accordion-3":!0}}],attrs:{block:"",variant:"secondary"}},[e._v("Changelog")])],1),s("b-collapse",{attrs:{id:"accordion-3",accordion:"my-accordion",role:"tabpanel"}},[s("b-card-body",[s("b-card-text",[s("b-list-group",[s("b-list-group-item",[s("span",[e._v("Version "),s("b",[e._v("0.1")]),e._v(":")]),e._v(" "),s("p",[e._v("Initial Release.")])])],1)],1)],1)],1)],1)],1)},z=[],E={name:"HelpPanel",props:[],data:function(){return{url:""}}},T=E,N=(s("ae0f"),Object(h["a"])(T,F,z,!1,null,"a5b369fc",null)),P=N.exports,R=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:{narration:e.isNarration,ooc:e.isOOC,message:!0,emote:e.isEmote,first:e.isFirst,followup:e.isFollowup,last:e.isLast},attrs:{title:e.isFollowup&&e.language?e.language:""},on:{click:e.log,mouseover:function(t){e.hovered=!0},mouseout:function(t){e.hovered=!1}}},[e.message.whisper.length>0?s("div",{staticClass:"whisper"},[e._v(" Whispered to "),e._l(e.message.whisper,(function(t){return s("span",{key:t},[e._v(e._s(e.findUser(t).name))])}))],2):e._e(),s("header",[s("avatar",{staticClass:"avatar",attrs:{circle:!0,src:e.hasAvatar?e.actor.avatar:null,alt:e.user,play:e.hovered}}),s("span",{staticClass:"name ic",style:{"border-color":e.user.color}},[s("b",[e._v(e._s(e.message.speaker.alias)+" ")]),s("i",[e._v(e._s(e.user.name)),e.hasScene&&e.showScene?s("span",[e._v(" @ "+e._s(e.scene.name))]):e._e()])]),s("span",{staticClass:"name ooc",style:{"border-color":e.user.color}},[s("b",[e._v(e._s(e.user.name))])]),s("div",{staticClass:"header-extra"},[e.language?s("i",{staticClass:"language"},[e._v(e._s(e.language))]):e._e(),s("span",{staticClass:"time",attrs:{title:e.time.time}},[e._v(e._s(e.time.date))])])],1),s("div",{staticClass:"content"},[s("div",{directives:[{name:"sanitize",rawName:"v-sanitize",value:e.content,expression:"content"}]}),e.isFollowup||e.isNarration||e.isEmote?s("span",{staticClass:"shortTime"},[e._v(e._s(e.time.time))]):e._e(),e.edit?s("b-button",{staticClass:"edit",attrs:{pill:""},on:{click:function(t){return e.$emit("openMessage",e.message)}}},[s("b-icon",{attrs:{icon:"pencil"}})],1):e._e()],1),5==e.message.type?s("footer",[s("hr"),s("b",[e._v(e._s(e.roll.formula)+":")]),e._v(" "+e._s(e.roll.total))]):e._e()])},H=[],I=(s("5319"),s("5377"),s("99af"),s("4d90"),s("25f0"),{name:"AppMessage",data:function(){return{hovered:!1}},props:{message:Object,prev:Object,next:Object,showScene:Boolean,actors:Array,scenes:Array,users:Array,edit:Boolean},components:{Avatar:O},computed:{content:function(){return(this.flavor+this.message.content).replace(/\u00A0/g," ")},actor:function(){var e=this;return this.actors.find((function(t){return t._id==e.message.speaker.actor}))},scene:function(){var e=this;return this.scenes.find((function(t){return t._id==e.message.speaker.scene}))},user:function(){var e=this;return this.users.find((function(t){return t._id==e.message.user}))},isEmote:function(){return 3==this.message.type&&this.hasScene},isNarration:function(){return 2==this.message.type&&(null!=this.message.flags["narrator-tools"]||"Narrator"==this.message.speaker.alias)},hasScene:function(){var e;return null!=(null===(e=this.message.speaker)||void 0===e?void 0:e.scene)},isFollowup:function(){return null!=this.prev&&(this.prev.user._id==this.message.user._id&&2==this.prev.type&&this.prev.speaker.alias==this.message.speaker.alias)},isLast:function(){return null==this.next||!(this.isEmote||this.isNarration)&&!(this.next.user._id==this.message.user._id&&2==this.next.type&&this.next.speaker.alias==this.message.speaker.alias)},isFirst:function(){return!(this.isFollowup||this.isEmote)},isOOC:function(){var e;return 1==this.message.type||null==(null===(e=this.message.speaker)||void 0===e?void 0:e.alias)},time:function(){var e=this.message.timestamp;return{date:e.toLocaleDateString(),time:"".concat(e.getHours(),":").concat(e.getMinutes().toString().padStart(2,0))}},language:function(){var e,t,s=null===(e=this.message.flags)||void 0===e||null===(t=e.polyglot)||void 0===t?void 0:t.language;return null!=s&&s.charAt(0).toUpperCase()+s.slice(1)},roll:function(){var e=JSON.parse(this.message.roll);return e.formula=e.formula.replaceAll(","," + ").replaceAll("{","").replaceAll("}",""),e},flavor:function(){return void 0==this.message||null==this.message.flavor?"":this.message.flavor},hasAvatar:function(){return null!=this.message.speaker&&null!=this.actor}},methods:{log:function(e){console.log(e)},findUser:function(e){return this.users.find((function(t){return t._id==e}))},msgType:function(e){switch(e){case 0:return"Other";case 1:return"OOC";case 2:return"IC";case 3:return"Emote";case 4:return"Whisper";case 5:return"Roll";default:return"Unknown ".concat(e)}}}}),U=I,B=(s("4ee3"),s("c71a"),Object(h["a"])(U,R,H,!1,null,"cbe37062",null)),J=B.exports,G={name:"App",components:{SettingsPanel:f,CreatePanel:j,HelpPanel:P,LoadPanel:y,AppMessage:J},watch:{title:function(e){document.title=e},messages:function(){console.log("re-sorting Scenes"),this.scenes.forEach((function(e){return e.count=0}));var e,t=Object(i["a"])(this.messages);try{for(t.s();!(e=t.n()).done;){var s=e.value;if(this.scenes.length){var a=this.getScene(s.speaker.scene);void 0!=a&&(a.count++,s.timestamp<a.earliest&&(a.earliest=s.timestamp))}-1==this.scene&&null!=s.speaker.scene&&(this.scene=s.speaker.scene)}}catch(n){t.e(n)}finally{t.f()}this.scenes=this.scenes.sort((function(e,t){return e.earliest-t.earliest}))}},data:function(){return{messages:new Set,chatTypes:[{value:0,text:"Other"},{value:1,text:"OOC"},{value:2,text:"IC"},{value:3,text:"Emote"},{value:4,text:"Whisper"},{value:5,text:"Roll"}],users:[],actors:[],scenes:[],settings:{splitScenes:!0,enableEdit:!0,fontS:16,name:""},selectedMessage:null,scene:-1,max:25,tab:0,refreshMessages:0,scenebarShown:!1,settingsbarShown:!1}},computed:{chatSelect:function(){return this.settings.splitScenes&&this.tab<2?this.messagesByType[this.tab][this.scene]:this.messagesByType[this.tab]},title:function(){var e="Hasakiko's Logbook",t="";return this.settings.name.length&&(t=this.settings.name,this.settings.splitScenes&&-1!=this.scene&&(t=this.getScene(this.scene).name+" - "+t)),t+" / "+e},fontSize:function(){return this.settings.fontS+"px"},messagesByType:function(){var e=[[],[],[]],t=this.refreshMessages,s=t++;if(this.settings.splitScenes)for(e.push([]),s=0;s<this.scenes.length;s++)e[0][this.scenes[s]._id]=[],e[1][this.scenes[s]._id]=[];var a,n=Object(i["a"])(this.messages);try{for(n.s();!(a=n.n()).done;){var r,o=a.value;switch(++s,o.type){case 0:r=0;break;case 1:r=2;break;case 2:r=0;break;case 3:r=0;break;case 5:r=1;break;default:r=2}this.settings.splitScenes&&r<2&&null==o.speaker.scene&&(r=3),this.settings.splitScenes&&r<2?e[r][o.speaker.scene].push(o):e[r].push(o)}}catch(l){n.e(l)}finally{n.f()}return e}},methods:{getScene:function(e){return this.scenes.find((function(t){return t._id==e}))},setScene:function(e){this.settings.splitScenes=0!=e,this.scene=e,this.max=25},handleChat:function(e){var t=Object(o["a"])(this.messages),s=0,a=e.length;while(s<a){if(!t.some((function(t){return t._id==e[s]._id}))){var n,r=e[s];r.timestamp=new Date(r.timestamp),this.users.some((function(e){return r.user==e._id}))||this.users.push({name:"User ".concat(this.users.length+1),_id:r.user,color:"#000000"}),null==(null===(n=r.speaker)||void 0===n?void 0:n.scene)||this.scenes.some((function(e){return r.speaker.scene==e._id}))||this.scenes.push({name:"Scene ".concat(this.scenes.length+1),_id:r.speaker.scene,count:1,earliest:new Date(Date.now())}),t.push(r)}++s}this.messages=new Set(t.sort((function(e,t){return e.timestamp-t.timestamp})))},handleUsers:function(e){this.users=e.map((function(e){return delete e.password,delete e.passwordSalt,delete e.permissions,delete e.hotbar,e}))},handleActors:function(e){var t=e.map((function(e){return delete e.token,delete e.data,delete e.items,e})),s=[],a=0,n=t.length;while(a<n)s.some((function(e){return e._id==t[a]._id}))||s.push(t[a]),++a;this.actors=s.sort((function(e,t){return e.name.localeCompare(t.name)}))},handleScenes:function(e){var t=e.map((function(e){return delete e.tokens,e["count"]=0,e["earliest"]=new Date(Date.now()),e})),s=[],a=0,n=t.length;while(a<n)s.some((function(e){return e._id==t[a]._id}))||s.push(t[a]),++a;this.scenes=s},setMessageToEdit:function(e){this.selectedMessage=JSON.parse(JSON.stringify(e)),this.selectedMessage.timestamp=new Date(this.selectedMessage.timestamp),this.$bvModal.show("editModal")},updateMessage:function(){var e=this;this.messages=new Set(Object(o["a"])(this.messages).map((function(t){return t._id==e.selectedMessage._id?e.selectedMessage:t})))},deleteMessage:function(){var e,t=this;this.$bvModal.hide("editModal"),null!=(null===(e=this.selectedMessage.speaker)||void 0===e?void 0:e.scene)&&this.getScene(this.selectedMessage.speaker.scene).count--,this.messages=new Set(Object(o["a"])(this.messages).filter((function(e){return e._id!=t.selectedMessage._id})))},handleActorImageGet:function(e){console.log("HandleActorImageGet:",e);for(var t=0;t<this.actors.length;t++)this.setActorImageFromUrl(this.actors[t],e)},handleArchive:function(e){console.log(e),this.settings=e.settings,this.users=e.users,this.actors=e.actors,this.scenes=e.scenes,this.messages=new Set(e.messages.map((function(e){return e.timestamp=new Date(e.timestamp),e}))),this.scene=this.scenes[0]._id},updateScroll:function(e){e.target.scrollHeight-(e.target.clientHeight+e.target.scrollTop)<100&&this.chatSelect.length>this.max&&(console.log("Expanding from",this.max),this.max+=25)},swipeHandler:function(e){console.log(e),"left"==e?this.scenebarShown?this.scenebarShown=!1:this.settingsbarShown=!0:"right"==e&&(this.settingsbarShown?this.settingsbarShown=!1:this.scenebarShown=!0)},applyFilter:function(e){this.messages=new Set(Object(o["a"])(this.messages).filter(e))}}},W=G,Y=(s("034f"),Object(h["a"])(W,n,r,!1,null,null,null)),q=Y.exports,V=s("f88f"),K=s.n(V),Q=s("0086"),X=s.n(Q),Z=s("5f5b"),ee=s("b1e0"),te=(s("fce9"),K.a.defaults);te.allowedTags.push("img"),te.allowedAttributes["*"]=["class"],a["default"].use(K.a,te),a["default"].use(X.a),a["default"].use(Z["a"]),a["default"].use(ee["a"]),a["default"].config.productionTip=!1,document.title="Hasakiko's Logbook",new a["default"]({render:function(e){return e(q)}}).$mount("#app")},6:function(e,t){},6026:function(e,t,s){},"85ec":function(e,t,s){},"94be":function(e,t,s){},a40a:function(e,t,s){},a46a:function(e,t,s){},ae0f:function(e,t,s){"use strict";s("fec9")},c71a:function(e,t,s){"use strict";s("6026")},da0b:function(e,t,s){"use strict";s("a40a")},fce9:function(e,t,s){},fec9:function(e,t,s){}});
//# sourceMappingURL=app.01ec3a11.js.map