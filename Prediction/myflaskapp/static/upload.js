// var isAdvancedUpload = function() {
//     var div = document.createElement('div');
//     return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
//   }();
  
// //   let draggableFileArea = document.querySelector(".drag-file-area");

//   let fileInput = document.querySelector(".default-file-input");
window.onload = function() {
    // Get the elements
    var dropZone = document.querySelector('.drag-file-area');
    var fileInput = document.querySelector('.default-file-input');

    // Add the event listeners
    dropZone.addEventListener('dragover', handleDragOver, false);
    dropZone.addEventListener('drop', handleFileSelect, false);
    fileInput.addEventListener('change', handleFileSelect, false);
}

function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    // Get the files
    var files;
    if (evt.type == 'drop') {
        files = evt.dataTransfer.files; // The files from the drag and drop
    } else {
        files = evt.target.files; // The file from the input
    }

    // TODO: You can add more code here if you want to do something with the files
}

function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Show as copy
}

  
  
//   fileInput.addEventListener("click", () => {
//       fileInput.value = '';
//       console.log(fileInput.value);
//   });
//   let draggableFileArea = document.querySelector(".drag-file-area");

// // Prevent default behavior for drag-and-drop events
// ["drag", "dragstart", "dragend", "dragover", "dragenter", "dragleave", "drop"].forEach(evt => {
//     draggableFileArea.addEventListener(evt, e => {
//         e.preventDefault();
//         e.stopPropagation();
//     });
// });

// // Update text when file is dragged over
// ["dragover", "dragenter"].forEach(evt => {
//     draggableFileArea.addEventListener(evt, e => {
//         e.preventDefault();
//         e.stopPropagation();
//         // Update UI to indicate a file can be dropped
//         // For example:
//         draggableFileArea.style.border = "2px dashed #ccc";
//     });
// });

// Reset UI when drag leaves the area
["dragleave", "dragend", "drop"].forEach(evt => {
    draggableFileArea.addEventListener(evt, e => {
        e.preventDefault();
        e.stopPropagation();
        // Reset UI to indicate no file is being dragged
        // For example:
        draggableFileArea.style.border = "none";
    });
});

//   draggableFileArea.addEventListener("drop", ()=>{
//     draggableFileArea.value='';
//     console.log(draggableFileArea.value)
//   });
  
//   fileInput.addEventListener("change", e => {
//       console.log(" > " + fileInput.value)
      
//       dragDropText.innerHTML = 'File Dropped Successfully!';
//       document.querySelector(".label").innerHTML = `drag & drop or <span class="browse-files"><input type="file" class="default-file-input"> <span class="browse-files-text">browse file</span><span>from device</span></span>`;
      
//       fileName.innerHTML = fileInput.files[0].name;
//       fileSize.innerHTML = (fileInput.files[0].size/1024).toFixed(1) + " KB";
     
//       progressBar.style.width = 0;
//       fileFlag = 0;
//   });
  
//   uploadButton.addEventListener("click", () => {
//       let isFileUploaded = fileInput.value;
//       if(isFileUploaded != '') {
//           if (fileFlag == 0) {
//               fileFlag = 1;
//               var width = 0;
//               var id = setInterval(frame, 50);
//               function frame() {
//                     if (width >= 390) {
//                       clearInterval(id);
                      
//                       uploadButton.innerHTML = `<span class="material-icons-outlined upload-button-icon"> check_circle </span> Uploaded`;
//                     } else {
//                       width += 5;
//                       progressBar.style.width = width + "px";
//                     }
//               }
//             }
//       } else {
//           cannotUploadMessage.style.cssText = "display: flex; animation: fadeIn linear 1.5s;";
//       }
//   });
  
//   cancelAlertButton.addEventListener("click", () => {
//       cannotUploadMessage.style.cssText = "display: none;";
//   });
  
//   if(isAdvancedUpload) {
//       ["drag", "dragstart", "dragend", "dragover", "dragenter", "dragleave", "drop"].forEach( evt => 
//           draggableFileArea.addEventListener(evt, e => {
//               e.preventDefault();
//               e.stopPropagation()
//           })
//       )};
  
//       ["dragover", "dragenter"].forEach( evt => {
//           draggableFileArea.addEventListener(evt, e => {
//               e.preventDefault();
//               e.stopPropagation();
             
//               dragDropText.innerHTML = 'Drop your file here!';
//           });
//       });
  
//       draggableFileArea.addEventListener("drop", e => {
         
//           dragDropText.innerHTML = 'File Dropped Successfully!';
//           document.querySelector(".label").innerHTML = `drag & drop or <span class="browse-files"><input type="file" class="default-file-input"> <span class="browse-files-text">browse file</span><span>from device</span></span>`;
//       });
          
//           let files = e.dataTransfer.files;
//           fileInput.files = files;
//           console.log(files[0].name + " " + files[0].size);
//           console.log(document.querySelector(".default-file-input").value);
//           fileName.innerHTML = files[0].name;
//           fileSize.innerHTML = (files[0].size/1024).toFixed(1) + " KB";
//           uploadedFile.style.cssText = "display: flex;";
//           progressBar.style.width = 0;
//           fileFlag = 0;
//       });
//   }
  
//   removeFileButton.addEventListener("click", () => {
//       uploadedFile.style.cssText = "display: none;";
//       fileInput.value = '';
//       uploadIcon.innerHTML = 'file_upload';
//       dragDropText.innerHTML = 'Drag & drop any file here';
//       document.querySelector(".label").innerHTML = `or <span class="browse-files"><input type="file" class="default-file-input"> <span class="browse-files-text">browse file</span><span>from device</span></span>`;
//       uploadButton.innerHTML = `Upload`;
//   });
// Function to handle file upload


// function handleFileUpload() {
//     let fileInput = document.querySelector('.default-file-input');
//     let file = fileInput.files[0];
//     let formData = new FormData();
//     formData.append('image', file);

//     // Make AJAX request to Flask backend
//     fetch('/result', {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => {
//         // Check if response status is OK
//         if (response.ok) {
//             // Parse response as JSON
//             return response.json();
//         } else {
//             // Throw an error if response status is not OK
//             throw new Error('Network response was not ok.');
//         }
//     })
//     .then(data => {
//         // Handle the prediction result
//         console.log('Prediction:', data.prediction);
//         // Redirect to prediction page with the prediction result
//         window.location.href = '/prediction.html?prediction=' + data.prediction;
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// }

// // Add event listener for file input change
// document.querySelector('.default-file-input').addEventListener('change', handleFileUpload);
//