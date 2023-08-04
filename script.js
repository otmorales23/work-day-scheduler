$(function () {
    //display current day at top (maybe time also)  
    function getTime() {
        $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY h:mm:ss a"))
        setInterval(getTime, 1000)
    }

    getTime()

    //save value of text area for each timeblock to local storage
    $(".saveBtn").click(function () {
        // let dataHour = $(this).parent().data("hour")
        // console.log(dataHour);

        let timeblockHourId = $(this).parent().attr("id")
        let userInput = $(this).prev().val()
        console.log(timeblockHourId);
        console.log(userInput);
        localStorage.setItem(timeblockHourId, userInput)
    })

    //set color based on past present or future
    function setColor() {
        let currentHour = dayjs().hour()
        console.log(currentHour);
        $(".time-block").each(function () {
            let timeblockHour = $(this).data("hour")
            console.log(timeblockHour);

            if (timeblockHour === currentHour) {
                $(this).addClass("present");
            } else if (timeblockHour < currentHour) {
                $(this).addClass("past");
            } else {
                $(this).addClass("future");
            }
        })

    }

    setColor()

    //render frm local storage on page load

});