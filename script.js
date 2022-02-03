let currentDayEl = $("#currentDay");
let eventEl = "";  
let eventid = "";
let events = "";  
let hoursOfDay = ["0900", "1000", "1100", "1200", "1300", "1400", "1500", "1600", "1700"];
let hourTime = 0;  let previousHourTime = 0;
let presentDate = "";
let presentDay = moment();
let presentHour = presentDay.format("Hour");
let presentMin = "";
let rowEl = ""; 
let rowid = "";
let saveBtnEl = $("button");
let textareaEl = $("textarea");

//timer showing date and time
function currentTimeOfDay() {
  presentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  currentDayEl.html(presentDate);
  presentMin = moment().format("Min");
  presentHour = parseInt(moment().format("Hour"));
  if(parseInt(presentMin)+0 === 0 && presentHour > previousHourTime){
    setBGClass();
  }
}
compareHour()
function compareHour(){
    let currentHour
    $(".scheduledevents").each(function(){
      let calendarHour = parseInt($(this).children().attr("id"))
      console.log($(this).children().attr("id"))
    })
  //need to get current hour and compare with each hour on calendar
  //if the current hour is > the hour on calendar, then give it a class that will change BG color to grey
  //if the current hour is = the hour on calendar, then give it a class that will change BG color to red
  //if the current hour is < the hour on calendar, then give it a class that will change BG color to green


}
//saves events that user puts into the time box
function priorityList() {
  for(let i=0; i< hoursOfDay.length; i++){
    eventid = "eventat" + hoursOfDay[i];
    eventEl = $("#" + eventid);
    events = localStorage.getItem(eventid);
    eventEl.html(events);
  }
}
//saves events that user puts into the time box
function saveEvent(timevalue, textContent) {
  eventid = "eventat" + timevalue;
  eventEl = $("#" + eventid);
  events = textContent;
  localStorage.setItem(eventid, events);
}
//allows user to click save button
saveBtnEl.click(function(event){
  let saveToday = event.target.getAttribute('data-time');
  let textContent = $(event.target).parent().siblings('.p-0').children()[0].value
  saveEvent(saveToday, textContent);
});

priorityList();

setInterval(currentTimeOfDay,1000);