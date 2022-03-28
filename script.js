
var password="";
var el_down = document.getElementById("password");

function getpass() {
    password= Math.random().toString(36).slice(2) + Math.random().toString(36).toUpperCase().slice(2);
    
    el_down.value=password;

} 

function copypass(){
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}
//jz22tsij7nQM4E60U1D6H
    