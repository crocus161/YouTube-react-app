import React from 'react';
import styles from './Meta.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ReactComponent as BellIcon } from '../../../assets/icons/bell.svg';

const Meta = React.memo(({ isAuth, setSignIn, userProfile }) => {
    console.log('render');
    return (
        <>
            <button className={styles.bell}><BellIcon /></button>

            {
                isAuth
                ? (<>
                    <p className={styles.name}>
                        {userProfile?.name}
                    </p>

                    <LazyLoadImage
                        className={styles.ava}
                        src={userProfile?.image}
                        alt={userProfile?.name}
                    />
                </>)
                : (
                    <button 
                        onClick={setSignIn}
                        className={styles.sign}
                    >
                        Sign in
                    </button>
                )
            }
        </>
    );
});

export default Meta;