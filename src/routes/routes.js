import Error from '../components/Error/Error';
import Watch from '../components/Watch/Watch';
import Channel from '../components/Channel/Channel';
import SearchContainer from '../containers/SearchContainer';
import ExploreContainer from '../containers/ExploreContainer';
import FeedbackContainer from '../containers/FeedbackContainer';
import TrendingContainer from '../containers/TrendingContainer';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import Construction from '../components/Construction/Construction';
import LikeVideosContainer from '../containers/LikeVideosContainer';
import SubsChannelContainer from '../containers/SubsChannelContainer';
import { CHANNEL, ERROR, EXPLORE, FEEDBACK, HISTORY, LATER, LIBRARY, LIKES, NOT_FOUND, SEARCH, SETTINGS, SUBS, TRENDS, WATCH } from './consts';

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
        Component: FeedbackContainer
    },
    {
        path: SETTINGS,
        id: SETTINGS,
        Component: Construction
    },
];