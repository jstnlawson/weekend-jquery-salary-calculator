//tell jq to ready once dom is loaded
$(document).ready(onReady);


//hit submit and add new row of data to the form
//calculate monthly cost and add it to total
//if it exceeds 20,000 add a red backgroung to the monthly cost
//add delete button that removes employee(don't need to remove cost)

function onReady() {
    console.log('onReady is go!')




}

function submitData(event) {
    event.preventDefault()
    console.log('submitting!')


    let firstNameVal = $('#first-input').val()
    let lastNameVal = $('#last-input').val()
    let idVal = $('#id-input').val()
    let titleVal = $('#title-input').val()
    let salaryVal = $('#salary-input').val()

    // let formattedEmployeeData = `${firstNameVal} (${lastNameVal} ${idVal} ${titleVal} ${salaryVal})` 

    $('.employee-data').append(`
        <td>${firstNameVal}</td>
        <td>${lastNameVal}</td>
        <td>${idVal}</td>
        <td>${titleVal}</td>
        <td>${salaryVal}</td>
        <td><button class="delete">delete</button></td>
    `)


}