//tell jq to ready once dom is loaded
$(document).ready(onReady);


//✅ hit submit and add new row of data to the form/ clear data from inputs
//calculate monthly cost and add it to total
//if it exceeds 20,000 add a red backgroung to the monthly cost
//✅ add delete button that removes employee(don't need to remove cost)

//STRETCH:
//remove cost when employee is removed

let totalMonthly = 0

function onReady() {
    console.log('onReady is go!')

    $('.submit-button').on('click', submitData)

    $('.employee-data').on('click', '.delete', deleteData)

    $('.submit-button').on('click', addToTotalMonthly)

}

function submitData(event) {
    event.preventDefault()
    console.log('submitting!')

    // totalMonthly = salaryVal
    // totalMonthly++
    // console.log('total monthly is now', totalMonthly)

    // $('#add-to-total').text(totalMonthly)


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

    //$('#add-to-total').text(Number($('#add-to-total').text()  + salaryVal))
}

function deleteData() {
    console.log('delete data')
  
    //remove <tr> from <tbody>
    //button is in a <td> that is in a <tr>
    $(this).parent().parent().remove()
  
    // //setting todoCOunt on removal
    // todoCount--//re define this to decrement before we call it again
    // $('#todo-count').text(todoCount)
}    
    
// function addRedCount () {
//     console.log('red count + 1')
//     $("#red-count").text(parseInt($("#red-count").text()) + 1)
// }

function addToTotalMonthly() {
    console.log('add to total function')
    $('#add-to-total').text(Number($('#add-to-total').text() + salaryVal))
}