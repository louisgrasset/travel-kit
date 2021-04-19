import './Travel.scss';
import iconPlane from '../../images/plane.svg'
interface Airport {
    code: string,
    name: string,
}
interface TravelProps {
    departure: { airport: Airport, date: Date }
    arrival: { airport: Airport, date: Date }
}
export function Travel({ departure, arrival }: TravelProps) {
    return (
        <div className="travel">
            <div className="travel__container">
                <div className="travel__section-airports">
                    <div className="travel__section-left">
                        <div className="travel__section-title">{departure.airport.code}</div>
                        <div className="travel__section-text">{departure.airport.name}</div>
                    </div>
                    <div className="travel__section-right">
                        <div className="travel__section-title">{arrival.airport.code}</div>
                        <div className="travel__section-text">{arrival.airport.name}</div>
                    </div>
                </div>
                <div className="travel__section-divider">
                    <img className="travel__section-divider__icon" src={iconPlane} alt="plane" />
                </div>
                <div className="travel__section-timings">
                    <div className="travel__section-left">
                        <div className="travel__section-title">Departure</div>
                        <div className="travel__section-text">{departure.date.toLocaleString('default', { dateStyle: 'full' })}</div>
                    </div>
                    <div className="travel__section-right">
                        <div className="travel__section-title">Arrival</div>
                        <div className="travel__section-text">{arrival.date.toLocaleString('default', { dateStyle: 'full' })}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}