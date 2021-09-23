// Set HTML elements as variables
var currentDateEl = $('#header-time');
var eventEl = $('.event');
var nineEl = $('#9am');
var tenEl = $('#10am');
var elevenEl = $('#11am');
var twelveEl = $('#12pm');
var oneEl = $('#1pm');
var twoEl = $('#2pm');
var threeEl = $('#3pm');
var fourEl = $('#4pm');
var fiveEl = $('#5pm');
var saveBtn = $('.btn');

// Assign a time to each hour row
nineTime = moment().format('9:00', 'h:mm');
tenTime = moment().format('10:00', 'h:mm');
elevenTime = moment().format('11:00', 'h:mm');
twelveTime = moment().format('12:00', 'h:mm');
oneTime = moment().format('12:00', 'h:mm');
twoTime = moment().format('14:00', 'h:mm');
threeTime = moment().format('15:00', 'h:mm');
fourTime = moment().format('16:00', 'h:mm');
fiveTime = moment().format('17:00', 'h:mm');

// Set current date and time as variables
var currentDate = moment().format('MMM DD, YYYY');
var currentTime = moment().format('h:mm');

// Change header element text to current time
currentDateEl.text(currentDate);

// Change eventEL box change color based on time
if (currentTime.isBefore()) {
    console.log(1)
};

// Set save button event listener
for (i=0; i<9; i++) {
    saveBtn.on('click', storeEvent);
}

// Store input values locally
var storeEvent = function () {

}

// Populate inputs initial values with locally stored values
var getEvent = function () {

}
