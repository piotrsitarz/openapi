'use strict';

var utils = require('../utils/writer.js');
var PersonasReadOnlySDK = require('../service/PersonasReadOnlySDKService');

module.exports.getWalletPersonaComparison = function getWalletPersonaComparison (req, res, next, personaId, walletAddress) {
  PersonasReadOnlySDK.getWalletPersonaComparison(personaId, walletAddress)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
