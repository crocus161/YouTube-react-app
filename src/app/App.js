import styles from './App.module.scss';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';

const App = () => {
    return (
        <div className={styles.app}>
            
            <Sidebar />

            <div className={styles.wrapper}>
                
                <Navbar />

            </div>
        </div>
    );
}

export default App;
