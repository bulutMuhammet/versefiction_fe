var image = document.getElementById("edit_image")

var cropper;


function startCrop(){

    cropper = new Cropper(image, {
        aspectRatio: 1,
        viewMode: 1,

    });
}
function cancelCropper(){
    cropper.destroy()
}
var inputImage = document.getElementById('img_inp');
var uploadButton = document.getElementById('img_inp_fake');
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
                if (cropper){
                    cancelCropper()
                }
                $('#picture_modal').modal("show")
                setTimeout(function(){
                    startCrop()

                }, 500);


            } else {
                window.alert('Please choose an image file.');
            }
        }
    };
} else {
    inputImage.disabled = true;
    inputImage.parentNode.className += ' disabled';
}

