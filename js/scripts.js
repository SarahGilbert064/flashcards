$(document).ready(function() {
  $("button#js").click(function() {
    $(".javascript-show").show();
    $(".javascript-hide").toggle();
  });
  $("#operator").click(function() {
    $(".operator-button").show();
    $(".operator-definition").toggle();
  });
  $("#variables").click(function() {
    $(".variables-button").show();
    $(".variables-definition").toggle();
  });
  $("#variablenames").click(function() {
    $(".variablenaming-button").show();
    $(".variablenaming-defintion").toggle();
  });
});

  