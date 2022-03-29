import { fork, put, call, takeEvery } from 'redux-saga/effects'



export function* authSaga(name, pass) {
    console.log("authSaga")
    yield takeEvery({ 'Email': name, 'Pass': pass }, login);

}

async function* login(loginData) {

    console.log("login")


    const req = await fetch(`http://localhost:80/digital/hs/users/auth`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(loginData)
        });

    if (req.ok) {
        let data = await req.json();
        alert(data)
        return data
    }
    else{
        alert("Ошибка HTTP: " + req.status);
    }



}