
import { useEffect, useRef } from 'react'
import { animate } from 'popmotion'

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

interface UsePageAnimateOptions {
  imageDelay?: number
  statsDelay?: number
  childStaggerBase?: number
  childStaggerStep?: number
}

export function usePageAnimate(options: UsePageAnimateOptions = {}) {
  const {
    imageDelay = 0,
    statsDelay = 400,
    childStaggerBase = 200,
    childStaggerStep = 100,
  } = options

  const imgRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // ── Image slide in from left ──────────────────────────
    if (imgRef.current) {
      imgRef.current.style.opacity = '0'
      imgRef.current.style.transform = 'translateX(-40px)'

      setTimeout(() => {
        animate({
          from: 0,
          to: 1,
          duration: 1000,
          ease: easeOut,
          onUpdate: (v: number) => {
            if (!imgRef.current) return
            imgRef.current.style.opacity = String(v)
            imgRef.current.style.transform = `translateX(${(1 - v) * -40}px)`
          },
        })
      }, imageDelay)
    }

    // ── Stats fade up ─────────────────────────────────────
    if (statsRef.current) {
      statsRef.current.style.opacity = '0'
      statsRef.current.style.transform = 'translateY(16px)'

      setTimeout(() => {
        animate({
          from: 0,
          to: 1,
          duration: 600,
          ease: easeOut,
          onUpdate: (v: number) => {
            if (!statsRef.current) return
            statsRef.current.style.opacity = String(v)
            statsRef.current.style.transform = `translateY(${(1 - v) * 16}px)`
          },
        })
      }, statsDelay)
    }

    // ── Right side children stagger ───────────────────────
    if (rightRef.current) {
      const children = rightRef.current.querySelectorAll('.anim-child')

      children.forEach((el, i) => {
        const htmlEl = el as HTMLElement
        htmlEl.style.opacity = '0'
        htmlEl.style.transform = 'translateY(28px)'

        setTimeout(() => {
          animate({
            from: 0,
            to: 1,
            duration: 700,
            ease: easeOut,
            onUpdate: (v: number) => {
              htmlEl.style.opacity = String(v)
              htmlEl.style.transform = `translateY(${(1 - v) * 28}px)`
            },
          })
        }, childStaggerBase + i * childStaggerStep)
      })
    }
  }, [imageDelay, statsDelay, childStaggerBase, childStaggerStep])

  return { imgRef, rightRef, statsRef }
}