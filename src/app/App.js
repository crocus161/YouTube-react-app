import styles from './App.module.scss';
import Sidebar from '../components/Sidebar/Sidebar';
import RouteMap from '../components/RouteMap/RouteMap';
import NavbarContainer from '../containers/NavbarContainer';

const App = () => {
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
