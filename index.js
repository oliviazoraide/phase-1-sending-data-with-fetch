function submitData(userName, userEmail) {
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        })
    }
    
    return fetch("http://localhost:3000/users", configurationObject) 
    .then(resp => resp.json())
    .then(obj => document.body.innerHTML = obj.id)
    .catch(error => document.body.innerHTML = error.message)
}
