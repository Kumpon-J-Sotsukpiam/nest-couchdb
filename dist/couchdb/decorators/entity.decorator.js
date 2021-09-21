"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const couchdb_constants_1 = require("../couchdb.constants");
const Entity = (db) => (target) => {
    Reflect.defineMetadata(couchdb_constants_1.COUCHDB_ENTITY_METADATA, db, target);
};
exports.Entity = Entity;
//# sourceMappingURL=entity.decorator.js.map