import validator from 'validator';

export function isEmpty(object) {

    const isNotEmpty = Object.values(object).every(elem => (elem !== null && elem !== ""))

    //console.log(isNotEmpty)

    return isNotEmpty;

}


export function checkUsername(name) {

    /*console.log(validator.isAlphanumeric(name.split(' ').join(""), 'ru-RU', /" "/))
    console.log(name.split(' ').length === 3)
    console.log(name.length > 10)
*/

    return (
        validator.isAlphanumeric(name.split(' ').join(""), 'ru-RU', /" "/)
        &&
        name.split(' ').length === 3
        &&
        name.length > 10
    )

}

export function checkPass(pass1, pass2) {
    return (

        pass1 === pass2
        &&
        pass1.length > 8

    )
}





