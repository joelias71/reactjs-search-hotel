export default class Filter extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="filter">
                <div className="filter-container">
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
                            <select name="countries" id="countries">
                                <option>Todos los países</option>
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