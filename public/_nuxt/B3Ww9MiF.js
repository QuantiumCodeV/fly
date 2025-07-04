import {
    d as b,
    e as c,
    o as i,
    f as u,
    g as m,
    h as t,
    t as n,
    F as x,
    z as g,
    _,
    T as f,
    l as h,
    i as p,
    k as v,
    p as w,
} from "./C_3eNykI.js";
import { L as S } from "./Dq_4CnZL.js";
import { f as y } from "./BswbeSF2.js";
import "./BQlGjPTb.js";
const B = {
        id: "top-deals",
        class: "py-10 lg:py-16 bg-[--best-deals-section-bg-color,white] odd:bg-[--best-deals-section-odd-bg-color,#f0ece3] group",
    },
    D = { class: "container flex flex-col gap-6" },
    L = {
        class: "flex flex-col items-center gap-3 max-sm:p-5 max-sm:border rounded-lg text-center max-sm:shadow",
    },
    k = {
        class: "text-2xl md:text-3xl font-semibold text-[--best-deals-title-color,inherit]",
    },
    F = {
        class: "max-w-prose px-4 text-[--best-deals-subtitle-color,inherit]",
    },
    N = {
        class: "grid place-items-center md:grid-cols-2 xl:grid-cols-3 gap-6",
    },
    $ = ["src", "alt"],
    z = { class: "flex flex-col justify-between p-4" },
    E = { class: "flex flex-col text-white capitalize" },
    T = { class: "text-xl" },
    C = {
        class: "text-3xl font-semibold text-[--best-deals-card-subtitle-color,white]",
    },
    U = {
        class: "w-fit px-4 py-2 text-lg bg-white text-brand rounded-sm rounded-br-xl",
    },
    V = { class: "inline-flex" },
    A = { class: "text-2xl font-semibold" },
    j = b({
        __name: "BestDeals",
        props: { title: {}, subtitle: {}, items: {} },
        setup(d) {
            const r = d;
            return (l, s) => {
                const a = _,
                    o = S;
                return (
                    i(),
                    c("section", B, [
                        u(
                            o,
                            { "when-visible": "" },
                            {
                                default: m(() => [
                                    t("div", D, [
                                        t("div", L, [
                                            s[0] ||
                                                (s[0] = t(
                                                    "span",
                                                    {
                                                        class: "sm:hidden w-full h-0.5 bg-[--best-deals-accent-color,var(--color-brand-500)]",
                                                    },
                                                    null,
                                                    -1
                                                )),
                                            t("h2", k, n(r.title), 1),
                                            s[1] ||
                                                (s[1] = t(
                                                    "span",
                                                    {
                                                        class: "max-sm:hidden w-20 h-1.5 bg-[--best-deals-accent-color,var(--color-brand-500)]",
                                                    },
                                                    null,
                                                    -1
                                                )),
                                            t("div", F, n(r.subtitle), 1),
                                        ]),
                                        t("div", N, [
                                            (i(!0),
                                            c(
                                                x,
                                                null,
                                                g(
                                                    r.items,
                                                    (e) => (
                                                        i(),
                                                        c(
                                                            "div",
                                                            {
                                                                key: e.url,
                                                                class: "w-full max-w-96 group/slide pointer-events-none pointer-events-none",
                                                            },
                                                            [
                                                                u(
                                                                    a,
                                                                    {
                                                                        to: e.url,
                                                                        class: "relative grid grid-rows-[14rem_auto] isolate rounded-tl overflow-hidden",
                                                                    },
                                                                    {
                                                                        default:
                                                                            m(
                                                                                () => [
                                                                                    t(
                                                                                        "img",
                                                                                        {
                                                                                            src: e.img,
                                                                                            alt: `${e.title} ${e.destination} Deal`,
                                                                                            loading:
                                                                                                "lazy",
                                                                                            class: "absolute border-l-4 border-brand w-full row-start-1 row-span-1 h-full object-cover -z-10 bg-brand",
                                                                                        },
                                                                                        null,
                                                                                        8,
                                                                                        $
                                                                                    ),
                                                                                    t(
                                                                                        "div",
                                                                                        z,
                                                                                        [
                                                                                            t(
                                                                                                "h3",
                                                                                                E,
                                                                                                [
                                                                                                    t(
                                                                                                        "span",
                                                                                                        T,
                                                                                                        n(
                                                                                                            e.title
                                                                                                        ),
                                                                                                        1
                                                                                                    ),
                                                                                                    t(
                                                                                                        "span",
                                                                                                        C,
                                                                                                        n(
                                                                                                            e.destination
                                                                                                        ),
                                                                                                        1
                                                                                                    ),
                                                                                                ]
                                                                                            ),
                                                                                            t(
                                                                                                "div",
                                                                                                U,
                                                                                                [
                                                                                                    f(
                                                                                                        l.$slots,
                                                                                                        "default",
                                                                                                        {
                                                                                                            amount: e.amount,
                                                                                                        },
                                                                                                        () => [
                                                                                                            s[3] ||
                                                                                                                (s[3] =
                                                                                                                    h(
                                                                                                                        " From "
                                                                                                                    )),
                                                                                                            t(
                                                                                                                "span",
                                                                                                                V,
                                                                                                                [
                                                                                                                    t(
                                                                                                                        "span",
                                                                                                                        A,
                                                                                                                        n(
                                                                                                                            ("formatToUSD" in
                                                                                                                                l
                                                                                                                                ? l.formatToUSD
                                                                                                                                : p(
                                                                                                                                      y
                                                                                                                                  ))(
                                                                                                                                e.amount
                                                                                                                            )
                                                                                                                        ),
                                                                                                                        1
                                                                                                                    ),
                                                                                                                    s[2] ||
                                                                                                                        (s[2] =
                                                                                                                            t(
                                                                                                                                "span",
                                                                                                                                {
                                                                                                                                    class: "text-sm font-semibold",
                                                                                                                                },
                                                                                                                                "*USD",
                                                                                                                                -1
                                                                                                                            )),
                                                                                                                ]
                                                                                                            ),
                                                                                                        ]
                                                                                                    ),
                                                                                                ]
                                                                                            ),
                                                                                        ]
                                                                                    ),
                                                                                ]
                                                                            ),
                                                                        _: 2,
                                                                    },
                                                                    1032,
                                                                    ["to"]
                                                                ),
                                                            ]
                                                        )
                                                    )
                                                ),
                                                128
                                            )),
                                        ]),
                                    ]),
                                ]),
                                _: 3,
                            }
                        ),
                    ])
                );
            };
        },
    }),
    q = b({
        __name: "BestDeals",
        props: { items: {} },
        setup(d) {
            var s;
            const l =
                (s = d.items) == null
                    ? void 0
                    : s
                          .filter((a) => !!a.page.data)
                          .map((a) => {
                              var e;
                              const o = a.page.data.attributes;
                              return {
                                  title: `${o.cabinClass} class flight to`,
                                  destination: o.name,
                                  amount: o.price,
                                  url: o.slug,
                                  img: `${
                                      (e = o.heroBgMedium.data) == null
                                          ? void 0
                                          : e.attributes.url
                                  }`,
                              };
                          });
            return (a, o) => {
                const e = j;
                return p(l)
                    ? (i(),
                      v(
                          e,
                          {
                              key: 0,
                              title: "BEST BUSINESS CLASS DEALS",
                              subtitle:
                                  "Save up to 70% on international business class flights",
                              items: p(l),
                          },
                          null,
                          8,
                          ["items"]
                      ))
                    : w("", !0);
            };
        },
    });
export { q as default };
