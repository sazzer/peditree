import {registerRoutes as registerDebugRoutes} from './debug';

export function registerRoutes(router) {
    registerDebugRoutes(router);
    router.get('/api/hello', (req, res) => res.send({name: 'Hello, World'}));
    router.post('/api/hello', (req, res) => res.send({name: 'Goodbye, World'}));
}
