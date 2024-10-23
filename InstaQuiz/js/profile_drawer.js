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

// Logout function
document.querySelector('.logout').addEventListener('click', function(event) {
    event.preventDefault();
    // Confirm logout action
    if (confirm("Are you sure you want to logout?")) {
        alert("Logged out successfully!");
        window.location.href = 'welcome.html'; 
    }
});

