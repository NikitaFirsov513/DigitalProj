export default async function loginFetch(name, pass) {

    //console.log(name)
    //alert(name + "---" + pass);


    const req = await fetch(`http://192.168.0.111:80/digital/hs/category/users/login`,
        {
            method: 'POST',
            body:
                JSON.stringify({
                    "Email": name,
                    "Pass": pass
                })
        });

    return req

}