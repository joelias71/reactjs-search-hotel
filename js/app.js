import Header from './components/header'
import Filter from './components/filter'
import Container from './components/container'
import { hotelsData } from './data/data'

export default class App extends React.Component {

    getHotelSize() {
        return [{ id: 1, size:'Hotel pequeño'}, { id: 2, size:'Hotel mediano'}, { id: 3, size:'Hotel grande'}]
    }

    getPrices() {
        return [1,2,3,4]
    }

    //Method that return unique countries from hotelsData
    getCountries() {
        return [...new Set(hotelsData.map(function(hotel) {
            return hotel.country
        }))]
    }

    render() {
        return (
            <div>
                <Header />
                <Filter countries={this.getCountries()} prices={this.getPrices()} sizes={this.getHotelSize()} />
                <Container hotelsData={hotelsData} />
            </div>
        )
    }
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('app')
);