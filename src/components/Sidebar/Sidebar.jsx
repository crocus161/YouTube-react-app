import Link from './Link';
import styles from './Sidebar.module.scss';
import LogoIcon from '../../assets/icons/youtube.svg?react';
import { metaLinks, privateLinks, publicLinks } from '../../routes/links';

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>

            <div className={styles.logo__wrapper}>
                <LogoIcon className={styles.logo} />
            </div>

            <div className={styles.navlink__wrapper}>

                <div className={styles.navlink__wrapper_line}>
                    {publicLinks.map(link => <Link key={link.id} link={link} />)}
                </div>

                <div className={styles.navlink__wrapper_line}>
                    {privateLinks.map(link => <Link key={link.id} link={link} />)}
                </div>

                <div className={styles.navlink__wrapper_line}>
                    {metaLinks.map(link => <Link key={link.id} link={link} />)}
                </div>

            </div>
        </aside>
    );
}

export default Sidebar;