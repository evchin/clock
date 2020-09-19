function startTime() {
    
    // retrieve necessary variables
    var time = new Date();
    var year = time.getFullYear();
    var day = time.getDate();
    var hr = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();

    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;

    // retrieve month name
    var months = new Array();
    months[0] = "january";
    months[1] = "february";
    months[2] = "march";
    months[3] = "april";
    months[4] = "may";
    months[5] = "june";
    months[6] = "july";
    months[7] = "august";
    months[8] = "september";
    months[9] = "october";
    months[10] = "november";
    months[11] = "december";
    var month = months[time.getMonth()];

    document.querySelector("#month").innerHTML = month;
    document.querySelector("#day").innerHTML = day;
    document.querySelector("#year").innerHTML = year;

    document.querySelector("#hour").innerHTML = hr;
    document.querySelector("#minute").innerHTML = min;
    document.querySelector("#second").innerHTML = sec;

    var t = setTimeout(startTime, 100);
}