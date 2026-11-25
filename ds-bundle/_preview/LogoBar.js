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

  // .design-sync/previews/LogoBar.tsx
  var LogoBar_exports = {};
  __export(LogoBar_exports, {
    DarkMode: () => DarkMode,
    Glass: () => Glass,
    Logos: () => Logos,
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

  // .design-sync/previews/LogoBar.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var IMG_PANEL = "repeating-linear-gradient(135deg, var(--panel) 0 14px, color-mix(in oklab, var(--panel) 90%, var(--text-on-panel)) 14px 28px)";
  var Ring = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "9", cy: "12", r: "6" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "15", cy: "12", r: "6" })
  ] });
  var Bars = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "3", y: "15", width: "3.5", height: "6", rx: "1.75" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "8.5", y: "11", width: "3.5", height: "10", rx: "1.75" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "14", y: "7", width: "3.5", height: "14", rx: "1.75" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "19.5", y: "3", width: "3.5", height: "18", rx: "1.75" })
  ] });
  var Dots = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "5", cy: "8", r: "2.5" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "8", r: "2.5" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "19", cy: "8", r: "2.5" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "5", cy: "16", r: "2.5" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "16", r: "2.5" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "19", cy: "16", r: "2.5" })
  ] });
  var Stripes = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "2", y: "6", width: "20", height: "4.5", rx: "2.25" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "2", y: "13.5", width: "13", height: "4.5", rx: "2.25" })
  ] });
  var Hatch = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { transform: "rotate(45 12 12)", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "7.5", y: "3", width: "9", height: "3.5", rx: "1.75" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "2", y: "8", width: "20", height: "3.5", rx: "1.75" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "2", y: "13", width: "20", height: "3.5", rx: "1.75" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "7.5", y: "18", width: "9", height: "3.5", rx: "1.75" })
  ] }) });
  var LOGOS = [
    { logo: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hatch, {}), name: "Cliente — Atlas", href: "#cliente-1" },
    { logo: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dots, {}), name: "Cliente — Orbe", href: "#cliente-2" },
    { logo: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bars, {}), name: "Cliente — Pulso", href: "#cliente-3" },
    { logo: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stripes, {}), name: "Cliente — Vía", href: "#cliente-4" },
    { logo: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ring, {}), name: "Cliente — Nodo", href: "#cliente-5" }
  ];
  var Logos = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: 760 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.LogoBar, { label: "Han confiado en nosotros", logos: LOGOS }) });
  var Stack = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: 760 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.LogoBar, { variant: "stack", label: "Construimos con", items: ["React", "Swift", "Kotlin", "Node", "Postgres"] }) });
  var Glass = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: 760 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.Panel, { padding: "md", style: { background: IMG_PANEL }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.LogoBar, { variant: "glass", label: "Han confiado en nosotros", logos: LOGOS.slice(0, 4), more: "+12" }) }) });
  var DarkMode = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.ThemeRoot, { theme: "dark", style: { padding: 16, borderRadius: 40, width: 792 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.LogoBar, { label: "Han confiado en nosotros", logos: LOGOS }) });
  return __toCommonJS(LogoBar_exports);
})();
