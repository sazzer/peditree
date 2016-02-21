import packageInfo from '../../../../package';

export function registerRoutes(router) {
    router.get('/api/debug/info', (req, res) => {
        res.send({
            name: packageInfo.name,
            version: packageInfo.version,
            description: packageInfo.description,
            bugs: packageInfo.bugs,
            homepage: packageInfo.homepage
        });
    });
}
