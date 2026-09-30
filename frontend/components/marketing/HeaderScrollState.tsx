"use client";

import { useEffect } from "react";

const HIDE_DISTANCE = 360;

export default function HeaderScrollState() {
  useEffect(() => {
    let frame = 0;

    const updateHeaderState = () => {
      frame = 0;

      const nav = document.querySelector<HTMLElement>(".site-header .desktop-nav");
      const patientButton = document.querySelector<HTMLElement>(".site-header .patient-cta");
      const progress = Math.min(Math.max(window.scrollY / HIDE_DISTANCE, 0), 1);

      if (nav && patientButton) {
        const navRect = nav.getBoundingClientRect();
        const buttonRect = patientButton.getBoundingClientRect();
        const hideDistance = Math.max(buttonRect.left - navRect.left + 18, navRect.width + 18);

        document.body.style.setProperty("--header-nav-progress", progress.toString());
        document.body.style.setProperty("--header-nav-hide-x", `${hideDistance}px`);
      }

      document.body.classList.toggle("header-nav-collapsed", progress > 0.98);
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateHeaderState);
    };

    const logoLink = document.querySelector<HTMLAnchorElement>(".site-header .brand");
    const handleLogoClick = (event: MouseEvent) => {
      event.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.requestAnimationFrame(updateHeaderState);
    };

    updateHeaderState();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    logoLink?.addEventListener("click", handleLogoClick);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      logoLink?.removeEventListener("click", handleLogoClick);
      document.body.classList.remove("header-nav-collapsed");
      document.body.style.removeProperty("--header-nav-progress");
      document.body.style.removeProperty("--header-nav-hide-x");
    };
  }, []);

  return null;
}