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

  // .design-sync/previews/DisplayTitle.tsx
  var DisplayTitle_exports = {};
  __export(DisplayTitle_exports, {
    Condensed: () => Condensed,
    DarkMode: () => DarkMode,
    Split: () => Split,
    Vertical: () => Vertical
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

  // .design-sync/previews/DisplayTitle.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var IMG_PANEL = "repeating-linear-gradient(135deg, var(--panel) 0 14px, color-mix(in oklab, var(--panel) 90%, var(--text-on-panel)) 14px 28px)";
  var IMG_SAGE = "repeating-linear-gradient(135deg, var(--c-sage-soft) 0 14px, color-mix(in oklab, var(--c-sage-soft) 82%, var(--c-ink)) 14px 28px)";
  var SECTIONS = [
    { n: "001.", label: "El estudio", href: "#el-estudio" },
    { n: "002.", label: "Proceso", href: "#proceso" },
    { n: "003.", label: "Software", href: "#software" },
    { n: "004.", label: "Casos", href: "#casos" }
  ];
  var stage = { position: "relative", borderRadius: 28, background: "var(--surface)", color: "var(--text)", overflow: "hidden", width: 1312 };
  var object = (w, h, r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: w, height: h, borderRadius: r, background: IMG_SAGE, display: "grid", placeItems: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.HudLabel, { style: { color: "var(--c-ink)" }, children: "Objeto 3D" }) });
  var Split = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { zoom: 0.48 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { ...stage, height: 560 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.DisplayTitle, { variant: "split", text: "Software", splitAt: 4, children: object(380, 380, "50%") }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", right: 56, top: 56, zIndex: 3 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SectionIndex, { variant: "spotlight", items: SECTIONS, current: 2 }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { position: "absolute", left: 56, bottom: 56, zIndex: 3 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.HudLabel, { tone: "muted", children: "001 — Servicios" }) })
  ] }) });
  var Condensed = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { zoom: 0.48 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { ...stage, height: 520 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.DisplayTitle, { variant: "condensed", text: "Encastre", children: object(220, 420, "999px") }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", left: 40, top: "50%", translate: "0 -50%", zIndex: 3 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.SectionIndex, { variant: "minimal", items: SECTIONS, current: 2 }) })
  ] }) });
  var Vertical = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { zoom: 0.48 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { ...stage, height: 640, background: "var(--inverse)", color: "var(--text-on-inverse)" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", left: 28, top: 28, width: 236 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { size: "small", children: "Atlas es la plataforma de pagos que diseñamos y construimos de punta a punta: app, panel y API." }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", left: 292, right: 268, top: 28, bottom: 72, borderRadius: 28, background: IMG_PANEL } }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.DisplayTitle, { variant: "vertical", text: "JAPS" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ds_exports.VerticalNav,
      {
        surface: "inverse",
        current: 3,
        items: [{ label: "Inicio", href: "#i" }, { label: "Casos", href: "#c" }, { label: "Estudio", href: "#e" }, { label: "Contacto", href: "#k" }],
        style: { position: "absolute", right: 24, top: 24, bottom: 24 }
      }
    )
  ] }) });
  var DarkMode = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ThemeRoot, { theme: "dark", style: { padding: 12, borderRadius: 40, zoom: 0.48, width: 1336 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { ...stage, height: 520 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.DisplayTitle, { variant: "condensed", text: "Encastre", children: object(220, 420, "999px") }) }) });
  return __toCommonJS(DisplayTitle_exports);
})();
