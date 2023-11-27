"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const response = yield axios_1.default.get('https://jsonplaceholder.typicode.com/posts/1');
        const response2 = yield axios_1.default.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1,
        });
        const response3 = yield (0, axios_1.default)({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            data: {
                title: 'foo',
                body: 'bar',
                userId: 1,
            }
        });
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) { // 커스텀 타입가드
            // { message: '서버 장애입니다. 다시 시도해주세요.' }
            console.error((_a = error.response) === null || _a === void 0 ? void 0 : _a.data.message);
        }
        const errorResponse = error.response;
        console.log(errorResponse === null || errorResponse === void 0 ? void 0 : errorResponse.data);
    }
}))();
