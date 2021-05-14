export const dateValidation = (date) => {
    return new Date(date).toUTCString()
}

export const numberSeparator = (num) => {
    return num.toLocaleString()
}