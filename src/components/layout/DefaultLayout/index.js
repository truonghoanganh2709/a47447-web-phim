import Header from '../components/Header';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header style={{ backgroundColor: 'gray' }} />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
