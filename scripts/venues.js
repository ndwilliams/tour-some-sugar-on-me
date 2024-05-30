import { getVenues, getBands, getBookings } from "./database.js"

const venues = getVenues()
const bands = getBands()
const bookings = getBookings()

export const VenueList = () => {
    let html = "<ul>"

    for (const venue of venues) {
        html += `<li data-id="${venue.id}"
                data-type="venue"
                data-venuename="${venue.name}">
                ${venue.name}</li>`
    }

    html += `</ul>`

    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "venue") {
            const venueId = itemClicked.dataset.id

            let venueBands = ""

            for (const booking of bookings) {

                if (parseInt(venueId) === booking.venueId) {

                    for (const band of bands){

                        if (booking.bandId === band.id) {
                            
                            venueBands += `${band.name}, `
                        }
                    }
                }
            }
            if (venueBands === "") {
                window.alert(`No bands have booked ${itemClicked.dataset.venuename}`)
            } else {
                venueBands = venueBands.slice(0, -2)
                window.alert(`${venueBands} have booked ${itemClicked.dataset.venuename}`)
            }
        }
    }
)