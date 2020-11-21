
$(document).ready(function() {
  $("#submit").click(function() {
    event.preventDefault();
    var listItem = $("#text").val();
    if (listItem === "") {
      alert(" Please write something.");
    }
    //Value shown as a test
    else {
      console.log(listItem);
      $("ol").append(
        "<li>" + listItem + "</li> <button class='delete'> Delete </button>"
      );
      // Clear the input
      $("#text").val("");
    }

    // How to delete a task (It only deletes the button AHHH!!!)
    $("button.delete").click(function() {
      event.preventDefault();
      console.log("clicked");
      $(this).remove();
    });
    $('li').click(function(){
        event.preventDefault();
        console.log('LINE ITEM CLICKED')
        $(this).addClass('completed')
    })
  });
  $('#reset').click(function(){
      event.preventDefault();
      console.log('Reset!')
      $('li').remove();
      $('button.delete').remove();
  })
});

// Make a moving variable
// When the button deletes delete the whole section. Create a div that appends
// Find a way to identify the appends seperately
// Figure out how do you delete the whole section.
