(() => {
    "use strict";
    var e = {
        918: (e, t, n) => {
            n.r(t), n.d(t, {default: () => r});
            const r = n.p + "1373045162788f1f083b5f6599246a23.wasm"
        }
    }, t = {};

    function n(r) {
        var i = t[r];
        if (void 0 !== i) return i.exports;
        var o = t[r] = {exports: {}};
        return e[r](o, o.exports, n), o.exports
    }

    n.d = (e, t) => {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {enumerable: !0, get: t[r]})
    }, n.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.p = "", (() => {
        const e = "undefined" != typeof AudioContext ? AudioContext : webkitAudioContext;
        let t;
        const r = new Array(32).fill(void 0);

        function i(e) {
            return r[e]
        }

        r.push(void 0, null, !0, !1);
        let o = 0, a = null;

        function s() {
            return null !== a && a.buffer === t.memory.buffer || (a = new Uint8Array(t.memory.buffer)), a
        }

        let c = new TextEncoder("utf-8");
        const u = "function" == typeof c.encodeInto ? function (e, t) {
            return c.encodeInto(e, t)
        } : function (e, t) {
            const n = c.encode(e);
            return t.set(n), {read: e.length, written: n.length}
        };

        function l(e, t, n) {
            if (void 0 === n) {
                const n = c.encode(e), r = t(n.length);
                return s().subarray(r, r + n.length).set(n), o = n.length, r
            }
            let r = e.length, i = t(r);
            const a = s();
            let l = 0;
            for (; l < r; l++) {
                const t = e.charCodeAt(l);
                if (t > 127) break;
                a[i + l] = t
            }
            if (l !== r) {
                0 !== l && (e = e.slice(l)), i = n(i, r, r = l + 3 * e.length);
                const t = s().subarray(i + l, i + r);
                l += u(e, t).written
            }
            return o = l, i
        }

        let _ = null;

        function f() {
            return null !== _ && _.buffer === t.memory.buffer || (_ = new Int32Array(t.memory.buffer)), _
        }

        let b = r.length;

        function d(e) {
            const t = i(e);
            return function (e) {
                e < 36 || (r[e] = b, b = e)
            }(e), t
        }

        function g(e) {
            b === r.length && r.push(r.length + 1);
            const t = b;
            return b = r[t], r[t] = e, t
        }

        let w = new TextDecoder("utf-8", {ignoreBOM: !0, fatal: !0});

        function h(e, t) {
            return w.decode(s().subarray(e, e + t))
        }

        function m(e) {
            return null == e
        }

        w.decode();
        let p = null;

        function y(e) {
            const t = typeof e;
            if ("number" == t || "boolean" == t || null == e) return `${e}`;
            if ("string" == t) return `"${e}"`;
            if ("symbol" == t) {
                const t = e.description;
                return null == t ? "Symbol" : `Symbol(${t})`
            }
            if ("function" == t) {
                const t = e.name;
                return "string" == typeof t && t.length > 0 ? `Function(${t})` : "Function"
            }
            if (Array.isArray(e)) {
                const t = e.length;
                let n = "[";
                t > 0 && (n += y(e[0]));
                for (let r = 1; r < t; r++) n += ", " + y(e[r]);
                return n += "]", n
            }
            const n = /\[object ([^\]]+)\]/.exec(toString.call(e));
            let r;
            if (!(n.length > 1)) return toString.call(e);
            if (r = n[1], "Object" == r) try {
                return "Object(" + JSON.stringify(e) + ")"
            } catch (e) {
                return "Object"
            }
            return e instanceof Error ? `${e.name}: ${e.message}\n${e.stack}` : r
        }

        function v(e, n, r, i) {
            const o = {a: e, b: n, cnt: 1, dtor: r}, a = (...e) => {
                o.cnt++;
                const n = o.a;
                o.a = 0;
                try {
                    return i(n, o.b, ...e)
                } finally {
                    0 == --o.cnt ? t.__wbindgen_export_2.get(o.dtor)(n, o.b) : o.a = n
                }
            };
            return a.original = o, a
        }

        function x(e, n, r) {
            t._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hef4f765648aac733(e, n, r)
        }

        function k(e, n, r) {
            t._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h1c9b256bef969e15(e, n, g(r))
        }

        function E(e, n, r) {
            t._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h1c9b256bef969e15(e, n, g(r))
        }

        function S(e, n, r) {
            t._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h1c9b256bef969e15(e, n, g(r))
        }

        function C(e, n) {
            t._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hbfc3deeea95df544(e, n)
        }

        function I(e, n, r) {
            t._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h1c9b256bef969e15(e, n, g(r))
        }

        function A(e, n, r) {
            t._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h1c9b256bef969e15(e, n, g(r))
        }

        function R(e, n, r) {
            t._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h1c9b256bef969e15(e, n, g(r))
        }

        function F(e, n, r) {
            t._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hb9fdbc20f190ab6a(e, n, g(r))
        }

        let P = null;

        function O(e, n) {
            return (null !== P && P.buffer === t.memory.buffer || (P = new Float32Array(t.memory.buffer)), P).subarray(e / 4, e / 4 + n)
        }

        function T(e) {
            return function () {
                try {
                    return e.apply(this, arguments)
                } catch (e) {
                    t.__wbindgen_exn_store(g(e))
                }
            }
        }

        let M = 32;

        function j(e) {
            if (1 == M) throw new Error("out of js stack");
            return r[--M] = e, M
        }

        let L = null;

        function N(e, t) {
            return s().subarray(e / 1, e / 1 + t)
        }

        class W {
            static __wrap(e) {
                const t = Object.create(W.prototype);
                return t.ptr = e, t
            }

            free() {
                const e = this.ptr;
                this.ptr = 0, t.__wbg_ruffle_free(e)
            }

            constructor(e, n, i) {
                try {
                    var o = t.ruffle_new(g(e), g(n), j(i));
                    return W.__wrap(o)
                } finally {
                    r[M++] = void 0
                }
            }

            stream_from(e, n) {
                try {
                    var i = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), a = o;
                    t.ruffle_stream_from(this.ptr, i, a, j(n))
                } finally {
                    r[M++] = void 0
                }
            }

            load_data(e, n) {
                try {
                    t.ruffle_load_data(this.ptr, g(e), j(n))
                } finally {
                    r[M++] = void 0
                }
            }

            play() {
                t.ruffle_play(this.ptr)
            }

            pause() {
                t.ruffle_pause(this.ptr)
            }

            is_playing() {
                return 0 !== t.ruffle_is_playing(this.ptr)
            }

            destroy() {
                t.ruffle_destroy(this.ptr)
            }

            call_exposed_callback(e, n) {
                var r = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), i = o, a = function (e, n) {
                    const r = n(4 * e.length),
                        i = (null !== L && L.buffer === t.memory.buffer || (L = new Uint32Array(t.memory.buffer)), L);
                    for (let t = 0; t < e.length; t++) i[r / 4 + t] = g(e[t]);
                    return o = e.length, r
                }(n, t.__wbindgen_malloc), s = o;
                return d(t.ruffle_call_exposed_callback(this.ptr, r, i, a, s))
            }

            set_trace_observer(e) {
                t.ruffle_set_trace_observer(this.ptr, g(e))
            }

            audio_context() {
                return d(t.ruffle_audio_context(this.ptr))
            }
        }

        const B = async function r(a) {
            void 0 === a && (a = "file:///home/runner/work/ruffle/ruffle/web/packages/core/pkg/ruffle_web.js".replace(/\.js$/, "_bg.wasm"));
            const c = {wbg: {}};
            c.wbg.__wbindgen_is_function = function (e) {
                return "function" == typeof i(e)
            }, c.wbg.__wbindgen_json_serialize = function (e, n) {
                const r = i(n);
                var a = l(JSON.stringify(void 0 === r ? null : r), t.__wbindgen_malloc, t.__wbindgen_realloc), s = o;
                f()[e / 4 + 1] = s, f()[e / 4 + 0] = a
            }, c.wbg.__wbindgen_object_drop_ref = function (e) {
                d(e)
            }, c.wbg.__wbindgen_object_clone_ref = function (e) {
                return g(i(e))
            }, c.wbg.__wbindgen_cb_drop = function (e) {
                const t = d(e).original;
                return 1 == t.cnt-- && (t.a = 0, !0)
            }, c.wbg.__wbindgen_string_new = function (e, t) {
                return g(h(e, t))
            }, c.wbg.__wbg_isFullscreen_96b85640554e160d = function (e) {
                return i(e).isFullscreen
            }, c.wbg.__wbg_displayUnsupportedMessage_a8f81a8e054e5e91 = function (e) {
                i(e).displayUnsupportedMessage()
            }, c.wbg.__wbg_displayMessage_c57c20204892da2b = function (e, t, n) {
                i(e).displayMessage(h(t, n))
            }, c.wbg.__wbg_copyToAudioBuffer_58f244be94bac1d2 = function (e, t, n, r, o) {
                var a, s, c;
                a = i(e), s = 0 === t ? void 0 : O(t, n), c = 0 === r ? void 0 : O(r, o), s && a.getChannelData(0).set(s), c && a.getChannelData(1).set(c)
            }, c.wbg.__wbg_new_df6e6ab7a65c4c4d = function (e, t) {
                return g(new Error(h(e, t)))
            }, c.wbg.__wbg_panic_bbc809dd04a12c60 = function (e, t) {
                i(e).panic(i(t))
            }, c.wbg.__wbg_onCallbackAvailable_3a48fae397926c96 = function (e, t, n) {
                i(e).onCallbackAvailable(h(t, n))
            }, c.wbg.__wbg_onFSCommand_fb2f94653f71796e = T((function (e, t, n, r, o) {
                return i(e).onFSCommand(h(t, n), h(r, o))
            })), c.wbg.__wbindgen_number_new = function (e) {
                return g(e)
            }, c.wbg.__wbg_new_59cb74e423758ede = function () {
                return g(new Error)
            }, c.wbg.__wbg_stack_558ba5917b466edd = function (e, n) {
                var r = l(i(n).stack, t.__wbindgen_malloc, t.__wbindgen_realloc), a = o;
                f()[e / 4 + 1] = a, f()[e / 4 + 0] = r
            }, c.wbg.__wbg_error_4bb6c2a97407129a = function (e, n) {
                try {
                    console.error(h(e, n))
                } finally {
                    t.__wbindgen_free(e, n)
                }
            }, c.wbg.__wbindgen_is_undefined = function (e) {
                return void 0 === i(e)
            }, c.wbg.__wbg_instanceof_WebGl2RenderingContext_9818b789249374d3 = function (e) {
                return i(e) instanceof WebGL2RenderingContext
            }, c.wbg.__wbg_bindVertexArray_569f8b5466293fb0 = function (e, t) {
                i(e).bindVertexArray(i(t))
            }, c.wbg.__wbg_blitFramebuffer_4b472bb45062bd6e = function (e, t, n, r, o, a, s, c, u, l, _) {
                i(e).blitFramebuffer(t, n, r, o, a, s, c, u, l >>> 0, _ >>> 0)
            }, c.wbg.__wbg_createVertexArray_1f35f6d163bbae13 = function (e) {
                var t = i(e).createVertexArray();
                return m(t) ? 0 : g(t)
            }, c.wbg.__wbg_renderbufferStorageMultisample_0426ba65de4885db = function (e, t, n, r, o, a) {
                i(e).renderbufferStorageMultisample(t >>> 0, n, r >>> 0, o, a)
            }, c.wbg.__wbg_texImage2D_79c0e000ef5e1b0a = T((function (e, t, n, r, o, a, s, c, u, l, _) {
                i(e).texImage2D(t >>> 0, n, r, o, a, s, c >>> 0, u >>> 0, 0 === l ? void 0 : N(l, _))
            })), c.wbg.__wbg_bindFramebuffer_4a37c2a7678c0994 = function (e, t, n) {
                i(e).bindFramebuffer(t >>> 0, i(n))
            }, c.wbg.__wbg_bindRenderbuffer_203ad50a30ad3c0d = function (e, t, n) {
                i(e).bindRenderbuffer(t >>> 0, i(n))
            }, c.wbg.__wbg_bindTexture_f3ab6393f75a763f = function (e, t, n) {
                i(e).bindTexture(t >>> 0, i(n))
            }, c.wbg.__wbg_createFramebuffer_d01ac1b4f7c704e5 = function (e) {
                var t = i(e).createFramebuffer();
                return m(t) ? 0 : g(t)
            }, c.wbg.__wbg_createRenderbuffer_c008c3bb50dfff9d = function (e) {
                var t = i(e).createRenderbuffer();
                return m(t) ? 0 : g(t)
            }, c.wbg.__wbg_createTexture_151a385cd028c893 = function (e) {
                var t = i(e).createTexture();
                return m(t) ? 0 : g(t)
            }, c.wbg.__wbg_deleteFramebuffer_acd92acda81356e9 = function (e, t) {
                i(e).deleteFramebuffer(i(t))
            }, c.wbg.__wbg_deleteRenderbuffer_b67ff9026d2be0fd = function (e, t) {
                i(e).deleteRenderbuffer(i(t))
            }, c.wbg.__wbg_deleteTexture_125ab82d8330e268 = function (e, t) {
                i(e).deleteTexture(i(t))
            }, c.wbg.__wbg_framebufferRenderbuffer_5293612146bd869a = function (e, t, n, r, o) {
                i(e).framebufferRenderbuffer(t >>> 0, n >>> 0, r >>> 0, i(o))
            }, c.wbg.__wbg_framebufferTexture2D_5b8575bda5aeceeb = function (e, t, n, r, o, a) {
                i(e).framebufferTexture2D(t >>> 0, n >>> 0, r >>> 0, i(o), a)
            }, c.wbg.__wbg_getError_609a7fa815fd3d84 = function (e) {
                return i(e).getError()
            }, c.wbg.__wbg_getParameter_be1e4b3ba2c0c339 = T((function (e, t) {
                return g(i(e).getParameter(t >>> 0))
            })), c.wbg.__wbg_texParameteri_6e7ba8c54bb639f2 = function (e, t, n, r) {
                i(e).texParameteri(t >>> 0, n >>> 0, r)
            }, c.wbg.__wbg_instanceof_Window_49f532f06a9786ee = function (e) {
                return i(e) instanceof Window
            }, c.wbg.__wbg_document_c0366b39e4f4c89a = function (e) {
                var t = i(e).document;
                return m(t) ? 0 : g(t)
            }, c.wbg.__wbg_location_c1e50a6e4c53d45c = function (e) {
                return g(i(e).location)
            }, c.wbg.__wbg_navigator_95ba9cd684cf90aa = function (e) {
                return g(i(e).navigator)
            }, c.wbg.__wbg_devicePixelRatio_268c49438a600d53 = function (e) {
                return i(e).devicePixelRatio
            }, c.wbg.__wbg_performance_87e4f3b6f966469f = function (e) {
                var t = i(e).performance;
                return m(t) ? 0 : g(t)
            }, c.wbg.__wbg_localStorage_a6fd83fc300473fc = T((function (e) {
                var t = i(e).localStorage;
                return m(t) ? 0 : g(t)
            })), c.wbg.__wbg_cancelAnimationFrame_60f9cf59ec1c0125 = T((function (e, t) {
                i(e).cancelAnimationFrame(t)
            })), c.wbg.__wbg_focus_ab7792954990fdb9 = T((function (e) {
                i(e).focus()
            })), c.wbg.__wbg_open_f355af0fd051a9d8 = T((function (e, t, n, r, o) {
                var a = i(e).open(h(t, n), h(r, o));
                return m(a) ? 0 : g(a)
            })), c.wbg.__wbg_requestAnimationFrame_ef0e2294dc8b1088 = T((function (e, t) {
                return i(e).requestAnimationFrame(i(t))
            })), c.wbg.__wbg_fetch_f532e04b8fe49aa0 = function (e, t) {
                return g(i(e).fetch(i(t)))
            }, c.wbg.__wbg_destination_4b8bc48ce4ebcd6c = function (e) {
                return g(i(e).destination)
            }, c.wbg.__wbg_sampleRate_0d2637cc084b2eaf = function (e) {
                return i(e).sampleRate
            }, c.wbg.__wbg_currentTime_1bc83619afbf9e72 = function (e) {
                return i(e).currentTime
            }, c.wbg.__wbg_new_2f70ca6da1976429 = T((function () {
                return g(new e)
            })), c.wbg.__wbg_suspend_ad6a97ee4bac3247 = T((function (e) {
                return g(i(e).suspend())
            })), c.wbg.__wbg_createBuffer_48e051aa20c4ba3e = T((function (e, t, n, r) {
                return g(i(e).createBuffer(t >>> 0, n >>> 0, r))
            })), c.wbg.__wbg_createBufferSource_0e160528349a924b = T((function (e) {
                return g(i(e).createBufferSource())
            })), c.wbg.__wbg_createChannelMerger_8e8d29d53323df91 = T((function (e, t) {
                return g(i(e).createChannelMerger(t >>> 0))
            })), c.wbg.__wbg_createChannelSplitter_10fc5fe404818afc = T((function (e, t) {
                return g(i(e).createChannelSplitter(t >>> 0))
            })), c.wbg.__wbg_createGain_a6211e4c615a1141 = T((function (e) {
                return g(i(e).createGain())
            })), c.wbg.__wbg_createScriptProcessor_e755612398f80dd4 = T((function (e, t, n, r) {
                return g(i(e).createScriptProcessor(t >>> 0, n >>> 0, r >>> 0))
            })), c.wbg.__wbg_decodeAudioData_1a1e91ec5cd60d59 = T((function (e, t, n, r) {
                return g(i(e).decodeAudioData(i(t), i(n), i(r)))
            })), c.wbg.__wbg_resume_6dd89ae2f9b0bef3 = T((function (e) {
                return g(i(e).resume())
            })), c.wbg.__wbg_setvalue_cc85088ad32e56b0 = function (e, t) {
                i(e).value = t
            }, c.wbg.__wbg_linearRampToValueAtTime_02ce948b9b4323e0 = T((function (e, t, n) {
                return g(i(e).linearRampToValueAtTime(t, n))
            })), c.wbg.__wbg_setValueAtTime_788b65cf85b7ba6a = T((function (e, t, n) {
                return g(i(e).setValueAtTime(t, n))
            })), c.wbg.__wbg_gain_688543a4eee1eece = function (e) {
                return g(i(e).gain)
            }, c.wbg.__wbg_userAgent_b9c7a338061adca8 = T((function (e, n) {
                var r = l(i(n).userAgent, t.__wbindgen_malloc, t.__wbindgen_realloc), a = o;
                f()[e / 4 + 1] = a, f()[e / 4 + 0] = r
            })), c.wbg.__wbg_get_29a9ce40981b8710 = T((function (e, n, r, a) {
                var s = i(n)[h(r, a)], c = m(s) ? 0 : l(s, t.__wbindgen_malloc, t.__wbindgen_realloc), u = o;
                f()[e / 4 + 1] = u, f()[e / 4 + 0] = c
            })), c.wbg.__wbg_set_13ecdf3c7967382d = T((function (e, t, n, r, o) {
                i(e)[h(t, n)] = h(r, o)
            })), c.wbg.__wbg_delete_2c0adda5d0edea03 = T((function (e, t, n) {
                delete i(e)[h(t, n)]
            })), c.wbg.__wbg_protocol_791396029743ce88 = T((function (e, n) {
                var r = l(i(n).protocol, t.__wbindgen_malloc, t.__wbindgen_realloc), a = o;
                f()[e / 4 + 1] = a, f()[e / 4 + 0] = r
            })), c.wbg.__wbg_assign_8948549eb7c584b7 = T((function (e, t, n) {
                i(e).assign(h(t, n))
            })), c.wbg.__wbg_baseURI_1fe61dc0a39a61ed = T((function (e, n) {
                var r = i(n).baseURI, a = m(r) ? 0 : l(r, t.__wbindgen_malloc, t.__wbindgen_realloc), s = o;
                f()[e / 4 + 1] = s, f()[e / 4 + 0] = a
            })), c.wbg.__wbg_appendChild_7c45aeccd496f2a5 = T((function (e, t) {
                return g(i(e).appendChild(i(t)))
            })), c.wbg.__wbg_instanceof_SvgsvgElement_aa3f79a2638c5f44 = function (e) {
                return i(e) instanceof SVGSVGElement
            }, c.wbg.__wbg_createSVGMatrix_9088b605b3cbb935 = function (e) {
                return g(i(e).createSVGMatrix())
            }, c.wbg.__wbg_length_da24898717a463e0 = function (e) {
                return i(e).length
            }, c.wbg.__wbg_setProperty_46b9bd1b0fad730b = T((function (e, t, n, r, o) {
                i(e).setProperty(h(t, n), h(r, o))
            })), c.wbg.__wbg_offsetX_4bd8c9fcb457cf0b = function (e) {
                return i(e).offsetX
            }, c.wbg.__wbg_offsetY_0dde12490e8ebfba = function (e) {
                return i(e).offsetY
            }, c.wbg.__wbg_button_9e74bd912190b055 = function (e) {
                return i(e).button
            }, c.wbg.__wbg_new_0af3e1641443f13d = T((function () {
                return g(new Path2D)
            })), c.wbg.__wbg_addPath_0b9c6299797f0772 = function (e, t, n) {
                i(e).addPath(i(t), i(n))
            }, c.wbg.__wbg_closePath_6e9529e4d6da5e83 = function (e) {
                i(e).closePath()
            }, c.wbg.__wbg_lineTo_2157bf4d1b0ce0d3 = function (e, t, n) {
                i(e).lineTo(t, n)
            }, c.wbg.__wbg_moveTo_fb2215902520c649 = function (e, t, n) {
                i(e).moveTo(t, n)
            }, c.wbg.__wbg_quadraticCurveTo_9c392c57a794a2d2 = function (e, t, n, r, o) {
                i(e).quadraticCurveTo(t, n, r, o)
            }, c.wbg.__wbg_connect_607a0c51b546a3db = T((function (e, t) {
                return g(i(e).connect(i(t)))
            })), c.wbg.__wbg_connect_a4236fe1b645b8fb = T((function (e, t, n) {
                return g(i(e).connect(i(t), n >>> 0))
            })), c.wbg.__wbg_connect_db97a7bc9cd258c6 = T((function (e, t, n, r) {
                return g(i(e).connect(i(t), n >>> 0, r >>> 0))
            })), c.wbg.__wbg_disconnect_1f5d0443b0bca9c8 = T((function (e) {
                i(e).disconnect()
            })), c.wbg.__wbg_outputBuffer_1fc843f5ddfd743b = T((function (e) {
                return g(i(e).outputBuffer)
            })), c.wbg.__wbg_setTransform_041d67e3d6972fd7 = function (e, t) {
                i(e).setTransform(i(t))
            }, c.wbg.__wbg_bindVertexArrayOES_17e98f43d896f40b = function (e, t) {
                i(e).bindVertexArrayOES(i(t))
            }, c.wbg.__wbg_createVertexArrayOES_393e00fa6f931f59 = function (e) {
                var t = i(e).createVertexArrayOES();
                return m(t) ? 0 : g(t)
            }, c.wbg.__wbg_seta_6c309b33d9a4fb29 = function (e, t) {
                i(e).a = t
            }, c.wbg.__wbg_setb_378147d7ba767ab1 = function (e, t) {
                i(e).b = t
            }, c.wbg.__wbg_setc_cc36b264b7a1ae60 = function (e, t) {
                i(e).c = t
            }, c.wbg.__wbg_setd_998c5989f5780653 = function (e, t) {
                i(e).d = t
            },c.wbg.__wbg_sete_42bf2f390f25e536 = function (e, t) {
                i(e).e = t
            },c.wbg.__wbg_setf_df5aef1469b0c50b = function (e, t) {
                i(e).f = t
            },c.wbg.__wbg_deltaY_2722120e563d3160 = function (e) {
                return i(e).deltaY
            },c.wbg.__wbg_deltaMode_3db3c9c4bedf191d = function (e) {
                return i(e).deltaMode
            },c.wbg.__wbg_setbuffer_8c396e74724eda12 = function (e, t) {
                i(e).buffer = i(t)
            },c.wbg.__wbg_setloop_1e141edefc26db22 = function (e, t) {
                i(e).loop = 0 !== t
            },c.wbg.__wbg_setloopStart_4162b0a533fbc0d5 = function (e, t) {
                i(e).loopStart = t
            },c.wbg.__wbg_setloopEnd_e81eb72ea2277d88 = function (e, t) {
                i(e).loopEnd = t
            },c.wbg.__wbg_setonended_f6f3e04e13c07db4 = function (e, t) {
                i(e).onended = i(t)
            },c.wbg.__wbg_start_f5e66921db9afaee = T((function (e) {
                i(e).start()
            })),c.wbg.__wbg_start_0237410bb20c6213 = T((function (e, t, n) {
                i(e).start(t, n)
            })),c.wbg.__wbg_stop_5765c7cac3ec1564 = T((function (e, t) {
                i(e).stop(t)
            })),c.wbg.__wbg_instanceof_HtmlFormElement_26283084b0956b17 = function (e) {
                return i(e) instanceof HTMLFormElement
            },c.wbg.__wbg_submit_121b8e3bd960f229 = T((function (e) {
                i(e).submit()
            })),c.wbg.__wbg_pointerId_602db5c989b38cc0 = function (e) {
                return i(e).pointerId
            },c.wbg.__wbg_instanceof_Response_f52c65c389890639 = function (e) {
                return i(e) instanceof Response
            },c.wbg.__wbg_ok_c20643e0a45dc5a0 = function (e) {
                return i(e).ok
            },c.wbg.__wbg_statusText_76ce672b84096caf = function (e, n) {
                var r = l(i(n).statusText, t.__wbindgen_malloc, t.__wbindgen_realloc), a = o;
                f()[e / 4 + 1] = a, f()[e / 4 + 0] = r
            },c.wbg.__wbg_arrayBuffer_0ba17dfaad804b6f = T((function (e) {
                return g(i(e).arrayBuffer())
            })),c.wbg.__wbg_key_d9b602f48baca7bc = function (e, n) {
                var r = l(i(n).key, t.__wbindgen_malloc, t.__wbindgen_realloc), a = o;
                f()[e / 4 + 1] = a, f()[e / 4 + 0] = r
            },c.wbg.__wbg_code_cbf76ad384ae1179 = function (e, n) {
                var r = l(i(n).code, t.__wbindgen_malloc, t.__wbindgen_realloc), a = o;
                f()[e / 4 + 1] = a, f()[e / 4 + 0] = r
            },c.wbg.__wbg_now_7628760b7b640632 = function (e) {
                return i(e).now()
            },c.wbg.__wbg_newwithstrandinit_11debb554792e043 = T((function (e, t, n) {
                return g(new Request(h(e, t), i(n)))
            })),c.wbg.__wbg_setonaudioprocess_66d0b1fa0dd39606 = function (e, t) {
                i(e).onaudioprocess = i(t)
            },c.wbg.__wbg_body_c8cb19d760637268 = function (e) {
                var t = i(e).body;
                return m(t) ? 0 : g(t)
            },c.wbg.__wbg_createElement_99351c8bf0efac6e = T((function (e, t, n) {
                return g(i(e).createElement(h(t, n)))
            })),c.wbg.__wbg_createElementNS_a7ef126eff5022c2 = T((function (e, t, n, r, o) {
                return g(i(e).createElementNS(0 === t ? void 0 : h(t, n), h(r, o)))
            })),c.wbg.__wbg_setid_f33ce4e43b43f57a = function (e, t, n) {
                i(e).id = h(t, n)
            },c.wbg.__wbg_clientWidth_2c84a7ebc75dd4f0 = function (e) {
                return i(e).clientWidth
            },c.wbg.__wbg_clientHeight_f56dfe03d1c42f3e = function (e) {
                return i(e).clientHeight
            },c.wbg.__wbg_querySelector_155b00165b78a12f = T((function (e, t, n) {
                var r = i(e).querySelector(h(t, n));
                return m(r) ? 0 : g(r)
            })),c.wbg.__wbg_releasePointerCapture_4b78cb9c51d4a539 = T((function (e, t) {
                i(e).releasePointerCapture(t)
            })),c.wbg.__wbg_setAttribute_e71b9086539f06a1 = T((function (e, t, n, r, o) {
                i(e).setAttribute(h(t, n), h(r, o))
            })),c.wbg.__wbg_setAttributeNS_a66240d5c750d0fa = T((function (e, t, n, r, o, a, s) {
                i(e).setAttributeNS(0 === t ? void 0 : h(t, n), h(r, o), h(a, s))
            })),c.wbg.__wbg_setPointerCapture_54ee987062d42d03 = T((function (e, t) {
                i(e).setPointerCapture(t)
            })),c.wbg.__wbg_remove_0639495587b1aaeb = function (e) {
                i(e).remove()
            },c.wbg.__wbg_instanceof_WebGlRenderingContext_ef4e51c6e4133d85 = function (e) {
                return i(e) instanceof WebGLRenderingContext
            },c.wbg.__wbg_drawingBufferWidth_fab3e20dd1ba5d4e = function (e) {
                return i(e).drawingBufferWidth
            },c.wbg.__wbg_drawingBufferHeight_31bc93d4dc3a0dcc = function (e) {
                return i(e).drawingBufferHeight
            },c.wbg.__wbg_bufferData_d47c8467e443121d = function (e, t, n, r, o) {
                i(e).bufferData(t >>> 0, N(n, r), o >>> 0)
            },c.wbg.__wbg_texImage2D_a4011abffe0229fb = T((function (e, t, n, r, o, a, s, c, u, l, _) {
                i(e).texImage2D(t >>> 0, n, r, o, a, s, c >>> 0, u >>> 0, 0 === l ? void 0 : N(l, _))
            })),c.wbg.__wbg_uniform1fv_cd9d2dea0641919d = function (e, t, n, r) {
                i(e).uniform1fv(i(t), O(n, r))
            },c.wbg.__wbg_uniform4fv_24ef46675c137552 = function (e, t, n, r) {
                i(e).uniform4fv(i(t), O(n, r))
            },c.wbg.__wbg_uniformMatrix3fv_a0a261980af4587d = function (e, t, n, r, o) {
                i(e).uniformMatrix3fv(i(t), 0 !== n, O(r, o))
            },c.wbg.__wbg_uniformMatrix4fv_088c96db8ee28c1d = function (e, t, n, r, o) {
                i(e).uniformMatrix4fv(i(t), 0 !== n, O(r, o))
            },c.wbg.__wbg_activeTexture_a51ec6273de88bc6 = function (e, t) {
                i(e).activeTexture(t >>> 0)
            },c.wbg.__wbg_attachShader_0dd248f6ab98fcf2 = function (e, t, n) {
                i(e).attachShader(i(t), i(n))
            },c.wbg.__wbg_bindBuffer_1ceb83e9674e812a = function (e, t, n) {
                i(e).bindBuffer(t >>> 0, i(n))
            },c.wbg.__wbg_bindFramebuffer_d8f98d1a7f6d67d1 = function (e, t, n) {
                i(e).bindFramebuffer(t >>> 0, i(n))
            },c.wbg.__wbg_bindRenderbuffer_1ba9206d5f319ae1 = function (e, t, n) {
                i(e).bindRenderbuffer(t >>> 0, i(n))
            },c.wbg.__wbg_bindTexture_6121e6db3f879582 = function (e, t, n) {
                i(e).bindTexture(t >>> 0, i(n))
            },c.wbg.__wbg_blendFunc_34a6bb31770822c5 = function (e, t, n) {
                i(e).blendFunc(t >>> 0, n >>> 0)
            },c.wbg.__wbg_clear_f6b2dd48aeed2752 = function (e, t) {
                i(e).clear(t >>> 0)
            },c.wbg.__wbg_clearColor_89f7819aa9f80129 = function (e, t, n, r, o) {
                i(e).clearColor(t, n, r, o)
            },c.wbg.__wbg_colorMask_88ebee15531b14ef = function (e, t, n, r, o) {
                i(e).colorMask(0 !== t, 0 !== n, 0 !== r, 0 !== o)
            },c.wbg.__wbg_compileShader_28bdbafe4445d24b = function (e, t) {
                i(e).compileShader(i(t))
            },c.wbg.__wbg_createBuffer_acedc3831832a280 = function (e) {
                var t = i(e).createBuffer();
                return m(t) ? 0 : g(t)
            },c.wbg.__wbg_createProgram_7e2f44b7b74694d4 = function (e) {
                var t = i(e).createProgram();
                return m(t) ? 0 : g(t)
            },c.wbg.__wbg_createShader_64c474f1d1d0c1f8 = function (e, t) {
                var n = i(e).createShader(t >>> 0);
                return m(n) ? 0 : g(n)
            },c.wbg.__wbg_createTexture_0a156dab1efc3499 = function (e) {
                var t = i(e).createTexture();
                return m(t) ? 0 : g(t)
            },c.wbg.__wbg_disable_5b9c6f74d5efd3a5 = function (e, t) {
                i(e).disable(t >>> 0)
            },c.wbg.__wbg_disableVertexAttribArray_ba8f39ecd28c601b = function (e, t) {
                i(e).disableVertexAttribArray(t >>> 0)
            },c.wbg.__wbg_drawElements_3eb5ba8a511ce0f0 = function (e, t, n, r, o) {
                i(e).drawElements(t >>> 0, n, r >>> 0, o)
            },c.wbg.__wbg_enable_87f39f6396535e1f = function (e, t) {
                i(e).enable(t >>> 0)
            },c.wbg.__wbg_enableVertexAttribArray_f29c8dde9c8c5cf5 = function (e, t) {
                i(e).enableVertexAttribArray(t >>> 0)
            },c.wbg.__wbg_getAttribLocation_ba61f837da80e249 = function (e, t, n, r) {
                return i(e).getAttribLocation(i(t), h(n, r))
            },c.wbg.__wbg_getExtension_c6863c255090d82f = T((function (e, t, n) {
                var r = i(e).getExtension(h(t, n));
                return m(r) ? 0 : g(r)
            })),c.wbg.__wbg_getParameter_ff687a6ea303e551 = T((function (e, t) {
                return g(i(e).getParameter(t >>> 0))
            })),c.wbg.__wbg_getProgramInfoLog_aacf06c959070653 = function (e, n, r) {
                var a = i(n).getProgramInfoLog(i(r)), s = m(a) ? 0 : l(a, t.__wbindgen_malloc, t.__wbindgen_realloc),
                    c = o;
                f()[e / 4 + 1] = c, f()[e / 4 + 0] = s
            },c.wbg.__wbg_getProgramParameter_a89bf14502c109f7 = function (e, t, n) {
                return g(i(e).getProgramParameter(i(t), n >>> 0))
            },c.wbg.__wbg_getShaderInfoLog_1eb885f2468e2429 = function (e, n, r) {
                var a = i(n).getShaderInfoLog(i(r)), s = m(a) ? 0 : l(a, t.__wbindgen_malloc, t.__wbindgen_realloc),
                    c = o;
                f()[e / 4 + 1] = c, f()[e / 4 + 0] = s
            },c.wbg.__wbg_getUniformLocation_ca853de4f2f9270d = function (e, t, n, r) {
                var o = i(e).getUniformLocation(i(t), h(n, r));
                return m(o) ? 0 : g(o)
            },c.wbg.__wbg_linkProgram_46a36cb158f10676 = function (e, t) {
                i(e).linkProgram(i(t))
            },c.wbg.__wbg_pixelStorei_31f6dc244bf4cd5b = function (e, t, n) {
                i(e).pixelStorei(t >>> 0, n)
            },c.wbg.__wbg_shaderSource_700ae72fca39850d = function (e, t, n, r) {
                i(e).shaderSource(i(t), h(n, r))
            },c.wbg.__wbg_stencilFunc_cc85d77d2098446b = function (e, t, n, r) {
                i(e).stencilFunc(t >>> 0, n, r >>> 0)
            },c.wbg.__wbg_stencilMask_ed2cded2c2b0b72c = function (e, t) {
                i(e).stencilMask(t >>> 0)
            },c.wbg.__wbg_stencilOp_1b3529546c1fdcc2 = function (e, t, n, r) {
                i(e).stencilOp(t >>> 0, n >>> 0, r >>> 0)
            },c.wbg.__wbg_texParameteri_e45f3977eb998137 = function (e, t, n, r) {
                i(e).texParameteri(t >>> 0, n >>> 0, r)
            },c.wbg.__wbg_uniform1f_3eb09312a513b94a = function (e, t, n) {
                i(e).uniform1f(i(t), n)
            },c.wbg.__wbg_uniform1i_e76b668973ae0655 = function (e, t, n) {
                i(e).uniform1i(i(t), n)
            },c.wbg.__wbg_useProgram_d63a57db0571e803 = function (e, t) {
                i(e).useProgram(i(t))
            },c.wbg.__wbg_vertexAttribPointer_b4b829a4f5a3778e = function (e, t, n, r, o, a, s) {
                i(e).vertexAttribPointer(t >>> 0, n, r >>> 0, 0 !== o, a, s)
            },c.wbg.__wbg_viewport_54305c74f5668b33 = function (e, t, n, r, o) {
                i(e).viewport(t, n, r, o)
            },c.wbg.__wbg_debug_146b863607d79e9d = function (e) {
                console.debug(i(e))
            },c.wbg.__wbg_error_e325755affc8634b = function (e) {
                console.error(i(e))
            },c.wbg.__wbg_info_d60054f760c729cc = function (e) {
                console.info(i(e))
            },c.wbg.__wbg_log_f2e13ca55da8bad3 = function (e) {
                console.log(i(e))
            },c.wbg.__wbg_warn_9e92ccdc67085e1b = function (e) {
                console.warn(i(e))
            },c.wbg.__wbg_style_9b773f0fc441eddc = function (e) {
                return g(i(e).style)
            },c.wbg.__wbg_newwithbuffersourcesequenceandoptions_03294a518a0bd99a = T((function (e, t) {
                return g(new Blob(i(e), i(t)))
            })),c.wbg.__wbg_currentTarget_b545d0d803b3a62e = function (e) {
                var t = i(e).currentTarget;
                return m(t) ? 0 : g(t)
            },c.wbg.__wbg_preventDefault_9aab6c264e5df3ee = function (e) {
                i(e).preventDefault()
            },c.wbg.__wbg_addEventListener_6a37bc32387cb66d = T((function (e, t, n, r) {
                i(e).addEventListener(h(t, n), i(r))
            })),c.wbg.__wbg_addEventListener_a422088e686210b5 = T((function (e, t, n, r, o) {
                i(e).addEventListener(h(t, n), i(r), i(o))
            })),c.wbg.__wbg_addEventListener_50b4229556ab0b83 = T((function (e, t, n, r, o) {
                i(e).addEventListener(h(t, n), i(r), 0 !== o)
            })),c.wbg.__wbg_removeEventListener_70dfb387da1982ac = T((function (e, t, n, r) {
                i(e).removeEventListener(h(t, n), i(r))
            })),c.wbg.__wbg_removeEventListener_4448b273b47328f8 = T((function (e, t, n, r, o) {
                i(e).removeEventListener(h(t, n), i(r), 0 !== o)
            })),c.wbg.__wbg_instanceof_HtmlCanvasElement_7bd3ee7838f11fc3 = function (e) {
                return i(e) instanceof HTMLCanvasElement
            },c.wbg.__wbg_width_0efa4604d41c58c5 = function (e) {
                return i(e).width
            },c.wbg.__wbg_setwidth_1d0e975feecff3ef = function (e, t) {
                i(e).width = t >>> 0
            },c.wbg.__wbg_height_aa24e3fef658c4a8 = function (e) {
                return i(e).height
            },c.wbg.__wbg_setheight_7758ee3ff5c65474 = function (e, t) {
                i(e).height = t >>> 0
            },c.wbg.__wbg_getContext_3db9399e6dc524ff = T((function (e, t, n) {
                var r = i(e).getContext(h(t, n));
                return m(r) ? 0 : g(r)
            })),c.wbg.__wbg_getContext_93be69215ea9dbbf = T((function (e, t, n, r) {
                var o = i(e).getContext(h(t, n), i(r));
                return m(o) ? 0 : g(o)
            })),c.wbg.__wbg_setsrc_ca894d724570195d = function (e, t, n) {
                i(e).src = h(t, n)
            },c.wbg.__wbg_new_1f2ded01c889cd38 = T((function () {
                return g(new Image)
            })),c.wbg.__wbg_newwithwidthandheight_0f3a13502ca94c49 = T((function (e, t) {
                return g(new Image(e >>> 0, t >>> 0))
            })),c.wbg.__wbg_data_55e064fddf34cf3b = function (e, n) {
                var r = function (e, t) {
                    const n = t(1 * e.length);
                    return s().set(e, n / 1), o = e.length, n
                }(i(n).data, t.__wbindgen_malloc), a = o;
                f()[e / 4 + 1] = a, f()[e / 4 + 0] = r
            },c.wbg.__wbg_instanceof_CanvasRenderingContext2d_1d38418d1d6c8b34 = function (e) {
                return i(e) instanceof CanvasRenderingContext2D
            },c.wbg.__wbg_setglobalAlpha_b4134dbd884b4d37 = function (e, t) {
                i(e).globalAlpha = t
            },c.wbg.__wbg_setglobalCompositeOperation_557a59a0ccf673d6 = T((function (e, t, n) {
                i(e).globalCompositeOperation = h(t, n)
            })),c.wbg.__wbg_setstrokeStyle_7f507e0d838e3dcf = function (e, t) {
                i(e).strokeStyle = i(t)
            },c.wbg.__wbg_setfillStyle_bbe97cb93eb1b55c = function (e, t) {
                i(e).fillStyle = i(t)
            },c.wbg.__wbg_setfilter_df75805bea0a8415 = function (e, t, n) {
                i(e).filter = h(t, n)
            },c.wbg.__wbg_setlineWidth_61de9d1eb4e9f8a6 = function (e, t) {
                i(e).lineWidth = t
            },c.wbg.__wbg_setlineCap_bff1a8858c9f067e = function (e, t, n) {
                i(e).lineCap = h(t, n)
            },c.wbg.__wbg_setlineJoin_de47815c918d7874 = function (e, t, n) {
                i(e).lineJoin = h(t, n)
            },c.wbg.__wbg_setmiterLimit_84b1a1dbddcd456a = function (e, t) {
                i(e).miterLimit = t
            },c.wbg.__wbg_drawImage_b8dec9034bf1d116 = T((function (e, t, n, r) {
                i(e).drawImage(i(t), n, r)
            })),c.wbg.__wbg_drawImage_801ad094f4734689 = T((function (e, t, n, r) {
                i(e).drawImage(i(t), n, r)
            })),c.wbg.__wbg_fill_6c721ab8eec90f70 = function (e, t) {
                i(e).fill(i(t))
            },c.wbg.__wbg_stroke_e25cf47e0d9a36c3 = function (e, t) {
                i(e).stroke(i(t))
            },c.wbg.__wbg_createPattern_006b6402db95df36 = T((function (e, t, n, r) {
                var o = i(e).createPattern(i(t), h(n, r));
                return m(o) ? 0 : g(o)
            })),c.wbg.__wbg_getImageData_dd3caac873bf461f = T((function (e, t, n, r, o) {
                return g(i(e).getImageData(t, n, r, o))
            })),c.wbg.__wbg_clearRect_6af85454d06df5fa = function (e, t, n, r, o) {
                i(e).clearRect(t, n, r, o)
            },c.wbg.__wbg_fillRect_c79d1b386c04efed = function (e, t, n, r, o) {
                i(e).fillRect(t, n, r, o)
            },c.wbg.__wbg_resetTransform_f78edb82fd1f7239 = T((function (e) {
                i(e).resetTransform()
            })),c.wbg.__wbg_setTransform_5f5f19301b76a8d6 = T((function (e, t, n, r, o, a, s) {
                i(e).setTransform(t, n, r, o, a, s)
            })),c.wbg.__wbg_get_5fa3f454aa041e6e = function (e, t) {
                return g(i(e)[t >>> 0])
            },c.wbg.__wbg_next_373211328013f949 = T((function (e) {
                return g(i(e).next())
            })),c.wbg.__wbg_done_49c598117f977077 = function (e) {
                return i(e).done
            },c.wbg.__wbg_value_c9ae6368b110a068 = function (e) {
                return g(i(e).value)
            },c.wbg.__wbg_get_85e0a3b459845fe2 = T((function (e, t) {
                return g(Reflect.get(i(e), i(t)))
            })),c.wbg.__wbg_call_951bd0c6d815d6f1 = T((function (e, t) {
                return g(i(e).call(i(t)))
            })),c.wbg.__wbg_new_9dff83a08f5994f3 = function () {
                return g(new Array)
            },c.wbg.__wbg_isArray_cf56c8363b1b35d9 = function (e) {
                return Array.isArray(i(e))
            },c.wbg.__wbg_of_3a4bb382824dd437 = function (e, t) {
                return g(Array.of(i(e), i(t)))
            },c.wbg.__wbg_push_3ddd8187ff2ff82d = function (e, t) {
                return i(e).push(i(t))
            },c.wbg.__wbg_instanceof_ArrayBuffer_3a0fa134e6809d57 = function (e) {
                return i(e) instanceof ArrayBuffer
            },c.wbg.__wbg_new_24c0ca5f23ee2dd9 = function (e) {
                return g(new ArrayBuffer(e >>> 0))
            },c.wbg.__wbg_slice_a498e5bb17f253f3 = function (e, t, n) {
                return g(i(e).slice(t >>> 0, n >>> 0))
            },c.wbg.__wbg_values_f28e313e2260a03a = function (e) {
                return g(i(e).values())
            },c.wbg.__wbg_newnoargs_7c6bd521992b4022 = function (e, t) {
                return g(new Function(h(e, t)))
            },c.wbg.__wbg_apply_4e68243803368d89 = T((function (e, t, n) {
                return g(i(e).apply(i(t), i(n)))
            })),c.wbg.__wbg_call_bf745b1758bb6693 = T((function (e, t, n) {
                return g(i(e).call(i(t), i(n)))
            })),c.wbg.__wbg_getTime_cf686ab22ab03a3e = function (e) {
                return i(e).getTime()
            },c.wbg.__wbg_getTimezoneOffset_b9f3c4664b1a35ae = function (e) {
                return i(e).getTimezoneOffset()
            },c.wbg.__wbg_new0_abd359df4aeb5b55 = function () {
                return g(new Date)
            },c.wbg.__wbg_instanceof_Object_cdaa71ad2ca2f4c5 = function (e) {
                return i(e) instanceof Object
            },c.wbg.__wbg_entries_7144a7309b22df64 = function (e) {
                return g(Object.entries(i(e)))
            },c.wbg.__wbg_fromEntries_cc1186a09f1ec7f2 = T((function (e) {
                return g(Object.fromEntries(i(e)))
            })),c.wbg.__wbg_is_049b1aece40b5301 = function (e, t) {
                return Object.is(i(e), i(t))
            },c.wbg.__wbg_new_ba07d0daa0e4677e = function () {
                return g(new Object)
            },c.wbg.__wbg_resolve_6e61e640925a0db9 = function (e) {
                return g(Promise.resolve(i(e)))
            },c.wbg.__wbg_then_dd3785597974798a = function (e, t) {
                return g(i(e).then(i(t)))
            },c.wbg.__wbg_then_0f957e0f4c3e537a = function (e, t, n) {
                return g(i(e).then(i(t), i(n)))
            },c.wbg.__wbg_self_6baf3a3aa7b63415 = T((function () {
                return g(self.self)
            })),c.wbg.__wbg_window_63fc4027b66c265b = T((function () {
                return g(window.window)
            })),c.wbg.__wbg_globalThis_513fb247e8e4e6d2 = T((function () {
                return g(globalThis.globalThis)
            })),c.wbg.__wbg_global_b87245cd886d7113 = T((function () {
                return g(n.g.global)
            })),c.wbg.__wbg_buffer_3f12a1c608c6d04e = function (e) {
                return g(i(e).buffer)
            },c.wbg.__wbg_newwithbyteoffsetandlength_4c51342f87299c5a = function (e, t, n) {
                return g(new Uint8Array(i(e), t >>> 0, n >>> 0))
            },c.wbg.__wbg_length_c645e7c02233b440 = function (e) {
                return i(e).length
            },c.wbg.__wbg_new_c6c0228e6d22a2f9 = function (e) {
                return g(new Uint8Array(i(e)))
            },c.wbg.__wbg_set_b91afac9fd216d99 = function (e, t, n) {
                i(e).set(i(t), n >>> 0)
            },c.wbg.__wbg_fill_f49407f577541856 = function (e, t, n, r) {
                return g(i(e).fill(t, n >>> 0, r >>> 0))
            },c.wbg.__wbg_buffer_c385539cb4060297 = function (e) {
                return g(i(e).buffer)
            },c.wbg.__wbg_byteLength_11e6bdc2fac53a3c = function (e) {
                return i(e).byteLength
            },c.wbg.__wbg_byteOffset_5db4e07752c85395 = function (e) {
                return i(e).byteOffset
            },c.wbg.__wbg_ownKeys_d44c25f33e28bfab = T((function (e) {
                return g(Reflect.ownKeys(i(e)))
            })),c.wbg.__wbg_set_9bdd413385146137 = T((function (e, t, n) {
                return Reflect.set(i(e), i(t), i(n))
            })),c.wbg.__wbindgen_number_get = function (e, n) {
                const r = i(n);
                var o = "number" == typeof r ? r : void 0;
                (null !== p && p.buffer === t.memory.buffer || (p = new Float64Array(t.memory.buffer)), p)[e / 8 + 1] = m(o) ? 0 : o, f()[e / 4 + 0] = !m(o)
            },c.wbg.__wbindgen_string_get = function (e, n) {
                const r = i(n);
                var a = "string" == typeof r ? r : void 0,
                    s = m(a) ? 0 : l(a, t.__wbindgen_malloc, t.__wbindgen_realloc), c = o;
                f()[e / 4 + 1] = c, f()[e / 4 + 0] = s
            },c.wbg.__wbindgen_boolean_get = function (e) {
                const t = i(e);
                return "boolean" == typeof t ? t ? 1 : 0 : 2
            },c.wbg.__wbindgen_debug_string = function (e, n) {
                var r = l(y(i(n)), t.__wbindgen_malloc, t.__wbindgen_realloc), a = o;
                f()[e / 4 + 1] = a, f()[e / 4 + 0] = r
            },c.wbg.__wbindgen_throw = function (e, t) {
                throw new Error(h(e, t))
            },c.wbg.__wbindgen_rethrow = function (e) {
                throw d(e)
            },c.wbg.__wbindgen_memory = function () {
                return g(t.memory)
            },c.wbg.__wbindgen_closure_wrapper1219 = function (e, t, n) {
                return g(v(e, t, 509, x))
            },c.wbg.__wbindgen_closure_wrapper1221 = function (e, t, n) {
                return g(v(e, t, 509, k))
            },c.wbg.__wbindgen_closure_wrapper1223 = function (e, t, n) {
                return g(v(e, t, 509, E))
            },c.wbg.__wbindgen_closure_wrapper1225 = function (e, t, n) {
                return g(v(e, t, 509, S))
            },c.wbg.__wbindgen_closure_wrapper1227 = function (e, t, n) {
                return g(v(e, t, 509, C))
            },c.wbg.__wbindgen_closure_wrapper1229 = function (e, t, n) {
                return g(v(e, t, 509, I))
            },c.wbg.__wbindgen_closure_wrapper1231 = function (e, t, n) {
                return g(v(e, t, 509, A))
            },c.wbg.__wbindgen_closure_wrapper1233 = function (e, t, n) {
                return g(v(e, t, 509, R))
            },c.wbg.__wbindgen_closure_wrapper1738 = function (e, t, n) {
                return g(v(e, t, 829, F))
            },("string" == typeof a || "function" == typeof Request && a instanceof Request || "function" == typeof URL && a instanceof URL) && (a = fetch(a));
            const {instance: u, module: _} = await async function (e, t) {
                if ("function" == typeof Response && e instanceof Response) {
                    if ("function" == typeof WebAssembly.instantiateStreaming) try {
                        return await WebAssembly.instantiateStreaming(e, t)
                    } catch (t) {
                        if ("application/wasm" == e.headers.get("Content-Type")) throw t;
                        console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", t)
                    }
                    const n = await e.arrayBuffer();
                    return await WebAssembly.instantiate(n, t)
                }
                {
                    const n = await WebAssembly.instantiate(e, t);
                    return n instanceof WebAssembly.Instance ? {instance: n, module: e} : n
                }
            }(await a, c);
            return t = u.exports, r.__wbindgen_wasm_module = _, t
        };

        function U(e) {
            const t = "function" == typeof Function.prototype.toString ? Function.prototype.toString() : null;
            return "string" == typeof t && t.indexOf("[native code]") >= 0 && Function.prototype.toString.call(e).indexOf("[native code]") >= 0
        }

        let D = null;

        function $() {
            return null == D && (D = function () {
                return e = this, t = void 0, i = function* () {
                    "function" == typeof Array.prototype.reduce && U(Array.prototype.reduce) || Object.defineProperty(Array.prototype, "reduce", {
                        value: function (...e) {
                            if (0 === e.length && window.Prototype && window.Prototype.Version && window.Prototype.Version < "1.6.1") return this.length > 1 ? this : this[0];
                            const t = e[0];
                            if (null === this) throw new TypeError("Array.prototype.reduce called on null or undefined");
                            if ("function" != typeof t) throw new TypeError(`${t} is not a function`);
                            const n = Object(this), r = n.length >>> 0;
                            let i, o = 0;
                            if (e.length >= 2) i = e[1]; else {
                                for (; o < r && !(o in n);) o++;
                                if (o >= r) throw new TypeError("Reduce of empty array with no initial value");
                                i = n[o++]
                            }
                            for (; o < r;) o in n && (i = t(i, n[o], o, n)), o++;
                            return i
                        }
                    }), "function" == typeof Window && U(Window) || "function" == typeof window.constructor && U(window.constructor) && (window.Window = window.constructor), null == window.Reflect && (window.Reflect = {}), "function" != typeof Reflect.get && Object.defineProperty(Reflect, "get", {
                        value: function (e, t) {
                            return e[t]
                        }
                    }), "function" != typeof Reflect.set && Object.defineProperty(Reflect, "set", {
                        value: function (e, t, n) {
                            e[t] = n
                        }
                    });
                    const e = yield Promise.resolve().then(n.bind(n, 918));
                    return yield B(e.default), W
                }, new ((r = void 0) || (r = Promise))((function (n, o) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                            e(t)
                        }))).then(a, s)
                    }

                    c((i = i.apply(e, t || [])).next())
                }));
                var e, t, r, i
            }()), D
        }

        class q {
            constructor(e) {
                if (this.__mimetypes = [], this.__named_mimetypes = {}, e) for (let t = 0; t < e.length; t++) this.install(e[t])
            }

            install(e) {
                const t = this.__mimetypes.length;
                this.__mimetypes.push(e), this.__named_mimetypes[e.type] = e, this[e.type] = e, this[t] = e
            }

            item(e) {
                return this.__mimetypes[e]
            }

            namedItem(e) {
                return this.__named_mimetypes[e]
            }

            get length() {
                return this.__mimetypes.length
            }

            [Symbol.iterator]() {
                return this.__mimetypes[Symbol.iterator]()
            }
        }

        class V extends q {
            constructor(e, t, n, r) {
                super(r), this.name = e, this.description = t, this.filename = n
            }

            install(e) {
                super.install(e)
            }

            [Symbol.iterator]() {
                return super[Symbol.iterator]()
            }
        }

        class H {
            constructor(e) {
                this.__plugins = [], this.__named_plugins = {};
                for (let t = 0; t < e.length; t++) this.install(e[t])
            }

            install(e) {
                const t = this.__plugins.length;
                this.__plugins.push(e), this.__named_plugins[e.name] = e, this[e.name] = e, this[t] = e
            }

            item(e) {
                return this.__plugins[e]
            }

            namedItem(e) {
                return this.__named_plugins[e]
            }

            get length() {
                return this.__plugins.length
            }
        }

        const z = new V("Shockwave Flash", "Shockwave Flash 32.0 r0", "ruffle.js", null);
        z.install({
            type: "application/futuresplash",
            description: "Shockwave Flash",
            suffixes: "spl",
            enabledPlugin: z
        }), z.install({
            type: "application/x-shockwave-flash",
            description: "Shockwave Flash",
            suffixes: "swf",
            enabledPlugin: z
        }), z.install({
            type: "application/x-shockwave-flash2-preview",
            description: "Shockwave Flash",
            suffixes: "swf",
            enabledPlugin: z
        }), z.install({
            type: "application/vnd.adobe.flash-movie",
            description: "Shockwave Flash",
            suffixes: "swf",
            enabledPlugin: z
        });
        const J = document.createElement("template");
        J.innerHTML = '\n    <style>\n        :host {\n            --ruffle-blue: #37528c;\n            --ruffle-orange: #ffad33;\n\n            display: inline-block;\n            position: relative;\n            /* Default width/height; this will get overridden by user styles/attributes. */\n            width: 550px;\n            height: 400px;\n            font-family: Arial, sans-serif;\n            letter-spacing: 0.4px;\n            touch-action: none;\n            user-select: none;\n            -webkit-user-select: none;\n            -webkit-tap-highlight-color: transparent;\n        }\n        \n        /* Ruffle\'s width/height CSS interferes Safari fullscreen CSS. */\n        /* Ensure that Safari\'s fullscreen mode actually fills the screen. */\n        :host(:-webkit-full-screen) {\n            display: block;\n            width: 100% !important;\n            height: 100% !important;\n        }\n\n        /* All of these use the dimensions specified by the embed. */\n        #container,\n        #play_button,\n        #unmute_overlay,\n        #unmute_overlay .background,\n        #panic,\n        #message_overlay {\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            left: 0;\n            right: 0;\n        }\n\n        #container {\n            overflow: hidden;\n        }\n\n        #container canvas {\n            width: 100%;\n            height: 100%;\n        }\n\n        #play_button,\n        #unmute_overlay {\n            cursor: pointer;\n            display: none;\n        }\n\n        #unmute_overlay .background {\n            background: black;\n            opacity: 0.7;\n        }\n\n        #play_button .icon,\n        #unmute_overlay .icon {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            width: 50%;\n            height: 50%;\n            max-width: 384px;\n            max-height: 384px;\n            transform: translate(-50%, -50%);\n            opacity: 0.8;\n        }\n\n        #play_button:hover .icon,\n        #unmute_overlay:hover .icon {\n            opacity: 1;\n        }\n\n        #panic {\n            font-size: 20px;\n            text-align: center;\n            /* Inverted colors from play button! */\n            background: linear-gradient(180deg, #fd3a40 0%, #fda138 100%);\n            color: white;\n            display: flex;\n            flex-flow: column;\n            justify-content: space-around;\n        }\n\n        #panic a {\n            color: var(--ruffle-blue);\n            font-weight: bold;\n        }\n\n        #panic-title {\n            font-size: xxx-large;\n            font-weight: bold;\n        }\n\n        #panic-body.details {\n            flex: 0.9;\n            margin: 0 10px;\n        }\n\n        #panic-body textarea {\n            width: 100%;\n            height: 100%;\n            resize: none;\n        }\n\n        #panic ul {\n            padding: 0;\n            display: flex;\n            list-style-type: none;\n            justify-content: space-evenly;\n        }\n\n        #message_overlay {\n            position: absolute;\n            background: var(--ruffle-blue);\n            color: var(--ruffle-orange);\n            opacity: 1;\n            z-index: 2;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            overflow: auto;\n        }\n\n        #message_overlay .message {\n            text-align: center;\n            max-height: 100%;\n            max-width: 100%;\n            padding: 5%;\n        }\n\n        #message_overlay p {\n            margin: 0.5em 0;\n        }\n\n        #message_overlay .message div {\n            display: flex;\n            justify-content: center;\n            flex-wrap: wrap;\n            column-gap: 1em;\n        }\n\n        #message_overlay a, #message_overlay button {\n            cursor: pointer;\n            background: var(--ruffle-blue);\n            color: var(--ruffle-orange);\n            border: 2px solid var(--ruffle-orange);\n            font-weight: bold;\n            font-size: 1.25em;\n            border-radius: 0.6em;\n            padding: 10px;\n            text-decoration: none;\n            margin: 2% 0;\n        }\n\n        #message_overlay a:hover, #message_overlay button:hover {\n            background: #ffffff4c;\n        }\n\n        #continue-btn {\n             cursor: pointer;\n             background: var(--ruffle-blue);\n             color: var(--ruffle-orange);\n             border: 2px solid var(--ruffle-orange);\n             font-weight: bold;\n             font-size: 20px;\n             border-radius: 20px;\n             padding: 10px;\n        }\n\n        #continue-btn:hover {\n            background: #ffffff4c;\n        }\n\n        #context-menu {\n            display: none;\n            color: black;\n            background: #fafafa;\n            border: 1px solid gray;\n            box-shadow: 0px 5px 10px -5px black;\n            position: absolute;\n            font-size: 14px;\n            text-align: left;\n            list-style: none;\n            padding: 0;\n            margin: 0;\n        }\n\n        #context-menu .menu_item {\n            padding: 5px 10px;\n        }\n\n        #context-menu .active {\n            cursor: pointer;\n            color: black;\n        }\n\n        #context-menu .disabled {\n            cursor: default;\n            color: gray;\n        }\n\n        #context-menu .active:hover {\n            background: lightgray;\n        }\n\n        #context-menu .menu_separator hr {\n            border: none;\n            border-bottom: 1px solid lightgray;\n            margin: 2px;\n        }\n    </style>\n    <style id="dynamic_styles"></style>\n\n    <div id="container">\n        <div id="play_button"><div class="icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" viewBox="0 0 250 250" style="width:100%;height:100%;"><defs><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="125" y1="0" x2="125" y2="250" spreadMethod="pad"><stop offset="0%" stop-color="#FDA138"/><stop offset="100%" stop-color="#FD3A40"/></linearGradient><g id="b"><path fill="url(#a)" d="M250 125q0-52-37-88-36-37-88-37T37 37Q0 73 0 125t37 88q36 37 88 37t88-37q37-36 37-88M87 195V55l100 70-100 70z"/><path fill="#FFF" d="M87 55v140l100-70L87 55z"/></g></defs><use xlink:href="#b"/></svg></div></div>\n        <div id="unmute_overlay"><div class="background"></div><div class="icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" viewBox="0 0 512 584" style="width:100%;height:100%;scale:0.8;"><path fill="#FFF" stroke="#FFF" d="m457.941 256 47.029-47.029c9.372-9.373 9.372-24.568 0-33.941-9.373-9.373-24.568-9.373-33.941 0l-47.029 47.029-47.029-47.029c-9.373-9.373-24.568-9.373-33.941 0-9.372 9.373-9.372 24.568 0 33.941l47.029 47.029-47.029 47.029c-9.372 9.373-9.372 24.568 0 33.941 4.686 4.687 10.827 7.03 16.97 7.03s12.284-2.343 16.971-7.029l47.029-47.03 47.029 47.029c4.687 4.687 10.828 7.03 16.971 7.03s12.284-2.343 16.971-7.029c9.372-9.373 9.372-24.568 0-33.941z"/><path fill="#FFF" stroke="#FFF" d="m99 160h-55c-24.301 0-44 19.699-44 44v104c0 24.301 19.699 44 44 44h55c2.761 0 5-2.239 5-5v-182c0-2.761-2.239-5-5-5z"/><path fill="#FFF" stroke="#FFF" d="m280 56h-24c-5.269 0-10.392 1.734-14.578 4.935l-103.459 79.116c-1.237.946-1.963 2.414-1.963 3.972v223.955c0 1.557.726 3.026 1.963 3.972l103.459 79.115c4.186 3.201 9.309 4.936 14.579 4.936h23.999c13.255 0 24-10.745 24-24v-352.001c0-13.255-10.745-24-24-24z"/><text x="256" y="560" text-anchor="middle" style="font-size:60px;fill:#FFF;stroke:#FFF;">Click to unmute</text></svg></div></div>\n    </div>\n\n    <ul id="context-menu"></ul>\n';
        const G = {};

        function Y(e, t) {
            if (void 0 !== G[e]) {
                if (G[e].class !== t) throw new Error("Internal naming conflict on " + e);
                return G[e].name
            }
            let n = 0;
            if (void 0 !== window.customElements) for (; n < 999;) {
                let r = e;
                if (n > 0 && (r = r + "-" + n), void 0 === window.customElements.get(r)) return window.customElements.define(r, t), G[e] = {
                    class: t,
                    name: r,
                    internalName: e
                }, r;
                n += 1
            }
            throw new Error("Failed to assign custom element " + e)
        }

        var X, K, Q, Z;
        !function (e) {
            e.On = "on", e.Off = "off", e.Auto = "auto"
        }(X || (X = {})), function (e) {
            e.Off = "off", e.Fullscreen = "fullscreen", e.On = "on"
        }(K || (K = {})), function (e) {
            e.Visible = "visible", e.Hidden = "hidden"
        }(Q || (Q = {})), function (e) {
            e.Error = "error", e.Warn = "warn", e.Info = "info", e.Debug = "debug", e.Trace = "trace"
        }(Z || (Z = {}));
        var ee = function (e, t, n, r) {
            return new (n || (n = Promise))((function (i, o) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, s)
                }

                c((r = r.apply(e, t || [])).next())
            }))
        };
        const te = "application/x-shockwave-flash", ne = "application/futuresplash",
            re = "application/x-shockwave-flash2-preview", ie = "application/vnd.adobe.flash-movie",
            oe = "https://ruffle.rs", ae = /^\s*(\d+(\.\d+)?(%)?)/;
        var se;

        function ce(e) {
            if (null == e) return {};
            e instanceof URLSearchParams || (e = new URLSearchParams(e));
            const t = {};
            for (const [n, r] of e) t[n] = r.toString();
            return t
        }

        !function (e) {
            e[e.Unknown = 0] = "Unknown", e[e.FileProtocol = 1] = "FileProtocol", e[e.JavascriptConfiguration = 2] = "JavascriptConfiguration", e[e.JavascriptConflict = 3] = "JavascriptConflict", e[e.WasmCors = 4] = "WasmCors", e[e.WasmMimeType = 5] = "WasmMimeType", e[e.WasmNotFound = 6] = "WasmNotFound"
        }(se || (se = {}));

        class ue extends HTMLElement {
            constructor() {
                return super(), this.hasContextMenu = !1, this.isTouch = !1, this.panicked = !1, this.config = {}, this.shadow = this.attachShadow({mode: "open"}), this.shadow.appendChild(J.content.cloneNode(!0)), this.dynamicStyles = this.shadow.getElementById("dynamic_styles"), this.container = this.shadow.getElementById("container"), this.playButton = this.shadow.getElementById("play_button"), this.playButton && this.playButton.addEventListener("click", this.playButtonClicked.bind(this)), this.unmuteOverlay = this.shadow.getElementById("unmute_overlay"), this.unmuteOverlay.addEventListener("click", this.unmuteOverlayClicked.bind(this)), this.contextMenuElement = this.shadow.getElementById("context-menu"), this.addEventListener("contextmenu", this.showContextMenu.bind(this)), this.addEventListener("pointerdown", this.pointerDown.bind(this)), window.addEventListener("click", this.hideContextMenu.bind(this)), this.instance = null, this.options = null, this.onFSCommand = null, this._trace_observer = null, this.ruffleConstructor = $(), this.lastActivePlayingState = !1, this.setupPauseOnTabHidden(), this
            }

            setupPauseOnTabHidden() {
                document.addEventListener("visibilitychange", (() => {
                    this.instance && (document.hidden && (this.lastActivePlayingState = this.instance.is_playing(), this.instance.pause()), document.hidden || !0 !== this.lastActivePlayingState || this.instance.play())
                }), !1)
            }

            connectedCallback() {
                this.updateStyles()
            }

            static get observedAttributes() {
                return ["width", "height"]
            }

            attributeChangedCallback(e, t, n) {
                "width" !== e && "height" !== e || this.updateStyles()
            }

            disconnectedCallback() {
                this.instance && (this.instance.destroy(), this.instance = null, console.log("Ruffle instance destroyed."))
            }

            updateStyles() {
                if (this.dynamicStyles.sheet) {
                    if (this.dynamicStyles.sheet.rules) for (let e = 0; e < this.dynamicStyles.sheet.rules.length; e++) this.dynamicStyles.sheet.deleteRule(e);
                    const e = this.attributes.getNamedItem("width");
                    if (null != e) {
                        const t = ue.htmlDimensionToCssDimension(e.value);
                        null !== t && this.dynamicStyles.sheet.insertRule(`:host { width: ${t}; }`)
                    }
                    const t = this.attributes.getNamedItem("height");
                    if (null != t) {
                        const e = ue.htmlDimensionToCssDimension(t.value);
                        null !== e && this.dynamicStyles.sheet.insertRule(`:host { height: ${e}; }`)
                    }
                }
            }

            isUnusedFallbackObject() {
                let e = this.parentNode;
                const t = function (e) {
                    const t = G[e];
                    return void 0 !== t ? {internalName: e, name: t.name, class: t.class} : null
                }("ruffle-object");
                if (null !== t) for (; e != document && null != e;) {
                    if (e.nodeName === t.name) return !0;
                    e = e.parentNode
                }
                return !1
            }

            ensureFreshInstance(e) {
                var t;
                return ee(this, void 0, void 0, (function* () {
                    this.instance && (this.instance.destroy(), this.instance = null, console.log("Ruffle instance destroyed."));
                    const n = yield this.ruffleConstructor.catch((e => {
                        if (console.error(`Serious error loading Ruffle: ${e}`), "file:" === window.location.protocol) e.ruffleIndexError = se.FileProtocol; else {
                            e.ruffleIndexError = se.WasmNotFound;
                            const t = String(e.message).toLowerCase();
                            t.includes("mime") ? e.ruffleIndexError = se.WasmMimeType : t.includes("networkerror") || t.includes("failed to fetch") ? e.ruffleIndexError = se.WasmCors : t.includes("magic") || "CompileError" !== e.name && "TypeError" !== e.name || (e.ruffleIndexError = se.JavascriptConflict)
                        }
                        throw this.panic(e), e
                    }));
                    this.instance = new n(this.container, this, e), console.log("New Ruffle instance created."), "running" !== this.audioState() && (this.container.style.visibility = "hidden", yield new Promise((e => {
                        window.setTimeout((() => {
                            e()
                        }), 200)
                    })), this.container.style.visibility = "");
                    const r = Object.values(Object(X)).includes(e.autoplay) ? e.autoplay : X.Auto,
                        i = Object.values(Object(Q)).includes(e.unmuteOverlay) ? e.unmuteOverlay : Q.Visible;
                    if (r == X.On || r == X.Auto && "running" === this.audioState()) {
                        if (this.play(), "running" !== this.audioState()) {
                            this.unmuteOverlay.style.display = "block", this.unmuteOverlay.childNodes.forEach((e => {
                                "style" in e && (e.style.visibility = i == Q.Visible ? "" : "hidden")
                            }));
                            const e = null === (t = this.instance) || void 0 === t ? void 0 : t.audio_context();
                            e && (e.onstatechange = () => {
                                "running" === e.state && this.unmuteOverlayClicked(), e.onstatechange = null
                            })
                        }
                    } else this.playButton.style.display = "block"
                }))
            }

            load(e) {
                var t, n;
                return ee(this, void 0, void 0, (function* () {
                    let r = "";
                    switch (typeof e) {
                        case"string":
                            e = {url: e};
                            break;
                        case"object":
                            null === e ? r = "Argument 0 must be a string or object" : "url" in e || "data" in e ? "url" in e && "string" != typeof e.url && (r = "`url` must be a string") : r = "Argument 0 must contain a `url` or `data` key";
                            break;
                        default:
                            r = "Argument 0 must be a string or object"
                    }
                    if (r.length > 0) {
                        const e = new TypeError(r);
                        throw e.ruffleIndexError = se.JavascriptConfiguration, this.panic(e), e
                    }
                    if (this.isConnected && !this.isUnusedFallbackObject()) try {
                        const r = Object.assign(Object.assign(Object.assign({}, null !== (n = null === (t = window.RufflePlayer) || void 0 === t ? void 0 : t.config) && void 0 !== n ? n : {}), this.config), e);
                        if (r.allowScriptAccess = e.allowScriptAccess, this.options = e, this.hasContextMenu = !1 !== r.contextMenu, r.backgroundColor && (this.container.style.backgroundColor = r.backgroundColor), yield this.ensureFreshInstance(r), "url" in e) {
                            console.log(`Loading SWF file ${e.url}`);
                            try {
                                this.swfUrl = new URL(e.url, document.location.href).href
                            } catch (t) {
                                this.swfUrl = e.url
                            }
                            const t = Object.assign(Object.assign({}, ce(e.url.substring(e.url.indexOf("?")))), ce(e.parameters));
                            this.instance.stream_from(e.url, t)
                        } else "data" in e && (console.log("Loading SWF data"), this.instance.load_data(new Uint8Array(e.data), ce(e.parameters)))
                    } catch (e) {
                        throw console.error(`Serious error occurred loading SWF file: ${e}`), e
                    } else console.warn("Ignoring attempt to play a disconnected or suspended Ruffle element")
                }))
            }

            playButtonClicked() {
                this.play()
            }

            play() {
                this.instance && (this.instance.play(), this.playButton && (this.playButton.style.display = "none"))
            }

            get fullscreenEnabled() {
                return !(!document.fullscreenEnabled && !document.webkitFullscreenEnabled)
            }

            get isFullscreen() {
                return (document.fullscreenElement || document.webkitFullscreenElement) === this
            }

            enterFullscreen() {
                const e = {navigationUI: "hide"};
                this.requestFullscreen ? this.requestFullscreen(e) : this.webkitRequestFullscreen ? this.webkitRequestFullscreen(e) : this.webkitRequestFullScreen && this.webkitRequestFullScreen(e)
            }

            exitFullscreen() {
                document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
            }

            pointerDown(e) {
                "touch" !== e.pointerType && "pen" !== e.pointerType || (this.isTouch = !0)
            }

            contextMenuItems() {
                const e = [];
                return this.fullscreenEnabled && (this.isFullscreen ? e.push({
                    text: "Exit fullscreen",
                    onClick: this.exitFullscreen.bind(this)
                }) : e.push({
                    text: "Enter fullscreen",
                    onClick: this.enterFullscreen.bind(this)
                })), e.push({
                    text: "About Ruffle (nightly 2021-04-15)", onClick() {
                        window.open(oe, "_blank")
                    }, separator: !1
                }), e
            }

            showContextMenu(e) {
                if (e.preventDefault(), !this.hasContextMenu || this.isTouch) return;
                for (; this.contextMenuElement.firstChild;) this.contextMenuElement.removeChild(this.contextMenuElement.firstChild);
                for (const {text: e, onClick: t, separator: n} of this.contextMenuItems()) {
                    const r = document.createElement("li");
                    if (r.className = "menu_item active", r.textContent = e, r.addEventListener("click", t), this.contextMenuElement.appendChild(r), !1 !== n) {
                        const e = document.createElement("li");
                        e.className = "menu_separator";
                        const t = document.createElement("hr");
                        e.appendChild(t), this.contextMenuElement.appendChild(e)
                    }
                }
                this.contextMenuElement.style.left = "0", this.contextMenuElement.style.top = "0", this.contextMenuElement.style.display = "block";
                const t = this.getBoundingClientRect(), n = e.clientX - t.x, r = e.clientY - t.y,
                    i = t.width - this.contextMenuElement.clientWidth - 1,
                    o = t.height - this.contextMenuElement.clientHeight - 1;
                this.contextMenuElement.style.left = Math.floor(Math.min(n, i)) + "px", this.contextMenuElement.style.top = Math.floor(Math.min(r, o)) + "px"
            }

            hideContextMenu() {
                this.contextMenuElement.style.display = "none"
            }

            pause() {
                this.instance && (this.instance.pause(), this.playButton && (this.playButton.style.display = "block"))
            }

            audioState() {
                if (this.instance) {
                    const e = this.instance.audio_context();
                    return e && e.state || "running"
                }
                return "suspended"
            }

            unmuteOverlayClicked() {
                if (this.instance) {
                    if ("running" !== this.audioState()) {
                        const e = this.instance.audio_context();
                        e && e.resume()
                    }
                    this.unmuteOverlay && (this.unmuteOverlay.style.display = "none")
                }
            }

            copyElement(e) {
                if (e) {
                    for (let t = 0; t < e.attributes.length; t++) {
                        const n = e.attributes[t];
                        if (n.specified) {
                            if ("title" === n.name && "Adobe Flash Player" === n.value) continue;
                            try {
                                this.setAttribute(n.name, n.value)
                            } catch (e) {
                                console.warn(`Unable to set attribute ${n.name} on Ruffle instance`)
                            }
                        }
                    }
                    for (const t of Array.from(e.children)) this.appendChild(t)
                }
            }

            static htmlDimensionToCssDimension(e) {
                if (e) {
                    const t = e.match(ae);
                    if (t) {
                        let e = t[1];
                        return t[3] || (e += "px"), e
                    }
                }
                return null
            }

            onCallbackAvailable(e) {
                const t = this.instance;
                this[e] = (...n) => null == t ? void 0 : t.call_exposed_callback(e, n)
            }

            set traceObserver(e) {
                var t;
                null === (t = this.instance) || void 0 === t || t.set_trace_observer(e)
            }

            panic(e) {
                var t;
                if (this.panicked) return;
                if (this.panicked = !0, e instanceof Error && ("AbortError" === e.name || e.message.includes("AbortError"))) return;
                const n = null !== (t = null == e ? void 0 : e.ruffleIndexError) && void 0 !== t ? t : se.Unknown,
                    r = Object.assign([], {stackIndex: -1});
                if (r.push("# Error Info\n"), e instanceof Error) {
                    if (r.push(`Error name: ${e.name}\n`), r.push(`Error message: ${e.message}\n`), e.stack) {
                        const t = r.push(`Error stack:\n\`\`\`\n${e.stack}\n\`\`\`\n`) - 1;
                        r.stackIndex = t
                    }
                } else r.push(`Error: ${e}\n`);
                r.push("\n# Player Info\n"), r.push(this.debugPlayerInfo()), r.push("\n# Page Info\n"), r.push(`Page URL: ${document.location.href}\n`), this.swfUrl && r.push(`SWF URL: ${this.swfUrl}\n`), r.push("\n# Browser Info\n"), r.push(`Useragent: ${window.navigator.userAgent}\n`), r.push(`OS: ${window.navigator.platform}\n`), r.push("\n# Ruffle Info\n"), r.push("Version: 0.1.0\n"), r.push("Name: nightly 2021-04-15\n"), r.push("Channel: nightly\n"), r.push("Built: 2021-04-15T00:40:58.997Z\n"), r.push("Commit: b2bed7a18d064232b6767cf6839c18637cb766d2\n");
                const i = r.join(""), o = document.location.href.split(/[?#]/)[0];
                let a, s,
                    c = `https://github.com/ruffle-rs/ruffle/issues/new?title=${encodeURIComponent(`Error on ${o}`)}&body=`,
                    u = encodeURIComponent(i);
                switch (r.stackIndex > -1 && String(c + u).length > 8195 && (r[r.stackIndex] = null, u = encodeURIComponent(r.join(""))), c += u, n) {
                    case se.FileProtocol:
                        a = '\n                    <p>It appears you are running Ruffle on the "file:" protocol.</p>\n                    <p>This doesn\'t work as browsers block many features from working for security reasons.</p>\n                    <p>Instead, we invite you to setup a local server or either use the web demo or the desktop application.</p>\n                ', s = `\n                    <li><a target="_top" href="${oe}/demo">Web Demo</a></li>\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/tags">Desktop Application</a></li>\n                `;
                        break;
                    case se.JavascriptConfiguration:
                        a = "\n                    <p>Ruffle has encountered a major issue due to an incorrect JavaScript configuration.</p>\n                    <p>If you are the server administrator, we invite you to check the error details to find out which parameter is at fault.</p>\n                    <p>You can also consult the Ruffle wiki for help.</p>\n                ", s = '\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#javascript-api">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ';
                        break;
                    case se.WasmNotFound:
                        a = '\n                    <p>Ruffle failed to load the required ".wasm" file component.</p>\n                    <p>If you are the server administrator, please ensure the file has correctly been uploaded.</p>\n                    <p>If the issue persists, you may need to use the "publicPath" setting: please consult the Ruffle wiki for help.</p>\n                ', s = '\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configuration-options">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ';
                        break;
                    case se.WasmMimeType:
                        a = '\n                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>\n                    <p>This web server is not serving ".wasm" files with the correct MIME type.</p>\n                    <p>If you are the server administrator, please consult the Ruffle wiki for help.</p>\n                ', s = '\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-webassembly-mime-type">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ';
                        break;
                    case se.WasmCors:
                        a = '\n                    <p>Ruffle failed to load the required ".wasm" file component.</p>\n                    <p>Access to fetch has likely been blocked by CORS policy.</p>\n                    <p>If you are the server administrator, please consult the Ruffle wiki for help.</p>\n                ', s = '\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#web">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ';
                        break;
                    case se.JavascriptConflict:
                        a = "\n                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>\n                    <p>It seems like this page uses JavaScript code that conflicts with Ruffle.</p>\n                    <p>If you are the server administrator, we invite you to try loading the file on a blank page.</p>\n                ", s = `\n                    <li><a target="_top" href="${c}">Report Bug</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                `;
                        break;
                    default:
                        a = "\n                    <p>Ruffle has encountered a major issue whilst trying to display this Flash content.</p>\n                    <p>This isn't supposed to happen, so we'd really appreciate if you could file a bug!</p>\n                ", s = `\n                    <li><a target="_top" href="${c}">Report Bug</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                `
                }
                this.container.innerHTML = `\n            <div id="panic">\n                <div id="panic-title">Something went wrong :(</div>\n                <div id="panic-body">${a}</div>\n                <div id="panic-footer">\n                    <ul>${s}</ul>\n                </div>\n            </div>\n        `;
                const l = this.container.querySelector("#panic-view-details");
                l && (l.onclick = () => {
                    const e = this.container.querySelector("#panic-body");
                    return e.classList.add("details"), e.innerHTML = `<textarea>${i}</textarea>`, !1
                }), this.instance && (this.instance.destroy(), this.instance = null)
            }

            displayUnsupportedMessage() {
                const e = document.createElement("div");
                e.id = "message_overlay", e.innerHTML = '<div class="message">\n            <p>Flash Player has been removed from browsers in 2021.</p>\n            <p>This content is not yet supported by the Ruffle emulator and will likely not run as intended.</p>\n            <div>\n                <a target="_top" class="more-info-link" href="https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users">More info</a>\n                <button id="run-anyway-btn">Run anyway</button>\n            </div>\n        </div>', this.container.prepend(e), e.querySelector("#run-anyway-btn").onclick = () => {
                    e.parentNode.removeChild(e)
                }
            }

            displayMessage(e) {
                const t = document.createElement("div");
                t.id = "message_overlay", t.innerHTML = `<div class="message">\n            <p>${e}</p>\n            <div>\n                <button id="continue-btn">continue</button>\n            </div>\n        </div>`, this.container.prepend(t), this.container.querySelector("#continue-btn").onclick = () => {
                    t.parentNode.removeChild(t)
                }
            }

            debugPlayerInfo() {
                var e, t;
                return `Allows script access: ${null !== (t = null === (e = this.options) || void 0 === e ? void 0 : e.allowScriptAccess) && void 0 !== t && t}\n`
            }
        }

        function le(e, t) {
            switch (e || (e = "sameDomain"), e.toLowerCase()) {
                case"always":
                    return !0;
                case"never":
                    return !1;
                case"samedomain":
                default:
                    try {
                        return new URL(window.location.href).origin === new URL(t, window.location.href).origin
                    } catch (e) {
                        return !1
                    }
            }
        }

        function _e(e) {
            if (e) {
                let t = "";
                try {
                    t = new URL(e, oe).pathname
                } catch (e) {
                }
                if (t && t.length >= 4) {
                    const e = t.slice(-4).toLowerCase();
                    if (".swf" === e || ".spl" === e) return !0
                }
            }
            return !1
        }

        class fe extends ue {
            constructor() {
                super()
            }

            connectedCallback() {
                var e, t, n, r;
                super.connectedCallback();
                const i = this.attributes.getNamedItem("src");
                if (i) {
                    const o = null !== (t = null === (e = this.attributes.getNamedItem("allowScriptAccess")) || void 0 === e ? void 0 : e.value) && void 0 !== t ? t : null;
                    this.load({
                        url: i.value,
                        allowScriptAccess: le(o, i.value),
                        parameters: null === (n = this.attributes.getNamedItem("flashvars")) || void 0 === n ? void 0 : n.value,
                        backgroundColor: null === (r = this.attributes.getNamedItem("bgcolor")) || void 0 === r ? void 0 : r.value
                    })
                }
            }

            get src() {
                var e;
                return null === (e = this.attributes.getNamedItem("src")) || void 0 === e ? void 0 : e.value
            }

            set src(e) {
                if (null != e) {
                    const t = document.createAttribute("src");
                    t.value = e, this.attributes.setNamedItem(t)
                } else this.attributes.removeNamedItem("src")
            }

            static get observedAttributes() {
                return ["src", "width", "height"]
            }

            attributeChangedCallback(e, t, n) {
                if (super.attributeChangedCallback(e, t, n), this.isConnected && "src" === e) {
                    let e;
                    const t = this.attributes.getNamedItem("flashvars");
                    t && (e = t.value);
                    const n = this.attributes.getNamedItem("src");
                    n && this.load({url: n.value, parameters: e})
                }
            }

            static isInterdictable(e) {
                var t;
                if (!e.getAttribute("src")) return !1;
                const n = null === (t = e.getAttribute("type")) || void 0 === t ? void 0 : t.toLowerCase();
                return n === te.toLowerCase() || n === ne.toLowerCase() || n === re.toLowerCase() || n === ie.toLowerCase() || (null == n || "" === n) && _e(e.getAttribute("src"))
            }

            static fromNativeEmbedElement(e) {
                const t = Y("ruffle-embed", fe), n = document.createElement(t);
                return n.copyElement(e), n
            }
        }

        function be(e, t, n) {
            t = t.toLowerCase();
            for (const n in e) if (Object.hasOwnProperty.call(e, n) && t === n.toLowerCase()) return e[n];
            return n
        }

        function de(e) {
            var t, n;
            const r = {};
            for (const i of e.children) if (i instanceof HTMLParamElement) {
                const e = null === (t = i.attributes.getNamedItem("name")) || void 0 === t ? void 0 : t.value,
                    o = null === (n = i.attributes.getNamedItem("value")) || void 0 === n ? void 0 : n.value;
                e && o && (r[e] = o)
            }
            return r
        }

        class ge extends ue {
            constructor() {
                super(), this.params = {}
            }

            connectedCallback() {
                var e;
                super.connectedCallback(), this.params = de(this);
                let t = null;
                this.attributes.getNamedItem("data") ? t = null === (e = this.attributes.getNamedItem("data")) || void 0 === e ? void 0 : e.value : this.params.movie && (t = this.params.movie);
                const n = be(this.params, "allowScriptAccess", null),
                    r = be(this.params, "flashvars", this.getAttribute("flashvars")),
                    i = be(this.params, "bgcolor", this.getAttribute("bgcolor"));
                if (t) {
                    const e = {url: t};
                    e.allowScriptAccess = le(n, t), r && (e.parameters = r), i && (e.backgroundColor = i), this.load(e)
                }
            }

            debugPlayerInfo() {
                var e;
                let t = super.debugPlayerInfo();
                t += "Player type: Object\n";
                let n = null;
                return this.attributes.getNamedItem("data") ? n = null === (e = this.attributes.getNamedItem("data")) || void 0 === e ? void 0 : e.value : this.params.movie && (n = this.params.movie), t += `SWF URL: ${n}\n`, Object.keys(this.params).forEach((e => {
                    t += `Param ${e}: ${this.params[e]}\n`
                })), Object.keys(this.attributes).forEach((e => {
                    var n;
                    t += `Attribute ${e}: ${null === (n = this.attributes.getNamedItem(e)) || void 0 === n ? void 0 : n.value}\n`
                })), t
            }

            get data() {
                return this.getAttribute("data")
            }

            set data(e) {
                if (null != e) {
                    const t = document.createAttribute("data");
                    t.value = e, this.attributes.setNamedItem(t)
                } else this.attributes.removeNamedItem("data")
            }

            static isInterdictable(e) {
                var t, n, r;
                if (e.getElementsByTagName("ruffle-embed").length > 0) return !1;
                const i = null === (t = e.attributes.getNamedItem("data")) || void 0 === t ? void 0 : t.value.toLowerCase(),
                    o = de(e);
                let a;
                if (i) a = _e(i); else {
                    if (!o || !o.movie) return !1;
                    a = _e(o.movie)
                }
                const s = null === (n = e.attributes.getNamedItem("classid")) || void 0 === n ? void 0 : n.value.toLowerCase();
                if (s === "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000".toLowerCase()) return !Array.from(e.getElementsByTagName("embed")).some(fe.isInterdictable);
                if (null != s && "" !== s) return !1;
                const c = null === (r = e.attributes.getNamedItem("type")) || void 0 === r ? void 0 : r.value.toLowerCase();
                return c === te.toLowerCase() || c === ne.toLowerCase() || c === re.toLowerCase() || c === ie.toLowerCase() || (null == c || "" === c) && a
            }

            static fromNativeObjectElement(e) {
                const t = Y("ruffle-object", ge), n = document.createElement(t);
                for (const t of Array.from(e.getElementsByTagName("embed"))) fe.isInterdictable(t) && t.remove();
                for (const t of Array.from(e.getElementsByTagName("object"))) ge.isInterdictable(t) && t.remove();
                return n.copyElement(e), n
            }
        }

        function we(e, t) {
            let n = "";
            if (void 0 !== e && void 0 !== e.publicPaths && void 0 !== e.publicPaths[t]) n = e.publicPaths[t]; else if (void 0 !== e && void 0 !== e.publicPath) n = e.publicPath; else if (void 0 !== document.currentScript && null !== document.currentScript && "src" in document.currentScript && "" !== document.currentScript.src) try {
                n = new URL(".", document.currentScript.src).href
            } catch (e) {
                console.warn("Unable to get currentScript URL")
            }
            return "" === n || n.endsWith("/") || (n += "/"), n
        }

        var he, me;
        let pe;
        const ye = null !== (me = null === (he = window.RufflePlayer) || void 0 === he ? void 0 : he.config) && void 0 !== me ? me : {},
            ve = we(ye, "ruffle.js") + "ruffle.js";
        let xe, ke, Ee, Se;

        function Ce() {
            try {
                xe = null != xe ? xe : document.getElementsByTagName("object"), ke = null != ke ? ke : document.getElementsByTagName("embed");
                for (const e of Array.from(xe)) if (ge.isInterdictable(e)) {
                    const t = ge.fromNativeObjectElement(e);
                    e.replaceWith(t)
                }
                for (const e of Array.from(ke)) if (fe.isInterdictable(e)) {
                    const t = fe.fromNativeEmbedElement(e);
                    e.replaceWith(t)
                }
            } catch (e) {
                console.error(`Serious error encountered when polyfilling native Flash elements: ${e}`)
            }
        }

        function Ie() {
            Ee = null != Ee ? Ee : document.getElementsByTagName("iframe"), Se = null != Se ? Se : document.getElementsByTagName("frame"), [Ee, Se].forEach((e => {
                for (let t = 0; t < e.length; t++) {
                    const n = e[t];
                    if (void 0 !== n.dataset.rufflePolyfilled) continue;
                    n.dataset.rufflePolyfilled = "";
                    const r = n.contentWindow, i = `Couldn't load Ruffle into ${n.tagName}[${n.src}]: `;
                    try {
                        "complete" === r.document.readyState && Ae(r, i)
                    } catch (e) {
                        pe || console.warn(i + e)
                    }
                    n.addEventListener("load", (() => {
                        Ae(r, i)
                    }), !1)
                }
            }))
        }

        function Ae(e, t) {
            var n, r, i, o, a;
            return r = this, i = void 0, a = function* () {
                let r;
                yield new Promise((e => {
                    window.setTimeout((() => {
                        e()
                    }), 100)
                }));
                try {
                    if (r = e.document, !r) return
                } catch (e) {
                    return void (pe || console.warn(t + e))
                }
                if (pe || void 0 === r.documentElement.dataset.ruffleOptout) if (pe) e.RufflePlayer || (e.RufflePlayer = {}), e.RufflePlayer.config = Object.assign(Object.assign({}, ye), null !== (n = e.RufflePlayer.config) && void 0 !== n ? n : {}); else if (!e.RufflePlayer) {
                    const t = r.createElement("script");
                    t.setAttribute("src", ve), t.onload = () => {
                        e.RufflePlayer = {}, e.RufflePlayer.config = ye
                    }, r.head.appendChild(t)
                }
            }, new ((o = void 0) || (o = Promise))((function (e, t) {
                function n(e) {
                    try {
                        c(a.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function s(e) {
                    try {
                        c(a.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function c(t) {
                    var r;
                    t.done ? e(t.value) : (r = t.value, r instanceof o ? r : new o((function (e) {
                        e(r)
                    }))).then(n, s)
                }

                c((a = a.apply(r, i || [])).next())
            }))
        }

        class Re {
            constructor(e, t, n, r, i) {
                this.major = e, this.minor = t, this.patch = n, this.prIdent = r, this.buildIdent = i
            }

            static fromSemver(e) {
                const t = e.split("+"), n = t[0].split("-"), r = n[0].split("."), i = parseInt(r[0], 10);
                let o = 0, a = 0, s = null, c = null;
                return null != r[1] && (o = parseInt(r[1], 10)), null != r[2] && (a = parseInt(r[2], 10)), null != n[1] && (s = n[1].split(".")), null != t[1] && (c = t[1].split(".")), new Re(i, o, a, s, c)
            }

            isCompatibleWith(e) {
                return 0 !== this.major && this.major === e.major || 0 === this.major && 0 === e.major && 0 !== this.minor && this.minor === e.minor || 0 === this.major && 0 === e.major && 0 === this.minor && 0 === e.minor && 0 !== this.patch && this.patch === e.patch
            }

            hasPrecedenceOver(e) {
                if (this.major > e.major) return !0;
                if (this.major < e.major) return !1;
                if (this.minor > e.minor) return !0;
                if (this.minor < e.minor) return !1;
                if (this.patch > e.patch) return !0;
                if (this.patch < e.patch) return !1;
                if (null == this.prIdent && null != e.prIdent) return !0;
                if (null != this.prIdent && null != e.prIdent) {
                    const t = /^[0-9]*$/;
                    for (let n = 0; n < this.prIdent.length && n < e.prIdent.length; n += 1) {
                        if (!t.test(this.prIdent[n]) && t.test(e.prIdent[n])) return !0;
                        if (t.test(this.prIdent[n]) && t.test(e.prIdent[n])) {
                            if (parseInt(this.prIdent[n], 10) > parseInt(e.prIdent[n], 10)) return !0;
                            if (parseInt(this.prIdent[n], 10) < parseInt(e.prIdent[n], 10)) return !1
                        } else {
                            if (t.test(this.prIdent[n]) && !t.test(e.prIdent[n])) return !1;
                            if (!t.test(this.prIdent[n]) && !t.test(e.prIdent[n])) {
                                if (this.prIdent[n] > e.prIdent[n]) return !0;
                                if (this.prIdent[n] < e.prIdent[n]) return !1
                            }
                        }
                    }
                    return this.prIdent.length > e.prIdent.length
                }
                return !1
            }

            isEqual(e) {
                return this.major === e.major && this.minor === e.minor && this.patch === e.patch
            }

            isStableOrCompatiblePrerelease(e) {
                return null == e.prIdent || this.major === e.major && this.minor === e.minor && this.patch === e.patch
            }
        }

        class Fe {
            constructor(e) {
                this.requirements = e
            }

            satisfiedBy(e) {
                for (let t = 0; t < this.requirements.length; t += 1) {
                    let n = !0;
                    for (let r = 0; r < this.requirements[t].length; r += 1) {
                        const i = this.requirements[t][r].comparator, o = this.requirements[t][r].version;
                        n = n && o.isStableOrCompatiblePrerelease(e), "" === i || "=" === i ? n = n && o.isEqual(e) : ">" === i ? n = n && e.hasPrecedenceOver(o) : ">=" === i ? n = n && (e.hasPrecedenceOver(o) || o.isEqual(e)) : "<" === i ? n = n && o.hasPrecedenceOver(e) : "<=" === i ? n = n && (o.hasPrecedenceOver(e) || o.isEqual(e)) : "^" === i && (n = n && o.isCompatibleWith(e))
                    }
                    if (n) return !0
                }
                return !1
            }

            static fromRequirementString(e) {
                const t = e.split(" ");
                let n = [];
                const r = [];
                for (let e = 0; e < t.length; e += 1) if ("||" === t[e]) n.length > 0 && (r.push(n), n = []); else if (t[e].length > 0) {
                    const r = /[0-9]/.exec(t[e]);
                    if (r) {
                        const i = t[e].slice(0, r.index).trim(), o = Re.fromSemver(t[e].slice(r.index).trim());
                        n.push({comparator: i, version: o})
                    }
                }
                return n.length > 0 && r.push(n), new Fe(r)
            }
        }

        class Pe {
            constructor(e) {
                this.sources = {}, this.config = {}, this.invoked = !1, this.newestName = null, this.conflict = null, null != e && (e instanceof Pe ? (this.sources = e.sources, this.config = e.config, this.invoked = e.invoked, this.conflict = e.conflict, this.newestName = e.newestName, e.superseded()) : e.constructor === Object && e.config instanceof Object ? this.config = e.config : this.conflict = e), "loading" === document.readyState ? window.addEventListener("DOMContentLoaded", this.init.bind(this)) : window.setTimeout(this.init.bind(this), 0)
            }

            get version() {
                return "0.1.0"
            }

            registerSource(e, t) {
                this.sources[e] = t
            }

            newestSourceName() {
                let e = null, t = Re.fromSemver("0.0.0");
                for (const n in this.sources) if (Object.prototype.hasOwnProperty.call(this.sources, n)) {
                    const r = Re.fromSemver(this.sources[n].version);
                    r.hasPrecedenceOver(t) && (e = n, t = r)
                }
                return e
            }

            init() {
                if (!this.invoked) {
                    if (this.invoked = !0, this.newestName = this.newestSourceName(), null === this.newestName) throw new Error("No registered Ruffle source!");
                    !1 !== this.config.polyfills && this.sources[this.newestName].polyfill("extension" === this.newestName)
                }
            }

            newest() {
                const e = this.newestSourceName();
                return null != e ? this.sources[e] : null
            }

            satisfying(e) {
                const t = Fe.fromRequirementString(e);
                let n = null;
                for (const e in this.sources) if (Object.prototype.hasOwnProperty.call(this.sources, e)) {
                    const r = Re.fromSemver(this.sources[e].version);
                    t.satisfiedBy(r) && (n = this.sources[e])
                }
                return n
            }

            localCompatible() {
                return void 0 !== this.sources.local ? this.satisfying("^" + this.sources.local.version) : this.newest()
            }

            local() {
                return void 0 !== this.sources.local ? this.satisfying("=" + this.sources.local.version) : this.newest()
            }

            superseded() {
                this.invoked = !0
            }

            static negotiate(e, t, n) {
                let r;
                return r = e instanceof Pe ? e : new Pe(e), void 0 !== t && void 0 !== n && (r.registerSource(t, n), !1 !== r.config.polyfills && n.pluginPolyfill()), r
            }
        }

        window.RufflePlayer = Pe.negotiate(window.RufflePlayer, "extension", new class {
            constructor(e) {
                this.name = e
            }

            get version() {
                return "0.1.0"
            }

            polyfill(e) {
                !function (e) {
                    pe = e, Ce(), Ie(), new MutationObserver((function (e) {
                        e.some((e => e.addedNodes.length > 0)) && (Ce(), Ie())
                    })).observe(document, {childList: !0, subtree: !0})
                }(e)
            }

            pluginPolyfill() {
                !function (e) {
                    "install" in navigator.plugins && navigator.plugins.install || Object.defineProperty(navigator, "plugins", {
                        value: new H(navigator.plugins),
                        writable: !1
                    }), navigator.plugins.install(e), !(e.length > 0) || "install" in navigator.mimeTypes && navigator.mimeTypes.install || Object.defineProperty(navigator, "mimeTypes", {
                        value: new q(navigator.mimeTypes),
                        writable: !1
                    });
                    const t = navigator.mimeTypes;
                    for (let n = 0; n < e.length; n += 1) t.install(e[n])
                }(z)
            }

            createPlayer() {
                const e = Y("ruffle-player", ue);
                return document.createElement(e)
            }
        }("extension")), n.p = we(window.RufflePlayer.config, "extension");
        let Oe = null;
        if (void 0 !== document.currentScript && null !== document.currentScript && "src" in document.currentScript && "" !== document.currentScript.src) try {
            Oe = new URL(document.currentScript.src).searchParams.get("uniqueMessageSuffix")
        } catch (e) {
        }
        Oe && window.addEventListener("message", (e => {
            if (e.source !== window) return;
            const {type: t, index: n, data: r} = e.data;
            t === `FROM_RUFFLE${Oe}` && window.postMessage({type: `TO_RUFFLE${Oe}`, index: n, data: r}, "*")
        }))
    })()
})();