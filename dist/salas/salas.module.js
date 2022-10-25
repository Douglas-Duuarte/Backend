"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalasModule = void 0;
const common_1 = require("@nestjs/common");
const salas_service_1 = require("./salas.service");
const salas_controller_1 = require("./salas.controller");
const mongoose_1 = require("@nestjs/mongoose");
const sala_entity_1 = require("./entities/sala.entity");
let SalasModule = class SalasModule {
};
SalasModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{
                    name: sala_entity_1.Sala.name, schema: sala_entity_1.SalaSchema
                }])],
        controllers: [salas_controller_1.SalasController],
        providers: [salas_service_1.SalasService]
    })
], SalasModule);
exports.SalasModule = SalasModule;
//# sourceMappingURL=salas.module.js.map