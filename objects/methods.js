let restaurant = {
    name: 'BVS',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability = (partySize) => {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    }
}

restaurant.seatParty(72)