<template>
	<div :class="{narration:isNarration, ooc:isOOC, message:true, emote:isEmote, followup:isFollowup}"
	:title="(isFollowup && language)?language:''"
	@click="log" @mouseover="hovered=true" @mouseout="hovered=false">
		<div class="whisper" v-if="message.whisper.length>0">
			Whispered to <span v-for="user in message.whisper" :key="user">{{findUser(user).name}}</span>
		</div>
		<header>
			<avatar :circle="true" class="avatar" :src="hasAvatar?actor.avatar:null" :alt="user" :play="hovered"/>
			<span :style="{'border-color':user.color}" class="name ic">
				<b>{{message.speaker.alias}} </b> 
				<i>{{user.name}}<span v-if="hasScene && showScene"> @ {{scene.name}}</span></i>
			</span>
			<span :style="{'border-color':user.color}" class="name ooc">
				<b>{{user.name}}</b>
			</span> 	
			<div class="header-extra">
				<i class="language" v-if="language">{{language}}</i>
				<span class="time" :title="time.time">{{time.date}}</span>
			</div>
		</header>
		<div class="content">
			<div v-sanitize="content"/> 
			<span v-if="isFollowup || isNarration || isEmote" class="shortTime">{{time.time}}</span>
			<b-button pill class="edit" @click="$emit('openMessage',message)"> <b-icon icon="pencil"></b-icon></b-button>
		</div>
		<footer v-if="message.type==5"> <hr><b>{{roll.formula}}:</b> {{roll.total}}</footer>
	</div>
</template>

<script>
	import Avatar from './Avatar.vue'

export default{
	name:"AppMessage",
	data:()=>({
			hovered:false
		}),
	props:{
		message:Object,
		prev:Object,
		showScene:Boolean,
		actors:Array,
		scenes:Array,
		users:Array
	},components:{Avatar},
	computed:{
		content:function(){return (this.flavor + this.message.content).replace(/\u00A0/g,' ')},
		actor:function(){return this.actors.find(a=>a._id==this.message.speaker.actor)},
		scene:function(){return this.scenes.find(s=>s._id==this.message.speaker.scene)},
		user:function(){return this.users.find(u=>u._id==this.message.user)},
		isEmote:function(){return this.message.type==3 && this.hasScene},
		isNarration:function() {return (this.message.type==2) && ((this.message.flags['narrator-tools']!=null) || (this.message.speaker.alias=="Narrator"))},
		hasScene:function() {return this.message.speaker?.scene!=null},
		isFollowup: function(){
			if (this.prev==null) return false;
			return (this.prev.user._id == this.message.user._id) 
				&& (this.prev.type == 2)  
				&& (this.prev.speaker.alias == this.message.speaker.alias)  
				
		},
		isOOC: function(){
			return ((this.message.type==1) || (this.message.speaker?.alias== null))
		},
		time: function(){
			var t=this.message.timestamp;
			return {
				date:t.toLocaleDateString(),
				time:`${t.getHours()}:${t.getMinutes().toString().padStart(2,0)}`}
		},
		language: function(){
			var l = this.message.flags?.polyglot?.language;
			return (l==null)?false:l.charAt(0).toUpperCase()+l.slice(1)
		},
		roll: function(){
			var r=JSON.parse(this.message.roll);
			r.formula = r.formula.replaceAll(","," + ").replaceAll("{","").replaceAll("}","");
			return r;
		},
		flavor: function(){
			if(this.message==undefined) return "";
			return (this.message.flavor==null)?"":this.message.flavor
		},
		hasAvatar:function(){
			return this.message.speaker!=null && this.actor!=null
		}
	},
	methods:{
		log: function(event){
			console.log(event)
		},
		findUser:function(id){return this.users.find(u=>u._id==id)},
		msgType: function(type){
			switch(type){
				case 0: return "Other"
				case 1: return "OOC"
				case 2: return "IC"
				case 3: return "Emote"
				case 4: return "Whisper"
				case 5: return "Roll"
				default: return `Unknown ${type}`
			}
		}
	}
}

</script>

<style>
	.content img{
		max-width: 100%;
	}
	.content .tag,.content .damage-tag{
		display: inline-block;
		border: 2px solid;
		margin: 0 0.2em;
		padding: 0 0.2em;
	}

</style>

<style scoped>

	.message{
		width: 99%;
		padding-right: 8px;
		padding:4px 1em;
		position: relative;
	}
	.avatar{
		position: absolute;
		left: 4px;
		top: 4px;
		width: 2.5em;
		height: 2.5em;
	}
	.message:hover{
		background-color: rgba(0, 0, 0, 0.03);
	}
	.message .ooc{ display: none; }
	.message.ooc .ic{display: none;}
	.message.ooc .ooc{display: inherit;}	
	header{
		display: flex;
		align-items: center;
		min-height: 2.5em;
		margin-bottom: 8px;
	}
	header{ padding-left: 2.5em;}
	footer{
		text-align: left;
		padding-left: 2.5em; 
	}
	.name b{ text-align: left; border-bottom: 2px solid; border-color: inherit;}
	.name i{ 
		font-size: 0.8em; 
		max-width: 0; 
		white-space:nowrap; 
		display: inline-block; 
		overflow: hidden;
	}
	.message:hover .name i{ max-width: 100%;}

	.emote header,.narration header, .narration footer, .followup header{ display: none; }


	.narration .content{
		font-weight: bold;
			text-align: center; 
			padding-right: 25%;
		}

	@media(max-width: 575.98px){
	.narration .content {
			padding: 0, 4em ;
		}
	}
	
	.content{ 
		position: relative;
		padding-left: 3em; 
		padding-right: 1.5em; 
		text-align: left; 
		justify-content: space-around;
	}
	
	.whisper{ font-size: 0.8em; position: absolute; top: 0; left: 6em; text-align: left;}
	
	.emote .content{font-style: italic;}
	.header-extra{
		margin-left: auto;
	}
	.language{
		margin-right: 1em;
	}
	.time,.shortTime,.edit,.language{ 
		font-size: 0.8em; 	}
	
	.shortTime,.edit{
		padding-top: 0.5em;
		display: flex; 
		align-items: center; 
		visibility: hidden; 
		position: absolute; 
		font-weight: 100!important;
	}
	.shortTime{left: 4px; top: 0; height: 1rem;}
	.edit{right: 4px; top: 0; padding: 1px; background-color: transparent; border: none; color: inherit;}
	.edit:hover{background-color: transparent; color: green;}
	
	.message:hover .shortTime, .message:hover .edit  {visibility:visible ;}
</style>