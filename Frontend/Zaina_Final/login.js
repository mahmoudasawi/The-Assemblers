// Sidebar functionality
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
}

// Close sidebar when clicking outside
document.addEventListener('click', function(event) {
  const sidebar = document.getElementById("sidebar");
  const menuIcon = document.querySelector('.menu-icon');
  
  if (sidebar.classList.contains('open') && 
      !sidebar.contains(event.target) && 
      !menuIcon.contains(event.target)) {
    sidebar.classList.remove('open');
  }
});

// Login functionality
function handleLogin(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check for admin login
  if (username === 'Admin@gmail.com' && password === 'Administrator') {
    window.location.href = 'Admin dashboard.html';
  }
  // Check for assembler login
  else if (username === 'assembler@gmail.com' && password === 'Assembler') {
    window.location.href = 'assembler dashboard.html';
  }
  // Check for client login
  else if (username === 'client@gmail.com' && password === 'Client') {
    window.location.href = 'index.html';
  }
  else {
    alert('Invalid credentials. Please try again.');
  }
  
  return false;
} 