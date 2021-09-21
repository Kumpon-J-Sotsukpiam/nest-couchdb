"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRepositoryToken = exports.getRepositoryFactoryToken = exports.getConnectionToken = void 0;
const constants_1 = require("./constants");
const getConnectionToken = () => constants_1.COUCHDB_CONNECTION_TOKEN;
exports.getConnectionToken = getConnectionToken;
const getRepositoryFactoryToken = () => constants_1.COUCHDB_REPOSITORY_FACTORY_TOKEN;
exports.getRepositoryFactoryToken = getRepositoryFactoryToken;
const getRepositoryToken = (entity) => `${entity.name}_REPOSITORY_TOKEN`;
exports.getRepositoryToken = getRepositoryToken;
//# sourceMappingURL=utils.js.map