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

  // .design-sync/previews/Pill.tsx
  var Pill_exports = {};
  __export(Pill_exports, {
    DarkMode: () => DarkMode,
    GlassLong: () => GlassLong,
    GlassTinted: () => GlassTinted,
    PrimaryCta: () => PrimaryCta,
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

  // .design-sync/previews/Pill.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var IMG_PANEL = "repeating-linear-gradient(135deg, var(--panel) 0 14px, color-mix(in oklab, var(--panel) 90%, var(--text-on-panel)) 14px 28px)";
  var IMG_DARK = "repeating-linear-gradient(135deg, var(--c-ink) 0 14px, var(--c-graphite) 14px 28px)";
  var row = { display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" };
  var Variants = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: row, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Pill, { variant: "accent", href: "#empezar", children: "Empezar" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Pill, { variant: "solid", children: "Ver proyectos" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Pill, { href: "#contacto", children: "Contacto" })
  ] });
  var PrimaryCta = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Pill, { variant: "solid", size: "lg", href: "#agenda", icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "arrow-right", size: 16 }), children: "Agenda una conversación" });
  var GlassLong = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Panel, { padding: "md", style: { background: IMG_PANEL, display: "grid", gap: 12 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.HudLabel, { children: "Vidrio claro — sobre panel" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { ...row, gap: 12 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Pill, { variant: "glass", size: "lg", leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "arrow-up-right" }), children: "Ver plan" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Pill, { variant: "glass", size: "lg", hover: "surface", leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "arrow-right" }), children: "Descargar" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Pill, { variant: "glass", size: "lg", hover: "halo", leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "plus" }), children: "Explorar" })
    ] })
  ] });
  var GlassTinted = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "grid", gap: 12, padding: 24, borderRadius: 28, background: IMG_DARK }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.HudLabel, { style: { color: "var(--c-paper)" }, children: "Vidrio tintado — sobre imagen oscura" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { ...row, gap: 12 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Pill, { variant: "glass", glass: "tinted", size: "lg", leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "arrow-up-right" }), children: "Ver plan" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Pill, { variant: "glass", glass: "tinted", size: "lg", hover: "signal", leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "play", size: 16 }), children: "En vivo" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Pill, { variant: "glass", glass: "tinted", size: "lg", hover: "inverse", leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "arrow-right" }), children: "Contactar" })
    ] })
  ] });
  var DarkMode = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ThemeRoot, { theme: "dark", style: { padding: 16, borderRadius: 16 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: row, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Pill, { variant: "accent", href: "#empezar", children: "Empezar" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Pill, { variant: "solid", children: "Ver proyectos" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Pill, { href: "#contacto", children: "Contacto" })
  ] }) });
  return __toCommonJS(Pill_exports);
})();
