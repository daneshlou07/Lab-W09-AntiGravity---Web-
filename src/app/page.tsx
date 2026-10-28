"use client";

import React, { useState } from "react";
import { Check, ArrowDown, Share2, Printer, ShieldAlert, FileText, CheckCircle2 } from "lucide-react";

export default function ClaimReadyPage() {
  const [checkedSteps, setCheckedSteps] = useState<Record<number, boolean>>({});
  const [copied, setCopied] = useState(false);

  const toggleStep = (num: number) => {
    setCheckedSteps((prev) => ({
      ...prev,
      [num]: !prev[num],
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "CLAIM READY — Free Warranty Claim Checklist",
          text: "A warranty claim is decided on records. Keep yours, and ask for theirs in writing.",
          url: window.location.href,
        });
      } catch {
        // fallback or user cancelled
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const checkedCount = Object.values(checkedSteps).filter(Boolean).length;

  return (
    <div className="claim-ready-wrapper">
      {/* Ticker banner */}
      <div className="ticker-strip font-mono" role="marquee" aria-label="Claim Ready News Ticker">
        <div className="ticker-track">
          <span>CLAIM READY • A FREE CHECKLIST FOR ANYONE ABOUT TO FILE A WARRANTY CLAIM • CURATED BY DANESH LOU • </span>
          <span>A WARRANTY CLAIM IS DECIDED ON RECORDS • KEEP YOURS AND ASK FOR THEIRS IN WRITING • </span>
          <span>CLAIM READY • A FREE CHECKLIST FOR ANYONE ABOUT TO FILE A WARRANTY CLAIM • CURATED BY DANESH LOU • </span>
          <span>A WARRANTY CLAIM IS DECIDED ON RECORDS • KEEP YOURS AND ASK FOR THEIRS IN WRITING • </span>
        </div>
      </div>

      {/* Header: Exactly one line (logo, two links 'The 15 steps' & 'Key numbers', and Download button) */}
      <header className="site-header">
        <div className="shell header-row">
          <a href="#" className="logo-group">
            <div className="logo-icon">CR</div>
            <span className="logo-text">CLAIM READY</span>
            <span className="header-badge font-mono">Curated by Danesh Lou</span>
          </a>

          {/* Prompt 3 & 4: Two links hidden on mobile */}
          <nav className="nav-links" aria-label="Main Navigation">
            <a href="#checklist" className="nav-link">
              The 15 steps
            </a>
            <a href="#key-numbers" className="nav-link">
              Key numbers
            </a>
          </nav>

          <div className="header-actions">
            <a href="#download" className="btn-primary">
              Download <ArrowDown size={15} />
            </a>
          </div>
        </div>
      </header>

      <main id="main-content">
        {/* HERO SECTION */}
        <section className="section" style={{ paddingTop: "clamp(48px, 6vw, 96px)", paddingBottom: "clamp(56px, 7vw, 108px)" }}>
          <div className="shell">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "48px", alignItems: "center" }}>
              <div>
                <div style={{ marginBottom: "20px" }}>
                  <span className="pill-label font-mono">
                    <span className="pill-dot"></span>
                    WARRANTY GUIDE
                  </span>
                </div>

                <h1 className="headline-display" style={{ marginBottom: "20px" }}>
                  CLAIM READY
                </h1>

                <p className="lead-p" style={{ marginBottom: "32px", fontSize: "22px", color: "var(--color-on-surface)" }}>
                  A free checklist for anyone about to file a warranty claim.
                </p>

                <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
                  <a href="#checklist" className="btn-primary">
                    View the 15 Steps <ArrowDown size={16} />
                  </a>
                  <a href="#key-numbers" className="btn-ghost">
                    Key Numbers
                  </a>
                </div>
              </div>

              {/* Hero Preview Card */}
              <div>
                <div className="card-white" style={{ position: "relative", overflow: "hidden", borderLeft: "4px solid var(--color-primary)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
                    <span className="pill-label font-mono">ESSENTIAL CASE RECORD</span>
                    <span className="font-mono" style={{ fontSize: "12px", color: "var(--color-on-surface-muted)" }}>
                      EDITION 2026
                    </span>
                  </div>

                  <h3 className="headline-md" style={{ marginBottom: "12px", fontSize: "22px" }}>
                    A warranty claim is decided on records.
                  </h3>
                  <p style={{ color: "var(--color-on-surface-variant)", fontSize: "15px", marginBottom: "20px" }}>
                    Keep yours, and ask for theirs in writing. Follow 15 structured steps before, during, and after any technician visit.
                  </p>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "16px", borderTop: "1px solid var(--color-outline)", fontSize: "13px" }}>
                    <span style={{ fontWeight: 600, color: "var(--color-on-surface-strong)" }}>
                      Curator: Danesh Lou
                    </span>
                    <span style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                      100% Free Public Guide
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS IS FOR SECTION */}
        {/* Fix 3: Show full sentence once and remove the four device cards */}
        <section className="section section-muted">
          <div className="shell-narrow">
            <div style={{ textAlign: "left", marginBottom: "16px" }}>
              <span className="pill-label font-mono">
                <span className="pill-dot"></span>
                WHO THIS IS FOR
              </span>
            </div>

            <h2 className="headline-lg" style={{ marginBottom: "24px", color: "var(--color-on-surface-strong)" }}>
              Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty, and who wants the claim to be decided on facts, in writing.
            </h2>
          </div>
        </section>

        {/* THE IDEA IN ONE LINE SECTION */}
        <section className="section">
          <div className="shell">
            <div className="card-dark" style={{ textAlign: "center", padding: "clamp(48px, 6vw, 80px) clamp(24px, 4vw, 48px)" }}>
              <div style={{ marginBottom: "20px", display: "inline-block" }}>
                <span
                  className="font-mono"
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--color-primary-bright)",
                    background: "rgba(255, 77, 77, 0.12)",
                    padding: "6px 14px",
                    borderRadius: "9999px",
                    border: "1px solid rgba(255, 77, 77, 0.3)",
                  }}
                >
                  THE IDEA IN ONE LINE
                </span>
              </div>

              <blockquote style={{ maxWidth: "780px", margin: "0 auto" }}>
                <p
                  style={{
                    fontSize: "clamp(26px, 4vw, 40px)",
                    fontWeight: 800,
                    lineHeight: 1.25,
                    letterSpacing: "-0.03em",
                    color: "#ffffff",
                  }}
                >
                  “A warranty claim is decided on records. Keep yours, and ask for theirs in writing.”
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* THE 15 STEPS CHECKLIST */}
        <section id="checklist" className="section" style={{ backgroundColor: "#ffffff" }}>
          <div className="shell-narrow">
            <div style={{ marginBottom: "20px" }}>
              <span className="pill-label font-mono">
                <span className="pill-dot"></span>
                THE 15 STEPS
              </span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px", marginBottom: "48px" }}>
              <div>
                <h2 className="headline-lg">Step-by-step checklist</h2>
                <p style={{ color: "var(--color-on-surface-variant)", marginTop: "6px" }}>
                  Click any step to mark it completed as you prepare your claim.
                </p>
              </div>

              {checkedCount > 0 && (
                <div className="font-mono" style={{ fontSize: "13px", color: "var(--color-primary)", fontWeight: 600 }}>
                  Completed {checkedCount} of 15 steps
                </div>
              )}
            </div>

            {/* Phase 1: BEFORE ANYTHING GOES WRONG */}
            <div className="steps-phase">
              <div className="phase-header">
                <span className="phase-tag">PHASE 01</span>
                <h3 className="phase-title">BEFORE ANYTHING GOES WRONG</h3>
              </div>

              <div
                className={`step-card ${checkedSteps[1] ? "checked" : ""}`}
                onClick={() => toggleStep(1)}
              >
                <div className="step-checkbox">
                  {checkedSteps[1] && <Check size={16} strokeWidth={3} />}
                </div>
                <div className="step-num-badge">1</div>
                <div className="step-content">
                  <div className="step-title">Keep the invoice.</div>
                  <div className="step-body">
                    Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date.
                  </div>
                </div>
              </div>

              <div
                className={`step-card ${checkedSteps[2] ? "checked" : ""}`}
                onClick={() => toggleStep(2)}
              >
                <div className="step-checkbox">
                  {checkedSteps[2] && <Check size={16} strokeWidth={3} />}
                </div>
                <div className="step-num-badge">2</div>
                <div className="step-content">
                  <div className="step-title">Register the product.</div>
                  <div className="step-body">
                    Many brands ask you to register on their website or app; some add extra warranty when you do.
                  </div>
                </div>
              </div>

              <div
                className={`step-card ${checkedSteps[3] ? "checked" : ""}`}
                onClick={() => toggleStep(3)}
              >
                <div className="step-checkbox">
                  {checkedSteps[3] && <Check size={16} strokeWidth={3} />}
                </div>
                <div className="step-num-badge">3</div>
                <div className="step-content">
                  <div className="step-title">Read the warranty card once.</div>
                  <div className="step-body">
                    Note how long it lasts, what it covers, and what it excludes.
                  </div>
                </div>
              </div>

              <div
                className={`step-card ${checkedSteps[4] ? "checked" : ""}`}
                onClick={() => toggleStep(4)}
              >
                <div className="step-checkbox">
                  {checkedSteps[4] && <Check size={16} strokeWidth={3} />}
                </div>
                <div className="step-num-badge">4</div>
                <div className="step-content">
                  <div className="step-title">Record the condition.</div>
                  <div className="step-body">
                    Take a few dated photos of the product once it is installed or unboxed.
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2: WHEN THE FAULT APPEARS */}
            <div className="steps-phase">
              <div className="phase-header">
                <span className="phase-tag">PHASE 02</span>
                <h3 className="phase-title">WHEN THE FAULT APPEARS</h3>
              </div>

              <div
                className={`step-card ${checkedSteps[5] ? "checked" : ""}`}
                onClick={() => toggleStep(5)}
              >
                <div className="step-checkbox">
                  {checkedSteps[5] && <Check size={16} strokeWidth={3} />}
                </div>
                <div className="step-num-badge">5</div>
                <div className="step-content">
                  <div className="step-title">Record the fault.</div>
                  <div className="step-body">
                    Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can.
                  </div>
                </div>
              </div>

              <div
                className={`step-card ${checkedSteps[6] ? "checked" : ""}`}
                onClick={() => toggleStep(6)}
              >
                <div className="step-checkbox">
                  {checkedSteps[6] && <Check size={16} strokeWidth={3} />}
                </div>
                <div className="step-num-badge">6</div>
                <div className="step-content">
                  <div className="step-title">Raise the complaint in writing.</div>
                  <div className="step-body">
                    Use email, the brand&apos;s website or its app, not only a phone call, so there is a record.
                  </div>
                </div>
              </div>

              <div
                className={`step-card ${checkedSteps[7] ? "checked" : ""}`}
                onClick={() => toggleStep(7)}
              >
                <div className="step-checkbox">
                  {checkedSteps[7] && <Check size={16} strokeWidth={3} />}
                </div>
                <div className="step-num-badge">7</div>
                <div className="step-content">
                  <div className="step-title">Note every reference number.</div>
                  <div className="step-body">
                    Write down the complaint or ticket number, the date and the name of anyone you speak to.
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3: WHEN A TECHNICIAN VISITS */}
            <div className="steps-phase">
              <div className="phase-header">
                <span className="phase-tag">PHASE 03</span>
                <h3 className="phase-title">WHEN A TECHNICIAN VISITS</h3>
              </div>

              <div
                className={`step-card ${checkedSteps[8] ? "checked" : ""}`}
                onClick={() => toggleStep(8)}
              >
                <div className="step-checkbox">
                  {checkedSteps[8] && <Check size={16} strokeWidth={3} />}
                </div>
                <div className="step-num-badge">8</div>
                <div className="step-content">
                  <div className="step-title">Ask for the job sheet.</div>
                  <div className="step-body">
                    Ask the technician for a copy of the visit report or job sheet before they leave.
                  </div>
                </div>
              </div>

              <div
                className={`step-card ${checkedSteps[9] ? "checked" : ""}`}
                onClick={() => toggleStep(9)}
              >
                <div className="step-checkbox">
                  {checkedSteps[9] && <Check size={16} strokeWidth={3} />}
                </div>
                <div className="step-num-badge">9</div>
                <div className="step-content">
                  <div className="step-title">Ask what was tested.</div>
                  <div className="step-body">
                    Ask which test or instrument was used to reach the diagnosis.
                  </div>
                </div>
              </div>

              <div
                className={`step-card ${checkedSteps[10] ? "checked" : ""}`}
                onClick={() => toggleStep(10)}
              >
                <div className="step-checkbox">
                  {checkedSteps[10] && <Check size={16} strokeWidth={3} />}
                </div>
                <div className="step-num-badge">10</div>
                <div className="step-content">
                  <div className="step-title">Take your own photos.</div>
                  <div className="step-body">
                    Photograph the product and anything the technician points to, during the visit.
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 4: IF THE CLAIM IS REFUSED */}
            <div className="steps-phase">
              <div className="phase-header">
                <span className="phase-tag">PHASE 04</span>
                <h3 className="phase-title">IF THE CLAIM IS REFUSED</h3>
              </div>

              <div
                className={`step-card ${checkedSteps[11] ? "checked" : ""}`}
                onClick={() => toggleStep(11)}
              >
                <div className="step-checkbox">
                  {checkedSteps[11] && <Check size={16} strokeWidth={3} />}
                </div>
                <div className="step-num-badge">11</div>
                <div className="step-content">
                  <div className="step-title">Ask for the reason in writing.</div>
                  <div className="step-body">
                    Request a written explanation that names the exact cause and the evidence for it.
                  </div>
                </div>
              </div>

              <div
                className={`step-card ${checkedSteps[12] ? "checked" : ""}`}
                onClick={() => toggleStep(12)}
              >
                <div className="step-checkbox">
                  {checkedSteps[12] && <Check size={16} strokeWidth={3} />}
                </div>
                <div className="step-num-badge">12</div>
                <div className="step-content">
                  <div className="step-title">Ask for the technical report.</div>
                  <div className="step-body">
                    If the refusal rests on an inspection, ask for that inspection report.
                  </div>
                </div>
              </div>

              <div
                className={`step-card ${checkedSteps[13] ? "checked" : ""}`}
                onClick={() => toggleStep(13)}
              >
                <div className="step-checkbox">
                  {checkedSteps[13] && <Check size={16} strokeWidth={3} />}
                </div>
                <div className="step-num-badge">13</div>
                <div className="step-content">
                  <div className="step-title">Escalate inside the company.</div>
                  <div className="step-body">
                    Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number.
                  </div>
                </div>
              </div>

              <div
                className={`step-card ${checkedSteps[14] ? "checked" : ""}`}
                onClick={() => toggleStep(14)}
              >
                <div className="step-checkbox">
                  {checkedSteps[14] && <Check size={16} strokeWidth={3} />}
                </div>
                <div className="step-num-badge">14</div>
                <div className="step-content">
                  <div className="step-title">Keep it factual.</div>
                  <div className="step-body">
                    Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at.
                  </div>
                </div>
              </div>

              <div
                className={`step-card ${checkedSteps[15] ? "checked" : ""}`}
                onClick={() => toggleStep(15)}
              >
                <div className="step-checkbox">
                  {checkedSteps[15] && <Check size={16} strokeWidth={3} />}
                </div>
                <div className="step-num-badge">15</div>
                <div className="step-content">
                  <div className="step-title">Know your consumer helpline.</div>
                  <div className="step-body">
                    Most countries run a free consumer helpline or online complaint portal that can guide you on the next step.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KEY NUMBERS SECTION */}
        {/* Fix 1: KEY NUMBERS FOR THE PAGE heading is hidden */}
        <section id="key-numbers" className="section section-muted">
          <div className="shell">
            <div style={{ marginBottom: "32px", textAlign: "center" }}>
              <span className="pill-label font-mono">
                <span className="pill-dot"></span>
                BY THE NUMBERS
              </span>
            </div>

            <div className="stat-grid-container">
              <div className="stat-cell">
                <div className="stat-num">15</div>
                <div className="stat-desc">steps in the checklist.</div>
              </div>

              <div className="stat-cell">
                <div className="stat-num">4</div>
                <div className="stat-desc">records to keep before anything goes wrong.</div>
              </div>

              {/* Hot stat cell with red accent */}
              <div className="stat-cell stat-cell-hot">
                <div className="stat-num">1</div>
                <div className="stat-desc">rule: if it is not in writing, it did not happen.</div>
              </div>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION SECTION */}
        {/* Fix 1: CALL TO ACTION heading is hidden */}
        <section id="download" className="section">
          <div className="shell">
            <div className="card-callout" style={{ textAlign: "center", padding: "clamp(40px, 6vw, 64px) clamp(20px, 4vw, 40px)" }}>
              <div style={{ maxWidth: "680px", margin: "0 auto" }}>
                <h2 className="headline-md" style={{ marginBottom: "16px", color: "var(--color-primary-ink)" }}>
                  Download the checklist and keep it with your invoices.
                </h2>
                <p style={{ fontSize: "18px", color: "var(--color-primary-ink)", marginBottom: "32px" }}>
                  Share it with a friend who just bought something expensive.
                </p>

                <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
                  <button onClick={handlePrint} className="btn-primary" style={{ padding: "14px 28px" }}>
                    <Printer size={18} /> Print or Save as PDF
                  </button>
                  <button onClick={handleShare} className="btn-ghost" style={{ padding: "14px 28px" }}>
                    <Share2 size={18} /> {copied ? "Link Copied!" : "Share Checklist"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      {/* Fix 1: FOOTER NOTE heading is hidden */}
      <footer className="site-footer">
        <div className="shell">
          <div className="footer-top">
            <div className="footer-brand">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <div className="logo-icon" style={{ width: "26px", height: "26px", fontSize: "12px" }}>
                  CR
                </div>
                <span style={{ fontWeight: 800, fontSize: "17px", color: "var(--color-on-surface-strong)" }}>
                  CLAIM READY
                </span>
              </div>
              <p className="footer-note-text">
                Claim Ready is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country&apos;s consumer rules.
              </p>
            </div>

            <div style={{ textAlign: "right", minWidth: "200px" }}>
              <div className="font-mono" style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-on-surface-muted)", marginBottom: "8px" }}>
                Curated by
              </div>
              <div style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-on-surface-strong)" }}>
                Danesh Lou
              </div>
              <div className="font-mono" style={{ fontSize: "12px", color: "var(--color-primary)", marginTop: "4px" }}>
                Red &amp; Black Editorial Edition
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div>
              &copy; {new Date().getFullYear()} Claim Ready. Created with Google Antigravity.
            </div>
            <div style={{ display: "flex", gap: "24px" }}>
              <a href="#checklist" style={{ color: "inherit", textDecoration: "none" }}>
                The 15 Steps
              </a>
              <a href="#key-numbers" style={{ color: "inherit", textDecoration: "none" }}>
                Key Numbers
              </a>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Back to top ↑
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
