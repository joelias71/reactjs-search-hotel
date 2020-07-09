import Header from './components/header'
import Filter from './components/filter'
import Container from './components/container'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Filter />
                <Container />
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