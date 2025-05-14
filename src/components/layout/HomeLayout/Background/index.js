import classNames from 'classnames/bind';
import styles from './Background.module.scss';

const cx = classNames.bind(styles);

const Background = ({ children }) => <div className={cx('background-image')}>{children}</div>;

export default Background;
