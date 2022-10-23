const input_image = document.querySelector("#input-image")
const reader = new FileReader();
const click  = document.getElementById('sendImg');
var uploaded_image = "";
input_image.addEventListener('change', function(){
    reader.addEventListener('load', () =>{
        click.addEventListener('click', function(){
           uploaded_image = reader.result;
           localStorage.setItem('img', uploaded_image);
        })
    })
    reader.readAsDataURL(this.files[0]);
})