// gets all file input elements
const fileInputs = document.getElementsByClassName('file');

const file = document.getElementById("fileInput");
const button = document.getElementById("file-btn");

button.addEventListener("click", (e) => {
  file.click();
});


// loops through each file input
for (let i = 0; i < fileInputs.length; i++) {
  // adds an event listener to each file input
  fileInputs[i].addEventListener('change', function() {

    // Get the file path from the real input
    let filePath = this.value;

    // Gets the corresponding fake input
    // let fakeInput = this.parentNode.getElementsByClassName('fakefile')[0].getElementsByTagName('input')[0];
    let fakeInput = document.getElementById("fakeText")

    //takes  only file name from file path
    let onlyfile = filePath.split('\\').pop();

    // Set the value of the fake input to the file path
    fakeInput.value = onlyfile;
  });
}

