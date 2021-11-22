import { Route, Routes, Navigate } from 'react-router';
import { EXPLORE } from '../../routes/consts';
import { metaRoutes, privateRoutes, publicRoutes } from '../../routes/routes';
import styles from './RouteMap.module.scss';

const RouteMap = () => {
    return (
        <Routes>
            {publicRoutes.map(({ path, Component, id }) => (
                <Route key={id} path={path} element={<Component />} />
            ))}

            {privateRoutes.map(({ path, Component, id }) => (
                <Route key={id} path={path} element={<Component />} />
            ))}

            {metaRoutes.map(({ path, Component, id }) => (
                <Route key={id} path={path} element={<Component />} />
            ))}

            <Route path='*' element={<Navigate to={EXPLORE} />} />
        </Routes>
    );
}

export default RouteMap;