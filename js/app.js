import Header from './components/header'
import Filter from './components/filter'
import Container from './components/container'
import { hotelsData } from './data/data'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Filter />
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