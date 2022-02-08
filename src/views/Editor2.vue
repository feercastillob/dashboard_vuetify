<template>
    <div id="app">
		<h1>CKEditor 5 – Vue.js Component – development sample</h1>

		<ckeditor
		
			tag-name="textarea"
			v-model="editorData"
			:editor="editor"
			:config="editorConfig"
			:disabled="editorDisabled"
			@ready="onEditorReady"
			@focus="onEditorFocus"
			@blur="onEditorBlur"
			@input="onEditorInput"
			@destroy="onEditorDestroy"
		></ckeditor>
		<v-btn v-on:click="toggleEditorDisabled()">
			{{ editorDisabled ? 'Enable' : 'Disable' }} editor
		</v-btn>
		<v-btn v-on:click="destroyApp()">Destroy the app</v-btn>

		<h2>Live editor data</h2>
		<textarea v-model="editorData"></textarea>
	</div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
    data: {
				editor: ClassicEditor,
				editorData: '<p>Hello world!</p>',
				editorConfig: { toolbar: [ 'heading', '|', 'bold', 'italic' ] },
				editorDisabled: false
			},
			methods: {
				toggleEditorDisabled() {
					this.editorDisabled = !this.editorDisabled;
				},
				destroyApp() {
					app.$destroy();
				},

				onEditorReady( editor ) {
					console.log( 'Editor is ready.', { editor } );
				},
				onEditorFocus( event, editor ) {
					console.log( 'Editor focused.', { event, editor } );
				},
				onEditorBlur( event, editor ) {
					console.log( 'Editor blurred.', { event, editor } );
				},
				onEditorInput( data, event, editor ) {
					console.log( 'Editor data input.', { event, editor, data } );
				},
				onEditorDestroy( editor ) {
					console.log( 'Editor destroyed.', { editor } );
				}
			}
		
    
}
</script>