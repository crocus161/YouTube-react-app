import styles from './Sidebar.module.scss';
import { NavLink } from "react-router-dom";
import { useMatch, useResolvedPath } from 'react-router';
import classNames from 'classnames';

const Link = ({link}) => {
    const { title, path, Icon } = link;

    const resolved = useResolvedPath(path);
    const match = useMatch({ path: resolved.pathname, end: true });

    const linkClasses = classNames(
        styles.navlink,
        {
            [styles.active]: match
        }
    );

    return (
        <NavLink className={linkClasses} to={path}>
            <Icon className={styles.navlink__icon} />
            <h2 className={styles.navlink__title}>{title}</h2>
        </NavLink>
    );
}

export default Link;