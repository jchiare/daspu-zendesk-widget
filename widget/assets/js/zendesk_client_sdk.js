/*

Save Network request loading zd client code from file

*/
var ZAFClient = (function (n) {
  var r = {};
  function i(e) {
    if (r[e]) return r[e].exports;
    var t = (r[e] = { i: e, l: !1, exports: {} });
    return n[e].call(t.exports, t, t.exports, i), (t.l = !0), t.exports;
  }
  return (
    (i.m = n),
    (i.c = r),
    (i.d = function (e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (i.t = function (t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var r in t)
          i.d(
            n,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(t, 'a', t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = ''),
    i((i.s = 3))
  );
})([
  function (o, a, s) {
    'use strict';
    (function (e, m) {
      var t,
        n,
        r,
        i,
        y =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              };
      /*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/
      (i = function () {
        var t,
          a,
          n,
          e = Object.prototype.toString,
          r =
            void 0 !== m
              ? function (e) {
                  return m(e);
                }
              : setTimeout;
        try {
          Object.defineProperty({}, 'x', {}),
            (t = function (e, t, n, r) {
              return Object.defineProperty(e, t, {
                value: n,
                writable: !0,
                configurable: !1 !== r
              });
            });
        } catch (e) {
          t = function (e, t, n) {
            return (e[t] = n), e;
          };
        }
        function o(e, t) {
          n.add(e, t), a || (a = r(n.drain));
        }
        function s(e) {
          var t,
            n = void 0 === e ? 'undefined' : y(e);
          return (
            null == e || ('object' != n && 'function' != n) || (t = e.then),
            'function' == typeof t && t
          );
        }
        function u() {
          for (var e = 0; e < this.chain.length; e++)
            i(
              this,
              1 === this.state ? this.chain[e].success : this.chain[e].failure,
              this.chain[e]
            );
          this.chain.length = 0;
        }
        function i(e, t, n) {
          var r, i;
          try {
            !1 === t
              ? n.reject(e.msg)
              : (r = !0 === t ? e.msg : t.call(void 0, e.msg)) === n.promise
              ? n.reject(TypeError('Promise-chain cycle'))
              : (i = s(r))
              ? i.call(r, n.resolve, n.reject)
              : n.resolve(r);
          } catch (e) {
            n.reject(e);
          }
        }
        function c(e) {
          var t = this;
          t.triggered ||
            ((t.triggered = !0),
            t.def && (t = t.def),
            (t.msg = e),
            (t.state = 2),
            0 < t.chain.length && o(u, t));
        }
        function f(e, n, r, i) {
          for (var t = 0; t < n.length; t++)
            !(function (t) {
              e.resolve(n[t]).then(function (e) {
                r(t, e);
              }, i);
            })(t);
        }
        function l(e) {
          (this.def = e), (this.triggered = !1);
        }
        function d(e) {
          (this.promise = e),
            (this.state = 0),
            (this.triggered = !1),
            (this.chain = []),
            (this.msg = void 0);
        }
        function h(e) {
          if ('function' != typeof e) throw TypeError('Not a function');
          if (0 !== this.__NPO__) throw TypeError('Not a promise');
          this.__NPO__ = 1;
          var r = new d(this);
          (this.then = function (e, t) {
            var n = {
              success: 'function' != typeof e || e,
              failure: 'function' == typeof t && t
            };
            return (
              (n.promise = new this.constructor(function (e, t) {
                if ('function' != typeof e || 'function' != typeof t)
                  throw TypeError('Not a function');
                (n.resolve = e), (n.reject = t);
              })),
              r.chain.push(n),
              0 !== r.state && o(u, r),
              n.promise
            );
          }),
            (this.catch = function (e) {
              return this.then(void 0, e);
            });
          try {
            e.call(
              void 0,
              function (e) {
                (function e(n) {
                  var r,
                    i = this;
                  if (!i.triggered) {
                    (i.triggered = !0), i.def && (i = i.def);
                    try {
                      (r = s(n))
                        ? o(function () {
                            var t = new l(i);
                            try {
                              r.call(
                                n,
                                function () {
                                  e.apply(t, arguments);
                                },
                                function () {
                                  c.apply(t, arguments);
                                }
                              );
                            } catch (e) {
                              c.call(t, e);
                            }
                          })
                        : ((i.msg = n),
                          (i.state = 1),
                          0 < i.chain.length && o(u, i));
                    } catch (e) {
                      c.call(new l(i), e);
                    }
                  }
                }.call(r, e));
              },
              function (e) {
                c.call(r, e);
              }
            );
          } catch (e) {
            c.call(r, e);
          }
        }
        n = (function () {
          var n, r, i;
          function o(e, t) {
            (this.fn = e), (this.self = t), (this.next = void 0);
          }
          return {
            add: function (e, t) {
              (i = new o(e, t)),
                r ? (r.next = i) : (n = i),
                (r = i),
                (i = void 0);
            },
            drain: function () {
              var e = n;
              for (n = r = a = void 0; e; ) e.fn.call(e.self), (e = e.next);
            }
          };
        })();
        var p = t({}, 'constructor', h, !1);
        return (
          t((h.prototype = p), '__NPO__', 0, !1),
          t(h, 'resolve', function (n) {
            return n &&
              'object' == (void 0 === n ? 'undefined' : y(n)) &&
              1 === n.__NPO__
              ? n
              : new this(function (e, t) {
                  if ('function' != typeof e || 'function' != typeof t)
                    throw TypeError('Not a function');
                  e(n);
                });
          }),
          t(h, 'reject', function (n) {
            return new this(function (e, t) {
              if ('function' != typeof e || 'function' != typeof t)
                throw TypeError('Not a function');
              t(n);
            });
          }),
          t(h, 'all', function (t) {
            var a = this;
            return '[object Array]' != e.call(t)
              ? a.reject(TypeError('Not an array'))
              : 0 === t.length
              ? a.resolve([])
              : new a(function (n, e) {
                  if ('function' != typeof n || 'function' != typeof e)
                    throw TypeError('Not a function');
                  var r = t.length,
                    i = Array(r),
                    o = 0;
                  f(
                    a,
                    t,
                    function (e, t) {
                      (i[e] = t), ++o === r && n(i);
                    },
                    e
                  );
                });
          }),
          t(h, 'race', function (t) {
            var r = this;
            return '[object Array]' != e.call(t)
              ? r.reject(TypeError('Not an array'))
              : new r(function (n, e) {
                  if ('function' != typeof n || 'function' != typeof e)
                    throw TypeError('Not a function');
                  f(
                    r,
                    t,
                    function (e, t) {
                      n(t);
                    },
                    e
                  );
                });
          }),
          h
        );
      }),
        ((r = void 0 !== e ? e : void 0)[(n = 'Promise')] = r[n] || i()),
        o.exports
          ? (o.exports = r[n])
          : void 0 ===
              (t = function () {
                return r[n];
              }.call(a, s, a, o)) || (o.exports = t);
    }.call(this, s(1), s(4).setImmediate));
  },
  function (e, t, n) {
    'use strict';
    var r,
      i =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            };
    r = (function () {
      return this;
    })();
    try {
      r = r || Function('return this')() || (0, eval)('this');
    } catch (e) {
      'object' === ('undefined' == typeof window ? 'undefined' : i(window)) &&
        (r = window);
    }
    e.exports = r;
  },
  function (e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              'function' == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          };
    (t.isObject = function (e) {
      return null !== e && 'object' === (void 0 === e ? 'undefined' : r(e));
    }),
      (t.queryParameters = function (e) {
        var t = {},
          n = void 0,
          r = void 0,
          i = void 0,
          o = void 0;
        0 === (e = e || '').search(/\?|#/) && (e = e.slice(1));
        if (0 === e.length) return t;
        n = e.split('&');
        for (var a = 0; a < n.length; a++)
          (r = n[a].split('=')), (i = s(r[0])), (o = s(r[1]) || ''), (t[i] = o);
        return t;
      }),
      (t.isString = function (e) {
        return 'string' == typeof e;
      }),
      (t.when = function (e) {
        e = e || [];
        var i = void 0,
          o = void 0,
          t = new u(function (e, t) {
            (i = e), (o = t);
          }),
          a = 0,
          s = [],
          n = Array.isArray(e) ? e.slice() : [e];
        if ((a = n.length) <= 0) return i(), t;
        return (
          n.forEach(function (n, r) {
            var t = void 0;
            if (c(n)) t = n;
            else if ('function' == typeof n) {
              var e = void 0;
              try {
                t = c((e = n())) ? e : f(e) ? u.reject(e) : u.resolve(e);
              } catch (e) {
                t = u.reject(e);
              }
            } else
              t = new u(function (e, t) {
                f(n) ? t(n) : e(n);
              });
            t.then(function (e) {
              var t;
              (t = e), (s[r] = t), --a <= 0 && i(s);
            }).catch(o.bind(o));
          }),
          t
        );
      });
    var i,
      o = n(0),
      a = (i = o) && i.__esModule ? i : { default: i };
    var u = window.Promise || a.default;
    function s(e) {
      return decodeURIComponent((e || '').replace(/\+/g, ' '));
    }
    function c(e) {
      return e instanceof u || (!!e && e.then && 'function' == typeof e.then);
    }
    function f(e) {
      return !1 === e || e instanceof Error || 'string' == typeof e;
    }
  },
  function (e, t, n) {
    n(0), (e.exports = n(7));
  },
  function (e, i, o) {
    'use strict';
    (function (e) {
      var t =
          (void 0 !== e && e) || ('undefined' != typeof self && self) || window,
        n = Function.prototype.apply;
      function r(e, t) {
        (this._id = e), (this._clearFn = t);
      }
      (i.setTimeout = function () {
        return new r(n.call(setTimeout, t, arguments), clearTimeout);
      }),
        (i.setInterval = function () {
          return new r(n.call(setInterval, t, arguments), clearInterval);
        }),
        (i.clearTimeout = i.clearInterval =
          function (e) {
            e && e.close();
          }),
        (r.prototype.unref = r.prototype.ref = function () {}),
        (r.prototype.close = function () {
          this._clearFn.call(t, this._id);
        }),
        (i.enroll = function (e, t) {
          clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
        }),
        (i.unenroll = function (e) {
          clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
        }),
        (i._unrefActive = i.active =
          function (e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            0 <= t &&
              (e._idleTimeoutId = setTimeout(function () {
                e._onTimeout && e._onTimeout();
              }, t));
          }),
        o(5),
        (i.setImmediate =
          ('undefined' != typeof self && self.setImmediate) ||
          (void 0 !== e && e.setImmediate) ||
          void 0),
        (i.clearImmediate =
          ('undefined' != typeof self && self.clearImmediate) ||
          (void 0 !== e && e.clearImmediate) ||
          void 0);
    }.call(this, o(1)));
  },
  function (e, t, n) {
    'use strict';
    (function (e, p) {
      !(function (n, r) {
        if (!n.setImmediate) {
          var i,
            o,
            t,
            a,
            e,
            s = 1,
            u = {},
            c = !1,
            f = n.document,
            l = Object.getPrototypeOf && Object.getPrototypeOf(n);
          (l = l && l.setTimeout ? l : n),
            (i =
              '[object process]' === {}.toString.call(n.process)
                ? function (e) {
                    p.nextTick(function () {
                      h(e);
                    });
                  }
                : (function () {
                    if (n.postMessage && !n.importScripts) {
                      var e = !0,
                        t = n.onmessage;
                      return (
                        (n.onmessage = function () {
                          e = !1;
                        }),
                        n.postMessage('', '*'),
                        (n.onmessage = t),
                        e
                      );
                    }
                  })()
                ? ((a = 'setImmediate$' + Math.random() + '$'),
                  (e = function (e) {
                    e.source === n &&
                      'string' == typeof e.data &&
                      0 === e.data.indexOf(a) &&
                      h(+e.data.slice(a.length));
                  }),
                  n.addEventListener
                    ? n.addEventListener('message', e, !1)
                    : n.attachEvent('onmessage', e),
                  function (e) {
                    n.postMessage(a + e, '*');
                  })
                : n.MessageChannel
                ? (((t = new MessageChannel()).port1.onmessage = function (e) {
                    h(e.data);
                  }),
                  function (e) {
                    t.port2.postMessage(e);
                  })
                : f && 'onreadystatechange' in f.createElement('script')
                ? ((o = f.documentElement),
                  function (e) {
                    var t = f.createElement('script');
                    (t.onreadystatechange = function () {
                      h(e),
                        (t.onreadystatechange = null),
                        o.removeChild(t),
                        (t = null);
                    }),
                      o.appendChild(t);
                  })
                : function (e) {
                    setTimeout(h, 0, e);
                  }),
            (l.setImmediate = function (e) {
              'function' != typeof e && (e = new Function('' + e));
              for (
                var t = new Array(arguments.length - 1), n = 0;
                n < t.length;
                n++
              )
                t[n] = arguments[n + 1];
              var r = { callback: e, args: t };
              return (u[s] = r), i(s), s++;
            }),
            (l.clearImmediate = d);
        }
        function d(e) {
          delete u[e];
        }
        function h(e) {
          if (c) setTimeout(h, 0, e);
          else {
            var t = u[e];
            if (t) {
              c = !0;
              try {
                !(function (e) {
                  var t = e.callback,
                    n = e.args;
                  switch (n.length) {
                    case 0:
                      t();
                      break;
                    case 1:
                      t(n[0]);
                      break;
                    case 2:
                      t(n[0], n[1]);
                      break;
                    case 3:
                      t(n[0], n[1], n[2]);
                      break;
                    default:
                      t.apply(r, n);
                  }
                })(t);
              } finally {
                d(e), (c = !1);
              }
            }
          }
        }
      })('undefined' == typeof self ? (void 0 === e ? void 0 : e) : self);
    }.call(this, n(1), n(6)));
  },
  function (e, t, n) {
    'use strict';
    var r,
      i,
      o = (e.exports = {});
    function a() {
      throw new Error('setTimeout has not been defined');
    }
    function s() {
      throw new Error('clearTimeout has not been defined');
    }
    function u(t) {
      if (r === setTimeout) return setTimeout(t, 0);
      if ((r === a || !r) && setTimeout)
        return (r = setTimeout), setTimeout(t, 0);
      try {
        return r(t, 0);
      } catch (e) {
        try {
          return r.call(null, t, 0);
        } catch (e) {
          return r.call(this, t, 0);
        }
      }
    }
    !(function () {
      try {
        r = 'function' == typeof setTimeout ? setTimeout : a;
      } catch (e) {
        r = a;
      }
      try {
        i = 'function' == typeof clearTimeout ? clearTimeout : s;
      } catch (e) {
        i = s;
      }
    })();
    var c,
      f = [],
      l = !1,
      d = -1;
    function h() {
      l &&
        c &&
        ((l = !1), c.length ? (f = c.concat(f)) : (d = -1), f.length && p());
    }
    function p() {
      if (!l) {
        var e = u(h);
        l = !0;
        for (var t = f.length; t; ) {
          for (c = f, f = []; ++d < t; ) c && c[d].run();
          (d = -1), (t = f.length);
        }
        (c = null),
          (l = !1),
          (function (t) {
            if (i === clearTimeout) return clearTimeout(t);
            if ((i === s || !i) && clearTimeout)
              return (i = clearTimeout), clearTimeout(t);
            try {
              i(t);
            } catch (e) {
              try {
                return i.call(null, t);
              } catch (e) {
                return i.call(this, t);
              }
            }
          })(e);
      }
    }
    function m(e, t) {
      (this.fun = e), (this.array = t);
    }
    function y() {}
    (o.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (1 < arguments.length)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      f.push(new m(e, t)), 1 !== f.length || l || u(p);
    }),
      (m.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (o.title = 'browser'),
      (o.browser = !0),
      (o.env = {}),
      (o.argv = []),
      (o.version = ''),
      (o.versions = {}),
      (o.on = y),
      (o.addListener = y),
      (o.once = y),
      (o.off = y),
      (o.removeListener = y),
      (o.removeAllListeners = y),
      (o.emit = y),
      (o.prependListener = y),
      (o.prependOnceListener = y),
      (o.listeners = function (e) {
        return [];
      }),
      (o.binding = function (e) {
        throw new Error('process.binding is not supported');
      }),
      (o.cwd = function () {
        return '/';
      }),
      (o.chdir = function (e) {
        throw new Error('process.chdir is not supported');
      }),
      (o.umask = function () {
        return 0;
      });
  },
  function (e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r,
      i = n(8),
      s = (r = i) && r.__esModule ? r : { default: r },
      u = n(2);
    var o = {
      init: function (e, t) {
        t = t || window.location;
        var n = (0, u.queryParameters)(t.search),
          r = (0, u.queryParameters)(t.hash),
          i = n.origin || r.origin,
          o = n.app_guid || r.app_guid;
        if (!i || !o) return !1;
        var a = new s.default({ origin: i, appGuid: o });
        return 'function' == typeof e && a.on('app.registered', e.bind(a)), a;
      }
    };
    t.default = o;
  },
  function (e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.PROMISE_TIMEOUT_LONG = t.PROMISE_TIMEOUT = void 0);
    var r =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            },
      i = (function () {
        function r(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (e, t, n) {
          return t && r(e.prototype, t), n && r(e, n), e;
        };
      })();
    (t.collateActions = g),
      (t.stripActionArgs = _),
      (t.timeMsToSecondsRange = b),
      (t.trackSDKRequestTimeout = w);
    var s = a(n(9)),
      c = n(2),
      u = a(n(10)),
      o = a(n(0));
    function a(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var f = window.Promise || o.default,
      l = (t.PROMISE_TIMEOUT = 1e4),
      d = (t.PROMISE_TIMEOUT_LONG = 3e5),
      h = ['instances.create'],
      p = /^zaf\./,
      m = {},
      y = {};
    function v(e, t, n) {
      return setTimeout(function () {
        w(e, t, d), n(new Error('Invocation request timeout'));
      }, d);
    }
    function g(t, e) {
      return e.map(function (e) {
        return t + '-' + e;
      });
    }
    function _(e) {
      return e.replace(
        /:\w+(,?\w+)*((\.(show|hide|enable|disable))|(\\?\.\w*))?/g,
        ':arg$3'
      );
    }
    function b(e) {
      var t =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : d;
      if (t <= e) return t / 1e3 + '-';
      var n = e - (e % 1e4);
      return n / 1e3 + '-' + (n + 1e4) / 1e3;
    }
    function w(e, t, n) {
      var r = t.map(function (e) {
          return 'action:' + _(e);
        }),
        i = 'request_response_time:' + b(n);
      e.postMessage('__track__', {
        event_name: 'sdk_request_timeout',
        event_type: 'increment',
        data: 1,
        tags: r.concat(i)
      });
    }
    function T(e) {
      return isNaN(y[e]) && (y[e] = 0), ++y[e];
    }
    function k(e, t, n) {
      e.ready || n
        ? e._source.postMessage(t, e._origin)
        : e.on('app.registered', k.bind(null, e, t));
    }
    function E(r, i) {
      var o = T('promise'),
        a = void 0,
        s = void 0,
        u = Array.isArray(i) ? i : Object.keys(i),
        t = g(r, u),
        c = this;
      return new f(function (e, t) {
        (s = window.performance.now()),
          (a = (function (e, t, n, r) {
            var i = g(n, r);
            switch (n) {
              case 'invoke':
                var o = r.filter(function (e) {
                  return -1 !== h.indexOf(e);
                });
                if (o.length === r.length) return NaN;
                if (0 !== o.length)
                  throw new Error(
                    'Illegal bulk call - `instances.create` must be called separately.'
                  );
                return v(e, i, t);
              default:
                return v(e, i, t);
            }
          })(c, t, r, u)),
          (m[o] = { resolve: e, reject: t });
        var n = JSON.stringify({
          id: o,
          request: r,
          params: i,
          appGuid: c._appGuid,
          instanceGuid: c._instanceGuid
        });
        k(c, n);
      }).then(
        j.bind(null, {
          id: o,
          timeoutId: a,
          trackTimeoutWithResolutionTime: function () {
            var e = window.performance.now() - s;
            l < e && w(c, t, e);
          }
        }),
        j.bind(null, { id: o, timeoutId: a })
      );
    }
    function O(e) {
      e.path && (e.message = '"' + e.path + '" ' + e.message);
      var t = new Error(e.message);
      return (t.name = e.name), (t.stack = e.stack), t;
    }
    function j(e, t) {
      if (
        (clearTimeout(e.timeoutId),
        delete m[e.id],
        e.trackTimeoutWithResolutionTime && e.trackTimeoutWithResolutionTime(),
        t instanceof Error)
      )
        throw t;
      return t;
    }
    function M(e, t) {
      if (
        ((r = t), (n = e) && n._origin === r.origin && n._source === r.source)
      ) {
        var n,
          r,
          i = t.data;
        if (i) {
          if ('string' == typeof i)
            try {
              i = JSON.parse(t.data);
            } catch (e) {
              return e;
            }
          var o = (function (e, t) {
              var n = e;
              if (t && t !== e._instanceGuid && !(n = e._instanceClients[t]))
                throw Error(
                  '[ZAF SDK] Could not find client for instance ' + t
                );
              return n;
            })(e, i.instanceGuid),
            a = void 0;
          if (i.id && (a = m[i.id]))
            !(function (e, t) {
              if (t.error) {
                var n = t.error.name ? O(t.error) : t.error;
                e.reject(n);
              } else e.resolve(t.result);
            })(a, i);
          else if (p.test(i.key)) {
            var s = i.key.replace(p, ''),
              u = { appGuid: e._appGuid };
            if (i.needsReply)
              return (function (n, e, r) {
                if (!n._repliesPending[e])
                  return (
                    (r.key = 'iframe.reply:' + e),
                    (n._repliesPending[e] = !0),
                    (0, c.when)(n._messageHandlers[e])
                      .then(k.bind(null, n, r))
                      .catch(function (e) {
                        var t = e instanceof Error ? e.message : e;
                        (r.error = { msg: t }), k(n, r);
                      })
                      .then(function () {
                        delete n._repliesPending[e];
                      })
                  );
              })(o, s, u);
            !(function (e, t, n) {
              if (!e._messageHandlers[t]) return;
              e._messageHandlers[t].forEach(function (e) {
                e(n);
              });
            })(o, s, i.message);
          }
        }
      }
    }
    function S(e, t) {
      if (!('string' == typeof e)) return t;
      var n = t.errors && t.errors[e];
      if (n) throw O(n);
      return t;
    }
    window.Promise = f;
    var I = (function () {
      function a(e) {
        var t,
          n,
          r,
          i = this;
        if (
          ((function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, a),
          (this._parent = e.parent),
          (this._origin = e.origin || (this._parent && this._parent._origin)),
          (this._source =
            e.source ||
            (this._parent && this._parent._source) ||
            window.parent),
          (this._appGuid =
            e.appGuid || (this._parent && this._parent._appGuid)),
          (this._instanceGuid = e.instanceGuid || this._appGuid),
          (this._messageHandlers = {}),
          (this._repliesPending = {}),
          (this._instanceClients = {}),
          (this._metadata = null),
          (this._context = e.context || null),
          (this.ready = !1),
          !(function (e) {
            if (e)
              for (
                var t = [
                    /^https?:\/\/127.0.0.1(:\d+)?$/,
                    /^https?:\/\/localhost(:\d+)?$/,
                    /^https:\/\/.+\.zendesk\.com$/,
                    /^https:\/\/.+\.zd-staging\.com$/,
                    /^https:\/\/.+\.zd-dev\.com$/,
                    /^https:\/\/.+\.zd-master\.com$/,
                    /^https:\/\/.+\.zendesk-staging\.com$/,
                    /^https?:\/\/.+\.zopim\.com(:\d+)?$/,
                    /^https:\/\/dashboard\.zopim\.org$/,
                    /^https:\/\/.+\.futuresimple\.com$/,
                    /^https:\/\/.+\.cloudhatchery\.com$/,
                    /^https:\/\/.+\.idealwith\.com$/,
                    /^https:\/\/.+\.ourtesco\.com$/
                  ],
                  n = 0;
                n < t.length;
                n++
              )
                if (t[n].test(e)) return !0;
            return !1;
          })(this._origin))
        ) {
          var o = new URL(this._origin).hostname;
          this.postMessage('__track__', {
            event_name: 'invalid_sdk_origin',
            event_type: 'increment',
            data: 1,
            tags: ['origin:' + o]
          }),
            (function () {
              document.body = document.createElement('body');
              var e = document.head;
              e && e.remove();
            })(),
            (t = 'Invalid domain ' + this._origin),
            (n = document.createElement('h3')),
            (r = document.createTextNode(t)),
            n.appendChild(r),
            document.body.appendChild(n);
        }
        if (
          (this.on(
            'app.registered',
            function (e) {
              (i.ready = !0),
                (i._metadata = e.metadata),
                (i._context = e.context);
            },
            this
          ),
          this.on(
            'context.updated',
            function (e) {
              i._context = e;
            },
            this
          ),
          this._parent)
        )
          return (this.ready = this._parent.ready), this;
        new u.default(this).setup(),
          window.addEventListener('message', M.bind(null, this)),
          this.postMessage('iframe.handshake', { version: s.default });
      }
      return (
        i(a, [
          {
            key: 'postMessage',
            value: function (e, t) {
              k(
                this,
                JSON.stringify({
                  key: e,
                  message: t,
                  appGuid: this._appGuid,
                  instanceGuid: this._instanceGuid
                }),
                'iframe.handshake' === e
              );
            }
          },
          {
            key: 'on',
            value: function (e, t, n) {
              'function' == typeof t &&
                ((t = n ? t.bind(n) : t),
                (this._messageHandlers[e] = this._messageHandlers[e] || []),
                this._messageHandlers[e].push(t),
                'app.registered' !== e &&
                  this.postMessage('iframe.on:' + e, {
                    subscriberCount: this._messageHandlers[e].length
                  }));
            }
          },
          {
            key: 'off',
            value: function (e, t) {
              if (!this._messageHandlers[e]) return !1;
              var n = this._messageHandlers[e].indexOf(t);
              return (
                this.has(e, t) && this._messageHandlers[e].splice(n, 1),
                this.postMessage('iframe.off:' + e, {
                  subscriberCount: this._messageHandlers[e].length
                }),
                t
              );
            }
          },
          {
            key: 'has',
            value: function (e, t) {
              return (
                !!this._messageHandlers[e] &&
                -1 !== this._messageHandlers[e].indexOf(t)
              );
            }
          },
          {
            key: 'trigger',
            value: function (e, t) {
              this.postMessage('iframe.trigger:' + e, t);
            }
          },
          {
            key: 'request',
            value: function (e) {
              var r = this;
              if (this._parent) return this._parent.request(e);
              var i = 'request:' + T('request');
              return new f(function (t, n) {
                'string' == typeof e && (e = { url: e }),
                  r.on(i + '.done', function (e) {
                    t.apply(r, e.responseArgs);
                  }),
                  r.on(i + '.fail', function (e) {
                    n.apply(r, e.responseArgs);
                  }),
                  r.postMessage(i, e);
              });
            }
          },
          {
            key: 'instance',
            value: function (e) {
              if (!e || 'string' != typeof e)
                throw new Error(
                  'The instance method expects an `instanceGuid` string.'
                );
              if (e === this._instanceGuid) return this;
              if (this._parent) return this._parent.instance(e);
              var t = this._instanceClients[e];
              return (
                t ||
                  ((t = new a({ parent: this, instanceGuid: e })),
                  (this._instanceClients[e] = t)),
                t
              );
            }
          },
          {
            key: 'metadata',
            value: function () {
              var t = this;
              return this._parent
                ? this._parent.metadata()
                : new f(function (e) {
                    t._metadata
                      ? e(t._metadata)
                      : t.on('app.registered', function () {
                          e(t._metadata);
                        });
                  });
            }
          },
          {
            key: 'context',
            value: function () {
              var n = this;
              if (this._context) return f.resolve(this._context);
              if (this._instanceGuid && this._instanceGuid !== this._appGuid) {
                var t = 'instances.' + this._instanceGuid;
                return this.get(t).then(function (e) {
                  return (n._context = e[t]), n._context;
                });
              }
              return new f(function (t) {
                n.on('app.registered', function (e) {
                  t(e.context);
                });
              });
            }
          },
          {
            key: 'get',
            value: function (e) {
              var t = Array.isArray(e) ? e : [e];
              if (
                1 < arguments.length ||
                t.some(function (e) {
                  return !(0, c.isString)(e);
                })
              )
                throw new Error(
                  'The get method accepts a string or array of strings.'
                );
              return E.call(this, 'get', t).then(S.bind(null, e));
            }
          },
          {
            key: 'set',
            value: function (e, t) {
              var n = e;
              if ('string' == typeof e) {
                if (1 === arguments.length)
                  throw new Error('The setter requires a value');
                (n = {})[e] = t;
              }
              if (!(0, c.isObject)(n) || Array.isArray(n))
                throw new Error(
                  'The set method accepts a key and value pair, or an object of key and value pairs.'
                );
              return E.call(this, 'set', n).then(S.bind(null, e));
            }
          },
          {
            key: 'invoke',
            value: function (n) {
              var e = {};
              if ('string' == typeof n)
                e[n] = Array.prototype.slice.call(arguments, 1);
              else {
                if ('object' !== (void 0 === n ? 'undefined' : r(n)))
                  throw new Error(
                    'Invoke supports string arguments or an object with array of strings.'
                  );
                Object.keys(n).forEach(function (e) {
                  var t = n[e];
                  if (
                    !Array.isArray(t) ||
                    t.some(function (e) {
                      return !(0, c.isString)(e);
                    })
                  )
                    throw new Error(
                      'Invoke supports string arguments or an object with array of strings.'
                    );
                }),
                  (e = n);
              }
              return E.call(this, 'invoke', e).then(S.bind(null, n));
            }
          }
        ]),
        a
      );
    })();
    t.default = I;
  },
  function (e, t) {
    e.exports = '2.0.33';
  },
  function (e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = (function () {
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      return function (e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e;
      };
    })();
    var i = (function () {
      function t(e) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        })(this, t),
          (this.startTime = Date.now()),
          (this.client = e),
          (this.MIN_HOVER_TIME = 200);
      }
      return (
        r(t, [
          {
            key: 'handleMouseEnter',
            value: function () {
              this.startTime = Date.now();
            }
          },
          {
            key: 'handleMouseLeave',
            value: function () {
              var e = Date.now() - this.startTime;
              e >= this.MIN_HOVER_TIME &&
                this.client.invoke('track', { type: 'hover', value: e });
            }
          },
          {
            key: 'handleClick',
            value: function () {
              this.client.invoke('track', { type: 'click' });
            }
          },
          {
            key: 'setup',
            value: function () {
              var e = document.querySelector('html');
              e.addEventListener('click', this.handleClick.bind(this)),
                e.addEventListener(
                  'mouseleave',
                  this.handleMouseLeave.bind(this)
                ),
                e.addEventListener(
                  'mouseenter',
                  this.handleMouseEnter.bind(this)
                );
            }
          }
        ]),
        t
      );
    })();
    t.default = i;
  }
]).default;
