'use strict';


/**
 * Compare wallet address with Persona
 * Compare your wallet address with Persona to see if it meets the criteria
 *
 * personaId Integer 
 * walletAddress Integer 
 * returns inline_response_200
 **/
exports.getWalletPersonaComparison = function(personaId,walletAddress) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "isMatchedPersona" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

