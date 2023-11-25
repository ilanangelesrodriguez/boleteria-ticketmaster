import './styles.css';
import styles from './EventItem.module.css';

export const EventItem = ({ info, id, name, image, onEventClick }) => {

    const handleSeeMoreClick = (e) => {
        e.stopPropagation();
        onEventClick(id);
    }

    return (
        <div onClick={() => console.log('padre clickeado')} className={styles.eventItemContainer}>
            <div className={styles.eventItemContainerInner}>
                <img src={image} alt={name} width={200}/>
                <h4>{name}</h4>
                <p>{info}</p>
                <button onClick={ handleSeeMoreClick } className={styles.eventItemContainerButton}>Ver más</button>
            </div>

        </div>
    );
}