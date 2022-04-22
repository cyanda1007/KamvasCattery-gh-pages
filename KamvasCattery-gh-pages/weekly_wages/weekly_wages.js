function weeklyWage(band, weeklyHours) {
    var RatePerHour = 0;
    switch (band) {
        case 'A':
            var hours = weeklyHours.split(',');
            let bandA = 0;
            if (hours.length === 7) {
                for (let i = 0; i < hours.length; i++) {
                    bandA += (hours[i] * 23)
                }
                RatePerHour = bandA;
            }
            else {
                RatePerHour = "missing day"
            }
            break;
        case 'B':
            var hours = weeklyHours.split(',');
            let bandB = 0;
            if (hours.length === 7) {
                for (let i = 0; i < hours.length; i++) {
                    bandB += (hours[i] * 37)
                }
                RatePerHour = bandB;
            }
            else {
                RatePerHour = "missing day"
            }
            break;
        case 'C':
            var hours = weeklyHours.split(',');
            let bandC = 0;
            if (hours.length === 7) {
                for (let i = 0; i < hours.length; i++) {
                    bandC += (hours[i] * 51)
                }
                RatePerHour = bandC;
            }
            else {
                RatePerHour = "missing day"
            }
            break;
         default:
    }
    return RatePerHour;
};