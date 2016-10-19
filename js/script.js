// $(".home-icon").click(function(){
//   this.remove();
//   var homeIconActive =  $('<img />', {'src': 'img/bey-home-accent.png', 'class': 'home-icon'});
//   $('.nav').append(homeIconActive);
// });
//
// $(".home-icon").hover(function(){
//   this.remove();
//   var homeIconActive =  $('<img />', {'src': 'img/bey-home-accent.png', 'class': 'home-icon'});
//   $('.nav').append(homeIconActive);
// });

$(".glyphicon-star").click(function(){
  $(this).toggleClass('clicked-fav');
});

// enter at removes focus

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
      $(this).parent().next().remove();
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
  $('.all-tasks').append($('#new-task-all').html());
  console.log($('.new-task-all'));
  // on blur, turn input into span
  $('.txtToInput').on('blur', function() {
    var span = $('<span />', {
      'class': 'txtToInputNew',
      'contenteditable': 'true'
    });
    $(this).parent().append($(span).html($(this).val()));
    $(this).remove();
  });

  $(".new-task-all:even").css( "background-color", "#fcfcfc" );
  // console.log($(".new-task:odd"));

  $(".glyphicon-star").click(function(){
    $(this).toggleClass('clicked-fav');
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
          $(this).parent().next().remove();
          $(this).parent().remove();

        });
      }

      else {
        $(this).parent().next().children().css('text-decoration','none');
        $(".icon").removeClass("glyphicon glyphicon-remove");
      }

    });
});
