function isAdikteevDNTCookiePresent() {
    return document.cookie.split(';').filter(function (item) {
        return /^\s*dnt=.*/i.test(item)
    }).length == 1;
}

function reqListener() {
    var targetingSwitch = document.getElementById("targeting-switch-status");
    targetingSwitch.checked = !isAdikteevDNTCookiePresent();
}

$(document).ready(function () {
    var targetingSwitch = document.getElementById("targeting-switch-status");
    targetingSwitch.checked = !isAdikteevDNTCookiePresent();
    targetingSwitch.addEventListener('change', function () {
        var endpointURL;
        if (this.checked) {
            endpointURL = "https://serve-adserver.adikteev.com/api/opt-in";
        } else {
            endpointURL = "https://serve-adserver.adikteev.com/api/opt-out";
        }

        oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);
        oReq.open("POST", endpointURL);
        oReq.withCredentials = true;
        oReq.send();
    });
});
