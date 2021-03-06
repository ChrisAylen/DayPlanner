
var currentDayEl = $("#currentDay");
function displayTime() {
    var rightNow = moment().format('MMMM DD, YYYY [at] h a');
    currentDayEl.text(rightNow);
}
//Sets the colour of the time slot based on the time of day
function pastPresentFuture() {
    //Added this as I could not get  moment().isSame to work
    var currentHour = moment().hours();
    for (var theHour = 9; theHour < 18; theHour++) {
        
        var timeSlot = $("#hour-" + theHour + "-text");
        //var i =moment().isSame
        //var timeFromTopOfHour=moment(theHour, "HH").startOf('hour').fromNow(); 
        var hourIsAfter = moment(theHour + ":00", "HH:mm").isAfter(moment());
        var hourIsBefore = moment(theHour + ":00", "HH:mm").isBefore(moment());
        if(currentHour==theHour){
            timeSlot.addClass("present");
        }
        else if (hourIsBefore){
            timeSlot.addClass("past");
        }
        else if (hourIsAfter){
            timeSlot.addClass("future");
        }


        
    }
}

//$document.ready(function () {
$('.saveBtn').on('click', saveCalendar);


function saveCalendar(){
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, value);
}

function loadFromLocalStorage() {
    for (var theHour = 9; theHour < 18; theHour++) {
        var timeSlot = $("#hour-" + theHour );
        var timeTextSlot = $("#hour-" + theHour + "-text");
        var time = timeSlot.attr('id');
        var value = localStorage.getItem(time);
        timeTextSlot.val(value);
    }
}

displayTime();
pastPresentFuture();
loadFromLocalStorage();
