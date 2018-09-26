"use strict";

var _koa = _interopRequireDefault(require("koa"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const cors = require('@koa/cors');

const STATUS_CODES = {
  100: 'OK',
  101: 'SWITCHING PROTOCOLS',
  102: 'PROCESSING',
  200: 'OK',
  201: 'CREATED',
  202: 'ACCEPTED',
  203: 'NON-AUTHORITATIVE INFORMATION',
  204: 'NO CONTENT',
  205: 'RESET CONTENT',
  206: 'PARTIAL CONTENT',
  207: 'MULTI-STATUS',
  208: 'ALREADY REPORTED',
  226: 'IM USED',
  300: 'MULTIPLE CHOICES',
  301: 'MOVED PERMANENTLY',
  302: 'FOUND',
  303: 'SEE OTHER',
  304: 'NOT MODIFIED',
  305: 'USE PROXY',
  306: 'SWITCH PROXY',
  307: 'TEMPORARY REDIRECT',
  308: 'PERMANENT REDIRECT',
  400: 'BAD REQUEST',
  401: 'UNAUTHORIZED',
  402: 'PAYMENT REQUIRED',
  403: 'FORBIDDEN',
  404: 'NOT FOUND',
  405: 'METHOD NOT ALLOWED',
  406: 'NOT ACCEPTABLE',
  407: 'PROXY AUTH REQUIRED',
  408: 'REQUEST TIMEOUT',
  409: 'CONFLICT',
  410: 'GONE',
  411: 'LENGTH REQUIRED',
  412: 'PRECONDITION FAILED',
  413: 'PAYLOAD TOO LARGE',
  414: 'URI TOO LONG',
  415: 'UNSUPPORTED MEDIA TYPE',
  416: 'RANGE NOT SATISFIABLE',
  417: 'EXPECTATION FAILED',
  418: 'I\'M A TEAPOT',
  421: 'MISDIRECT REQUEST',
  422: 'UNPROCESSABLE ENTITY',
  423: 'LOCKED',
  424: 'FAILED DEPENDENCY',
  426: 'UPGRADE REQUIRED',
  428: 'PRECONDITION REQUIRED',
  429: 'TOO MANY REQUESTS',
  431: 'REQUEST HEADER FIELDS TOO LARGE',
  451: 'UNAVAILABLE FOR LEGAL REASONS',
  500: 'INTERNAL SERVER ERROR',
  501: 'NOT IMPLEMENTED',
  502: 'BAD GATEWAY',
  503: 'SERVICE UNAVAILABLE',
  504: 'GATEWAY TIMEOUT',
  505: 'HTTP VERSION NOT SUPPORTED',
  506: 'VARIANT ALSO NEGOTIATES',
  507: 'INSUFFICIENT STORAGE',
  508: 'LOOP DETECTED',
  510: 'NOT EXTENDED',
  511: 'NETWORK AUTHENTICATION REQUIRED'
};
const app = new _koa.default();
app.use(cors());
app.use(
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(function* (context) {
    if (context.path === '/status-codes') {
      context.status = 200;
      context.body = STATUS_CODES;
    } else {
      const statusCode = parseInt(context.query.status);
      context.status = statusCode;
    }
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
const port = process.argv[2] || '8080';
app.listen(port, () => {
  console.log(`🖥  Http Status Echo Server is now listening on port ${port}. `);
});