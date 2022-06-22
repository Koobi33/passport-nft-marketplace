var PassportVerifier;
(() => {
  "use strict";
  var e,
    n,
    t,
    r,
    _ = {
      673: (e, n, t) => {
        t.a(e, async (e, r) => {
          try {
            t.r(n),
              t.d(n, {
                DIDAuth: () => _.qK,
                JWKFromTezos: () => _.MQ,
                __wbg_append_4d85f35672cbffa7: () => _.uX,
                __wbg_arrayBuffer_0e2a43f68a8b3e49: () => _.PR,
                __wbg_buffer_5e74a88a1424a2e0: () => _.rf,
                __wbg_call_89558c3e96703ca1: () => _.Z4,
                __wbg_call_94697a95cb7e239c: () => _.nD,
                __wbg_crypto_b8c92eaac23d0d80: () => _.iY,
                __wbg_done_982b1c7ac0cbc69d: () => _.vF,
                __wbg_fetch_fb26f738d9707b16: () => _.Xc,
                __wbg_fetch_fe54824ee845f6b4: () => _.UT,
                __wbg_getRandomValues_dd27e6b0652b3236: () => _.yX,
                __wbg_getRandomValues_e57c9b75ddead065: () => _.ae,
                __wbg_getTime_f8ce0ff902444efb: () => _.OL,
                __wbg_get_8bbb82393651dd9c: () => _.gM,
                __wbg_globalThis_d61b1f48a57191ae: () => _.EB,
                __wbg_global_e7669da72fd7f239: () => _.Yc,
                __wbg_has_3850edde6df9191b: () => _.v6,
                __wbg_headers_e4204c6775f7b3b4: () => _.uC,
                __wbg_instanceof_Response_ea36d565358a42f7: () => _.cj,
                __wbg_iterator_4b9cedbeda0c0e30: () => _.wI,
                __wbg_length_30803400a8f15c59: () => _.Zu,
                __wbg_msCrypto_9ad6677321a08dd8: () => _.mS,
                __wbg_new0_57a6a2c2aaed3fc5: () => _.Of,
                __wbg_new_226d109446575877: () => _.FA,
                __wbg_new_4beacc9c71572250: () => _.WJ,
                __wbg_new_d3138911a89329b0: () => _.LP,
                __wbg_new_e3b800e570795b3c: () => _.Ts,
                __wbg_newnoargs_f579424187aa1717: () => _.bf,
                __wbg_newwithbyteoffsetandlength_278ec7532799393a: () => _.S7,
                __wbg_newwithlength_5f4ce114a24dfe1e: () => _._G,
                __wbg_newwithstrandinit_c07f0662ece15bc6: () => _.bK,
                __wbg_next_c7a2a6b012059a5e: () => _.Q2,
                __wbg_next_dd1a890d37e38d73: () => _.re,
                __wbg_randomFillSync_d2ba53160aec6aba: () => _.Os,
                __wbg_require_f5521a5b85ad2542: () => _.r2,
                __wbg_resolve_4f8f547f26b30b27: () => _.Yp,
                __wbg_self_86b4b13392c7af56: () => _.U5,
                __wbg_self_e23d74ae45fb17d1: () => _.tL,
                __wbg_set_5b8081e9d002f0df: () => _.Mz,
                __wbg_set_c42875065132a932: () => _.P0,
                __wbg_static_accessor_MODULE_452b4680e8614c81: () => _.DA,
                __wbg_status_3a55bb50e744b834: () => _.X1,
                __wbg_stringify_f8bfc9e2d1e8b6a0: () => _.fp,
                __wbg_subarray_a68f835ca2af506f: () => _.kC,
                __wbg_then_58a04e42527f52c6: () => _.YI,
                __wbg_then_a6860c82b90816ca: () => _.wW,
                __wbg_url_6e564c9e212456f8: () => _.U6,
                __wbg_value_2def2d1fb38b02cd: () => _.pH,
                __wbg_window_b4be7f48b24ac56e: () => _.Qu,
                __wbindgen_cb_drop: () => _.G6,
                __wbindgen_closure_wrapper10701: () => _.cB,
                __wbindgen_debug_string: () => _.fY,
                __wbindgen_is_function: () => _.o$,
                __wbindgen_is_object: () => _.Wl,
                __wbindgen_is_undefined: () => _.XP,
                __wbindgen_memory: () => _.oH,
                __wbindgen_object_clone_ref: () => _.m_,
                __wbindgen_object_drop_ref: () => _.ug,
                __wbindgen_string_get: () => _.qt,
                __wbindgen_string_new: () => _.h4,
                __wbindgen_throw: () => _.Or,
                completeDelegateCapability: () => _.T6,
                completeInvokeCapability: () => _.Do,
                completeIssueCredential: () => _.oN,
                completeIssuePresentation: () => _.oV,
                delegateCapability: () => _.fc,
                generateEd25519Key: () => _.xz,
                getVersion: () => _.bo,
                invokeCapability: () => _.Ru,
                issueCredential: () => _.HR,
                issuePresentation: () => _.wk,
                keyToDID: () => _.bH,
                keyToVerificationMethod: () => _.JO,
                prepareDelegateCapability: () => _.m$,
                prepareInvokeCapability: () => _.PV,
                prepareIssueCredential: () => _.cr,
                prepareIssuePresentation: () => _.pY,
                resolveDID: () => _.j2,
                verifyCredential: () => _.Dv,
                verifyDelegation: () => _.Ik,
                verifyInvocation: () => _.Tf,
                verifyInvocationSignature: () => _.uQ,
                verifyPresentation: () => _.hb,
              });
            var _ = t(802),
              i = e([_]);
            (_ = (i.then ? (await i)() : i)[0]), r();
          } catch (e) {
            r(e);
          }
        });
      },
      802: (e, n, t) => {
        t.a(e, async (r, _) => {
          try {
            t.d(n, {
              DA: () => he,
              Do: () => K,
              Dv: () => E,
              EB: () => We,
              FA: () => _e,
              G6: () => ee,
              HR: () => C,
              Ik: () => G,
              JO: () => I,
              LP: () => Me,
              MQ: () => F,
              Mz: () => Ke,
              OL: () => Ee,
              Of: () => Ae,
              Or: () => nn,
              Os: () => Pe,
              P0: () => Ne,
              PR: () => se,
              PV: () => J,
              Q2: () => ke,
              Qu: () => Xe,
              Ru: () => H,
              S7: () => He,
              T6: () => L,
              Tf: () => $,
              Ts: () => Je,
              U5: () => de,
              U6: () => ce,
              UT: () => re,
              WJ: () => Ue,
              Wl: () => be,
              X1: () => ue,
              XP: () => pe,
              Xc: () => te,
              YI: () => Ye,
              Yc: () => Le,
              Yp: () => Ve,
              Z4: () => Ce,
              Zu: () => Be,
              _G: () => $e,
              ae: () => ve,
              bH: () => T,
              bK: () => fe,
              bf: () => xe,
              bo: () => O,
              cB: () => rn,
              cj: () => ae,
              cr: () => M,
              fY: () => en,
              fc: () => X,
              fp: () => Ze,
              gM: () => Ie,
              h4: () => Z,
              hb: () => q,
              iY: () => we,
              j2: () => j,
              kC: () => ze,
              m$: () => W,
              mS: () => ge,
              m_: () => ne,
              nD: () => Re,
              o$: () => Se,
              oH: () => tn,
              oN: () => R,
              oV: () => V,
              pH: () => De,
              pY: () => U,
              qK: () => Y,
              qt: () => oe,
              r2: () => ye,
              re: () => Oe,
              rf: () => Ge,
              tL: () => Fe,
              uC: () => le,
              uQ: () => B,
              uX: () => ie,
              ug: () => N,
              v6: () => Qe,
              vF: () => je,
              wI: () => Te,
              wW: () => qe,
              wk: () => A,
              xz: () => D,
              yX: () => me,
            });
            var i = t(551);
            e = t.hmd(e);
            var o = r([i]);
            i = (o.then ? (await o)() : o)[0];
            const a = new Array(32).fill(void 0);
            function c(e) {
              return a[e];
            }
            a.push(void 0, null, !0, !1);
            let u = a.length;
            function l(e) {
              e < 36 || ((a[e] = u), (u = e));
            }
            function s(e) {
              const n = c(e);
              return l(e), n;
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
                (null !== b && b.buffer === i.memory.buffer) ||
                  (b = new Uint8Array(i.memory.buffer)),
                b
              );
            }
            function w(e, n) {
              return f.decode(d().subarray(e, e + n));
            }
            function g(e) {
              u === a.length && a.push(a.length + 1);
              const n = u;
              return (u = a[n]), (a[n] = e), n;
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
            function m(e, n, t) {
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
                _ = n(r);
              const i = d();
              let o = 0;
              for (; o < r; o++) {
                const n = e.charCodeAt(o);
                if (n > 127) break;
                i[_ + o] = n;
              }
              if (o !== r) {
                0 !== o && (e = e.slice(o)),
                  (_ = t(_, r, (r = o + 3 * e.length)));
                const n = d().subarray(_ + o, _ + r);
                o += y(e, n).written;
              }
              return (p = o), _;
            }
            let v = null;
            function P() {
              return (
                (null !== v && v.buffer === i.memory.buffer) ||
                  (v = new Int32Array(i.memory.buffer)),
                v
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
              const _ = { a: e, b: n, cnt: 1, dtor: t },
                o = (...e) => {
                  _.cnt++;
                  const n = _.a;
                  _.a = 0;
                  try {
                    return r(n, _.b, ...e);
                  } finally {
                    0 == --_.cnt
                      ? i.__wbindgen_export_2.get(_.dtor)(n, _.b)
                      : (_.a = n);
                  }
                };
              return (o.original = _), o;
            }
            function k(e, n, t) {
              i._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h62a2987a816bb9fa(
                e,
                n,
                g(t)
              );
            }
            function O() {
              try {
                const t = i.__wbindgen_add_to_stack_pointer(-16);
                i.getVersion(t);
                var e = P()[t / 4 + 0],
                  n = P()[t / 4 + 1];
                return w(e, n);
              } finally {
                i.__wbindgen_add_to_stack_pointer(16), i.__wbindgen_free(e, n);
              }
            }
            function j(e, n) {
              var t = m(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
                r = p,
                _ = m(n, i.__wbindgen_malloc, i.__wbindgen_realloc),
                o = p;
              return s(i.resolveDID(t, r, _, o));
            }
            function D() {
              try {
                const a = i.__wbindgen_add_to_stack_pointer(-16);
                i.generateEd25519Key(a);
                var e = P()[a / 4 + 0],
                  n = P()[a / 4 + 1],
                  t = P()[a / 4 + 2],
                  r = P()[a / 4 + 3],
                  _ = e,
                  o = n;
                if (r) throw ((_ = 0), (o = 0), s(t));
                return w(_, o);
              } finally {
                i.__wbindgen_add_to_stack_pointer(16), i.__wbindgen_free(_, o);
              }
            }
            function T(e, n) {
              try {
                const d = i.__wbindgen_add_to_stack_pointer(-16);
                var t = m(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
                  r = p,
                  _ = m(n, i.__wbindgen_malloc, i.__wbindgen_realloc),
                  o = p;
                i.keyToDID(d, t, r, _, o);
                var a = P()[d / 4 + 0],
                  c = P()[d / 4 + 1],
                  u = P()[d / 4 + 2],
                  l = P()[d / 4 + 3],
                  f = a,
                  b = c;
                if (l) throw ((f = 0), (b = 0), s(u));
                return w(f, b);
              } finally {
                i.__wbindgen_add_to_stack_pointer(16), i.__wbindgen_free(f, b);
              }
            }
            function I(e, n) {
              var t = m(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
                r = p,
                _ = m(n, i.__wbindgen_malloc, i.__wbindgen_realloc),
                o = p;
              return s(i.keyToVerificationMethod(t, r, _, o));
            }
            function C(e, n, t) {
              var r = m(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
                _ = p,
                o = m(n, i.__wbindgen_malloc, i.__wbindgen_realloc),
                a = p,
                c = m(t, i.__wbindgen_malloc, i.__wbindgen_realloc),
                u = p;
              return s(i.issueCredential(r, _, o, a, c, u));
            }
            function M(e, n, t) {
              var r = m(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
                _ = p,
                o = m(n, i.__wbindgen_malloc, i.__wbindgen_realloc),
                a = p,
                c = m(t, i.__wbindgen_malloc, i.__wbindgen_realloc),
                u = p;
              return s(i.prepareIssueCredential(r, _, o, a, c, u));
            }
            function R(e, n, t) {
              var r = m(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
                _ = p,
                o = m(n, i.__wbindgen_malloc, i.__wbindgen_realloc),
                a = p,
                c = m(t, i.__wbindgen_malloc, i.__wbindgen_realloc),
                u = p;
              return s(i.completeIssueCredential(r, _, o, a, c, u));
            }
            function E(e, n) {
              var t = m(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
                r = p,
                _ = m(n, i.__wbindgen_malloc, i.__wbindgen_realloc),
                o = p;
              return s(i.verifyCredential(t, r, _, o));
            }
            function A(e, n, t) {
              var r = m(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
                _ = p,
                o = m(n, i.__wbindgen_malloc, i.__wbindgen_realloc),
                a = p,
                c = m(t, i.__wbindgen_malloc, i.__wbindgen_realloc),
                u = p;
              return s(i.issuePresentation(r, _, o, a, c, u));
            }
            function U(e, n, t) {
              var r = m(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
                _ = p,
                o = m(n, i.__wbindgen_malloc, i.__wbindgen_realloc),
                a = p,
                c = m(t, i.__wbindgen_malloc, i.__wbindgen_realloc),
                u = p;
              return s(i.prepareIssuePresentation(r, _, o, a, c, u));
            }
            function V(e, n, t) {
              var r = m(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
                _ = p,
                o = m(n, i.__wbindgen_malloc, i.__wbindgen_realloc),
                a = p,
                c = m(t, i.__wbindgen_malloc, i.__wbindgen_realloc),
                u = p;
              return s(i.completeIssuePresentation(r, _, o, a, c, u));
            }
            function q(e, n) {
              var t = m(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
                r = p,
                _ = m(n, i.__wbindgen_malloc, i.__wbindgen_realloc),
                o = p;
              return s(i.verifyPresentation(t, r, _, o));
            }
            function Y(e, n, t) {
              var r = m(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
                _ = p,
                o = m(n, i.__wbindgen_malloc, i.__wbindgen_realloc),
                a = p,
                c = m(t, i.__wbindgen_malloc, i.__wbindgen_realloc),
                u = p;
              return s(i.DIDAuth(r, _, o, a, c, u));
            }
            function F(e) {
              var n = m(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
                t = p;
              return s(i.JWKFromTezos(n, t));
            }
            function X(e, n, t, r) {
              var _ = m(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
                o = p,
                a = m(n, i.__wbindgen_malloc, i.__wbindgen_realloc),
                c = p,
                u = m(t, i.__wbindgen_malloc, i.__wbindgen_realloc),
                l = p,
                f = m(r, i.__wbindgen_malloc, i.__wbindgen_realloc),
                b = p;
              return s(i.delegateCapability(_, o, a, c, u, l, f, b));
            }
            function W(e, n, t, r) {
              var _ = m(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
                o = p,
                a = m(n, i.__wbindgen_malloc, i.__wbindgen_realloc),
                c = p,
                u = m(t, i.__wbindgen_malloc, i.__wbindgen_realloc),
                l = p,
                f = m(r, i.__wbindgen_malloc, i.__wbindgen_realloc),
                b = p;
              return s(i.prepareDelegateCapability(_, o, a, c, u, l, f, b));
            }
            function L(e, n, t) {
              var r = m(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
                _ = p,
                o = m(n, i.__wbindgen_malloc, i.__wbindgen_realloc),
                a = p,
                c = m(t, i.__wbindgen_malloc, i.__wbindgen_realloc),
                u = p;
              return s(i.completeDelegateCapability(r, _, o, a, c, u));
            }
            function G(e) {
              var n = m(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
                t = p;
              return s(i.verifyDelegation(n, t));
            }
            function H(e, n, t, r) {
              var _ = m(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
                o = p,
                a = m(n, i.__wbindgen_malloc, i.__wbindgen_realloc),
                c = p,
                u = m(t, i.__wbindgen_malloc, i.__wbindgen_realloc),
                l = p,
                f = m(r, i.__wbindgen_malloc, i.__wbindgen_realloc),
                b = p;
              return s(i.invokeCapability(_, o, a, c, u, l, f, b));
            }
            function J(e, n, t, r) {
              var _ = m(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
                o = p,
                a = m(n, i.__wbindgen_malloc, i.__wbindgen_realloc),
                c = p,
                u = m(t, i.__wbindgen_malloc, i.__wbindgen_realloc),
                l = p,
                f = m(r, i.__wbindgen_malloc, i.__wbindgen_realloc),
                b = p;
              return s(i.prepareInvokeCapability(_, o, a, c, u, l, f, b));
            }
            function K(e, n, t) {
              var r = m(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
                _ = p,
                o = m(n, i.__wbindgen_malloc, i.__wbindgen_realloc),
                a = p,
                c = m(t, i.__wbindgen_malloc, i.__wbindgen_realloc),
                u = p;
              return s(i.completeInvokeCapability(r, _, o, a, c, u));
            }
            function B(e) {
              var n = m(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
                t = p;
              return s(i.verifyInvocationSignature(n, t));
            }
            function $(e, n) {
              var t = m(e, i.__wbindgen_malloc, i.__wbindgen_realloc),
                r = p,
                _ = m(n, i.__wbindgen_malloc, i.__wbindgen_realloc),
                o = p;
              return s(i.verifyInvocation(t, r, _, o));
            }
            function z(e, n) {
              try {
                return e.apply(this, n);
              } catch (e) {
                i.__wbindgen_exn_store(g(e));
              }
            }
            function Q(e, n, t, r) {
              i.wasm_bindgen__convert__closures__invoke2_mut__h043137bbc47dd3a0(
                e,
                n,
                g(t),
                g(r)
              );
            }
            function N(e) {
              s(e);
            }
            function Z(e, n) {
              return g(w(e, n));
            }
            function ee(e) {
              const n = s(e).original;
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
            function _e() {
              return z(function () {
                return g(new Headers());
              }, arguments);
            }
            function ie() {
              return z(function (e, n, t, r, _) {
                c(e).append(w(n, t), w(r, _));
              }, arguments);
            }
            function oe(e, n) {
              const t = c(n);
              var r = "string" == typeof t ? t : void 0,
                _ =
                  null == r
                    ? 0
                    : m(r, i.__wbindgen_malloc, i.__wbindgen_realloc),
                o = p;
              (P()[e / 4 + 1] = o), (P()[e / 4 + 0] = _);
            }
            function ae(e) {
              return c(e) instanceof Response;
            }
            function ce(e, n) {
              var t = m(c(n).url, i.__wbindgen_malloc, i.__wbindgen_realloc),
                r = p;
              (P()[e / 4 + 1] = r), (P()[e / 4 + 0] = t);
            }
            function ue(e) {
              return c(e).status;
            }
            function le(e) {
              return g(c(e).headers);
            }
            function se() {
              return z(function (e) {
                return g(c(e).arrayBuffer());
              }, arguments);
            }
            function fe() {
              return z(function (e, n, t) {
                return g(new Request(w(e, n), c(t)));
              }, arguments);
            }
            function be(e) {
              const n = c(e);
              return "object" == typeof n && null !== n;
            }
            function de() {
              return z(function () {
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
            function me(e) {
              return g(c(e).getRandomValues);
            }
            function ve(e, n) {
              c(e).getRandomValues(c(n));
            }
            function Pe(e, n, t) {
              var r, _;
              c(e).randomFillSync(
                ((r = n), (_ = t), d().subarray(r / 1, r / 1 + _))
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
            function Oe() {
              return z(function (e) {
                return g(c(e).next());
              }, arguments);
            }
            function je(e) {
              return c(e).done;
            }
            function De(e) {
              return g(c(e).value);
            }
            function Te() {
              return g(Symbol.iterator);
            }
            function Ie() {
              return z(function (e, n) {
                return g(Reflect.get(c(e), c(n)));
              }, arguments);
            }
            function Ce() {
              return z(function (e, n) {
                return g(c(e).call(c(n)));
              }, arguments);
            }
            function Me() {
              return g(new Object());
            }
            function Re() {
              return z(function (e, n, t) {
                return g(c(e).call(c(n), c(t)));
              }, arguments);
            }
            function Ee(e) {
              return c(e).getTime();
            }
            function Ae() {
              return g(new Date());
            }
            function Ue(e, n) {
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
            function Ve(e) {
              return g(Promise.resolve(c(e)));
            }
            function qe(e, n) {
              return g(c(e).then(c(n)));
            }
            function Ye(e, n, t) {
              return g(c(e).then(c(n), c(t)));
            }
            function Fe() {
              return z(function () {
                return g(self.self);
              }, arguments);
            }
            function Xe() {
              return z(function () {
                return g(window.window);
              }, arguments);
            }
            function We() {
              return z(function () {
                return g(globalThis.globalThis);
              }, arguments);
            }
            function Le() {
              return z(function () {
                return g(t.g.global);
              }, arguments);
            }
            function Ge(e) {
              return g(c(e).buffer);
            }
            function He(e, n, t) {
              return g(new Uint8Array(c(e), n >>> 0, t >>> 0));
            }
            function Je(e) {
              return g(new Uint8Array(c(e)));
            }
            function Ke(e, n, t) {
              c(e).set(c(n), t >>> 0);
            }
            function Be(e) {
              return c(e).length;
            }
            function $e(e) {
              return g(new Uint8Array(e >>> 0));
            }
            function ze(e, n, t) {
              return g(c(e).subarray(n >>> 0, t >>> 0));
            }
            function Qe() {
              return z(function (e, n) {
                return Reflect.has(c(e), c(n));
              }, arguments);
            }
            function Ne() {
              return z(function (e, n, t) {
                return Reflect.set(c(e), c(n), c(t));
              }, arguments);
            }
            function Ze() {
              return z(function (e) {
                return g(JSON.stringify(c(e)));
              }, arguments);
            }
            function en(e, n) {
              var t = m(S(c(n)), i.__wbindgen_malloc, i.__wbindgen_realloc),
                r = p;
              (P()[e / 4 + 1] = r), (P()[e / 4 + 0] = t);
            }
            function nn(e, n) {
              throw new Error(w(e, n));
            }
            function tn() {
              return g(i.memory);
            }
            function rn(e, n, t) {
              return g(x(e, n, 3712, k));
            }
            _();
          } catch (_n) {
            _(_n);
          }
        });
      },
      503: function (e, n, t) {
        var r =
            (this && this.__assign) ||
            function () {
              return (
                (r =
                  Object.assign ||
                  function (e) {
                    for (var n, t = 1, r = arguments.length; t < r; t++)
                      for (var _ in (n = arguments[t]))
                        Object.prototype.hasOwnProperty.call(n, _) &&
                          (e[_] = n[_]);
                    return e;
                  }),
                r.apply(this, arguments)
              );
            },
          _ =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, n, t, r) {
                  void 0 === r && (r = t);
                  var _ = Object.getOwnPropertyDescriptor(n, t);
                  (_ &&
                    !("get" in _
                      ? !n.__esModule
                      : _.writable || _.configurable)) ||
                    (_ = {
                      enumerable: !0,
                      get: function () {
                        return n[t];
                      },
                    }),
                    Object.defineProperty(e, r, _);
                }
              : function (e, n, t, r) {
                  void 0 === r && (r = t), (e[r] = n[t]);
                }),
          i =
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
          o =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var n = {};
              if (null != e)
                for (var t in e)
                  "default" !== t &&
                    Object.prototype.hasOwnProperty.call(e, t) &&
                    _(n, e, t);
              return i(n, e), n;
            },
          a =
            (this && this.__awaiter) ||
            function (e, n, t, r) {
              return new (t || (t = Promise))(function (_, i) {
                function o(e) {
                  try {
                    c(r.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function a(e) {
                  try {
                    c(r.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function c(e) {
                  var n;
                  e.done
                    ? _(e.value)
                    : ((n = e.value),
                      n instanceof t
                        ? n
                        : new t(function (e) {
                            e(n);
                          })).then(o, a);
                }
                c((r = r.apply(e, n || [])).next());
              });
            },
          c =
            (this && this.__generator) ||
            function (e, n) {
              var t,
                r,
                _,
                i,
                o = {
                  label: 0,
                  sent: function () {
                    if (1 & _[0]) throw _[1];
                    return _[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: a(0), throw: a(1), return: a(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function a(i) {
                return function (a) {
                  return (function (i) {
                    if (t)
                      throw new TypeError("Generator is already executing.");
                    for (; o; )
                      try {
                        if (
                          ((t = 1),
                          r &&
                            (_ =
                              2 & i[0]
                                ? r.return
                                : i[0]
                                ? r.throw || ((_ = r.return) && _.call(r), 0)
                                : r.next) &&
                            !(_ = _.call(r, i[1])).done)
                        )
                          return _;
                        switch (
                          ((r = 0), _ && (i = [2 & i[0], _.value]), i[0])
                        ) {
                          case 0:
                          case 1:
                            _ = i;
                            break;
                          case 4:
                            return o.label++, { value: i[1], done: !1 };
                          case 5:
                            o.label++, (r = i[1]), (i = [0]);
                            continue;
                          case 7:
                            (i = o.ops.pop()), o.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (_ =
                                  (_ = o.trys).length > 0 && _[_.length - 1]) ||
                                (6 !== i[0] && 2 !== i[0])
                              )
                            ) {
                              o = 0;
                              continue;
                            }
                            if (
                              3 === i[0] &&
                              (!_ || (i[1] > _[0] && i[1] < _[3]))
                            ) {
                              o.label = i[1];
                              break;
                            }
                            if (6 === i[0] && o.label < _[1]) {
                              (o.label = _[1]), (_ = i);
                              break;
                            }
                            if (_ && o.label < _[2]) {
                              (o.label = _[2]), o.ops.push(i);
                              break;
                            }
                            _[2] && o.ops.pop(), o.trys.pop();
                            continue;
                        }
                        i = n.call(e, o);
                      } catch (e) {
                        (i = [6, e]), (r = 0);
                      } finally {
                        t = _ = 0;
                      }
                    if (5 & i[0]) throw i[1];
                    return { value: i[0] ? i[1] : void 0, done: !0 };
                  })([i, a]);
                };
              }
            };
        (n.__esModule = !0), (n.PassportVerifier = void 0);
        var u = o(t(673)),
          l = t(53),
          s = (function () {
            function e(e, n) {
              void 0 === e && (e = "https://ceramic.passport-iam.gitcoin.co"),
                void 0 === n && (n = "1"),
                (this._reader = new l.PassportReader(e, n));
            }
            return (
              (e.prototype.init = function () {
                return a(this, void 0, void 0, function () {
                  var e = this;
                  return c(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [
                          4,
                          new Promise(function (e) {
                            return e(u);
                          }).then(function (n) {
                            return a(e, void 0, void 0, function () {
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
                return a(this, void 0, void 0, function () {
                  var _,
                    i,
                    o,
                    u,
                    l,
                    s = this;
                  return c(this, function (f) {
                    switch (f.label) {
                      case 0:
                        return (i = n)
                          ? [3, 2]
                          : [4, this._reader.getPassport(e)];
                      case 1:
                        (i = f.sent()), (f.label = 2);
                      case 2:
                        return (_ = i)
                          ? ((o = _.stamps),
                            (u = [r({}, _)]),
                            (l = {}),
                            [
                              4,
                              Promise.all(
                                o.map(function (n) {
                                  return a(s, void 0, void 0, function () {
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
                            u.concat([((l.stamps = f.sent()), l)])
                          ),
                        ];
                      case 4:
                        return [2, !1];
                    }
                  });
                });
              }),
              (e.prototype.verifyStamp = function (e, n, t) {
                return a(this, void 0, void 0, function () {
                  var r, _;
                  return c(this, function (i) {
                    switch (i.label) {
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
                              ? ((_ = n),
                                [4, this.verifyCredential(n.credential)])
                              : [3, 2])
                          : [3, 2];
                      case 1:
                        (_.verified = i.sent()), (i.label = 2);
                      case 2:
                        return [2, n];
                    }
                  });
                });
              }),
              (e.prototype.verifyCredential = function (e) {
                return a(this, void 0, void 0, function () {
                  var n, t, r, _;
                  return c(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return this._DIDKit ? [3, 2] : [4, this.init()];
                      case 1:
                        i.sent(), (i.label = 2);
                      case 2:
                        if (
                          ((n = e.expirationDate),
                          (t = e.proof),
                          !(new Date(n) > new Date()))
                        )
                          return [3, 7];
                        i.label = 3;
                      case 3:
                        return (
                          i.trys.push([3, 5, , 6]),
                          (_ = (r = JSON).parse),
                          [
                            4,
                            this._DIDKit.verifyCredential(
                              JSON.stringify(e),
                              '{"proofPurpose":"'.concat(t.proofPurpose, '"}')
                            ),
                          ]
                        );
                      case 4:
                        return [2, 0 === _.apply(r, [i.sent()]).errors.length];
                      case 5:
                        return i.sent(), [2, !1];
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
        n.PassportVerifier = s;
      },
      745: function (e, n) {
        var t =
            (this && this.__awaiter) ||
            function (e, n, t, r) {
              return new (t || (t = Promise))(function (_, i) {
                function o(e) {
                  try {
                    c(r.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function a(e) {
                  try {
                    c(r.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function c(e) {
                  var n;
                  e.done
                    ? _(e.value)
                    : ((n = e.value),
                      n instanceof t
                        ? n
                        : new t(function (e) {
                            e(n);
                          })).then(o, a);
                }
                c((r = r.apply(e, n || [])).next());
              });
            },
          r =
            (this && this.__generator) ||
            function (e, n) {
              var t,
                r,
                _,
                i,
                o = {
                  label: 0,
                  sent: function () {
                    if (1 & _[0]) throw _[1];
                    return _[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: a(0), throw: a(1), return: a(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function a(i) {
                return function (a) {
                  return (function (i) {
                    if (t)
                      throw new TypeError("Generator is already executing.");
                    for (; o; )
                      try {
                        if (
                          ((t = 1),
                          r &&
                            (_ =
                              2 & i[0]
                                ? r.return
                                : i[0]
                                ? r.throw || ((_ = r.return) && _.call(r), 0)
                                : r.next) &&
                            !(_ = _.call(r, i[1])).done)
                        )
                          return _;
                        switch (
                          ((r = 0), _ && (i = [2 & i[0], _.value]), i[0])
                        ) {
                          case 0:
                          case 1:
                            _ = i;
                            break;
                          case 4:
                            return o.label++, { value: i[1], done: !1 };
                          case 5:
                            o.label++, (r = i[1]), (i = [0]);
                            continue;
                          case 7:
                            (i = o.ops.pop()), o.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (_ =
                                  (_ = o.trys).length > 0 && _[_.length - 1]) ||
                                (6 !== i[0] && 2 !== i[0])
                              )
                            ) {
                              o = 0;
                              continue;
                            }
                            if (
                              3 === i[0] &&
                              (!_ || (i[1] > _[0] && i[1] < _[3]))
                            ) {
                              o.label = i[1];
                              break;
                            }
                            if (6 === i[0] && o.label < _[1]) {
                              (o.label = _[1]), (_ = i);
                              break;
                            }
                            if (_ && o.label < _[2]) {
                              (o.label = _[2]), o.ops.push(i);
                              break;
                            }
                            _[2] && o.ops.pop(), o.trys.pop();
                            continue;
                        }
                        i = n.call(e, o);
                      } catch (e) {
                        (i = [6, e]), (r = 0);
                      } finally {
                        t = _ = 0;
                      }
                    if (5 & i[0]) throw i[1];
                    return { value: i[0] ? i[1] : void 0, done: !0 };
                  })([i, a]);
                };
              }
            };
        (n.__esModule = !0), (n.Tulons = void 0);
        var _ = (function () {
          function e(e, n) {
            void 0 === n && (n = 1),
              (this._ceramicUrl = e || "https://ceramic-clay.3boxlabs.com"),
              (this._network = "".concat(n));
          }
          return (
            (e.prototype.getGenesis = function (e, n) {
              return t(this, void 0, void 0, function () {
                var t, _, i, o;
                return r(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return (
                        (t = {}),
                        (_ = (function (e, n) {
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
                                  header: { family: "IDX", controllers: [_] },
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
                        (i = r.sent() || {}),
                        (o = i.state.next
                          ? i.state.next.content
                          : i.state.content),
                        (n && n.length ? n : Object.keys(o)).forEach(function (
                          e
                        ) {
                          t[e] = !!o[e] && o[e];
                        }),
                        [2, { did: _, streams: t }]
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
                        return [4, this.getStreams(i(e, []))];
                      case 1:
                        return (t = r.sent()), [2, o.call(this, e, t, n)];
                    }
                  });
                })
              );
            }),
            e
          );
        })();
        function i(e, n) {
          return (
            void 0 === n && (n = []),
            e && "string" == typeof e && 0 == e.indexOf("ceramic://")
              ? n.push(e)
              : e &&
                "object" == typeof e &&
                Object.keys(e).map(function (t) {
                  n = i(e[t], n);
                }),
            n
          );
        }
        function o(e, n, _, a, c) {
          return (
            void 0 === _ && (_ = !1),
            void 0 === a && (a = []),
            void 0 === c && (c = !1),
            t(this, void 0, void 0, function () {
              var u,
                l = this;
              return r(this, function (s) {
                switch (s.label) {
                  case 0:
                    return e && "object" == typeof e
                      ? [
                          4,
                          Promise.all(
                            Object.keys(e).map(function (c) {
                              return t(l, void 0, void 0, function () {
                                var t, u;
                                return r(this, function (r) {
                                  switch (r.label) {
                                    case 0:
                                      return e[c] &&
                                        "string" == typeof e[c] &&
                                        0 == e[c].indexOf("ceramic://")
                                        ? ((e[c] =
                                            n[e[c].replace("ceramic://", "")]),
                                          _ && (a = i(e[c], a)),
                                          [3, 3])
                                        : [3, 1];
                                    case 1:
                                      return e[c] && "object" == typeof e[c]
                                        ? ((t = e),
                                          (u = c),
                                          [4, o.call(this, e[c], n, _, a, !0)])
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
                      s.sent(),
                      !c && a.length > 0 ? [4, this.getStreams(a)] : [3, 4]
                    );
                  case 2:
                    return (u = s.sent()), [4, o.call(this, e, u, _)];
                  case 3:
                    (e = s.sent()), (s.label = 4);
                  case 4:
                    return [2, e];
                }
              });
            })
          );
        }
        n.Tulons = _;
      },
      53: function (e, n, t) {
        var r =
            (this && this.__awaiter) ||
            function (e, n, t, r) {
              return new (t || (t = Promise))(function (_, i) {
                function o(e) {
                  try {
                    c(r.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function a(e) {
                  try {
                    c(r.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function c(e) {
                  var n;
                  e.done
                    ? _(e.value)
                    : ((n = e.value),
                      n instanceof t
                        ? n
                        : new t(function (e) {
                            e(n);
                          })).then(o, a);
                }
                c((r = r.apply(e, n || [])).next());
              });
            },
          _ =
            (this && this.__generator) ||
            function (e, n) {
              var t,
                r,
                _,
                i,
                o = {
                  label: 0,
                  sent: function () {
                    if (1 & _[0]) throw _[1];
                    return _[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: a(0), throw: a(1), return: a(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function a(i) {
                return function (a) {
                  return (function (i) {
                    if (t)
                      throw new TypeError("Generator is already executing.");
                    for (; o; )
                      try {
                        if (
                          ((t = 1),
                          r &&
                            (_ =
                              2 & i[0]
                                ? r.return
                                : i[0]
                                ? r.throw || ((_ = r.return) && _.call(r), 0)
                                : r.next) &&
                            !(_ = _.call(r, i[1])).done)
                        )
                          return _;
                        switch (
                          ((r = 0), _ && (i = [2 & i[0], _.value]), i[0])
                        ) {
                          case 0:
                          case 1:
                            _ = i;
                            break;
                          case 4:
                            return o.label++, { value: i[1], done: !1 };
                          case 5:
                            o.label++, (r = i[1]), (i = [0]);
                            continue;
                          case 7:
                            (i = o.ops.pop()), o.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (_ =
                                  (_ = o.trys).length > 0 && _[_.length - 1]) ||
                                (6 !== i[0] && 2 !== i[0])
                              )
                            ) {
                              o = 0;
                              continue;
                            }
                            if (
                              3 === i[0] &&
                              (!_ || (i[1] > _[0] && i[1] < _[3]))
                            ) {
                              o.label = i[1];
                              break;
                            }
                            if (6 === i[0] && o.label < _[1]) {
                              (o.label = _[1]), (_ = i);
                              break;
                            }
                            if (_ && o.label < _[2]) {
                              (o.label = _[2]), o.ops.push(i);
                              break;
                            }
                            _[2] && o.ops.pop(), o.trys.pop();
                            continue;
                        }
                        i = n.call(e, o);
                      } catch (e) {
                        (i = [6, e]), (r = 0);
                      } finally {
                        t = _ = 0;
                      }
                    if (5 & i[0]) throw i[1];
                    return { value: i[0] ? i[1] : void 0, done: !0 };
                  })([i, a]);
                };
              }
            };
        (n.__esModule = !0), (n.PassportReader = void 0);
        var i = t(745),
          o = (function () {
            function e(e, n) {
              (this._tulons = new i.Tulons(e, n)),
                (this._ceramic_gitcoin_passport_stream_id =
                  "kjzl6cwe1jw148h1e14jb5fkf55xmqhmyorp29r9cq356c7ou74ulowf8czjlzs");
            }
            return (
              (e.prototype.getGenesis = function (e) {
                return r(this, void 0, void 0, function () {
                  var n;
                  return _(this, function (t) {
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
                  return _(this, function (r) {
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
                  return _(this, function (_) {
                    switch (_.label) {
                      case 0:
                        return (
                          _.trys.push([0, 5, , 6]),
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
                        (r = _.sent().streams), (_.label = 3);
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
                        return (t = _.sent()), [3, 6];
                      case 5:
                        return _.sent(), (t = !1), [3, 6];
                      case 6:
                        return [2, t];
                    }
                  });
                });
              }),
              e
            );
          })();
        n.PassportReader = o;
      },
      551: (e, n, t) => {
        t.a(
          e,
          async (r, _) => {
            try {
              var i,
                o = r([(i = t(802))]),
                [i] = o.then ? (await o)() : o;
              await t.v(n, e.id, "2083dff252222283d71d", {
                "./didkit_wasm_bg.js": {
                  __wbindgen_object_drop_ref: i.ug,
                  __wbindgen_string_new: i.h4,
                  __wbindgen_cb_drop: i.G6,
                  __wbindgen_object_clone_ref: i.m_,
                  __wbg_fetch_fb26f738d9707b16: i.Xc,
                  __wbg_fetch_fe54824ee845f6b4: i.UT,
                  __wbg_new_226d109446575877: i.FA,
                  __wbg_append_4d85f35672cbffa7: i.uX,
                  __wbindgen_string_get: i.qt,
                  __wbg_instanceof_Response_ea36d565358a42f7: i.cj,
                  __wbg_url_6e564c9e212456f8: i.U6,
                  __wbg_status_3a55bb50e744b834: i.X1,
                  __wbg_headers_e4204c6775f7b3b4: i.uC,
                  __wbg_arrayBuffer_0e2a43f68a8b3e49: i.PR,
                  __wbg_newwithstrandinit_c07f0662ece15bc6: i.bK,
                  __wbindgen_is_object: i.Wl,
                  __wbg_self_86b4b13392c7af56: i.U5,
                  __wbg_crypto_b8c92eaac23d0d80: i.iY,
                  __wbg_msCrypto_9ad6677321a08dd8: i.mS,
                  __wbindgen_is_undefined: i.XP,
                  __wbg_static_accessor_MODULE_452b4680e8614c81: i.DA,
                  __wbg_require_f5521a5b85ad2542: i.r2,
                  __wbg_getRandomValues_dd27e6b0652b3236: i.yX,
                  __wbg_getRandomValues_e57c9b75ddead065: i.ae,
                  __wbg_randomFillSync_d2ba53160aec6aba: i.Os,
                  __wbindgen_is_function: i.o$,
                  __wbg_newnoargs_f579424187aa1717: i.bf,
                  __wbg_next_c7a2a6b012059a5e: i.Q2,
                  __wbg_next_dd1a890d37e38d73: i.re,
                  __wbg_done_982b1c7ac0cbc69d: i.vF,
                  __wbg_value_2def2d1fb38b02cd: i.pH,
                  __wbg_iterator_4b9cedbeda0c0e30: i.wI,
                  __wbg_get_8bbb82393651dd9c: i.gM,
                  __wbg_call_89558c3e96703ca1: i.Z4,
                  __wbg_new_d3138911a89329b0: i.LP,
                  __wbg_call_94697a95cb7e239c: i.nD,
                  __wbg_getTime_f8ce0ff902444efb: i.OL,
                  __wbg_new0_57a6a2c2aaed3fc5: i.Of,
                  __wbg_new_4beacc9c71572250: i.WJ,
                  __wbg_resolve_4f8f547f26b30b27: i.Yp,
                  __wbg_then_a6860c82b90816ca: i.wW,
                  __wbg_then_58a04e42527f52c6: i.YI,
                  __wbg_self_e23d74ae45fb17d1: i.tL,
                  __wbg_window_b4be7f48b24ac56e: i.Qu,
                  __wbg_globalThis_d61b1f48a57191ae: i.EB,
                  __wbg_global_e7669da72fd7f239: i.Yc,
                  __wbg_buffer_5e74a88a1424a2e0: i.rf,
                  __wbg_newwithbyteoffsetandlength_278ec7532799393a: i.S7,
                  __wbg_new_e3b800e570795b3c: i.Ts,
                  __wbg_set_5b8081e9d002f0df: i.Mz,
                  __wbg_length_30803400a8f15c59: i.Zu,
                  __wbg_newwithlength_5f4ce114a24dfe1e: i._G,
                  __wbg_subarray_a68f835ca2af506f: i.kC,
                  __wbg_has_3850edde6df9191b: i.v6,
                  __wbg_set_c42875065132a932: i.P0,
                  __wbg_stringify_f8bfc9e2d1e8b6a0: i.fp,
                  __wbindgen_debug_string: i.fY,
                  __wbindgen_throw: i.Or,
                  __wbindgen_memory: i.oH,
                  __wbindgen_closure_wrapper10701: i.cB,
                },
              }),
                _();
            } catch (e) {
              _(e);
            }
          },
          1
        );
      },
    },
    i = {};
  function o(e) {
    var n = i[e];
    if (void 0 !== n) return n.exports;
    var t = (i[e] = { id: e, loaded: !1, exports: {} });
    return _[e].call(t.exports, t, t.exports, o), (t.loaded = !0), t.exports;
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
    (o.a = (_, i, o) => {
      var a;
      o && ((a = []).d = 1), a && (a.moduleId = _.id);
      var c,
        u,
        l,
        s = new Set(),
        f = _.exports,
        b = new Promise((e, n) => {
          (l = n), (u = e);
        });
      (b[n] = f),
        (b[e] = (e) => (a && e(a), s.forEach(e), b.catch((e) => {}))),
        (b.moduleId = _.id),
        (_.exports = b),
        i(
          (_) => {
            var i;
            c = ((_) =>
              _.map((_) => {
                if (null !== _ && "object" == typeof _) {
                  if (_[e]) return _;
                  if (_.then) {
                    var i = [];
                    (i.d = 0),
                      _.then(
                        (e) => {
                          (o[n] = e), r(i);
                        },
                        (e) => {
                          (o[t] = e), r(i);
                        }
                      );
                    var o = {};
                    return (o[e] = (e) => e(i)), o;
                  }
                }
                var a = {};
                return (a[e] = (e) => {}), (a[n] = _), a;
              }))(_);
            var o = () =>
                c.map((e) => {
                  if (e[t]) throw e[t];
                  return e[n];
                }),
              u = new Promise((n) => {
                (i = () => n(o)).r = 0;
                var t = (e) =>
                  e !== a &&
                  !s.has(e) &&
                  (s.add(e), e && !e.d && (i.r++, e.push(i)));
                c.map((n) => n[e](t));
              });
            return i.r ? u : o();
          },
          (e) => (e ? l((b[t] = e)) : u(f), r(a))
        ),
        a && (a.d = 0);
    }),
    (o.d = (e, n) => {
      for (var t in n)
        o.o(n, t) &&
          !o.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
    }),
    (o.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (o.hmd = (e) => (
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
    (o.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (o.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.v = (e, n, t, r) => {
      var _ = fetch(o.p + "" + t + ".module.wasm");
      return "function" == typeof WebAssembly.instantiateStreaming
        ? WebAssembly.instantiateStreaming(_, r).then((n) =>
            Object.assign(e, n.instance.exports)
          )
        : _.then((e) => e.arrayBuffer())
            .then((e) => WebAssembly.instantiate(e, r))
            .then((n) => Object.assign(e, n.instance.exports));
    }),
    (o.p = "./");
  var a = o(503);
  PassportVerifier = a.PassportVerifier;
})();
