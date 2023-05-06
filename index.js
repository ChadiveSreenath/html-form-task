

let username = document.getElementById('name')
let email = document.getElementById('email');
let number = document.getElementById('number');
let gender = document.getElementById('gender');


const apiToken = 'patic68uHmCo4HxM5.03ae8ae480e6c7f44c1ec5b7465cfc3a0338862528aa0aff82bd86adc5931264'

const PostReq = (formData) => {
    fetch(` https://api.airtable.com/v0/app7p1MFqcBHtIwfh/tableTask`, {
        method: 'POST',
        body: JSON.stringify({
            "records": [
                {
                    "fields": formData
                }
            ]
        }),
        headers: {
            "Authorization": `Bearer ${apiToken}`,
            "Content-Type": "application/json"
        }
    }).then((response) => console.log(response))
        .catch((error) => console.log(error))
}

const addData = (event) => {
    event.preventDefault();
    if (username.value === '' || email.value === '' || number.value === '' || gender.value === '') {
        alert('Please enter all fiels')
        return
    }
    else {
        alert('thanks for filling the form data is added to Airtable')
        const formData = {
            'name': username.value,
            'email': email.value,
            'number': number.value,
            'gender': gender.value
        }
        PostReq(formData)
        document.getElementById("myForm").reset()
    }
}

document.getElementById('submit').addEventListener('click', addData)