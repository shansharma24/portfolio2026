"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const NAV = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        fontFamily: "Inter, system-ui, sans-serif",
        background: scrolled ? "rgba(0,0,0,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "background 0.4s ease",
      }}
    >
      {/* ── MAIN BAR: 3-column grid so logo=left, nav=center, icons=right always ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          height: "68px",
          paddingLeft: "48px",
          paddingRight: "48px",
        }}
      >
        {/* ── COL 1: LOGO (left-aligned) ── */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
          <a
            href="#home"
            onClick={(e) => scrollTo(e, "home")}
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <span
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontWeight: 700,
                fontStyle: "italic",
                fontSize: "20px",
                color: "#ffffff",
                letterSpacing: "1px",
                lineHeight: 1,
              }}
            >
              SS
            </span>
            {/* two-dot colon */}
            <span
              style={{
                display: "inline-flex",
                flexDirection: "column",
                gap: "3px",
                marginLeft: "3px",
                paddingBottom: "1px",
              }}
            >
              <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#fff", display: "block" }} />
              <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#fff", display: "block" }} />
            </span>
          </a>
        </div>

        {/* ── COL 2: NAV LINKS (truly centered, desktop only) ── */}
        <nav
          className="hidden md:flex"
          style={{ alignItems: "center", gap: "40px" }}
        >
          {NAV.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            return (
              <a
                key={item}
                href={`#${id}`}
                onClick={(e) => scrollTo(e, id)}
                style={{
                  position: "relative",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "11.5px",
                  fontWeight: isActive ? 500 : 400,
                  letterSpacing: "2.2px",
                  color: isActive ? "#ffffff" : "#777777",
                  textDecoration: "none",
                  paddingBottom: "6px",
                  whiteSpace: "nowrap",
                  transition: "color 0.25s ease",
                }}
              >
                {item.toUpperCase()}
                {isActive && (
                  <motion.span
                    layoutId="navUnderline"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "20px",
                      height: "1.5px",
                      background: "#ffffff",
                      borderRadius: "1px",
                      display: "block",
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* ── COL 3: ICONS + RESUME (right-aligned, desktop) + hamburger (mobile) ── */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>

          {/* Desktop right group */}
          <div
            className="hidden md:flex items-center"
            style={{ gap: "20px" }}
          >
            {/* GitHub */}
            <a
              href="https://github.com/shanexsharma"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{
                color: "rgba(255,255,255,0.8)",
                display: "flex",
                alignItems: "center",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
            >
              <FaGithub size={20} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/shanexsharma"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                color: "rgba(255,255,255,0.8)",
                display: "flex",
                alignItems: "center",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
            >
              <FaLinkedinIn size={20} />
            </a>

            {/* Resume pill */}
            <a
              href="/resume.pdf"
              download
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 22px",
                border: "1px solid rgba(255,255,255,0.75)",
                borderRadius: "100px",
                color: "#ffffff",
                fontFamily: "Inter, sans-serif",
                fontSize: "11.5px",
                fontWeight: 500,
                letterSpacing: "1.5px",
                textDecoration: "none",
                whiteSpace: "nowrap",
                transition: "background 0.25s ease, color 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#ffffff";
                e.currentTarget.style.color = "#000000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#ffffff";
              }}
            >
              RESUME
              <Download size={13} strokeWidth={2} style={{ flexShrink: 0 }} />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex md:hidden items-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              color: "#ffffff",
              cursor: "pointer",
              padding: "4px",
            }}
          >
            {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* ── SEPARATOR LINE ── */}
      <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.1)" }} />

      {/* ── MOBILE MENU ── */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          style={{
            background: "rgba(0,0,0,0.97)",
            backdropFilter: "blur(16px)",
            padding: "28px 48px 36px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {NAV.map((item) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;
              return (
                <a
                  key={item}
                  href={`#${id}`}
                  onClick={(e) => scrollTo(e, id)}
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "13px",
                    fontWeight: isActive ? 500 : 400,
                    letterSpacing: "3px",
                    color: isActive ? "#ffffff" : "#666666",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  {item.toUpperCase()}
                </a>
              );
            })}

            {/* Mobile bottom row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                paddingTop: "20px",
                marginTop: "4px",
                borderTop: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <a href="https://github.com/shanexsharma" target="_blank" rel="noopener noreferrer"
                style={{ color: "rgba(255,255,255,0.75)", display: "flex" }}>
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/shanexsharma" target="_blank" rel="noopener noreferrer"
                style={{ color: "rgba(255,255,255,0.75)", display: "flex" }}>
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="/resume.pdf"
                download
                style={{
                  marginLeft: "auto",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 20px",
                  border: "1px solid rgba(255,255,255,0.6)",
                  borderRadius: "100px",
                  color: "#ffffff",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "2px",
                  textDecoration: "none",
                }}
              >
                RESUME <Download size={12} strokeWidth={2} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
