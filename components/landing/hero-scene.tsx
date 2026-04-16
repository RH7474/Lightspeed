"use client"

import { useEffect, useState } from "react"

export function HeroScene() {
  const [phase, setPhase] = useState(0)
  const [laserActive, setLaserActive] = useState(false)
  const [laserDone, setLaserDone] = useState(false)
  const [markSweepActive, setMarkSweepActive] = useState(false)
  const [glintActive, setGlintActive] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const onMotionChange = () => setReducedMotion(media.matches)

    onMotionChange()
    media.addEventListener("change", onMotionChange)

    const markRevealAt = reducedMotion ? 80 : 180
    const textRevealAt = reducedMotion ? 780 : 2280
    const laserFadeAt = reducedMotion ? 1280 : 3780
    const markSweepAt = reducedMotion ? 240 : 580
    const markSweepFadeAt = reducedMotion ? 700 : 1460
    const glintAt = reducedMotion ? 1290 : 3790
    const glintFadeAt = reducedMotion ? 1720 : 4480

    const timers = [
      setTimeout(() => setPhase(1), markRevealAt),
      setTimeout(() => setMarkSweepActive(true), markSweepAt),
      setTimeout(() => setMarkSweepActive(false), markSweepFadeAt),
      setTimeout(() => setPhase(2), textRevealAt),
      setTimeout(() => {
        setLaserDone(false)
        setLaserActive(true)
      }, textRevealAt),
      setTimeout(() => {
        setLaserActive(false)
        setLaserDone(true)
      }, laserFadeAt),
      setTimeout(() => setGlintActive(true), glintAt),
      setTimeout(() => setGlintActive(false), glintFadeAt),
    ]

    return () => {
      timers.forEach(clearTimeout)
      media.removeEventListener("change", onMotionChange)
    }
  }, [reducedMotion])

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border/20 bg-white">
      {/* MARK - incoming light-wave from left to right */}
      <div className="absolute left-1/2 top-[6%] w-[72%] max-w-[430px] -translate-x-1/2">
        <div className="relative aspect-square [perspective:1500px]">
          <div
            className="absolute inset-0 [transform-style:preserve-3d] transition-[transform,opacity,filter] duration-[2100ms] ease-[cubic-bezier(0.14,0.92,0.22,1)]"
            style={{
              opacity: phase >= 1 ? 1 : 0,
              transform:
                phase >= 1
                  ? "translateX(0px) rotateY(0deg) rotateX(0deg) scale(1)"
                  : "translateX(-290px) rotateY(-86deg) rotateX(34deg) scale(0.5)",
              filter: phase >= 1 ? "blur(0px)" : "blur(1px)",
            }}
          >
            <img
              src="/lightspeed-mark.png"
              alt="Lightspeed mark"
              className="absolute inset-0 h-full w-full object-contain mix-blend-multiply [transform:translateZ(42px)]"
            />
          </div>

          <div
            className={`pointer-events-none absolute inset-x-[10%] bottom-[7%] h-[9%] rounded-full bg-black/18 blur-lg transition-opacity duration-[900ms] ${
              phase >= 1 ? "opacity-55" : "opacity-0"
            }`}
          />

          <div
            className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${
              phase >= 1 ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute left-[18%] top-[12%] h-[26%] w-[16%] rounded-full bg-white/65 blur-xl" />
            <div className="absolute right-[20%] bottom-[16%] h-[20%] w-[22%] rounded-full bg-white/35 blur-2xl" />
          </div>

          <div
            className={`pointer-events-none absolute top-[14%] left-[-12%] h-[62%] w-[34%] bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.9),rgba(255,255,255,0))] blur-[7px] transition-all duration-[820ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              markSweepActive ? "translate-x-[260%] opacity-80" : "translate-x-0 opacity-0"
            }`}
          />
        </div>
      </div>

      {/* TEXT - laser written from rear left to right */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[10%] flex justify-center">
        <div className="relative h-[112px] w-[82%] max-w-[560px] min-w-[320px] [perspective:1300px]">
          <div
            className="absolute inset-0 z-0 overflow-hidden transition-[clip-path,transform,opacity,filter] duration-[1500ms] ease-[cubic-bezier(0.16,0.92,0.24,1)]"
            style={{
              clipPath:
                laserActive || laserDone
                  ? "inset(0 0 0 0)"
                  : "inset(0 100% 0 0)",
              transform:
                phase >= 2
                  ? "translateZ(0px) translateX(0px)"
                  : "translateZ(-210px) translateX(-26px)",
              opacity: phase >= 2 ? 1 : 0,
              filter: phase >= 2 ? "blur(0px)" : "blur(3px)",
            }}
          >
            <img
              src="/lightspeed-text.png"
              alt="Lightspeed Optical Workshops"
              className="h-full w-full object-contain mix-blend-multiply"
            />
          </div>

          <div
            className={`absolute top-[6%] z-10 h-[82%] w-[16px] rounded-full bg-white blur-[1px] mix-blend-screen ${
              laserActive
                ? "left-[100%] opacity-100 transition-all duration-[1500ms] ease-[cubic-bezier(0.16,0.92,0.24,1)]"
                : laserDone
                  ? "left-[100%] opacity-0"
                  : "left-[0%] opacity-0"
            }`}
            style={{ boxShadow: "0 0 16px rgba(255,255,255,0.95), 0 0 32px rgba(255,255,255,0.8)" }}
          />

          <div
            className={`absolute top-[13%] left-[-2%] z-10 h-[56%] w-[92%] bg-[linear-gradient(90deg,rgba(255,255,255,1),rgba(255,255,255,0.62),transparent)] blur-xl mix-blend-screen ${
              laserActive
                ? "translate-x-[248%] opacity-100 transition-all duration-[1500ms] ease-[cubic-bezier(0.16,0.92,0.24,1)]"
                : laserDone
                  ? "translate-x-[248%] opacity-0"
                  : "translate-x-0 opacity-0"
            }`}
          />

          <div
            className={`absolute top-[13%] left-[-10%] z-10 h-[56%] bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,1),rgba(255,255,255,0.42),rgba(255,255,255,0))] blur-[9px] mix-blend-screen ${
              laserActive
                ? "opacity-100 transition-[transform,opacity] duration-[1500ms] ease-[cubic-bezier(0.16,0.92,0.24,1)]"
                : laserDone
                  ? "opacity-0"
                  : "opacity-0"
            }`}
            style={{
              width: "44%",
              transform: laserActive
                ? "translateX(268%) scaleX(0.2)"
                : laserDone
                  ? "translateX(268%) scaleX(0.2)"
                  : "translateX(0%) scaleX(1)",
              transformOrigin: "left center",
              opacity: laserActive ? 1 : 0,
            }}
          />

          <div
            className="pointer-events-none absolute top-[42%] z-10 h-[5px] w-[22px] rounded-full bg-white blur-[0.5px] mix-blend-screen transition-[left,opacity] duration-[1500ms] ease-[cubic-bezier(0.16,0.92,0.24,1)]"
            style={{
              left: laserActive || laserDone ? "calc(100% - 11px)" : "0%",
              opacity: laserActive ? 1 : 0,
            }}
          />

          <div
            className={`pointer-events-none absolute left-[96%] top-[46%] z-20 h-8 w-8 -translate-x-1/2 -translate-y-1/2 transition-all duration-[520ms] ease-out ${
              glintActive ? "scale-100 opacity-100" : "scale-50 opacity-0"
            }`}
          >
            <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 rounded-full bg-white blur-[0.5px]" />
            <div className="absolute top-1/2 left-0 h-[2px] w-full -translate-y-1/2 rounded-full bg-white blur-[0.5px]" />
            <div className="absolute inset-[14%] rounded-full bg-white" />
            <div className="absolute inset-0 rounded-full bg-white/75 blur-[7px]" />
          </div>

          <div
            className={`absolute inset-[8%] bg-black/10 blur-2xl transition-opacity duration-[900ms] ${
              phase >= 2 ? "opacity-34" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </div>
  )
}