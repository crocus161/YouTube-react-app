import styles from './App.module.scss';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import RouteMap from '../components/RouteMap/RouteMap';

const App = () => {
    return (
        <div className={styles.app}>
            <Sidebar />
            <div className={styles.wrapper}>
                <Navbar />
                <RouteMap />
            </div>
        </div>
    );
}

export default App;
