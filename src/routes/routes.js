import { EXPLORE, FEEDBACK, HISTORY, HOME, LATER, LIBRARY, LIKES, SETTINGS, SUBS, TRENDS } from "./consts";

export const publicRoutes = [
    {
        path: HOME,
        id: HOME,
        Component: '<h1>HOME</h1>'
    },
    {
        path: EXPLORE,
        id: EXPLORE,
        Component: '<h1>EXPLORE</h1>'
    },
    {
        path: TRENDS,
        id: TRENDS,
        Component: '<h1>TRENDS</h1>'
    },
    {
        path: SUBS,
        id: SUBS,
        Component: '<h1>SUBS</h1>'
    }
];

export const privateRoutes = [
    {
        path: LIBRARY,
        id: LIBRARY,
        Component: '<h1>LIBRARY</h1>'
    },
    {
        path: HISTORY,
        id: HISTORY,
        Component: '<h1>HISTORY</h1>'
    },
    {
        path: LATER,
        id: LATER,
        Component: '<h1>LATER</h1>'
    },
    {
        path: LIKES,
        id: LIKES,
        Component: '<h1>LIKES</h1>'
    },
];

export const metaRoutes = [
    {
        path: FEEDBACK,
        id: FEEDBACK,
        Component: '<h1>FEEDBACK</h1>'
    },
    {
        path: SETTINGS,
        id: SETTINGS,
        Component: '<h1>SETTINGS</h1>'
    },
];