<template>
	<div>
		<b-form class="pt-2 px-1">
			<b-form-group label="Text Size" label-cols="6" content-cols="3" class="mr-0" label-for="fontSize">
				<b-form-input id="fontSize" type="number" v-model="fontSize" 
			/>
			</b-form-group>
			<b-form-group label="Edit Messages" label-cols="6" content-cols="3" class="mr-0" label-for="edit">
				<b-form-checkbox id="edit" v-model="edit" 
			/>
			</b-form-group>
		</b-form>
	</div>
	
</template>

<script>
	export default{
		name:"SettingsPanel",
		props:["edit","fontSize"],
		data:()=>({
				url:""}),
		watch:{
			fontSize:function(v){
				this.$emit("fontSizeChange",v)
			},
			edit:function(v){
				this.$emit("editChange",v)
			}
		},
		methods:{
			passDecodedLog:function(fileReadEvent){
				this.$emit('archiveRead',JSON.parse(fileReadEvent.target.result))
			}
		}
	}
</script>

<style scoped>
	
</style>