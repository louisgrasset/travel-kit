import './CreditCard.scss';
import iconChip from '../../images/chip.svg'
import iconVisa from '../../images/visa.svg'
import iconMastercard from '../../images/mastercard.svg'
import iconAmericanexpress from '../../images/americanexpress.svg'
import { useRef, useMemo, useState, useEffect } from 'react';

interface CreditCardProps {
    // Card holder lastname and firstname
    holder: string,
    // Card numbers (16 digits), default '0000000000000000'
    numbers: string,
    // Card system, default to 'visa'
    system: 'visa' | 'mastercard' | 'americanexpress'
}
export function CreditCard({ holder, numbers = '0000000000000000', system = 'visa' }: CreditCardProps) {
    const [height, setHeight] = useState('0px');
    let containerRef = useRef<any>();

    useEffect(() => {
        if (containerRef &&
            containerRef.current) {
            let width = getComputedStyle(containerRef?.current).width;
            const height = 9 * parseInt(width.substring(0, width.length - 2)) / 16 + 'px';
            setHeight(height);
        }
    }, [])

    const creditcardNumbers = useMemo(() => (
        `${numbers.slice(0, 4)} ${numbers.slice(4, 8)} ${numbers.slice(8, 12)} ${numbers.slice(12, 16)}`
    ), [numbers]);

    const creditcardIcon = useMemo(() => {
        switch (system) {
            case 'mastercard': return iconMastercard;
            case 'americanexpress': return iconAmericanexpress;
            case 'visa': return iconVisa;
            default: return iconVisa;
        }
    }, [system])
    return (
        <div className="creditcard" >
            <div className="creditcard__container" ref={containerRef} style={{ height: height }}>
                <img className="creditcard__chip" src={iconChip} alt="" />
                <div className="creditcard__numbers">{creditcardNumbers}</div>
                <div className="creditcard__holder">
                    <label>Card holder</label>
                    <span className="creditcard__holder-name">{holder}</span>
                </div>
                <img className="creditcard__system" src={creditcardIcon} alt={system} />
            </div>
        </div>
    )
}