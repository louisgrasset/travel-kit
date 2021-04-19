import './TravelersDetails.scss';

interface Traveler {
    // Traveler's name
    name: string,
    // Traveler's job
    job: string,
    // Last time seen online (minutes)
    time: number
    // Traveler's image
    image: string,
}
interface TravelersDetailsProps {
    travelers: Traveler[]
}
export function TravelersDetails({ travelers }: TravelersDetailsProps) {
    return (
        <div className="travelers-details">
            <div className="travelers-details__container">
                <div className="travelers-details__list">
                    {
                        travelers.map((traveler, key) => (
                            <div className="travelers-details__list-item" key={key}>
                                <img className="travelers-details__list-item__image" src={traveler.image} alt={traveler.name} />
                                <div className="travelers-details__list-item__data">
                                    <div className="travelers-details__list-item__name">{traveler.name}</div>
                                    <div className="travelers-details__list-item__job">{traveler.job}</div>
                                    <div className="travelers-details__list-item__time">{traveler.time} Mins. ago</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}