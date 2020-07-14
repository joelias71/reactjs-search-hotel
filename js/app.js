import Header from './components/header'
import Filter from './components/filter'
import Container from './components/container'
import { hotelsData } from './data/data'

export default class App extends React.Component {

    getCountries() {
        return [...new Set(hotelsData.map(function(hotel) {
            return hotel.country
        }))]
    }

    render() {
        return (
            <div>
                <Header />
                <Filter countries={this.getCountries()} />
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