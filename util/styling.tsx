
function getJumboStyle(imgURL: string) {
    return ({
        backgroundImage: "url('" + imgURL + "')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "white"
    });
}

export function randInt(min:  number,  max: number) {
    return Math.floor(Math.random() * (max -  min + 1) + min);
}

export default getJumboStyle;