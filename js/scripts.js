$(document).ready(function(){

var idNum = 1;
var inputs = ["list-item-0"];

  $("#add-item-btn").click(function(event) {
    event.preventDefault();
    $("#grocery-list ul").append('<li><input id="list-item-'+ idNum + '" type="text" name="" value=""></li>');
    inputs.push("list-item-"+ idNum);
    console.log(inputs);
    idNum++;
  })

  $("#alphabatizer").click(function(event){
    event.preventDefault();
    // DELETE EVERYTHING IN THE ARRAY
    // REPOPULATE THE ARRAY
    // ALPHABATIZE THE ARRAY

    var foodItems = inputs.map(function(item) {
      console.log(foodItems);
      return $("#" + item).val().toUpperCase();


    });
    foodItems.sort();
    console.log(foodItems);


    $("#grocery-list").hide();
    // this inserts each object in the array individually into the HTML
    foodItems.forEach(function(item){
      $("#grocery-final-ul").append("<li>" + item + "</li>");

    });
    $(".grocery-list-alphabatize").show();






  });

});
