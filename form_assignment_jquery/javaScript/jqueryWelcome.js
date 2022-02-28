

$(function () {


    $.get('/app/data', function (data, status) {


        let td = $('<td></td>').text((data.fname).toUpperCase());
        $('#fname').append(td);

        td=$('<td></td>').text((data.lname).toUpperCase());
        $('#lname').append(td);

        td=$('<td></td>').text((data.age).toUpperCase());
        $('#age').append(td);

        td=$('<td></td>').text(data.number);
        $('#pn').append(td);

        td=$('<td></td>').text(data.email);
        $('#email').append(td);

        td=$('<td></td>').text(data.salary);
        $('#sal').append(td);

        td=$('<td></td>').text(data.dept);
        $('#dept').append(td);

        td=$('<td></td>').text(data.date);
        $('#date').append(td);
        console.log(data.date);



    });




});