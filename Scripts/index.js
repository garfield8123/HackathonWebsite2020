$('a.yourlink').click(function(e) {
  e.preventDefault();
  window.open('./Scripts/index.php?hello=true');
});