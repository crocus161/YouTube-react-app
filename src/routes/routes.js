import Channel from '../components/Channel/Channel';
import Error from '../components/Error/Error';
import Watch from '../components/Watch/Watch';
import ExploreContainer from '../containers/ExploreContainer';
import SearchContainer from '../containers/SearchContainer';
import TrendingContainer from '../containers/TrendingContainer';
import LikeVideosContainer from '../containers/LikeVideosContainer';
import { CHANNEL, ERROR, EXPLORE, FEEDBACK, HISTORY, LATER, LIBRARY, LIKES, NOT_FOUND, SEARCH, SETTINGS, SUBS, TRENDS, WATCH } from './consts';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import Construction from '../components/Construction/Construction';
import SubsChannelContainer from '../containers/SubsChannelContainer';

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
        Component: SubsChannelContainer
    },
    {
        path: LIBRARY,
        id: LIBRARY,
        Component: Construction
    },
    {
        path: HISTORY,
        id: HISTORY,
        Component: Construction
    },
    {
        path: LATER,
        id: LATER,
        Component: Construction
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
        Component: Construction
    },
    {
        path: SETTINGS,
        id: SETTINGS,
        Component: Construction
    },
];