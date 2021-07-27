<template>
<div id="app" v-touch:swipe="swipeHandler">
	<b-navbar type="light" variant="primary" shadow>
		<b-button aria-controls="scenebar" @click="scenebarShown=!scenebarShown" class="mb-0 ml-0 mr-1" style="background: transparent; border: none;"><b-icon icon="justify"/></b-button>
		<b-navbar-brand tag="b" class="mb-0 text-light">Hasakiko's Logbook</b-navbar-brand>
		<b-navbar-nav class="ml-auto">
			<b-button @click="settingsbarShown=!settingsbarShown" right  style="background: transparent; border: none"><b-icon icon="gear"/></b-button>
		</b-navbar-nav>
	</b-navbar>
	
	<b-sidebar id="scenebar" title="Scenes" v-model="scenebarShown" :aria-expanded="!scenebarShown" shadow backdrop>
		<template #header>
			<div class="ml-auto mr-auto align-items-center">
			<b-button class="mt-5" :variant="scene==0?'light':''" @click="setScene(0)">Show All ({{messages.size}})</b-button>	
				<b-button-group class="mt-1 ml-auto" >
					<b-button :disabled="scene==0" :variant="tab==0?'outline-dark':''" @click="tab=0">IC</b-button>
					<b-button :disabled="scene==0" :variant="tab==1?'outline-dark':''" @click="tab=1">Rolls</b-button>
					<b-button :disabled="scene==0" :variant="tab==2?'outline-dark':''" @click="tab=2">OOC</b-button>
					<b-button :disabled="scene==0" :variant="tab==3?'outline-dark':''" @click="tab=3">Misc</b-button>
				</b-button-group>
			</div>
		</template>				
		<b-button-group size="sm" class="mt-2 mb-2 mr-4 ml-0" vertical>
			<b-button style="text-align: left; width:100%" 	v-for="s in (scenes.filter(x => x.count > 0))" 
				:variant="scene==s._id?'':'light'" 
			:key="'SceneSelect/'+s._id" @click="setScene(s._id)"># 
			{{s.name}} ({{s.count}})
			</b-button>					
		</b-button-group>
	</b-sidebar>

	<b-sidebar id="settingsbar" title="Settings" v-model="settingsbarShown" :aria-expanded="!settingsbarShown" shadow right backdrop>
		<SettingsPanel :fontSize="settings.fontS" @fontSizeChange="v => settings.fontS=v" :edit="settings.enableEdit" @editChange="v => settings.enableEdit=v"/>

		<template #footer>
			<div class=" align-items-center">
				<b-button class="mb-2 mt-2" @click="$bvModal.show('createModal')">Create New Log</b-button>
			</div>
		</template>
	</b-sidebar>

	<div v-if="scene!=-1" class="message-container" :style="{'font-size':fontSize}" @scroll="updateScroll">
		<AppMessage  v-for="(message, index) in chatSelect.slice(0,max)" 
			:prev="(index)? chatSelect[index-1]:null" :message="message" 
			:users="users" :actors="actors" :scenes="scenes"
			:showScene="!settings.splitScenes"  :edit="settings.enableEdit" @openMessage="setMessageToEdit" 
			:key="message._id"
		/>
	</div>
	<LoadPanel v-else @archiveRead="handleArchive" />

		
	<b-modal size="xl" title="Log Setup" id="createModal">
		<CreatePanel 
			:users="users" :actors="actors" :scenes="scenes" :settings="settings" :messages="messages"
			@chat-read="handleChat" @users-read="handleUsers" @actors-read="handleActors" @scenes-read="handleScenes"
			@actorImageGet="handleActorImageGet" @nameChange="v=>settings.name=v"
			/>
	</b-modal>
	<b-modal size="xl" id="editModal" title="Edit Message" hide-header-close>
		<div v-if="selectedMessage!=null">
			<b-form style="display: flex; flex-wrap: wrap; justify-content:space-between;">
				<b-form-group label="Alias" label-for="alias-input" style="width: 10em;">
					<b-form-input id="alias-input" v-if="selectedMessage.speaker!=null" type="text" v-model="selectedMessage.speaker.alias" 
				/>
				</b-form-group>
				<b-form-group label="Type" label-for="type-select">
					<b-form-select id="type-select" select type="number" :options="chatTypes" v-model="selectedMessage.type" 
				/>
				</b-form-group>
				<b-form-group label="User" label-for="er-select">
					<b-form-select id="user-select" select :options="users.map(x=> ({value:x._id,text:x.name}))" v-model="selectedMessage.user" 
				/>
				</b-form-group>
				<b-form-group label="Actor" label-for="actor-select">
					<b-form-select id="actor-select" select :options="actors.map(x=> ({value:x._id,text:x.name})).concat({value:null,text:'None'})" v-model="selectedMessage.speaker.actor" 
				/>
				</b-form-group>
				<b-form-group label="Scene" label-for="scene-select">
					<b-form-select id="scene-select" select :options="scenes.map(x=> ({value:x._id,text:x.name})).concat({value:null,text:'None'})" v-model="selectedMessage.speaker.scene" 
				/>
				</b-form-group>
			<b-form-textarea
				class="mt-2"
				id="textarea"
				v-model="selectedMessage.content"
				
				placeholder=""
				rows="3"
			></b-form-textarea>
		</b-form>
		<hr>
		<AppMessage :prev="null" :message="selectedMessage" :users="users" :actors="actors" :scenes="scenes" :showScene="true"  :edit="false"/>
		</div>
		<template #modal-footer>
				<b-button variant="danger" size="sm" class="mr-auto" @click="deleteMessage()" >
					Delete?
				</b-button>
				<b-button variant="success" size="sm" class="float-right" @click="updateMessage();$bvModal.hide('editModal')" >
				Save
				</b-button>
				<b-button variant="primary" size="sm" class="float-right" @click="$bvModal.hide('editModal');selectedMessage=null" >
				Close
				</b-button>
		</template>
	</b-modal>
</div>
</template>

<script>
import SettingsPanel from './components/SettingsPanel.vue'
import LoadPanel from './components/LoadPanel.vue'
import CreatePanel from './components/CreatePanel.vue'
import AppMessage from './components/AppMessage.vue'
export default {
	name: 'App',
	components: {
	SettingsPanel,
	CreatePanel,
	LoadPanel,
	AppMessage
	},watch:{
	title:function(s){
		document.title=s 
	}
	},data:()=>{
	return{
		messages:new Set(),
		chatTypes:[
					{value:0,text:'Other'},
					{value:1,text:'OOC'},
					{value:2,text:'IC'},
					{value:3,text:'Emote'},
					{value:4,text:'Whisper'},
					{value:5,text:'Roll'}
				],
		users:[] ,
		actors:[] ,
		scenes:[] ,
		settings:{
			splitScenes:true,
			enableEdit:true,
			fontS:16,
			name:""		
		},
		selectedMessage:null,
		scene:-1,
		max:25,
		tab:0,
		refreshMessages:0,
		scenebarShown:false,
		settingsbarShown:false
	}
	},computed:{
	chatSelect:function(){ 
		if(this.settings.splitScenes && this.tab<2){
			return this.messagesByType[this.tab][this.scene]
		}else{
			return this.messagesByType[this.tab]	
		} 
	},
	title: function(){
		var n="Hasakiko's Logbook"
		var t ="";
		if(this.settings.name.length){
			t = this.settings.name
			if(this.settings.splitScenes && this.scene!=-1){
				t = this.getScene(this.scene).name + " - " + t;
			}
		}
		return t+" / "+n;
	},
	fontSize:function(){ return this.settings.fontS+"px"},
	messagesByType: function(){
		let sectioned= [[],[],[]]
		let aux=this.refreshMessages;
		var i=aux++;
		if(this.settings.splitScenes){
			sectioned.push([]);
		for (i=0; i<this.scenes.length; i++) {
			sectioned[0][this.scenes[i]._id]=[]
			sectioned[1][this.scenes[i]._id]=[]
			}
		}
		for (var m of this.messages) {
			++i; 
			var t;
			switch(m.type){
				case 0:t = 0; break;  // System Message
				case 1:t = 2; break;  // OOC Message
				case 2:t = 0; break;  // IC Message
				case 3:t = 0; break;  // Emote Message
				case 5:t = 1; break;  // Roll Message
				default: t=2;
			}
			if(this.settings.splitScenes && (t<2) && (m.speaker.scene==null))t= 3;
			if(this.settings.splitScenes&&(t<2)){
				sectioned[t][m.speaker.scene].push(m)
			}else{
				sectioned[t].push(m)
			}
		}
		return sectioned;
	}
	}
	,methods:{
	getScene:function(m){return this.scenes.find(s=>s._id==m)},
	setScene:function(s){
		this.settings.splitScenes=(s!=0)
		this.scene=s;this.max=25
	},
	handleChat: function (file){
		console.log("Decoded chat. Correcting...");
		for (var i=0; i<file.length; i++) {     
		file[i].timestamp=new Date(file[i].timestamp)
			if(!this.users.some(u=>(file[i].user)==u._id)){   //Create Placeholder Users
				this.users.push({name:`User ${this.users.length+1}`, _id:file[i].user,color:"#000000"})
			}
			if(file[i].speaker?.scene!=null &&  !this.scenes.some(s=>(file[i].speaker.scene)==s._id)){ 
				this.scenes.push({name:`Scene ${this.scenes.length+1}`,
				_id:file[i].speaker.scene,
				count:1,
				earliest:Date.now()});
			}
				if(this.scenes.length){
				var s = this.getScene(file[i].speaker.scene);
					if(s!=undefined){
						s.count++;
						if(file[i].timestamp<s.earliest) s.earliest=file[i].timestamp
					}
				}
		}
		console.log("Corrected chat. Setting...");
		file.push(...this.messages)
		var ret= file.sort((a,b) => a.timestamp-b.timestamp) //join with pre-existing array.
		ret=ret.filter(function(item, index) {        //filter duplicates
			return !index || item._id!=ret[index-1]._id;
		})

		for (i=0; i<ret.length && this.scene ==-1; i++) {
			if(ret[i].speaker.scene!=null) this.scene=ret[i].speaker.scene;
		}
		this.messages=new Set(ret);
	},
	handleUsers: function (file){
		this.users=file.map(u=>{
			delete u.password;
			delete u.passwordSalt;
			delete u.permissions;
			delete u.hotbar;
			return u
		});
	},
	handleActors: function (file){
		this.actors=file.map(a=>{
			delete a.token;
			delete a.data;
			delete a.items;
			return a;
		})
	},
	handleScenes: function (file){
		var ret = file.map(s=>{
			delete s.tokens;
			s["count"]=0;
			s["earliest"]=Date.now();
			return s

		})
		var i=0; var len=this.messages.length;
		while(i<len){
			var m = this.messages[i]
			if(m.speaker?.scene!=null) {
				var s=ret.find(s=>s._id==m.speaker.scene);
				if(s!=undefined){
					if(s.count==null) s["count"]=1; else s.count++;
				}
			}
		}
		this.scenes=ret;
	},setMessageToEdit: function(message){
		this.selectedMessage=JSON.parse(JSON.stringify(message));
		this.selectedMessage.timestamp=new Date(this.selectedMessage.timestamp);
		this.$bvModal.show('editModal')  
	},
	updateMessage:function(){	
		this.messages= new Set( [...this.messages].map(m=>{
			if(m._id==this.selectedMessage._id){
				if(m.speaker.scene!=this.selectedMessage.speaker?.scene){
					var from = this.getScene(m.speaker?.scene);
					var to = this.getScene(this.selectedMessage.speaker?.scene);
					(from.count-=1);
					(to.count+=1);
				}
			return this.selectedMessage;
			}else{
				return m;
			}
		}))
	},deleteMessage:function(){
		this.$bvModal.hide('editModal')
		if(this.selectedMessage.speaker?.scene!=null) {
			this.getScene(this.selectedMessage.speaker.scene).count--;
		}
		this.messages= new Set( [...this.messages].filter(m=>m._id!=this.selectedMessage._id))
	}, handleActorImageGet(url){
		console.log("HandleActorImageGet:",url)
		for(var i=0;i<this.actors.length;i++) {
		this.setActorImageFromUrl(this.actors[i],url);
		}

	},handleArchive(archive){
		console.log(archive)
		this.settings=archive.settings;
		this.users=archive.users;
		this.actors=archive.actors;
		this.scenes=archive.scenes.map(s=>{s.earliest=new Date(s.earliest);return s}).sort((x,y) => x.earliest-y.earliest);
		this.messages=new Set(archive.messages.map(m=>{m.timestamp=new Date(m.timestamp);return m}));
		this.scene=this.scenes.[0]._id;
	},updateScroll(event){
		if(event.target.scrollHeight-(event.target.clientHeight+event.target.scrollTop)<100){
			if(this.chatSelect.length>this.max){
			console.log("Expanding from",this.max)
			this.max+=25;}
		}
	}, swipeHandler(event){
		console.log(event)
		if(event=="left"){
			if(this.scenebarShown)	this.scenebarShown=false;
			else this.settingsbarShown=true;
		}else if(event=="right"){
			if(this.settingsbarShown)	this.settingsbarShown=false;
			else this.scenebarShown=true;
		}
	}

	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	width: 100%;
	box-sizing: content-box;
	height: 100vh;
}
.navbar{ 
	box-sizing: content-box; 
	height: 2em; 
	box-shadow: 0 0px 3px 0px black;
	z-index: 1040;
}
.message-container{
	max-height: calc(100vh - 3.5em);
	overflow-y: scroll;
}
</style>
