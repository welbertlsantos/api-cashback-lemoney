import getApp from "./src/app.js";
import { log } from './src/utils/utils.js'

(async () => {
  try {
    const app = await getApp();
    
    app.listen(process.env.CONS_APP_PORT, () => {
        log.info(`${process.env.CONS_APP_PROTOCOL}://${process.env.CONS_APP_DOMAIN}:${process.env.CONS_APP_PORT}${process.env.CONS_APP_PATH}`);
    });

  } catch (error) {
      log.error('App failed to start', error);
  }
})();