import Form from './Form/Form';
import Meta from './Meta/Meta';
import { useState } from 'react';
import Listen from './Listen/Listen';
import styles from './Navbar.module.scss';

const Navbar = ({setSearchResultData, isAuth, setSignIn, userProfile}) => {

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
                <Meta 
                    isAuth={isAuth}
                    setSignIn={setSignIn}
                    userProfile={userProfile}
                />
            </div>

        </nav>
    );
}

export default Navbar;