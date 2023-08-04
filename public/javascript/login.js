document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login");
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const username = document.getElementById("loginUsername").value;
      const password = document.getElementById("loginPassword").value;
      
      // Create an object to hold login data
      const loginData = {
        email: username,
        password: password,
        
      };
      let errorFound = false;
      // Send the login data to the server using Fetch API
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      })
      .then((response) => {
        if (!response.ok) {
          // If the response status is not OK (200-299), handle the error
          errorFound = true;
        }
        // Parse the response body as JSON
        return response.json();
      })
        .then((data) => {
          
          // Handle the server response here (e.g., redirect to dashboard)
          if (errorFound) {
            document.getElementById('erroMsg').textContent = "Invalid Login";
          } else {
            if (data.data.userType === 'student') {
              location.href="/student-dashboard"
            } else if (data.data.userType === 'faculty') {
              location.href="/faculty-dashboard"
            } else if (data.data.userType === 'admin') {
              location.href="/admin-dashboard"
            }
          }
          
        })
        .catch((error) => {
          console.error("Error logging in:", error);
        });
    });
});