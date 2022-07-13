export default {
    debug: (...params) => (console.log('[DEB] :::', new Date().toISOString(), ':::', ...params)),
    info: (...params) => (console.log('[INF] :::', new Date().toISOString(), ':::', ...params)),
    error: (...params) => (console.log('[ERR] :::', new Date().toISOString(), ':::', ...params))
};