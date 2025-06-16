import {
    d as t2,
    m as n2,
    r as h2,
    n as y2,
    e as H,
    o as b,
    h as a,
    k as G,
    f as j,
    F as z,
    p as K,
    l as A,
    t as y,
    i as _,
    q as r2,
    v as V2,
    s as Q,
    g as e2,
    x as L2,
    y as s2,
    z as _2,
    A as v2,
    B as g2,
    C as H2,
    b as M2,
    D as X,
    E as $2,
    G as D2,
    H as S2,
    I as Z2,
    J as k2,
    K as T2,
    w as o2,
    c as i2,
    L as q2,
    M as A2,
    a as j2,
    u as E2,
    N as R2,
    O as X2,
} from "./C_3eNykI.js";
import { _ as B2 } from "./DkZAiW9e.js";
import { _ as z2 } from "./B9jJcJJq.js";
import { _ as O2 } from "./OcOuVI0m.js";
import { f as w2 } from "./BswbeSF2.js";
import { c as a2 } from "./ZnXI8uO6.js";
import { s as F2 } from "./x_rD_Ya3.js";
import { L as b2 } from "./Dq_4CnZL.js";
import { _ as U2 } from "./QVhRR_wZ.js";
import { _ as N2 } from "./D68TvIX9.js";
import { u as I2 } from "./CDl_TvWF.js";
import "./C51DBZUF.js";
import "./1FZX-vAj.js";
import "./A-2u7pNL.js";
import "./CQ05dDMJ.js";
import "./H91qDMJ2.js";
import "./Bg2F5n5H.js";
import "./BQlGjPTb.js";
const P2 =
        "" + new URL("background-results.CeQzoymW.png", import.meta.url).href,
    W2 = "" + new URL("tech-support.Cng7bjWV.webp", import.meta.url).href,
    G2 = { class: "relative min-h-svh flex items-center justify-center py-4" },
    K2 = { class: "container max-sm:px-0 flex flex-col gap-3" },
    Y2 = {
        class: "grid grid-cols-2 max-lg:grid-cols-1 gap-6 p-5 bg-white rounded-xl",
    },
    J2 = { class: "flex flex-col h-fit justify-between gap-3" },
    Q2 = { class: "flex flex-col gap-2" },
    t1 = {
        class: "flex items-center justify-center p-1 bg-gray-100 rounded max-sm:flex-col",
    },
    e1 = { class: "capitalize font-semibold" },
    n1 = { class: "flex flex-col gap-1.5 p-3 border rounded divide-y" },
    r1 = { class: "" },
    s1 = { class: "text-sm font-medium" },
    o1 = { class: "flex items-center gap-2" },
    i1 = {
        class: "flex max-sm:flex-col items-center sm:gap-1 text-lg font-semibold",
    },
    a1 = { class: "text-brand" },
    l1 = {
        class: "flex max-sm:flex-col items-center sm:gap-1 text-lg font-semibold",
    },
    c1 = { class: "text-brand" },
    u1 = { key: 0, class: "pt-1.5" },
    f1 = { class: "text-sm font-medium" },
    d1 = { class: "flex items-center gap-2" },
    p1 = {
        class: "flex max-sm:flex-col items-center sm:gap-1 text-lg font-semibold",
    },
    C1 = { class: "text-brand" },
    x1 = {
        class: "flex max-sm:flex-col items-center sm:gap-1 text-lg font-semibold",
    },
    m1 = { class: "text-brand" },
    h1 = { class: "flex max-sm:flex-col justify-center items-center gap-2" },
    _1 = { class: "flex gap-2" },
    v1 = { class: "bg-red-100 text-red-500 px-2 py-1 rounded" },
    g1 = { key: 0, class: "flex flex-col gap-2" },
    w1 = ["onClick"],
    b1 = {
        key: 0,
        class: "absolute px-2 py-1 top-0 -translate-y-2/3 rounded bg-brand text-white",
    },
    y1 = { class: "flex flex-col" },
    V1 = ["id"],
    L1 = { class: "text-2xl" },
    H1 = ["for"],
    M1 = ["id", "value", "aria-describedby"],
    Y = 1e3 * 60 * 15,
    $1 = t2({
        __name: "Results",
        props: { resultsData: {}, cabinClassPrices: {}, cabinClass: {} },
        emits: ["update:cabinClass"],
        setup(h, { emit: u }) {
            const l = h,
                m = M2(),
                p = u,
                d = n2({
                    get() {
                        return l.cabinClass;
                    },
                    set(s) {
                        p("update:cabinClass", s);
                    },
                }),
                f = h2(Y),
                o = n2(() => (f.value / Y) * 100),
                t = (s) => {
                    const e = Math.floor(s / 1e3 / 60),
                        r = Math.floor((s - e * 1e3 * 60) / 1e3);
                    return `${e}:${r}`;
                };
            y2(() => {
                const s = Date.now(),
                    e = F2(() => {
                        (f.value = Math.max(0, Y - (Date.now() - s))),
                            f.value === 0 && clearInterval(e);
                    }, 200);
                return () => clearInterval(e);
            });
            const n = { business: 1, premium_economy: 2, first: 3 };
            return (s, e) => {
                const r = L2,
                    i = V2,
                    c = B2,
                    V = z2,
                    D = O2;
                return (
                    b(),
                    H("section", G2, [
                        e[8] ||
                            (e[8] = a(
                                "img",
                                {
                                    src: P2,
                                    alt: "",
                                    loading: "lazy",
                                    class: "absolute top-0 -z-[1] w-full h-full object-cover",
                                },
                                null,
                                -1
                            )),
                        a("div", K2, [
                            a("div", Y2, [
                                a("div", J2, [
                                    l.cabinClassPrices
                                        ? (b(),
                                          H(
                                              z,
                                              { key: 0 },
                                              [
                                                  a("div", Q2, [
                                                      a("div", t1, [
                                                          a(
                                                              "span",
                                                              e1,
                                                              y(
                                                                  _(a2)[
                                                                      l
                                                                          .resultsData
                                                                          .cabinClass
                                                                  ]
                                                              ) + " class,  ",
                                                              1
                                                          ),
                                                          A(
                                                              " " +
                                                                  y(
                                                                      l
                                                                          .resultsData
                                                                          .passengersCount
                                                                  ) +
                                                                  " " +
                                                                  y(
                                                                      l
                                                                          .resultsData
                                                                          .passengersCount >
                                                                          1
                                                                          ? "persons"
                                                                          : "person"
                                                                  ) +
                                                                  ", o/w, total price ",
                                                              1
                                                          ),
                                                      ]),
                                                      a("div", n1, [
                                                          a("div", r1, [
                                                              a(
                                                                  "div",
                                                                  s1,
                                                                  y(
                                                                      ("formatDate" in
                                                                          s
                                                                          ? s.formatDate
                                                                          : _(
                                                                                r2
                                                                            ))(
                                                                          l
                                                                              .resultsData
                                                                              .flight
                                                                              .date
                                                                      )
                                                                  ),
                                                                  1
                                                              ),
                                                              a("div", o1, [
                                                                  a("div", i1, [
                                                                      a(
                                                                          "span",
                                                                          a1,
                                                                          "(" +
                                                                              y(
                                                                                  l
                                                                                      .resultsData
                                                                                      .flight
                                                                                      .from
                                                                                      .iata_code
                                                                              ) +
                                                                              ")",
                                                                          1
                                                                      ),
                                                                      A(
                                                                          " " +
                                                                              y(
                                                                                  l
                                                                                      .resultsData
                                                                                      .flight
                                                                                      .from
                                                                                      .city
                                                                              ),
                                                                          1
                                                                      ),
                                                                  ]),
                                                                  e[2] ||
                                                                      (e[2] = a(
                                                                          "span",
                                                                          {
                                                                              class: "h-px grow bg-brand",
                                                                          },
                                                                          null,
                                                                          -1
                                                                      )),
                                                                  a("div", l1, [
                                                                      a(
                                                                          "span",
                                                                          c1,
                                                                          "(" +
                                                                              y(
                                                                                  l
                                                                                      .resultsData
                                                                                      .flight
                                                                                      .to
                                                                                      .iata_code
                                                                              ) +
                                                                              ")",
                                                                          1
                                                                      ),
                                                                      A(
                                                                          " " +
                                                                              y(
                                                                                  l
                                                                                      .resultsData
                                                                                      .flight
                                                                                      .to
                                                                                      .city
                                                                              ),
                                                                          1
                                                                      ),
                                                                  ]),
                                                              ]),
                                                          ]),
                                                          l.resultsData
                                                              .tripType ===
                                                          "round_trip"
                                                              ? (b(),
                                                                H("div", u1, [
                                                                    a(
                                                                        "div",
                                                                        f1,
                                                                        y(
                                                                            ("formatDate" in
                                                                                s
                                                                                ? s.formatDate
                                                                                : _(
                                                                                      r2
                                                                                  ))(
                                                                                l
                                                                                    .resultsData
                                                                                    .returnDate
                                                                            )
                                                                        ),
                                                                        1
                                                                    ),
                                                                    a(
                                                                        "div",
                                                                        d1,
                                                                        [
                                                                            a(
                                                                                "div",
                                                                                p1,
                                                                                [
                                                                                    a(
                                                                                        "span",
                                                                                        C1,
                                                                                        "(" +
                                                                                            y(
                                                                                                l
                                                                                                    .resultsData
                                                                                                    .flight
                                                                                                    .to
                                                                                                    .iata_code
                                                                                            ) +
                                                                                            ")",
                                                                                        1
                                                                                    ),
                                                                                    A(
                                                                                        " " +
                                                                                            y(
                                                                                                l
                                                                                                    .resultsData
                                                                                                    .flight
                                                                                                    .to
                                                                                                    .city
                                                                                            ),
                                                                                        1
                                                                                    ),
                                                                                ]
                                                                            ),
                                                                            e[3] ||
                                                                                (e[3] =
                                                                                    a(
                                                                                        "span",
                                                                                        {
                                                                                            class: "h-px grow bg-brand",
                                                                                        },
                                                                                        null,
                                                                                        -1
                                                                                    )),
                                                                            a(
                                                                                "div",
                                                                                x1,
                                                                                [
                                                                                    a(
                                                                                        "span",
                                                                                        m1,
                                                                                        "(" +
                                                                                            y(
                                                                                                l
                                                                                                    .resultsData
                                                                                                    .flight
                                                                                                    .from
                                                                                                    .iata_code
                                                                                            ) +
                                                                                            ")",
                                                                                        1
                                                                                    ),
                                                                                    A(
                                                                                        " " +
                                                                                            y(
                                                                                                l
                                                                                                    .resultsData
                                                                                                    .flight
                                                                                                    .from
                                                                                                    .city
                                                                                            ),
                                                                                        1
                                                                                    ),
                                                                                ]
                                                                            ),
                                                                        ]
                                                                    ),
                                                                ]))
                                                              : K("", !0),
                                                      ]),
                                                  ]),
                                                  a("div", h1, [
                                                      a("div", _1, [
                                                          e[4] ||
                                                              (e[4] = a(
                                                                  "div",
                                                                  {
                                                                      class: "text-lg font-semibold whitespace-nowrap",
                                                                  },
                                                                  "Price expires in",
                                                                  -1
                                                              )),
                                                          a(
                                                              "div",
                                                              v1,
                                                              y(t(_(f))),
                                                              1
                                                          ),
                                                      ]),
                                                      j(
                                                          i,
                                                          {
                                                              modelValue: _(o),
                                                              "onUpdate:modelValue":
                                                                  e[0] ||
                                                                  (e[0] = (M) =>
                                                                      Q(o)
                                                                          ? (o.value =
                                                                                M)
                                                                          : null),
                                                              class: "relative overflow-hidden bg-red-100 w-full sm:w-[300px] h-2",
                                                          },
                                                          {
                                                              default: e2(
                                                                  () => [
                                                                      j(
                                                                          r,
                                                                          {
                                                                              class: "bg-red-500 w-full h-full transition-transform",
                                                                              style: s2(
                                                                                  `transform: translateX(-${
                                                                                      100 -
                                                                                      _(
                                                                                          o
                                                                                      )
                                                                                  }%)`
                                                                              ),
                                                                          },
                                                                          null,
                                                                          8,
                                                                          [
                                                                              "style",
                                                                          ]
                                                                      ),
                                                                  ]
                                                              ),
                                                              _: 1,
                                                          },
                                                          8,
                                                          ["modelValue"]
                                                      ),
                                                  ]),
                                                  s.cabinClassPrices
                                                      ? (b(),
                                                        H("div", g1, [
                                                            (b(!0),
                                                            H(
                                                                z,
                                                                null,
                                                                _2(
                                                                    _(a2),
                                                                    (M, v) => (
                                                                        b(),
                                                                        H(
                                                                            "div",
                                                                            {
                                                                                key: v,
                                                                                style: s2(
                                                                                    {
                                                                                        "--order":
                                                                                            n[
                                                                                                v
                                                                                            ],
                                                                                    }
                                                                                ),
                                                                                class: v2(
                                                                                    [
                                                                                        "relative flex justify-between items-start p-3 border rounded-lg cursor-pointer order-[--order]",
                                                                                        _(
                                                                                            d
                                                                                        ) ===
                                                                                        v
                                                                                            ? "border-brand"
                                                                                            : "",
                                                                                        v ===
                                                                                        "business"
                                                                                            ? "mt-4"
                                                                                            : "",
                                                                                    ]
                                                                                ),
                                                                                onClick:
                                                                                    (
                                                                                        k
                                                                                    ) =>
                                                                                        (d.value =
                                                                                            v),
                                                                            },
                                                                            [
                                                                                v ===
                                                                                "business"
                                                                                    ? (b(),
                                                                                      H(
                                                                                          "span",
                                                                                          b1,
                                                                                          "BEST DEAL"
                                                                                      ))
                                                                                    : K(
                                                                                          "",
                                                                                          !0
                                                                                      ),
                                                                                a(
                                                                                    "div",
                                                                                    y1,
                                                                                    [
                                                                                        a(
                                                                                            "div",
                                                                                            {
                                                                                                id: `cabin-class-description-${v}`,
                                                                                                class: "flex text-brand-800 font-semibold",
                                                                                            },
                                                                                            [
                                                                                                
                                                                                                a(
                                                                                                    "span",
                                                                                                    L1,
                                                                                                    y(
                                                                                                        ("formatToUSD" in
                                                                                                            s
                                                                                                            ? s.formatToUSD
                                                                                                            : _(
                                                                                                                  w2
                                                                                                              ))(
                                                                                                            s
                                                                                                                .cabinClassPrices[
                                                                                                                v
                                                                                                            ]
                                                                                                        )
                                                                                                    ),
                                                                                                    1
                                                                                                ),
                                                                                                e[5] ||
                                                                                                    (e[5] =
                                                                                                        a(
                                                                                                            "span",
                                                                                                            {
                                                                                                                class: "text-xs",
                                                                                                            },
                                                                                                            "*USD",
                                                                                                            -1
                                                                                                        )),
                                                                                            ],
                                                                                            8,
                                                                                            V1
                                                                                        ),
                                                                                        a(
                                                                                            "label",
                                                                                            {
                                                                                                for: `cabin-class-${v}`,
                                                                                                class: "uppercase text-sm font-semibold",
                                                                                            },
                                                                                            y(
                                                                                                M
                                                                                            ),
                                                                                            9,
                                                                                            H1
                                                                                        ),
                                                                                    ]
                                                                                ),
                                                                                g2(
                                                                                    a(
                                                                                        "input",
                                                                                        {
                                                                                            id: `cabin-class-${v}`,
                                                                                            "onUpdate:modelValue":
                                                                                                e[1] ||
                                                                                                (e[1] =
                                                                                                    (
                                                                                                        k
                                                                                                    ) =>
                                                                                                        Q(
                                                                                                            d
                                                                                                        )
                                                                                                            ? (d.value =
                                                                                                                  k)
                                                                                                            : null),
                                                                                            value: v,
                                                                                            type: "radio",
                                                                                            name: "cabin-class",
                                                                                            "aria-describedby": `cabin-class-description-${v}`,
                                                                                            class: "text-2xl",
                                                                                        },
                                                                                        null,
                                                                                        8,
                                                                                        M1
                                                                                    ),
                                                                                    [
                                                                                        [
                                                                                            H2,
                                                                                            _(
                                                                                                d
                                                                                            ),
                                                                                        ],
                                                                                    ]
                                                                                ),
                                                                            ],
                                                                            14,
                                                                            w1
                                                                        )
                                                                    )
                                                                ),
                                                                128
                                                            )),
                                                        ]))
                                                      : K("", !0),
                                              ],
                                              64
                                          ))
                                        : (b(),
                                          H(
                                              z,
                                              { key: 1 },
                                              [
                                                  e[6] ||
                                                      (e[6] = a(
                                                          "img",
                                                          {
                                                              src: W2,
                                                              alt: "",
                                                              loading: "lazy",
                                                              class: "self-center w-full object-contain max-w-96",
                                                          },
                                                          null,
                                                          -1
                                                      )),
                                                  e[7] ||
                                                      (e[7] = a(
                                                          "div",
                                                          {
                                                              class: "flex flex-col gap-3",
                                                          },
                                                          [
                                                              a(
                                                                  "div",
                                                                  {
                                                                      class: "text-3xl font-semibold text-center",
                                                                  },
                                                                  "Oops... Unfortunately, we didn't find anything"
                                                              ),
                                                              a(
                                                                  "div",
                                                                  {
                                                                      class: "text-lg text-center leading-5",
                                                                  },
                                                                  [
                                                                      A(
                                                                          " Please fill out the request form. "
                                                                      ),
                                                                      a("br"),
                                                                      A(
                                                                          " Our travel expert will reach out with the best deals. "
                                                                      ),
                                                                  ]
                                                              ),
                                                          ],
                                                          -1
                                                      )),
                                              ],
                                              64
                                          )),
                                ]),
                                j(
                                    c,
                                    {
                                        "default-tab": s.resultsData.tripType,
                                        class: "self-start",
                                    },
                                    null,
                                    8,
                                    ["default-tab"]
                                ),
                            ]),
                            _(m).public.expediaLink
                                ? (b(),
                                  G(V, { key: 0, class: "max-sm:hidden" }))
                                : (b(), G(D, { key: 1 })),
                        ]),
                    ])
                );
            };
        },
    }),
    D1 = {},
    S1 = {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        viewBox: "0 0 33 32",
        fill: "none",
    };
function Z1(h, u) {
    return (
        b(),
        H(
            "svg",
            S1,
            u[0] ||
                (u[0] = [
                    a(
                        "path",
                        {
                            d: "M11.8984 24C11.4859 24 11.1329 23.8509 10.8394 23.5528C10.5459 23.2546 10.3989 22.8957 10.3984 22.4762V14.8571C10.3984 14.4381 10.5454 14.0795 10.8394 13.7813C11.1334 13.4832 11.4864 13.3338 11.8984 13.3333H12.6484V11.8095C12.6484 10.7556 13.0142 9.85727 13.7457 9.11467C14.4772 8.37206 15.3614 8.00051 16.3984 8C17.4354 7.99949 18.3199 8.37105 19.0519 9.11467C19.7839 9.85829 20.1494 10.7566 20.1484 11.8095V13.3333H20.8984C21.3109 13.3333 21.6642 13.4827 21.9582 13.7813C22.2522 14.08 22.3989 14.4386 22.3984 14.8571V22.4762C22.3984 22.8952 22.2517 23.2541 21.9582 23.5528C21.6647 23.8514 21.3114 24.0005 20.8984 24H11.8984ZM16.3984 20.1905C16.8109 20.1905 17.1642 20.0414 17.4582 19.7432C17.7522 19.4451 17.8989 19.0862 17.8984 18.6667C17.8979 18.2471 17.7512 17.8885 17.4582 17.5909C17.1652 17.2932 16.8119 17.1439 16.3984 17.1429C15.9849 17.1418 15.6319 17.2912 15.3394 17.5909C15.0469 17.8905 14.8999 18.2491 14.8984 18.6667C14.8969 19.0842 15.0439 19.443 15.3394 19.7432C15.6349 20.0434 15.9879 20.1925 16.3984 20.1905ZM14.1484 13.3333H18.6484V11.8095C18.6484 11.1746 18.4297 10.6349 17.9922 10.1905C17.5547 9.74603 17.0234 9.52381 16.3984 9.52381C15.7734 9.52381 15.2422 9.74603 14.8047 10.1905C14.3672 10.6349 14.1484 11.1746 14.1484 11.8095V13.3333Z",
                            fill: "currentColor",
                        },
                        null,
                        -1
                    ),
                    a(
                        "mask",
                        { id: "path-2-inside-1_5442_5610", fill: "white" },
                        [
                            a("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M1.73047 6C1.73047 4.89543 2.6259 4 3.73047 4H29.0638C30.1684 4 31.0638 4.89543 31.0638 6V12.0001H31.0626C29.2626 12.0001 27.8034 13.7909 27.8034 16.0001C27.8034 18.2092 29.2626 20.0001 31.0626 20.0001H31.0638V26C31.0638 27.1046 30.1684 28 29.0638 28H3.73047C2.6259 28 1.73047 27.1046 1.73047 26V20.0001C3.52998 19.9993 4.98857 18.2087 4.98857 16.0001C4.98857 13.7914 3.52998 12.0008 1.73047 12.0001V6Z",
                            }),
                        ],
                        -1
                    ),
                    a(
                        "path",
                        {
                            d: "M31.0638 12.0001V14.2001H33.2638V12.0001H31.0638ZM31.0638 20.0001H33.2638V17.8001H31.0638V20.0001ZM1.73047 20.0001L1.72953 17.8001L-0.469531 17.801V20.0001H1.73047ZM1.73047 12.0001H-0.469531V14.1991L1.72953 14.2001L1.73047 12.0001ZM3.73047 1.8C1.41087 1.8 -0.469531 3.6804 -0.469531 6H3.93047C3.93047 6.11046 3.84092 6.2 3.73047 6.2V1.8ZM29.0638 1.8H3.73047V6.2H29.0638V1.8ZM33.2638 6C33.2638 3.6804 31.3834 1.8 29.0638 1.8V6.2C28.9533 6.2 28.8638 6.11046 28.8638 6H33.2638ZM33.2638 12.0001V6H28.8638V12.0001H33.2638ZM31.0626 14.2001H31.0638V9.80007H31.0626V14.2001ZM30.0034 16.0001C30.0034 15.3704 30.2129 14.8689 30.4635 14.5613C30.7105 14.2582 30.9343 14.2001 31.0626 14.2001V9.80007C27.6479 9.80007 25.6034 13.0184 25.6034 16.0001H30.0034ZM31.0626 17.8001C30.9343 17.8001 30.7105 17.742 30.4635 17.4388C30.2129 17.1312 30.0034 16.6298 30.0034 16.0001H25.6034C25.6034 18.9817 27.6479 22.2001 31.0626 22.2001V17.8001ZM31.0638 17.8001H31.0626V22.2001H31.0638V17.8001ZM33.2638 26V20.0001H28.8638V26H33.2638ZM29.0638 30.2C31.3834 30.2 33.2638 28.3196 33.2638 26H28.8638C28.8638 25.8895 28.9533 25.8 29.0638 25.8V30.2ZM3.73047 30.2H29.0638V25.8H3.73047V30.2ZM-0.469531 26C-0.469531 28.3196 1.41088 30.2 3.73047 30.2V25.8C3.84093 25.8 3.93047 25.8895 3.93047 26H-0.469531ZM-0.469531 20.0001V26H3.93047V20.0001H-0.469531ZM2.78857 16.0001C2.78857 16.6296 2.57918 17.131 2.32859 17.4386C2.08162 17.7418 1.85786 17.8 1.72953 17.8001L1.73141 22.2001C5.14497 22.1986 7.18857 18.9812 7.18857 16.0001H2.78857ZM1.72953 14.2001C1.85786 14.2001 2.08162 14.2583 2.3286 14.5615C2.57918 14.8692 2.78857 15.3705 2.78857 16.0001H7.18857C7.18857 13.019 5.14497 9.80152 1.73141 9.80007L1.72953 14.2001ZM-0.469531 6V12.0001H3.93047V6H-0.469531Z",
                            fill: "#1E212D",
                            mask: "url(#path-2-inside-1_5442_5610)",
                        },
                        null,
                        -1
                    ),
                ])
        )
    );
}
const k1 = X(D1, [["render", Z1]]),
    T1 = {},
    q1 = {
        width: "33",
        height: "32",
        viewBox: "0 0 33 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
    };
function A1(h, u) {
    return (
        b(),
        H(
            "svg",
            q1,
            u[0] ||
                (u[0] = [
                    a(
                        "path",
                        {
                            d: "M14.2145 4.88661C14.4646 4.60727 14.7708 4.38382 15.1131 4.23083C15.4554 4.07785 15.8262 3.99878 16.2011 3.99878C16.5761 3.99878 16.9468 4.07785 17.2891 4.23083C17.6315 4.38382 17.9377 4.60727 18.1878 4.88661L19.1211 5.92927C19.3879 6.22727 19.7182 6.46145 20.0877 6.61447C20.4573 6.76749 20.8565 6.83544 21.2558 6.81327L22.6558 6.73594C23.0303 6.7153 23.4049 6.77387 23.7551 6.90784C24.1054 7.0418 24.4235 7.24815 24.6886 7.51339C24.9538 7.77864 25.16 8.09683 25.2938 8.44718C25.4276 8.79753 25.4859 9.17216 25.4651 9.54661L25.3878 10.9453C25.3658 11.3444 25.4339 11.7433 25.5869 12.1126C25.7399 12.4819 25.974 12.812 26.2718 13.0786L27.3145 14.0119C27.594 14.2621 27.8177 14.5684 27.9708 14.9108C28.1239 15.2533 28.203 15.6242 28.203 15.9993C28.203 16.3744 28.1239 16.7453 27.9708 17.0877C27.8177 17.4302 27.594 17.7365 27.3145 17.9866L26.2718 18.9199C25.9738 19.1867 25.7396 19.517 25.5866 19.8866C25.4336 20.2561 25.3656 20.6553 25.3878 21.0546L25.4651 22.4546C25.4858 22.8291 25.4272 23.2037 25.2932 23.554C25.1593 23.9042 24.9529 24.2223 24.6877 24.4875C24.4224 24.7526 24.1042 24.9588 23.7539 25.0926C23.4035 25.2264 23.0289 25.2848 22.6545 25.2639L21.2558 25.1866C20.8567 25.1646 20.4577 25.2327 20.0885 25.3857C19.7192 25.5387 19.3891 25.7728 19.1225 26.0706L18.1891 27.1133C17.939 27.3928 17.6327 27.6165 17.2903 27.7696C16.9478 27.9227 16.5769 28.0018 16.2018 28.0018C15.8267 28.0018 15.4558 27.9227 15.1133 27.7696C14.7709 27.6165 14.4646 27.3928 14.2145 27.1133L13.2811 26.0706C13.0144 25.7726 12.684 25.5384 12.3145 25.3854C11.945 25.2324 11.5458 25.1644 11.1465 25.1866L9.74646 25.2639C9.372 25.2846 8.9974 25.226 8.64711 25.092C8.29683 24.9581 7.97874 24.7517 7.71361 24.4865C7.44849 24.2212 7.2423 23.9031 7.1085 23.5527C6.9747 23.2024 6.91631 22.8277 6.93713 22.4533L7.01446 21.0546C7.03642 20.6555 6.96837 20.2566 6.81536 19.8873C6.66234 19.518 6.42827 19.1879 6.13046 18.9213L5.08779 17.9879C4.80823 17.7378 4.58459 17.4315 4.43148 17.0891C4.27836 16.7466 4.19922 16.3757 4.19922 16.0006C4.19922 15.6255 4.27836 15.2546 4.43148 14.9121C4.58459 14.5697 4.80823 14.2634 5.08779 14.0133L6.13046 13.0799C6.42845 12.8132 6.66263 12.4828 6.81565 12.1133C6.96867 11.7438 7.03662 11.3446 7.01446 10.9453L6.93713 9.54527C6.91668 9.17092 6.9754 8.79647 7.10945 8.44634C7.2435 8.09622 7.44987 7.77829 7.7151 7.51332C7.98033 7.24834 8.29845 7.04227 8.6487 6.90855C8.99895 6.77483 9.37346 6.71647 9.74779 6.73727L11.1465 6.81461C11.5456 6.83657 11.9445 6.76852 12.3138 6.61551C12.683 6.46249 13.0132 6.22842 13.2798 5.93061L14.2145 4.88661Z",
                            stroke: "#1E212D",
                            "stroke-width": "2",
                        },
                        null,
                        -1
                    ),
                    a(
                        "path",
                        {
                            d: "M12.8672 12.6665H12.8805V12.6798H12.8672V12.6665ZM19.5339 19.3332H19.5472V19.3465H19.5339V19.3332Z",
                            stroke: "currentColor",
                            "stroke-width": "3",
                            "stroke-linejoin": "round",
                        },
                        null,
                        -1
                    ),
                    a(
                        "path",
                        {
                            d: "M20.1992 12L12.1992 20",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                        },
                        null,
                        -1
                    ),
                ])
        )
    );
}
const j1 = X(T1, [["render", A1]]),
    E1 = {},
    R1 = {
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
    };
function X1(h, u) {
    return (
        b(),
        H(
            "svg",
            R1,
            u[0] ||
                (u[0] = [
                    a(
                        "path",
                        {
                            d: "M29.328 8.33325C29.328 7.5376 29.0119 6.77454 28.4493 6.21193C27.8867 5.64932 27.1236 5.33325 26.328 5.33325H5.66797C4.87232 5.33325 4.10926 5.64932 3.54665 6.21193C2.98404 6.77454 2.66797 7.5376 2.66797 8.33325V23.6733C2.66797 24.4689 2.98404 25.232 3.54665 25.7946C4.10926 26.3572 4.87232 26.6733 5.66797 26.6733H18.6786C18.7266 26.1039 18.9373 25.5439 19.316 25.0653L20.3826 23.7186C20.6552 23.3753 21.0013 23.0974 21.3954 22.9054C21.7895 22.7134 22.2216 22.6122 22.66 22.6093V20.9999L22.6533 20.8093C22.6054 20.2254 22.3397 19.6809 21.9089 19.284C21.4781 18.887 20.9138 18.6666 20.328 18.6666H11.668L11.476 18.6746C10.8924 18.7228 10.3482 18.9886 9.95154 19.4194C9.55486 19.8502 9.33466 20.4143 9.33463 20.9999L9.3333 24.6719H5.66797C5.40275 24.6719 5.1484 24.5666 4.96086 24.379C4.77333 24.1915 4.66797 23.9371 4.66797 23.6719V8.33325C4.66797 8.06804 4.77333 7.81368 4.96086 7.62614C5.1484 7.43861 5.40275 7.33325 5.66797 7.33325H26.328C26.5932 7.33325 26.8475 7.43861 27.0351 7.62614C27.2226 7.81368 27.328 8.06804 27.328 8.33325V13.3639C27.7746 13.2973 28.244 13.3306 28.7013 13.4813L29.2746 13.6679L29.328 13.6866V8.33325ZM20.0013 13.3333C20.0013 12.2724 19.5799 11.255 18.8297 10.5048C18.0796 9.75468 17.0622 9.33325 16.0013 9.33325C14.9404 9.33325 13.923 9.75468 13.1729 10.5048C12.4227 11.255 12.0013 12.2724 12.0013 13.3333C12.0013 14.3941 12.4227 15.4115 13.1729 16.1617C13.923 16.9118 14.9404 17.3333 16.0013 17.3333C17.0622 17.3333 18.0796 16.9118 18.8297 16.1617C19.5799 15.4115 20.0013 14.3941 20.0013 13.3333ZM25.5906 17.3266L26.2253 15.7199C26.548 14.9013 27.452 14.4759 28.2893 14.7493L28.864 14.9373C29.8293 15.2533 30.632 16.0119 30.664 17.0293C30.7973 21.1759 27.3626 27.1399 23.7133 29.1026C22.816 29.5853 21.756 29.2666 21 28.5813L20.5506 28.1746C20.2365 27.8902 20.0421 27.497 20.007 27.0746C19.9718 26.6523 20.0985 26.2324 20.3613 25.8999L21.428 24.5533C21.8146 24.0639 22.4506 23.8466 23.0546 23.9933L24.7773 24.4106C26.2475 23.4373 27.036 22.0688 27.1426 20.3053L25.92 19.0199C25.709 18.7986 25.5659 18.5215 25.5075 18.2214C25.4492 17.9213 25.478 17.6108 25.5906 17.3266Z",
                            fill: "currentColor",
                        },
                        null,
                        -1
                    ),
                ])
        )
    );
}
const B1 = X(E1, [["render", X1]]),
    z1 = {},
    O1 = {
        width: "33",
        height: "32",
        viewBox: "0 0 33 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
    };
function F1(h, u) {
    return (
        b(),
        H(
            "svg",
            O1,
            u[0] ||
                (u[0] = [
                    a(
                        "path",
                        {
                            d: "M18.1289 28H8.79557C8.08833 28 7.41005 27.719 6.90995 27.219C6.40986 26.7189 6.12891 26.0406 6.12891 25.3333V9.33333C6.12891 8.62609 6.40986 7.94781 6.90995 7.44772C7.41005 6.94762 8.08833 6.66667 8.79557 6.66667H24.7956C25.5028 6.66667 26.1811 6.94762 26.6812 7.44772C27.1813 7.94781 27.4622 8.62609 27.4622 9.33333V13.3333M22.1289 4V9.33333M11.4622 4V9.33333M6.12891 14.6667H22.7956",
                            stroke: "#1E212D",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                        },
                        null,
                        -1
                    ),
                    a(
                        "path",
                        {
                            d: "M28.7943 20.0001H25.4609C24.9305 20.0001 24.4218 20.2108 24.0467 20.5859C23.6717 20.9609 23.4609 21.4696 23.4609 22.0001C23.4609 22.5305 23.6717 23.0392 24.0467 23.4143C24.4218 23.7894 24.9305 24.0001 25.4609 24.0001H26.7943C27.3247 24.0001 27.8334 24.2108 28.2085 24.5859C28.5836 24.9609 28.7943 25.4696 28.7943 26.0001C28.7943 26.5305 28.5836 27.0392 28.2085 27.4143C27.8334 27.7894 27.3247 28.0001 26.7943 28.0001H23.4609M26.1276 28.0001V29.3334M26.1276 18.6667V20.0001",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                        },
                        null,
                        -1
                    ),
                ])
        )
    );
}
const U1 = X(z1, [["render", F1]]),
    N1 = {},
    I1 = {
        width: "33",
        height: "32",
        viewBox: "0 0 33 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
    };
function P1(h, u) {
    return (
        b(),
        H(
            "svg",
            I1,
            u[0] ||
                (u[0] = [
                    a(
                        "path",
                        {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M7.67187 9.01074L8.13454 13.1734L7.49987 13.2294C6.78708 13.2922 6.11618 13.5931 5.5952 14.0836C5.07422 14.5741 4.73349 15.2257 4.62787 15.9334C4.1605 19.0717 4.1605 22.2618 4.62787 25.4001C4.73349 26.1078 5.07422 26.7594 5.5952 27.2499C6.11618 27.7404 6.78708 28.0413 7.49987 28.1041L9.01187 28.2374C10.6394 28.3796 12.2697 28.4516 13.9025 28.4534C14.1359 28.4534 14.2572 28.1707 14.1079 27.9921C13.072 26.7543 12.3746 25.2692 12.0839 23.6816C11.7932 22.0939 11.9191 20.458 12.4492 18.9335C12.9794 17.4091 13.8957 16.0481 15.1087 14.9834C16.3218 13.9187 17.7902 13.1866 19.3705 12.8587C19.4849 12.8356 19.5892 12.7772 19.6688 12.6919C19.7484 12.6065 19.7994 12.4985 19.8145 12.3827L20.1879 9.01074C20.243 8.52363 20.243 8.03696 20.1879 7.55074L20.1585 7.2774C19.9875 5.74525 19.2578 4.32988 18.1088 3.30199C16.9598 2.2741 15.4722 1.70581 13.9305 1.70581C12.3889 1.70581 10.9013 2.2741 9.7523 3.30199C8.60331 4.32988 7.87354 5.74525 7.70254 7.2774L7.67187 7.55074C7.61842 8.03594 7.61842 8.52554 7.67187 9.01074ZM14.4292 3.7334C13.8705 3.66772 13.3044 3.71316 12.7634 3.8671C12.2223 4.02104 11.7171 4.28045 11.2767 4.63039C10.8362 4.98034 10.4694 5.41392 10.1972 5.90618C9.92497 6.39845 9.75279 6.93968 9.69054 7.49874L9.65987 7.77207C9.6227 8.11061 9.6227 8.4522 9.65987 8.79074L10.1292 13.0094C12.6605 12.8372 15.2006 12.8372 17.7319 13.0094L18.2012 8.79074C18.2384 8.4522 18.2384 8.11061 18.2012 7.77207L18.1705 7.49874C18.0642 6.54055 17.6365 5.64663 16.9571 4.96263C16.2777 4.27863 15.3867 3.84622 14.4292 3.7334Z",
                            fill: "#1E212D",
                        },
                        null,
                        -1
                    ),
                    a(
                        "path",
                        {
                            d: "M22.2656 20C22.2656 19.7348 22.1603 19.4804 21.9727 19.2929C21.7852 19.1054 21.5308 19 21.2656 19C21.0004 19 20.7461 19.1054 20.5585 19.2929C20.371 19.4804 20.2656 19.7348 20.2656 20V22.364C20.2656 22.684 20.419 22.984 20.6776 23.172L22.011 24.1413C22.117 24.2213 22.2379 24.2794 22.3666 24.3122C22.4953 24.3449 22.6292 24.3517 22.7606 24.3322C22.892 24.3126 23.0181 24.2671 23.1317 24.1982C23.2453 24.1294 23.344 24.0386 23.4221 23.9312C23.5002 23.8238 23.5561 23.7019 23.5866 23.5726C23.6171 23.4433 23.6215 23.3093 23.5996 23.1783C23.5777 23.0473 23.53 22.922 23.4591 22.8096C23.3883 22.6973 23.2957 22.6002 23.187 22.524L22.2656 21.8547V20Z",
                            fill: "currentColor",
                        },
                        null,
                        -1
                    ),
                    a(
                        "path",
                        {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M21.263 29.3334C23.2079 29.3334 25.0732 28.5608 26.4485 27.1855C27.8237 25.8103 28.5964 23.945 28.5964 22.0001C28.5964 20.0552 27.8237 18.1899 26.4485 16.8146C25.0732 15.4394 23.2079 14.6667 21.263 14.6667C19.3181 14.6667 17.4528 15.4394 16.0776 16.8146C14.7023 18.1899 13.9297 20.0552 13.9297 22.0001C13.9297 23.945 14.7023 25.8103 16.0776 27.1855C17.4528 28.5608 19.3181 29.3334 21.263 29.3334ZM21.263 27.3334C22.6775 27.3334 24.0341 26.7715 25.0343 25.7713C26.0345 24.7711 26.5964 23.4146 26.5964 22.0001C26.5964 20.5856 26.0345 19.229 25.0343 18.2288C24.0341 17.2287 22.6775 16.6667 21.263 16.6667C19.8485 16.6667 18.492 17.2287 17.4918 18.2288C16.4916 19.229 15.9297 20.5856 15.9297 22.0001C15.9297 23.4146 16.4916 24.7711 17.4918 25.7713C18.492 26.7715 19.8485 27.3334 21.263 27.3334Z",
                            fill: "currentColor",
                        },
                        null,
                        -1
                    ),
                ])
        )
    );
}
const W1 = X(N1, [["render", P1]]);
var O = { exports: {} },
    G1 = O.exports,
    l2;
function K1() {
    return (
        l2 ||
            ((l2 = 1),
            (function (h) {
                (function (u, l, m) {
                    function p(t) {
                        var n = this,
                            s = o();
                        (n.next = function () {
                            var e =
                                2091639 * n.s0 + n.c * 23283064365386963e-26;
                            return (
                                (n.s0 = n.s1),
                                (n.s1 = n.s2),
                                (n.s2 = e - (n.c = e | 0))
                            );
                        }),
                            (n.c = 1),
                            (n.s0 = s(" ")),
                            (n.s1 = s(" ")),
                            (n.s2 = s(" ")),
                            (n.s0 -= s(t)),
                            n.s0 < 0 && (n.s0 += 1),
                            (n.s1 -= s(t)),
                            n.s1 < 0 && (n.s1 += 1),
                            (n.s2 -= s(t)),
                            n.s2 < 0 && (n.s2 += 1),
                            (s = null);
                    }
                    function d(t, n) {
                        return (
                            (n.c = t.c),
                            (n.s0 = t.s0),
                            (n.s1 = t.s1),
                            (n.s2 = t.s2),
                            n
                        );
                    }
                    function f(t, n) {
                        var s = new p(t),
                            e = n && n.state,
                            r = s.next;
                        return (
                            (r.int32 = function () {
                                return (s.next() * 4294967296) | 0;
                            }),
                            (r.double = function () {
                                return (
                                    r() +
                                    ((r() * 2097152) | 0) *
                                        11102230246251565e-32
                                );
                            }),
                            (r.quick = r),
                            e &&
                                (typeof e == "object" && d(e, s),
                                (r.state = function () {
                                    return d(s, {});
                                })),
                            r
                        );
                    }
                    function o() {
                        var t = 4022871197,
                            n = function (s) {
                                s = String(s);
                                for (var e = 0; e < s.length; e++) {
                                    t += s.charCodeAt(e);
                                    var r = 0.02519603282416938 * t;
                                    (t = r >>> 0),
                                        (r -= t),
                                        (r *= t),
                                        (t = r >>> 0),
                                        (r -= t),
                                        (t += r * 4294967296);
                                }
                                return (t >>> 0) * 23283064365386963e-26;
                            };
                        return n;
                    }
                    l && l.exports ? (l.exports = f) : (this.alea = f);
                })(G1, h);
            })(O)),
        O.exports
    );
}
var F = { exports: {} },
    Y1 = F.exports,
    c2;
function J1() {
    return (
        c2 ||
            ((c2 = 1),
            (function (h) {
                (function (u, l, m) {
                    function p(o) {
                        var t = this,
                            n = "";
                        (t.x = 0),
                            (t.y = 0),
                            (t.z = 0),
                            (t.w = 0),
                            (t.next = function () {
                                var e = t.x ^ (t.x << 11);
                                return (
                                    (t.x = t.y),
                                    (t.y = t.z),
                                    (t.z = t.w),
                                    (t.w ^= (t.w >>> 19) ^ e ^ (e >>> 8))
                                );
                            }),
                            o === (o | 0) ? (t.x = o) : (n += o);
                        for (var s = 0; s < n.length + 64; s++)
                            (t.x ^= n.charCodeAt(s) | 0), t.next();
                    }
                    function d(o, t) {
                        return (
                            (t.x = o.x),
                            (t.y = o.y),
                            (t.z = o.z),
                            (t.w = o.w),
                            t
                        );
                    }
                    function f(o, t) {
                        var n = new p(o),
                            s = t && t.state,
                            e = function () {
                                return (n.next() >>> 0) / 4294967296;
                            };
                        return (
                            (e.double = function () {
                                do
                                    var r = n.next() >>> 11,
                                        i = (n.next() >>> 0) / 4294967296,
                                        c = (r + i) / (1 << 21);
                                while (c === 0);
                                return c;
                            }),
                            (e.int32 = n.next),
                            (e.quick = e),
                            s &&
                                (typeof s == "object" && d(s, n),
                                (e.state = function () {
                                    return d(n, {});
                                })),
                            e
                        );
                    }
                    l && l.exports ? (l.exports = f) : (this.xor128 = f);
                })(Y1, h);
            })(F)),
        F.exports
    );
}
var U = { exports: {} },
    Q1 = U.exports,
    u2;
function t0() {
    return (
        u2 ||
            ((u2 = 1),
            (function (h) {
                (function (u, l, m) {
                    function p(o) {
                        var t = this,
                            n = "";
                        (t.next = function () {
                            var e = t.x ^ (t.x >>> 2);
                            return (
                                (t.x = t.y),
                                (t.y = t.z),
                                (t.z = t.w),
                                (t.w = t.v),
                                ((t.d = (t.d + 362437) | 0) +
                                    (t.v = t.v ^ (t.v << 4) ^ (e ^ (e << 1)))) |
                                    0
                            );
                        }),
                            (t.x = 0),
                            (t.y = 0),
                            (t.z = 0),
                            (t.w = 0),
                            (t.v = 0),
                            o === (o | 0) ? (t.x = o) : (n += o);
                        for (var s = 0; s < n.length + 64; s++)
                            (t.x ^= n.charCodeAt(s) | 0),
                                s == n.length &&
                                    (t.d = (t.x << 10) ^ (t.x >>> 4)),
                                t.next();
                    }
                    function d(o, t) {
                        return (
                            (t.x = o.x),
                            (t.y = o.y),
                            (t.z = o.z),
                            (t.w = o.w),
                            (t.v = o.v),
                            (t.d = o.d),
                            t
                        );
                    }
                    function f(o, t) {
                        var n = new p(o),
                            s = t && t.state,
                            e = function () {
                                return (n.next() >>> 0) / 4294967296;
                            };
                        return (
                            (e.double = function () {
                                do
                                    var r = n.next() >>> 11,
                                        i = (n.next() >>> 0) / 4294967296,
                                        c = (r + i) / (1 << 21);
                                while (c === 0);
                                return c;
                            }),
                            (e.int32 = n.next),
                            (e.quick = e),
                            s &&
                                (typeof s == "object" && d(s, n),
                                (e.state = function () {
                                    return d(n, {});
                                })),
                            e
                        );
                    }
                    l && l.exports ? (l.exports = f) : (this.xorwow = f);
                })(Q1, h);
            })(U)),
        U.exports
    );
}
var N = { exports: {} },
    e0 = N.exports,
    f2;
function n0() {
    return (
        f2 ||
            ((f2 = 1),
            (function (h) {
                (function (u, l, m) {
                    function p(o) {
                        var t = this;
                        t.next = function () {
                            var s = t.x,
                                e = t.i,
                                r,
                                i;
                            return (
                                (r = s[e]),
                                (r ^= r >>> 7),
                                (i = r ^ (r << 24)),
                                (r = s[(e + 1) & 7]),
                                (i ^= r ^ (r >>> 10)),
                                (r = s[(e + 3) & 7]),
                                (i ^= r ^ (r >>> 3)),
                                (r = s[(e + 4) & 7]),
                                (i ^= r ^ (r << 7)),
                                (r = s[(e + 7) & 7]),
                                (r = r ^ (r << 13)),
                                (i ^= r ^ (r << 9)),
                                (s[e] = i),
                                (t.i = (e + 1) & 7),
                                i
                            );
                        };
                        function n(s, e) {
                            var r,
                                i = [];
                            if (e === (e | 0)) i[0] = e;
                            else
                                for (e = "" + e, r = 0; r < e.length; ++r)
                                    i[r & 7] =
                                        (i[r & 7] << 15) ^
                                        ((e.charCodeAt(r) + i[(r + 1) & 7]) <<
                                            13);
                            for (; i.length < 8; ) i.push(0);
                            for (r = 0; r < 8 && i[r] === 0; ++r);
                            for (
                                r == 8 ? (i[7] = -1) : i[r],
                                    s.x = i,
                                    s.i = 0,
                                    r = 256;
                                r > 0;
                                --r
                            )
                                s.next();
                        }
                        n(t, o);
                    }
                    function d(o, t) {
                        return (t.x = o.x.slice()), (t.i = o.i), t;
                    }
                    function f(o, t) {
                        o == null && (o = +new Date());
                        var n = new p(o),
                            s = t && t.state,
                            e = function () {
                                return (n.next() >>> 0) / 4294967296;
                            };
                        return (
                            (e.double = function () {
                                do
                                    var r = n.next() >>> 11,
                                        i = (n.next() >>> 0) / 4294967296,
                                        c = (r + i) / (1 << 21);
                                while (c === 0);
                                return c;
                            }),
                            (e.int32 = n.next),
                            (e.quick = e),
                            s &&
                                (s.x && d(s, n),
                                (e.state = function () {
                                    return d(n, {});
                                })),
                            e
                        );
                    }
                    l && l.exports ? (l.exports = f) : (this.xorshift7 = f);
                })(e0, h);
            })(N)),
        N.exports
    );
}
var I = { exports: {} },
    r0 = I.exports,
    d2;
function s0() {
    return (
        d2 ||
            ((d2 = 1),
            (function (h) {
                (function (u, l, m) {
                    function p(o) {
                        var t = this;
                        t.next = function () {
                            var s = t.w,
                                e = t.X,
                                r = t.i,
                                i,
                                c;
                            return (
                                (t.w = s = (s + 1640531527) | 0),
                                (c = e[(r + 34) & 127]),
                                (i = e[(r = (r + 1) & 127)]),
                                (c ^= c << 13),
                                (i ^= i << 17),
                                (c ^= c >>> 15),
                                (i ^= i >>> 12),
                                (c = e[r] = c ^ i),
                                (t.i = r),
                                (c + (s ^ (s >>> 16))) | 0
                            );
                        };
                        function n(s, e) {
                            var r,
                                i,
                                c,
                                V,
                                D,
                                M = [],
                                v = 128;
                            for (
                                e === (e | 0)
                                    ? ((i = e), (e = null))
                                    : ((e = e + "\0"),
                                      (i = 0),
                                      (v = Math.max(v, e.length))),
                                    c = 0,
                                    V = -32;
                                V < v;
                                ++V
                            )
                                e && (i ^= e.charCodeAt((V + 32) % e.length)),
                                    V === 0 && (D = i),
                                    (i ^= i << 10),
                                    (i ^= i >>> 15),
                                    (i ^= i << 4),
                                    (i ^= i >>> 13),
                                    V >= 0 &&
                                        ((D = (D + 1640531527) | 0),
                                        (r = M[V & 127] ^= i + D),
                                        (c = r == 0 ? c + 1 : 0));
                            for (
                                c >= 128 &&
                                    (M[((e && e.length) || 0) & 127] = -1),
                                    c = 127,
                                    V = 4 * 128;
                                V > 0;
                                --V
                            )
                                (i = M[(c + 34) & 127]),
                                    (r = M[(c = (c + 1) & 127)]),
                                    (i ^= i << 13),
                                    (r ^= r << 17),
                                    (i ^= i >>> 15),
                                    (r ^= r >>> 12),
                                    (M[c] = i ^ r);
                            (s.w = D), (s.X = M), (s.i = c);
                        }
                        n(t, o);
                    }
                    function d(o, t) {
                        return (t.i = o.i), (t.w = o.w), (t.X = o.X.slice()), t;
                    }
                    function f(o, t) {
                        o == null && (o = +new Date());
                        var n = new p(o),
                            s = t && t.state,
                            e = function () {
                                return (n.next() >>> 0) / 4294967296;
                            };
                        return (
                            (e.double = function () {
                                do
                                    var r = n.next() >>> 11,
                                        i = (n.next() >>> 0) / 4294967296,
                                        c = (r + i) / (1 << 21);
                                while (c === 0);
                                return c;
                            }),
                            (e.int32 = n.next),
                            (e.quick = e),
                            s &&
                                (s.X && d(s, n),
                                (e.state = function () {
                                    return d(n, {});
                                })),
                            e
                        );
                    }
                    l && l.exports ? (l.exports = f) : (this.xor4096 = f);
                })(r0, h);
            })(I)),
        I.exports
    );
}
var P = { exports: {} },
    o0 = P.exports,
    p2;
function i0() {
    return (
        p2 ||
            ((p2 = 1),
            (function (h) {
                (function (u, l, m) {
                    function p(o) {
                        var t = this,
                            n = "";
                        (t.next = function () {
                            var e = t.b,
                                r = t.c,
                                i = t.d,
                                c = t.a;
                            return (
                                (e = (e << 25) ^ (e >>> 7) ^ r),
                                (r = (r - i) | 0),
                                (i = (i << 24) ^ (i >>> 8) ^ c),
                                (c = (c - e) | 0),
                                (t.b = e = (e << 20) ^ (e >>> 12) ^ r),
                                (t.c = r = (r - i) | 0),
                                (t.d = (i << 16) ^ (r >>> 16) ^ c),
                                (t.a = (c - e) | 0)
                            );
                        }),
                            (t.a = 0),
                            (t.b = 0),
                            (t.c = -1640531527),
                            (t.d = 1367130551),
                            o === Math.floor(o)
                                ? ((t.a = (o / 4294967296) | 0), (t.b = o | 0))
                                : (n += o);
                        for (var s = 0; s < n.length + 20; s++)
                            (t.b ^= n.charCodeAt(s) | 0), t.next();
                    }
                    function d(o, t) {
                        return (
                            (t.a = o.a),
                            (t.b = o.b),
                            (t.c = o.c),
                            (t.d = o.d),
                            t
                        );
                    }
                    function f(o, t) {
                        var n = new p(o),
                            s = t && t.state,
                            e = function () {
                                return (n.next() >>> 0) / 4294967296;
                            };
                        return (
                            (e.double = function () {
                                do
                                    var r = n.next() >>> 11,
                                        i = (n.next() >>> 0) / 4294967296,
                                        c = (r + i) / (1 << 21);
                                while (c === 0);
                                return c;
                            }),
                            (e.int32 = n.next),
                            (e.quick = e),
                            s &&
                                (typeof s == "object" && d(s, n),
                                (e.state = function () {
                                    return d(n, {});
                                })),
                            e
                        );
                    }
                    l && l.exports ? (l.exports = f) : (this.tychei = f);
                })(o0, h);
            })(P)),
        P.exports
    );
}
var W = { exports: {} };
const a0 = {},
    l0 = Object.freeze(
        Object.defineProperty(
            { __proto__: null, default: a0 },
            Symbol.toStringTag,
            { value: "Module" }
        )
    ),
    c0 = $2(l0);
var u0 = W.exports,
    C2;
function f0() {
    return (
        C2 ||
            ((C2 = 1),
            (function (h) {
                (function (u, l, m) {
                    var p = 256,
                        d = 6,
                        f = 52,
                        o = "random",
                        t = m.pow(p, d),
                        n = m.pow(2, f),
                        s = n * 2,
                        e = p - 1,
                        r;
                    function i(C, x, L) {
                        var w = [];
                        x = x == !0 ? { entropy: !0 } : x || {};
                        var g = M(D(x.entropy ? [C, k(l)] : C ?? v(), 3), w),
                            $ = new c(w),
                            Z = function () {
                                for (var S = $.g(d), q = t, T = 0; S < n; )
                                    (S = (S + T) * p), (q *= p), (T = $.g(1));
                                for (; S >= s; ) (S /= 2), (q /= 2), (T >>>= 1);
                                return (S + T) / q;
                            };
                        return (
                            (Z.int32 = function () {
                                return $.g(4) | 0;
                            }),
                            (Z.quick = function () {
                                return $.g(4) / 4294967296;
                            }),
                            (Z.double = Z),
                            M(k($.S), l),
                            (
                                x.pass ||
                                L ||
                                function (S, q, T, E) {
                                    return (
                                        E &&
                                            (E.S && V(E, $),
                                            (S.state = function () {
                                                return V($, {});
                                            })),
                                        T ? ((m[o] = S), q) : S
                                    );
                                }
                            )(
                                Z,
                                g,
                                "global" in x ? x.global : this == m,
                                x.state
                            )
                        );
                    }
                    function c(C) {
                        var x,
                            L = C.length,
                            w = this,
                            g = 0,
                            $ = (w.i = w.j = 0),
                            Z = (w.S = []);
                        for (L || (C = [L++]); g < p; ) Z[g] = g++;
                        for (g = 0; g < p; g++)
                            (Z[g] = Z[($ = e & ($ + C[g % L] + (x = Z[g])))]),
                                (Z[$] = x);
                        (w.g = function (S) {
                            for (var q, T = 0, E = w.i, B = w.j, R = w.S; S--; )
                                (q = R[(E = e & (E + 1))]),
                                    (T =
                                        T * p +
                                        R[
                                            e &
                                                ((R[E] = R[(B = e & (B + q))]) +
                                                    (R[B] = q))
                                        ]);
                            return (w.i = E), (w.j = B), T;
                        })(p);
                    }
                    function V(C, x) {
                        return (x.i = C.i), (x.j = C.j), (x.S = C.S.slice()), x;
                    }
                    function D(C, x) {
                        var L = [],
                            w = typeof C,
                            g;
                        if (x && w == "object")
                            for (g in C)
                                try {
                                    L.push(D(C[g], x - 1));
                                } catch {}
                        return L.length ? L : w == "string" ? C : C + "\0";
                    }
                    function M(C, x) {
                        for (var L = C + "", w, g = 0; g < L.length; )
                            x[e & g] =
                                e & ((w ^= x[e & g] * 19) + L.charCodeAt(g++));
                        return k(x);
                    }
                    function v() {
                        try {
                            var C;
                            return (
                                r && (C = r.randomBytes)
                                    ? (C = C(p))
                                    : ((C = new Uint8Array(p)),
                                      (u.crypto || u.msCrypto).getRandomValues(
                                          C
                                      )),
                                k(C)
                            );
                        } catch {
                            var x = u.navigator,
                                L = x && x.plugins;
                            return [+new Date(), u, L, u.screen, k(l)];
                        }
                    }
                    function k(C) {
                        return String.fromCharCode.apply(0, C);
                    }
                    if ((M(m.random(), l), h.exports)) {
                        h.exports = i;
                        try {
                            r = c0;
                        } catch {}
                    } else m["seed" + o] = i;
                })(typeof self < "u" ? self : u0, [], Math);
            })(W)),
        W.exports
    );
}
var J, x2;
function d0() {
    if (x2) return J;
    x2 = 1;
    var h = K1(),
        u = J1(),
        l = t0(),
        m = n0(),
        p = s0(),
        d = i0(),
        f = f0();
    return (
        (f.alea = h),
        (f.xor128 = u),
        (f.xorwow = l),
        (f.xorshift7 = m),
        (f.xor4096 = p),
        (f.tychei = d),
        (J = f),
        J
    );
}
var p0 = d0();
const C0 = D2(p0),
    x0 = {
        id: "how-does-this-work",
        class: "py-10 lg:py-16 bg-white odd:bg-[#f0ece3] group",
    },
    m0 = { class: "container flex flex-col gap-6 text-center" },
    h0 = { class: "text-2xl md:text-3xl font-semibold" },
    _0 = { class: "inline-block w-[7ch] text-brand" },
    v0 = { class: "grid sm:grid-cols-2 lg:flex justify-center gap-6" },
    g0 = { class: "text-lg font-semibold" },
    m2 = 89e4,
    w0 = 1749e3,
    b0 = t2({
        __name: "Bullets",
        setup(h) {
            const u = new Date(),
                l = `${u.getUTCMonth()}${u.getUTCFullYear()}`,
                m = C0(l),
                p = h2(m2 + Math.floor((w0 - m2) * m())),
                d = ([{ isIntersecting: o, target: t }], n) => {
                    o &&
                        (k2({
                            targets: p,
                            duration: 1500,
                            round: !0,
                            easing: "linear",
                            value: [0, p.value],
                        }),
                        n.unobserve(t));
                },
                f = [
                    { title: "TOTALLY RISK-FREE", icon: k1 },
                    { title: "EXCLUSIVE DISCOUNT", icon: j1 },
                    { title: "INSTANT CALLBACK", icon: B1 },
                    { title: "BOOK NOW, PAY LATER", icon: U1 },
                    { title: "24 HOURS FARE LOCK", icon: W1 },
                ];
            return (o, t) => {
                const n = b2;
                return (
                    b(),
                    G(
                        n,
                        { "when-visible": "" },
                        {
                            default: e2(() => [
                                a("section", x0, [
                                    a("div", m0, [
                                        a("h2", h0, [
                                            t[0] ||
                                                (t[0] = A(
                                                    " LAST MONTH WE SAVED CLIENTS OVER: "
                                                )),
                                            g2(
                                                (b(),
                                                H("span", _0, [
                                                    A(
                                                        y(
                                                            ("formatToUSD" in o
                                                                ? o.formatToUSD
                                                                : _(w2))(_(p))
                                                        ),
                                                        1
                                                    ),
                                                ])),
                                                [[_(S2), d]]
                                            ),
                                        ]),
                                        a("div", v0, [
                                            (b(),
                                            H(
                                                z,
                                                null,
                                                _2(f, (s, e) =>
                                                    a(
                                                        "div",
                                                        {
                                                            key: s.title,
                                                            class: v2([
                                                                "lg:flex-1 flex flex-col items-center gap-2 p-4 border rounded-xl shadow",
                                                                {
                                                                    "sm:col-span-2":
                                                                        f.length %
                                                                            2 ===
                                                                            1 &&
                                                                        e ===
                                                                            f.length -
                                                                                1,
                                                                },
                                                            ]),
                                                        },
                                                        [
                                                            (b(),
                                                            G(Z2(s.icon), {
                                                                class: "text-[42px] text-brand",
                                                            })),
                                                            a(
                                                                "div",
                                                                g0,
                                                                y(s.title),
                                                                1
                                                            ),
                                                        ],
                                                        2
                                                    )
                                                ),
                                                64
                                            )),
                                        ]),
                                    ]),
                                ]),
                            ]),
                            _: 1,
                        }
                    )
                );
            };
        },
    }),
    z0 = t2({
        __name: "results",
        async setup(h) {
            let u, l;
            const m = T2(),
                p = m.path,
                { data: d } =
                    (([u, l] = o2(() =>
                        E2(`/api/content/page${p}`, "$p7feLduXgu")
                    )),
                    (u = await u),
                    l(),
                    u);
            if (!d.value)
                throw i2({
                    statusCode: 404,
                    fatal: !0,
                    message: "Page not found",
                });
            if (!d.value.data)
                throw i2({
                    statusCode: 404,
                    fatal: !0,
                    message: "Page not found",
                });
            const f = d.value.data.attributes,
                { customComponents: o } = I2(),
                t = m.meta.type || "round_trip",
                n = q2(),
                { returnDate: s, passengersCount: e, cabinClass: r } = n,
                i = { ...n.flight },
                { cabinClass: c } = A2(n),
                { searchFlights: V } = R2(),
                { data: D } =
                    (([u, l] = o2(() =>
                        V({
                            query: {
                                from: i.from.iata_code,
                                to: i.to.iata_code,
                                trip_type: t,
                            },
                        })
                    )),
                    (u = await u),
                    l(),
                    u);
            return (
                j2({
                    title: `Luxury Airways | ${m.query.flyFrom} - ${m.query.flyTo}`,
                    meta: [
                        {
                            property: "og:title",
                            content: `Luxury Airways | ${m.query.flyFrom} - ${m.query.flyTo}`,
                        },
                        {
                            name: "twitter:title",
                            content: `Luxury Airways | ${m.query.flyFrom} - ${m.query.flyTo}`,
                        },
                        { name: "description", content: f.metaDescription },
                    ],
                }),
                (M, v) => {
                    const k = $1,
                        C = b2,
                        x = b0,
                        L = X2("SectionsHowDoesThisWorkAlternative"),
                        w = U2,
                        g = N2;
                    return (
                        b(),
                        H("div", null, [
                            j(
                                C,
                                { "when-idle": "" },
                                {
                                    default: e2(() => [
                                        j(
                                            k,
                                            {
                                                "cabin-class": _(c),
                                                "onUpdate:cabinClass":
                                                    v[0] ||
                                                    (v[0] = ($) =>
                                                        Q(c)
                                                            ? (c.value = $)
                                                            : null),
                                                "results-data": {
                                                    tripType: _(t),
                                                    flight: i,
                                                    cabinClass: _(r),
                                                    passengersCount: _(e),
                                                    returnDate: _(s),
                                                },
                                                "cabin-class-prices": (() => {
    const rawData = _(D);
    console.log('🎯 STEP 7 - Passing to Results component:', rawData);
    
    // Извлекаем цены из data
    const originalPrices = rawData?.data || rawData;
    console.log('🎯 STEP 8 - Original prices:', originalPrices);
    
    // Применяем скидку 25%
    if (originalPrices && typeof originalPrices === 'object') {
        const discountedPrices = {};
        
        Object.entries(originalPrices).forEach(([key, value]) => {
            if (typeof value === 'number' && !isNaN(value)) {
                // Применяем скидку 25% (оставляем 75% от оригинальной цены)
                const discountedPrice = Math.round(value * 0.75);
                discountedPrices[key] = discountedPrice;
                
                console.log(`💰 ${key}: $${value} → $${discountedPrice} (скидка 25%)`);
            } else {
                // Если цена не число, оставляем как есть
                discountedPrices[key] = value;
                console.warn(`⚠️ Invalid price for ${key}:`, value);
            }
        });
        
        console.log('🎯 STEP 9 - Discounted prices:', discountedPrices);
        return discountedPrices;
    }
    
    console.log('🎯 STEP 10 - No valid prices found');
    return originalPrices;
})(),
                                                class: "pt-[--header-height]",
                                            },
                                            null,
                                            8,
                                            [
                                                "cabin-class",
                                                "results-data",
                                                "cabin-class-prices",
                                            ]
                                        ),
                                    ]),
                                    _: 1,
                                }
                            ),
                            j(x),
                            j(L),
                            j(w),
                            j(
                                g,
                                {
                                    blocks: _(f).blocks,
                                    "custom-components": _(o),
                                },
                                null,
                                8,
                                ["blocks", "custom-components"]
                            ),
                        ])
                    );
                }
            );
        },
    });
export { z0 as default };
