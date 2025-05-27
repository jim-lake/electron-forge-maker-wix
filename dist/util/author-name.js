"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getNameFromAuthor;
const parse_author_1 = __importDefault(require("parse-author"));
function getNameFromAuthor(author) {
    let publisher = author || '';
    if (typeof publisher === 'string') {
        publisher = (0, parse_author_1.default)(publisher);
    }
    if (typeof publisher !== 'string' && publisher && typeof publisher.name === 'string') {
        publisher = publisher.name;
    }
    if (typeof publisher !== 'string') {
        publisher = '';
    }
    return publisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yLW5hbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9hdXRob3ItbmFtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLG9DQWdCQztBQWxCRCxnRUFBdUM7QUFFdkMsU0FBd0IsaUJBQWlCLENBQUMsTUFBcUI7SUFDN0QsSUFBSSxTQUFTLEdBQWtCLE1BQU0sSUFBSSxFQUFFLENBQUM7SUFFNUMsSUFBSSxPQUFPLFNBQVMsS0FBSyxRQUFRLEVBQUUsQ0FBQztRQUNsQyxTQUFTLEdBQUcsSUFBQSxzQkFBVyxFQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxJQUFJLE9BQU8sU0FBUyxLQUFLLFFBQVEsSUFBSSxTQUFTLElBQUksT0FBTyxTQUFTLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRSxDQUFDO1FBQ3JGLFNBQVMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFJLE9BQU8sU0FBUyxLQUFLLFFBQVEsRUFBRSxDQUFDO1FBQ2xDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUMifQ==