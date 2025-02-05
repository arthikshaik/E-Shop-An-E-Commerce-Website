// Mock user data
const users = [];

// DOM Elements
const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");
const profileSection = document.getElementById("profile-section");
const profileUsername = document.getElementById("profile-username");
const profileEmail = document.getElementById("profile-email");
const logoutButton = document.getElementById("logout-button");

// Sign-Up Logic
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("signup-username").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  // Add new user
  users.push({ username, email, password });
  alert("Sign-Up Successful!");
  signupForm.reset();
});

// Login Logic
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  // Authenticate user
  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    // Display user profile
    profileUsername.textContent = Username: ${user.username};
    profileEmail.textContent = Email: ${user.email};
    document.getElementById("login-section").classList.add("hidden");
    profileSection.classList.remove("hidden");
  } else {
    alert("Invalid email or password");
  }

  loginForm.reset();
});

// Logout Logic
logoutButton.addEventListener("click", () => {
  profileSection.classList.add("hidden");
  document.getElementById("login-section").classList.remove("hidden");
});