import { Fragment } from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import DefaultLayout from '~/components/layout/DefaultLayout';
import { publicRoute } from './routes';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoute.map((route, index) => {
                        const Layout = route.layout === null ? Fragment : route.layout || DefaultLayout;

                        const Page = route.component;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
