$(function () {
//display current day at top (maybe time also)  
function getTime () {
    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY h:mm:ss a"))
    setInterval(getTime, 1000)
}

getTime()

//save value of text area for each timeblock to local storage
$(".saveBtn").click(function (){
    
})

//set color based on past present or future
//render frm local storage on page load

});