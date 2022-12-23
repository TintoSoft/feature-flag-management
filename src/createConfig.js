const fs = require("fs");

const path = `${__dirname}/featureFlags.json`;

const loadFeatureFlags = (featureFlags) => {
  fs.rmSync(path, { force: true });
  fs.writeFileSync(path, JSON.stringify(featureFlags));
};

module.exports = { loadFeatureFlags };
