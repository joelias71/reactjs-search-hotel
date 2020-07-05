export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hola React</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);