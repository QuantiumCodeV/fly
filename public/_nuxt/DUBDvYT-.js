import { b as k, _ as P } from "./Bg2F5n5H.js";
import {
    d as R,
    M as U,
    ac as M,
    r as y,
    a8 as N,
    e as _,
    o as m,
    i as e,
    a3 as F,
    h as t,
    f,
    A as i,
    B as g,
    a9 as z,
    ah as $,
    s as b,
    ai as L,
    l as x,
    a6 as B,
    a5 as A,
    aj as D,
    ae as W,
    af as I,
    ag as q,
    N as G,
    F as Y,
    z as H,
    Q as K,
    b as Q,
    t as O,
    k as X,
} from "./C_3eNykI.js";
const J = { class: "grid gap-1.5 p-5 bg-white rounded-xl shadow" },
    Z = { class: "grid lg:grid-cols-2 gap-1.5" },
    ee = ["for"],
    te = ["id"],
    se = ["for"],
    ae = ["id"],
    oe = {
        class: i([
            "grid group border rounded p-2 lg:col-span-2 h-full focus-within:border-brand",
        ]),
    },
    ne = ["for"],
    le = ["id"],
    re = ["for"],
    ie = ["disabled"],
    de = {
        class: "absolute flex inset-0 items-center justify-center bg-inherit rounded-[inherit]",
    },
    ue = {
        key: 1,
        class: "flex flex-col items-center justify-center gap-3 text-center",
    },
    ce = { class: "p-1.5 sm:p-3 rounded-full bg-brand-50" },
    pe = R({
        __name: "Contact",
        setup(E) {
            const { name: d, email: l, phone: n } = U(M()),
                o = () => !!n.value.valid,
                p = y(""),
                v = {
                    email: { required: I, emailValidator: q },
                    name: { required: I, min: W(2) },
                    phone: { isPhoneValid: o },
                },
                s = N(v, { name: d, email: l, phone: n }),
                u = y(!1),
                w = y(!1),
                { createContactRequest: V } = G(),
                C = async () => {
                    if ((s.value.$validate(), s.value.$invalid)) return;
                    u.value = !0;
                    const { error: h } = await V({
                        body: {
                            name: d.value,
                            email: l.value,
                            phone: n.value.number,
                            message: p.value,
                        },
                        method: "post",
                    });
                    (u.value = !1),
                        h.value
                            ? (h.value.statusCode || 500) >= 500 &&
                              alert("Server error")
                            : (w.value = !0);
                },
                r = z();
            return (h, a) => {
                const T = L,
                    S = A,
                    j = D;
                return (
                    m(),
                    _("div", J, [
                        e(w)
                            ? (m(),
                              _("div", ue, [
                                  t("div", ce, [
                                      f(S, {
                                          name: "tabler:message-check",
                                          class: "text-2xl sm:text-[32px] text-brand",
                                      }),
                                  ]),
                                  a[5] ||
                                      (a[5] = t(
                                          "div",
                                          { class: "text-2xl font-semibold" },
                                          "WE APPRECIATE YOUR INTEREST IN OUR SERVICES!",
                                          -1
                                      )),
                                  a[6] ||
                                      (a[6] = t(
                                          "div",
                                          { class: "text-lg" },
                                          "We'll contact you soon to discuss your request.",
                                          -1
                                      )),
                              ]))
                            : (m(),
                              _(
                                  "form",
                                  {
                                      key: 0,
                                      class: "flex flex-col gap-1.5",
                                      onSubmit: F(C, ["prevent"]),
                                  },
                                  [
                                      t("div", Z, [
                                          t(
                                              "div",
                                              {
                                                  class: i([
                                                      "grid group border rounded p-2",
                                                      e(s).name.$invalid &&
                                                      e(s).name.$dirty
                                                          ? "border-red-500"
                                                          : "focus-within:border-brand",
                                                  ]),
                                              },
                                              [
                                                  t(
                                                      "label",
                                                      {
                                                          for: `contact-name-${e(
                                                              r
                                                          )}`,
                                                          class: i([
                                                              "text-xs text-gray-400 pr-12",
                                                              e(s).name
                                                                  .$invalid &&
                                                              e(s).name.$dirty
                                                                  ? "text-red-500"
                                                                  : "group-focus-within:text-brand ",
                                                          ]),
                                                      },
                                                      "Name",
                                                      10,
                                                      ee
                                                  ),
                                                  g(
                                                      t(
                                                          "input",
                                                          {
                                                              id: `contact-name-${e(
                                                                  r
                                                              )}`,
                                                              "onUpdate:modelValue":
                                                                  a[0] ||
                                                                  (a[0] = (c) =>
                                                                      b(d)
                                                                          ? (d.value =
                                                                                c)
                                                                          : null),
                                                              type: "text",
                                                              class: "text-sm text-black focus:outline-none",
                                                          },
                                                          null,
                                                          8,
                                                          te
                                                      ),
                                                      [[$, e(d)]]
                                                  ),
                                              ],
                                              2
                                          ),
                                          t(
                                              "div",
                                              {
                                                  class: i([
                                                      "grid group border rounded p-2",
                                                      e(s).email.$invalid &&
                                                      e(s).email.$dirty
                                                          ? "border-red-500"
                                                          : "focus-within:border-brand",
                                                  ]),
                                              },
                                              [
                                                  t(
                                                      "label",
                                                      {
                                                          for: `contact-email-${e(
                                                              r
                                                          )}`,
                                                          class: i([
                                                              "text-xs text-gray-400 pr-12",
                                                              e(s).email
                                                                  .$invalid &&
                                                              e(s).email.$dirty
                                                                  ? "text-red-500"
                                                                  : "group-focus-within:text-brand ",
                                                          ]),
                                                      },
                                                      "Email",
                                                      10,
                                                      se
                                                  ),
                                                  g(
                                                      t(
                                                          "input",
                                                          {
                                                              id: `contact-email-${e(
                                                                  r
                                                              )}`,
                                                              "onUpdate:modelValue":
                                                                  a[1] ||
                                                                  (a[1] = (c) =>
                                                                      b(l)
                                                                          ? (l.value =
                                                                                c)
                                                                          : null),
                                                              type: "email",
                                                              class: "text-sm text-black focus:outline-none",
                                                          },
                                                          null,
                                                          8,
                                                          ae
                                                      ),
                                                      [[$, e(l)]]
                                                  ),
                                              ],
                                              2
                                          ),
                                          t("div", oe, [
                                              t(
                                                  "label",
                                                  {
                                                      for: `message-${e(r)}`,
                                                      class: i([
                                                          "text-xs text-gray-400 pr-12 group-focus-within:text-brand",
                                                      ]),
                                                  },
                                                  "Message",
                                                  8,
                                                  ne
                                              ),
                                              g(
                                                  t(
                                                      "textarea",
                                                      {
                                                          id: `message-${e(r)}`,
                                                          "onUpdate:modelValue":
                                                              a[2] ||
                                                              (a[2] = (c) =>
                                                                  b(p)
                                                                      ? (p.value =
                                                                            c)
                                                                      : null),
                                                          rows: "4",
                                                          maxlength: "1000",
                                                          type: "text",
                                                          class: "text-sm text-black focus:outline-none max-h-40",
                                                      },
                                                      null,
                                                      8,
                                                      le
                                                  ),
                                                  [[$, e(p)]]
                                              ),
                                          ]),
                                          t(
                                              "div",
                                              {
                                                  class: i([
                                                      "grid group border rounded p-2",
                                                      e(s).phone.$invalid &&
                                                      e(s).phone.$dirty
                                                          ? "border-red-500"
                                                          : "focus-within:border-brand",
                                                  ]),
                                              },
                                              [
                                                  t(
                                                      "label",
                                                      {
                                                          for: `contact-phone-${e(
                                                              r
                                                          )}`,
                                                          class: i([
                                                              "text-xs text-gray-400 pr-12",
                                                              e(s).phone
                                                                  .$invalid &&
                                                              e(s).phone.$dirty
                                                                  ? "text-red-500"
                                                                  : "group-focus-within:text-brand ",
                                                          ]),
                                                      },
                                                      "Phone",
                                                      10,
                                                      re
                                                  ),
                                                  f(
                                                      T,
                                                      {
                                                          id: `contact-phone-${e(
                                                              r
                                                          )}`,
                                                          modelValue: e(n),
                                                          "onUpdate:modelValue":
                                                              a[3] ||
                                                              (a[3] = (c) =>
                                                                  b(n)
                                                                      ? (n.value =
                                                                            c)
                                                                      : null),
                                                          class: "text-sm text-black focus:outline-none",
                                                      },
                                                      null,
                                                      8,
                                                      ["id", "modelValue"]
                                                  ),
                                              ],
                                              2
                                          ),
                                          t(
                                              "button",
                                              {
                                                  type: "submit",
                                                  class: "relative px-6 py-3 bg-brand-500 hover:bg-brand-700 transition-colors rounded text-white whitespace-nowrap grow font-semibold",
                                                  disabled: e(u),
                                              },
                                              [
                                                  a[4] || (a[4] = x(" SEND ")),
                                                  g(
                                                      t(
                                                          "span",
                                                          de,
                                                          [
                                                              f(S, {
                                                                  name: "svg-spinners:180-ring",
                                                                  class: "text-[2rem]",
                                                              }),
                                                          ],
                                                          512
                                                      ),
                                                      [[B, e(u)]]
                                                  ),
                                              ],
                                              8,
                                              ie
                                          ),
                                      ]),
                                      f(j),
                                  ],
                                  32
                              )),
                    ])
                );
            };
        },
    }),
    me = "" + new URL("avatarImage1.BM-hvPBL.png", import.meta.url).href,
    fe = Object.freeze(
        Object.defineProperty(
            { __proto__: null, default: me },
            Symbol.toStringTag,
            { value: "Module" }
        )
    ),
    _e = "" + new URL("avatarImage2.CzfVkfy5.png", import.meta.url).href,
    ge = Object.freeze(
        Object.defineProperty(
            { __proto__: null, default: _e },
            Symbol.toStringTag,
            { value: "Module" }
        )
    ),
    be = "" + new URL("avatarImage3.CNGXgGVa.png", import.meta.url).href,
    xe = Object.freeze(
        Object.defineProperty(
            { __proto__: null, default: be },
            Symbol.toStringTag,
            { value: "Module" }
        )
    ),
    ve = "" + new URL("avatarImage5.B0Y4zME7.png", import.meta.url).href,
    he = Object.freeze(
        Object.defineProperty(
            { __proto__: null, default: ve },
            Symbol.toStringTag,
            { value: "Module" }
        )
    ),
    ye = { class: "py-10 lg:py-16 bg-white odd:bg-[#f0ece3]" },
    $e = { class: "container grid md:grid-cols-2 place-items-center gap-4" },
    we = { class: "flex flex-col items-center gap-4 my-auto" },
    Se = {
        class: "flex flex-wrap justify-center gap-1 px-4 py-3 bg-brand-50 rounded-full",
    },
    Ie = { class: "flex flex-col items-center pt-3 border-t self-stretch" },
    Oe = {
        class: "flex items-center justify-center gap-3 max-sm:text-sm text-brand",
    },
    Re = ["href"],
    Ee = ["href"],
    Te = R({
        __name: "Assistance",
        setup(E) {
            const d = Object.values([fe, ge, xe, k, he]).map((n) => n.default),
                l = Q();
            return (n, o) => {
                const p = P,
                    v = pe;
                return (
                    m(),
                    _("section", ye, [
                        t("div", $e, [
                            t("div", we, [
                                t("div", Se, [
                                    (m(!0),
                                    _(
                                        Y,
                                        null,
                                        H(
                                            e(d),
                                            (s, u) => (
                                                m(),
                                                X(
                                                    p,
                                                    {
                                                        key: u,
                                                        class: "size-[42px] sm:size-[52px]",
                                                        src: s,
                                                        alt: `avatar Luxury Airways ${
                                                            u + 1
                                                        }`,
                                                        width: "104",
                                                        height: "104",
                                                    },
                                                    null,
                                                    8,
                                                    ["src", "alt"]
                                                )
                                            )
                                        ),
                                        128
                                    )),
                                ]),
                                o[3] ||
                                    (o[3] = t(
                                        "div",
                                        {
                                            class: "text-2xl sm:text-3xl font-semibold text-center",
                                        },
                                        [
                                            t(
                                                "span",
                                                { class: "text-black" },
                                                "COULDN'T FIND"
                                            ),
                                            x(" WHAT YOU WERE LOOKING FOR? "),
                                        ],
                                        -1
                                    )),
                                o[4] ||
                                    (o[4] = t(
                                        "div",
                                        null,
                                        "Please take a moment to get in touch",
                                        -1
                                    )),
                                t("div", Ie, [
                                    o[2] ||
                                        (o[2] = t(
                                            "div",
                                            null,
                                            "CUSTOMER SERVICE",
                                            -1
                                        )),
                                    t("div", Oe, [
                                        t(
                                            "a",
                                            {
                                                href: `tel:${("parsePhone" in n
                                                    ? n.parsePhone
                                                    : e(K))(
                                                    e(l).public.contact.support
                                                        .phone
                                                )}`,
                                                class: "group relative isolate w-fit pointer-events-none",
                                            },
                                            [
                                                x(
                                                    O(
                                                        e(l).public.contact
                                                            .support.phone
                                                    ) + " ",
                                                    1
                                                ),
                                                o[0] ||
                                                    (o[0] = t(
                                                        "span",
                                                        {
                                                            "aria-hidden":
                                                                "true",
                                                            class: "absolute top-full left-0 w-full h-px bg-current scale-x-0 group-hover:scale-x-100 transition origin-left",
                                                        },
                                                        null,
                                                        -1
                                                    )),
                                            ],
                                            8,
                                            Re
                                        ),
                                        t(
                                            "a",
                                            {
                                                href: `mailto:${
                                                    e(l).public.contact.support
                                                        .email
                                                }`,
                                                class: "group relative isolate w-fit pointer-events-none",
                                            },
                                            [
                                                x(
                                                    O(
                                                        e(l).public.contact
                                                            .support.email
                                                    ) + " ",
                                                    1
                                                ),
                                                o[1] ||
                                                    (o[1] = t(
                                                        "span",
                                                        {
                                                            "aria-hidden":
                                                                "true",
                                                            class: "absolute top-full left-0 w-full h-px bg-current scale-x-0 group-hover:scale-x-100 transition origin-left",
                                                        },
                                                        null,
                                                        -1
                                                    )),
                                            ],
                                            8,
                                            Ee
                                        ),
                                    ]),
                                ]),
                            ]),
                            f(v),
                        ]),
                    ])
                );
            };
        },
    });
export { Te as _ };
