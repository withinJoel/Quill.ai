//////////////////////////////////////////////////////////////////////Stop from saving this document via Ctrl + S
document.addEventListener('keydown', function (event) {
    // Check if the Ctrl key and the 's' key are pressed simultaneously
    if (event.ctrlKey && event.key === 's') {
      // Prevent the default action (saving the page)
      event.preventDefault();
  
      // Display a popup with the message "Nope"
      alert('Sorry, This Code is not an open source code.');
    }
    if (event.ctrlKey && event.shiftKey && event.key === 'j') {
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
//////////////////////////////////////////////////////////////////////Disable Console Data
(function () {
  var defaultMessage = 'Access to Sources panel is disabled.';

  // Override some properties of the window object
  Object.defineProperties(window, {
      '$_': {
          get: function () {
              console.error(defaultMessage);
          }
      },
      '$$': {
          get: function () {
              console.error(defaultMessage);
          }
      },
      'document': {
          get: function () {
              console.error(defaultMessage);
          }
      }
      // Add other properties as needed
  });
})();
window.console = {
  log: function () {
      originalConsole.log('Logging is disabled.');
  },
  error: function () {
      originalConsole.error('Error logging is disabled.');
  },
  warn: function () {
      originalConsole.warn('Warning logging is disabled.');
  },
  info: function () {
      originalConsole.info('Info logging is disabled.');
  }
  // You can add other console methods as needed
};
