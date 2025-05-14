import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header({ style }) {
    return (
        <header className={cx('wrapper')} style={style}>
            <a href="#" className={cx('logo')}>
                iMovies
            </a>
            <nav className={cx('list')}>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="#">Adults</a>
                    </li>
                    <li>
                        <a href="#">Kids</a>
                    </li>
                    <li>
                        <a href="#">Trend</a>
                    </li>
                    <li>
                        <a href="/category">My List</a>
                    </li>
                </ul>
            </nav>
            <div className={cx('search')}>
                <input type="text" placeholder="Search movies..." className={cx('search-input')} />
            </div>
        </header>
    );
}

export default Header;
