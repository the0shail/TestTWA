export function parse(string) {
    let p = {}

    string.replace("?", "").split("&").forEach(item => {
        let x = item.split("=")
        p[decodeURIComponent(x[0])] = decodeURIComponent(x[1])
    })

    return p;
}