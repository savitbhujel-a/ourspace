// ==========================================
// 1. PAGE LOAD CHECK (Humesha Login Rehne Ke Liye)
// ==========================================
// Jab bhi browser refresh hoga ya band hokar khulega, ye code check karega
window.onload = function() {
    let isLoggedIn = localStorage.getItem('userLoggedIn');
    
    if (isLoggedIn === 'true') {
        // Agar user pehle se logged in hai, toh direct main app screen dikhao
        openApp();
    } else {
        // Agar nahi hai, toh login box dikhao
        toggleView('loginBox');
    }
};

// ==========================================
// 2. TOGGLE VIEW (Login aur Signup Box Badalne Ke Liye)
// ==========================================
function toggleView(boxId) {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("signupBox").style.display = "none";
    
    // Jo box open karna hai use block kar do
    document.getElementById(boxId).style.display = "block";
}

// ==========================================
// 3. MAIN APP SCREENS LOGIC
// ==========================================
function openApp() {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("signupBox").style.display = "none";
    document.getElementById("appScreen").style.display = "flex";
}

// ==========================================
// 4. MANUAL LOGOUT (Jab user khud logout karega)
// ==========================================
function logout() {
    // Browser ki memory se login status mita do
    localStorage.removeItem('userLoggedIn');
    
    // App screen chhupao aur login box dikhao
    document.getElementById("appScreen").style.display = "none";
    document.getElementById("loginBox").style.display = "block";
    toggleView('loginBox');
}

// ==========================================
// 5. LOGIN AND SIGNUP FORM HANDLERS
// ==========================================
function handleLogin(e) {
    e.preventDefault();
    // Input field se password nikalne ke liye
    let pass = document.getElementById("loginPass").value;
    let currentLang = document.getElementById("langSelect").value;
    
    // Password strict check (A capital, space nahi hona chahiye)
    if (pass.trim() === "Admin123") {
        localStorage.setItem('isUserLoggedIn', 'true');
        openApp();
    } else {
        alert(langData[currentLang].wrongPassAlert);
    }
}
}


function handleSignup(e) {
    e.preventDefault();
    
    // Account bante hi user ko login status de do
    localStorage.setItem('userLoggedIn', 'true');
    
    alert("Naya account ban gaya bhai! OurSpace open ho raha hai.");
    openApp();
}
self.addEventListener('install', (e) => {
  console.log('OurSpace App Service Worker Installed!');
});

self.addEventListener('fetch', (e) => {
  // Smooth execution controller
});