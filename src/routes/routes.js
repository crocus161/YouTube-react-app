import Error from '../components/Error/Error';
import Watch from '../components/Watch/Watch';
import ExploreContainer from '../containers/ExploreContainer';
import SearchContainer from '../containers/SearchContainer';
import TrendingContainer from '../containers/TrendingContainer';
import { ERROR, EXPLORE, FEEDBACK, HISTORY, LATER, LIBRARY, LIKES, SEARCH, SETTINGS, SUBS, TRENDS, WATCH } from './consts';

const DefCom = () => <h1>Default component</h1>

export const publicRoutes = [
    {
        path: ERROR,
        id: ERROR,
        Component: Error
    },
    {
        path: `${WATCH}/:videoId`,
        id: WATCH,
        Component: Watch
    },
    {
        path: SEARCH,
        id: SEARCH,
        Component: SearchContainer
    },
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