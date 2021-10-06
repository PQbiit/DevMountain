const usernameInput = document.querySelector('#username')
const passwordInput = document.querySelector('#password')
const submitBtn = document.querySelector('#submit')
const deleteIDInput = document.querySelector('#userID')
const deleteUserBtn = document.querySelector('#delete')

deleteUserBtn.addEventListener('click',() =>{
    const userID = parseInt(deleteIDInput.value);
    axios
});

submitBtn.addEventListener('click', () => {
    const usernameVal = usernameInput.value;
    const password = passwordInput.value;
    axios.post('http://localhost:5050/api/users',{ username: usernameVal, password }).then((res) =>{
        console.log(res.data)
    }).catch((e) =>{
        console.log(err)
    });
});
