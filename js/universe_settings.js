// window.addEventListener('DOMContentLoaded', function () {
//     var image = document.getElementById('image');
//     var cropBoxData;
//     var canvasData;
//     var cropper;
//
//     $('#modal').on('shown.bs.modal', function () {
//         cropper = new Cropper(image, {
//             autoCropArea: 0.5,
//             ready: function () {
//                 //Should set crop box data first here
//                 cropper.setCropBoxData(cropBoxData).setCanvasData(canvasData);
//             }
//         });
//     }).on('hidden.bs.modal', function () {
//         cropBoxData = cropper.getCropBoxData();
//         canvasData = cropper.getCanvasData();
//         cropper.destroy();
//     });
// });
var cropper;
var button = document.getElementById("crop_button")
var edit_buttons = document.getElementById("edit_buttons")
var cancel_button = document.getElementById("c_cancel")
var image = document.getElementById('universe_image');

button.addEventListener("click", startCropper)
cancel_button.addEventListener("click", cancelCropper)

function startCropper(){
    cropper = new Cropper(image, {
        aspectRatio: 696 / 237,
        viewMode: 2,

    });

    edit_buttons.style = "display: block;"
    button.style = "display: none;"

}

function cancelCropper(){
    cropper.destroy()
    edit_buttons.style = "display: none;"
    button.style = "display: block;"
}

// Import image
var inputImage = document.getElementById('upload');
var uploadButton = document.getElementById('c_upload');
uploadButton.addEventListener("click", () =>{
    inputImage.click()
})

var uploadedImageType = 'image/jpeg';
var uploadedImageName = 'cropped.jpg';
var uploadedImageURL;
if (URL) {
    inputImage.onchange = function () {
        var files = this.files;
        var file;

        if (files && files.length) {
            file = files[0];

            if (/^image\/\w+/.test(file.type)) {
                uploadedImageType = file.type;
                uploadedImageName = file.name;

                if (uploadedImageURL) {
                    URL.revokeObjectURL(uploadedImageURL);
                }

                image.src = uploadedImageURL = URL.createObjectURL(file);
                cancelCropper()
                startCropper()

            } else {
                window.alert('Please choose an image file.');
            }
        }
    };
} else {
    inputImage.disabled = true;
    inputImage.parentNode.className += ' disabled';
}