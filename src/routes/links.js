import SubIcon from '../assets/icons/subs.svg?react';
import LibIcon from '../assets/icons/library.svg?react';
import LikesIcon from '../assets/icons/likes.svg?react';
import SearchIcon from '../assets/icons/search.svg?react';
import HistoryIcon from '../assets/icons/history.svg?react';
import ExploreIcon from '../assets/icons/explore.svg?react';
import TrendingIcon from '../assets/icons/trending.svg?react';
import SettingsIcon from '../assets/icons/settings.svg?react';
import FeedbackIcon from '../assets/icons/feedback.svg?react';
import { EXPLORE, FEEDBACK, HISTORY, LIBRARY, LIKES, SEARCH, SETTINGS, SUBS, TRENDS } from './consts';

export const publicLinks = [
    {
        title: 'Search',
        Icon: SearchIcon,
        path: SEARCH,
        id: SEARCH
    },
    {
        title: 'Explore',
        Icon: ExploreIcon,
        path: EXPLORE,
        id: EXPLORE
    },
    {
        title: 'Trending',
        Icon: TrendingIcon,
        path: TRENDS,
        id: TRENDS
    },
]

export const privateLinks = [
    {
        title: 'Library',
        Icon: LibIcon,
        path: LIBRARY,
        id: LIBRARY
    },
    {
        title: 'History',
        Icon: HistoryIcon,
        path: HISTORY,
        id: HISTORY
    },
    {
        title: 'Like videos',
        Icon: LikesIcon,
        path: LIKES,
        id: LIKES
    },
    {
        title: 'Subscription',
        Icon: SubIcon,
        path: SUBS,
        id: SUBS
    },
]

export const metaLinks = [
    {
        title: 'Settings',
        Icon: SettingsIcon,
        path: SETTINGS,
        id: SETTINGS
    },
    {
        title: 'Send feedback',
        Icon: FeedbackIcon,
        path: FEEDBACK,
        id: FEEDBACK
    },

]