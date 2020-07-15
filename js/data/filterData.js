import { hotelsData } from './data'

export const getHotelSize = () => {
    return [{ id: 1, size:'Hotel pequeño'}, { id: 2, size:'Hotel mediano'}, { id: 3, size:'Hotel grande'}]
}

export const getPrices = () => {
    return [1,2,3,4]
}

//Method that return unique countries from hotelsData
export const getCountries = () => {
    return [...new Set(hotelsData.map(function(hotel) {
        return hotel.country
    }))]
}

export const getFilteredHotels = (country, price, size) => {

    console.log('Method: ',country, price, size)

    if(country !== 'Todos los países' || price || size) {
        let hotelList = hotelsData.filter(hotel => {
            if(country.toLowerCase() === hotel.country.toLowerCase() )
                return hotel
        })
        return hotelList
    }

    return hotelsData
}