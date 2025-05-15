import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';
import styles from './Card.module.scss';

const cx = classNames.bind(styles);

function Card() {
    const location = useLocation();

    let movie = null;
    if (location && location.state && location.state.movie) {
        movie = location.state.movie;
    }
    return (
        <div className={cx('card-movie-onclick')}>
            <img src={movie.image} alt={movie.movie} />
            div
        </div>
    );
}

export default Card;
