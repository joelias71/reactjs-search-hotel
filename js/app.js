import Header from './components/header'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
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