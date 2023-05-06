

let username = document.getElementById('name')
let email = document.getElementById('email');
let number = document.getElementById('number');
let gender = document.getElementById('gender');




document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    addData()
})


const addData = (e) => {
    const dataObj = {
        name: username.value,
        email: email.value,
        number: number.value,
        gender: gender.value
    }

    if (username.value === '' || email.value === '' || number.value === '' || gender.value === '') {
        alert('Please enter all fiels')
        return
    }
    else {
        alert('thanks for filling the form')
        document.getElementById("myForm").reset()
        console.log(dataObj)
    }
}