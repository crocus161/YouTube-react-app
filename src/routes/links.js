import {ReactComponent as ExploreIcon} from '../assets/NavLinkIcon/explore.svg';
import {ReactComponent as TrendingIcon} from '../assets/NavLinkIcon/trending.svg';
import {ReactComponent as SubIcon} from '../assets/NavLinkIcon/subs.svg';
import {ReactComponent as LibIcon} from '../assets/NavLinkIcon/library.svg';
import {ReactComponent as HistoryIcon} from '../assets/NavLinkIcon/history.svg';
import {ReactComponent as LaterIcon} from '../assets/NavLinkIcon/later.svg';
import {ReactComponent as LikesIcon} from '../assets/NavLinkIcon/likes.svg';
import {ReactComponent as SettingsIcon} from '../assets/NavLinkIcon/settings.svg';
import {ReactComponent as FeedbackIcon} from '../assets/NavLinkIcon/feedback.svg';
import { EXPLORE, FEEDBACK, HISTORY, LATER, LIBRARY, LIKES, SETTINGS, SUBS, TRENDS } from './consts';

export const publicLinks = [
    {
        title: 'Explore',
        Icon: ExploreIcon,
        path: EXPLORE,
        id: EXPLORE
    },
    {
        title: 'Tranding',
        Icon: TrendingIcon,
        path: TRENDS,
        id: TRENDS
    },
    {
        title: 'Subscription',
        Icon: SubIcon,
        path: SUBS,
        id: SUBS
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
        title: 'Watch later',
        Icon: LaterIcon,
        path: LATER,
        id: LATER
    },
    {
        title: 'Likes videos',
        Icon: LikesIcon,
        path: LIKES,
        id: LIKES
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