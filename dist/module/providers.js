"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCouchDbProviders = exports.createCouchDbRepositoryProvider = exports.createCouchDbConnectionProviders = void 0;
const couchdb_1 = require("../couchdb");
const utils_1 = require("./utils");
const createCouchDbConnectionProviders = (config) => [
    {
        provide: (0, utils_1.getConnectionToken)(),
        useFactory: async () => couchdb_1.CouchDbConnectionFactory.create(config),
    },
    {
        provide: (0, utils_1.getRepositoryFactoryToken)(),
        useFactory: (connection) => couchdb_1.CouchDbRepositoryFactory.create(connection, config),
        inject: [(0, utils_1.getConnectionToken)()],
    },
];
exports.createCouchDbConnectionProviders = createCouchDbConnectionProviders;
const createCouchDbRepositoryProvider = (entity) => ({
    provide: (0, utils_1.getRepositoryToken)(entity),
    useFactory: async (repositoryFactory) => repositoryFactory.create(entity),
    inject: [(0, utils_1.getRepositoryFactoryToken)()],
});
exports.createCouchDbRepositoryProvider = createCouchDbRepositoryProvider;
const createCouchDbProviders = (entities) => entities.map(exports.createCouchDbRepositoryProvider);
exports.createCouchDbProviders = createCouchDbProviders;
//# sourceMappingURL=providers.js.map