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

  // .design-sync/previews/NotchStair.tsx
  var NotchStair_exports = {};
  __export(NotchStair_exports, {
    DarkMode: () => DarkMode,
    Ledge: () => Ledge,
    Stack: () => Stack
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

  // .design-sync/previews/NotchStair.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var IMG_PANEL = "repeating-linear-gradient(135deg, var(--panel) 0 14px, color-mix(in oklab, var(--panel) 90%, var(--text-on-panel)) 14px 28px)";
  var Stair = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Panel, { padding: "lg", style: { height: 440 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.HudLabel, { children: "03 — Seguimiento" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Heading, { variant: "headline", style: { fontSize: 40, marginTop: 16 }, children: [
      "Cada entrega,",
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
      "en su sitio."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.NotchStair, { corner: "br", steps: [
      { width: 232, height: 132, content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Card, { padding: "sm", style: { display: "flex", flexDirection: "column", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.HudLabel, { tone: "muted", style: { display: "flex", alignItems: "center", gap: 8 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.LiveDot, {}),
          "En curso"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Heading, { variant: "h3", style: { fontSize: 20 }, children: "Plataforma Atlas" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { size: "small", tone: "muted", children: "Sprint 07 de 10" })
        ] })
      ] }) },
      { width: 300, height: 76, content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Card, { padding: "sm", style: { display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 0, paddingBottom: 0 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { size: "small", tone: "muted", children: "Próxima entrega" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.HudLabel, { children: "14 NOV" })
      ] }) },
      { width: 368, height: 120, content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Card, { padding: "sm", style: { display: "grid", gap: 6, alignContent: "start" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.HudLabel, { tone: "muted", children: "Mensaje · Lucía R." }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Text, { size: "small", children: "Revisamos el prototipo el jueves, ¿te va bien a las 10:00?" })
      ] }) }
    ] })
  ] });
  var Stack = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: 640 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stair, {}) });
  var Ledge = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: 640 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Panel, { padding: "lg", style: { height: 440, background: IMG_PANEL }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.HudLabel, { children: "04 — Reel" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Heading, { variant: "headline", style: { fontSize: 40, marginTop: 16 }, children: [
      "Movimiento",
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
      "con propósito."
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.NotchStair, { corner: "bl", layout: "ledge", steps: [
      { width: 68, height: 152, content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.IconButton, { label: "Ver reel", variant: "inverse", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "play", size: 16 }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.HudLabel, { vertical: true, children: "Reel 2026 — 01:24" })
      ] }) },
      { width: 432, height: 120, content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Card, { padding: "sm", style: { display: "flex", alignItems: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.Text, { size: "small", children: [
        "Diseño y código en un mismo equipo: cada pieza se prueba antes de encajar. ",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: "#proceso", style: { color: "var(--accent-text)", fontWeight: 500, textDecoration: "none" }, children: "Ver proceso" })
      ] }) }) }
    ] })
  ] }) });
  var DarkMode = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ThemeRoot, { theme: "dark", style: { padding: 12, borderRadius: 40, width: 664 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stair, {}) });
  return __toCommonJS(NotchStair_exports);
})();
