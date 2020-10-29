const presets = ["@babel/env"];
const plugins = [
    "@babel/plugin-transform-runtime",
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-proposal-private-methods", { loose: true }],
    "babel-plugin-parameter-decorator"
];

module.exports = { presets, plugins };