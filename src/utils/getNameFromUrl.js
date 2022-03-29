export default function convertNameForUrl(name) {


    const newName = name.split("-").join(" ");
    return newName;


}