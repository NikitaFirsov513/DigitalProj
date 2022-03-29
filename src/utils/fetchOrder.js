export default async function fetchOrder(user, cardList) {
    console.log("fetchOrder")




    const req = await fetch(`http://192.168.0.111:80/digital/hs/оrders/create`,
        {
            method: 'POST',
            body:
                JSON.stringify(
                    {
                        "Пользователь": user['Наименование'],
                        "ДополнительнаяИнформация": "Пока нет",
                        "Товары": cardList
                    }
                )
        })



    return req



}