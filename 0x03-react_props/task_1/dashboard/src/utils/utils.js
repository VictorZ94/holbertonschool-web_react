export const getFullYear = () => {
    const today = new Date()
    return today.getFullYear()
}

export function getFooterCopy(isIndex) {
    if (isIndex) {
       isIndex = "Holberton School"
    } else {
        isIndex = "Holberton School main dashboard"
    }
    return isIndex
}

export const getLatestNotification = () => {
    return '<strong>Urgent requirement</strong> - complete by EOD'
}
