import './Carousel.scss';

import iconPlay from '../../images/play.svg'
import { useEffect, useState } from 'react';

interface CarouselProps {
    // Headings
    heading: {
        title: string,
        subtitle: string
    },
    // Array of images.
    slides: string[],
    // Slide to activate on init, default 0.
    startSlide?: number,
}

export function Carousel({ heading, slides, startSlide = 0 }: CarouselProps) {
    const [current, setCurrent] = useState(startSlide)
    const [play, setPlay] = useState(true)

    useEffect(() => {
        if (play) {
            const interval = setInterval(() => (current + 1 < slides.length) ? setCurrent(current + 1) : setCurrent(0), 1000)
            return () => clearTimeout(interval)
        }
    }, [play, current, slides.length])

    return (
        <div className="carousel" >
            <div className="carousel__container">
                <div className="carousel__slides" onClick={() => setPlay(!play)}>
                    {!play ? <div className="carousel__slides-play" onClick={() => setPlay(!play)}>
                        <img className="carousel__slides-play__icon" src={iconPlay} alt="Play" />
                    </div> : null}
                    <div className="carousel__slides__wrapper" style={{ width: `${slides.length * 100}%`, marginLeft: `${(current * -100)}%` }}>
                        {
                            slides.map((slide, key) => (
                                <div className="carousel__slide" key={key}>
                                    <div className="carousel__slide-image" style={{ backgroundImage: `url(${slide})` }}></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="carousel__heading">
                    <div className="carousel__heading-title">{heading.title}</div>
                    <div className="carousel__heading-subtitle">{heading.subtitle}</div>
                </div>
            </div>
        </div >
    );
}