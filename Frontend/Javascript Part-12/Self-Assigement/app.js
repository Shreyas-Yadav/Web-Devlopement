
let sftime = document.querySelector('#sftime');
let indtime = document.querySelector('#indtime');
let sfdateInfo = new Date();
let indDateInfo = new Date();


function incrementTime() {
    sfdateInfo.setSeconds(sfdateInfo.getSeconds() + 1);
    indDateInfo.setSeconds(indDateInfo.getSeconds() + 1);

    indtime.innerHTML = indDateInfo.toLocaleDateString() + " " + indDateInfo.toLocaleTimeString();
    sftime.innerText = sfdateInfo.toLocaleDateString() + " " + sfdateInfo.toLocaleTimeString();
}




async function setDate(sfdateInfo) {
    hours = sfdateInfo.getHours();
    min = sfdateInfo.getMinutes();
    sfdateInfo.setHours(hours - 12);
    sfdateInfo.setMinutes(min - 30);

    sftime.innerText = sfdateInfo.toLocaleDateString() + " " + sfdateInfo.toLocaleTimeString();
    indtime.innerText = indDateInfo.toLocaleDateString() + " " + indDateInfo.toLocaleTimeString();
}


setDate(sfdateInfo);
setInterval(incrementTime, 1000);