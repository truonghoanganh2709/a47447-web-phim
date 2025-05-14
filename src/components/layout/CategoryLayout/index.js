import Footer from '~/components/layout/components/Footer';
import Header from '~/components/layout/components/Header';
import ListCardCategory from './ListCardCategory';
function CategoryLayout() {
    return (
        <div>
            <Header />
            <ListCardCategory />
            <Footer />
        </div>
    );
}

export default CategoryLayout;
