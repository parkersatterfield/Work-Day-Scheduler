// Set HTML elements as variables
var currentDateEl = $('#header-time');
var eventEl = $('.event');
var saveButton = [$('#save1'),$('#save2'),$('#save3'),$('#save4'),$('#save5'),$('#save6'),$('#save7'),$('#save8'),$('#save9'), ]
var input = [$('#input1'), $('#input2'),$('#input3'),$('#input4'),$('#input5'),$('#input6'),$('#input7'),$('#input8'),$('#input9')]

// Set current date and time as variables
var currentDate = moment().format('MMM DD, YYYY');
var currentTime = moment().format('H:mm');
var currentHour = moment().format('H:00');

// Change header element text to current time
currentDateEl.text(currentDate);

// Create array of objects to represent rows on scheduler
var rows = [
    rowNine = {
        element: $('#9am'),
        time: moment().format('09:00', 'h:mm'),
        event: '',
        eventEl: $('#input1')
    },
    rowTen = {
        element: $('#10am'),
        time: moment().format('10:00', 'h:mm'),
        event: '',
        eventEl: $('#input2')
    },
    rowEleven = {
        element: $('#11am'),
        time: moment().format('10:00', 'h:mm'),
        event: '',
        eventEl: $('#input3')
    },
    rowTwelve = {
        element: $('#12pm'),
        time: moment().format('12:00', 'h:mm'),
        event: '',
        eventEl: $('#input4')
    },
    rowOne = {
        element: $('#1pm'),
        time: moment().format('13:00', 'h:mm'),
        event: '',
        eventEl: $('#input5')
    },
    rowTwo = {
        element: $('#2pm'),
        time: moment().format('14:00', 'h:mm'),
        event: '',
        eventEl: $('#input6')
    },
    rowThree = {
        element: $('#3pm'),
        time: moment().format('15:00', 'h:mm'),
        event: '',
        eventEl: $('#input7')
    },
    rowFour = {
        element: $('#4pm'),
        time: moment().format('16:00', 'h:mm'),
        event: '',
        eventEl: $('#input8')
    },
    rowFive = {
        element: $('#5pm'),
        time: moment().format('17:00', 'h:mm'),
        event: '',
        eventEl: $('#input9')
    }
];

// Change event element color based on current time
for (i = 0; i<rows.length; i++) {
    if (currentHour > rows[i].time) {
        rows[i].element.css('background-color', 'gray');
    }
    if (currentHour == rows[i].time) {
        rows[i].element.css('background-color', 'red');
    }
}

var eventsList = [];

for (j=0; j<saveButton.length;j++) {
    saveButton[j].on('click', function() {
        var eventsList = [];
        for (i = 0; i<rows.length; i++) {
            rows[i].event = input[i].val();
            eventsList.push(rows[i].event.valueOf());
            localStorage.setItem('event', JSON.stringify(eventsList));
            console.log(rows[i].event);
        }
    })
};

// Populate inputs initial values with locally stored values
var getEvent = function () {
    var retrieved = JSON.parse(localStorage.getItem('event'));
    for (i = 0; i<rows.length; i++) {
        eventsList.push(retrieved[i]);
        rows[i].eventEl.attr('value', eventsList[i]);
    }
}

getEvent();
