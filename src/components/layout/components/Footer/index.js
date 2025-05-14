import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer({ style }) {
    return (
        <footer className={cx('footer')} style={style}>
            <div className={cx('footer-content')}>
                <p>© 2025 iMovies. All rights reserved.</p>
                <div className={cx('links')}>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
