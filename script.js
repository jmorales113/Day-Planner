$(document).ready(function(){
    var currentDate =  moment().format("MMMM Do YYYY, h:mm:ss a")
    var dateField = $("#currentDayTime")
    dateField.text(currentDate)

})