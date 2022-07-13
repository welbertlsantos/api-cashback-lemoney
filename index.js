import getApp from "./src/app";
import { log } from './src/utils/utils'

(async () => {
    try {
        const app = getApp();
        
        app.listen(process.env.CONS_APP_PORT, () => {
            log.info(`{}`)

        });
        
    } catch (error) {
        log.error('App failed to start', error);
    }

})();