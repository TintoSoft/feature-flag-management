const createConfig = require("./createConfig");
const featureFlagsService = require("./featureFlagsService");
createConfig.loadFeatureFlags({ prueba: true });
const resp = featureFlagsService.getFlagStatus("prueba");
console.log({ resp });
module.exports = { featureFlagsService };
