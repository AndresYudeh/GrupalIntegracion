/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/ws-server/src/app.controller.ts":
/*!**********************************************!*\
  !*** ./apps/ws-server/src/app.controller.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/ws-server/src/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),

/***/ "./apps/ws-server/src/app.module.ts":
/*!******************************************!*\
  !*** ./apps/ws-server/src/app.module.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const reportes_gateway_1 = __webpack_require__(/*! ./reportes/reportes.gateway */ "./apps/ws-server/src/reportes/reportes.gateway.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./apps/ws-server/src/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/ws-server/src/app.service.ts");
const repostaje_module_1 = __webpack_require__(/*! ./repostaje/repostaje.module */ "./apps/ws-server/src/repostaje/repostaje.module.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const path_1 = __webpack_require__(/*! path */ "path");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const apollo_1 = __webpack_require__(/*! @nestjs/apollo */ "@nestjs/apollo");
const default_1 = __webpack_require__(/*! @apollo/server/plugin/landingPage/default */ "@apollo/server/plugin/landingPage/default");
const reportes_module_1 = __webpack_require__(/*! ./reportes/reportes.module */ "./apps/ws-server/src/reportes/reportes.module.ts");
const unidades_module_1 = __webpack_require__(/*! ./unidades/unidades.module */ "./apps/ws-server/src/unidades/unidades.module.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const usuarios_module_1 = __webpack_require__(/*! ./usuarios/usuarios.module */ "./apps/ws-server/src/usuarios/usuarios.module.ts");
const repostaje_entity_1 = __webpack_require__(/*! ./repostaje/entities/repostaje.entity */ "./apps/ws-server/src/repostaje/entities/repostaje.entity.ts");
const reporte_entity_1 = __webpack_require__(/*! ./reportes/entities/reporte.entity */ "./apps/ws-server/src/reportes/entities/reporte.entity.ts");
const reporterela_entity_1 = __webpack_require__(/*! ./reportes/entities/reporterela.entity */ "./apps/ws-server/src/reportes/entities/reporterela.entity.ts");
const unidade_entity_1 = __webpack_require__(/*! ./unidades/entities/unidade.entity */ "./apps/ws-server/src/unidades/entities/unidade.entity.ts");
const usuario_entity_1 = __webpack_require__(/*! ./usuarios/entities/usuario.entity */ "./apps/ws-server/src/usuarios/entities/usuario.entity.ts");
const mantenimientos_module_1 = __webpack_require__(/*! ./mantenimientos/mantenimientos.module */ "./apps/ws-server/src/mantenimientos/mantenimientos.module.ts");
const mantenimiento_entity_1 = __webpack_require__(/*! ./mantenimientos/entities/mantenimiento.entity */ "./apps/ws-server/src/mantenimientos/entities/mantenimiento.entity.ts");
const edge_analytics_middleware_1 = __webpack_require__(/*! ./middleware/edge-analytics.middleware */ "./apps/ws-server/src/middleware/edge-analytics.middleware.ts");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(edge_analytics_middleware_1.EdgeAnalyticsMiddleware).forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://aw2:Admin2023@backyardigans.z0jx9hg.mongodb.net/?retryWrites=true&w=majority'),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                playground: false,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                plugins: [
                    (0, default_1.ApolloServerPluginLandingPageLocalDefault)()
                ]
            }),
            repostaje_module_1.RepostajeModule,
            typeorm_1.TypeOrmModule.forRoot({
                "type": "mysql",
                "host": "localhost",
                "port": 3306,
                "username": "root",
                "password": "",
                "database": "city2",
                "entities": [repostaje_entity_1.Repostaje, reporte_entity_1.Reporte, unidade_entity_1.Unidade, usuario_entity_1.Usuario, reporterela_entity_1.ReporteRela, mantenimiento_entity_1.Mantenimiento],
                "synchronize": true,
                "logging": true
            }),
            reportes_module_1.ReportesModule,
            unidades_module_1.UnidadesModule,
            usuarios_module_1.UsuariosModule,
            mantenimientos_module_1.MantenimientosModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            reportes_gateway_1.ReportesGateway, app_service_1.AppService
        ],
    })
], AppModule);


/***/ }),

/***/ "./apps/ws-server/src/app.service.ts":
/*!*******************************************!*\
  !*** ./apps/ws-server/src/app.service.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ }),

/***/ "./apps/ws-server/src/mantenimientos/dto/create-mantenimiento.dto.ts":
/*!***************************************************************************!*\
  !*** ./apps/ws-server/src/mantenimientos/dto/create-mantenimiento.dto.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateMantenimientoInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
let CreateMantenimientoInput = class CreateMantenimientoInput {
};
exports.CreateMantenimientoInput = CreateMantenimientoInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateMantenimientoInput.prototype, "MANTENIMIENTO_KMAC", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateMantenimientoInput.prototype, "MANTENIMIENTO_KMPROX", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateMantenimientoInput.prototype, "MANTENIMIENTO_COMENTARIO", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CreateMantenimientoInput.prototype, "FECHA", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMantenimientoInput.prototype, "UNIDADES_PLACA", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateMantenimientoInput.prototype, "TIPOSMANTE_ID", void 0);
exports.CreateMantenimientoInput = CreateMantenimientoInput = __decorate([
    (0, graphql_1.InputType)()
], CreateMantenimientoInput);


/***/ }),

/***/ "./apps/ws-server/src/mantenimientos/dto/update-mantenimiento.dto.ts":
/*!***************************************************************************!*\
  !*** ./apps/ws-server/src/mantenimientos/dto/update-mantenimiento.dto.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateMantenimientoInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const create_mantenimiento_dto_1 = __webpack_require__(/*! ./create-mantenimiento.dto */ "./apps/ws-server/src/mantenimientos/dto/create-mantenimiento.dto.ts");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
let UpdateMantenimientoInput = class UpdateMantenimientoInput extends (0, graphql_1.PartialType)(create_mantenimiento_dto_1.CreateMantenimientoInput) {
};
exports.UpdateMantenimientoInput = UpdateMantenimientoInput;
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateMantenimientoInput.prototype, "ESTADO", void 0);
exports.UpdateMantenimientoInput = UpdateMantenimientoInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateMantenimientoInput);


/***/ }),

/***/ "./apps/ws-server/src/mantenimientos/entities/mantenimiento.entity.ts":
/*!****************************************************************************!*\
  !*** ./apps/ws-server/src/mantenimientos/entities/mantenimiento.entity.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Mantenimiento = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Mantenimiento = class Mantenimiento {
};
exports.Mantenimiento = Mantenimiento;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, graphql_1.Field)(() => graphql_1.ID, { nullable: true }),
    __metadata("design:type", Number)
], Mantenimiento.prototype, "MANTENIMIENTO_ID", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, type: 'int' }),
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], Mantenimiento.prototype, "MANTENIMIENTO_KMAC", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, type: 'int' }),
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], Mantenimiento.prototype, "MANTENIMIENTO_KMPROX", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'text' }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Mantenimiento.prototype, "MANTENIMIENTO_COMENTARIO", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime' }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Mantenimiento.prototype, "FECHA", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true, type: 'boolean' }),
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], Mantenimiento.prototype, "ESTADO", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'text' }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Mantenimiento.prototype, "UNIDADES_PLACA", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, type: 'int' }),
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], Mantenimiento.prototype, "TIPOSMANTE_ID", void 0);
exports.Mantenimiento = Mantenimiento = __decorate([
    (0, typeorm_1.Entity)('mantenimiento'),
    (0, graphql_1.ObjectType)()
], Mantenimiento);


/***/ }),

/***/ "./apps/ws-server/src/mantenimientos/mantenimientos.controller.ts":
/*!************************************************************************!*\
  !*** ./apps/ws-server/src/mantenimientos/mantenimientos.controller.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MantenimientosController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mantenimientos_service_1 = __webpack_require__(/*! ./mantenimientos.service */ "./apps/ws-server/src/mantenimientos/mantenimientos.service.ts");
const create_mantenimiento_dto_1 = __webpack_require__(/*! ./dto/create-mantenimiento.dto */ "./apps/ws-server/src/mantenimientos/dto/create-mantenimiento.dto.ts");
const update_mantenimiento_dto_1 = __webpack_require__(/*! ./dto/update-mantenimiento.dto */ "./apps/ws-server/src/mantenimientos/dto/update-mantenimiento.dto.ts");
let MantenimientosController = class MantenimientosController {
    constructor(mantenimientoService) {
        this.mantenimientoService = mantenimientoService;
    }
    create(createMantenimientoDto) {
        return this.mantenimientoService.create(createMantenimientoDto);
    }
    findAll() {
        return this.mantenimientoService.findAll();
    }
    async findOne(MANTENIMIENTO_ID) {
        try {
            const mantenimiento = await this.mantenimientoService.findOne(MANTENIMIENTO_ID);
            return mantenimiento;
        }
        catch (error) {
            throw new common_1.NotFoundException('Mantenimiento no encontrado');
        }
    }
    async update(MANTENIMIENTO_ID, UpdateMantenimientoInput) {
        try {
            const mantenimiento = await this.mantenimientoService.update(MANTENIMIENTO_ID, UpdateMantenimientoInput);
            console.log('Mantenimiento updated successfully:', mantenimiento);
            return { message: 'Mantenimiento actualizado con éxito', mantenimiento };
        }
        catch (error) {
            console.error('Error updating mantenimiento:', error);
            throw new common_1.NotFoundException('No se pudo actualizar el mantenimiento');
        }
    }
    async remove(MANTENIMIENTO_ID) {
        try {
            await this.mantenimientoService.remove(MANTENIMIENTO_ID);
            return { message: 'Mantenimiento eliminado con éxito' };
        }
        catch (error) {
            throw new common_1.NotFoundException('No se pudo eliminar el mantenimiento');
        }
    }
};
exports.MantenimientosController = MantenimientosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_mantenimiento_dto_1.CreateMantenimientoInput !== "undefined" && create_mantenimiento_dto_1.CreateMantenimientoInput) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], MantenimientosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MantenimientosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':MANTENIMIENTO_ID'),
    __param(0, (0, common_1.Param)('MANTENIMIENTO_ID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MantenimientosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':MANTENIMIENTO_ID'),
    __param(0, (0, common_1.Param)('MANTENIMIENTO_ID')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_c = typeof update_mantenimiento_dto_1.UpdateMantenimientoInput !== "undefined" && update_mantenimiento_dto_1.UpdateMantenimientoInput) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], MantenimientosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':MANTENIMIENTO_ID'),
    __param(0, (0, common_1.Param)('MANTENIMIENTO_ID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MantenimientosController.prototype, "remove", null);
exports.MantenimientosController = MantenimientosController = __decorate([
    (0, common_1.Controller)('mantenimientos'),
    __metadata("design:paramtypes", [typeof (_a = typeof mantenimientos_service_1.MantenimientosService !== "undefined" && mantenimientos_service_1.MantenimientosService) === "function" ? _a : Object])
], MantenimientosController);


/***/ }),

/***/ "./apps/ws-server/src/mantenimientos/mantenimientos.module.ts":
/*!********************************************************************!*\
  !*** ./apps/ws-server/src/mantenimientos/mantenimientos.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MantenimientosModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mantenimientos_service_1 = __webpack_require__(/*! ./mantenimientos.service */ "./apps/ws-server/src/mantenimientos/mantenimientos.service.ts");
const mantenimientos_controller_1 = __webpack_require__(/*! ./mantenimientos.controller */ "./apps/ws-server/src/mantenimientos/mantenimientos.controller.ts");
const dist_1 = __webpack_require__(/*! @nestjs/typeorm/dist */ "@nestjs/typeorm/dist");
const mantenimiento_entity_1 = __webpack_require__(/*! ./entities/mantenimiento.entity */ "./apps/ws-server/src/mantenimientos/entities/mantenimiento.entity.ts");
const mantenimientos_resolver_1 = __webpack_require__(/*! ./mantenimientos.resolver */ "./apps/ws-server/src/mantenimientos/mantenimientos.resolver.ts");
let MantenimientosModule = class MantenimientosModule {
};
exports.MantenimientosModule = MantenimientosModule;
exports.MantenimientosModule = MantenimientosModule = __decorate([
    (0, common_1.Module)({
        providers: [mantenimientos_service_1.MantenimientosService, mantenimientos_resolver_1.MantenimientosResolver],
        controllers: [mantenimientos_controller_1.MantenimientosController],
        imports: [dist_1.TypeOrmModule.forFeature([mantenimiento_entity_1.Mantenimiento])],
        exports: [mantenimientos_service_1.MantenimientosService, dist_1.TypeOrmModule]
    })
], MantenimientosModule);


/***/ }),

/***/ "./apps/ws-server/src/mantenimientos/mantenimientos.resolver.ts":
/*!**********************************************************************!*\
  !*** ./apps/ws-server/src/mantenimientos/mantenimientos.resolver.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MantenimientosResolver = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mantenimientos_service_1 = __webpack_require__(/*! ./mantenimientos.service */ "./apps/ws-server/src/mantenimientos/mantenimientos.service.ts");
const create_mantenimiento_dto_1 = __webpack_require__(/*! ./dto/create-mantenimiento.dto */ "./apps/ws-server/src/mantenimientos/dto/create-mantenimiento.dto.ts");
const update_mantenimiento_dto_1 = __webpack_require__(/*! ./dto/update-mantenimiento.dto */ "./apps/ws-server/src/mantenimientos/dto/update-mantenimiento.dto.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mantenimiento_entity_1 = __webpack_require__(/*! ./entities/mantenimiento.entity */ "./apps/ws-server/src/mantenimientos/entities/mantenimiento.entity.ts");
let MantenimientosResolver = class MantenimientosResolver {
    constructor(mantenimientoService) {
        this.mantenimientoService = mantenimientoService;
    }
    async createMantenimiento(CreateMantenimientoInput) {
        return this.mantenimientoService.create(CreateMantenimientoInput);
    }
    async mantenimientos() {
        return this.mantenimientoService.findAll();
    }
    async mantenimiento(MANTENIMIENTO_ID) {
        try {
            const mantenimiento = await this.mantenimientoService.findOne(MANTENIMIENTO_ID);
            if (!mantenimiento) {
                throw new common_1.NotFoundException('Mantenimiento no encontrado');
            }
            return mantenimiento;
        }
        catch (error) {
            throw new common_1.NotFoundException('Mantenimiento no encontrado');
        }
    }
    async updateMantenimiento(MANTENIMIENTO_ID, updateMantenimientoInput) {
        try {
            const mantenimiento = await this.mantenimientoService.update(MANTENIMIENTO_ID, updateMantenimientoInput);
            return mantenimiento;
        }
        catch (error) {
            throw new common_1.NotFoundException('No se pudo actualizar el mantenimiento');
        }
    }
    async removeMantenimiento(MANTENIMIENTO_ID) {
        try {
            await this.mantenimientoService.remove(MANTENIMIENTO_ID);
            return true;
        }
        catch (error) {
            throw new common_1.NotFoundException('No se pudo eliminar el mantenimiento');
        }
    }
};
exports.MantenimientosResolver = MantenimientosResolver;
__decorate([
    (0, graphql_1.Mutation)(() => mantenimiento_entity_1.Mantenimiento),
    __param(0, (0, graphql_1.Args)('createMantenimientoInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_mantenimiento_dto_1.CreateMantenimientoInput !== "undefined" && create_mantenimiento_dto_1.CreateMantenimientoInput) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], MantenimientosResolver.prototype, "createMantenimiento", null);
__decorate([
    (0, graphql_1.Query)(() => [mantenimiento_entity_1.Mantenimiento]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MantenimientosResolver.prototype, "mantenimientos", null);
__decorate([
    (0, graphql_1.Query)(() => mantenimiento_entity_1.Mantenimiento),
    __param(0, (0, graphql_1.Args)('MANTENIMIENTO_ID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MantenimientosResolver.prototype, "mantenimiento", null);
__decorate([
    (0, graphql_1.Mutation)(() => mantenimiento_entity_1.Mantenimiento),
    __param(0, (0, graphql_1.Args)('MANTENIMIENTO_ID')),
    __param(1, (0, graphql_1.Args)('updateMantenimientoInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_c = typeof update_mantenimiento_dto_1.UpdateMantenimientoInput !== "undefined" && update_mantenimiento_dto_1.UpdateMantenimientoInput) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], MantenimientosResolver.prototype, "updateMantenimiento", null);
__decorate([
    (0, graphql_1.Mutation)(() => mantenimiento_entity_1.Mantenimiento),
    __param(0, (0, graphql_1.Args)('MANTENIMIENTO_ID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MantenimientosResolver.prototype, "removeMantenimiento", null);
exports.MantenimientosResolver = MantenimientosResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [typeof (_a = typeof mantenimientos_service_1.MantenimientosService !== "undefined" && mantenimientos_service_1.MantenimientosService) === "function" ? _a : Object])
], MantenimientosResolver);


/***/ }),

/***/ "./apps/ws-server/src/mantenimientos/mantenimientos.service.ts":
/*!*********************************************************************!*\
  !*** ./apps/ws-server/src/mantenimientos/mantenimientos.service.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MantenimientosService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mantenimiento_entity_1 = __webpack_require__(/*! ./entities/mantenimiento.entity */ "./apps/ws-server/src/mantenimientos/entities/mantenimiento.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const typeorm_2 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
let MantenimientosService = class MantenimientosService {
    constructor(mantenimientoRepository) {
        this.mantenimientoRepository = mantenimientoRepository;
        this.logger = new common_1.Logger('MantenimientoService');
    }
    async create(createMantenimientoInput) {
        try {
            const mantenimiento = this.mantenimientoRepository.create(createMantenimientoInput);
            await this.mantenimientoRepository.save(mantenimiento);
            return mantenimiento;
        }
        catch (error) {
            console.log(error);
            if (error.code === '23505')
                throw new common_1.BadRequestException(error.detail);
            this.logger.error(error);
            throw new common_1.InternalServerErrorException('Error no esperado');
        }
    }
    findAll() {
        return `Busca algo mas especifico flaco`;
    }
    async findOne(MANTENIMIENTO_ID) {
        console.log(MANTENIMIENTO_ID);
        const mantenimiento = await this.mantenimientoRepository.findOneBy({ MANTENIMIENTO_ID });
        console.log(mantenimiento);
        if (!mantenimiento)
            throw new common_1.NotFoundException(`Mantenimiento ${MANTENIMIENTO_ID} no encontrado`);
        return mantenimiento;
    }
    async update(MANTENIMIENTO_ID, updateMantenimientoInput) {
        console.log('ID del mantenimiento a actualizar en el servicio back:', MANTENIMIENTO_ID);
        try {
            const updateResult = await this.mantenimientoRepository.update(MANTENIMIENTO_ID, updateMantenimientoInput);
            if (updateResult.affected === 0) {
                throw new common_1.NotFoundException(`Mantenimiento con ID ${MANTENIMIENTO_ID} no encontrado`);
            }
            const mantenimiento = await this.mantenimientoRepository.findOne({ where: { MANTENIMIENTO_ID } });
            return mantenimiento;
        }
        catch (error) {
            console.error('Error al actualizar el mantenimiento en el servicio back:', error);
            throw new common_1.InternalServerErrorException('No se pudo actualizar el mantenimiento');
        }
    }
    async remove(MANTENIMIENTO_ID) {
        const mantenimiento = await this.findOne(MANTENIMIENTO_ID);
        await this.mantenimientoRepository.remove(mantenimiento);
        return `This action removes a #${MANTENIMIENTO_ID} repostaje`;
    }
};
exports.MantenimientosService = MantenimientosService;
exports.MantenimientosService = MantenimientosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(mantenimiento_entity_1.Mantenimiento)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object])
], MantenimientosService);


/***/ }),

/***/ "./apps/ws-server/src/middleware/edge-analytics.middleware.ts":
/*!********************************************************************!*\
  !*** ./apps/ws-server/src/middleware/edge-analytics.middleware.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EdgeAnalyticsMiddleware = void 0;
const randomNumber = Math.random();
console.log(randomNumber);
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let EdgeAnalyticsMiddleware = class EdgeAnalyticsMiddleware {
    use(req, res, next) {
        console.log('Middleware ejecutándose para:', req.url);
        if (req.url.includes('/unidades')) {
            const startTime = Date.now();
            res.on('finish', () => {
                const endTime = Date.now();
                const loadTime = endTime - startTime;
                if (!req['analyticsData']) {
                    req['analyticsData'] = {};
                }
                req['analyticsData'] = {
                    ...req['analyticsData'],
                    path: req.url,
                    loadTime: loadTime,
                };
                console.log('Datos de análisis almacenados:', req['analyticsData']);
            });
        }
        next();
    }
    sendAnalyticsData(data) {
        console.log('Datos de análisis:', data);
    }
};
exports.EdgeAnalyticsMiddleware = EdgeAnalyticsMiddleware;
exports.EdgeAnalyticsMiddleware = EdgeAnalyticsMiddleware = __decorate([
    (0, common_1.Injectable)()
], EdgeAnalyticsMiddleware);


/***/ }),

/***/ "./apps/ws-server/src/reportes/dto/createrela-reporte.input.ts":
/*!*********************************************************************!*\
  !*** ./apps/ws-server/src/reportes/dto/createrela-reporte.input.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateReporteRelaInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
let CreateReporteRelaInput = class CreateReporteRelaInput {
};
exports.CreateReporteRelaInput = CreateReporteRelaInput;
__decorate([
    (0, graphql_1.Field)(() => Date),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CreateReporteRelaInput.prototype, "FECHA", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateReporteRelaInput.prototype, "DESCRIPCION", void 0);
exports.CreateReporteRelaInput = CreateReporteRelaInput = __decorate([
    (0, graphql_1.InputType)()
], CreateReporteRelaInput);


/***/ }),

/***/ "./apps/ws-server/src/reportes/dto/updaterela-reporte.input.ts":
/*!*********************************************************************!*\
  !*** ./apps/ws-server/src/reportes/dto/updaterela-reporte.input.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateReporteRelaInput = void 0;
const createrela_reporte_input_1 = __webpack_require__(/*! ./createrela-reporte.input */ "./apps/ws-server/src/reportes/dto/createrela-reporte.input.ts");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
let UpdateReporteRelaInput = class UpdateReporteRelaInput extends (0, graphql_1.PartialType)(createrela_reporte_input_1.CreateReporteRelaInput) {
};
exports.UpdateReporteRelaInput = UpdateReporteRelaInput;
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateReporteRelaInput.prototype, "ESTADO", void 0);
exports.UpdateReporteRelaInput = UpdateReporteRelaInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateReporteRelaInput);


/***/ }),

/***/ "./apps/ws-server/src/reportes/entities/reporte.entity.ts":
/*!****************************************************************!*\
  !*** ./apps/ws-server/src/reportes/entities/reporte.entity.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReporteSchema = exports.Reporte = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let Reporte = class Reporte extends mongoose_2.Document {
};
exports.Reporte = Reporte;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
        unique: true,
    }),
    __metadata("design:type", String)
], Reporte.prototype, "REPORTE_ID", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, mongoose_1.Prop)({
        type: Date,
        required: true,
        default: () => new Date(),
    }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Reporte.prototype, "FECHA", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Reporte.prototype, "DESCRIPCION", void 0);
exports.Reporte = Reporte = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, mongoose_1.Schema)()
], Reporte);
exports.ReporteSchema = mongoose_1.SchemaFactory.createForClass(Reporte);


/***/ }),

/***/ "./apps/ws-server/src/reportes/entities/reporterela.entity.ts":
/*!********************************************************************!*\
  !*** ./apps/ws-server/src/reportes/entities/reporterela.entity.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReporteRela = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let ReporteRela = class ReporteRela {
};
exports.ReporteRela = ReporteRela;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, graphql_1.Field)(() => graphql_1.ID, { nullable: true }),
    __metadata("design:type", Number)
], ReporteRela.prototype, "REPORTE_ID", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true, type: 'boolean' }),
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], ReporteRela.prototype, "ESTADO", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime' }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], ReporteRela.prototype, "FECHA", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'text' }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ReporteRela.prototype, "DESCRIPCION", void 0);
exports.ReporteRela = ReporteRela = __decorate([
    (0, typeorm_1.Entity)('reportes'),
    (0, graphql_1.ObjectType)()
], ReporteRela);


/***/ }),

/***/ "./apps/ws-server/src/reportes/reportes.gateway.ts":
/*!*********************************************************!*\
  !*** ./apps/ws-server/src/reportes/reportes.gateway.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReportesGateway = void 0;
const websockets_1 = __webpack_require__(/*! @nestjs/websockets */ "@nestjs/websockets");
const socket_io_1 = __webpack_require__(/*! socket.io */ "socket.io");
let ReportesGateway = class ReportesGateway {
    notificarNuevoReporte(nuevoReporte) {
        this.server.emit('nuevoReporte', nuevoReporte);
    }
};
exports.ReportesGateway = ReportesGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", typeof (_a = typeof socket_io_1.Server !== "undefined" && socket_io_1.Server) === "function" ? _a : Object)
], ReportesGateway.prototype, "server", void 0);
exports.ReportesGateway = ReportesGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: true })
], ReportesGateway);


/***/ }),

/***/ "./apps/ws-server/src/reportes/reportes.module.ts":
/*!********************************************************!*\
  !*** ./apps/ws-server/src/reportes/reportes.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReportesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const reportes_service_1 = __webpack_require__(/*! ./reportes.service */ "./apps/ws-server/src/reportes/reportes.service.ts");
const reportesrela_service_1 = __webpack_require__(/*! ./reportesrela.service */ "./apps/ws-server/src/reportes/reportesrela.service.ts");
const reportes_resolver_1 = __webpack_require__(/*! ./reportes.resolver */ "./apps/ws-server/src/reportes/reportes.resolver.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const reporte_entity_1 = __webpack_require__(/*! ./entities/reporte.entity */ "./apps/ws-server/src/reportes/entities/reporte.entity.ts");
const reporterela_entity_1 = __webpack_require__(/*! ./entities/reporterela.entity */ "./apps/ws-server/src/reportes/entities/reporterela.entity.ts");
const reportes_gateway_1 = __webpack_require__(/*! ./reportes.gateway */ "./apps/ws-server/src/reportes/reportes.gateway.ts");
const dist_1 = __webpack_require__(/*! @nestjs/typeorm/dist */ "@nestjs/typeorm/dist");
let ReportesModule = class ReportesModule {
};
exports.ReportesModule = ReportesModule;
exports.ReportesModule = ReportesModule = __decorate([
    (0, common_1.Module)({
        providers: [reportes_gateway_1.ReportesGateway, reportes_resolver_1.ReportesResolver, reportes_service_1.ReportesService, reportesrela_service_1.ReportesRelaService],
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: reporte_entity_1.Reporte.name, schema: reporte_entity_1.ReporteSchema }]),
            dist_1.TypeOrmModule.forFeature([reporterela_entity_1.ReporteRela])
        ],
        exports: [reportes_service_1.ReportesService, dist_1.TypeOrmModule, reportesrela_service_1.ReportesRelaService]
    })
], ReportesModule);


/***/ }),

/***/ "./apps/ws-server/src/reportes/reportes.resolver.ts":
/*!**********************************************************!*\
  !*** ./apps/ws-server/src/reportes/reportes.resolver.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReportesResolver = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const reportesrela_service_1 = __webpack_require__(/*! ./reportesrela.service */ "./apps/ws-server/src/reportes/reportesrela.service.ts");
const reporterela_entity_1 = __webpack_require__(/*! ./entities/reporterela.entity */ "./apps/ws-server/src/reportes/entities/reporterela.entity.ts");
const createrela_reporte_input_1 = __webpack_require__(/*! ./dto/createrela-reporte.input */ "./apps/ws-server/src/reportes/dto/createrela-reporte.input.ts");
const updaterela_reporte_input_1 = __webpack_require__(/*! ./dto/updaterela-reporte.input */ "./apps/ws-server/src/reportes/dto/updaterela-reporte.input.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let ReportesResolver = class ReportesResolver {
    constructor(reporteRelaService) {
        this.reporteRelaService = reporteRelaService;
    }
    async createReporte(CreateReporteRelaInput) {
        return this.reporteRelaService.create(CreateReporteRelaInput);
    }
    findAll() {
        return this.reporteRelaService.findAll();
    }
    async reportes(REPORTE_ID) {
        try {
            const reporte = await this.reporteRelaService.findOne(REPORTE_ID);
            if (!reporte) {
                throw new common_1.NotFoundException('Reporte no encontrado');
            }
            return reporte;
        }
        catch (error) {
            throw new common_1.NotFoundException('Reporte no encontrado');
        }
    }
    async updateReporte(REPOSTAJE_ID, updateReporteInput) {
        try {
            const reporte = await this.reporteRelaService.update(REPOSTAJE_ID, updateReporteInput);
            return reporte;
        }
        catch (error) {
            throw new common_1.NotFoundException('No se pudo actualizar el reporte');
        }
    }
    async removeReporte(REPORTE_ID) {
        try {
            await this.reporteRelaService.remove(REPORTE_ID);
            return true;
        }
        catch (error) {
            throw new common_1.NotFoundException('No se pudo eliminar el reporte');
        }
    }
};
exports.ReportesResolver = ReportesResolver;
__decorate([
    (0, graphql_1.Mutation)(() => reporterela_entity_1.ReporteRela),
    __param(0, (0, graphql_1.Args)('createReporteRelaInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof createrela_reporte_input_1.CreateReporteRelaInput !== "undefined" && createrela_reporte_input_1.CreateReporteRelaInput) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], ReportesResolver.prototype, "createReporte", null);
__decorate([
    (0, graphql_1.Query)(() => [reporterela_entity_1.ReporteRela], { name: 'reportes' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReportesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => reporterela_entity_1.ReporteRela),
    __param(0, (0, graphql_1.Args)('REPORTE_ID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReportesResolver.prototype, "reportes", null);
__decorate([
    (0, graphql_1.Mutation)(() => reporterela_entity_1.ReporteRela),
    __param(0, (0, graphql_1.Args)('REPORTE_ID')),
    __param(1, (0, graphql_1.Args)('updateReporteInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_c = typeof updaterela_reporte_input_1.UpdateReporteRelaInput !== "undefined" && updaterela_reporte_input_1.UpdateReporteRelaInput) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], ReportesResolver.prototype, "updateReporte", null);
__decorate([
    (0, graphql_1.Mutation)(() => reporterela_entity_1.ReporteRela),
    __param(0, (0, graphql_1.Args)('REPORTE_ID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReportesResolver.prototype, "removeReporte", null);
exports.ReportesResolver = ReportesResolver = __decorate([
    (0, graphql_1.Resolver)(() => reporterela_entity_1.ReporteRela),
    __metadata("design:paramtypes", [typeof (_a = typeof reportesrela_service_1.ReportesRelaService !== "undefined" && reportesrela_service_1.ReportesRelaService) === "function" ? _a : Object])
], ReportesResolver);


/***/ }),

/***/ "./apps/ws-server/src/reportes/reportes.service.ts":
/*!*********************************************************!*\
  !*** ./apps/ws-server/src/reportes/reportes.service.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReportesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const reporte_entity_1 = __webpack_require__(/*! ./entities/reporte.entity */ "./apps/ws-server/src/reportes/entities/reporte.entity.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const reportes_gateway_1 = __webpack_require__(/*! ./reportes.gateway */ "./apps/ws-server/src/reportes/reportes.gateway.ts");
let ReportesService = class ReportesService {
    constructor(reporteModel, reportesGateway) {
        this.reporteModel = reporteModel;
        this.reportesGateway = reportesGateway;
    }
    async create(createReporteInput) {
        const createdReporte = new this.reporteModel(createReporteInput);
        const newReporte = await createdReporte.save();
        const nuevoReporte = {
            REPORTE_ID: newReporte.REPORTE_ID,
            FECHA: newReporte.FECHA,
            DESCRIPCION: newReporte.DESCRIPCION,
        };
        this.reportesGateway.notificarNuevoReporte(nuevoReporte);
        return newReporte;
    }
    async findAll() {
        return await this.reporteModel.find().exec();
    }
    async findOne(REPORTE_ID) {
        const reporte = await this.reporteModel.findOne({ REPORTE_ID }).exec();
        if (!reporte) {
            throw new common_1.NotFoundException('Repostaje no encontrado');
        }
        return reporte;
    }
    async update(REPORTAJE_ID, updateReporteInput) {
        const updatedReporte = await this.reporteModel.findOneAndUpdate({ REPORTE_ID: REPORTAJE_ID }, updateReporteInput, { new: true });
        if (!updatedReporte) {
            throw new common_1.NotFoundException('No se pudo actualizar el repostaje');
        }
        return updatedReporte;
    }
    async remove(REPORTE_ID) {
        const result = await this.reporteModel.deleteOne({ REPORTE_ID }).exec();
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException('No se pudo eliminar el repostaje');
        }
    }
};
exports.ReportesService = ReportesService;
exports.ReportesService = ReportesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(reporte_entity_1.Reporte.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof reportes_gateway_1.ReportesGateway !== "undefined" && reportes_gateway_1.ReportesGateway) === "function" ? _b : Object])
], ReportesService);


/***/ }),

/***/ "./apps/ws-server/src/reportes/reportesrela.service.ts":
/*!*************************************************************!*\
  !*** ./apps/ws-server/src/reportes/reportesrela.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReportesRelaService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const reporterela_entity_1 = __webpack_require__(/*! ./entities/reporterela.entity */ "./apps/ws-server/src/reportes/entities/reporterela.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const reportes_gateway_1 = __webpack_require__(/*! ./reportes.gateway */ "./apps/ws-server/src/reportes/reportes.gateway.ts");
const typeorm_2 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
let ReportesRelaService = class ReportesRelaService {
    constructor(reporteRepository, reportesGateway) {
        this.reporteRepository = reporteRepository;
        this.reportesGateway = reportesGateway;
        this.logger = new common_1.Logger('ReportesRelaService');
    }
    async create(createReporteRelaInput) {
        try {
            const nuevoReporte = this.reporteRepository.create(createReporteRelaInput);
            await this.reporteRepository.save(nuevoReporte);
            this.reportesGateway.notificarNuevoReporte(nuevoReporte);
            return nuevoReporte;
        }
        catch (error) {
            console.log(error);
            if (error.code === '23505') {
                throw new common_1.BadRequestException(error.detail);
            }
            this.logger.error(`Unexpected error occurred: ${error.message}`, error.stack);
            throw new common_1.InternalServerErrorException('An unexpected error occurred');
        }
    }
    findAll() {
        return `Busca algo mas especifico flaco`;
    }
    async findOne(REPORTE_ID) {
        const reporte = await this.reporteRepository.findOneBy({ REPORTE_ID });
        if (!reporte) {
            throw new common_1.NotFoundException(`Reporte ${REPORTE_ID} no encontrado`);
        }
        return reporte;
    }
    async update(REPORTE_ID, updateReporteInput) {
        const updatedReporte = await this.reporteRepository.preload({
            REPORTE_ID: REPORTE_ID,
            ...updateReporteInput
        });
        if (!updatedReporte)
            throw new common_1.NotFoundException(`Reporte con ID ${REPORTE_ID} no encontrado`);
        try {
            await this.reporteRepository.save(updatedReporte);
            return updatedReporte;
        }
        catch (error) {
            console.log(error);
        }
    }
    async remove(REPORTE_ID) {
        const reporte = await this.findOne(REPORTE_ID);
        await this.reporteRepository.remove(reporte);
        return `This action removes a #${REPORTE_ID} repostaje`;
    }
};
exports.ReportesRelaService = ReportesRelaService;
exports.ReportesRelaService = ReportesRelaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(reporterela_entity_1.ReporteRela)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object, typeof (_b = typeof reportes_gateway_1.ReportesGateway !== "undefined" && reportes_gateway_1.ReportesGateway) === "function" ? _b : Object])
], ReportesRelaService);


/***/ }),

/***/ "./apps/ws-server/src/repostaje/dto/create-repostaje.dto.ts":
/*!******************************************************************!*\
  !*** ./apps/ws-server/src/repostaje/dto/create-repostaje.dto.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateRepostajeInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
let CreateRepostajeInput = class CreateRepostajeInput {
};
exports.CreateRepostajeInput = CreateRepostajeInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateRepostajeInput.prototype, "REPOSTAJE_KMAC", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateRepostajeInput.prototype, "REPOSTAJE_COMENTARIO", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(7),
    __metadata("design:type", String)
], CreateRepostajeInput.prototype, "UNIDADES_PLACA", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateRepostajeInput.prototype, "RUTAS_ID", void 0);
exports.CreateRepostajeInput = CreateRepostajeInput = __decorate([
    (0, graphql_1.InputType)()
], CreateRepostajeInput);


/***/ }),

/***/ "./apps/ws-server/src/repostaje/dto/update-repostaje.dto.ts":
/*!******************************************************************!*\
  !*** ./apps/ws-server/src/repostaje/dto/update-repostaje.dto.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateRepostajeInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const create_repostaje_dto_1 = __webpack_require__(/*! ./create-repostaje.dto */ "./apps/ws-server/src/repostaje/dto/create-repostaje.dto.ts");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
let UpdateRepostajeInput = class UpdateRepostajeInput extends (0, graphql_1.PartialType)(create_repostaje_dto_1.CreateRepostajeInput) {
};
exports.UpdateRepostajeInput = UpdateRepostajeInput;
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateRepostajeInput.prototype, "ESTADO", void 0);
exports.UpdateRepostajeInput = UpdateRepostajeInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateRepostajeInput);


/***/ }),

/***/ "./apps/ws-server/src/repostaje/entities/repostaje.entity.ts":
/*!*******************************************************************!*\
  !*** ./apps/ws-server/src/repostaje/entities/repostaje.entity.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Repostaje = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Repostaje = class Repostaje {
};
exports.Repostaje = Repostaje;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, graphql_1.Field)(() => graphql_1.ID, { nullable: true }),
    __metadata("design:type", Number)
], Repostaje.prototype, "REPOSTAJE_ID", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, type: 'int' }),
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], Repostaje.prototype, "REPOSTAJE_KMAC", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'text' }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Repostaje.prototype, "REPOSTAJE_COMENTARIO", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true, type: 'boolean' }),
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], Repostaje.prototype, "ESTADO", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'text' }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Repostaje.prototype, "UNIDADES_PLACA", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, type: 'int' }),
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], Repostaje.prototype, "RUTAS_ID", void 0);
exports.Repostaje = Repostaje = __decorate([
    (0, typeorm_1.Entity)('repostaje'),
    (0, graphql_1.ObjectType)()
], Repostaje);


/***/ }),

/***/ "./apps/ws-server/src/repostaje/repostaje.controller.ts":
/*!**************************************************************!*\
  !*** ./apps/ws-server/src/repostaje/repostaje.controller.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RepostajeController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const repostaje_service_1 = __webpack_require__(/*! ./repostaje.service */ "./apps/ws-server/src/repostaje/repostaje.service.ts");
const create_repostaje_dto_1 = __webpack_require__(/*! ./dto/create-repostaje.dto */ "./apps/ws-server/src/repostaje/dto/create-repostaje.dto.ts");
const update_repostaje_dto_1 = __webpack_require__(/*! ./dto/update-repostaje.dto */ "./apps/ws-server/src/repostaje/dto/update-repostaje.dto.ts");
let RepostajeController = class RepostajeController {
    constructor(repostajeService) {
        this.repostajeService = repostajeService;
    }
    create(createRepostajeDto) {
        return this.repostajeService.create(createRepostajeDto);
    }
    findAll() {
        return this.repostajeService.findAll();
    }
    async findOne(REPOSTAJE_ID) {
        try {
            const repostaje = await this.repostajeService.findOne(REPOSTAJE_ID);
            return repostaje;
        }
        catch (error) {
            throw new common_1.NotFoundException('Repostaje no encontrado');
        }
    }
    async update(REPOSTAJE_ID, UpdateRepostajeInput) {
        try {
            console.log('Receiving PATCH request for REPOSTAJE_ID:', REPOSTAJE_ID);
            const repostaje = await this.repostajeService.update(REPOSTAJE_ID, UpdateRepostajeInput);
            console.log('Repostaje updated successfully:', repostaje);
            return { message: 'Repostaje actualizado con éxito', repostaje };
        }
        catch (error) {
            console.error('Error updating repostaje:', error);
            throw new common_1.NotFoundException('No se pudo actualizar el repostaje');
        }
    }
    async remove(REPOSTAJE_ID) {
        try {
            await this.repostajeService.remove(REPOSTAJE_ID);
            return { message: 'Repostaje eliminado con éxito' };
        }
        catch (error) {
            throw new common_1.NotFoundException('No se pudo eliminar el producto');
        }
    }
};
exports.RepostajeController = RepostajeController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_repostaje_dto_1.CreateRepostajeInput !== "undefined" && create_repostaje_dto_1.CreateRepostajeInput) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], RepostajeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RepostajeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':REPOSTAJE_ID'),
    __param(0, (0, common_1.Param)('REPOSTAJE_ID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RepostajeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':REPOSTAJE_ID'),
    __param(0, (0, common_1.Param)('REPOSTAJE_ID')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_c = typeof update_repostaje_dto_1.UpdateRepostajeInput !== "undefined" && update_repostaje_dto_1.UpdateRepostajeInput) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], RepostajeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':REPOSTAJE_ID'),
    __param(0, (0, common_1.Param)('REPOSTAJE_ID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RepostajeController.prototype, "remove", null);
exports.RepostajeController = RepostajeController = __decorate([
    (0, common_1.Controller)('repostaje'),
    __metadata("design:paramtypes", [typeof (_a = typeof repostaje_service_1.RepostajeService !== "undefined" && repostaje_service_1.RepostajeService) === "function" ? _a : Object])
], RepostajeController);


/***/ }),

/***/ "./apps/ws-server/src/repostaje/repostaje.module.ts":
/*!**********************************************************!*\
  !*** ./apps/ws-server/src/repostaje/repostaje.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RepostajeModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const repostaje_service_1 = __webpack_require__(/*! ./repostaje.service */ "./apps/ws-server/src/repostaje/repostaje.service.ts");
const repostaje_controller_1 = __webpack_require__(/*! ./repostaje.controller */ "./apps/ws-server/src/repostaje/repostaje.controller.ts");
const dist_1 = __webpack_require__(/*! @nestjs/typeorm/dist */ "@nestjs/typeorm/dist");
const repostaje_entity_1 = __webpack_require__(/*! ./entities/repostaje.entity */ "./apps/ws-server/src/repostaje/entities/repostaje.entity.ts");
const repostaje_resolver_1 = __webpack_require__(/*! ./repostaje.resolver */ "./apps/ws-server/src/repostaje/repostaje.resolver.ts");
let RepostajeModule = class RepostajeModule {
};
exports.RepostajeModule = RepostajeModule;
exports.RepostajeModule = RepostajeModule = __decorate([
    (0, common_1.Module)({
        providers: [repostaje_resolver_1.RepostajeResolver, repostaje_service_1.RepostajeService],
        controllers: [repostaje_controller_1.RepostajeController],
        imports: [dist_1.TypeOrmModule.forFeature([repostaje_entity_1.Repostaje])],
        exports: [repostaje_service_1.RepostajeService, dist_1.TypeOrmModule]
    })
], RepostajeModule);


/***/ }),

/***/ "./apps/ws-server/src/repostaje/repostaje.resolver.ts":
/*!************************************************************!*\
  !*** ./apps/ws-server/src/repostaje/repostaje.resolver.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RepostajeResolver = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const repostaje_service_1 = __webpack_require__(/*! ./repostaje.service */ "./apps/ws-server/src/repostaje/repostaje.service.ts");
const create_repostaje_dto_1 = __webpack_require__(/*! ./dto/create-repostaje.dto */ "./apps/ws-server/src/repostaje/dto/create-repostaje.dto.ts");
const update_repostaje_dto_1 = __webpack_require__(/*! ./dto/update-repostaje.dto */ "./apps/ws-server/src/repostaje/dto/update-repostaje.dto.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const repostaje_entity_1 = __webpack_require__(/*! ./entities/repostaje.entity */ "./apps/ws-server/src/repostaje/entities/repostaje.entity.ts");
let RepostajeResolver = class RepostajeResolver {
    constructor(repostajeService) {
        this.repostajeService = repostajeService;
    }
    async createRepostaje(CreateRepostajeInput) {
        return this.repostajeService.create(CreateRepostajeInput);
    }
    async repostajes() {
        return this.repostajeService.findAll();
    }
    async repostaje(REPOSTAJE_ID) {
        try {
            const repostaje = await this.repostajeService.findOne(REPOSTAJE_ID);
            if (!repostaje) {
                throw new common_1.NotFoundException('Repostaje no encontrado');
            }
            return repostaje;
        }
        catch (error) {
            throw new common_1.NotFoundException('Repostaje no encontrado');
        }
    }
    async updateRepostaje(REPOSTAJE_ID, updateRepostajeInput) {
        try {
            const repostaje = await this.repostajeService.update(REPOSTAJE_ID, updateRepostajeInput);
            return repostaje;
        }
        catch (error) {
            throw new common_1.NotFoundException('No se pudo actualizar el repostaje');
        }
    }
    async removeRepostaje(REPOSTAJE_ID) {
        try {
            await this.repostajeService.remove(REPOSTAJE_ID);
            return true;
        }
        catch (error) {
            throw new common_1.NotFoundException('No se pudo eliminar el repostaje');
        }
    }
};
exports.RepostajeResolver = RepostajeResolver;
__decorate([
    (0, graphql_1.Mutation)(() => repostaje_entity_1.Repostaje),
    __param(0, (0, graphql_1.Args)('createRepostajeInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_repostaje_dto_1.CreateRepostajeInput !== "undefined" && create_repostaje_dto_1.CreateRepostajeInput) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], RepostajeResolver.prototype, "createRepostaje", null);
__decorate([
    (0, graphql_1.Query)(() => [repostaje_entity_1.Repostaje]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RepostajeResolver.prototype, "repostajes", null);
__decorate([
    (0, graphql_1.Query)(() => repostaje_entity_1.Repostaje),
    __param(0, (0, graphql_1.Args)('REPOSTAJE_ID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RepostajeResolver.prototype, "repostaje", null);
__decorate([
    (0, graphql_1.Mutation)(() => repostaje_entity_1.Repostaje),
    __param(0, (0, graphql_1.Args)('REPOSTAJE_ID')),
    __param(1, (0, graphql_1.Args)('updateRepostajeInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_c = typeof update_repostaje_dto_1.UpdateRepostajeInput !== "undefined" && update_repostaje_dto_1.UpdateRepostajeInput) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], RepostajeResolver.prototype, "updateRepostaje", null);
__decorate([
    (0, graphql_1.Mutation)(() => repostaje_entity_1.Repostaje),
    __param(0, (0, graphql_1.Args)('REPOSTAJE_ID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RepostajeResolver.prototype, "removeRepostaje", null);
exports.RepostajeResolver = RepostajeResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [typeof (_a = typeof repostaje_service_1.RepostajeService !== "undefined" && repostaje_service_1.RepostajeService) === "function" ? _a : Object])
], RepostajeResolver);


/***/ }),

/***/ "./apps/ws-server/src/repostaje/repostaje.service.ts":
/*!***********************************************************!*\
  !*** ./apps/ws-server/src/repostaje/repostaje.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RepostajeService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const repostaje_entity_1 = __webpack_require__(/*! ./entities/repostaje.entity */ "./apps/ws-server/src/repostaje/entities/repostaje.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const typeorm_2 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const axios_1 = __webpack_require__(/*! axios */ "axios");
let RepostajeService = class RepostajeService {
    constructor(repostajeRepository) {
        this.repostajeRepository = repostajeRepository;
        this.logger = new common_1.Logger('RepostajeService');
    }
    async create(createRepostajeInput) {
        try {
            const repostaje = this.repostajeRepository.create(createRepostajeInput);
            await this.repostajeRepository.save(repostaje);
            await this.sendDiscordWebhook(repostaje, 1);
            return repostaje;
        }
        catch (error) {
            console.log(error);
            if (error.code === '23505') {
                throw new common_1.BadRequestException(error.detail);
            }
            this.logger.error(error);
            throw new common_1.InternalServerErrorException('Error no esperado');
        }
    }
    async sendDiscordWebhook(repostaje, caso, repostajeAntiguo) {
        const webhookUrl = 'https://discord.com/api/webhooks/1183932463865675846/whny6WLDgnFy36g0gC4yhavYhtVlaCfKzd6YzftkZ9WRJGi9783zAPEnkxfbZqqMwWP1';
        try {
            let mensaje;
            switch (caso) {
                case 1:
                    mensaje = `\`\`\`Nuevo repostaje creado:\nID: ${repostaje.REPOSTAJE_ID}\nComentario: ${repostaje.REPOSTAJE_COMENTARIO}\nKilometraje Anterior: ${repostaje.REPOSTAJE_KMAC}\nPlaca de la Unidad: ${repostaje.UNIDADES_PLACA}\nID de la Ruta: ${repostaje.RUTAS_ID}\`\`\``;
                    break;
                case 2:
                    mensaje = `\`\`\`Repostaje visualizado recientemente:\nID: ${repostaje.REPOSTAJE_ID}\nComentario: ${repostaje.REPOSTAJE_COMENTARIO}\nKilometraje Anterior: ${repostaje.REPOSTAJE_KMAC}\nPlaca de la Unidad: ${repostaje.UNIDADES_PLACA}\nID de la Ruta: ${repostaje.RUTAS_ID}\`\`\``;
                    break;
                case 3:
                    mensaje = `\`\`\`Repostaje eliminado:\nID: ${repostajeAntiguo.REPOSTAJE_ID}\nComentario: ${repostaje.REPOSTAJE_COMENTARIO}\nKilometraje Anterior: ${repostaje.REPOSTAJE_KMAC}\nPlaca de la Unidad: ${repostaje.UNIDADES_PLACA}\nID de la Ruta: ${repostaje.RUTAS_ID}\`\`\``;
                    break;
                default:
                    mensaje = `Repostaje actualizado recientemente:\nID: ${repostaje.REPOSTAJE_ID}\n`;
                    if (repostajeAntiguo) {
                        for (const key in repostajeAntiguo) {
                            if (repostajeAntiguo.hasOwnProperty(key) && key !== 'REPOSTAJE_ID') {
                                const valorAntiguo = repostajeAntiguo[key];
                                const valorNuevo = repostaje[key];
                                if (valorAntiguo !== valorNuevo) {
                                    mensaje += `${key}: ${valorAntiguo} -> ${valorNuevo}\n`;
                                }
                            }
                        }
                    }
            }
            const payload = {
                content: mensaje,
            };
            await axios_1.default.post(webhookUrl, payload);
            console.log('Webhook a Discord enviado con éxito');
        }
        catch (error) {
            console.error('Error al enviar el webhook a Discord:', error.message);
        }
    }
    findAll() {
        return `Busca algo mas especifico flaco`;
    }
    async findOne(REPOSTAJE_ID) {
        const repostaje = await this.repostajeRepository.findOneBy({ REPOSTAJE_ID });
        if (!repostaje) {
            throw new common_1.NotFoundException(`Repostaje ${REPOSTAJE_ID} no encontrado`);
        }
        await this.sendDiscordWebhook(repostaje, 2);
        return repostaje;
    }
    async update(REPOSTAJE_ID, updateRepostajeInput) {
        console.log('ID del repostaje a actualizar en el servicio back:', REPOSTAJE_ID);
        try {
            const repostajeAntiguo = await this.repostajeRepository.findOne({ where: { REPOSTAJE_ID } });
            const updateResult = await this.repostajeRepository.update(REPOSTAJE_ID, updateRepostajeInput);
            if (updateResult.affected === 0) {
                throw new common_1.NotFoundException(`Repostaje con ID ${REPOSTAJE_ID} no encontrado`);
            }
            const repostaje = await this.repostajeRepository.findOne({ where: { REPOSTAJE_ID } });
            await this.sendDiscordWebhook(repostaje, 0, repostajeAntiguo);
            return repostaje;
        }
        catch (error) {
            console.error('Error al actualizar el repostaje en el servicio back:', error);
            throw new common_1.InternalServerErrorException('No se pudo actualizar el repostaje');
        }
    }
    async remove(REPOSTAJE_ID) {
        const repostaje = await this.repostajeRepository.findOneBy({ REPOSTAJE_ID });
        const repostajeAntiguo = { ...repostaje };
        await this.repostajeRepository.remove(repostaje);
        await this.sendDiscordWebhook(repostaje, 3, repostajeAntiguo);
        return `This action removes a #${REPOSTAJE_ID} repostaje`;
    }
};
exports.RepostajeService = RepostajeService;
exports.RepostajeService = RepostajeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(repostaje_entity_1.Repostaje)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object])
], RepostajeService);


/***/ }),

/***/ "./apps/ws-server/src/unidades/dto/create-unidade.dto.ts":
/*!***************************************************************!*\
  !*** ./apps/ws-server/src/unidades/dto/create-unidade.dto.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUnidadeInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
let CreateUnidadeInput = class CreateUnidadeInput {
};
exports.CreateUnidadeInput = CreateUnidadeInput;
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUnidadeInput.prototype, "UNIDADES_PLACA", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateUnidadeInput.prototype, "NUMERO_UNIDAD", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateUnidadeInput.prototype, "ID_EMPRESA", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUnidadeInput.prototype, "CORREO", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUnidadeInput.prototype, "COLOR", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUnidadeInput.prototype, "MATRICULA", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateUnidadeInput.prototype, "ANIO", void 0);
exports.CreateUnidadeInput = CreateUnidadeInput = __decorate([
    (0, graphql_1.InputType)()
], CreateUnidadeInput);


/***/ }),

/***/ "./apps/ws-server/src/unidades/dto/update-unidade.dto.ts":
/*!***************************************************************!*\
  !*** ./apps/ws-server/src/unidades/dto/update-unidade.dto.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUnidadeInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const create_unidade_dto_1 = __webpack_require__(/*! ./create-unidade.dto */ "./apps/ws-server/src/unidades/dto/create-unidade.dto.ts");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
let UpdateUnidadeInput = class UpdateUnidadeInput extends (0, graphql_1.PartialType)(create_unidade_dto_1.CreateUnidadeInput) {
};
exports.UpdateUnidadeInput = UpdateUnidadeInput;
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateUnidadeInput.prototype, "ESTADO", void 0);
exports.UpdateUnidadeInput = UpdateUnidadeInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateUnidadeInput);


/***/ }),

/***/ "./apps/ws-server/src/unidades/entities/unidade.entity.ts":
/*!****************************************************************!*\
  !*** ./apps/ws-server/src/unidades/entities/unidade.entity.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Unidade = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Unidade = class Unidade {
};
exports.Unidade = Unidade;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Number)
], Unidade.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'text' }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Unidade.prototype, "UNIDADES_PLACA", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, type: 'int' }),
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], Unidade.prototype, "NUMERO_UNIDAD", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, type: 'int' }),
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], Unidade.prototype, "ID_EMPRESA", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'text' }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Unidade.prototype, "CORREO", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true, type: 'boolean' }),
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], Unidade.prototype, "ESTADO", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'text' }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Unidade.prototype, "COLOR", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'text' }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Unidade.prototype, "MATRICULA", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, type: 'int' }),
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], Unidade.prototype, "ANIO", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ type: 'datetime', nullable: true }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Unidade.prototype, "deletedAt", void 0);
exports.Unidade = Unidade = __decorate([
    (0, typeorm_1.Entity)('unidade'),
    (0, graphql_1.ObjectType)()
], Unidade);
function PrimaryColumn(target, propertyKey) {
    throw new Error('Function not implemented.');
}


/***/ }),

/***/ "./apps/ws-server/src/unidades/unidades.controller.ts":
/*!************************************************************!*\
  !*** ./apps/ws-server/src/unidades/unidades.controller.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UnidadesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const unidades_service_1 = __webpack_require__(/*! ./unidades.service */ "./apps/ws-server/src/unidades/unidades.service.ts");
const create_unidade_dto_1 = __webpack_require__(/*! ./dto/create-unidade.dto */ "./apps/ws-server/src/unidades/dto/create-unidade.dto.ts");
const update_unidade_dto_1 = __webpack_require__(/*! ./dto/update-unidade.dto */ "./apps/ws-server/src/unidades/dto/update-unidade.dto.ts");
let UnidadesController = class UnidadesController {
    constructor(unidadesService) {
        this.unidadesService = unidadesService;
    }
    create(createUnidadeDto) {
        return this.unidadesService.create(createUnidadeDto);
    }
    findAll(query) {
        return this.unidadesService.findAll();
    }
    async findOne(id) {
        try {
            const unidades = await this.unidadesService.findOne(id);
            return unidades;
        }
        catch (error) {
            throw new common_1.NotFoundException('Unidad no encontrada');
        }
    }
    async update(id, UpdateUnidadesInput) {
        try {
            const unidades = await this.unidadesService.update(id, UpdateUnidadesInput);
            console.log('Unidad updated successfully:', unidades);
            return { message: 'Unidad actualizada con éxito', unidades };
        }
        catch (error) {
            console.error('Error updating unidades:', error);
            throw new common_1.NotFoundException('No se pudo actualizar la unidad');
        }
    }
    async remove(id) {
        try {
            await this.unidadesService.remove(id);
            return { message: 'Unidad eliminada con éxito' };
        }
        catch (error) {
            throw new common_1.NotFoundException('No se pudo eliminar la unidad');
        }
    }
};
exports.UnidadesController = UnidadesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_unidade_dto_1.CreateUnidadeInput !== "undefined" && create_unidade_dto_1.CreateUnidadeInput) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], UnidadesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UnidadesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UnidadesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_c = typeof update_unidade_dto_1.UpdateUnidadeInput !== "undefined" && update_unidade_dto_1.UpdateUnidadeInput) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], UnidadesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UnidadesController.prototype, "remove", null);
exports.UnidadesController = UnidadesController = __decorate([
    (0, common_1.Controller)('unidades'),
    __metadata("design:paramtypes", [typeof (_a = typeof unidades_service_1.UnidadesService !== "undefined" && unidades_service_1.UnidadesService) === "function" ? _a : Object])
], UnidadesController);


/***/ }),

/***/ "./apps/ws-server/src/unidades/unidades.module.ts":
/*!********************************************************!*\
  !*** ./apps/ws-server/src/unidades/unidades.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UnidadesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const unidades_service_1 = __webpack_require__(/*! ./unidades.service */ "./apps/ws-server/src/unidades/unidades.service.ts");
const unidades_controller_1 = __webpack_require__(/*! ./unidades.controller */ "./apps/ws-server/src/unidades/unidades.controller.ts");
const dist_1 = __webpack_require__(/*! @nestjs/typeorm/dist */ "@nestjs/typeorm/dist");
const unidade_entity_1 = __webpack_require__(/*! ./entities/unidade.entity */ "./apps/ws-server/src/unidades/entities/unidade.entity.ts");
const unidades_resolver_1 = __webpack_require__(/*! ./unidades.resolver */ "./apps/ws-server/src/unidades/unidades.resolver.ts");
let UnidadesModule = class UnidadesModule {
};
exports.UnidadesModule = UnidadesModule;
exports.UnidadesModule = UnidadesModule = __decorate([
    (0, common_1.Module)({
        controllers: [unidades_controller_1.UnidadesController],
        providers: [unidades_resolver_1.UnidadeResolver, unidades_service_1.UnidadesService],
        imports: [dist_1.TypeOrmModule.forFeature([unidade_entity_1.Unidade])],
        exports: [unidades_service_1.UnidadesService, dist_1.TypeOrmModule]
    })
], UnidadesModule);


/***/ }),

/***/ "./apps/ws-server/src/unidades/unidades.resolver.ts":
/*!**********************************************************!*\
  !*** ./apps/ws-server/src/unidades/unidades.resolver.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UnidadeResolver = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const unidades_service_1 = __webpack_require__(/*! ./unidades.service */ "./apps/ws-server/src/unidades/unidades.service.ts");
const create_unidade_dto_1 = __webpack_require__(/*! ./dto/create-unidade.dto */ "./apps/ws-server/src/unidades/dto/create-unidade.dto.ts");
const update_unidade_dto_1 = __webpack_require__(/*! ./dto/update-unidade.dto */ "./apps/ws-server/src/unidades/dto/update-unidade.dto.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const unidade_entity_1 = __webpack_require__(/*! ./entities/unidade.entity */ "./apps/ws-server/src/unidades/entities/unidade.entity.ts");
let UnidadeResolver = class UnidadeResolver {
    constructor(unidadesService) {
        this.unidadesService = unidadesService;
    }
    async createUnidade(CreateUnidadeInput) {
        return this.unidadesService.create(CreateUnidadeInput);
    }
    async unidade() {
        return this.unidadesService.findAll();
    }
    async unidades(id) {
        try {
            const unidade = await this.unidadesService.findOne(id);
            if (!unidade) {
                throw new common_1.NotFoundException('Unidade no encontrado');
            }
            return unidade;
        }
        catch (error) {
            throw new common_1.NotFoundException('Unidade no encontrado');
        }
    }
    async updateUnidade(id, updateUnidadeInput) {
        try {
            const unidade = await this.unidadesService.update(id, updateUnidadeInput);
            return unidade;
        }
        catch (error) {
            throw new common_1.NotFoundException('No se pudo actualizar la unidad');
        }
    }
    async removeUnidade(id) {
        try {
            await this.unidadesService.remove(id);
            return true;
        }
        catch (error) {
            throw new common_1.NotFoundException('No se pudo eliminar la unidad');
        }
    }
};
exports.UnidadeResolver = UnidadeResolver;
__decorate([
    (0, graphql_1.Mutation)(() => unidade_entity_1.Unidade),
    __param(0, (0, graphql_1.Args)('createUnidadeInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_unidade_dto_1.CreateUnidadeInput !== "undefined" && create_unidade_dto_1.CreateUnidadeInput) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], UnidadeResolver.prototype, "createUnidade", null);
__decorate([
    (0, graphql_1.Query)(() => [unidade_entity_1.Unidade]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UnidadeResolver.prototype, "unidade", null);
__decorate([
    (0, graphql_1.Query)(() => unidade_entity_1.Unidade),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UnidadeResolver.prototype, "unidades", null);
__decorate([
    (0, graphql_1.Mutation)(() => unidade_entity_1.Unidade),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('updateUnidadeInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_c = typeof update_unidade_dto_1.UpdateUnidadeInput !== "undefined" && update_unidade_dto_1.UpdateUnidadeInput) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], UnidadeResolver.prototype, "updateUnidade", null);
__decorate([
    (0, graphql_1.Mutation)(() => unidade_entity_1.Unidade),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UnidadeResolver.prototype, "removeUnidade", null);
exports.UnidadeResolver = UnidadeResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [typeof (_a = typeof unidades_service_1.UnidadesService !== "undefined" && unidades_service_1.UnidadesService) === "function" ? _a : Object])
], UnidadeResolver);


/***/ }),

/***/ "./apps/ws-server/src/unidades/unidades.service.ts":
/*!*********************************************************!*\
  !*** ./apps/ws-server/src/unidades/unidades.service.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UnidadesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const unidade_entity_1 = __webpack_require__(/*! ./entities/unidade.entity */ "./apps/ws-server/src/unidades/entities/unidade.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const typeorm_2 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
let UnidadesService = class UnidadesService {
    constructor(unidadeRepository) {
        this.unidadeRepository = unidadeRepository;
        this.logger = new common_1.Logger('UnidadesService');
    }
    async create(createUnidadeInput) {
        try {
            const unidade = this.unidadeRepository.create(createUnidadeInput);
            await this.unidadeRepository.save(unidade);
            return unidade;
        }
        catch (error) {
            console.log(error);
            if (error.code === '23505')
                throw new common_1.BadRequestException(error.detail);
            this.logger.error(error);
            throw new common_1.InternalServerErrorException('Error no esperado');
        }
    }
    findAll() {
        return `Busca algo mas especifico flaco`;
    }
    async findOne(id) {
        const unidade = await this.unidadeRepository.findOneBy({ id });
        if (!unidade)
            throw new common_1.NotFoundException(`Unidad #${id} no encontrado`);
        return unidade;
    }
    async update(id, updateUnidadeInput) {
        console.log('ID de la unidad a actualizar en el servicio back:', id);
        try {
            const updateResult = await this.unidadeRepository.update(id, updateUnidadeInput);
            if (updateResult.affected === 0) {
                throw new common_1.NotFoundException(`Unidad con ID ${id} no encontrado`);
            }
            const unidad = await this.unidadeRepository.findOne({ where: { id } });
            return unidad;
        }
        catch (error) {
            console.error('Error al actualizar la unidad en el servicio back:', error);
            throw new common_1.InternalServerErrorException('No se pudo actualizar la unidad');
        }
    }
    async remove(id) {
        const unidade = await this.findOne(id);
        unidade.deletedAt = new Date();
        await this.unidadeRepository.save(unidade);
        return `Esta acción elimina suavemente la unidad #${id}`;
    }
};
exports.UnidadesService = UnidadesService;
exports.UnidadesService = UnidadesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(unidade_entity_1.Unidade)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object])
], UnidadesService);


/***/ }),

/***/ "./apps/ws-server/src/usuarios/dto/create-usuario.dto.ts":
/*!***************************************************************!*\
  !*** ./apps/ws-server/src/usuarios/dto/create-usuario.dto.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUsuarioInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
let CreateUsuarioInput = class CreateUsuarioInput {
};
exports.CreateUsuarioInput = CreateUsuarioInput;
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUsuarioInput.prototype, "CORREO", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Max)(99),
    __metadata("design:type", Number)
], CreateUsuarioInput.prototype, "ID_ROL", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUsuarioInput.prototype, "PLACA", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUsuarioInput.prototype, "NOMBRE", void 0);
exports.CreateUsuarioInput = CreateUsuarioInput = __decorate([
    (0, graphql_1.InputType)()
], CreateUsuarioInput);


/***/ }),

/***/ "./apps/ws-server/src/usuarios/dto/update-usuario.dto.ts":
/*!***************************************************************!*\
  !*** ./apps/ws-server/src/usuarios/dto/update-usuario.dto.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUsuarioInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const create_usuario_dto_1 = __webpack_require__(/*! ./create-usuario.dto */ "./apps/ws-server/src/usuarios/dto/create-usuario.dto.ts");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
let UpdateUsuarioInput = class UpdateUsuarioInput extends (0, graphql_1.PartialType)(create_usuario_dto_1.CreateUsuarioInput) {
};
exports.UpdateUsuarioInput = UpdateUsuarioInput;
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateUsuarioInput.prototype, "ESTADO", void 0);
exports.UpdateUsuarioInput = UpdateUsuarioInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateUsuarioInput);


/***/ }),

/***/ "./apps/ws-server/src/usuarios/entities/usuario.entity.ts":
/*!****************************************************************!*\
  !*** ./apps/ws-server/src/usuarios/entities/usuario.entity.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Usuario = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Usuario = class Usuario {
};
exports.Usuario = Usuario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, graphql_1.Field)(() => graphql_1.ID, { nullable: true }),
    __metadata("design:type", Number)
], Usuario.prototype, "ID_USUARIOS", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true, type: 'boolean' }),
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], Usuario.prototype, "ESTADO", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'text' }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Usuario.prototype, "CORREO", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, type: 'int' }),
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], Usuario.prototype, "ID_ROL", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'text' }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Usuario.prototype, "PLACA", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'text' }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Usuario.prototype, "NOMBRE", void 0);
exports.Usuario = Usuario = __decorate([
    (0, typeorm_1.Entity)('usuario'),
    (0, graphql_1.ObjectType)()
], Usuario);


/***/ }),

/***/ "./apps/ws-server/src/usuarios/usuarios.controller.ts":
/*!************************************************************!*\
  !*** ./apps/ws-server/src/usuarios/usuarios.controller.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsuariosController = void 0;
const usuarios_service_1 = __webpack_require__(/*! ./usuarios.service */ "./apps/ws-server/src/usuarios/usuarios.service.ts");
const create_usuario_dto_1 = __webpack_require__(/*! ./dto/create-usuario.dto */ "./apps/ws-server/src/usuarios/dto/create-usuario.dto.ts");
const update_usuario_dto_1 = __webpack_require__(/*! ./dto/update-usuario.dto */ "./apps/ws-server/src/usuarios/dto/update-usuario.dto.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const axios_1 = __webpack_require__(/*! axios */ "axios");
let UsuariosController = class UsuariosController {
    async validateToken(token) {
        try {
            const response = await axios_1.default.post('http://localhost:3001/auth/login', { token });
            return response.data;
        }
        catch (error) {
            return null;
        }
    }
    async isAuthenticated(req) {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return false;
        }
        const user = await this.validateToken(token);
        return !!user;
    }
    constructor(usuariosService) {
        this.usuariosService = usuariosService;
    }
    async create(createUsuariosDto, req) {
        const isAuthenticated = await this.isAuthenticated(req);
        if (!isAuthenticated) {
            throw new common_1.HttpException('No estás autenticado', common_1.HttpStatus.UNAUTHORIZED);
        }
        return this.usuariosService.create(createUsuariosDto);
    }
    async findAll(req) {
        const isAuthenticated = await this.isAuthenticated(req);
        if (!isAuthenticated) {
            throw new common_1.HttpException('No estás autenticado', common_1.HttpStatus.UNAUTHORIZED);
        }
        return this.usuariosService.findAll();
    }
    async findOne(ID_USUARIOS, req) {
        const isAuthenticated = await this.isAuthenticated(req);
        if (!isAuthenticated) {
            throw new common_1.HttpException('No estás autenticado', common_1.HttpStatus.UNAUTHORIZED);
        }
        try {
            const usuario = await this.usuariosService.findOne(ID_USUARIOS);
            if (!usuario) {
                throw new common_1.NotFoundException('Usuario no encontrado');
            }
            return usuario;
        }
        catch (error) {
            throw new common_1.NotFoundException('Usuario no encontrado');
        }
    }
    async update(ID_USUARIOS, UpdateUsuariosInput, req) {
        const isAuthenticated = await this.isAuthenticated(req);
        if (!isAuthenticated) {
            throw new common_1.HttpException('No estás autenticado', common_1.HttpStatus.UNAUTHORIZED);
        }
        try {
            const usuario = await this.usuariosService.update(ID_USUARIOS, UpdateUsuariosInput);
            if (!usuario) {
                throw new common_1.NotFoundException('No se pudo actualizar el usuario');
            }
            return { message: 'Usuario actualizado con éxito', usuario };
        }
        catch (error) {
            throw new common_1.NotFoundException('No se pudo actualizar el usuario');
        }
    }
    async remove(ID_USUARIOS, req) {
        const isAuthenticated = await this.isAuthenticated(req);
        if (!isAuthenticated) {
            throw new common_1.HttpException('No estás autenticado', common_1.HttpStatus.UNAUTHORIZED);
        }
        try {
            const deleted = await this.usuariosService.remove(ID_USUARIOS);
            if (!deleted) {
                throw new common_1.NotFoundException('No se pudo eliminar el usuario');
            }
            return { message: 'Usuario eliminado con éxito' };
        }
        catch (error) {
            throw new common_1.NotFoundException('No se pudo eliminar el usuario');
        }
    }
};
exports.UsuariosController = UsuariosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_usuario_dto_1.CreateUsuarioInput !== "undefined" && create_usuario_dto_1.CreateUsuarioInput) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':ID_USUARIOS'),
    __param(0, (0, common_1.Param)('ID_USUARIOS')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':ID_USUARIOS'),
    __param(0, (0, common_1.Param)('ID_USUARIOS')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_c = typeof update_usuario_dto_1.UpdateUsuarioInput !== "undefined" && update_usuario_dto_1.UpdateUsuarioInput) === "function" ? _c : Object, Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':ID_USUARIOS'),
    __param(0, (0, common_1.Param)('ID_USUARIOS')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "remove", null);
exports.UsuariosController = UsuariosController = __decorate([
    (0, common_1.Controller)('usuarios'),
    __metadata("design:paramtypes", [typeof (_a = typeof usuarios_service_1.UsuariosService !== "undefined" && usuarios_service_1.UsuariosService) === "function" ? _a : Object])
], UsuariosController);


/***/ }),

/***/ "./apps/ws-server/src/usuarios/usuarios.module.ts":
/*!********************************************************!*\
  !*** ./apps/ws-server/src/usuarios/usuarios.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsuariosModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const usuarios_service_1 = __webpack_require__(/*! ./usuarios.service */ "./apps/ws-server/src/usuarios/usuarios.service.ts");
const usuarios_controller_1 = __webpack_require__(/*! ./usuarios.controller */ "./apps/ws-server/src/usuarios/usuarios.controller.ts");
const dist_1 = __webpack_require__(/*! @nestjs/typeorm/dist */ "@nestjs/typeorm/dist");
const usuario_entity_1 = __webpack_require__(/*! ./entities/usuario.entity */ "./apps/ws-server/src/usuarios/entities/usuario.entity.ts");
const usuarios_resolver_1 = __webpack_require__(/*! ./usuarios.resolver */ "./apps/ws-server/src/usuarios/usuarios.resolver.ts");
let UsuariosModule = class UsuariosModule {
};
exports.UsuariosModule = UsuariosModule;
exports.UsuariosModule = UsuariosModule = __decorate([
    (0, common_1.Module)({
        controllers: [usuarios_controller_1.UsuariosController],
        providers: [usuarios_service_1.UsuariosService, usuarios_resolver_1.UsuariosResolver],
        imports: [dist_1.TypeOrmModule.forFeature([usuario_entity_1.Usuario])],
        exports: [usuarios_service_1.UsuariosService, dist_1.TypeOrmModule]
    })
], UsuariosModule);


/***/ }),

/***/ "./apps/ws-server/src/usuarios/usuarios.resolver.ts":
/*!**********************************************************!*\
  !*** ./apps/ws-server/src/usuarios/usuarios.resolver.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsuariosResolver = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const usuarios_service_1 = __webpack_require__(/*! ./usuarios.service */ "./apps/ws-server/src/usuarios/usuarios.service.ts");
const create_usuario_dto_1 = __webpack_require__(/*! ./dto/create-usuario.dto */ "./apps/ws-server/src/usuarios/dto/create-usuario.dto.ts");
const update_usuario_dto_1 = __webpack_require__(/*! ./dto/update-usuario.dto */ "./apps/ws-server/src/usuarios/dto/update-usuario.dto.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const usuario_entity_1 = __webpack_require__(/*! ./entities/usuario.entity */ "./apps/ws-server/src/usuarios/entities/usuario.entity.ts");
let UsuariosResolver = class UsuariosResolver {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    async createUsuarios(CreateUsuarioInput) {
        return this.usuarioService.create(CreateUsuarioInput);
    }
    async usuarios() {
        return this.usuarioService.findAll();
    }
    async usuario(ID_USUARIOS) {
        try {
            const usuario = await this.usuarioService.findOne(ID_USUARIOS);
            if (!usuario) {
                throw new common_1.NotFoundException('Usuario no encontrado');
            }
            return usuario;
        }
        catch (error) {
            throw new common_1.NotFoundException('Usuario no encontrado');
        }
    }
    async updateUsuarios(ID_USUARIOS, updateUsuarioInput) {
        try {
            const usuario = await this.usuarioService.update(ID_USUARIOS, updateUsuarioInput);
            return usuario;
        }
        catch (error) {
            throw new common_1.NotFoundException('No se pudo actualizar el usuario');
        }
    }
    async removeUsuarios(ID_USUARIOS) {
        try {
            await this.usuarioService.remove(ID_USUARIOS);
            return true;
        }
        catch (error) {
            throw new common_1.NotFoundException('No se pudo eliminar el usuario');
        }
    }
};
exports.UsuariosResolver = UsuariosResolver;
__decorate([
    (0, graphql_1.Mutation)(() => usuario_entity_1.Usuario),
    __param(0, (0, graphql_1.Args)('createUsuarioInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_usuario_dto_1.CreateUsuarioInput !== "undefined" && create_usuario_dto_1.CreateUsuarioInput) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], UsuariosResolver.prototype, "createUsuarios", null);
__decorate([
    (0, graphql_1.Query)(() => [usuario_entity_1.Usuario]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuariosResolver.prototype, "usuarios", null);
__decorate([
    (0, graphql_1.Query)(() => usuario_entity_1.Usuario),
    __param(0, (0, graphql_1.Args)('ID_USUARIOS')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsuariosResolver.prototype, "usuario", null);
__decorate([
    (0, graphql_1.Mutation)(() => usuario_entity_1.Usuario),
    __param(0, (0, graphql_1.Args)('ID_USUARIOS')),
    __param(1, (0, graphql_1.Args)('updateUsuarioInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_c = typeof update_usuario_dto_1.UpdateUsuarioInput !== "undefined" && update_usuario_dto_1.UpdateUsuarioInput) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], UsuariosResolver.prototype, "updateUsuarios", null);
__decorate([
    (0, graphql_1.Mutation)(() => usuario_entity_1.Usuario),
    __param(0, (0, graphql_1.Args)('ID_USUARIOS')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsuariosResolver.prototype, "removeUsuarios", null);
exports.UsuariosResolver = UsuariosResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [typeof (_a = typeof usuarios_service_1.UsuariosService !== "undefined" && usuarios_service_1.UsuariosService) === "function" ? _a : Object])
], UsuariosResolver);


/***/ }),

/***/ "./apps/ws-server/src/usuarios/usuarios.service.ts":
/*!*********************************************************!*\
  !*** ./apps/ws-server/src/usuarios/usuarios.service.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsuariosService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const typeorm_2 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const usuario_entity_1 = __webpack_require__(/*! ./entities/usuario.entity */ "./apps/ws-server/src/usuarios/entities/usuario.entity.ts");
let UsuariosService = class UsuariosService {
    constructor(usuariosRepository) {
        this.usuariosRepository = usuariosRepository;
        this.logger = new common_1.Logger('UsuariosService');
    }
    async create(createUsuarioInput) {
        try {
            const usuario = this.usuariosRepository.create(createUsuarioInput);
            await this.usuariosRepository.save(usuario);
            return usuario;
        }
        catch (error) {
            console.log(error);
            if (error.code === '23505')
                throw new common_1.BadRequestException(error.detail);
            this.logger.error(error);
            throw new common_1.InternalServerErrorException('Error no esperado');
        }
    }
    findAll() {
        return `Busca algo mas especifico flaco`;
    }
    async findOne(ID_USUARIOS) {
        const usuario = await this.usuariosRepository.findOneBy({ ID_USUARIOS });
        if (!usuario)
            throw new common_1.NotFoundException(`Repostaje ${ID_USUARIOS} no encontrado`);
        return usuario;
    }
    async update(ID_USUARIOS, updateUsuarioInput) {
        const usuario = await this.usuariosRepository.preload({
            ID_USUARIOS: ID_USUARIOS,
            ...updateUsuarioInput
        });
        if (!usuario)
            throw new common_1.NotFoundException(`Repostaje con ID ${ID_USUARIOS} no encontrado`);
        try {
            await this.usuariosRepository.save(usuario);
            return usuario;
        }
        catch (error) {
            console.log(error);
        }
    }
    async remove(ID_USUARIOS) {
        const usuario = await this.findOne(ID_USUARIOS);
        await this.usuariosRepository.remove(usuario);
        return `This action removes a #${ID_USUARIOS} repostaje`;
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(usuario_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object])
], UsuariosService);


/***/ }),

/***/ "@apollo/server/plugin/landingPage/default":
/*!************************************************************!*\
  !*** external "@apollo/server/plugin/landingPage/default" ***!
  \************************************************************/
/***/ ((module) => {

module.exports = require("@apollo/server/plugin/landingPage/default");

/***/ }),

/***/ "@nestjs/apollo":
/*!*********************************!*\
  !*** external "@nestjs/apollo" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/apollo");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/graphql":
/*!**********************************!*\
  !*** external "@nestjs/graphql" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/graphql");

/***/ }),

/***/ "@nestjs/mongoose":
/*!***********************************!*\
  !*** external "@nestjs/mongoose" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "@nestjs/typeorm/dist":
/*!***************************************!*\
  !*** external "@nestjs/typeorm/dist" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@nestjs/typeorm/dist");

/***/ }),

/***/ "@nestjs/websockets":
/*!*************************************!*\
  !*** external "@nestjs/websockets" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@nestjs/websockets");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("socket.io");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!************************************!*\
  !*** ./apps/ws-server/src/main.ts ***!
  \************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./apps/ws-server/src/app.module.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: 'http://localhost:5173',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(3000);
}
bootstrap();

})();

/******/ })()
;