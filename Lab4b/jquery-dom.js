$(function () {
  // (a) Replace the text using jQuery.
  $("#myElement").text("Modified Text");
  // (b) Add the CSS class using jQuery.
  $("#myDIV").addClass("myStyle");
  // (c) Handle a button click using jQuery.
  $("#myButton").on("click", function () {
    alert("Button clicked!");
  });
});
