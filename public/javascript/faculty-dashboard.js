//view faculty profile
async function viewfacultyprofile(event) {
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
    alert("Failed to created profile");
  }
};

document.querySelector('#faculty-profile').addEventListener('submit', viewfacultyprofile);

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
    alert("Failed to created profile");
  }
};

document.querySelector('#student-courses').addEventListener('submit', viewStudentcourses);


