import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './Description.module.scss';

const cx = classNames.bind(styles);

function Description({ idMovie = 0, onHover, onLeave }) {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch('/data.json')
            .then((res) => res.json())
            .then((data) => {
                const selectedMovie = data.movies.find((m) => m.id === idMovie);
                setMovie(selectedMovie);
                if (selectedMovie) {
                    onHover?.(selectedMovie);
                } else {
                    onLeave?.();
                }
            })
            .catch((err) => console.error('Lỗi khi tải dữ liệu:', err));
    }, [idMovie, onHover, onLeave]);

    if (!movie) return null;

    return (
        <div className={cx('description')} onMouseEnter={() => onHover?.(movie)} onMouseLeave={onLeave}>
            <ul className={cx('description-movie')}>
                <img src={movie.logo} alt={movie.movie} className={cx('movie-logo')} />
                <ul className={cx('item')}>
                    <li className={cx('year')}>{movie.year}</li>
                    <li className={cx('age')}>{movie.age}</li>
                    <li className={cx('time')}>{movie.time}</li>
                    <li className={cx('kind')}>{movie.genre}</li>
                </ul>
                <li className={cx('describe')}>{movie.description}</li>
            </ul>
            <div className={cx('buttons')}>
                <button className={cx('watch-button')}>Watch</button>
                <button className={cx('wishlist-button')}>+ Wishlist</button>
            </div>
        </div>
    );
}

export default Description;
