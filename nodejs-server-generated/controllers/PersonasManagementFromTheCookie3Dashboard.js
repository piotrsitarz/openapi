'use strict';

var utils = require('../utils/writer.js');
var PersonasManagementFromTheCookie3Dashboard = require('../service/PersonasManagementFromTheCookie3DashboardService');

module.exports.deletePersona = function deletePersona (req, res, next, personaId) {
  PersonasManagementFromTheCookie3Dashboard.deletePersona(personaId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPersonas = function getPersonas (req, res, next) {
  PersonasManagementFromTheCookie3Dashboard.getPersonas()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.savePersona = function savePersona (req, res, next, body) {
  PersonasManagementFromTheCookie3Dashboard.savePersona(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePersona = function updatePersona (req, res, next, body) {
  PersonasManagementFromTheCookie3Dashboard.updatePersona(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
