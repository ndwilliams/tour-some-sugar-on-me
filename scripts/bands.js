import { getBands, getBookings, getVenues } from "./database.js"

const bands = getBands()
const venues = getVenues()
const bookings = getBookings()

export const BandList = () => {
    let html = "<ul>"

    for (const band of bands) {
        html += `<li data-id="${band.id}"
                data-type="band"
                data-bandname="${band.name}">
                ${band.name}</li>`
    }

    html += `</ul>`

    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "band") {
            const bandId = itemClicked.dataset.id

            let bandVenues = ""

            for (const booking of bookings) {

                if (parseInt(bandId) === booking.bandId) {

                    for (const venue of venues) {

                        if (booking.venueId === venue.id) {

                            bandVenues += `${venue.name}, `
                        }
                    }
                }
            }
            if (bandVenues === "") {
                window.alert(`${itemClicked.dataset.bandname} have no venues booked.`)
            } else {
                bandVenues = bandVenues.slice(0, -2)
                window.alert(`${itemClicked.dataset.bandname} are playing at ${bandVenues}`)
            }
        }
    }
)