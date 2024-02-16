// Improved Code:

const fileTools = CKEDITOR.plugins.fileTools;
const fileLoader = new fileTools.FileLoader(editor, {
	uploadUrl: 'https://myserver.com/upload'
});

// Add listener to customize headers before request
editor.on('fileUploadRequest', (evt) => {
	const xhr = evt.data.fileLoader.xhr;

	// Set token and CSRF
	xhr.setRequestHeader('X-CSRF-TOKEN', 'abc');
	xhr.setRequestHeader('Content-Type', 'text/plain');
});

// The result of upload is delivered through fileUploadResponse event
editor.on('fileUploadResponse', (evt) => {
	console.log(`Uploaded filename: ${evt.data.response.filename}`);
	console.log(`Uploaded file url: ${evt.data.response.url}`);
});
