export default function flyIntervals(startTime, endTime) {
    const start = new Date(startTime).toLocaleTimeString().slice(0, -6)
    const end = new Date(endTime).toLocaleTimeString().slice(0, -6)

    return `${start} - ${end}`
}

// import moment from 'moment'

// export default function flyDuration(startTime, endTime) {
//     const start = moment(startTime).format('DD MM YYYY hh:mm:ss', true)
//     const end = moment(endTime).format('DD MM YYYY hh:mm:ss', true)

//     return `${start} - ${end}`
// }
