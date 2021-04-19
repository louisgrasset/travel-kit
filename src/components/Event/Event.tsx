import './Event.scss';
import iconCalendar from '../../images/calendar.svg'
import iconArrow from '../../images/arrow-right.svg'
interface EventProps {
    from: Date,
    to: Date,
    action?: CallableFunction
}
export function Event({ from, to, action }: EventProps) {
    return (
        <div className={"event" + (action ? " event--action" : "")} >
            < div className="event__container" >
                <div className="event__image">
                    <img className="event__image-icon" src={iconCalendar} alt="" />
                </div>
                <div className="event__dates">
                    <div className="event__dates-time">
                        {from.toLocaleString('fr', { timeStyle: 'short' })}&nbsp;-&nbsp;{to.toLocaleString('fr', { timeStyle: 'short' })}
                    </div>
                    <div className="event__dates-day">
                        {from.toLocaleString('default', { dateStyle: 'full' })}
                    </div>
                </div>
                {
                    action ?
                        <div className="event__action" onClick={() => action()}>
                            <img className="event__action-icon" src={iconArrow} alt="" />
                        </div> : null
                }

            </div >
        </div >
    )
}