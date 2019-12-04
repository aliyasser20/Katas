let talkingCalendar = function(date) {
  let dateArray = date.split("/");

  switch (Number(dateArray[1])) {
    case 01:
      dateArray[1] = "January";
      break;
    case 02:
      dateArray[1] = "February";
      break;
    case 03:
      dateArray[1] = "March";
      break;
    case 04:
      dateArray[1] = "April";
      break;
    case 05:
      dateArray[1] = "May";
      break;
    case 06:
      dateArray[1] = "June";
      break;
    case 07:
      dateArray[1] = "July";
      break;
    case 08:
      dateArray[1] = "August";
      break;
    case 09:
      dateArray[1] = "September";
      break;
    case 10:
      dateArray[1] = "October";
      break;
    case 11:
      dateArray[1] = "November";
      break;
    case 12:
      dateArray[1] = "December";
      break;
  }
  
  let dayString = dateArray[2];
  
  if (dayString[dayString.length - 1] === "1" && dayString[0] != "1") {
    dayString += "st";
  } else if (dayString[dayString.length - 1] === "2" && dayString[0] != "1") {
    dayString += "nd";
  } else if (dayString[dayString.length - 1] === "3" && dayString[0] != "1") {
    dayString += "rd";
  } else {
    dayString += "th";
  }

  if (dayString[0] === "0") {
    dayString = dayString.substring(1);
  }

  return dateArray[1] + " " + dayString + ", " + dateArray[0];
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));