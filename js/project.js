function scrollToHotels() {
    document.getElementById("hotels").scrollIntoView();
}
function scrollToTop() {
    document.getElementById("topofpage").scrollIntoView();
}
function scrollToEvents() {
    document.getElementById("events").scrollIntoView();
}
function scrollToContact() {
  document.getElementById("schedule").scrollIntoView();
}
$(document).ready(function() {
  $("body").css("display", "none");
  $("body").fadeIn(1000);
});

//Thanks for reading this. You made my day.
