export default class Card extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="card">
                <img src="../../img/alto-atacama.jpg" alt="Image" />
                <div className="card-content">
                    <p className="title">La Bamba de Areco</p>
                    <p className="description">Esta casa de pescadores fue renovada con elegancia, 
                        pero sin descuidar su espíritu original. Se abre a 
                        un gran patio central con dos piscinas de diseño, 
                        una de ellas climatizada.</p>
                    <div className="data">
                        <i className="fas fa-map-marker block" />
                        <label className="location">Buenos Aires, Argentina</label>
                    </div>
                    <div className="data inline">
                        <i className="fas fa-bed" />
                        <label className="rooms">11 Habitaciones</label>
                    </div>
                    <div className="price inline">
                        <i className="fas fa-dollar-sign" />
                        <i className="fas fa-dollar-sign" />
                        <i className="fas fa-dollar-sign" />
                        <i className="fas fa-dollar-sign" />
                    </div>
                </div>
                <a className="card-btn">Reservar</a>
            </div>
        )
    }

}