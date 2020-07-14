import Header from './components/header'
import Filter from './components/filter'
import Container from './components/container'
import { hotelsData } from './data/data'
import { getTextDate } from './util/date'

export default class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            initDate: null,
            endDate: null
        }

        this.getInitDateText = this.getInitDateText.bind(this)
        this.getEndDateText = this.getEndDateText.bind(this)
    }

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

    getInitDateText(date) {
        this.setState({ initDate: getTextDate(date) })
    }

    getEndDateText(date) {
        this.setState({ endDate: getTextDate(date) })
    }

    render() {
        return (
            <div>
                <Header 
                    initDate={this.state.initDate}
                    endDate={this.state.endDate}
                />
                <Filter 
                    countries={this.getCountries()}
                    prices={this.getPrices()}
                    sizes={this.getHotelSize()}
                    getInitDateText={this.getInitDateText}
                    getEndDateText={this.getEndDateText}
                />
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