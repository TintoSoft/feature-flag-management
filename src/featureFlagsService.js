const getFlagStatus = (flagName) => {
  const featureFlags = require("./featureFlags.json");
  if (!featureFlags) return;

  return featureFlags[flagName];
};

module.exports = { getFlagStatus };
