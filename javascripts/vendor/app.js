jQuery(document).ready(function ($) {

twelfhourformat = false;
showseconds = true;

/* REFRESH PAGE EVERY FIVE MINUTES ---- */
window.setTimeout('location.reload(true)', 300000);
/* /REFRESH PAGE EVERY FIVE MINUTES ---- */

	/* CLOCK ---------------------------------
	thanks to @Bluxart :: http://www.alessioatzeni.com/blog/css3-digital-clock-with-jquery/

	Put this into a text widget to display the time & date:
	
	<div class="clock">
		<ul>
			<li id="hours"> </li>
			<li id="point">:</li>
			<li id="min"> </li>
			<li id="point">:</li>
			<li id="sec"> </li>
		</ul>
		<div id="Date"></div>
	</div>
	---------------------------------*/

// Create two variable with the names of the months and days in an array
var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec" ]; 
var dayNames= ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

// Create a newDate() object
var newDate = new Date();
// Extract the current date from Date object
newDate.setDate(newDate.getDate());
// Output the day, date, month and year    
$('#Date').html(dayNames[newDate.getDay()] + ", " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

// update clock every second
setInterval(function() {updateClock()}, 1000);

// update directly at startup
updateClock();

function updateClock() {
        var d = new Date();

	// show 12 or 24h format
        if (twelfhourformat) {
                $("#hours").html(d.getHours() % 12);
        } else {
                $("#hours").html(d.getHours());
        }

        // Add a leading zero to the minutes value
        $("#min").html((d.getMinutes() < 10 ? "0" : "") + d.getMinutes());

        $("#sec").html((d.getSeconds() < 10? "0" : "") + d.getSeconds());
}

// hide seconds if we don't want to see them
if (!showseconds) {
        $("#sec").hide().prev().hide();

}


});
