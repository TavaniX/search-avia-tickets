export default function flyIntervals(startTime, endTime) {
    const start = new Date(startTime).toLocaleTimeString().slice(0, -6)
    const end = new Date(endTime).toLocaleTimeString().slice(0, -6)

    return `${start} - ${end}`
}
