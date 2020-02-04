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

    if (currentDateTime > 10) {
            $("#inputField1").addClass("pastTime")
    
        } else if (currentDateTime >= 10 && currentDateTime < 11) {
                $("#inputField1").addClass("presentTime")
    
        } else if (currentDateTime < 10) {
                $("#inputField1").addClass("futureTime")
        }
    
        if (currentDateTime > 11) {
            $("#inputField2").addClass("pastTime")
    
        } else if (currentDateTime >= 11 && currentDateTime < 12) {
                $("#inputField2").addClass("presentTime")
    
        } else if (currentDateTime < 11) {
                $("#inputField2").addClass("futureTime")
        }

        if (currentDateTime > 12) {
            $("#inputField3").addClass("pastTime")
    
        } else if (currentDateTime >= 12 && currentDateTime < 13) {
                $("#inputField3").addClass("presentTime")
    
        } else if (currentDateTime < 12) {
                $("#inputField3").addClass("futureTime")
        }

        if (currentDateTime > 13) {
            $("#inputField4").addClass("pastTime")
    
        } else if (currentDateTime >= 13 && currentDateTime < 14) {
                $("#inputField4").addClass("presentTime")
    
        } else if (currentDateTime < 13) {
                $("#inputField4").addClass("futureTime")
        }

        if (currentDateTime > 14) {
            $("#inputField5").addClass("pastTime")
    
        } else if (currentDateTime >= 14 && currentDateTime < 15) {
                $("#inputField5").addClass("presentTime")
    
        } else if (currentDateTime < 14) {
                $("#inputField5").addClass("futureTime")
        }

        if (currentDateTime > 15) {
            $("#inputField6").addClass("pastTime")
    
        } else if (currentDateTime >= 15 && currentDateTime < 16) {
                $("#inputField6").addClass("presentTime")
    
        } else if (currentDateTime < 15) {
                $("#inputField6").addClass("futureTime")
        }

        if (currentDateTime > 16) {
            $("#inputField7").addClass("pastTime")
    
        } else if (currentDateTime >= 16 && currentDateTime < 17) {
                $("#inputField7").addClass("presentTime")
    
        } else if (currentDateTime < 16) {
                $("#inputField7").addClass("futureTime")
        }

        if (currentDateTime > 17) {
            $("#inputField8").addClass("pastTime")
    
        } else if (currentDateTime >= 17 && currentDateTime < 18) {
                $("#inputField8").addClass("presentTime")
    
        } else if (currentDateTime < 17) {
                $("#inputField8").addClass("futureTime")
        }



        