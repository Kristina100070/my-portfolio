(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    163: function (t, e, n) {
      var content = n(167);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(46).default)('65c9cc40', content, !0, { sourceMap: !1 });
    },
    164: function (t, e, n) {
      var content = n(169);
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals);
      (0, n(46).default)('1b7833da', content, !0, { sourceMap: !1 });
    },
    165: function (t, e, n) {
      'use strict';
      n.r(e);
      var o = {
          data: function () {
            return {
              banners: [
                '/photo-1589987616737-50f054888459.jpg',
                '/photo-1593642632559-0c6d3fc62b89.jpg',
                '/photo-1593642533144-3d62aa4783ec.jpg',
                '/photo-1593642634402-b0eb5e2eebc9.jpg',
              ],
              swiperOption: {
                slidesPerView: 'auto',
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
                pagination: { el: '.swiper-pagination', type: 'bullets' },
                observer: !0,
                observeParents: !0,
              },
            };
          },
          mounted: function () {
            console.log('Current Swiper instance object', this.mySwiper),
              this.mySwiper.slideNext(5e3, !0);
          },
        },
        r = (n(166), n(29)),
        component = Object(r.a)(
          o,
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e(
              'div',
              {
                directives: [
                  {
                    name: 'swiper',
                    rawName: 'v-swiper:mySwiper',
                    value: this.swiperOption,
                    expression: 'swiperOption',
                    arg: 'mySwiper',
                  },
                ],
              },
              [
                e(
                  'div',
                  { staticClass: 'swiper-wrapper' },
                  this._l(this.banners, function (t) {
                    return e('div', { key: t, staticClass: 'swiper-slide' }, [
                      e('img', {
                        staticClass: 'swiper__image',
                        attrs: { src: t },
                      }),
                    ]);
                  }),
                  0
                ),
                this._v(' '),
                e('div', { staticClass: 'swiper-button-prev' }),
                this._v(' '),
                e('div', { staticClass: 'swiper-pagination' }),
                this._v(' '),
                e('div', { staticClass: 'swiper-button-next' }),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    166: function (t, e, n) {
      'use strict';
      var o = n(163);
      n.n(o).a;
    },
    167: function (t, e, n) {
      (e = n(45)(!1)).push([
        t.i,
        '.swiper__image{width:100%;height:100vh;-o-object-fit:cover;object-fit:cover}.swiper-button-next,.swiper-button-prev{color:#111313;opacity:.7}.swiper-button-next:hover{opacity:1}.swiper-pagination-bullet-active{background-color:#111313}',
        '',
      ]),
        (t.exports = e);
    },
    168: function (t, e, n) {
      'use strict';
      var o = n(164);
      n.n(o).a;
    },
    169: function (t, e, n) {
      (e = n(45)(!1)).push([
        t.i,
        '.container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}',
        '',
      ]),
        (t.exports = e);
    },
    170: function (t, e, n) {
      'use strict';
      n.r(e);
      var o = { components: { slider: n(165).default } },
        r = (n(168), n(29)),
        component = Object(r.a)(
          o,
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e('div', [e('slider')], 1);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
      installComponents(component, { Slider: n(165).default });
    },
  },
]);
