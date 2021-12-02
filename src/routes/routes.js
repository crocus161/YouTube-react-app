import Channel from '../components/Channel/Channel';
import Error from '../components/Error/Error';
import Watch from '../components/Watch/Watch';
import ExploreContainer from '../containers/ExploreContainer';
import SearchContainer from '../containers/SearchContainer';
import TrendingContainer from '../containers/TrendingContainer';
import LikeVideosContainer from '../containers/LikeVideosContainer';
import { CHANNEL, ERROR, EXPLORE, FEEDBACK, HISTORY, LATER, LIBRARY, LIKES, NOT_FOUND, SEARCH, SETTINGS, SUBS, TRENDS, WATCH } from './consts';
import PageNotFound from '../components/PageNotFound/PageNotFound';

const DefCom = () => <h1>Default component</h1>

export const publicRoutes = [
    {
        path: `${CHANNEL}/:channelId`,
        id: CHANNEL,
        Component: Channel
    },
    {
        path: ERROR,
        id: ERROR,
        Component: Error
    },
    {
        path: NOT_FOUND,
        id: NOT_FOUND,
        Component: PageNotFound
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
];

export const privateRoutes = [
    {
        path: SUBS,
        id: SUBS,
        Component: DefCom
    },
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
        Component: LikeVideosContainer
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