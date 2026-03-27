// SVG geometric art for each project card

import type { JSX } from "react"

export function ArtMultisig() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" opacity="0.5">
      <polygon points="200,50 400,200 100,250" fill="none" stroke="#333" strokeWidth="1"/>
      <polygon points="400,200 600,50 700,250" fill="none" stroke="#333" strokeWidth="1"/>
      <polygon points="300,20 500,180 200,280" fill="none" stroke="#444" strokeWidth="0.5"/>
      <line x1="0" y1="150" x2="800" y2="150" stroke="#2a2a2a" strokeWidth="1"/>
      <circle cx="400" cy="150" r="80" fill="none" stroke="#2d2d2d" strokeWidth="1"/>
    </svg>
  )
}

export function ArtBelz() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" opacity="0.6">
      <circle cx="200" cy="140" r="100" fill="none" stroke="#333" strokeWidth="1"/>
      <circle cx="200" cy="140" r="70" fill="none" stroke="#2d2d2d" strokeWidth="1"/>
      <circle cx="200" cy="140" r="40" fill="none" stroke="#2a2a2a" strokeWidth="1"/>
      <circle cx="200" cy="140" r="10" fill="#222"/>
      <ellipse cx="200" cy="140" rx="120" ry="40" fill="none" stroke="#3a3a3a" strokeWidth="1"/>
    </svg>
  )
}

export function ArtVoid() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" opacity="0.6">
      <g fill="none" stroke="#2a2a2a" strokeWidth="0.8">
        <circle cx="80" cy="80" r="4" fill="#333"/><circle cx="160" cy="40" r="4" fill="#333"/>
        <circle cx="240" cy="100" r="4" fill="#333"/><circle cx="320" cy="60" r="4" fill="#333"/>
        <circle cx="120" cy="160" r="4" fill="#333"/><circle cx="280" cy="180" r="4" fill="#333"/>
        <circle cx="200" cy="220" r="4" fill="#333"/>
        <line x1="80" y1="80" x2="160" y2="40"/><line x1="160" y1="40" x2="240" y2="100"/>
        <line x1="240" y1="100" x2="320" y2="60"/><line x1="80" y1="80" x2="120" y2="160"/>
        <line x1="120" y1="160" x2="200" y2="220"/><line x1="200" y1="220" x2="280" y2="180"/>
        <line x1="280" y1="180" x2="240" y2="100"/><line x1="160" y1="40" x2="120" y2="160"/>
      </g>
    </svg>
  )
}

export function ArtKinetic() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" opacity="0.5">
      <path d="M 50 200 Q 100 50 200 140 Q 300 230 350 80" fill="none" stroke="#333" strokeWidth="1.5"/>
      <path d="M 50 220 Q 120 70 220 160 Q 310 240 360 100" fill="none" stroke="#2a2a2a" strokeWidth="1"/>
      <path d="M 50 180 Q 80 30 180 120 Q 290 220 340 60" fill="none" stroke="#2d2d2d" strokeWidth="0.8"/>
    </svg>
  )
}

export function ArtNexus() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" opacity="0.4">
      <rect x="60" y="60" width="80" height="80" fill="none" stroke="#333" strokeWidth="1"/>
      <rect x="260" y="60" width="80" height="80" fill="none" stroke="#333" strokeWidth="1"/>
      <rect x="160" y="160" width="80" height="80" fill="none" stroke="#333" strokeWidth="1"/>
      <line x1="140" y1="100" x2="260" y2="100" stroke="#2a2a2a" strokeWidth="0.8"/>
      <line x1="100" y1="140" x2="200" y2="160" stroke="#2a2a2a" strokeWidth="0.8"/>
      <line x1="300" y1="140" x2="200" y2="160" stroke="#2a2a2a" strokeWidth="0.8"/>
    </svg>
  )
}

export function ArtSentinel() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" opacity="0.4">
      <circle cx="200" cy="140" r="90" fill="none" stroke="#2a2a2a" strokeWidth="1" strokeDasharray="4 4"/>
      <circle cx="200" cy="140" r="60" fill="none" stroke="#2d2d2d" strokeWidth="1"/>
      <polygon points="200,80 245,115 228,165 172,165 155,115" fill="none" stroke="#333" strokeWidth="1"/>
      <circle cx="200" cy="140" r="12" fill="none" stroke="#3a3a3a" strokeWidth="1"/>
    </svg>
  )
}

// Map art class to component
export const artMap: Record<string, () => JSX.Element> = {
  'art-multisig': ArtMultisig,
  'art-belz': ArtBelz,
  'art-void': ArtVoid,
  'art-kinetic': ArtKinetic,
  'art-nexus': ArtNexus,
  'art-sentinel': ArtSentinel,
}

// Background gradient per art
export const artBgMap: Record<string, string> = {
  'art-multisig': 'radial-gradient(ellipse at 30% 60%, #1a2a1a 0%, #0d0d0d 70%)',
  'art-belz': 'radial-gradient(ellipse at 70% 40%, #1a1020 0%, #0d0d0d 70%)',
  'art-void': 'radial-gradient(ellipse at 50% 80%, #0f1a1a 0%, #0d0d0d 70%)',
  'art-nexus': 'radial-gradient(ellipse at 20% 30%, #1a1508 0%, #0d0d0d 70%)',
  'art-kinetic': 'radial-gradient(ellipse at 80% 70%, #1a0f0f 0%, #0d0d0d 70%)',
  'art-sentinel': 'radial-gradient(ellipse at 40% 20%, #0f0f1a 0%, #0d0d0d 70%)',
}