export async function createUser(user) {


    const req = await fetch(`http://192.168.0.111:80/digital/hs/users/create`,
        {
            method: 'POST',
            body:
                JSON.stringify([{
                    "Наименование": user.username,
                    "Email": user.email,
                    "Адресс": user.address,
                    "Пароль": user.pass1
                }])
        });



    return req



}