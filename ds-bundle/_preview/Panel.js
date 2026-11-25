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

  // .design-sync/previews/Panel.tsx
  var Panel_exports = {};
  __export(Panel_exports, {
    HeroDark: () => HeroDark,
    HeroLight: () => HeroLight,
    Simple: () => Simple
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

  // .design-sync/previews/Panel.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var heroBg = "radial-gradient(110% 90% at 85% 15%, #6E8F84 0%, transparent 60%), var(--panel)";
  var Hero = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Panel, { padding: "lg", style: { minHeight: 460, paddingBottom: 96, background: heroBg, display: "grid", alignContent: "start", gap: 20 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Nav, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Pill, { variant: "accent", current: true, href: "#", children: "Inicio" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Pill, { href: "#servicios", children: "Servicios" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Pill, { href: "#proyectos", children: "Proyectos" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Notch, { corner: "tr", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Pill, { href: "#contacto", children: "Contacto" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.IconButton, { label: "Abrir menú", variant: "inverse", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "menu" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.HudLabel, { children: "01 — JAPS Studio / 2026" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Heading, { variant: "statement", style: { fontSize: 56 }, children: [
      "Software",
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
      "que encaja."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Glass, { style: { position: "absolute", right: 24, bottom: 24, width: 260 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.HudLabel, { children: "¿Qué hacemos?" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { size: "small", children: "Estrategia, diseño de interfaz y desarrollo de software a medida." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Notch, { corner: "bl", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Pill, { variant: "solid", size: "lg", href: "#agenda", icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "arrow-right", size: 16 }), children: "Agenda una conversación" }) })
  ] });
  var HeroLight = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ThemeRoot, { theme: "light", style: { padding: 12, borderRadius: 40 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}) });
  var HeroDark = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ThemeRoot, { theme: "dark", style: { padding: 12, borderRadius: 40 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}) });
  var Simple = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Panel, { padding: "md", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.HudLabel, { children: "02 — Módulo" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Heading, { variant: "h2", style: { marginTop: 8 }, children: "Diseño que calza con tu operación" })
  ] });
  return __toCommonJS(Panel_exports);
})();
