
function getJumboStyle(imgURL: string) {
    return ({
        backgroundImage: "url(" + imgURL + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "white"
    });
}

export default getJumboStyle;