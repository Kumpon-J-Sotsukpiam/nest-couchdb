"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectConnection = exports.InjectRepository = void 0;
const common_1 = require("@nestjs/common");
const utils_1 = require("./utils");
const InjectRepository = (entity) => (0, common_1.Inject)((0, utils_1.getRepositoryToken)(entity));
exports.InjectRepository = InjectRepository;
const InjectConnection = () => (0, common_1.Inject)((0, utils_1.getConnectionToken)());
exports.InjectConnection = InjectConnection;
//# sourceMappingURL=couchdb.decorators.js.map