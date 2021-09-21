import { Provider } from '@nestjs/common';
import { CouchDbConnectionConfig } from '../couchdb';
export declare const createCouchDbConnectionProviders: (config: CouchDbConnectionConfig) => Provider[];
export declare const createCouchDbRepositoryProvider: (entity: Function) => Provider;
export declare const createCouchDbProviders: (entities: Function[]) => Provider[];
