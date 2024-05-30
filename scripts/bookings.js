import { getBands, getBookings, getVenues } from "./database.js";

const bands = getBands()
const venues = getVenues()
const bookings = getBookings()

const findBand = (booking, allBands) => {
    let bookingBand = null

    for (const band of bands) {
        if (band.id === booking.bandId) {
            bookingBand = band
        }
    }
    return bookingBand
}

const findVenue = (booking, allVenues) => {
    let bookingVenue = null
    
    for (const venue of venues) {
        if (venue.id === booking.venueId) {
            bookingVenue = venue
        }
    }
    return bookingVenue
}

export const Bookings = () => {
    let html = ""
    html = "<ul>"

    for (const booking of bookings) {
        const band = findBand(booking, bands)
        const venue = findVenue(booking, venues)

        html += `<li>${band.name} are playing at ${venue.name} on ${booking.date}`
    }
    html += `</ul>`

    return html
}
