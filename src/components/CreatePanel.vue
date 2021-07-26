<template>
	<div>
		<b-form-file
			v-model="a"
			placeholder="Load your world's actors.db file..."
			drop-placeholder="Drop file here..."
			accept=".db"
		></b-form-file>
		<b-form-file
			v-model="s"
			placeholder="Load your world's scenes.db file..."
			drop-placeholder="Drop file here..."
			accept=".db"
			:disabled="a==null"
		></b-form-file>
		<b-form-file
			v-model="u"
			placeholder="Load your world's user.db file..."
			drop-placeholder="Drop file here..."
			:disabled="s==null"
			accept=".db"
		></b-form-file>
		<b-form-file
			v-model="c"
			placeholder="Load your world's chat files..."
			drop-placeholder="Drop file here..."
			accept=".json, .db"
		></b-form-file>
		<hr>
		<b-container>
			<b-row>
				<b-col sm="4"  v-if="actors.length>0">
					<h3>Actors ({{actors.length}})</h3>
					<div class="scroll">
						<div class="actor-prev" v-for="actor in actors" :key="actor._id" :title="actor._id">
							<b-button size="sm" v-if="actor.avatar==null" @click="setActor=actor;$bvModal.show('getImageModal')">
								Set Avatar
							</b-button>
							<avatar class="avatar" @click="setActor=actor;$bvModal.show('getImageModal')" :src="actor.avatar"/>{{actor.name}}
						</div>
					</div>
				</b-col>
				<b-col sm="3" v-if="scenes.length>0">
					<h3>Scenes ({{scenes.length}})</h3>
					<div class="scroll">
						<div v-for="(scene,i) in scenes" :key="i+'/'+scene._id" :title="scene._id">{{scene.name}}</div>
					</div>
				</b-col>
				<b-col sm="3" v-if="users.length>0">
					<h3>Users ({{users.length}})</h3>
					<div class="scroll">
						<div v-for="user in users" :key="user._id" :title="user._id" >
							<input :style="{color:user.color}" type="" title="Rename User?" v-model="user.name" name="">
						</div>
					</div>
				</b-col>
			</b-row>
		</b-container>
		<hr>
		<b-container fluid>
			<b-row>
				<b-col sm="3">
					<label>Log Name:</label>
				</b-col>
				<b-col sm="3">
					<b-form-input type="text" @change="e=>$emit('nameChange',e)"/>
				</b-col>
				<b-col>
					<b-button @click="downloadLog">Save Log</b-button>
				</b-col>
			</b-row>
		</b-container>

		<b-modal size="xl" id="getImageModal" :title="'Set Avatar for '+setActor.name">
			<avatar style="width: 5em; height: 5em;" :src="setActor.avatar"></avatar>
			<b-form-file
			v-model="i"
			placeholder="Load an image to set as avatar..."
			drop-placeholder="Drop file here..."
			accept=".jpg,.png,.svg,.bmp,.gif,.webm,.mp4"
		></b-form-file>
			<template #modal-footer>
			<b-row>
			<b-col>
			<b-button
					variant="danger"
					size="sm"
					class="float-right"
					@click="deleteImage()"
				>
					Delete?
				</b-button>
				</b-col>
				<b-col>
				<b-button
					variant="primary"
					size="sm"
					class="float-right"
					@click="$bvModal.hide('getImageModal')"
				>
					Close
				</b-button>
				</b-col>
			</b-row>
			</template>
		</b-modal>
	</div>
	
</template>

<script>
	import Avatar from './Avatar.vue'
	export default{
		name:"CreatePanel",
		components:{Avatar},
		props:["users","actors","scenes","settings","messages"],
		data:()=>({
				reader: new FileReader(),
				c:null,	u:null,	a:null,	s:null,	i:null,
				name:"",
				setActor:{ name:null,avatar:''},
				url:""}),
		watch:{
			c:function (file) {
				console.log("Inputted chat. Reading...");
				this.reader.onload = this.passDecodedChat;
				this.reader.readAsText(file)
			},
			a:function (file) {
				this.reader.onload = this.passDecodedActors;
				this.reader.readAsText(file)
			},
			u:function (file) {
				this.reader.onload = this.passDecodedUsers;
				this.reader.readAsText(file)
			},
			s:function (file) {
				this.reader.onload = this.passDecodedScenes;
				this.reader.readAsText(file)
			},i:function (file) {
				this.reader.onload = this.setAvatar;
				this.reader.readAsDataURL(file)
			}
			,fontSize:function(v){
				this.$emit("fontSizeChange",v)
			},splitScenes:function(v){
				this.$emit("splitScenesChange",v)
			}
		},
		methods:{
			downloadLog:function(){ 
				var j = JSON.stringify({
					version:"0.1",
					settings:this.settings,
					users:this.users,
					actors:this.actors,
					scenes:this.scenes,
					messages:[...this.messages]
				})
				console.log("Size of Final JSON ",j.length/1024/1024,"MB");
				var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(j);
				var downloadAnchorNode = document.createElement('a');
				downloadAnchorNode.setAttribute("href",     dataStr);
				downloadAnchorNode.setAttribute("download", this.settings.name + ".kiko");
				document.body.appendChild(downloadAnchorNode); // required for firefox
				downloadAnchorNode.click();
				downloadAnchorNode.remove();

			},
			passDecodedChat:function(fileReadEvent){
				console.log("Read chat "+this.c.name+". Decoding...");
				
				var j= fileReadEvent.target.result;
				if(this.c.name.split(".")[1]=="db"){
					j=this.correctDB(j)
				}
				this.$emit('chat-read',JSON.parse(j))
			},
			passDecodedUsers:function(fileReadEvent){
				this.$emit('users-read',JSON.parse(this.correctDB(fileReadEvent.target.result)))
			},
			passDecodedActors:function(fileReadEvent){
				this.$emit('actors-read',JSON.parse(this.correctDB(fileReadEvent.target.result)))
			},
			passDecodedScenes:function(fileReadEvent){
				var scenes=JSON.parse(this.correctDB(fileReadEvent.target.result))
				this.$emit('scenes-read',scenes)
			},correctDB:function(db){
				return"["+db.replaceAll("\n",",").slice(0,-1)+"]"
			},setAvatar:function(fileReadEvent){
				this.$set(this.setActor,"avatar",fileReadEvent.target.result);
			}
			,log: function(x) {console.log(x)}
		}
	}
</script>

<style scoped>
	.scroll{
		overflow-y: scroll;
		overflow-x: hidden;
		max-height: 20em;
	}
	.actor-prev{
		width: 100%;
		display: flex;
		justify-content: flex-start;
		padding: 0.2em 0.5em;
		white-space: nowrap;
	}
	.actor-prev .avatar{
		width: 2em; 
		height: 2em;
		margin-right: 1em;
		border: 1px transparent;
		border-radius: 100%;
	}
</style>