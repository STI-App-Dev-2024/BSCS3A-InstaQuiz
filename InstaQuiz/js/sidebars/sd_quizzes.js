// Drag and Drop functionality
document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.upload-box').addEventListener('dragover', function(event) {
    event.preventDefault();
    event.stopPropagation();
    this.classList.add('dragover');
    });

    document.querySelector('.upload-box').addEventListener('dragleave', function(event) {
    event.preventDefault();
    event.stopPropagation();
    this.classList.remove('dragover');
    });

    document.querySelector('.upload-box').addEventListener('drop', function(event) {
    event.preventDefault();
    event.stopPropagation();
    this.classList.remove('dragover');

    const file = event.dataTransfer.files[0];
    if (file && file.type === 'application/pdf') {
        alert(`File "${file.name}" dropped. Ready to convert!`);
         
        convertPdfToQuiz(file);
    } else {
        alert('Please drop a valid PDF file.');
    }
    });

    // Trigger when Click the upload Box
    const uploadBox = document.getElementById('uploadBox');
    const fileInput = document.getElementById('fileInput');
    const fileDetails = document.getElementById('fileDetails');
    const fileName = document.getElementById('fileName');
    const pdfIcon = document.getElementById('pdfIcon');
    
    if (!uploadBox || !fileInput || !fileDetails || !fileName || !pdfIcon) {
        console.error('One or more elements not found');
        return;
    }

    uploadBox.addEventListener('click', () => {
        fileInput.click();   

    fileInput.addEventListener('change', (event) => {
        const files = event.target.files;
        if (files.length > 0) {
            const selectedFile = files[0];
            if (selectedFile.type === 'application/pdf') {
                fileName.textContent = selectedFile.name;
                fileDetails.style.display = 'flex'; 
                 
            }else{
                fileName.textContent = 'Please upload a PDF file.';
                fileDetails.style.display = 'none'; 
            }
        } else {
            fileDetails.style.display = 'none';  
        }
    });
    });
});

// Tab function
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked tab
            tab.classList.add('active');
            // Show the corresponding tab content
            document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
        });
    });
});

// Create quiz button function
document.addEventListener('DOMContentLoaded', () => {
// Get the modal and the button
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var closeBtn = document.querySelector(".close-btn");

// Open the modal when the button is clicked
btn.onclick = function() {
modal.style.display = "flex";
}

// Close the modal when the close button is clicked
closeBtn.onclick = function() {
modal.style.display = "none";
}

// Close the modal when clicking anywhere outside of the modal content
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
    }
}
});