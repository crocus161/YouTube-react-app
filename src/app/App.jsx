import styles from './App.module.scss';
import Sidebar from '../components/Sidebar/Sidebar';
import RouteMap from '../components/RouteMap/RouteMap';
import NavbarContainer from '../containers/NavbarContainer';
import { useEffect } from 'react';

const CLIENT = import.meta.env.VITE_APP_CLIENT_ID,
    CLIENT1 = import.meta.env.VITE_APP_CLIENT_ID1;

const App = () => {

    useEffect(() => {
        let cleanupFunction = false;

        if (!cleanupFunction) {
            window.gapi.load("client:auth2", () => {
                window.gapi.auth2.init({ client_id: CLIENT });
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
