//view faculty profile
async function viewfacultyprofile(event) {
  event.preventDefault();

  res.render('faculty-dashboard');
};

document.querySelector('#faculty-profile').addEventListener('submit', viewfacultyprofile);

//view student profile
async function viewStudentcourses(event) {
  event.preventDefault();

  res.render('faculty-dashboard');
};

document.querySelector('#student-courses').addEventListener('submit', viewStudentcourses);


