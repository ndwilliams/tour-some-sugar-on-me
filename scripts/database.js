const database = {
    venues : [{
          id: 1,
          name: "Music Hall",
          address: "123 Main Street",
          squareFootage: 2000,
          maximumCapacity: 500,
        },
        {
          id: 2,
          name: "The Groove Arena",
          address: "456 Broadway Avenue",
          squareFootage: 3000,
          maximumCapacity: 800,
        },
        {
          id: 3,
          name: "Rock Palace",
          address: "789 Rock Street",
          squareFootage: 2500,
          maximumCapacity: 600,
        },
        {
          id: 4,
          name: "Jazz Spot",
          address: "101 Jazz Lane",
          squareFootage: 1800,
          maximumCapacity: 400,
        },
        {
          id: 5,
          name: "Folk Club",
          address: "555 Folk Road",
          squareFootage: 2200,
          maximumCapacity: 550,
        },
        {
          id: 6,
          name: "EDM Dome",
          address: "777 Electric Avenue",
          squareFootage: 4000,
          maximumCapacity: 1000,
        },
        {
          id: 7,
          name: "Blues Lounge",
          address: "222 Soul Street",
          squareFootage: 1900,
          maximumCapacity: 450,
        },
        {
          id: 8,
          name: "Classical Theater",
          address: "999 Melody Lane",
          squareFootage: 3500,
          maximumCapacity: 900,
        },
        {
          id: 9,
          name: "Reggae Hut",
          address: "333 Rhythm Road",
          squareFootage: 2100,
          maximumCapacity: 600,
        },
        {
          id: 10,
          name: "Country Barn",
          address: "444 Country Lane",
          squareFootage: 2800,
          maximumCapacity: 700,
        }
    ],
    bands : [
        {
          id : 1,
          name: "The Rockers",
          members: 4,
          genre: "Rock",
          yearFormed: 2005,
        },
        {
          id : 2,
          name: "Jazz Masters",
          members: 5,
          genre: "Jazz",
          yearFormed: 1998,
        },
        {
          id: 3,
          name: "Electric Groove",
          members: 3,
          genre: "Electronic",
          yearFormed: 2012,
        },
        {
          id : 4,
          name: "Country Roads",
          members: 6,
          genre: "Country",
          yearFormed: 2003,
        },
        {
          id: 5,
          name: "Soulful Rhythms",
          members: 7,
          genre: "Soul",
          yearFormed: 2001,
        },
        {
          id: 6,
          name: "Funky Beats",
          members: 4,
          genre: "Funk",
          yearFormed: 2008,
        },
        {
          id: 7,
          name: "Classical Legends",
          members: 10,
          genre: "Classical",
          yearFormed: 1995,
        },
        {
          id: 8,
          name: "Reggae Vibes",
          members: 5,
          genre: "Reggae",
          yearFormed: 2009,
        },
        {
          id: 9,
          name: "Pop Sensations",
          members: 4,
          genre: "Pop",
          yearFormed: 2010,
        },
        {
          id: 10,
          name: "Metal Warriors",
          members: 4,
          genre: "Metal",
          yearFormed: 2007,
        },
        {
          id: 11,
          name: "Acoustic Harmony",
          members: 2,
          genre: "Acoustic",
          yearFormed: 2015,
        },
        {
          id : 12,
          name: "Blues Brothers",
          members: 6,
          genre: "Blues",
          yearFormed: 2002,
        },
        {
          id: 13,
          name: "Indie Dreamers",
          members: 3,
          genre: "Indie",
          yearFormed: 2013,
        },
        {
          id: 14,
          name: "Hip-Hop Collective",
          members: 8,
          genre: "Hip-Hop",
          yearFormed: 2006,
        },
        {
          id: 15,
          name: "R&B Divas",
          members: 4,
          genre: "R&B",
          yearFormed: 2011,
        }
      ],
    bookings : [
        {
          id: 1,
          bandId: 3,
          venueId: 5,
          date: "August 15, 2023",
        },
        {
          id: 2,
          bandId: 8,
          venueId: 2,
          date: "September 1, 2023",
        },
        {
          id: 3,
          bandId: 12,
          venueId: 7,
          date: "August 25, 2023",
        },
        {
          id: 4,
          bandId: 2,
          venueId: 1,
          date: "September 10, 2023",
        },
        {
          id: 5,
          bandId: 7,
          venueId: 9,
          date: "August 20, 2023",
        },
        {
          id: 6,
          bandId: 14,
          venueId: 10,
          date: "August 30, 2023",
        },
        {
          id: 7,
          bandId: 10,
          venueId: 4,
          date: "September 5, 2023",
        },
        {
          id: 8,
          bandId: 5,
          venueId: 6,
          date: "August 28, 2023",
        },
        {
          id: 9,
          bandId: 9,
          venueId: 8,
          date: "September 15, 2023",
        },
        {
          id: 10,
          bandId: 1,
          venueId: 3,
          date: "September 20, 2023",
        },
        {
          id: 11,
          bandId: 13,
          venueId: 1,
          date: "September 12, 2023",
        },
        {
          id: 12,
          bandId: 4,
          venueId: 9,
          date: "September 18, 2023",
        },
        {
          id: 13,
          bandId: 6,
          venueId: 2,
          date: "September 8, 2023",
        },
        {
          id: 14,
          bandId: 11,
          venueId: 7,
          date: "September 25, 2023",
        },
        {
          id: 15,
          bandId: 15,
          venueId: 10,
          date: "August 22, 2023",
        },
        {
          id: 16,
          bandId: 8,
          venueId: 3,
          date: "August 17, 2023",
        },
        {
          id: 17,
          bandId: 4,
          venueId: 1,
          date: "September 2, 2023",
        },
        {
          id: 18,
          bandId: 2,
          venueId: 10,
          date: "August 27, 2023",
        },
        {
          id: 19,
          bandId: 11,
          venueId: 7,
          date: "August 31, 2023",
        },
        {
          id: 20,
          bandId: 5,
          venueId: 9,
          date: "September 6, 2023",
        },
        {
          id: 21,
          bandId: 15,
          venueId: 4,
          date: "September 19, 2023",
        },
        {
          id: 22,
          bandId: 7,
          venueId: 8,
          date: "September 11, 2023",
        },
        {
          id: 23,
          bandId: 12,
          venueId: 5,
          date: "September 14, 2023",
        },
        {
          id: 24,
          bandId: 3,
          venueId: 2,
          date: "August 24, 2023",
        },
        {
          id: 25,
          bandId: 1,
          venueId: 6,
          date: "September 3, 2023",
        },
      ]  
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBands = () => {
    return database.bands.map(band => ({...band}))
} 

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}