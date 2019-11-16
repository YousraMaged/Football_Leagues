export function formatName(name) {
    if(name) {
        return name.substr(name.indexOf('.') + 2)
    }
}

export function generateScore() {
    return `${Math.floor(Math.random() * 5)} : ${Math.floor(Math.random() * 5)}`
}

export function generateDate(future) {
    let startDate;
    let endDate;
    console.log(future);
    if (future === "true") {
        startDate = new Date(2020, 0, 1).getTime();
        endDate = new Date(2022, 0, 1).getTime();
    } else {
        startDate = new Date(2015, 0, 1).getTime();
        endDate = new Date(2019, 0, 1).getTime();
    }
    let spaces = (endDate - startDate);
    let timestamp = Math.round(Math.random() * spaces);
    timestamp += startDate;
    return new Date(timestamp);
}

export function formatDate(future) {
    let date = generateDate(future);
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
}
