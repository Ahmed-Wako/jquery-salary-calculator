$(document).ready(onReady)
let monthlyCost = 4000+4833.33 + 6666.66

$(document).ready(() => {
    $('#monthlyCost').text(`Total Monthly Cost: $${monthlyCost.toFixed(2)}`)
})

function onReady(){
    console.log('JQ Sourced!');

$(document).on('click', '#submitButton', onSubmit);
}


function onDelete(event){
    $(event.target.parentNode.parentNode).remove()
}

function onSubmit(){

    let employee = {
        firstName: $('#firstNameInput').val(),
        lastName: $('#lastNameInput').val(),
        id: $('#idInput').val(),
        title: $('#titleInput').val(),
        annualSalary: Number ($('#annualSalaryInput').val())
    };

        $('#firstNameInput').val("")
        $('#lastNameInput').val("")
        $('#idInput').val("")
        $('#titleInput').val("")
        $('#annualSalaryInput').val("")

    console.log('new employee', employee);


    $('#employeeTable').append(`
        <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.id}</td>
            <td>${employee.title}</td>
            <td>$${employee.annualSalary}</td>
            <td>
                <button class="deleteEmployee" onclick = 'onDelete(event)'>Delete</button>
            </td>
        </tr>
    `)

    


    monthlyCost += employee.annualSalary / 12;
    $('#monthlyCost').text(`Total Monthly Cost: $${monthlyCost.toFixed(2)}`);

    if(monthlyCost > 20000){
        $('#monthlyCost').css("background-color","red")
    }





}