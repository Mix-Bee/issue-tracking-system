"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assistance_model_1 = require("./assistance-model");
var user_model_1 = require("./user-model");
assistance_model_1.default.belongsTo(user_model_1.default, { constraints: false });
//# sourceMappingURL=models-relation.js.map