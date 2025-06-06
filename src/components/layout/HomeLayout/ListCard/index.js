import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ListCard.module.scss';

const cx = classNames.bind(styles);

function ListCard({ onHover, onLeave }) {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('/data.json')
            .then((res) => setMovies(res.data.movies || []))
            .catch((err) => console.error('Error page', err));
    }, []);

    const handleClick = (movie) => {
        navigate('/detail', { state: { movie } });
    };

    return (
        <div className={cx('listCard')}>
            <ul className={cx('listCard-movie')}>
                {movies.map((movie) => (
                    <li
                        key={movie.id}
                        className={cx('card-movie')}
                        onMouseEnter={() => onHover?.(movie)}
                        onMouseLeave={onLeave}
                        onClick={() => handleClick(movie)}
                    >
                        <img src={movie.image} alt={movie.movie} className={cx('movie-img')} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListCard;
