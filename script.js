//tell jq to ready once dom is loaded
$(document).ready(onReady);


//✅ hit submit and add new row of data to the form/ clear data from inputs
//calculate monthly cost and add it to total
//if it exceeds 20,000 add a red backgroung to the monthly cost
//add delete button that removes employee(don't need to remove cost)

function onReady() {
    console.log('onReady is go!')

    $('.submit-button').on('click', submitData)




}

function submitData(event) {
    event.preventDefault()
    console.log('submitting!')


    let firstNameVal = $('#first-input').val()
    let lastNameVal = $('#last-input').val()
    let idVal = $('#id-input').val()
    let titleVal = $('#title-input').val()
    let salaryVal = $('#salary-input').val()

    //let formattedEmployeeData = `${firstNameVal} (${lastNameVal} ${idVal} ${titleVal} ${salaryVal})` 
    //I'm not sure how to do the syntax here so I did it the long way below

    $('.employee-data').append(`
        <tr>
            <td>${firstNameVal}</td>
            <td>${lastNameVal}</td>
            <td>${idVal}</td>
            <td>${titleVal}</td>
            <td>${salaryVal}</td>
            <td><button class="delete">delete</button></td>
        </tr>
    `)

    $('#first-input').val('')
    $('#last-input').val('')
    $('#id-input').val('')
    $('#title-input').val('')
    $('#salary-input').val('')


}
       