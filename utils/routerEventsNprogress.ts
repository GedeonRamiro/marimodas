import { Router } from 'next/router';
import nProgress from 'nprogress';

export const routerEventsNProgress = () => {
    Router.events.on('routeChangeStart', () => nProgress.start());
    Router.events.on('routeChangeComplete', () => nProgress.done());
    Router.events.on('routeChangeError', () => nProgress.done());
};
