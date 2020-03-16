function accordionMenu() {
 var menu = document.getElementById("toggled");
 var menuStyle = window.getComputedStyle(menu);
 var display = menuStyle.getPropertyValue('display');

 if (display === 'none') {
  toggle.style.backgroundColor = "#d659a6";  
  menu.style.display = "block";
 } else {
  toggle.style.backgroundColor = "transparent";
  menu.style.display = "none";
 };
};

// add event listener to menu button
var toggle = document.getElementById("menu-toggle");
toggle.addEventListener("click", accordionMenu, false);