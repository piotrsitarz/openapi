'use strict';


/**
 * Delete Persona
 * Delete Persona for specific user
 *
 * personaId Integer 
 * no response value expected for this operation
 **/
exports.deletePersona = function(personaId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List of all user personas
 * List of all user personas(default the same for everybody + predefined)
 *
 * returns List
 **/
exports.getPersonas = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "attributes" : { },
  "id" : 0,
  "type" : "default",
  "conditions" : { }
}, {
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "attributes" : { },
  "id" : 0,
  "type" : "default",
  "conditions" : { }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create Persona
 * Create Persona for specific user
 *
 * body Personas_body_1  (optional)
 * returns inline_response_201
 **/
exports.savePersona = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "personaId" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Persona
 * Update specific user Persona
 *
 * body Personas_body  (optional)
 * no response value expected for this operation
 **/
exports.updatePersona = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

