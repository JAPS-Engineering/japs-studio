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

  // .design-sync/previews/ButtonRail.tsx
  var ButtonRail_exports = {};
  __export(ButtonRail_exports, {
    DarkMode: () => DarkMode,
    Horizontal: () => Horizontal,
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

  // .design-sync/previews/ButtonRail.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var IMG_PANEL = "repeating-linear-gradient(135deg, var(--panel) 0 14px, color-mix(in oklab, var(--panel) 90%, var(--text-on-panel)) 14px 28px)";
  var IMG_DARK = "repeating-linear-gradient(135deg, var(--c-ink) 0 14px, var(--c-graphite) 14px 28px)";
  var IMG_LIGHT = "repeating-linear-gradient(135deg, color-mix(in oklab, var(--c-sage-soft) 70%, var(--c-surface)) 0 14px, var(--c-sage-soft) 14px 28px)";
  var avatar = { width: 52, height: 52, borderRadius: "50%", background: "repeating-linear-gradient(135deg, var(--c-mist) 0 5px, var(--c-sage-soft) 5px 10px)" };
  var Vertical = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { position: "relative", height: 460, width: 360, borderRadius: 28, background: IMG_LIGHT, overflow: "hidden" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { position: "absolute", right: 24, top: 24, padding: "6px 12px", borderRadius: 999, background: "var(--c-surface)", color: "var(--c-ink)" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.HudLabel, { children: "Imagen — paisaje" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      ds_exports.ButtonRail,
      {
        style: { position: "absolute", left: 24, top: 24, bottom: 24, height: "auto" },
        capsule: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: avatar }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.IconButton, { variant: "glass", glass: "bare", label: "Notificaciones (3)", children: "03" })
        ] }),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.IconButton, { variant: "glass", glass: "solid", current: true, label: "Menú", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "menu" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.IconButton, { variant: "glass", glass: "light", label: "Nuevo proyecto", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "plus" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.IconButton, { variant: "glass", glass: "light", label: "Ver reel", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "play", size: 16 }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.IconButton, { variant: "glass", glass: "light", label: "Cambiar tema", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "moon" }) })
        ]
      }
    )
  ] });
  var Horizontal = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { padding: 32, borderRadius: 28, background: IMG_DARK, display: "grid", gap: 16, color: "var(--c-paper)" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.HudLabel, { style: { color: "var(--c-paper)" }, children: "JAPS Studio — Redes" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.ButtonRail, { orientation: "horizontal", label: "Redes", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.IconButton, { variant: "glass", glass: "tinted", hover: "surface", label: "GitHub", href: "#github", children: "GH" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.IconButton, { variant: "glass", glass: "tinted", hover: "surface", label: "LinkedIn", href: "#linkedin", children: "IN" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.IconButton, { variant: "glass", glass: "tinted", hover: "surface", label: "Behance", href: "#behance", children: "BE" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.IconButton, { variant: "glass", glass: "tinted", hover: "surface", label: "X", href: "#x", children: "X" })
    ] })
  ] });
  var DarkMode = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ThemeRoot, { theme: "dark", style: { padding: 16, borderRadius: 28 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { padding: 24, borderRadius: 20, background: IMG_PANEL }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ds_exports.ButtonRail, { orientation: "horizontal", label: "Acciones", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.IconButton, { variant: "glass", label: "Abrir", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "arrow-up-right" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.IconButton, { variant: "glass", label: "Añadir", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "plus" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.IconButton, { variant: "glass", hover: "halo", label: "Menú", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Icon, { name: "menu" }) })
  ] }) }) });
  return __toCommonJS(ButtonRail_exports);
})();
