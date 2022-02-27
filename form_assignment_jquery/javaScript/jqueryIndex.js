$(function () {
    function checkAge(age) {
        if (age <= 0) {
            alert('Enter Correct Age');
            return false;
        }
        return true;
    }
    function checkPhone(number) {
        if (number.length < 10 || number.length > 10) {
            alert('Enter Correct Phone Number');
            return false;
        }
        return true;
    }

    function checkSal(salary) {
        if (salary < 0) {
            alert('Enter Correct Salary');
            return false;
        }
        return true;
    }

     $('#submit').on('click', function () {

        const age = $('#age').val();
        const number = $('#number').val();
        const salary = $('#salary').val();

        if (checkAge(age) == true && checkPhone(number) == true && checkSal(salary) == true) {
            return true;
        }
        else
            return false;
    })

});