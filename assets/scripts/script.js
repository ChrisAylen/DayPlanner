
var currentDayEl = $("#currentDay");
//var nineAmSlot = $("#hour-9-text");
//var theHour=9;
//var timeSlot=$("#hour-" + theHour + "-text");

function displayTime() {
    var rightNow = moment().format('MMMM DD, YYYY [at] h a');
    currentDayEl.text(rightNow);
}
//Sets the colour of the time slot based on the time of day
function pastPresentFuture() {
    for (var theHour = 9; theHour < 18; theHour++) {
        
        var timeSlot = $("#hour-" + theHour + "-text");

        var hourIsNow = moment(theHour + ":00", "HH:mm").isSame(moment());
        var hourIsAfter = moment(theHour + ":00", "HH:mm").isAfter(moment());
        var hourIsBefore = moment(theHour + ":00", "HH:mm").isBefore(moment());
        if(hourIsNow) {
            timeSlot.addClass("present");
        }
        else if (hourIsBefore){
            timeSlot.addClass("past");
        }
        else if (hourIsAfter){
            timeSlot.addClass("future");
        }

        //timeSlot.addClass("past");    //setAttribute("class", "past");
        //timeSlot.text(hourIsBefore);
        
    }
    //moment().startOf('hour').fromNow()
}

function saveCalendar() {

}


displayTime();
pastPresentFuture();
