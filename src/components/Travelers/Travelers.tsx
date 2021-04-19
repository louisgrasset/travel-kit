import { useMemo, useState } from 'react';
import './Travelers.scss';

import iconClear from '../../images/clear.svg'

interface Traveler {
    name: string,
    image: string
}
interface TravelersProps {
    travelers: Traveler[]
}
export function Travelers({ travelers }: TravelersProps) {
    const [search, setSearch] = useState('');
    const travelersFiltered = useMemo(() => (
        travelers.filter(traveler => traveler.name.toLowerCase().startsWith(search))
    ), [search, travelers])
    return (
        <div className="travelers">
            <div className="travelers__container">
                <div className="travelers__title">List of Travelers</div>
                <div className="travelers__search">
                    <input className="travelers__search-input" placeholder="Traveler's name" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} />
                    {
                        search.length
                            ? <div className="travelers__search-action" onClick={() => setSearch('')}>
                                <img className="travelers__search-action__icon" src={iconClear} alt="clear" />
                            </div>
                            : null
                    }
                </div>
                <div className="travelers__list">
                    {
                        travelersFiltered.length ?
                            travelersFiltered.map((traveler, key) => (
                                <div className="travelers__list-item" key={key}>
                                    <img className="travelers__list-item__image" src={traveler.image} alt={traveler.name} />
                                    <span className="travelers__list-item__name">{traveler.name}</span>
                                </div>
                            ))
                            : <span className="travelers__list-message">No travelers</span>
                    }
                </div>
            </div>
        </div>
    )
}