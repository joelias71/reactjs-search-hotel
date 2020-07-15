import { getTodayDate, getDefaultEndDate } from '../util/date'

export default class Filter extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            country: -1,
            price: -1,
            size: -1,
            initDate: getTodayDate(),
            endDate: getDefaultEndDate()
        }

        this.handleCountryChange = this.handleCountryChange.bind(this)
        this.handlePriceChange = this.handlePriceChange.bind(this)
        this.handleSizeChange = this.handleSizeChange.bind(this)
        this.handleInitDateChange = this.handleInitDateChange.bind(this)
        this.handleEndDateChange = this.handleEndDateChange.bind(this)

        this.props.getInitDateText(this.state.initDate)
        this.props.getEndDateText(this.state.endDate)

    }

    handleClick() {
        var element = document.getElementById("filter-container")
        element.style.display = (element.style.display === "block")? "none" : "block"
    }

    handleCountryChange(event) {
        console.log(event.target.value)
        this.setState({ country: event.target.value })
    }

    handlePriceChange(event) {
        console.log(event.target.value)
        this.setState({ price: event.target.value })
    }

    handleSizeChange(event) {
        console.log(event.target.value)
        this.setState({ size: event.target.value })
    }

    handleInitDateChange(event) {
        this.setState({ initDate: event.target.value })
        this.props.getInitDateText(event.target.value)
    }

    handleEndDateChange(event) {
        this.setState({ endDate: event.target.value })
        this.props.getEndDateText(event.target.value)
    }

    render() {
        return (
            <div className="filter">
                <span className="box-shadow-menu" onClick={this.handleClick} />
                <div className="filter-container" id="filter-container">
                    <div className="filter-block">
                        <i className="fas fa-sign-in-alt">
                            <input type="date" name="initDate" min={this.state.initDate} value={this.state.initDate} onChange={e => this.handleInitDateChange(e)}/>
                        </i>
                    </div>
                    <div className="filter-block">
                        <i className="fas fa-sign-out-alt">
                            <input type="date" name="endDate" min={this.state.initDate} value={this.state.endDate} onChange={e => this.handleEndDateChange(e)} />
                        </i>
                    </div>
                    <div className="filter-block">
                        <i className="fas fa-globe">
                            <select name="countries" id="countries" value={this.state.country} onChange={this.handleCountryChange}>
                                <option key={-1} value={-1}>Todos los países</option>
                                {this.props.countries.map(country => <option key={country} value={country}>{country}</option>)}
                            </select>
                        </i>
                    </div>
                    <div className="filter-block">
                        <i className="fas fa-dollar-sign">
                            <select name="prices" id="prices" value={this.state.price} onChange={this.handlePriceChange}>
                                <option key={-1} value={-1}>Cualquier precio</option>
                                {this.props.prices.map(price => <option key={price} value={price}>{'$'.repeat(price)}</option>)}
                            </select>
                        </i>
                    </div>
                    <div className="filter-block">
                        <i className="fas fa-bed">
                            <select name="sizes" id="sizes" value={this.state.size} onChange={this.handleSizeChange}>
                                <option key={-1} value={-1}>Cualquier tamaño</option>
                                {this.props.sizes.map(size => <option key={size.id} value={size.id}>{size.size}</option>)}
                            </select>
                        </i>
                    </div>
                </div>
            </div>
        )
    }

}