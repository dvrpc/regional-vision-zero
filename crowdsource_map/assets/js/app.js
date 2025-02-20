// $('#aboutModal').modal('show');
$(document).ready(function(){
    $("#iframe_map").addClass("original-style"); // Initial style
    $("#footer").addClass("footer-og"); // Initial style
    $("#hide").addClass("fa fa-chevron-down fa-lg"); // Initial style

    $("#hide").click(function(){
      $(".footer_panel").toggle();
      $("#iframe_map").toggleClass("original-style alternate-style");
      $("#footer").toggleClass("footer-og footer-alt");
      $("#hide").toggleClass("fa fa-chevron-down fa-lg fa fa-chevron-up fa-lg"); // Initial style
    });
  });