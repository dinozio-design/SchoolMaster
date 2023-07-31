async function viewStudentprofile(event) {
  event.preventDefault();

  const response = await fetch(`/api/posts`, {
    method: 'POST',
 
  });

  if (response.ok) {
    document.location.replace('/studentdashboard');
  } else {
    alert("Failed to create profile!");
  }
};

document.querySelector('#student-profile').addEventListener('click', viewStudentprofile);

//view student profile
async function viewStudentcourses(event) {
  event.preventDefault();

  const response = await fetch(`/api/posts`, {
    method: 'POST',
   
   
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
};

document.querySelector('#student-courses').addEventListener('submit', viewStudentcourses);