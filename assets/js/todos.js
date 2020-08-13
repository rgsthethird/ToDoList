if(jQuery) {

  var inputVisible = true;
  var inputBox = $("#input");
  var input = $("input[type=text]");
  var plusSign = $("#plus");
  var deleteButton = $(".delete");

  setColors();

  plusSign.on("click",function() {
    console.log(inputBox);
    if(inputVisible) {
      inputBox.slideUp(300);
      $("#header").find("i").toggleClass("fa-minus");
      $("#header").find("i").toggleClass("fa-plus");
      inputVisible = false;
    }
    else {
      inputBox.slideDown(300);
      $("#header").find("i").toggleClass("fa-minus");
      $("#header").find("i").toggleClass("fa-plus");
      inputVisible = true;
    }
  });

  input.on("keypress",function(event) {
    if(event.which == 13) {
      var newItem = "<div class='listitem' id='newItem'>"+
                      "<span class='delete'><i class='fas fa-trash-alt fa-xs'></i></span>"+
                      "<li class='listtext'>"+input.val()+"</li>"+
                    "</div>";
      input.val("");
      $("ul").append(newItem);
      setColors();
      $("#newItem .delete").on("click", function() {
        $(this).parent().slideUp(200,function() {
          $(this).remove();
          setColors();
        });
      });
      $("#newItem .listtext").on("click", function() {
        $(this).toggleClass("strikethrough");
      });
      $("#newItem").slideDown(300);
      $("#newItem").removeAttr("id");
    }
  });

}

function setColors() {
  $(".listitem:even").css("background","white");
  $(".listitem:odd").css("background","#ebeff2");
}
