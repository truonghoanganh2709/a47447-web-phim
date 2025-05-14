import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';
import styles from './Description.module.scss';

const cx = classNames.bind(styles);

function Description() {
    const location = useLocation();

    let movie = null;
    if (location && location.state && location.state.movie) {
        movie = location.state.movie;
    }

    return (
        <div className={cx('des-movie-onclick')}>
            <h1>{movie.movie}</h1>
            <ul className={cx('item')}>
                <li className={cx('year')}>{movie.year}</li>
                <li className={cx('age')}>{movie.age}</li>
                <li className={cx('time')}>{movie.time}</li>
                <li className={cx('kind')}>{movie.genre}</li>
            </ul>
            <div className={cx('describe')}>{movie.description}</div>

            <div className={cx('button-group')}>
                <button className={cx('btn', 'trailer-btn')}>Xem Trailer</button>
                <button className={cx('btn', 'fav-btn')}>Thêm vào Yêu thích</button>
            </div>
        </div>
    );
}

export default Description;
