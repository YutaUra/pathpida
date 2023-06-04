"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseQueryFromTS = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var parseQueryFromTS = function (output, file, suffix) {
    var fileData = fs_1.default.readFileSync(file, 'utf8');
    var typeName = ['Query', 'OptionalQuery'].find(function (type) {
        return new RegExp("export (interface ".concat(type, " ?{|type ").concat(type, " ?=)")).test(fileData);
    });
    if (!typeName)
        return;
    var importName = "".concat(typeName).concat(suffix);
    return {
        importName: importName,
        importString: "import type { ".concat(typeName, " as ").concat(importName, " } from '").concat(path_1.default
            .relative(output, file)
            .replace(/\\/g, '/')
            .replace(/(\/index)?\.tsx?$/, ''), "'")
    };
};
exports.parseQueryFromTS = parseQueryFromTS;
//# sourceMappingURL=parseQueryFromTS.js.map