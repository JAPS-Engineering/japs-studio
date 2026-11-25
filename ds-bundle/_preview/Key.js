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

  // .design-sync/previews/Key.tsx
  var Key_exports = {};
  __export(Key_exports, {
    CornerAndDrop: () => CornerAndDrop,
    DarkMode: () => DarkMode,
    InNotch: () => InNotch
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

  // .design-sync/previews/Key.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var IMG_DARK = "repeating-linear-gradient(135deg, var(--c-ink) 0 14px, var(--c-graphite) 14px 28px)";
  var Stage = ({ children, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "panel", style: { position: "relative", height: 300, borderRadius: 28, background: IMG_DARK, overflow: "hidden" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { position: "absolute", left: 24, bottom: 24, padding: "6px 12px", borderRadius: 999, background: "var(--c-ink)", color: "var(--c-paper)" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.HudLabel, { style: { color: "var(--c-paper)" }, children: label }) }),
    children
  ] });
  var grid = { display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 12 };
  var InNotch = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { ...grid, gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stage, { label: "square", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Notch, { corner: "tr", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Key, { shape: "square", href: "#contacto", label: "Contacto" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stage, { label: "wide", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Notch, { corner: "tr", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Key, { shape: "wide", href: "#agenda", title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      "Agenda una",
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
      "llamada"
    ] }) }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stage, { label: "stat", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Notch, { corner: "tr", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Key, { shape: "stat", href: "#casos", label: "24 casos publicados", caption: "Casos", value: "24" }) }) })
  ] });
  var CornerAndDrop = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { ...grid, gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { position: "relative", height: 240, borderRadius: 28, background: IMG_DARK }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", left: 24, bottom: 24 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Key, { shape: "corner", href: "#siguiente", label: "Siguiente sección" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { position: "relative", height: 240, borderRadius: 28, background: IMG_DARK }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", left: 24, bottom: 24 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Key, { shape: "drop", href: "#siguiente", label: "Siguiente sección" }) }) })
  ] });
  var DarkMode = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.ThemeRoot, { theme: "dark", style: { padding: 24, borderRadius: 28, display: "flex", gap: 16, alignItems: "flex-end" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Key, { shape: "square", label: "Contacto" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Key, { shape: "stat", label: "24 casos", caption: "Casos", value: "24" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Key, { shape: "corner", label: "Siguiente" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Key, { shape: "drop", label: "Siguiente" })
  ] });
  return __toCommonJS(Key_exports);
})();
