var __dsPreview = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // <define:import.meta.env>
  var init_define_import_meta_env = __esm({
    "<define:import.meta.env>"() {
    }
  });

  // ds-raw:__ds_raw__
  var require_ds_raw = __commonJS({
    "ds-raw:__ds_raw__"(exports, module) {
      init_define_import_meta_env();
      module.exports = window.JapsEncastre;
    }
  });

  // shim:react-shim
  var require_react_shim = __commonJS({
    "shim:react-shim"(exports, module) {
      init_define_import_meta_env();
      var R = window.React;
      function np(p, k) {
        var o = {};
        for (var x in p) if (x !== "children") o[x] = p[x];
        if (k !== void 0) o.key = k;
        return o;
      }
      function jsx2(t, p, k) {
        var c = p && p.children;
        return c === void 0 ? R.createElement(t, np(p, k)) : R.createElement(t, np(p, k), c);
      }
      function jsxs2(t, p, k) {
        return R.createElement.apply(R, [t, np(p, k)].concat(p.children));
      }
      module.exports = R;
      module.exports.jsx = jsx2;
      module.exports.jsxs = jsxs2;
      module.exports.jsxDEV = function(t, p, k, s) {
        return (s ? jsxs2 : jsx2)(t, p, k);
      };
      module.exports.Fragment = R.Fragment;
    }
  });

  // .design-sync/previews/Heading.tsx
  var Heading_exports = {};
  __export(Heading_exports, {
    CondensedInNotch: () => CondensedInNotch,
    CondensedOnImage: () => CondensedOnImage,
    DarkMode: () => DarkMode,
    Scale: () => Scale,
    Statement: () => Statement
  });
  init_define_import_meta_env();

  // ds-shim:ds
  var ds_exports = {};
  __export(ds_exports, {
    default: () => ds_default
  });
  init_define_import_meta_env();
  __reExport(ds_exports, __toESM(require_ds_raw()));
  var g = window.JapsEncastre;
  var ds_default = "default" in g ? g.default : g;

  // .design-sync/previews/Heading.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var IMG_PANEL = "repeating-linear-gradient(135deg, var(--panel) 0 14px, color-mix(in oklab, var(--panel) 90%, var(--text-on-panel)) 14px 28px)";
  var stack = { display: "grid", gap: 16, paddingBottom: 12 };
  var Scale = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: stack, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Heading, { variant: "statement", style: { fontSize: 64 }, children: "Encaja." }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Heading, { variant: "headline", style: { fontSize: 48 }, children: "Futuro modular" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Heading, { variant: "h1", style: { fontSize: 40 }, children: "Software a medida" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Heading, { variant: "h2", children: "Diseño que calza con tu operación" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Heading, { variant: "h3", children: "Prototipo navegable y validado" })
  ] });
  var Statement = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: stack, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.HudLabel, { tone: "muted", children: "01 — JAPS Studio" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Heading, { variant: "statement", style: { fontSize: 80 }, children: [
      "Software",
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
      "que encaja."
    ] })
  ] });
  var CondensedOnImage = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { position: "relative", height: 400, width: 640, borderRadius: 28, background: IMG_PANEL, color: "var(--text-on-panel)", overflow: "hidden" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { position: "absolute", right: 28, top: 20, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12, textAlign: "right" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Heading, { variant: "condensed", style: { fontSize: 176 }, children: [
      "Atlas",
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
      "3.0"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.HudLabel, { children: "Plataforma — Caso 03 / 2026" })
  ] }) });
  var CondensedInNotch = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: 640 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Panel, { padding: "none", style: { height: 400, background: IMG_PANEL, overflow: "hidden" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Notch, { corner: "tl", style: { flexDirection: "column", alignItems: "flex-start", gap: 8, padding: "4px 24px 16px 8px" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Heading, { variant: "condensed", style: { fontSize: 88, lineHeight: 0.82 }, children: "Atlas 3.0" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.HudLabel, { tone: "muted", children: "@japs_studio — 2026" })
  ] }) }) });
  var DarkMode = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.ThemeRoot, { theme: "dark", style: { padding: 24, borderRadius: 16, display: "grid", gap: 12 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Heading, { variant: "headline", style: { fontSize: 48 }, children: "Futuro modular" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Heading, { variant: "h2", children: "Diseño que calza con tu operación" })
  ] });
  return __toCommonJS(Heading_exports);
})();
