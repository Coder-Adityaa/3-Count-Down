
const endDate = "01 Oct 2023 12:00 PM";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");


function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;

    if (diff < 0) {
        return
    }
    // Convert into days, Hours, minuts, Seconds 
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor((diff / 3600) % 24);
    inputs[2].value = Math.floor((diff / 60) % 60);
    inputs[3].value = Math.floor(diff % 60);
}

// Intial call
clock();

setInterval(() => {
    clock();
}, 1000);

/*
     1 day = 24hr,
     1hr = 60min,
     1min = 60sec
*/