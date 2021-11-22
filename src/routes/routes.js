import ExploreContainer from '../containers/ExploreContainer';
import TrendingContainer from '../containers/TrendingContainer';
import { EXPLORE, FEEDBACK, HISTORY, LATER, LIBRARY, LIKES, SETTINGS, SUBS, TRENDS } from './consts';

const DefCom = () => <h1>HOME</h1>

export const publicRoutes = [
    {
        path: EXPLORE,
        id: EXPLORE,
        Component: ExploreContainer
    },
    {
        path: TRENDS,
        id: TRENDS,
        Component: TrendingContainer
    },
    {
        path: SUBS,
        id: SUBS,
        Component: DefCom
    }
];

export const privateRoutes = [
    {
        path: LIBRARY,
        id: LIBRARY,
        Component: DefCom
    },
    {
        path: HISTORY,
        id: HISTORY,
        Component: DefCom
    },
    {
        path: LATER,
        id: LATER,
        Component: DefCom
    },
    {
        path: LIKES,
        id: LIKES,
        Component: DefCom
    },
];

export const metaRoutes = [
    {
        path: FEEDBACK,
        id: FEEDBACK,
        Component: DefCom
    },
    {
        path: SETTINGS,
        id: SETTINGS,
        Component: DefCom
    },
];