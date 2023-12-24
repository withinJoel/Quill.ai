//////////////////////////////////////////////////////////////////////Stop from saving this document via Ctrl + S
document.addEventListener('keydown', function (event) {
    // Check if the Ctrl key and the 's' key are pressed simultaneously
    if (event.ctrlKey && event.key === 's') {
      // Prevent the default action (saving the page)
      event.preventDefault();
  
      // Display a popup with the message "Nope"
      alert('Sorry, This Code is not an open source code.');
    }
  });
  //////////////////////////////////////////////////////////////////////Disable Right click
  document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    alert('Sorry, Right click is disabled for safety purposes.');
  });