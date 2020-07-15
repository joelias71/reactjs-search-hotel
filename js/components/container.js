import Card from './card'

export default class Container extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        const hotelList = this.props.hotelList.map(hotel => (
            <Card
                key={hotel.id}
                slug={hotel.slug}
                name={hotel.name}
                photo={hotel.photo}
                description={hotel.description}
                availabilityFrom={hotel.availabilityFrom}
                availabilityTo={hotel.availabilityTo}
                rooms={hotel.rooms}
                city={hotel.city}
                country={hotel.country}
                price={hotel.price}
            />
        ))

        return (
            <div className="container">
                <div className="content">
                    { hotelList }
                </div>
            </div>
        )
    }

}