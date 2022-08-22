export default function timeDuration(diffInMilliSeconds) {
    // calc hours
    const hours = Math.floor(diffInMilliSeconds / 3600) % 24
    diffInMilliSeconds -= hours * 3600

    // calc mins
    const minutes = Math.floor(diffInMilliSeconds / 60) % 60
    diffInMilliSeconds -= minutes * 60

    return `${hours}ч ${minutes}м`
}
