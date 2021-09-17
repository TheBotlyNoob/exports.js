Object.assign(
  (module.exports = (exports, exportName) => {
    if (exports.constructor === new Object(null).constructor)
      Object.assign(module.exports.exports, exports);
    else if (exportName) module.exports.exports[exportName] = exports;
    else {
      throw new Error(
        '`exportName` Is A Required Argument If `exports` Is Not An Object'
      );
    }
    return exports;
  }),
  {
    default: (_export) =>
      (module.exports.exports = Object.assign(_export, module.exports.exports)),
    exports: new Object(null)
  }
);
