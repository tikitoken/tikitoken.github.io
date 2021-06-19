export default function TimeDifference(current, previous) {

  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;

  var elapsed = current - previous;

  if (elapsed < msPerMinute) {
      const secs = Math.round(elapsed/1000)
      return secs > 1 ? secs + ' Seconds Ago' : secs + ' Second Ago';   
  }

  else if (elapsed < msPerHour) {
      const mins = Math.round(elapsed/msPerMinute)
      return mins > 1 ? mins + ' Minutes Ago' : mins + ' Minute Ago';   
  }

  else if (elapsed < msPerDay ) {
      const hours = Math.round(elapsed/msPerHour )
      return hours > 1 ? hours + ' Hours Ago' : hours + ' Hour Ago';  
  }

  else if (elapsed < msPerMonth) {
      return '~ ' + Math.round(elapsed/msPerDay) + ' days Ago';   
  }

  else if (elapsed < msPerYear) {
      return '~ ' + Math.round(elapsed/msPerMonth) + ' months Ago';   
  }

  else {
      return '~ ' + Math.round(elapsed/msPerYear ) + ' years Ago';   
  }
}