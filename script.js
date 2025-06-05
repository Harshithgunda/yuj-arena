document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Basic check for demonstration
    if (username === "test" && password === "1234") {
      alert("Login successful!");
    } else {
      alert("Invalid username or password.");
    }
  });
  
  function signInWithGoogle() {
    alert("Google Sign-In functionality not yet implemented.");
  }
  