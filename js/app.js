import Header from './components/header'
import Filter from './components/filter'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Filter />
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