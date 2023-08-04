document.addEventListener('DOMContentLoaded', function () {
  const signupForm = document.getElementById('signup');
  signupForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // console.log(event);
    const username = document.getElementById('signupUsername').value;
    // console.log(username);
    const password = document.getElementById('signupPassword').value;
    // console.log(password);
    const userType = document.getElementById('userTypeDropDown').value;
    // console.log(userType);
    const name = document.getElementById('name').value;

    // Create an object to hold signup data

    const signupData = {
      name: name,
      email: username,
      password: password,
      userType: userType,
    };
    let errorMsg = '';
    let errorFound = false;
    console.log('Checkpoint', signupData);
    // Send the signup data to the server using Fetch API
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signupData),
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
        if (errorFound) {
          document.getElementById('erroMsg').textContent = data.errorMsg;
        } else {
          if (userType === 'student') {
            console.log('Sdsds inside js studen ***********');
            location.href = '/student-dashboard';
          } else if (userType === 'faculty') {
            location.href = '/faculty-dashboard';
          } else if (userType === 'admin') {
            document.location.replace('/admin-dashboard');
          } else {
            errorMsg = response.errorMsg;
          }
        }
      })
      .catch((error) => {
        console.error('Error signing up:', error);
      });
  });
});
