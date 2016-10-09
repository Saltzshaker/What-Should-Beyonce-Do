//$('.new-task').addClass('hidden');

textbox=false;

$(function () {
  $('.txtToInput').on('click', function () {
      console.log('click');
      if(!textbox) {
      var input = $('<input />', {'type': 'text','class': 'txtToInput', 'name': 'aname', 'value': $(this).html()});
      $(this).parent().append(input);
      $(this).remove();
      input.focus();
     textbox=true;
      }

       $('.txtToInput').blur(function (){
           if(textbox) {
         	   var span = $('<span />', {'class': 'txtToInput'});
             $(this).parent().append($(span).html($(this).val()));
             $(this).remove();
             textbox=false;
             console.log(textbox == true);
         };
      });
    });
  });

  $("input:checkbox").click(function(){
    if (this.checked){
      console.log("check");
      $(".icon").addClass("glyphicon glyphicon-remove");
      // cross out task
      $(this).parent().next().children().css('text-decoration','line-through');

      // clicking x removes task
      $('.glyphicon-remove').click(function(){
        console.log("remove");
        $(".saved-task").remove()
      });
    }

    else {
      $(this).parent().next().children().css('text-decoration','none');
      $(".icon").removeClass("glyphicon glyphicon-remove");
    }

  });

// Add new task
$('.add-task-btn').click(function(){
  console.log('test');
  $('.new-task').removeClass('hidden');
  $(".all-tasks").append('<div class = "row new-task">' + '<div class="col-xs-2"><input type="checkbox"></div>' + '<div class="col-xs-9"><input type="text" class="txtToInput" placeholder="Enter a task"></div><div class="col-xs-1 icon"></div></div>');

  //input becomes span when clicking away. clicking span makes it editable.
  textbox=false;
  $(function () {
    $('.txtToInput').on('click', function () {
        console.log('click');
        if(!textbox) {
        var input = $('<input />', {'type': 'text','class': 'txtToInput', 'name': 'aname', 'value': $(this).html()});
        $(this).parent().append(input);
        $(this).remove();
        input.focus();
       textbox=true;
        }

         $('.txtToInput').blur(function (){
             if(textbox) {
           	   var span = $('<span />', {'class': 'txtToInput'});
               $(this).parent().append($(span).html($(this).val()));
               $(this).remove();
               textbox=false;
               console.log(textbox == true);
           };
        });
      });
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


// clicking pencil icon replaces task span with input box
// $('.glyphicon-pencil').click(function(){
//   console.log("pencil");
//   var $input = $("<input>");
//   $(".task").replaceWith($input);
//   $input.select();
// });
