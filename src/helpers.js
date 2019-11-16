// Removes numbering from title
// 1.League name -> League name
export function formatName(name) {
    if(name) {
        return name.substr(name.indexOf('.') + 2)
    }
}

// Generate random numbers between 1 - 5
export function generateScore() {
    return `${Math.floor(Math.random() * 5)} : ${Math.floor(Math.random() * 5)}`
}

// Generate random future or paste date
export function generateDate(future) {
    let startDate;
    let endDate;
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

// Formats date to DD-MM-YYYY
export function formatDate(future) {
    let date = generateDate(future);
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
}
