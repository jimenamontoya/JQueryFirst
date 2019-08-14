$(function() {//JUST SAYS, WHEN PAGE IS OPENED, RUN THE CODE

// Step 1
// This code is executed when someone clicks the "Add Item" button 
// at the top right of the shopping-item
// -------------------
	$(".add-item").on('click', function(event) {
		  event.preventDefault(); //KEEPS PAGE FROM REFRESHING
      var listItem = $(".item-input").val(); //INPUT (SEARCHED NAME item-input IN HMTL AND SAVED VALUE INPT 
		  var itemHtml = "<li><span class='item-check'></span><span class='item-text'>" + listItem + "</span><span class='item-remove'></span></li>";
          //CREATED A LIST OF VARIABLES
        $(".shopping-list").prepend(itemHtml); //PREPEND AT THE TOP OF THE LIST VS APPEND TO THE END
      $(".item-input").val(""); // TO ERASE THE INPUT IN THE item-input AREA, "" TWO QUOTES IS EMPTY
	});
// -------------------


// Step 2
// -------------------
// This code is executed when someone clicks the "X" button
// at the top right of the shopping-item
	$(".shopping-list").on('click', '.item-remove', function(event) { //item-remove IS A CHILD, WE ASKED IT TO DELETE THE PARENT. 
    
      $(event.currentTarget).parent().remove();//use event.currentTarget WHICH EQUALS THE .ITEM-REMOVE, WHICH YOU CANT USE DIRECTLY AS IT WAS ADDED AFTER THE PAGE WAS LOADED
	});
// -------------------
  
// Step 3
// This code is executed when someone clicks the checkbox in the shopping-item section
// -------------------
	$(".shopping-list").on('click', '.item-check', function(event) {
      $(event.currentTarget).toggleClass('complete');// WHEN USING FUCTION WITH CLASS, THE . IS NOT NEEDED.
    // toggleClass ADDS THE CALSS YOU WANT this class was in CSS where format was change to a check image
  });
// -------------------

//Additional Challenges
//If you add an item with no text, it adds a blank box. This is a bug! Fix it.
//Add a counter that tells the user how many items are in your shopping list
  
});



