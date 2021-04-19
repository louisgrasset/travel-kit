import { useState } from 'react';
import './Nav.scss';
interface NavLinkProps {
    icon: string,
    text: string,
    url: string,
}
interface NavProps {
    links: NavLinkProps[]
}
export function Nav({ links }: NavProps) {
    const [current, setCurrent] = useState(0);

    return (
        <div className="nav">
            <div className="nav__container">
                {
                    links.map((link, key) =>
                        <a onClick={() => setCurrent(key)} className={`nav__link nav__link--${current === key ? "large" : "small"}`} href={`#${link.url}`} key={key}>
                            <img className="nav__link-icon" src={link.icon} alt="" />
                            <span className="nav__link-text">{link.text}</span>
                        </a>
                    )
                }
            </div>
        </div>
    )
}