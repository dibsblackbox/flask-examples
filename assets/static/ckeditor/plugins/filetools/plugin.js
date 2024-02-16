var fileTools = CKEDITOR.plugins.fileTools;
var fileLoader = new fileTools.FileLoader(editor, {
	uploadUrl: 'https://myserver.com/upload'
});

// The data will be send using form-data encoded POST request
// (other request types like 'PUT' and 'POST' are also supported)
fileLoader.load(new Blob([1,2,3,4], {type: 'image/png'}));

// Add listener to customize headers before request
editor.on('fileUploadRequest', function(evt) {
	var xhr = evt.data.fileLoader.xhr;

	xhr.setRequestHeader('X-CSRF-TOKEN', 'abc');
	xhr.setRequestHeader('Content-Type', 'text/plain');
});

// The result of upload is delivered through fileUploadResponse event
editor.on('fileUploadResponse', function(evt) {
	console.log('Uploaded filename: ' + evt.data.response.filename);
	console.log('Uploaded file url: ' + evt.data.response.url);
});


var fileTools = CKEDITOR.plugins.fileTools;
var fileLoader = new fileTools.FileLoader(editor, {
	uploadUrl: 'https://myserver.com/upload'
});

// Add listener to customize headers before request
editor.on('fileUploadRequest', function(evt) {
	var xhr = evt.data.fileLoader.xhr;

	// Set token and CSRF
	xhr.setRequestHeader('X-CSRF-TOKEN', 'abc');

