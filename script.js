// These variables within the document are being specified by specific selectors using querySelector method!


// These variables within the document are being specified by specific selectors using querySelector method!
const timeblocksElement = document.getElementById("#timeblocks");
const currentTime = dayjs().format("H"); //displays the hour

// These are my declarations in dayjs.() format for the current day at the top of my planner
document.addEventListener("DOMContentLoaded", function() {
 const currentDateElement = document.getElementById("currentDate");
 const currentDate = dayjs().format("MM/DD/YYYY");//displays in Month, Day, Year (American)
 currentDateElement.textContent = "Today's date is " + currentDate;
});


let button9 = document.querySelector(".saveBtn[data-time = '9']")
let text9 = document.querySelector("textarea[data-time = '9']")
let savedText9 = localStorage.getItem("savedText9")
let saveI9 = document.querySelector("i[data-time = '9']")
let hour9 = document.querySelector("#hour-9")

let button10 = document.querySelector(".saveBtn[data-time = '10']")
let text10 = document.querySelector("textarea[data-time = '10']")
let savedText10 = localStorage.getItem("savedText10")
let saveI10 = document.querySelector("i[data-time = '10']")
let hour10 = document.querySelector("#hour-10")

let button11 = document.querySelector(".saveBtn[data-time = '11']")
let text11 = document.querySelector("textarea[data-time = '11']")
let savedText11 = localStorage.getItem("savedText11")
let saveI11 = document.querySelector("i[data-time = '11']")
let hour11 = document.querySelector("#hour-11")

let button12 = document.querySelector(".saveBtn[data-time = '12']")
let text12 = document.querySelector("textarea[data-time = '12']")
let savedText12 = localStorage.getItem("savedText12")
let saveI12 = document.querySelector("i[data-time = '12']")
let hour12 = document.querySelector("#hour-12")

let button13 = document.querySelector(".saveBtn[data-time = '13']")
let text13 = document.querySelector("textarea[data-time = '13']")
let savedText13 = localStorage.getItem("savedText13")
let saveI13 = document.querySelector("i[data-time = '13']")
let hour13 = document.querySelector("#hour-13")

let button14 = document.querySelector(".saveBtn[data-time = '14']")
let text14 = document.querySelector("textarea[data-time = '14']")
let savedText14 = localStorage.getItem("savedText14")
let saveI14 = document.querySelector("i[data-time = '14']")
let hour14 = document.querySelector("#hour-14")

let button15 = document.querySelector(".saveBtn[data-time = '15']")
let text15 = document.querySelector("textarea[data-time = '15']")
let savedText15 = localStorage.getItem("savedText15")
let saveI15 = document.querySelector("i[data-time = '15']")
let hour15 = document.querySelector("#hour-15")

let button16 = document.querySelector(".saveBtn[data-time = '16']")
let text16 = document.querySelector("textarea[data-time = '16']")
let savedText16 = localStorage.getItem("savedText16")
let saveI16 = document.querySelector("i[data-time = '16']")
let hour16 = document.querySelector("#hour-16")

let button17 = document.querySelector(".saveBtn[data-time = '17']")
let text17 = document.querySelector("textarea[data-time = '17']")
let savedText17 = localStorage.getItem("savedText17")
let saveI17 = document.querySelector("i[data-time = '17']")
let hour17 = document.querySelector("#hour-17")

let button18 = document.querySelector(".saveBtn[data-time = '18']")
let text18 = document.querySelector("textarea[data-time = '18']")
let savedText18 = localStorage.getItem("savedText18")
let saveI18 = document.querySelector("i[data-time = '18']")
let hour18 = document.querySelector("#hour-18")


// Applies timeblocks from 9am-5pm
for (let i = 9; i <= 17; i++) {
    const timeblocksElement = document.createElement("div");
    timeblocksElement.classList.add("timeblock");


    const hourElement = document.createElement("div");
    hourElement.classList.add("hour");
    const displayHour = dayjs(i, "H").format("hA");
    hourElement.textContent = displayHour;
    timeblocksElement.appendChild(hourElement);

    const eventElement = document.createElement("textarea");
    eventElement.classList.add("event");
    const savedEvent = localStorage.getItem(displayHour);
    if (savedEvent) {
        eventElement.textContent = savedEvent;
    }
    timeblocksElement.appendChild(eventElement);

    // gives color to timeblock based on past, present, or future
    if (parseInt(document.querySelectorAll(".row")[0].dataset.time) < currentTime) {
        hour9.classList.add("past")
    }
    else if (parseInt(document.querySelectorAll(".row")[0].dataset.time) === currentTime) {
        hour9.classList.add("present")
    }
    else {
        hour9.classList.add("future")
    }

    //  
    if (parseInt(document.querySelectorAll(".row")[1].dataset.time) < currentTime) {
        hour10.classList.add("past")
    }
    else if (parseInt(document.querySelectorAll(".row")[1].dataset.time) === currentTime) {
        hour10.classList.add("present")
    }
    else {
        hour10.classList.add("future")
    }

    //

    if (parseInt(document.querySelectorAll(".row")[2].dataset.time) < currentTime) {
        hour11.classList.add("past")
    }
    else if (parseInt(document.querySelectorAll(".row")[2].dataset.time) === currentTime) {
        hour11.classList.add("present")
    }
    else {
        hour11.classList.add("future")
    }

    //

    if (parseInt(document.querySelectorAll(".row")[3].dataset.time) < currentTime) {
        hour12.classList.add("past")
    }
    else if (parseInt(document.querySelectorAll(".row")[3].dataset.time) === currentTime) {
        hour12.classList.add("present")
    }
    else {
        hour12.classList.add("future")
    }

    //

    if (13 < currentTime) {
        hour13.classList.add("past")
    }
    else if (13 === currentTime) {
        hour13.classList.add("present")
    }
    else {
        hour13.classList.add("future")
    }

    //

    if (14 < currentTime) {
        hour14.classList.add("past")
    }
    else if (14 === currentTime) {
        hour14.classList.add("present")
    }
    else {
        hour14.classList.add("future")
    }

    //

    if (15 < currentTime) {
        hour15.classList.add("past")
    }
    else if (15 === currentTime) {
        hour15.classList.add("present")
    }
    else {
        hour15.classList.add("future")
    }

    //

    if (16 < currentTime) {
        hour16.classList.add("past")
    }
    else if (16 === currentTime) {
        hour16.classList.add("present")
    }
    else {
        hour16.classList.add("future")
    }

    //

    if (17 < currentTime) {
        hour17.classList.add("past")
    }
    else if (17 === currentTime) {
        hour17.classList.add("present")
    }
    else {
        hour17.classList.add("future")
    }
};



    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?


    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
