export default function getTitle(name: string) {

    const spaces: Array<string> = name.split(" ")
    let upper_case: string = ""
    for(let s of spaces) {
        upper_case += s.charAt(0).toUpperCase() + s.slice(1) + " "
    }
    return upper_case
}
