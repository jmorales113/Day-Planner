$(document).ready(function(){
    var currentDate =  moment().format("MMMM Do YYYY, h:mm:ss a")
    var dateField = $("#currentDayTime")
    dateField.text(currentDate)

    })

    $(".saveButton").click(function(){
        document.clear()
        location.reload()
    })

    var currentDateTime = new Date().getHours()

    if (currentDateTime > 9) {
        $("#inputField").addClass("pastTime")

        } else if (currentDateTime >= 9 && currentDateTime < 10) {
            $("#inputField").addClass("presentTime")

        } else if (currentDateTime < 9) {
            $("#inputField").addClass("futureTime")
        }
        