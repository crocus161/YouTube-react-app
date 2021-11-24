import Form from './Form/Form';
import { useState } from 'react';
import Listen from './Listen/Listen';
import styles from './Navbar.module.scss';
import { ReactComponent as BellIcon } from '../../assets/icons/bell.svg';

const Navbar = ({setSearchResultData}) => {

    const [searchValue, setSearchValue] = useState('');

    return (
        <nav className={styles.navbar}>

            <div className={styles.navbar__part}>
                <Listen setSearchValue={setSearchValue} />
                
                <Form setSearchResult={setSearchResultData}
                    searchValue={searchValue} 
                    setSearchValue={setSearchValue}/>
            </div>

            <div className={styles.navbar__part}>

                <button className={styles.bell}>
                    <BellIcon />
                </button>

                <div className={styles.ava}></div>

            </div>

        </nav>
    );
}

export default Navbar;