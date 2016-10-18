// On blur, turn input into span


// Checkbox functionality for seed tasks
$("input:checkbox").click(function(){
  if (this.checked){
    console.log("check");
    $(this).parent().siblings("div.icon").append('<span>').addClass("glyphicon glyphicon-remove");
    // cross out task
    $(this).parent().next().children().css('text-decoration','line-through');

    // clicking x removes task
    $('.glyphicon-remove').click(function(){
      console.log("remove");
      $(this).parent().remove()
    });
  }

  else {
    $(this).parent().next().children().css('text-decoration','none');
    $(".icon").removeClass("glyphicon glyphicon-remove");
  }

});

// Add new task
$('.add-task-btn').click(function(){
  // add new task
  $('.new-task').removeClass('hidden');
  $('.all-tasks').append($('#new-task').html());

  // on blur, turn input into span
  $('.txtToInput').on('blur', function() {
    var span = $('<span />', {
      'class': 'txtToInputNew'
    });
    $(this).parent().append($(span).html($(this).val()));
    $(this).remove();
  });



    $("input:checkbox").click(function(){
      if (this.checked){
        console.log("check");
        $(this).parent().siblings("div.icon").append('<span>').addClass("glyphicon glyphicon-remove");
        // cross out task
        $(this).parent().next().children().css('text-decoration','line-through');

        // clicking x removes task
        $('.glyphicon-remove').click(function(){
          console.log("remove");
          $(this).parent().remove()
        });
      }

      else {
        $(this).parent().next().children().css('text-decoration','none');
        $(".icon").removeClass("glyphicon glyphicon-remove");
      }

    });
});
