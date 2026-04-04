import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="flex-shrink-0">
    <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CrossIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="flex-shrink-0">
    <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
  </svg>
);

const plans = [
  {
    id: "free",
    name: "Free",
    tagline: "Get started for free",
    monthlyPrice: 0,
    yearlyPrice: 0,
    weeklyPrice: 0,
    color: "#6b7280",
    gradient: "from-gray-500 to-gray-600",
    bgGradient: "from-gray-50 to-gray-100",
    border: "border-gray-200",
    badge: null,
    features: [
      { text: "7 basic templates", available: true },
      { text: "Unlimited resume edits", available: true },
      { text: "PDF download (2/month)", available: true },
      { text: "Basic sections (Personal, Education, Skills)", available: true },
      { text: "Progress tracker", available: true },
      { text: "Premium templates (22+)", available: false },
      { text: "Elite templates (7)", available: false },
      { text: "AI resume review", available: false },
      { text: "Unlimited PDF downloads", available: false },
      { text: "Priority support", available: false },
    ],
    cta: "Get started free",
    ctaTo: "/register",
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "For serious job seekers",
    monthlyPrice: 99,
    yearlyPrice: 499,
    weeklyPrice: 29,
    color: "#4f46e5",
    gradient: "from-indigo-500 to-violet-600",
    bgGradient: "from-indigo-50 to-violet-50",
    border: "border-indigo-300",
    badge: "Most Popular",
    features: [
      { text: "All 7 free templates", available: true },
      { text: "22 premium templates", available: true },
      { text: "Unlimited PDF downloads", available: true },
      { text: "All resume sections", available: true },
      { text: "Progress tracker", available: true },
      { text: "AI resume score", available: true },
      { text: "Custom color themes", available: true },
      { text: "Elite templates (7)", available: false },
      { text: "AI-powered suggestions", available: false },
      { text: "Priority support", available: false },
    ],
    cta: "Upgrade to Premium",
    ctaTo: "/checkout/premium",
  },
  {
    id: "elite",
    name: "Elite",
    tagline: "Maximum impact, maximum results",
    monthlyPrice: 199,
    yearlyPrice: 999,
    weeklyPrice: 59,
    color: "#9333ea",
    gradient: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-50 to-pink-50",
    border: "border-purple-300",
    badge: "Best Value",
    features: [
      { text: "All 32 templates", available: true },
      { text: "Unlimited PDF downloads", available: true },
      { text: "All resume sections", available: true },
      { text: "AI-powered resume review", available: true },
      { text: "AI writing suggestions", available: true },
      { text: "Custom color themes", available: true },
      { text: "Multiple resume profiles", available: true },
      { text: "Priority email support", available: true },
      { text: "Early access to new features", available: true },
      { text: "LinkedIn optimization tips", available: true },
    ],
    cta: "Upgrade to Elite",
    ctaTo: "/checkout/elite",
  },
];

const faqs = [
  { q: "Can I cancel my subscription anytime?", a: "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period." },
  { q: "What payment methods do you accept?", a: "We accept all major credit/debit cards, UPI, Net Banking, and PayTM through our secure payment gateway." },
  { q: "Is my data safe?", a: "Absolutely. Your resume data is encrypted and stored securely. We never share your information with third parties." },
  { q: "Can I switch between plans?", a: "Yes! You can upgrade or downgrade your plan at any time. Upgrades take effect immediately, downgrades at the next billing cycle." },
  { q: "Do free templates have watermarks?", a: "No watermarks on any plan. All our templates produce clean, professional PDFs." },
];

export default function Pricing() {
  const { isAuthenticated } = useAuth();
  const [billing, setBilling] = useState("monthly");
  const [openFaq, setOpenFaq] = useState(null);

  const getPrice = (plan) => {
    if (plan.id === "free") return "₹0";
    if (billing === "weekly") return `₹${plan.weeklyPrice}`;
    if (billing === "monthly") return `₹${plan.monthlyPrice}`;
    return `₹${plan.yearlyPrice}`;
  };

  const getPeriod = () => {
    if (billing === "weekly") return "/week";
    if (billing === "monthly") return "/month";
    return "/year";
  };

  const getSavings = (plan) => {
    if (plan.id === "free") return null;
    const monthly12 = plan.monthlyPrice * 12;
    const saved = monthly12 - plan.yearlyPrice;
    return `Save ₹${saved}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-violet-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: "28px 28px" }} />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5 text-sm text-indigo-200">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            Simple, transparent pricing
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Choose your plan</h1>
          <p className="text-indigo-200 text-lg max-w-xl mx-auto">
            Start free, upgrade when you're ready. Cancel anytime.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="flex items-center bg-white/10 border border-white/20 rounded-xl p-1 gap-1">
              {["weekly", "monthly", "yearly"].map((b) => (
                <button
                  key={b}
                  onClick={() => setBilling(b)}
                  className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all capitalize ${
                    billing === b ? "bg-white text-indigo-700 shadow" : "text-indigo-200 hover:text-white"
                  }`}
                >
                  {b}
                  {b === "yearly" && <span className="ml-1.5 text-xs bg-green-500 text-white px-1.5 py-0.5 rounded-full">-58%</span>}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Plans */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-2xl border-2 ${
                plan.badge === "Most Popular" ? "border-indigo-400 shadow-xl shadow-indigo-100" : "border-gray-100"
              } overflow-hidden relative`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className={`absolute top-0 left-0 right-0 py-1.5 text-center text-xs font-bold text-white bg-gradient-to-r ${plan.gradient}`}>
                  {plan.badge}
                </div>
              )}

              <div className={`p-6 ${plan.badge ? "mt-7" : ""}`}>
                {/* Plan header */}
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-gradient-to-r ${plan.bgGradient} mb-4`}>
                  <span className="text-sm font-bold" style={{ color: plan.color }}>{plan.name}</span>
                </div>
                <p className="text-gray-500 text-sm mb-5">{plan.tagline}</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-gray-900">{getPrice(plan)}</span>
                    {plan.id !== "free" && (
                      <span className="text-gray-400 text-sm">{getPeriod()}</span>
                    )}
                  </div>
                  {billing === "yearly" && plan.id !== "free" && (
                    <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full mt-1 inline-block">
                      {getSavings(plan)}
                    </span>
                  )}
                  {plan.id === "free" && (
                    <span className="text-xs text-gray-400">Forever free</span>
                  )}
                </div>

                {/* CTA Button */}
                <Link
                  to={isAuthenticated ? plan.ctaTo : "/register"}
                  className={`block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all mb-6 ${
                    plan.id === "free"
                      ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      : `text-white bg-gradient-to-r ${plan.gradient} hover:opacity-90 shadow-md hover:-translate-y-0.5`
                  }`}
                >
                  {plan.cta}
                </Link>

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map(({ text, available }) => (
                    <div key={text} className={`flex items-start gap-2.5 text-sm ${available ? "text-gray-700" : "text-gray-300"}`}>
                      <span className={available ? "text-green-500 mt-0.5" : "text-gray-300 mt-0.5"}>
                        {available ? <CheckIcon /> : <CrossIcon />}
                      </span>
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-14">
          {[
            { icon: "🔒", text: "Secure payments" },
            { icon: "✅", text: "No hidden fees" },
            { icon: "↩️", text: "Cancel anytime" },
            { icon: "💳", text: "UPI, Cards, Net Banking" },
            { icon: "🔐", text: "256-bit SSL encryption" },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-sm text-gray-500">
              <span>{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Template comparison */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">What's included in each plan?</h2>
          <p className="text-gray-500 text-sm text-center mb-8">All plans include core resume building features</p>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-100">
              <div className="p-4 text-sm font-semibold text-gray-600">Feature</div>
              {["Free", "Premium", "Elite"].map((p) => (
                <div key={p} className="p-4 text-sm font-bold text-center text-gray-800">{p}</div>
              ))}
            </div>
            {[
              ["Templates", "7", "29", "32"],
              ["PDF Downloads", "2/month", "Unlimited", "Unlimited"],
              ["Resume Sections", "Basic", "All", "All"],
              ["AI Resume Review", "✗", "Score only", "Full AI"],
              ["Custom Colors", "✗", "✓", "✓"],
              ["Multiple Resumes", "1", "3", "Unlimited"],
              ["Support", "Community", "Email", "Priority"],
            ].map(([feature, free, premium, elite]) => (
              <div key={feature} className="grid grid-cols-4 border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <div className="p-4 text-sm text-gray-600">{feature}</div>
                {[free, premium, elite].map((val, i) => (
                  <div key={i} className="p-4 text-sm text-center font-medium text-gray-700">
                    {val === "✗" ? <span className="text-gray-300">✗</span> : val === "✓" ? <span className="text-green-500">✓</span> : val}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Frequently asked questions</h2>
          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm font-semibold text-gray-800">{q}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    className={`text-gray-400 transition-transform flex-shrink-0 ml-4 ${openFaq === i ? "rotate-180" : ""}`}>
                    <path d="m6 9 6 6 6-6" strokeLinecap="round" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-3">
                    {a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl p-10 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Still not sure?</h3>
          <p className="text-indigo-200 text-sm mb-6">Start with our free plan — no credit card required. Upgrade anytime.</p>
          <Link to="/register" className="inline-block bg-white text-indigo-700 font-bold px-8 py-3 rounded-xl hover:bg-indigo-50 transition-colors shadow-lg text-sm">
            Start for free →
          </Link>
        </div>
      </div>
    </div>
  );
}