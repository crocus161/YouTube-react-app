import styles from './App.module.scss';
import Sidebar from '../components/Sidebar/Sidebar';
import RouteMap from '../components/RouteMap/RouteMap';
import NavbarContainer from '../containers/NavbarContainer';
import { useEffect } from 'react';

const CLIENT = process.env.REACT_APP_CLIENT_ID,
    CLIENT1 = process.env.REACT_APP_CLIENT_ID1;

const App = () => {

    useEffect(() => {
        let cleanupFunction = false;

        if (!cleanupFunction) {
            window.gapi.load("client:auth2", () => {
                window.gapi.auth2.init({ client_id: CLIENT1 });
            });
        }

        return () => cleanupFunction = true;
    }, []);

    return (
        <div className={styles.app}>
            <Sidebar />
            <div className={styles.wrapper}>
                <NavbarContainer />
                <RouteMap />
            </div>
        </div>
    );
}

export default App;
