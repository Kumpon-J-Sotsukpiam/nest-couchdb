"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEntityMetadata = void 0;
const couchdb_constants_1 = require("./couchdb.constants");
const getEntityMetadata = (entity) => Reflect.getMetadata(couchdb_constants_1.COUCHDB_ENTITY_METADATA, entity);
exports.getEntityMetadata = getEntityMetadata;
//# sourceMappingURL=couchdb.utils.js.map