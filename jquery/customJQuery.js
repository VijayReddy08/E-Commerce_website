$(document).ready(function () {
  // Selects all <a> elements in the menu
  var navLinks = $("nav ul li a");

  // Iterates through each link
  navLinks.each(function () {
    // Checks if the link's href matches the current page's pathname
    if (window.location.pathname.endsWith($(this).attr("href"))) {
      // Adds the 'active' class to the matching link
      $(this).parents("li").addClass("active");
    } else if (window.location.pathname.endsWith("/")) {
      // Adds the 'active' class to the home page
      $("#home").addClass("active");
    } else {
      // Removes the 'active' class from non-matching links
      $(this).parents("li").removeClass("active");
    }
  });
});
