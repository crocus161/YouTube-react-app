import { EXPLORE, NOT_FOUND } from '../../routes/consts'
import { Route, Routes, Navigate } from 'react-router';
import { metaRoutes, privateRoutes, publicRoutes } from '../../routes/routes';
import PrivateRouteContainer from '../../containers/PrivateRouteContainer';

const RouteMap = () => {
    return (
        <Routes>
            {publicRoutes.map(({ path, Component, id }) => (
                <Route key={id} path={path} element={<Component />} end/>
            ))}

            {privateRoutes.map(({ path, Component, id }) => (
                <Route key={id} path={path} element={<PrivateRouteContainer children={<Component />} />} end/>
            ))}

            {metaRoutes.map(({ path, Component, id }) => (
                <Route key={id} path={path} element={<Component />} end/>
            ))}

            <Route path='*' element={<Navigate to={NOT_FOUND} />} /> 
        </Routes>
    );
}

export default RouteMap;