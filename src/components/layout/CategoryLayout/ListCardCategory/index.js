import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './ListCardCategory.module.scss';
const cx = classNames.bind(styles);

function ListCardCategory() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios
            .get('/movie.json')
            .then((res) => setMovies(res.data.movies || []))
            .catch((err) => console.error('Lỗi khi tải dữ liệu:', err));
    }, []);
    return (
        <div className={cx('listCard')}>
            <ul className={cx('listCard-movie')}>
                {movies.map((movie) => (
                    <li key={movie.id} className={cx('card-movie')}>
                        <img src={movie.image} alt={movie.movie} className={cx('movie-img')} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListCardCategory;
