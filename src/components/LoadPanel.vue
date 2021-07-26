<template>
	<div>
		<b-container fluid class="pt-5 px-5">
			<b-row>
				<b-col>
					<b-form-file
						v-model="k"
						placeholder="Load your .kiko file!"
						drop-placeholder="Drop file here..."
						accept=.kiko
						:disabled="k!=null"
					></b-form-file>
				</b-col>
			</b-row>
		</b-container>
	</div>
	
</template>

<script>
	export default{
		name:"LoadPanel",
		props:[],
		data:()=>({
				reader: new FileReader(),
				k:null,
				setActor:{ name:null,avatar:''},
				url:""}),
		watch:{
			k:function (file) {
				console.log("Inputted Log. Reading...");
				this.reader.onload = this.passDecodedLog;
				this.reader.readAsText(file)
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