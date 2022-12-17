"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Tutorial Case
   
   Filename:   lht_events.js   

   The dayEvent array contains the HTML code of the LHT events in September
*/

var dayEvent = new Array();

dayEvent[1] = "";
dayEvent[2] = "<br /><a href='#'>Classic Cinema: Wings</a><br />7 pm <br />$5";
dayEvent[3] = "<br /><a href='#'>The Future is Prologue</a><br />8 pm<br />$18/$24/$36";
dayEvent[4] = "<br /><a href='#'>American Favorites</a><br />7:30 pm<br />$24/$36/$48";
dayEvent[5] = "<br /><a href='#'>Classics Brunch</a><br />11 am<br />$12";
dayEvent[6] = "<br /><a href='#'>LHT Jazz Band</a><br />7 pm<br />$24";
dayEvent[7] = "";


dayEvent[8] = "<br /><a href='#'>Civic Forum</a><br />7 pm<br />free";
dayEvent[9] = "<br /><a href='#'>Hamilton</a><br />7:30 pm<br />$48/$64/$88";
dayEvent[10] = "<br /><a href='#'>Hamilton</a><br />7:30 pm<br />$48/$64/$88";
dayEvent[11] = "<br /><a href='#'>Hamilton</a><br />7:30 pm<br />$48/$64/$88";
dayEvent[12] = "<br /><a href='#'>Classics Brunch</a><br />11 am<br />$12";
dayEvent[13] = "";
dayEvent[14] = "<br /><a href='#'>Hacking your Dreams</a><br />7 pm<br />free";

dayEvent[15] = "<br /><a href='#'>Hamilton</a><br />7:30 pm<br />$48/$64/$88";
dayEvent[16] = "<br /><a href='#'>Hamilton</a><br />7:30 pm<br />$48/$64/$88";
dayEvent[17] = "<br /><a href='#'>Hamilton</a><br />7:30 pm<br />$48/$64/$88";
dayEvent[18] = "<br /><a href='#'>Hamilton</a><br />2 pm<br />$48/$64/$88";
dayEvent[19] = "<br /><a href='#'>Classics Brunch</a><br />11 am<br />$12";
dayEvent[20] = "<br /><a href='#'>What Einstein Got Wrong</a><br />7 pm <br />free";
dayEvent[21] = "";

dayEvent[22] = "<br /><a href='#'>Governor's Banquet</a><br />6 pm <br />by invitation";
dayEvent[23] = "<br /><a href='#'>Classic Cinema: City Lights</a><br />7 pm<br />$5";
dayEvent[24] = "<br /><a href='#'>Stardust Memories</a><br />8 pm<br />$24/$36/$48";
dayEvent[25] = "<br /><a href='#'>Summer Concert</a><br />8 pm<br />$16/$24";
dayEvent[26] = "<br /><a href='#'>Classics Brunch</a><br />11 am<br />$12";
dayEvent[27] = "";
dayEvent[28] = "<br /><a href='#'>Children's Shakespeare</a><br />6 pm<br />free";

dayEvent[29] = "<br /><a href='#'>Kids Fair</a><br />6 pm<br />free";
dayEvent[30] = "<br /><a href='#'>Have Spacesuit, Will Travel</a><br />7:30 pm<br />$22/$36/$48";

/* Set the date displayed in the calander */
var thisDay = new Date("September 24, 2021");

/* Write the caladner to the element with the id "calander" */
document.getElementById("calendar").innerHTML = createCalendar(thisDay);

/* function to generate the calander table*/
function createCalendar(calDate) {
   var calendarHTML = "<table id='calendar_table'>";
   calendarHTML += "</table>";
   return calendarHTML;
}

/*Function to write the calendat caption */
function calCaption (calDate) {
   // monthName array contains the list of the month names
   var monthName = ["January", "February", "March", "April",
                     "May", "June", "July", "August", "September",
                     "October", "November", "December"];
   
   // Determine the current month
   var thisMonth = calDate.getMonth();

   // Determine the current year
   var thisYear = calDate.getFullYear();

   // write the caption
   return "</caption>" + monthName[thisMonth] + " " + thisYear + "</caption>";
}