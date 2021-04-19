import './Week.scss';

interface DateProps {
    date: Date,
    event: boolean
}
interface WeekProps {
    days: DateProps[],
    selected: number,
}
export function Week({ days, selected }: WeekProps) {
    return (
        <div className="week">
            <div className="week__container">
                {
                    days.map((day, key) => (
                        <div className={"week__day" + (key === selected ? " week__day--selected" : "") + (day.event ? " week__day--event" : "")} key={key}>
                            <span className="week__day-name">{day.date.toLocaleString('default', { dateStyle: 'full' }).slice(0, 2)}</span>
                            <span className="week__day-number">{day.date.toLocaleString('default', { day: 'numeric' })}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}