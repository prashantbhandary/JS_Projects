const clock= document.getElementById("clock")

// document.querySelector("#clock")

function update(){
    let date =new Date()
    const timeString  = date.toLocaleTimeString();
    const dateString  = date.toDateString();

    clock.innerHTML = ` ${timeString} <br> ${dateString}`

}
setInterval(update,1000)
update(); // Initial call to display time immediately
