export default class Filter extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            country: 'default'
        }

        this.handleCountryChange = this.handleCountryChange.bind(this);
    }

    handleClick() {
        var element = document.getElementById("filter-container")
        element.style.display = (element.style.display === "block")? "none" : "block"
    }

    handleCountryChange(event) {
        this.setState({ country: event.target.value })
    }

    render() {
        return (
            <div className="filter">
                <span className="box-shadow-menu" onClick={this.handleClick} />
                <div className="filter-container" id="filter-container">
                    <div className="filter-block">
                        <i className="fas fa-sign-in-alt">
                            <input type="date" name="initDate" />
                        </i>
                    </div>
                    <div className="filter-block">
                        <i className="fas fa-sign-out-alt">
                            <input type="date" name="endDate" />
                        </i>
                    </div>
                    <div className="filter-block">
                        <i className="fas fa-globe">
                            <select name="countries" id="countries" value={this.state.country} onChange={this.handleCountryChange}>
                                <option key="default" value="default" disabled>Todos los países</option>
                                {this.props.countries.map((country) => <option key={country} value={country}>{country}</option>)}
                            </select>
                        </i>
                    </div>
                    <div className="filter-block">
                        <i className="fas fa-dollar-sign">
                            <select name="prices" id="prices">
                                <option>Cuaquier precio</option>
                            </select>
                        </i>
                    </div>
                    <div className="filter-block">
                        <i className="fas fa-bed">
                            <select name="sizes" id="sizes">
                                <option>Cualquier tamaño</option>
                            </select>
                        </i>
                    </div>
                </div>
            </div>
        )
    }

}