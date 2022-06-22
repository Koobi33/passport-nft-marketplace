var PassportScorer;
(() => {
  "use strict";
  var e,
    n,
    t,
    r,
    i = {
      673: (e, n, t) => {
        t.a(e, async (e, r) => {
          try {
            t.r(n),
              t.d(n, {
                DIDAuth: () => i.qK,
                JWKFromTezos: () => i.MQ,
                __wbg_append_4d85f35672cbffa7: () => i.uX,
                __wbg_arrayBuffer_0e2a43f68a8b3e49: () => i.PR,
                __wbg_buffer_5e74a88a1424a2e0: () => i.rf,
                __wbg_call_89558c3e96703ca1: () => i.Z4,
                __wbg_call_94697a95cb7e239c: () => i.nD,
                __wbg_crypto_b8c92eaac23d0d80: () => i.iY,
                __wbg_done_982b1c7ac0cbc69d: () => i.vF,
                __wbg_fetch_fb26f738d9707b16: () => i.Xc,
                __wbg_fetch_fe54824ee845f6b4: () => i.UT,
                __wbg_getRandomValues_dd27e6b0652b3236: () => i.yX,
                __wbg_getRandomValues_e57c9b75ddead065: () => i.ae,
                __wbg_getTime_f8ce0ff902444efb: () => i.OL,
                __wbg_get_8bbb82393651dd9c: () => i.gM,
                __wbg_globalThis_d61b1f48a57191ae: () => i.EB,
                __wbg_global_e7669da72fd7f239: () => i.Yc,
                __wbg_has_3850edde6df9191b: () => i.v6,
                __wbg_headers_e4204c6775f7b3b4: () => i.uC,
                __wbg_instanceof_Response_ea36d565358a42f7: () => i.cj,
                __wbg_iterator_4b9cedbeda0c0e30: () => i.wI,
                __wbg_length_30803400a8f15c59: () => i.Zu,
                __wbg_msCrypto_9ad6677321a08dd8: () => i.mS,
                __wbg_new0_57a6a2c2aaed3fc5: () => i.Of,
                __wbg_new_226d109446575877: () => i.FA,
                __wbg_new_4beacc9c71572250: () => i.WJ,
                __wbg_new_d3138911a89329b0: () => i.LP,
                __wbg_new_e3b800e570795b3c: () => i.Ts,
                __wbg_newnoargs_f579424187aa1717: () => i.bf,
                __wbg_newwithbyteoffsetandlength_278ec7532799393a: () => i.S7,
                __wbg_newwithlength_5f4ce114a24dfe1e: () => i._G,
                __wbg_newwithstrandinit_c07f0662ece15bc6: () => i.bK,
                __wbg_next_c7a2a6b012059a5e: () => i.Q2,
                __wbg_next_dd1a890d37e38d73: () => i.re,
                __wbg_randomFillSync_d2ba53160aec6aba: () => i.Os,
                __wbg_require_f5521a5b85ad2542: () => i.r2,
                __wbg_resolve_4f8f547f26b30b27: () => i.Yp,
                __wbg_self_86b4b13392c7af56: () => i.U5,
                __wbg_self_e23d74ae45fb17d1: () => i.tL,
                __wbg_set_5b8081e9d002f0df: () => i.Mz,
                __wbg_set_c42875065132a932: () => i.P0,
                __wbg_static_accessor_MODULE_452b4680e8614c81: () => i.DA,
                __wbg_status_3a55bb50e744b834: () => i.X1,
                __wbg_stringify_f8bfc9e2d1e8b6a0: () => i.fp,
                __wbg_subarray_a68f835ca2af506f: () => i.kC,
                __wbg_then_58a04e42527f52c6: () => i.YI,
                __wbg_then_a6860c82b90816ca: () => i.wW,
                __wbg_url_6e564c9e212456f8: () => i.U6,
                __wbg_value_2def2d1fb38b02cd: () => i.pH,
                __wbg_window_b4be7f48b24ac56e: () => i.Qu,
                __wbindgen_cb_drop: () => i.G6,
                __wbindgen_closure_wrapper10701: () => i.cB,
                __wbindgen_debug_string: () => i.fY,
                __wbindgen_is_function: () => i.o$,
                __wbindgen_is_object: () => i.Wl,
                __wbindgen_is_undefined: () => i.XP,
                __wbindgen_memory: () => i.oH,
                __wbindgen_object_clone_ref: () => i.m_,
                __wbindgen_object_drop_ref: () => i.ug,
                __wbindgen_string_get: () => i.qt,
                __wbindgen_string_new: () => i.h4,
                __wbindgen_throw: () => i.Or,
                completeDelegateCapability: () => i.T6,
                completeInvokeCapability: () => i.Do,
                completeIssueCredential: () => i.oN,
                completeIssuePresentation: () => i.oV,
                delegateCapability: () => i.fc,
                generateEd25519Key: () => i.xz,
                getVersion: () => i.bo,
                invokeCapability: () => i.Ru,
                issueCredential: () => i.HR,
                issuePresentation: () => i.wk,
                keyToDID: () => i.bH,
                keyToVerificationMethod: () => i.JO,
                prepareDelegateCapability: () => i.m$,
                prepareInvokeCapability: () => i.PV,
                prepareIssueCredential: () => i.cr,
                prepareIssuePresentation: () => i.pY,
                resolveDID: () => i.j2,
                verifyCredential: () => i.Dv,
                verifyDelegation: () => i.Ik,
                verifyInvocation: () => i.Tf,
                verifyInvocationSignature: () => i.uQ,
                verifyPresentation: () => i.hb,
              });
            var i = t(802),
              o = e([i]);
            (i = (o.then ? (await o)() : o)[0]), r();
          } catch (e) {
            r(e);
          }
        });
      },
      802: (e, n, t) => {
        t.a(e, async (r, i) => {
          try {
            t.d(n, {
              DA: () => he,
              Do: () => J,
              Dv: () => E,
              EB: () => Xe,
              FA: () => ie,
              G6: () => ee,
              HR: () => C,
              Ik: () => H,
              JO: () => I,
              LP: () => Re,
              MQ: () => Y,
              Mz: () => Je,
              OL: () => Ee,
              Of: () => Ae,
              Or: () => nn,
              Os: () => Pe,
              P0: () => Ne,
              PR: () => le,
              PV: () => z,
              Q2: () => ke,
              Qu: () => Fe,
              Ru: () => L,
              S7: () => Le,
              T6: () => W,
              Tf: () => B,
              Ts: () => ze,
              U5: () => de,
              U6: () => ce,
              UT: () => re,
              WJ: () => qe,
              Wl: () => be,
              X1: () => ue,
              XP: () => pe,
              Xc: () => te,
              YI: () => Ve,
              Yc: () => We,
              Yp: () => Ue,
              Z4: () => Ce,
              Zu: () => Ke,
              _G: () => Be,
              ae: () => me,
              bH: () => T,
              bK: () => fe,
              bf: () => xe,
              bo: () => j,
              cB: () => rn,
              cj: () => _e,
              cr: () => R,
              fY: () => en,
              fc: () => F,
              fp: () => Ze,
              gM: () => Ie,
              h4: () => Z,
              hb: () => G,
              iY: () => we,
              j2: () => O,
              kC: () => $e,
              m$: () => X,
              mS: () => ge,
              m_: () => ne,
              nD: () => Me,
              o$: () => Se,
              oH: () => tn,
              oN: () => M,
              oV: () => U,
              pH: () => De,
              pY: () => q,
              qK: () => V,
              qt: () => ae,
              r2: () => ye,
              re: () => je,
              rf: () => He,
              tL: () => Ye,
              uC: () => se,
              uQ: () => K,
              uX: () => oe,
              ug: () => N,
              v6: () => Qe,
              vF: () => Oe,
              wI: () => Te,
              wW: () => Ge,
              wk: () => A,
              xz: () => D,
              yX: () => ve,
            });
            var o = t(551);
            e = t.hmd(e);
            var a = r([o]);
            o = (a.then ? (await a)() : a)[0];
            const _ = new Array(32).fill(void 0);
            function c(e) {
              return _[e];
            }
            _.push(void 0, null, !0, !1);
            let u = _.length;
            function s(e) {
              e < 36 || ((_[e] = u), (u = e));
            }
            function l(e) {
              const n = c(e);
              return s(e), n;
            }
            let f = new (
              "undefined" == typeof TextDecoder
                ? (0, e.require)("util").TextDecoder
                : TextDecoder
            )("utf-8", { ignoreBOM: !0, fatal: !0 });
            f.decode();
            let b = null;
            function d() {
              return (
                (null !== b && b.buffer === o.memory.buffer) ||
                  (b = new Uint8Array(o.memory.buffer)),
                b
              );
            }
            function w(e, n) {
              return f.decode(d().subarray(e, e + n));
            }
            function g(e) {
              u === _.length && _.push(_.length + 1);
              const n = u;
              return (u = _[n]), (_[n] = e), n;
            }
            let p = 0,
              h = new (
                "undefined" == typeof TextEncoder
                  ? (0, e.require)("util").TextEncoder
                  : TextEncoder
              )("utf-8");
            const y =
              "function" == typeof h.encodeInto
                ? function (e, n) {
                    return h.encodeInto(e, n);
                  }
                : function (e, n) {
                    const t = h.encode(e);
                    return n.set(t), { read: e.length, written: t.length };
                  };
            function v(e, n, t) {
              if (void 0 === t) {
                const t = h.encode(e),
                  r = n(t.length);
                return (
                  d()
                    .subarray(r, r + t.length)
                    .set(t),
                  (p = t.length),
                  r
                );
              }
              let r = e.length,
                i = n(r);
              const o = d();
              let a = 0;
              for (; a < r; a++) {
                const n = e.charCodeAt(a);
                if (n > 127) break;
                o[i + a] = n;
              }
              if (a !== r) {
                0 !== a && (e = e.slice(a)),
                  (i = t(i, r, (r = a + 3 * e.length)));
                const n = d().subarray(i + a, i + r);
                a += y(e, n).written;
              }
              return (p = a), i;
            }
            let m = null;
            function P() {
              return (
                (null !== m && m.buffer === o.memory.buffer) ||
                  (m = new Int32Array(o.memory.buffer)),
                m
              );
            }
            function S(e) {
              const n = typeof e;
              if ("number" == n || "boolean" == n || null == e) return `${e}`;
              if ("string" == n) return `"${e}"`;
              if ("symbol" == n) {
                const n = e.description;
                return null == n ? "Symbol" : `Symbol(${n})`;
              }
              if ("function" == n) {
                const n = e.name;
                return "string" == typeof n && n.length > 0
                  ? `Function(${n})`
                  : "Function";
              }
              if (Array.isArray(e)) {
                const n = e.length;
                let t = "[";
                n > 0 && (t += S(e[0]));
                for (let r = 1; r < n; r++) t += ", " + S(e[r]);
                return (t += "]"), t;
              }
              const t = /\[object ([^\]]+)\]/.exec(toString.call(e));
              let r;
              if (!(t.length > 1)) return toString.call(e);
              if (((r = t[1]), "Object" == r))
                try {
                  return "Object(" + JSON.stringify(e) + ")";
                } catch (e) {
                  return "Object";
                }
              return e instanceof Error
                ? `${e.name}: ${e.message}\n${e.stack}`
                : r;
            }
            function x(e, n, t, r) {
              const i = { a: e, b: n, cnt: 1, dtor: t },
                a = (...e) => {
                  i.cnt++;
                  const n = i.a;
                  i.a = 0;
                  try {
                    return r(n, i.b, ...e);
                  } finally {
                    0 == --i.cnt
                      ? o.__wbindgen_export_2.get(i.dtor)(n, i.b)
                      : (i.a = n);
                  }
                };
              return (a.original = i), a;
            }
            function k(e, n, t) {
              o._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h62a2987a816bb9fa(
                e,
                n,
                g(t)
              );
            }
            function j() {
              try {
                const t = o.__wbindgen_add_to_stack_pointer(-16);
                o.getVersion(t);
                var e = P()[t / 4 + 0],
                  n = P()[t / 4 + 1];
                return w(e, n);
              } finally {
                o.__wbindgen_add_to_stack_pointer(16), o.__wbindgen_free(e, n);
              }
            }
            function O(e, n) {
              var t = v(e, o.__wbindgen_malloc, o.__wbindgen_realloc),
                r = p,
                i = v(n, o.__wbindgen_malloc, o.__wbindgen_realloc),
                a = p;
              return l(o.resolveDID(t, r, i, a));
            }
            function D() {
              try {
                const _ = o.__wbindgen_add_to_stack_pointer(-16);
                o.generateEd25519Key(_);
                var e = P()[_ / 4 + 0],
                  n = P()[_ / 4 + 1],
                  t = P()[_ / 4 + 2],
                  r = P()[_ / 4 + 3],
                  i = e,
                  a = n;
                if (r) throw ((i = 0), (a = 0), l(t));
                return w(i, a);
              } finally {
                o.__wbindgen_add_to_stack_pointer(16), o.__wbindgen_free(i, a);
              }
            }
            function T(e, n) {
              try {
                const d = o.__wbindgen_add_to_stack_pointer(-16);
                var t = v(e, o.__wbindgen_malloc, o.__wbindgen_realloc),
                  r = p,
                  i = v(n, o.__wbindgen_malloc, o.__wbindgen_realloc),
                  a = p;
                o.keyToDID(d, t, r, i, a);
                var _ = P()[d / 4 + 0],
                  c = P()[d / 4 + 1],
                  u = P()[d / 4 + 2],
                  s = P()[d / 4 + 3],
                  f = _,
                  b = c;
                if (s) throw ((f = 0), (b = 0), l(u));
                return w(f, b);
              } finally {
                o.__wbindgen_add_to_stack_pointer(16), o.__wbindgen_free(f, b);
              }
            }
            function I(e, n) {
              var t = v(e, o.__wbindgen_malloc, o.__wbindgen_realloc),
                r = p,
                i = v(n, o.__wbindgen_malloc, o.__wbindgen_realloc),
                a = p;
              return l(o.keyToVerificationMethod(t, r, i, a));
            }
            function C(e, n, t) {
              var r = v(e, o.__wbindgen_malloc, o.__wbindgen_realloc),
                i = p,
                a = v(n, o.__wbindgen_malloc, o.__wbindgen_realloc),
                _ = p,
                c = v(t, o.__wbindgen_malloc, o.__wbindgen_realloc),
                u = p;
              return l(o.issueCredential(r, i, a, _, c, u));
            }
            function R(e, n, t) {
              var r = v(e, o.__wbindgen_malloc, o.__wbindgen_realloc),
                i = p,
                a = v(n, o.__wbindgen_malloc, o.__wbindgen_realloc),
                _ = p,
                c = v(t, o.__wbindgen_malloc, o.__wbindgen_realloc),
                u = p;
              return l(o.prepareIssueCredential(r, i, a, _, c, u));
            }
            function M(e, n, t) {
              var r = v(e, o.__wbindgen_malloc, o.__wbindgen_realloc),
                i = p,
                a = v(n, o.__wbindgen_malloc, o.__wbindgen_realloc),
                _ = p,
                c = v(t, o.__wbindgen_malloc, o.__wbindgen_realloc),
                u = p;
              return l(o.completeIssueCredential(r, i, a, _, c, u));
            }
            function E(e, n) {
              var t = v(e, o.__wbindgen_malloc, o.__wbindgen_realloc),
                r = p,
                i = v(n, o.__wbindgen_malloc, o.__wbindgen_realloc),
                a = p;
              return l(o.verifyCredential(t, r, i, a));
            }
            function A(e, n, t) {
              var r = v(e, o.__wbindgen_malloc, o.__wbindgen_realloc),
                i = p,
                a = v(n, o.__wbindgen_malloc, o.__wbindgen_realloc),
                _ = p,
                c = v(t, o.__wbindgen_malloc, o.__wbindgen_realloc),
                u = p;
              return l(o.issuePresentation(r, i, a, _, c, u));
            }
            function q(e, n, t) {
              var r = v(e, o.__wbindgen_malloc, o.__wbindgen_realloc),
                i = p,
                a = v(n, o.__wbindgen_malloc, o.__wbindgen_realloc),
                _ = p,
                c = v(t, o.__wbindgen_malloc, o.__wbindgen_realloc),
                u = p;
              return l(o.prepareIssuePresentation(r, i, a, _, c, u));
            }
            function U(e, n, t) {
              var r = v(e, o.__wbindgen_malloc, o.__wbindgen_realloc),
                i = p,
                a = v(n, o.__wbindgen_malloc, o.__wbindgen_realloc),
                _ = p,
                c = v(t, o.__wbindgen_malloc, o.__wbindgen_realloc),
                u = p;
              return l(o.completeIssuePresentation(r, i, a, _, c, u));
            }
            function G(e, n) {
              var t = v(e, o.__wbindgen_malloc, o.__wbindgen_realloc),
                r = p,
                i = v(n, o.__wbindgen_malloc, o.__wbindgen_realloc),
                a = p;
              return l(o.verifyPresentation(t, r, i, a));
            }
            function V(e, n, t) {
              var r = v(e, o.__wbindgen_malloc, o.__wbindgen_realloc),
                i = p,
                a = v(n, o.__wbindgen_malloc, o.__wbindgen_realloc),
                _ = p,
                c = v(t, o.__wbindgen_malloc, o.__wbindgen_realloc),
                u = p;
              return l(o.DIDAuth(r, i, a, _, c, u));
            }
            function Y(e) {
              var n = v(e, o.__wbindgen_malloc, o.__wbindgen_realloc),
                t = p;
              return l(o.JWKFromTezos(n, t));
            }
            function F(e, n, t, r) {
              var i = v(e, o.__wbindgen_malloc, o.__wbindgen_realloc),
                a = p,
                _ = v(n, o.__wbindgen_malloc, o.__wbindgen_realloc),
                c = p,
                u = v(t, o.__wbindgen_malloc, o.__wbindgen_realloc),
                s = p,
                f = v(r, o.__wbindgen_malloc, o.__wbindgen_realloc),
                b = p;
              return l(o.delegateCapability(i, a, _, c, u, s, f, b));
            }
            function X(e, n, t, r) {
              var i = v(e, o.__wbindgen_malloc, o.__wbindgen_realloc),
                a = p,
                _ = v(n, o.__wbindgen_malloc, o.__wbindgen_realloc),
                c = p,
                u = v(t, o.__wbindgen_malloc, o.__wbindgen_realloc),
                s = p,
                f = v(r, o.__wbindgen_malloc, o.__wbindgen_realloc),
                b = p;
              return l(o.prepareDelegateCapability(i, a, _, c, u, s, f, b));
            }
            function W(e, n, t) {
              var r = v(e, o.__wbindgen_malloc, o.__wbindgen_realloc),
                i = p,
                a = v(n, o.__wbindgen_malloc, o.__wbindgen_realloc),
                _ = p,
                c = v(t, o.__wbindgen_malloc, o.__wbindgen_realloc),
                u = p;
              return l(o.completeDelegateCapability(r, i, a, _, c, u));
            }
            function H(e) {
              var n = v(e, o.__wbindgen_malloc, o.__wbindgen_realloc),
                t = p;
              return l(o.verifyDelegation(n, t));
            }
            function L(e, n, t, r) {
              var i = v(e, o.__wbindgen_malloc, o.__wbindgen_realloc),
                a = p,
                _ = v(n, o.__wbindgen_malloc, o.__wbindgen_realloc),
                c = p,
                u = v(t, o.__wbindgen_malloc, o.__wbindgen_realloc),
                s = p,
                f = v(r, o.__wbindgen_malloc, o.__wbindgen_realloc),
                b = p;
              return l(o.invokeCapability(i, a, _, c, u, s, f, b));
            }
            function z(e, n, t, r) {
              var i = v(e, o.__wbindgen_malloc, o.__wbindgen_realloc),
                a = p,
                _ = v(n, o.__wbindgen_malloc, o.__wbindgen_realloc),
                c = p,
                u = v(t, o.__wbindgen_malloc, o.__wbindgen_realloc),
                s = p,
                f = v(r, o.__wbindgen_malloc, o.__wbindgen_realloc),
                b = p;
              return l(o.prepareInvokeCapability(i, a, _, c, u, s, f, b));
            }
            function J(e, n, t) {
              var r = v(e, o.__wbindgen_malloc, o.__wbindgen_realloc),
                i = p,
                a = v(n, o.__wbindgen_malloc, o.__wbindgen_realloc),
                _ = p,
                c = v(t, o.__wbindgen_malloc, o.__wbindgen_realloc),
                u = p;
              return l(o.completeInvokeCapability(r, i, a, _, c, u));
            }
            function K(e) {
              var n = v(e, o.__wbindgen_malloc, o.__wbindgen_realloc),
                t = p;
              return l(o.verifyInvocationSignature(n, t));
            }
            function B(e, n) {
              var t = v(e, o.__wbindgen_malloc, o.__wbindgen_realloc),
                r = p,
                i = v(n, o.__wbindgen_malloc, o.__wbindgen_realloc),
                a = p;
              return l(o.verifyInvocation(t, r, i, a));
            }
            function $(e, n) {
              try {
                return e.apply(this, n);
              } catch (e) {
                o.__wbindgen_exn_store(g(e));
              }
            }
            function Q(e, n, t, r) {
              o.wasm_bindgen__convert__closures__invoke2_mut__h043137bbc47dd3a0(
                e,
                n,
                g(t),
                g(r)
              );
            }
            function N(e) {
              l(e);
            }
            function Z(e, n) {
              return g(w(e, n));
            }
            function ee(e) {
              const n = l(e).original;
              return 1 == n.cnt-- && ((n.a = 0), !0);
            }
            function ne(e) {
              return g(c(e));
            }
            function te(e) {
              return g(fetch(c(e)));
            }
            function re(e, n) {
              return g(c(e).fetch(c(n)));
            }
            function ie() {
              return $(function () {
                return g(new Headers());
              }, arguments);
            }
            function oe() {
              return $(function (e, n, t, r, i) {
                c(e).append(w(n, t), w(r, i));
              }, arguments);
            }
            function ae(e, n) {
              const t = c(n);
              var r = "string" == typeof t ? t : void 0,
                i =
                  null == r
                    ? 0
                    : v(r, o.__wbindgen_malloc, o.__wbindgen_realloc),
                a = p;
              (P()[e / 4 + 1] = a), (P()[e / 4 + 0] = i);
            }
            function _e(e) {
              return c(e) instanceof Response;
            }
            function ce(e, n) {
              var t = v(c(n).url, o.__wbindgen_malloc, o.__wbindgen_realloc),
                r = p;
              (P()[e / 4 + 1] = r), (P()[e / 4 + 0] = t);
            }
            function ue(e) {
              return c(e).status;
            }
            function se(e) {
              return g(c(e).headers);
            }
            function le() {
              return $(function (e) {
                return g(c(e).arrayBuffer());
              }, arguments);
            }
            function fe() {
              return $(function (e, n, t) {
                return g(new Request(w(e, n), c(t)));
              }, arguments);
            }
            function be(e) {
              const n = c(e);
              return "object" == typeof n && null !== n;
            }
            function de() {
              return $(function () {
                return g(self.self);
              }, arguments);
            }
            function we(e) {
              return g(c(e).crypto);
            }
            function ge(e) {
              return g(c(e).msCrypto);
            }
            function pe(e) {
              return void 0 === c(e);
            }
            function he() {
              return g(e);
            }
            function ye(e, n, t) {
              return g(c(e).require(w(n, t)));
            }
            function ve(e) {
              return g(c(e).getRandomValues);
            }
            function me(e, n) {
              c(e).getRandomValues(c(n));
            }
            function Pe(e, n, t) {
              var r, i;
              c(e).randomFillSync(
                ((r = n), (i = t), d().subarray(r / 1, r / 1 + i))
              );
            }
            function Se(e) {
              return "function" == typeof c(e);
            }
            function xe(e, n) {
              return g(new Function(w(e, n)));
            }
            function ke(e) {
              return g(c(e).next);
            }
            function je() {
              return $(function (e) {
                return g(c(e).next());
              }, arguments);
            }
            function Oe(e) {
              return c(e).done;
            }
            function De(e) {
              return g(c(e).value);
            }
            function Te() {
              return g(Symbol.iterator);
            }
            function Ie() {
              return $(function (e, n) {
                return g(Reflect.get(c(e), c(n)));
              }, arguments);
            }
            function Ce() {
              return $(function (e, n) {
                return g(c(e).call(c(n)));
              }, arguments);
            }
            function Re() {
              return g(new Object());
            }
            function Me() {
              return $(function (e, n, t) {
                return g(c(e).call(c(n), c(t)));
              }, arguments);
            }
            function Ee(e) {
              return c(e).getTime();
            }
            function Ae() {
              return g(new Date());
            }
            function qe(e, n) {
              try {
                var t = { a: e, b: n },
                  r = new Promise((e, n) => {
                    const r = t.a;
                    t.a = 0;
                    try {
                      return Q(r, t.b, e, n);
                    } finally {
                      t.a = r;
                    }
                  });
                return g(r);
              } finally {
                t.a = t.b = 0;
              }
            }
            function Ue(e) {
              return g(Promise.resolve(c(e)));
            }
            function Ge(e, n) {
              return g(c(e).then(c(n)));
            }
            function Ve(e, n, t) {
              return g(c(e).then(c(n), c(t)));
            }
            function Ye() {
              return $(function () {
                return g(self.self);
              }, arguments);
            }
            function Fe() {
              return $(function () {
                return g(window.window);
              }, arguments);
            }
            function Xe() {
              return $(function () {
                return g(globalThis.globalThis);
              }, arguments);
            }
            function We() {
              return $(function () {
                return g(t.g.global);
              }, arguments);
            }
            function He(e) {
              return g(c(e).buffer);
            }
            function Le(e, n, t) {
              return g(new Uint8Array(c(e), n >>> 0, t >>> 0));
            }
            function ze(e) {
              return g(new Uint8Array(c(e)));
            }
            function Je(e, n, t) {
              c(e).set(c(n), t >>> 0);
            }
            function Ke(e) {
              return c(e).length;
            }
            function Be(e) {
              return g(new Uint8Array(e >>> 0));
            }
            function $e(e, n, t) {
              return g(c(e).subarray(n >>> 0, t >>> 0));
            }
            function Qe() {
              return $(function (e, n) {
                return Reflect.has(c(e), c(n));
              }, arguments);
            }
            function Ne() {
              return $(function (e, n, t) {
                return Reflect.set(c(e), c(n), c(t));
              }, arguments);
            }
            function Ze() {
              return $(function (e) {
                return g(JSON.stringify(c(e)));
              }, arguments);
            }
            function en(e, n) {
              var t = v(S(c(n)), o.__wbindgen_malloc, o.__wbindgen_realloc),
                r = p;
              (P()[e / 4 + 1] = r), (P()[e / 4 + 0] = t);
            }
            function nn(e, n) {
              throw new Error(w(e, n));
            }
            function tn() {
              return g(o.memory);
            }
            function rn(e, n, t) {
              return g(x(e, n, 3712, k));
            }
            i();
          } catch (on) {
            i(on);
          }
        });
      },
      964: function (e, n, t) {
        var r =
            (this && this.__awaiter) ||
            function (e, n, t, r) {
              return new (t || (t = Promise))(function (i, o) {
                function a(e) {
                  try {
                    c(r.next(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function _(e) {
                  try {
                    c(r.throw(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function c(e) {
                  var n;
                  e.done
                    ? i(e.value)
                    : ((n = e.value),
                      n instanceof t
                        ? n
                        : new t(function (e) {
                            e(n);
                          })).then(a, _);
                }
                c((r = r.apply(e, n || [])).next());
              });
            },
          i =
            (this && this.__generator) ||
            function (e, n) {
              var t,
                r,
                i,
                o,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (o = { next: _(0), throw: _(1), return: _(2) }),
                "function" == typeof Symbol &&
                  (o[Symbol.iterator] = function () {
                    return this;
                  }),
                o
              );
              function _(o) {
                return function (_) {
                  return (function (o) {
                    if (t)
                      throw new TypeError("Generator is already executing.");
                    for (; a; )
                      try {
                        if (
                          ((t = 1),
                          r &&
                            (i =
                              2 & o[0]
                                ? r.return
                                : o[0]
                                ? r.throw || ((i = r.return) && i.call(r), 0)
                                : r.next) &&
                            !(i = i.call(r, o[1])).done)
                        )
                          return i;
                        switch (
                          ((r = 0), i && (o = [2 & o[0], i.value]), o[0])
                        ) {
                          case 0:
                          case 1:
                            i = o;
                            break;
                          case 4:
                            return a.label++, { value: o[1], done: !1 };
                          case 5:
                            a.label++, (r = o[1]), (o = [0]);
                            continue;
                          case 7:
                            (o = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (i =
                                  (i = a.trys).length > 0 && i[i.length - 1]) ||
                                (6 !== o[0] && 2 !== o[0])
                              )
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === o[0] &&
                              (!i || (o[1] > i[0] && o[1] < i[3]))
                            ) {
                              a.label = o[1];
                              break;
                            }
                            if (6 === o[0] && a.label < i[1]) {
                              (a.label = i[1]), (i = o);
                              break;
                            }
                            if (i && a.label < i[2]) {
                              (a.label = i[2]), a.ops.push(o);
                              break;
                            }
                            i[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        o = n.call(e, a);
                      } catch (e) {
                        (o = [6, e]), (r = 0);
                      } finally {
                        t = i = 0;
                      }
                    if (5 & o[0]) throw o[1];
                    return { value: o[0] ? o[1] : void 0, done: !0 };
                  })([o, _]);
                };
              }
            };
        (n.__esModule = !0), (n.PassportScorer = void 0);
        var o = t(53),
          a = t(38),
          _ = (function () {
            function e(e, n, t) {
              void 0 === n && (n = "https://ceramic.passport-iam.gitcoin.co"),
                void 0 === t && (t = "1"),
                (this._reader = new o.PassportReader(n, t)),
                (this._verifier = new a.PassportVerifier(n, t)),
                (this._criteria = e);
            }
            return (
              (e.prototype.getScore = function (e, n, t) {
                return r(this, void 0, void 0, function () {
                  var r, o, a, _;
                  return i(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return (o = n)
                          ? [3, 2]
                          : [4, this._reader.getPassport(e)];
                      case 1:
                        (o = i.sent()), (i.label = 2);
                      case 2:
                        return (
                          (r = o), [4, this._verifier.verifyPassport(e, r, t)]
                        );
                      case 3:
                        return (a = i.sent())
                          ? ((_ = a.stamps.reduce(function (e, n) {
                              return (
                                (e[
                                  ""
                                    .concat(n.credential.issuer, ":")
                                    .concat(
                                      n.credential.credentialSubject.provider
                                    )
                                ] = n),
                                e
                              );
                            }, {})),
                            [
                              2,
                              this._criteria
                                .map(function (e) {
                                  var n =
                                    _[
                                      ""
                                        .concat(e.issuer, ":")
                                        .concat(e.provider)
                                    ];
                                  return n && n.verified ? e.score : 0;
                                })
                                .reduce(function (e, n) {
                                  return e + n;
                                }, 0),
                            ])
                          : [2, 0];
                    }
                  });
                });
              }),
              e
            );
          })();
        n.PassportScorer = _;
      },
      745: function (e, n) {
        var t =
            (this && this.__awaiter) ||
            function (e, n, t, r) {
              return new (t || (t = Promise))(function (i, o) {
                function a(e) {
                  try {
                    c(r.next(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function _(e) {
                  try {
                    c(r.throw(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function c(e) {
                  var n;
                  e.done
                    ? i(e.value)
                    : ((n = e.value),
                      n instanceof t
                        ? n
                        : new t(function (e) {
                            e(n);
                          })).then(a, _);
                }
                c((r = r.apply(e, n || [])).next());
              });
            },
          r =
            (this && this.__generator) ||
            function (e, n) {
              var t,
                r,
                i,
                o,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (o = { next: _(0), throw: _(1), return: _(2) }),
                "function" == typeof Symbol &&
                  (o[Symbol.iterator] = function () {
                    return this;
                  }),
                o
              );
              function _(o) {
                return function (_) {
                  return (function (o) {
                    if (t)
                      throw new TypeError("Generator is already executing.");
                    for (; a; )
                      try {
                        if (
                          ((t = 1),
                          r &&
                            (i =
                              2 & o[0]
                                ? r.return
                                : o[0]
                                ? r.throw || ((i = r.return) && i.call(r), 0)
                                : r.next) &&
                            !(i = i.call(r, o[1])).done)
                        )
                          return i;
                        switch (
                          ((r = 0), i && (o = [2 & o[0], i.value]), o[0])
                        ) {
                          case 0:
                          case 1:
                            i = o;
                            break;
                          case 4:
                            return a.label++, { value: o[1], done: !1 };
                          case 5:
                            a.label++, (r = o[1]), (o = [0]);
                            continue;
                          case 7:
                            (o = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (i =
                                  (i = a.trys).length > 0 && i[i.length - 1]) ||
                                (6 !== o[0] && 2 !== o[0])
                              )
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === o[0] &&
                              (!i || (o[1] > i[0] && o[1] < i[3]))
                            ) {
                              a.label = o[1];
                              break;
                            }
                            if (6 === o[0] && a.label < i[1]) {
                              (a.label = i[1]), (i = o);
                              break;
                            }
                            if (i && a.label < i[2]) {
                              (a.label = i[2]), a.ops.push(o);
                              break;
                            }
                            i[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        o = n.call(e, a);
                      } catch (e) {
                        (o = [6, e]), (r = 0);
                      } finally {
                        t = i = 0;
                      }
                    if (5 & o[0]) throw o[1];
                    return { value: o[0] ? o[1] : void 0, done: !0 };
                  })([o, _]);
                };
              }
            };
        (n.__esModule = !0), (n.Tulons = void 0);
        var i = (function () {
          function e(e, n) {
            void 0 === n && (n = 1),
              (this._ceramicUrl = e || "https://ceramic-clay.3boxlabs.com"),
              (this._network = "".concat(n));
          }
          return (
            (e.prototype.getGenesis = function (e, n) {
              return t(this, void 0, void 0, function () {
                var t, i, o, a;
                return r(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return (
                        (t = {}),
                        (i = (function (e, n) {
                          return "did:pkh:eip155:"
                            .concat(n, ":")
                            .concat(e.toLowerCase());
                        })(e, this._network)),
                        [
                          4,
                          fetch(
                            "".concat(this._ceramicUrl, "/api/v0/streams"),
                            {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify({
                                type: 0,
                                genesis: {
                                  header: { family: "IDX", controllers: [i] },
                                },
                                opts: { pin: !0, sync: !0, anchor: !1 },
                              }),
                            }
                          ),
                        ]
                      );
                    case 1:
                      return [4, r.sent().json()];
                    case 2:
                      return (
                        (o = r.sent() || {}),
                        (a = o.state.next
                          ? o.state.next.content
                          : o.state.content),
                        (n && n.length ? n : Object.keys(a)).forEach(function (
                          e
                        ) {
                          t[e] = !!a[e] && a[e];
                        }),
                        [2, { did: i, streams: t }]
                      );
                  }
                });
              });
            }),
            (e.prototype.getStream = function (e) {
              return t(this, void 0, void 0, function () {
                return r(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.getStreams([e])];
                    case 1:
                      return [2, n.sent()[e.replace("ceramic://", "")]];
                  }
                });
              });
            }),
            (e.prototype.getStreams = function (e) {
              return t(this, void 0, void 0, function () {
                var n, t;
                return r(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return (
                        (n = e.map(function (e) {
                          return { streamId: e };
                        })),
                        [
                          4,
                          fetch(
                            "".concat(this._ceramicUrl, "/api/v0/multiqueries"),
                            {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify({ queries: n }),
                            }
                          ),
                        ]
                      );
                    case 1:
                      return [4, r.sent().json()];
                    case 2:
                      return (
                        (t = r.sent() || {}),
                        Object.keys(t).map(function (e) {
                          var n = t[e];
                          t[e] = n.next ? n.next.content : n.content;
                        }),
                        [2, t]
                      );
                  }
                });
              });
            }),
            (e.prototype.getHydrated = function (e, n) {
              return (
                void 0 === n && (n = !1),
                t(this, void 0, void 0, function () {
                  var t;
                  return r(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return [4, this.getStreams(o(e, []))];
                      case 1:
                        return (t = r.sent()), [2, a.call(this, e, t, n)];
                    }
                  });
                })
              );
            }),
            e
          );
        })();
        function o(e, n) {
          return (
            void 0 === n && (n = []),
            e && "string" == typeof e && 0 == e.indexOf("ceramic://")
              ? n.push(e)
              : e &&
                "object" == typeof e &&
                Object.keys(e).map(function (t) {
                  n = o(e[t], n);
                }),
            n
          );
        }
        function a(e, n, i, _, c) {
          return (
            void 0 === i && (i = !1),
            void 0 === _ && (_ = []),
            void 0 === c && (c = !1),
            t(this, void 0, void 0, function () {
              var u,
                s = this;
              return r(this, function (l) {
                switch (l.label) {
                  case 0:
                    return e && "object" == typeof e
                      ? [
                          4,
                          Promise.all(
                            Object.keys(e).map(function (c) {
                              return t(s, void 0, void 0, function () {
                                var t, u;
                                return r(this, function (r) {
                                  switch (r.label) {
                                    case 0:
                                      return e[c] &&
                                        "string" == typeof e[c] &&
                                        0 == e[c].indexOf("ceramic://")
                                        ? ((e[c] =
                                            n[e[c].replace("ceramic://", "")]),
                                          i && (_ = o(e[c], _)),
                                          [3, 3])
                                        : [3, 1];
                                    case 1:
                                      return e[c] && "object" == typeof e[c]
                                        ? ((t = e),
                                          (u = c),
                                          [4, a.call(this, e[c], n, i, _, !0)])
                                        : [3, 3];
                                    case 2:
                                      (t[u] = r.sent()), (r.label = 3);
                                    case 3:
                                      return [2];
                                  }
                                });
                              });
                            })
                          ),
                        ]
                      : [3, 4];
                  case 1:
                    return (
                      l.sent(),
                      !c && _.length > 0 ? [4, this.getStreams(_)] : [3, 4]
                    );
                  case 2:
                    return (u = l.sent()), [4, a.call(this, e, u, i)];
                  case 3:
                    (e = l.sent()), (l.label = 4);
                  case 4:
                    return [2, e];
                }
              });
            })
          );
        }
        n.Tulons = i;
      },
      53: function (e, n, t) {
        var r =
            (this && this.__awaiter) ||
            function (e, n, t, r) {
              return new (t || (t = Promise))(function (i, o) {
                function a(e) {
                  try {
                    c(r.next(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function _(e) {
                  try {
                    c(r.throw(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function c(e) {
                  var n;
                  e.done
                    ? i(e.value)
                    : ((n = e.value),
                      n instanceof t
                        ? n
                        : new t(function (e) {
                            e(n);
                          })).then(a, _);
                }
                c((r = r.apply(e, n || [])).next());
              });
            },
          i =
            (this && this.__generator) ||
            function (e, n) {
              var t,
                r,
                i,
                o,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (o = { next: _(0), throw: _(1), return: _(2) }),
                "function" == typeof Symbol &&
                  (o[Symbol.iterator] = function () {
                    return this;
                  }),
                o
              );
              function _(o) {
                return function (_) {
                  return (function (o) {
                    if (t)
                      throw new TypeError("Generator is already executing.");
                    for (; a; )
                      try {
                        if (
                          ((t = 1),
                          r &&
                            (i =
                              2 & o[0]
                                ? r.return
                                : o[0]
                                ? r.throw || ((i = r.return) && i.call(r), 0)
                                : r.next) &&
                            !(i = i.call(r, o[1])).done)
                        )
                          return i;
                        switch (
                          ((r = 0), i && (o = [2 & o[0], i.value]), o[0])
                        ) {
                          case 0:
                          case 1:
                            i = o;
                            break;
                          case 4:
                            return a.label++, { value: o[1], done: !1 };
                          case 5:
                            a.label++, (r = o[1]), (o = [0]);
                            continue;
                          case 7:
                            (o = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (i =
                                  (i = a.trys).length > 0 && i[i.length - 1]) ||
                                (6 !== o[0] && 2 !== o[0])
                              )
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === o[0] &&
                              (!i || (o[1] > i[0] && o[1] < i[3]))
                            ) {
                              a.label = o[1];
                              break;
                            }
                            if (6 === o[0] && a.label < i[1]) {
                              (a.label = i[1]), (i = o);
                              break;
                            }
                            if (i && a.label < i[2]) {
                              (a.label = i[2]), a.ops.push(o);
                              break;
                            }
                            i[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        o = n.call(e, a);
                      } catch (e) {
                        (o = [6, e]), (r = 0);
                      } finally {
                        t = i = 0;
                      }
                    if (5 & o[0]) throw o[1];
                    return { value: o[0] ? o[1] : void 0, done: !0 };
                  })([o, _]);
                };
              }
            };
        (n.__esModule = !0), (n.PassportReader = void 0);
        var o = t(745),
          a = (function () {
            function e(e, n) {
              (this._tulons = new o.Tulons(e, n)),
                (this._ceramic_gitcoin_passport_stream_id =
                  "kjzl6cwe1jw148h1e14jb5fkf55xmqhmyorp29r9cq356c7ou74ulowf8czjlzs");
            }
            return (
              (e.prototype.getGenesis = function (e) {
                return r(this, void 0, void 0, function () {
                  var n;
                  return i(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (
                          t.trys.push([0, 2, , 3]),
                          [4, this._tulons.getGenesis(e)]
                        );
                      case 1:
                        return (n = t.sent()), [3, 3];
                      case 2:
                        return t.sent(), (n = !1), [3, 3];
                      case 3:
                        return [2, n];
                    }
                  });
                });
              }),
              (e.prototype.getPassport = function (e, n) {
                return r(this, void 0, void 0, function () {
                  var t;
                  return i(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return [4, this.getPassportStream(e, n)];
                      case 1:
                        return (t = r.sent())
                          ? [4, this._tulons.getHydrated(t)]
                          : [3, 3];
                      case 2:
                        return [2, r.sent()];
                      case 3:
                        return [2, t];
                    }
                  });
                });
              }),
              (e.prototype.getPassportStream = function (e, n) {
                return r(this, void 0, void 0, function () {
                  var t, r;
                  return i(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return (
                          i.trys.push([0, 5, , 6]),
                          n && n[this._ceramic_gitcoin_passport_stream_id]
                            ? ((r = n), [3, 3])
                            : [3, 1]
                        );
                      case 1:
                        return [
                          4,
                          this._tulons.getGenesis(e, [
                            this._ceramic_gitcoin_passport_stream_id,
                          ]),
                        ];
                      case 2:
                        (r = i.sent().streams), (i.label = 3);
                      case 3:
                        return (
                          (n = r),
                          [
                            4,
                            this._tulons.getStream(
                              n[this._ceramic_gitcoin_passport_stream_id]
                            ),
                          ]
                        );
                      case 4:
                        return (t = i.sent()), [3, 6];
                      case 5:
                        return i.sent(), (t = !1), [3, 6];
                      case 6:
                        return [2, t];
                    }
                  });
                });
              }),
              e
            );
          })();
        n.PassportReader = a;
      },
      38: function (e, n, t) {
        var r =
            (this && this.__assign) ||
            function () {
              return (
                (r =
                  Object.assign ||
                  function (e) {
                    for (var n, t = 1, r = arguments.length; t < r; t++)
                      for (var i in (n = arguments[t]))
                        Object.prototype.hasOwnProperty.call(n, i) &&
                          (e[i] = n[i]);
                    return e;
                  }),
                r.apply(this, arguments)
              );
            },
          i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, n, t, r) {
                  void 0 === r && (r = t);
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  (i &&
                    !("get" in i
                      ? !n.__esModule
                      : i.writable || i.configurable)) ||
                    (i = {
                      enumerable: !0,
                      get: function () {
                        return n[t];
                      },
                    }),
                    Object.defineProperty(e, r, i);
                }
              : function (e, n, t, r) {
                  void 0 === r && (r = t), (e[r] = n[t]);
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, n) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: n,
                  });
                }
              : function (e, n) {
                  e.default = n;
                }),
          a =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var n = {};
              if (null != e)
                for (var t in e)
                  "default" !== t &&
                    Object.prototype.hasOwnProperty.call(e, t) &&
                    i(n, e, t);
              return o(n, e), n;
            },
          _ =
            (this && this.__awaiter) ||
            function (e, n, t, r) {
              return new (t || (t = Promise))(function (i, o) {
                function a(e) {
                  try {
                    c(r.next(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function _(e) {
                  try {
                    c(r.throw(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function c(e) {
                  var n;
                  e.done
                    ? i(e.value)
                    : ((n = e.value),
                      n instanceof t
                        ? n
                        : new t(function (e) {
                            e(n);
                          })).then(a, _);
                }
                c((r = r.apply(e, n || [])).next());
              });
            },
          c =
            (this && this.__generator) ||
            function (e, n) {
              var t,
                r,
                i,
                o,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (o = { next: _(0), throw: _(1), return: _(2) }),
                "function" == typeof Symbol &&
                  (o[Symbol.iterator] = function () {
                    return this;
                  }),
                o
              );
              function _(o) {
                return function (_) {
                  return (function (o) {
                    if (t)
                      throw new TypeError("Generator is already executing.");
                    for (; a; )
                      try {
                        if (
                          ((t = 1),
                          r &&
                            (i =
                              2 & o[0]
                                ? r.return
                                : o[0]
                                ? r.throw || ((i = r.return) && i.call(r), 0)
                                : r.next) &&
                            !(i = i.call(r, o[1])).done)
                        )
                          return i;
                        switch (
                          ((r = 0), i && (o = [2 & o[0], i.value]), o[0])
                        ) {
                          case 0:
                          case 1:
                            i = o;
                            break;
                          case 4:
                            return a.label++, { value: o[1], done: !1 };
                          case 5:
                            a.label++, (r = o[1]), (o = [0]);
                            continue;
                          case 7:
                            (o = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (i =
                                  (i = a.trys).length > 0 && i[i.length - 1]) ||
                                (6 !== o[0] && 2 !== o[0])
                              )
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === o[0] &&
                              (!i || (o[1] > i[0] && o[1] < i[3]))
                            ) {
                              a.label = o[1];
                              break;
                            }
                            if (6 === o[0] && a.label < i[1]) {
                              (a.label = i[1]), (i = o);
                              break;
                            }
                            if (i && a.label < i[2]) {
                              (a.label = i[2]), a.ops.push(o);
                              break;
                            }
                            i[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        o = n.call(e, a);
                      } catch (e) {
                        (o = [6, e]), (r = 0);
                      } finally {
                        t = i = 0;
                      }
                    if (5 & o[0]) throw o[1];
                    return { value: o[0] ? o[1] : void 0, done: !0 };
                  })([o, _]);
                };
              }
            };
        (n.__esModule = !0), (n.PassportVerifier = void 0);
        var u = a(t(673)),
          s = t(664),
          l = (function () {
            function e(e, n) {
              void 0 === e && (e = "https://ceramic.passport-iam.gitcoin.co"),
                void 0 === n && (n = "1"),
                (this._reader = new s.PassportReader(e, n));
            }
            return (
              (e.prototype.init = function () {
                return _(this, void 0, void 0, function () {
                  var e = this;
                  return c(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [
                          4,
                          new Promise(function (e) {
                            return e(u);
                          }).then(function (n) {
                            return _(e, void 0, void 0, function () {
                              var e = this;
                              return c(this, function (t) {
                                switch (t.label) {
                                  case 0:
                                    return n.default
                                      ? [
                                          4,
                                          Promise.resolve(n.default).then(
                                            function (n) {
                                              e._DIDKit = n;
                                            }
                                          ),
                                        ]
                                      : [3, 2];
                                  case 1:
                                    return t.sent(), [3, 3];
                                  case 2:
                                    (this._DIDKit = n), (t.label = 3);
                                  case 3:
                                    return [2];
                                }
                              });
                            });
                          }),
                        ];
                      case 1:
                        return n.sent(), [2];
                    }
                  });
                });
              }),
              (e.prototype.verifyPassport = function (e, n, t) {
                return _(this, void 0, void 0, function () {
                  var i,
                    o,
                    a,
                    u,
                    s,
                    l = this;
                  return c(this, function (f) {
                    switch (f.label) {
                      case 0:
                        return (o = n)
                          ? [3, 2]
                          : [4, this._reader.getPassport(e)];
                      case 1:
                        (o = f.sent()), (f.label = 2);
                      case 2:
                        return (i = o)
                          ? ((a = i.stamps),
                            (u = [r({}, i)]),
                            (s = {}),
                            [
                              4,
                              Promise.all(
                                a.map(function (n) {
                                  return _(l, void 0, void 0, function () {
                                    return c(this, function (r) {
                                      switch (r.label) {
                                        case 0:
                                          return [4, this.verifyStamp(e, n, t)];
                                        case 1:
                                          return [2, r.sent()];
                                      }
                                    });
                                  });
                                })
                              ),
                            ])
                          : [3, 4];
                      case 3:
                        return [
                          2,
                          r.apply(
                            void 0,
                            u.concat([((s.stamps = f.sent()), s)])
                          ),
                        ];
                      case 4:
                        return [2, !1];
                    }
                  });
                });
              }),
              (e.prototype.verifyStamp = function (e, n, t) {
                return _(this, void 0, void 0, function () {
                  var r, i;
                  return c(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return n
                          ? ((n.verified = !0),
                            (r = n.credential.credentialSubject.id
                              .replace("did:pkh:eip155:1:", "")
                              .toLowerCase()),
                            (n.verified = r === e.toLowerCase() && n.verified),
                            n.verified &&
                              t &&
                              (n.verified = !!t(n) && n.verified),
                            n.verified
                              ? ((i = n),
                                [4, this.verifyCredential(n.credential)])
                              : [3, 2])
                          : [3, 2];
                      case 1:
                        (i.verified = o.sent()), (o.label = 2);
                      case 2:
                        return [2, n];
                    }
                  });
                });
              }),
              (e.prototype.verifyCredential = function (e) {
                return _(this, void 0, void 0, function () {
                  var n, t, r, i;
                  return c(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return this._DIDKit ? [3, 2] : [4, this.init()];
                      case 1:
                        o.sent(), (o.label = 2);
                      case 2:
                        if (
                          ((n = e.expirationDate),
                          (t = e.proof),
                          !(new Date(n) > new Date()))
                        )
                          return [3, 7];
                        o.label = 3;
                      case 3:
                        return (
                          o.trys.push([3, 5, , 6]),
                          (i = (r = JSON).parse),
                          [
                            4,
                            this._DIDKit.verifyCredential(
                              JSON.stringify(e),
                              '{"proofPurpose":"'.concat(t.proofPurpose, '"}')
                            ),
                          ]
                        );
                      case 4:
                        return [2, 0 === i.apply(r, [o.sent()]).errors.length];
                      case 5:
                        return o.sent(), [2, !1];
                      case 6:
                        return [3, 8];
                      case 7:
                        return [2, !1];
                      case 8:
                        return [2];
                    }
                  });
                });
              }),
              e
            );
          })();
        n.PassportVerifier = l;
      },
      664: function (e, n, t) {
        var r =
            (this && this.__awaiter) ||
            function (e, n, t, r) {
              return new (t || (t = Promise))(function (i, o) {
                function a(e) {
                  try {
                    c(r.next(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function _(e) {
                  try {
                    c(r.throw(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function c(e) {
                  var n;
                  e.done
                    ? i(e.value)
                    : ((n = e.value),
                      n instanceof t
                        ? n
                        : new t(function (e) {
                            e(n);
                          })).then(a, _);
                }
                c((r = r.apply(e, n || [])).next());
              });
            },
          i =
            (this && this.__generator) ||
            function (e, n) {
              var t,
                r,
                i,
                o,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (o = { next: _(0), throw: _(1), return: _(2) }),
                "function" == typeof Symbol &&
                  (o[Symbol.iterator] = function () {
                    return this;
                  }),
                o
              );
              function _(o) {
                return function (_) {
                  return (function (o) {
                    if (t)
                      throw new TypeError("Generator is already executing.");
                    for (; a; )
                      try {
                        if (
                          ((t = 1),
                          r &&
                            (i =
                              2 & o[0]
                                ? r.return
                                : o[0]
                                ? r.throw || ((i = r.return) && i.call(r), 0)
                                : r.next) &&
                            !(i = i.call(r, o[1])).done)
                        )
                          return i;
                        switch (
                          ((r = 0), i && (o = [2 & o[0], i.value]), o[0])
                        ) {
                          case 0:
                          case 1:
                            i = o;
                            break;
                          case 4:
                            return a.label++, { value: o[1], done: !1 };
                          case 5:
                            a.label++, (r = o[1]), (o = [0]);
                            continue;
                          case 7:
                            (o = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (i =
                                  (i = a.trys).length > 0 && i[i.length - 1]) ||
                                (6 !== o[0] && 2 !== o[0])
                              )
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === o[0] &&
                              (!i || (o[1] > i[0] && o[1] < i[3]))
                            ) {
                              a.label = o[1];
                              break;
                            }
                            if (6 === o[0] && a.label < i[1]) {
                              (a.label = i[1]), (i = o);
                              break;
                            }
                            if (i && a.label < i[2]) {
                              (a.label = i[2]), a.ops.push(o);
                              break;
                            }
                            i[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        o = n.call(e, a);
                      } catch (e) {
                        (o = [6, e]), (r = 0);
                      } finally {
                        t = i = 0;
                      }
                    if (5 & o[0]) throw o[1];
                    return { value: o[0] ? o[1] : void 0, done: !0 };
                  })([o, _]);
                };
              }
            };
        (n.__esModule = !0), (n.PassportReader = void 0);
        var o = t(745),
          a = (function () {
            function e(e, n) {
              (this._tulons = new o.Tulons(e, n)),
                (this._ceramic_gitcoin_passport_stream_id =
                  "kjzl6cwe1jw148h1e14jb5fkf55xmqhmyorp29r9cq356c7ou74ulowf8czjlzs");
            }
            return (
              (e.prototype.getGenesis = function (e) {
                return r(this, void 0, void 0, function () {
                  var n;
                  return i(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (
                          t.trys.push([0, 2, , 3]),
                          [4, this._tulons.getGenesis(e)]
                        );
                      case 1:
                        return (n = t.sent()), [3, 3];
                      case 2:
                        return t.sent(), (n = !1), [3, 3];
                      case 3:
                        return [2, n];
                    }
                  });
                });
              }),
              (e.prototype.getPassport = function (e, n) {
                return r(this, void 0, void 0, function () {
                  var t;
                  return i(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return [4, this.getPassportStream(e, n)];
                      case 1:
                        return (t = r.sent())
                          ? [4, this._tulons.getHydrated(t)]
                          : [3, 3];
                      case 2:
                        return [2, r.sent()];
                      case 3:
                        return [2, t];
                    }
                  });
                });
              }),
              (e.prototype.getPassportStream = function (e, n) {
                return r(this, void 0, void 0, function () {
                  var t, r;
                  return i(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return (
                          i.trys.push([0, 5, , 6]),
                          n && n[this._ceramic_gitcoin_passport_stream_id]
                            ? ((r = n), [3, 3])
                            : [3, 1]
                        );
                      case 1:
                        return [
                          4,
                          this._tulons.getGenesis(e, [
                            this._ceramic_gitcoin_passport_stream_id,
                          ]),
                        ];
                      case 2:
                        (r = i.sent().streams), (i.label = 3);
                      case 3:
                        return (
                          (n = r),
                          [
                            4,
                            this._tulons.getStream(
                              n[this._ceramic_gitcoin_passport_stream_id]
                            ),
                          ]
                        );
                      case 4:
                        return (t = i.sent()), [3, 6];
                      case 5:
                        return i.sent(), (t = !1), [3, 6];
                      case 6:
                        return [2, t];
                    }
                  });
                });
              }),
              e
            );
          })();
        n.PassportReader = a;
      },
      551: (e, n, t) => {
        t.a(
          e,
          async (r, i) => {
            try {
              var o,
                a = r([(o = t(802))]),
                [o] = a.then ? (await a)() : a;
              await t.v(n, e.id, "2083dff252222283d71d", {
                "./didkit_wasm_bg.js": {
                  __wbindgen_object_drop_ref: o.ug,
                  __wbindgen_string_new: o.h4,
                  __wbindgen_cb_drop: o.G6,
                  __wbindgen_object_clone_ref: o.m_,
                  __wbg_fetch_fb26f738d9707b16: o.Xc,
                  __wbg_fetch_fe54824ee845f6b4: o.UT,
                  __wbg_new_226d109446575877: o.FA,
                  __wbg_append_4d85f35672cbffa7: o.uX,
                  __wbindgen_string_get: o.qt,
                  __wbg_instanceof_Response_ea36d565358a42f7: o.cj,
                  __wbg_url_6e564c9e212456f8: o.U6,
                  __wbg_status_3a55bb50e744b834: o.X1,
                  __wbg_headers_e4204c6775f7b3b4: o.uC,
                  __wbg_arrayBuffer_0e2a43f68a8b3e49: o.PR,
                  __wbg_newwithstrandinit_c07f0662ece15bc6: o.bK,
                  __wbindgen_is_object: o.Wl,
                  __wbg_self_86b4b13392c7af56: o.U5,
                  __wbg_crypto_b8c92eaac23d0d80: o.iY,
                  __wbg_msCrypto_9ad6677321a08dd8: o.mS,
                  __wbindgen_is_undefined: o.XP,
                  __wbg_static_accessor_MODULE_452b4680e8614c81: o.DA,
                  __wbg_require_f5521a5b85ad2542: o.r2,
                  __wbg_getRandomValues_dd27e6b0652b3236: o.yX,
                  __wbg_getRandomValues_e57c9b75ddead065: o.ae,
                  __wbg_randomFillSync_d2ba53160aec6aba: o.Os,
                  __wbindgen_is_function: o.o$,
                  __wbg_newnoargs_f579424187aa1717: o.bf,
                  __wbg_next_c7a2a6b012059a5e: o.Q2,
                  __wbg_next_dd1a890d37e38d73: o.re,
                  __wbg_done_982b1c7ac0cbc69d: o.vF,
                  __wbg_value_2def2d1fb38b02cd: o.pH,
                  __wbg_iterator_4b9cedbeda0c0e30: o.wI,
                  __wbg_get_8bbb82393651dd9c: o.gM,
                  __wbg_call_89558c3e96703ca1: o.Z4,
                  __wbg_new_d3138911a89329b0: o.LP,
                  __wbg_call_94697a95cb7e239c: o.nD,
                  __wbg_getTime_f8ce0ff902444efb: o.OL,
                  __wbg_new0_57a6a2c2aaed3fc5: o.Of,
                  __wbg_new_4beacc9c71572250: o.WJ,
                  __wbg_resolve_4f8f547f26b30b27: o.Yp,
                  __wbg_then_a6860c82b90816ca: o.wW,
                  __wbg_then_58a04e42527f52c6: o.YI,
                  __wbg_self_e23d74ae45fb17d1: o.tL,
                  __wbg_window_b4be7f48b24ac56e: o.Qu,
                  __wbg_globalThis_d61b1f48a57191ae: o.EB,
                  __wbg_global_e7669da72fd7f239: o.Yc,
                  __wbg_buffer_5e74a88a1424a2e0: o.rf,
                  __wbg_newwithbyteoffsetandlength_278ec7532799393a: o.S7,
                  __wbg_new_e3b800e570795b3c: o.Ts,
                  __wbg_set_5b8081e9d002f0df: o.Mz,
                  __wbg_length_30803400a8f15c59: o.Zu,
                  __wbg_newwithlength_5f4ce114a24dfe1e: o._G,
                  __wbg_subarray_a68f835ca2af506f: o.kC,
                  __wbg_has_3850edde6df9191b: o.v6,
                  __wbg_set_c42875065132a932: o.P0,
                  __wbg_stringify_f8bfc9e2d1e8b6a0: o.fp,
                  __wbindgen_debug_string: o.fY,
                  __wbindgen_throw: o.Or,
                  __wbindgen_memory: o.oH,
                  __wbindgen_closure_wrapper10701: o.cB,
                },
              }),
                i();
            } catch (e) {
              i(e);
            }
          },
          1
        );
      },
    },
    o = {};
  function a(e) {
    var n = o[e];
    if (void 0 !== n) return n.exports;
    var t = (o[e] = { id: e, loaded: !1, exports: {} });
    return i[e].call(t.exports, t, t.exports, a), (t.loaded = !0), t.exports;
  }
  (e =
    "function" == typeof Symbol
      ? Symbol("webpack queues")
      : "__webpack_queues__"),
    (n =
      "function" == typeof Symbol
        ? Symbol("webpack exports")
        : "__webpack_exports__"),
    (t =
      "function" == typeof Symbol
        ? Symbol("webpack error")
        : "__webpack_error__"),
    (r = (e) => {
      e &&
        !e.d &&
        ((e.d = 1),
        e.forEach((e) => e.r--),
        e.forEach((e) => (e.r-- ? e.r++ : e())));
    }),
    (a.a = (i, o, a) => {
      var _;
      a && ((_ = []).d = 1), _ && (_.moduleId = i.id);
      var c,
        u,
        s,
        l = new Set(),
        f = i.exports,
        b = new Promise((e, n) => {
          (s = n), (u = e);
        });
      (b[n] = f),
        (b[e] = (e) => (_ && e(_), l.forEach(e), b.catch((e) => {}))),
        (b.moduleId = i.id),
        (i.exports = b),
        o(
          (i) => {
            var o;
            c = ((i) =>
              i.map((i) => {
                if (null !== i && "object" == typeof i) {
                  if (i[e]) return i;
                  if (i.then) {
                    var o = [];
                    (o.d = 0),
                      i.then(
                        (e) => {
                          (a[n] = e), r(o);
                        },
                        (e) => {
                          (a[t] = e), r(o);
                        }
                      );
                    var a = {};
                    return (a[e] = (e) => e(o)), a;
                  }
                }
                var _ = {};
                return (_[e] = (e) => {}), (_[n] = i), _;
              }))(i);
            var a = () =>
                c.map((e) => {
                  if (e[t]) throw e[t];
                  return e[n];
                }),
              u = new Promise((n) => {
                (o = () => n(a)).r = 0;
                var t = (e) =>
                  e !== _ &&
                  !l.has(e) &&
                  (l.add(e), e && !e.d && (o.r++, e.push(o)));
                c.map((n) => n[e](t));
              });
            return o.r ? u : a();
          },
          (e) => (e ? s((b[t] = e)) : u(f), r(_))
        ),
        _ && (_.d = 0);
    }),
    (a.d = (e, n) => {
      for (var t in n)
        a.o(n, t) &&
          !a.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
    }),
    (a.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (a.hmd = (e) => (
      (e = Object.create(e)).children || (e.children = []),
      Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
          throw new Error(
            "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
              e.id
          );
        },
      }),
      e
    )),
    (a.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (a.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.v = (e, n, t, r) => {
      var i = fetch(a.p + "" + t + ".module.wasm");
      return "function" == typeof WebAssembly.instantiateStreaming
        ? WebAssembly.instantiateStreaming(i, r).then((n) =>
            Object.assign(e, n.instance.exports)
          )
        : i
            .then((e) => e.arrayBuffer())
            .then((e) => WebAssembly.instantiate(e, r))
            .then((n) => Object.assign(e, n.instance.exports));
    }),
    (a.p = "");
  var _ = a(964);
  PassportScorer = _.PassportScorer;
})();
