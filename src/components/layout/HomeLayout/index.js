import { useRef, useState } from 'react';
import Description from '~/components/layout/HomeLayout/Description';
import ListCard from '~/components/layout/HomeLayout/ListCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
function HomeLayout() {
    const [backgroundImage, setBackgroundImage] = useState('/images/brave-trailer-image.jpg');
    const [idMovie, setIdMovie] = useState(1);
    const leaveTimeoutRef = useRef(null);

    const handleHover = (movie) => {
        clearTimeout(leaveTimeoutRef.current);

        setBackgroundImage(movie.background);
        setIdMovie(movie.id);
    };

    const handleLeave = () => {
        leaveTimeoutRef.current = setTimeout(() => {
            setBackgroundImage('/images/brave-trailer-image.jpg');
            setIdMovie(1);
        }, 200);
    };

    const style = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out',
        minHeight: '100vh',
        position: 'relative',
    };

    return (
        <div style={style}>
            <Header />
            <Description idMovie={idMovie} onHover={handleHover} onLeave={handleLeave} />
            <ListCard onHover={handleHover} onLeave={handleLeave} />
            <Footer style={{ position: 'absolute', bottom: 0, width: '100%' }} />
        </div>
    );
}

export default HomeLayout;
