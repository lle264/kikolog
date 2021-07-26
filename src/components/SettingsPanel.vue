<template>
	<div>
		<b-container fluid>
			<b-row>
				<b-col sm="3">
					<label>Text Size:</label>
				</b-col>
				<b-col sm="2">
					<b-form-input type="number" v-model="fontSize"/>
				</b-col>
			</b-row>		
		</b-container>
	</div>
	
</template>

<script>
	export default{
		name:"SettingsPanel",
		props:["splitScenes","fontSize"],
		data:()=>({
				url:""}),
		watch:{
			fontSize:function(v){
				this.$emit("fontSizeChange",v)
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