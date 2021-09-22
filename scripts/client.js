$(document).ready(onReady)


function onReady(){
    console.log('JQ Sourced!');

$(document).on('click', '#submitButton', onSubmit);
}


function onSubmit(){

    let employee = {
        firstName: $('#firstNameInput').val(),
        lastName: $('#lastNameInput').val(),
        id: $('#idInput').val(),
        title: $('#titleInput').val(),
        annualSalary: Number ($('#annualSalaryInput').val())
    };
    console.log('new employee', employee);


    $('#employeeTable').append(`
        <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.id}</td>
            <td>${employee.title}</td>
            <td>$${employee.annualSalary}</td>
            <td>
                <button class="deleteEmployee">Delete</button>
            </td>
        </tr>


    `)


    let monthlyCost = employee.annualSalary / 12;
    $('#totalMonthly').text(monthlyCost.toFixed(2));





}