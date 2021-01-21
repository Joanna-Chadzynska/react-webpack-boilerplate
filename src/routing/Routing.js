import * as ROUTES from 'constants/routes';
import {
    About,
    Contact,
    Home,
    NotFound,
    SignIn,
    SignUp,
} from 'pages';
import React from 'react';
import {
    AnimatedRoutes,
    RouteTransition,
} from './animation/RouteTransition';

const Routing = () => {
    return (
        <AnimatedRoutes exitBeforeEnter initial={false}>
            <RouteTransition exact path={ROUTES.HOME} slideUp={30}>
                <Home />
            </RouteTransition>
            <RouteTransition exact path={ROUTES.ABOUT} slideUp={30}>
                <About />
            </RouteTransition>
            <RouteTransition exact path={ROUTES.CONTACT} slideUp={30}>
                <Contact />
            </RouteTransition>
            <RouteTransition exact path={ROUTES.SIGN_IN} slideUp={30}>
                <SignIn />
            </RouteTransition>
            <RouteTransition exact path={ROUTES.SIGN_UP} slideUp={30}>
                <SignUp />
            </RouteTransition>
            <RouteTransition exact path="*" slideUp={30}>
                <NotFound />
            </RouteTransition>
        </AnimatedRoutes>
    );
};

export default Routing;
