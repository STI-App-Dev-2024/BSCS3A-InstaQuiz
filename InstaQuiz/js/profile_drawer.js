// Import Modules
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';
import { getFirestore, doc, getDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

// Firebase configuration
import { firebaseConfig } from '../js/firebase.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Fetch user name and update UI
onAuthStateChanged(auth, async (user) => {
    if (user) {
        const userId = user.uid;
        const userDocRef = doc(db, "users", userId);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
            const userData = userDoc.data();  
            const firstName = userData.firstName;
            const capitalizFirstLetter = capitalizeFirstLetter(firstName);
            // Display the user's name on the homepage
            document.querySelector('.user-name').textContent = `Hello, ${capitalizFirstLetter}!`;
        } else {
            console.error("No such document in Firestore!");
        }
    } else {
      
        window.location.href = 'signin.html';
    }
});

//capitalize the first letter of first name
function capitalizeFirstLetter(string){
    if (!string) return ' ';
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// JavaScript to toggle profile drawer
document.querySelector('.user-profile').addEventListener('click', function() {
    const profileDrawer = document.getElementById('profileDrawer');
    if (profileDrawer.style.display === 'none' || profileDrawer.style.display === '') {
        profileDrawer.style.display = 'block';
    } else {
        profileDrawer.style.display = 'none';
    }
});

// Hide the drawer if clicked outside of it
document.addEventListener('click', function(event) {
    const profileDrawer = document.getElementById('profileDrawer');
    const userProfile = document.querySelector('.user-profile');
    if (!userProfile.contains(event.target)) {
        profileDrawer.style.display = 'none';
    }
});

// Profile
function createModal() {
    // Modal div
    var modal = document.createElement('div');
    modal.id = 'myModal';
    modal.style.display = 'none';
    modal.style.position = 'fixed';
    modal.style.zIndex = '1';
    modal.style.left = '0';
    modal.style.top = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.overflow = 'auto';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';

    // Modal content div
    var modalContent = document.createElement('div');
    modalContent.style.backgroundColor = '#fff';
    modalContent.style.margin = '15% auto';
    modalContent.style.padding = '20px';
    modalContent.style.border = '1px solid #888';
    modalContent.style.width = '80%';

    // Close button (span)
    var closeButton = document.createElement('span');
    closeButton.innerHTML = '&times;';
    closeButton.style.color = '#aaa';
    closeButton.style.float = 'right';
    closeButton.style.fontSize = '28px';
    closeButton.style.fontWeight = 'bold';
    closeButton.style.cursor = 'pointer';

    // Default profile image
    var default_profile = document.createElement('img');
    default_profile.src = '../images/default_profile.png';
    default_profile.alt = 'Profile Image';
    default_profile.style.display = 'block';
    default_profile.style.marginBottom = '10px';
    default_profile.style.width = '150px';
    default_profile.style.height = '150px';

    // Your profile label
    var yourProfileLabel = document.createElement('label');
    yourProfileLabel.innerHTML = 'Your profile ';
    yourProfileLabel.style.display = 'block';
    yourProfileLabel.style.marginBottom = '10px';

    // First name label
    var firstNameLabel = document.createElement('label');
    firstNameLabel.innerHTML = 'First Name';
    firstNameLabel.style.display = 'block';
    firstNameLabel.style.marginBottom = '10px';

    // First name input field 
    var firstNameInput = document.createElement('input');
    firstNameInput.type = 'text';
    firstNameInput.id = 'firstNameInput';
    firstNameInput.style.width = '100%';
    firstNameInput.style.padding = '8px';
    firstNameInput.style.marginBottom = '20px';
    firstNameInput.style.border = '1px solid #ccc';
    firstNameInput.style.borderRadius = '4px';

    // Middle name label
    var middleNameLabel = document.createElement('label');
    middleNameLabel.innerHTML = 'Middle Name';
    middleNameLabel.style.display = 'block';
    middleNameLabel.style.marginBottom = '10px';

    // Middle name input field 
    var middleNameInput = document.createElement('input');
    middleNameInput.type = 'text';
    middleNameInput.id = 'middleNameInput';
    middleNameInput.style.width = '100%';
    middleNameInput.style.padding = '8px';
    middleNameInput.style.marginBottom = '20px';
    middleNameInput.style.border = '1px solid #ccc';
    middleNameInput.style.borderRadius = '4px';

    // Last name label
    var lastNameLabel = document.createElement('label');
    lastNameLabel.innerHTML = 'Last Name';
    lastNameLabel.style.display = 'block';
    lastNameLabel.style.marginBottom = '10px';

    // Last name input field 
    var lastNameInput = document.createElement('input');
    lastNameInput.type = 'text';
    lastNameInput.id = 'lastNameInput';
    lastNameInput.style.width = '100%';
    lastNameInput.style.padding = '8px';
    lastNameInput.style.marginBottom = '20px';
    lastNameInput.style.border = '1px solid #ccc';
    lastNameInput.style.borderRadius = '4px';

    // email address label
    var emailAddressLabel = document.createElement('label');
    emailAddressLabel.innerHTML = 'Email Address';
    emailAddressLabel.style.display = 'block';
    emailAddressLabel.style.marginBottom = '10px';

    // email address input field 
    var emailAddressInput = document.createElement('input');
    emailAddressInput.type = 'text';
    emailAddressInput.id = 'emailAddressInput';
    emailAddressInput.style.width = '100%';
    emailAddressInput.style.padding = '8px';
    emailAddressInput.style.marginBottom = '20px';
    emailAddressInput.style.border = '1px solid #ccc';
    emailAddressInput.style.borderRadius = '4px';

    // password label
    var passwordLabel = document.createElement('label');
    passwordLabel.innerHTML = 'Password';
    passwordLabel.style.display = 'block';
    passwordLabel.style.marginBottom = '10px';

    // password input field 
    var passwordInput = document.createElement('input');
    passwordInput.type = 'text';
    passwordInput.id = 'passwordInput';
    passwordInput.style.width = '100%';
    passwordInput.style.padding = '8px';
    passwordInput.style.marginBottom = '20px';
    passwordInput.style.border = '1px solid #ccc';
    passwordInput.style.borderRadius = '4px';

    // Append the close button to the modal content
    modalContent.appendChild(closeButton);

    // Append all elements
    modalContent.appendChild(default_profile);
    modalContent.appendChild(yourProfileLabel);
    modalContent.appendChild(firstNameLabel);
    modalContent.appendChild(firstNameInput);
    modalContent.appendChild(middleNameLabel);
    modalContent.appendChild(middleNameInput);
    modalContent.appendChild(lastNameLabel);
    modalContent.appendChild(lastNameInput);
    modalContent.appendChild(emailAddressLabel);
    modalContent.appendChild(emailAddressInput);
    modalContent.appendChild(passwordLabel);
    modalContent.appendChild(passwordInput);


    // Append the modal content to the modal
    modal.appendChild(modalContent);

    // Append the modal to the body
    document.body.appendChild(modal);

    // Open the modal when the button is clicked
    document.querySelector('.profile').onclick = function() {
        modal.style.display = 'block';
    };

    // Close the modal when the close button is clicked
    closeButton.onclick = function() {
        modal.style.display = 'none';
    };

    // Close the modal when clicking outside of the modal content
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
}

// Call the function to create the profile modal
createModal();


// Logout function
document.querySelector('.logout').addEventListener('click', function(event) {
    event.preventDefault();
    // Confirm logout action
    if (confirm("Are you sure you want to logout?")) {
        alert("Logged out successfully!");
        window.location.href = 'welcome.html'; 
    }
});


