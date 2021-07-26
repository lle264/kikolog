<template>
	<div :class="{'circle':circle}">
	<img v-if="type=='image'" :src="src">
	<video ref="vid" v-else-if="type=='video'" :autoplay="play" loop="true" >
		<source :src="src" :type="type+'/'+format">	
	</video>
	<img v-else-if="alt!=undefined" :src="'https://ui-avatars.com/api/?background='+alt.color.slice(1)+'&color=fff&length=1&name='+alt.name">
	</div>
</template>
<script>
	export default{
		name:"avatar",
		props:{
			src:null,
			play:{
				type:Boolean,
				default:true
			},
			circle:{
				type:Boolean,
				default:false,
				required:false
			},
			alt:{
				type:Object,
				required:false
			}
		},
		watch:{
			play:function(play){
				if(this.type!='video'){
					return;
				}
				if(play){
					this.$refs.vid.play()
				}else{
					this.$refs.vid.pause()

				}

			}
		},
		computed:{
			type:function(src){
				return (src.src!=undefined)?src.src.slice(5).split("/")[0]:'';
			},
			format:function(src){
				return (src.src!=undefined)?src.src.slice(5).split("]")[0].split("/")[1]:'';
			}
		}
	}
</script>
<style scoped="">
	img{ object-fit: cover; }
	video,img{width: 100%; height: 100%;}
	.circle video,.circle img{
		border-radius: 100%;
	}

</style>