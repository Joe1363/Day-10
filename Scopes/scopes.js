$(document).ready(function() {
  var rowcount = 0;

  $("#addbtn").click(function() {
    var start = 0;
    rowcount++;
    addbtn(rowcount, start);

    function addbtn(rowcount, start) {
      var incount = 0;

      $(".btnarea").prepend("<p id='number-" + rowcount + "'>" + start + "</p>" +
        "<div class='btn-group' role='group' aria-label='...' id='row-" + rowcount + "'>" +
        "<button id='plus-" + rowcount + "' type='button' class='btn btn-default btnrow'>+</button>" +
        "<button id='minus-" + rowcount + "' type='button' class='btn btn-default btnrow'>-</button>" +
        "<button id='reset-" + rowcount + "' type='button' class='btn btn-info btnrow'>Reset</button>" +
        "<button id='delete-" + rowcount + "' type='button' class='btn btn-danger btnrow'>Delete</button>" +
        "</div><br id='break-" + rowcount + "'>");

      $("#plus-" + rowcount).click(function() {
        incount++;
        $("#number-" + rowcount).html(incount);
      })

      $("#minus-" + rowcount).click(function() {
        incount--;
        $("#number-" + rowcount).html(incount);
      })

      $("#reset-" + rowcount).click(function() {
        incount = 0;
        $("#number-" + rowcount).html(incount);
      })

      $("#delete-" + rowcount).click(function() {
        $("#number-" + rowcount).remove();
        $('#row-' + rowcount).remove();
        $('#break-' + rowcount).remove();
      })
    };//addbtn function
  })///click
});//doc ready
