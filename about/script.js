window.onload = function onLoad() {
    var line = new ProgressBar.Line('#progress', {
        color: 'green'
    });

    function progress() {
        var now = new Date();
        var start = new Date('September 1, 2022');  // Start date
        var end = new Date('September 1, 2026');    // End date
        var done = (now - start) / (end - start);
        var percentStr = (100.0 * done).toString();

        // Truncate the decimal places based on the value of done
        if (done < 0.1) {
            percentStr = percentStr.slice(0, 9);
        } else {
            percentStr = percentStr.slice(0, 10);
        }

        document.getElementById("percent").innerHTML = "my undergrad is " + percentStr + "% complete";
        return done;
    }

    line.animate(progress());  // Number from 0.0 to 1.0

    requestAnimationFrame(update);

    function update() {
        line.set(progress());
        requestAnimationFrame(update);
    }
};
