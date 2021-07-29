<template>
	<div class="accordion" role="tablist">
		<h1>Hasakiko's Logbook</h1>
		<p>A simple online reader for your Foundry VTT chatlogs.</p>


	<b-card no-body class="mb-1">
		<b-card-header header-tag="header" class="p-1" role="tab">
		<b-button block v-b-toggle.accordion-1 variant="secondary">Reading a Log</b-button>
		</b-card-header>
		<b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
		<b-card-body>
			<b-card-text>
			<p>Simply drag the <code>.kiko</code> file provided by your GM or fellow player onto the indicated area on the home screen, or select it by clicking on it and browsing your files. Hasakiko's logbook will present you with the earliest scene on the log, and from there, <b>Simply swipe right, or click <b-icon icon="justify"/></b> to open the <b>Chat Sidebar</b>. You can, from there, choose what kinds of chats you want to see, and from which scene.</p>
			</b-card-text>
		</b-card-body>
		</b-collapse>
	</b-card>

	<b-card no-body class="mb-1">
		<b-card-header header-tag="header" class="p-1" role="tab">
		<b-button block v-b-toggle.accordion-2 variant="secondary">Creating a Log</b-button>
		</b-card-header>
		<b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
		<b-card-body>
			<b-card-text>
			<p><b>Swipe Left, or press <b-icon icon="gear-fill"/></b> to bring up the <b>Settings Sidebar</b>. On the bottom, press <b>Edit Log</b> to bring up the Log Editing menu.</p>
			<br>
			<b-list-group>
				<b-list-group-item>
					<span>Load the <b>Actors</b>:</span> <p>Drag or select the <code>actors.db</code> file from your Foundry <code>/worlds/{your campaign name}/data</code> to load the Actor Data. This represents the characters of your game, you will see them listed on the menu, and will be able to <b>assign an image</b> to each actor, which will be shown as an avatar for their messages. <code>.jpg .png .svg .bmp</code> images and <code>.gif .webm .mp4</code> videos are supported as profile images.</p>
				</b-list-group-item>
				<b-list-group-item>
					<span>Load the <b>Scenes</b>:</span> <p>Drag or select the <code>scenes.db</code> file from your Foundry <code>/worlds/{your campaign name}/data</code> to load the Scene Data. This represents the screens or maps in your game, which you will see listed on the menu.</p>
				</b-list-group-item>
				<b-list-group-item>
					<span>Load the <b>Users</b>:</span> <p>Drag or select the <code>user.db</code> file from your Foundry <code>/worlds/{your campaign name}/data</code> to load the User Data. This contains the username of you, and your players, and allows all messages to be properly attributed to them. You can rename your players if desired, and change their selected color, which provides a slight flair to their corresponding messages. This app will not load their password information.</p>
				</b-list-group-item>
				<b-list-group-item>
					<span>Load the <b>Chats</b>:</span> <p>Drag or select the <code>chat.db</code> file from your Foundry <code>/worlds/{your campaign name}/data</code>, or the <code>.json</code> files exported by <b>DF Chat Enhancements</b>, to load the messages from your game. You can do this repeatedly, to add messages from different files where necessary, as long as they belong to the same campaign. <br><br>You will be able to edit or delete these messages individually, or remove whole groups of them, by selecting a rule to filter them by.</p>
				</b-list-group-item>
				<b-list-group-item>
					<span>Name your <b>Log</b>:</span> <p>Write on the labeled textbox to set the name of the log, which will be reflected on the tab name, and be used as the name for your archive.</p>
				</b-list-group-item>
				<b-list-group-item>
					<span><b>Save</b> your Log:</span> <p>Press the <b>Save Log</b> button to start a download for <code>{Log Name}.kiko</code>, a single file which your players will be able to load to read the message logs you loaded and edited at their leisure, on this same site.</p>
				</b-list-group-item>
			</b-list-group>
			</b-card-text>
		</b-card-body>
		</b-collapse>
	</b-card>
		<b-card no-body class="mb-1">
		<b-card-header header-tag="header" class="p-1" role="tab">
		<b-button block v-b-toggle.accordion-3 variant="secondary">Changelog</b-button>
		</b-card-header>
		<b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
		<b-card-body>
			<b-card-text>
			<b-list-group>
				<b-list-group-item>
					<span>Version <b>0.1</b>:</span> <p>Initial Release.</p>
				</b-list-group-item>
			</b-list-group>
			</b-card-text>
		</b-card-body>
		</b-collapse>
	</b-card>

	</div>

</template>

<script>
	export default{
		name:"HelpPanel",
		props:[],
		data:()=>({
				url:""})
	}
</script>

<style scoped>
	.list-group-item p {
		width: 100%;
	}

	.list-group-item span {
		width: 10em;
	}

	.list-group-item {
		display: flex;
	}
</style>