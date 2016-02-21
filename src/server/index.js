import {buildServer} from './server';

const app = buildServer();
app.listen(3000, () => {
    console.log('Listening on port 3000');
});
