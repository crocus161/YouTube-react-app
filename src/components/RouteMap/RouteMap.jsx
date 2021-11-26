import { Route, Routes } from 'react-router';
import { metaRoutes, privateRoutes, publicRoutes } from '../../routes/routes';

const RouteMap = () => {
    return (
        <Routes>
            {publicRoutes.map(({ path, Component, id }) => (
                <Route key={id} path={path} element={<Component />} end/>
            ))}

            {privateRoutes.map(({ path, Component, id }) => (
                <Route key={id} path={path} element={<Component />} end/>
            ))}

            {metaRoutes.map(({ path, Component, id }) => (
                <Route key={id} path={path} element={<Component />} end/>
            ))}

            {/* <Route path='*' element={<Navigate to={EXPLORE} />} />  */}
        </Routes>
    );
}

export default RouteMap;