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

  // .design-sync/previews/IconButton.tsx
  var IconButton_exports = {};
  __export(IconButton_exports, {
    DarkMode: () => DarkMode,
    GlassOnPanel: () => GlassOnPanel,
    GlassTones: () => GlassTones,
    Variants: () => Variants
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

  // .design-sync/previews/IconButton.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var IMG_PANEL = "repeating-linear-gradient(135deg, var(--panel) 0 14px, color-mix(in oklab, var(--panel) 90%, var(--text-on-panel)) 14px 28px)";
  var IMG_DARK = "repeating-linear-gradient(135deg, var(--c-ink) 0 14px, var(--c-graphite) 14px 28px)";
  var IMG_LIGHT = "repeating-linear-gradient(135deg, color-mix(in oklab, var(--c-sage-soft) 70%, var(--c-surface)) 0 14px, var(--c-sage-soft) 14px 28px)";
  var row = { display: "flex", gap: 12, alignItems: "center" };
  var cell = { display: "grid", justifyItems: "center", gap: 8 };
  var Variants = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: row, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.IconButton, { label: "Siguiente", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "arrow-up-right" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.IconButton, { label: "Añadir", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "plus" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.IconButton, { label: "Abrir menú", variant: "inverse", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "menu" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.IconButton, { label: "Cerrar", variant: "inverse", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "close" }) })
  ] });
  var GlassOnPanel = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Panel, { padding: "md", style: { background: IMG_PANEL }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { ...row, gap: 20 }, children: ["accent", "surface", "signal", "inverse", "halo"].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: cell, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.IconButton, { variant: "glass", hover: h, label: `Abrir (${h})`, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "arrow-up-right" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.HudLabel, { style: { fontSize: 11 }, children: h })
  ] }, h)) }) });
  var GlassTones = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { ...row, justifyContent: "center", height: 110, borderRadius: 20, background: IMG_LIGHT }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.IconButton, { variant: "glass", glass: "solid", current: true, label: "Menú", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "menu" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.IconButton, { variant: "glass", glass: "light", label: "Nuevo proyecto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "plus" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { ...row, justifyContent: "center", height: 110, borderRadius: 20, background: IMG_PANEL }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.IconButton, { variant: "glass", label: "Reproducir", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "play", size: 16 }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.IconButton, { variant: "glass", hover: "halo", label: "Añadir", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "plus" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { ...row, justifyContent: "center", height: 110, borderRadius: 20, background: IMG_DARK }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.IconButton, { variant: "glass", glass: "tinted", hover: "surface", label: "GitHub", href: "#github", children: "GH" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.IconButton, { variant: "glass", glass: "tinted", hover: "signal", label: "En vivo", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "play", size: 16 }) })
    ] })
  ] });
  var DarkMode = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ThemeRoot, { theme: "dark", style: { padding: 16, borderRadius: 16 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: row, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.IconButton, { label: "Siguiente", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "arrow-up-right" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.IconButton, { label: "Abrir menú", variant: "inverse", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "menu" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.IconButton, { label: "Siguiente grande", size: "lg", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "arrow-right" }) })
  ] }) });
  return __toCommonJS(IconButton_exports);
})();
