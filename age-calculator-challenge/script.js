function calculateAge() {
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;

    var today = new Date();
    var birthdate = new Date(year, month - 1, day);

    var errorMessages = document.querySelectorAll('.error-message');
    var labels = document.querySelectorAll('label');
    var inputFields = document.querySelectorAll('input[type="text"]');

    if (year == '' && month == '' && day == '') {
        //document.getElementById("result").innerHTML = "Invalid date";
        console.log('The fields are required');
        errorMessages.forEach((element) => {
            element.style.display = "block";
            element.textContent = "This field is required";
        });
        labels.forEach((element) => {
            element.style.color = "rgb(255, 87, 87)";
        });
        inputFields.forEach((element) => {
            element.style.borderColor = "rgb(255, 87, 87)";
        });

        document.querySelectorAll('.print span').forEach((span) => {
            span.textContent = '--'
        });
        return;
    }

    if (birthdate.getFullYear() != year && birthdate.getMonth() + 1 != month && birthdate.getDate() != day) {
        //document.getElementById("result").innerHTML = "Invalid date";
        console.log('The date is invalid');
        errorMessages.forEach((element) => {
            element.style.display = "block";
        });
        labels.forEach((element) => {
            element.style.color = "rgb(255, 87, 87)";
        });
        inputFields.forEach((element) => {
            element.style.borderColor = "rgb(255, 87, 87)";
        });

        document.querySelectorAll('.print span').forEach((span) => {
            span.textContent = '--'
        });
        return;
    }

    if (birthdate.getDate() != day) {
        console.log('The day is invalid');
        document.querySelector('.day-field small').style.display = "block";
        document.querySelector('.day-field label').style.color = "rgb(255, 87, 87)";
        document.querySelector('.day-field input').style.borderColor = "rgb(255, 87, 87)";

        document.querySelectorAll('.print span').forEach((span) => {
            span.textContent = '--'
        });
        return;
    }

    if (birthdate.getMonth() + 1 != month) {
        console.log('The month is invalid');
        document.querySelector('.month-field small').style.display = "block";
        document.querySelector('.month-field label').style.color = "rgb(255, 87, 87)";
        document.querySelector('.month-field input').style.borderColor = "rgb(255, 87, 87)";

        document.querySelectorAll('.print span').forEach((span) => {
            span.textContent = '--'
        });
        return;
    }

    if (birthdate.getFullYear() != year) {
        console.log('The year is invalid');
        document.querySelector('.year-field small').style.display = "block";
        document.querySelector('.year-field label').style.color = "rgb(255, 87, 87)";
        document.querySelector('.year-field input').style.borderColor = "rgb(255, 87, 87)";

        document.querySelectorAll('.print span').forEach((span) => {
            span.textContent = '--'
        });
        return;
    }

    if (birthdate > today) {
        //document.getElementById("result").innerHTML = "Birthdate is in the future";
        document.querySelector('.year-field .error-message').style.display = "block";
        document.querySelector('.year-field .error-message').textContent = "Must be in the past";
        document.querySelector('.year-field input').style.borderColor = "rgb(255, 87, 87)";
        document.querySelector('.year-field label').style.color = "rgb(255, 87, 87)";

        document.querySelectorAll('.print span').forEach((span) => {
            span.textContent = '--'
        });
        return;
    }

    var years = today.getFullYear() - birthdate.getFullYear();
    var months = today.getMonth() - birthdate.getMonth();
    var days = today.getDate() - birthdate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    //document.getElementById("result").innerHTML = "You are " + years + " years, " + months + " months, and " + days + " days old.";
    document.getElementById('calculated-year').textContent = years;
    document.getElementById('calculated-month').textContent = months;
    document.getElementById('calculated-day').textContent = days;
}

document.querySelector(".material-icons").addEventListener("click", function (event) {
    event.preventDefault();
    calculateAge();
});
