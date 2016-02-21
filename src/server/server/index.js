import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import slash from 'express-slash';
import methodOverride from 'method-override';
import responseTime from 'response-time';
import {registerRoutes} from './routes';

export function buildServer() {
    const app = express();
    app.use(responseTime());
    app.use(bodyParser.json());
    app.use(compression());
    app.use(methodOverride('X-HTTP-Method-Override'));

    app.enable('strict routing');
    app.enable('case sensitive router');

    const router = express.Router({
        caseSensitive: app.get('case sensitive router'),
        strict: app.get('strict routing')
    })
    app.use(router);
    app.use(slash());

    registerRoutes(router);

    return app;
}
