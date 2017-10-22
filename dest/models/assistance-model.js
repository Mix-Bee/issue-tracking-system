"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
var db_connection_1 = require("../utils/db-connection");
;
var Model = db_connection_1.default.define('Assistance', {
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    first_help_people: Sequelize.STRING,
    second_help_people: Sequelize.STRING,
    user_agent: Sequelize.STRING,
    referer: Sequelize.STRING,
}, {
    underscored: true,
    tableName: 'assistance',
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
});
Model.sync({ alter: true });
exports.default = Model;
//# sourceMappingURL=assistance-model.js.map