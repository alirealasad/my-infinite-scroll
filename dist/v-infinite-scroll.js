(function (t, e)
{
	"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.VInfiniteScroll = e() : t.VInfiniteScroll = e()
})(this, function ()
{
	return function (t)
	{
		function e(n)
		{
			if (o[n]) return o[n].exports;
			var r = o[n] = {
				i: n,
				l: !1,
				exports:
				{}
			};
			return t[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports
		}
		var o = {};
		return e.m = t, e.c = o, e.i = function (t)
		{
			return t
		}, e.d = function (t, o, n)
		{
			e.o(t, o) || Object.defineProperty(t, o,
			{
				configurable: !1,
				enumerable: !0,
				get: n
			})
		}, e.n = function (t)
		{
			var o = t && t.__esModule ? function ()
			{
				return t.default
			} : function ()
			{
				return t
			};
			return e.d(o, "a", o), o
		}, e.o = function (t, e)
		{
			return Object.prototype.hasOwnProperty.call(t, e)
		}, e.p = ".", e(e.s = 6)
	}([function (t, e, o)
	{
		var n = o(3);
		n.install = function (t)
		{
			return t.component(n.name, n)
		}, n.version = "1.0.3", t.exports = n
	}, function (t, e, o)
	{
		"use strict";
		Object.defineProperty(e, "__esModule",
		{
			value: !0
		}), e.default = {
			name: "v-infinite-scroll",
			props:
			{
				loading:
				{
					type: Boolean
				},
				offset:
				{
					type: Number,
					default: 0
				},
				onTopScrollsToBottom:
				{
					type: Boolean,
					default: !0
				}
			},
			data: function ()
			{
				return {
					target: null,
					scrollPosition: 0,
					lastDirection: ""
				}
			},
			methods:
			{
				handleElementScroll: function (t)
				{
					this.target || (this.target = t.target);
					var e = t.target.scrollTop;
					e > this.scrollPosition && e + t.target.offsetHeight >= t.target.scrollHeight - this.offset ? this.emitEvents("bottom") : e < this.scrollPosition && e <= this.offset && this.emitEvents("top"), this.scrollPosition = e
				},
				emitEvents: function (t)
				{
					this.loading || (this.lastDirection = t, this.$emit(t))
				}
			},
			watch:
			{
				loading: function ()
				{
					var t = this;
					setTimeout(function ()
					{
						t.onTopScrollsToBottom && !t.loading && "top" == t.lastDirection && (t.target.scrollTop = t.target.offsetHeight - t.offset - 20)
					}, 5)
				}
			}
		}
	}, function (t, e) {}, function (t, e, o)
	{
		o(2);
		var n = o(4)(o(1), o(5), null, null);
		t.exports = n.exports
	}, function (t, e)
	{
		t.exports = function (t, e, o, n)
		{
			var r, i = t = t ||
				{},
				s = typeof t.default;
			"object" !== s && "function" !== s || (r = t, i = t.default);
			var l = "function" == typeof i ? i.options : i;
			if (e && (l.render = e.render, l.staticRenderFns = e.staticRenderFns), o && (l._scopeId = o), n)
			{
				var c = l.computed || (l.computed = {});
				Object.keys(n).forEach(function (t)
				{
					var e = n[t];
					c[t] = function ()
					{
						return e
					}
				})
			}
			return {
				esModule: r,
				exports: i,
				options: l
			}
		}
	}, function (t, e)
	{
		t.exports = {
			render: function ()
			{
				var t = this,
					e = t.$createElement;
				return (t._self._c || e)("div",
				{
					on:
					{
						scroll: t.handleElementScroll
					}
				}, [t._t("default")], 2)
			},
			staticRenderFns: []
		}
	}, function (t, e, o)
	{
		t.exports = o(0)
	}])
});
