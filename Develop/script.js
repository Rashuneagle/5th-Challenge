// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function(){
  var saveBtn = $('.saveBtn');
  var eventPlan = $('.description');
  var pastTime = $('.past');
  var presentTime = $('.present');
  var futureTime = $('.future');
  console.log(saveBtn);
  console.log(eventPlan);
var today = dayjs();
$('#currentDay').text(today.format('[Today is] dddd, MMMM DD'));
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    saveBtn.on('click', function(){
      // Get the parent time-block's ID
    var timeBlockId = $(this).parent().attr('id');
    // Get the user input from the corresponding textarea
    var eventContent = $(this).siblings('.description').val();
      console.log('Button Works');
      // Save the user input to local storage using the time block's ID as the keyname and the event content as the Key value
    localStorage.setItem(timeBlockId, JSON.stringify(eventContent));
    console.log(JSON.parse(localStorage.getItem(timeBlockId)));
    })

    
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    $('.time-block').each(function(index, element){
      
      currentTime = today.format('h');//assigned a variable to the current hour of the day
      
      if (index < currentTime) {
        $(element).addClass('past').removeClass('present future');
      } else if (index == currentTime) {
        $(element).addClass('present').removeClass('past future');
      } else {
        $(element).addClass('future').removeClass('past present');
      }
      
      console.log(currentTime + " is the current hour");
      console.log(element);
      console.log(index);
      console.log(index < currentTime);
      console.log(index == currentTime);
  });
      
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  //Iterates through tim blocks to add previously stored data from local storage to specific time block
  function loadEvents() {
    $('.time-block').each(function() {
      var timeBlockId = $(this).attr('id');
      var savedText = localStorage.getItem(timeBlockId);

      if (savedText !== null) {
        $(this).children('.description').val(JSON.parse(savedText));
      }
    });
  }

  loadEvents()
  });