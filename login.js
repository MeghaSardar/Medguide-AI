document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Login attempted (placeholder functionality)");
});

function openSignup() {
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("signupForm").classList.remove("hidden");
}

function goBackToLogin() {
  document.getElementById("signupForm").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
}

function createAccount() {
  const email = document.getElementById("newEmail").value;
  const password = document.getElementById("newPassword").value;

  if (email && password) {
    alert(`Account created for ${email}`);
    // Add real backend call here if needed
  } else {
    alert("Please fill out all fields.");
  }
}
