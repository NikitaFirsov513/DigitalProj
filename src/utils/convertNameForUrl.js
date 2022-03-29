export default function convertNameForUrl(name) {



    const urlName = name.split(" ").join("-");
    return urlName;


}