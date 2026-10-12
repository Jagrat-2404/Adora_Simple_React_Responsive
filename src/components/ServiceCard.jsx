import { Link } from 'react-router-dom'
import Icon from './Icon'

/**
 * Custom Vector Graphics Embedded Directly in the Description Section
 */
function ServiceDescriptionVectors({ serviceId }) {
  if (serviceId === 'social-media') {
    return (
      <div className="service-desc-vectors-strip" aria-label="Social media delivery vectors">
        <div className="desc-vector-pill">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="desc-vector-icon">
            <rect x="2" y="2" width="20" height="20" rx="6" stroke="#C55F46" strokeWidth="2" />
            <circle cx="12" cy="12" r="4.5" stroke="#C55F46" strokeWidth="2" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="#C55F46" />
          </svg>
          <span>Scroll-Stop Reels</span>
        </div>
        <div className="desc-vector-pill">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="desc-vector-icon">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#C55F46" />
          </svg>
          <span>Organic Likes & Shares</span>
        </div>
        <div className="desc-vector-pill">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="desc-vector-icon">
            <path d="M3 13h4l3-8 4 14 3-8h4" stroke="#2F5E48" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Viral Reach Spikes</span>
        </div>
        <div className="desc-vector-pill">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="desc-vector-icon">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="#C55F46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Direct DM Enquiries</span>
        </div>
      </div>
    )
  }

  if (serviceId === 'meta-ads') {
    return (
      <div className="service-desc-vectors-strip" aria-label="Meta ads delivery vectors">
        <div className="desc-vector-pill">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="desc-vector-icon">
            <circle cx="12" cy="12" r="9" stroke="#C55F46" strokeWidth="2" />
            <circle cx="12" cy="12" r="5" stroke="#2F5E48" strokeWidth="2" />
            <circle cx="12" cy="12" r="2" fill="#C55F46" />
          </svg>
          <span>Pin-Code Targeting</span>
        </div>
        <div className="desc-vector-pill">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="desc-vector-icon">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" stroke="#2F5E48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>High-Intent Funnel</span>
        </div>
        <div className="desc-vector-pill">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="desc-vector-icon">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884" fill="#25D366" />
          </svg>
          <span>Direct WhatsApp Leads</span>
        </div>
        <div className="desc-vector-pill">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="desc-vector-icon">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="#C55F46" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>3.8x Target ROAS</span>
        </div>
      </div>
    )
  }

  if (serviceId === 'graphic-design') {
    return (
      <div className="service-desc-vectors-strip" aria-label="Graphic design delivery vectors">
        <div className="desc-vector-pill">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="desc-vector-icon">
            <path d="M12 19l7-7 3 3-7 7-3-3z" stroke="#C55F46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" stroke="#2F5E48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="11" cy="11" r="2" fill="#C55F46" />
          </svg>
          <span>Precision Vector Paths</span>
        </div>
        <div className="desc-vector-pill">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="desc-vector-icon">
            <circle cx="12" cy="12" r="10" stroke="#2F5E48" strokeWidth="2" />
            <circle cx="8" cy="10" r="1.5" fill="#C55F46" />
            <circle cx="12" cy="8" r="1.5" fill="#2F5E48" />
            <circle cx="16" cy="10" r="1.5" fill="#F2B69D" />
            <circle cx="12" cy="16" r="2" fill="#D4AF37" />
          </svg>
          <span>Harmonized Palette</span>
        </div>
        <div className="desc-vector-pill">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="desc-vector-icon">
            <polyline points="4 7 4 4 20 4 20 7" stroke="#C55F46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="9" y1="20" x2="15" y2="20" stroke="#C55F46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="12" y1="4" x2="12" y2="20" stroke="#2F5E48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Bespoke Typography</span>
        </div>
        <div className="desc-vector-pill">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="desc-vector-icon">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="#2F5E48" strokeWidth="2" />
            <circle cx="8.5" cy="8.5" r="1.5" fill="#C55F46" />
            <polyline points="21 15 16 10 5 21" stroke="#C55F46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>300 DPI Print + Digital</span>
        </div>
      </div>
    )
  }

  // Website Development Description Vectors
  return (
    <div className="service-desc-vectors-strip" aria-label="Website development delivery vectors">
      <div className="desc-vector-pill">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="desc-vector-icon">
          <polyline points="16 18 22 12 16 6" stroke="#C55F46" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="8 6 2 12 8 18" stroke="#2F5E48" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>Clean Modern Code</span>
      </div>
      <div className="desc-vector-pill">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="desc-vector-icon">
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="#2F5E48" strokeWidth="2" />
          <line x1="8" y1="21" x2="16" y2="21" stroke="#2F5E48" strokeWidth="2" strokeLinecap="round" />
          <line x1="12" y1="17" x2="12" y2="21" stroke="#2F5E48" strokeWidth="2" />
        </svg>
        <span>100% Mobile Responsive</span>
      </div>
      <div className="desc-vector-pill">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="desc-vector-icon">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="#F2B69D" stroke="#C55F46" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
        <span>&lt; 1.2s Fast Load Speed</span>
      </div>
      <div className="desc-vector-pill">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="desc-vector-icon">
          <rect x="3" y="11" width="18" height="11" rx="2" stroke="#2F5E48" strokeWidth="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#C55F46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>SSL &amp; SEO-Optimized</span>
      </div>
    </div>
  )
}

/**
 * Custom Animated Terminal Vector Illustration Canvas for the Right Column
 */
function ServiceVectors({ serviceId }) {
  if (serviceId === 'social-media') {
    return (
      <div className="service-vector-canvas social-media-vector-canvas" aria-hidden="true">
        <svg viewBox="0 0 460 360" className="service-svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="smGrad1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#C55F46" />
              <stop offset="100%" stopColor="#F2B69D" />
            </linearGradient>
            <linearGradient id="smPhoneGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1E382B" />
              <stop offset="100%" stopColor="#132E22" />
            </linearGradient>
            <filter id="vectorGlow1" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Ambient vector glow backdrop */}
          <circle cx="230" cy="180" r="130" fill="rgba(242, 182, 157, 0.16)" />
          <circle cx="340" cy="90" r="60" fill="rgba(47, 79, 61, 0.12)" />

          {/* Central Smartphone Frame */}
          <rect x="135" y="30" width="190" height="300" rx="26" fill="url(#smPhoneGrad)" stroke="rgba(255, 255, 255, 0.18)" strokeWidth="2" />
          
          {/* Phone Screen Glass */}
          <rect x="145" y="44" width="170" height="272" rx="18" fill="#173426" />
          
          {/* Dynamic Island / Notch */}
          <rect x="200" y="52" width="60" height="12" rx="6" fill="#0C1B14" />
          <circle cx="248" cy="58" r="3" fill="#2F5E48" />

          {/* Reel Video Player Card Vector */}
          <rect x="155" y="74" width="150" height="150" rx="12" fill="rgba(255, 255, 255, 0.08)" stroke="rgba(242, 182, 157, 0.3)" />
          <path d="M215 135 L245 152 L215 169 Z" fill="#F2B69D" />

          {/* Engagement Waves Vector */}
          <path d="M165 195 Q 185 180, 205 198 T 245 195 T 285 188" stroke="#F2B69D" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M165 205 Q 185 190, 205 208 T 245 205 T 285 198" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />

          {/* Mini Reel UI Controls */}
          <rect x="155" y="235" width="80" height="8" rx="4" fill="rgba(255, 255, 255, 0.7)" />
          <rect x="155" y="249" width="115" height="6" rx="3" fill="rgba(255, 255, 255, 0.3)" />

          {/* Floating Vector Badge 1: Likes & Reach */}
          <g transform="translate(40, 95)" filter="url(#vectorGlow1)">
            <rect x="0" y="0" width="125" height="52" rx="12" fill="#FFFFFF" stroke="rgba(47, 79, 61, 0.14)" />
            <circle cx="24" cy="26" r="14" fill="#FFEAE4" />
            <path d="M20 23 C20 20, 24 20, 24 23 C24 20, 28 20, 28 23 C28 27, 24 29, 24 30 C24 29, 20 27, 20 23 Z" fill="#C55F46" />
            <text x="46" y="23" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="13" fill="#173426">+2,450</text>
            <text x="46" y="37" fontFamily="Space Grotesk, sans-serif" fontSize="9.5" fill="#6B7280">Reel Likes</text>
          </g>

          {/* Floating Vector Badge 2: Local Comment Lead */}
          <g transform="translate(290, 160)" filter="url(#vectorGlow1)">
            <rect x="0" y="0" width="135" height="56" rx="12" fill="#FFFFFF" stroke="rgba(47, 79, 61, 0.14)" />
            <circle cx="24" cy="28" r="14" fill="#E8F4EC" />
            <path d="M19 24 H29 V31 H22 L19 33 Z" fill="#2F5E48" />
            <text x="46" y="24" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="11" fill="#173426">Direct Enquiry</text>
            <text x="46" y="38" fontFamily="Space Grotesk, sans-serif" fontSize="9" fill="#4B5563">&quot;Location details please?&quot;</text>
          </g>

          {/* Floating Vector Badge 3: 3x Reach Growth */}
          <g transform="translate(60, 240)">
            <rect x="0" y="0" width="110" height="42" rx="10" fill="#1E382B" stroke="#F2B69D" strokeWidth="1.2" />
            <text x="14" y="20" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="13" fill="#F2B69D">3x Reach</text>
            <text x="14" y="33" fontFamily="Space Grotesk, sans-serif" fontSize="9" fill="#D1D5DB">in 30 Days</text>
          </g>
        </svg>
      </div>
    )
  }

  if (serviceId === 'meta-ads') {
    return (
      <div className="service-vector-canvas meta-ads-vector-canvas" aria-hidden="true">
        <svg viewBox="0 0 460 360" className="service-svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="targetGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2F5E48" />
              <stop offset="100%" stopColor="#17382B" />
            </linearGradient>
            <linearGradient id="goldArc" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#F2B69D" />
              <stop offset="100%" stopColor="#C55F46" />
            </linearGradient>
          </defs>

          {/* Radar Background Cones */}
          <circle cx="230" cy="180" r="130" stroke="rgba(47, 79, 61, 0.18)" strokeDasharray="4 4" />
          <circle cx="230" cy="180" r="95" stroke="rgba(47, 79, 61, 0.25)" />
          <circle cx="230" cy="180" r="55" stroke="#C55F46" strokeWidth="1.5" />
          
          {/* Radar Sweep Lines */}
          <line x1="230" y1="40" x2="230" y2="320" stroke="rgba(47, 79, 61, 0.12)" />
          <line x1="90" y1="180" x2="370" y2="180" stroke="rgba(47, 79, 61, 0.12)" />

          {/* Pulsing Target Core */}
          <circle cx="230" cy="180" r="18" fill="#C55F46" fillOpacity="0.2" />
          <circle cx="230" cy="180" r="8" fill="#C55F46" />

          {/* Funnel Matrix Graphic */}
          <g transform="translate(145, 60)">
            <path d="M0 0 L170 0 L135 60 L35 60 Z" fill="rgba(255, 255, 255, 0.9)" stroke="rgba(47, 79, 61, 0.15)" />
            <text x="85" y="24" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="11" fill="#17382B">125,000+ LOCAL REACH</text>
            <text x="85" y="44" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="9" fill="#6B7280">Targeted Surat Demographics</text>
          </g>

          {/* Funnel Midstage: Clicks */}
          <g transform="translate(170, 130)">
            <path d="M0 0 L120 0 L95 48 L25 48 Z" fill="rgba(242, 182, 157, 0.25)" stroke="#C55F46" strokeWidth="1.2" />
            <text x="60" y="22" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="11" fill="#C55F46">4,200 CLICKS</text>
            <text x="60" y="38" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="8.5" fill="#17382B">High Buyer Intent</text>
          </g>

          {/* Funnel Bottom: Direct Leads */}
          <g transform="translate(190, 190)">
            <rect x="0" y="0" width="80" height="38" rx="8" fill="#17382B" />
            <text x="40" y="18" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="11" fill="#F2B69D">280+ LEADS</text>
            <text x="40" y="30" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="7.5" fill="#E5E7EB">WhatsApp / Calls</text>
          </g>

          {/* Floating Metric Dial Vector (Top Left) */}
          <g transform="translate(30, 80)">
            <rect x="0" y="0" width="120" height="66" rx="14" fill="#FFFFFF" stroke="rgba(47, 79, 61, 0.14)" />
            <path d="M22 45 A 22 22 0 0 1 58 45" stroke="rgba(47, 79, 61, 0.16)" strokeWidth="5" strokeLinecap="round" />
            <path d="M22 45 A 22 22 0 0 1 50 28" stroke="url(#goldArc)" strokeWidth="5" strokeLinecap="round" />
            <text x="68" y="32" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="16" fill="#17382B">3.8x</text>
            <text x="68" y="46" fontFamily="Space Grotesk, sans-serif" fontSize="9.5" fill="#6B7280">Avg. ROAS</text>
          </g>

          {/* Floating WhatsApp Notification Vector (Bottom Right) */}
          <g transform="translate(290, 230)">
            <rect x="0" y="0" width="145" height="58" rx="14" fill="#FFFFFF" stroke="#25D366" strokeWidth="1.5" />
            <circle cx="26" cy="29" r="13" fill="#25D366" />
            <path d="M21 26 C21 29 24 32 27 32 C28 32 30 31 31 30 L29 28 L27 29 C25 28 24 27 23 25 L24 23 L22 21 C21 22 21 24 21 26 Z" fill="#FFFFFF" />
            <text x="48" y="24" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="11.5" fill="#17382B">New Lead Alert</text>
            <text x="48" y="38" fontFamily="Space Grotesk, sans-serif" fontSize="9" fill="#4B5563">WhatsApp inquiry received</text>
          </g>
        </svg>
      </div>
    )
  }

  if (serviceId === 'graphic-design') {
    return (
      <div className="service-vector-canvas graphic-design-vector-canvas" aria-hidden="true">
        <svg viewBox="0 0 460 360" className="service-svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="artboardGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#FAF7F2" />
            </linearGradient>
            <linearGradient id="swatchCoral" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FF9B82" />
              <stop offset="100%" stopColor="#C55F46" />
            </linearGradient>
          </defs>

          {/* Artboard Base Canvas */}
          <rect x="70" y="40" width="320" height="260" rx="16" fill="url(#artboardGrad)" stroke="rgba(47, 79, 61, 0.16)" strokeWidth="1.5" />

          {/* Isometric Alignment Grid lines */}
          <line x1="70" y1="100" x2="390" y2="100" stroke="rgba(47, 79, 61, 0.08)" strokeDasharray="3 3" />
          <line x1="70" y1="180" x2="390" y2="180" stroke="rgba(47, 79, 61, 0.08)" strokeDasharray="3 3" />
          <line x1="170" y1="40" x2="170" y2="300" stroke="rgba(47, 79, 61, 0.08)" strokeDasharray="3 3" />
          <line x1="290" y1="40" x2="290" y2="300" stroke="rgba(47, 79, 61, 0.08)" strokeDasharray="3 3" />

          {/* Smooth Bezier Vector Curve with control handles */}
          <path d="M100 230 C 140 90, 240 280, 360 110" stroke="#C55F46" strokeWidth="3" strokeLinecap="round" />
          
          {/* Bezier Vector Control Points */}
          <circle cx="100" cy="230" r="5" fill="#FFFFFF" stroke="#C55F46" strokeWidth="2.5" />
          <circle cx="360" cy="110" r="5" fill="#FFFFFF" stroke="#C55F46" strokeWidth="2.5" />
          
          {/* Vector Pen Tool Icon */}
          <g transform="translate(225, 175) rotate(-35)">
            <path d="M0 0 L10 -25 L22 -15 L12 10 Z" fill="#17382B" />
            <path d="M0 0 L3 -8 L8 -3 Z" fill="#C55F46" />
            <circle cx="0" cy="0" r="2" fill="#FFFFFF" />
          </g>

          {/* Floating Color Swatch Palette Vector (Top Left) */}
          <g transform="translate(30, 50)">
            <rect x="0" y="0" width="130" height="52" rx="12" fill="#FFFFFF" stroke="rgba(47, 79, 61, 0.15)" />
            <circle cx="22" cy="26" r="10" fill="url(#swatchCoral)" />
            <circle cx="48" cy="26" r="10" fill="#17382B" />
            <circle cx="74" cy="26" r="10" fill="#F2B69D" />
            <circle cx="100" cy="26" r="10" fill="#D4AF37" />
          </g>

          {/* Typography Specimen Vector (Bottom Left) */}
          <g transform="translate(90, 205)">
            <text x="0" y="30" fontFamily="Playfair Display, Georgia, serif" fontStyle="italic" fontWeight="600" fontSize="36" fill="#17382B">Aa</text>
            <text x="56" y="24" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="10" fill="#C55F46">BRAND SYSTEM</text>
            <text x="56" y="36" fontFamily="Space Grotesk, sans-serif" fontSize="8.5" fill="#6B7280">Visual Identity Guideline</text>
          </g>

          {/* Brand Seal Vector (Bottom Right) */}
          <g transform="translate(280, 210)">
            <rect x="0" y="0" width="130" height="56" rx="12" fill="#17382B" stroke="#F2B69D" strokeWidth="1.2" />
            <text x="14" y="23" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="11" fill="#F2B69D">✦ 100% Custom</text>
            <text x="14" y="37" fontFamily="Space Grotesk, sans-serif" fontSize="8.5" fill="#E5E7EB">Vector-Perfect Assets</text>
            <text x="14" y="47" fontFamily="Space Grotesk, sans-serif" fontSize="7.5" fill="#9CA3AF">Digital + Print Ready</text>
          </g>
        </svg>
      </div>
    )
  }

  // Website Development Vector Canvas
  return (
    <div className="service-vector-canvas web-dev-vector-canvas" aria-hidden="true">
      <svg viewBox="0 0 460 360" className="service-svg-art" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="browserHeaderGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1E382B" />
            <stop offset="100%" stopColor="#17382B" />
          </linearGradient>
          <linearGradient id="codeGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F2B69D" />
            <stop offset="100%" stopColor="#C55F46" />
          </linearGradient>
        </defs>

        {/* Ambient Web Glow */}
        <circle cx="230" cy="180" r="140" fill="rgba(47, 79, 61, 0.12)" />

        {/* Main Desktop Browser Frame */}
        <rect x="50" y="40" width="340" height="230" rx="14" fill="#FFFFFF" stroke="rgba(47, 79, 61, 0.18)" strokeWidth="1.5" />
        
        {/* Browser Top Bar */}
        <path d="M50 54 C50 46, 56 40, 64 40 L376 40 C384 40, 390 46, 390 54 L390 74 L50 74 Z" fill="url(#browserHeaderGrad)" />
        
        {/* 3 Browser Window Dots */}
        <circle cx="68" cy="57" r="4" fill="#FF5F56" />
        <circle cx="80" cy="57" r="4" fill="#FFBD2E" />
        <circle cx="92" cy="57" r="4" fill="#27C93F" />

        {/* Browser URL Input Bar with Secure Padlock */}
        <rect x="115" y="48" width="210" height="18" rx="9" fill="rgba(255, 255, 255, 0.12)" />
        <path d="M130 57 H134 V54 A2 2 0 0 1 138 54 V57 H142 V62 H130 Z" fill="#F2B69D" />
        <text x="148" y="61" fontFamily="Space Grotesk, sans-serif" fontSize="8.5" fill="#D1D5DB">https://adorasolution.in/</text>

        {/* Browser Content Area: Hero Layout Wireframe */}
        <rect x="70" y="90" width="130" height="14" rx="4" fill="#17382B" />
        <rect x="70" y="110" width="180" height="8" rx="3" fill="rgba(47, 79, 61, 0.2)" />
        <rect x="70" y="122" width="150" height="8" rx="3" fill="rgba(47, 79, 61, 0.15)" />
        <rect x="70" y="142" width="80" height="22" rx="11" fill="#C55F46" />
        <text x="110" y="156" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="8" fill="#FFFFFF">Get Started</text>

        {/* Browser Code Snippet Vector */}
        <g transform="translate(68, 180)">
          <rect x="0" y="0" width="200" height="74" rx="8" fill="#0C1B14" stroke="rgba(255, 255, 255, 0.1)" />
          <text x="12" y="20" fontFamily="monospace" fontSize="9" fill="#F2B69D">&lt;ResponsiveSite /&gt;</text>
          <text x="24" y="35" fontFamily="monospace" fontSize="8.5" fill="#39B54A">const speed = &quot;1.2s&quot;;</text>
          <text x="24" y="48" fontFamily="monospace" fontSize="8.5" fill="#60A5FA">const seo = &quot;Top Ranking&quot;;</text>
          <text x="12" y="62" fontFamily="monospace" fontSize="9" fill="#F2B69D">&lt;WhatsAppFunnel direct /&gt;</text>
        </g>

        {/* Floating Mobile Phone Mockup Vector */}
        <g transform="translate(295, 120)">
          <rect x="0" y="0" width="115" height="190" rx="18" fill="#17382B" stroke="#FFFFFF" strokeWidth="2" />
          <rect x="8" y="10" width="99" height="170" rx="12" fill="#0C1B14" />
          <rect x="40" y="14" width="35" height="6" rx="3" fill="#17382B" />
          
          {/* Mobile Screen layout */}
          <rect x="18" y="32" width="79" height="10" rx="3" fill="#F2B69D" />
          <rect x="18" y="48" width="60" height="6" rx="2" fill="rgba(255, 255, 255, 0.3)" />
          
          {/* Mobile WhatsApp Button */}
          <rect x="18" y="66" width="79" height="22" rx="6" fill="#25D366" />
          <text x="57" y="80" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="8" fill="#FFFFFF">WhatsApp Us</text>

          {/* Speed Badge */}
          <g transform="translate(14, 102)">
            <rect x="0" y="0" width="87" height="42" rx="6" fill="rgba(255, 255, 255, 0.08)" />
            <text x="43" y="18" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="12" fill="#39B54A">98 / 100</text>
            <text x="43" y="30" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="7.5" fill="#D1D5DB">Lighthouse Speed</text>
          </g>
        </g>

        {/* Floating Speed Chip (Top Right) */}
        <g transform="translate(290, 20)">
          <rect x="0" y="0" width="135" height="50" rx="12" fill="#FFFFFF" stroke="#C55F46" strokeWidth="1.2" />
          <circle cx="22" cy="25" r="12" fill="#FFF1EE" />
          <path d="M22 17 L17 26 H22 L20 33 L27 24 H22 Z" fill="#C55F46" />
          <text x="42" y="23" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="12" fill="#17382B">&lt; 1.2s Fast</text>
          <text x="42" y="36" fontFamily="Space Grotesk, sans-serif" fontSize="9" fill="#6B7280">Instant Load Time</text>
        </g>
      </svg>
    </div>
  )
}

function ServiceCard({ service }) {
  const serviceKey = service.id || (service.number === '01' ? 'social-media' : service.number === '02' ? 'meta-ads' : service.number === '03' ? 'graphic-design' : 'website-development')

  return (
    <article className="service-command-card" id={`service-${service.number}`}>
      <div className="service-command-layout">
        {/* Left Column: Rich Description & Vectors */}
        <div className="service-command-info">
          <div className="service-command-meta">
            <span className="service-command-tag">
              <span className="service-tag-pulse" />
              SERVICE {service.number} // {service.tag || service.name}
            </span>
            <span className="service-badge-chip">● {service.badge || 'Verified Solution'}</span>
          </div>

          <h2 className="service-command-title">
            {service.title}
          </h2>

          <p className="service-command-desc">
            {service.description}
          </p>

          {/* Vectors Strip in Description Section */}
          <ServiceDescriptionVectors serviceId={serviceKey} />

          {/* Vector Features Grid (Top 4 Key Points in Compact 2x2 Grid) */}
          <div className="service-vector-features">
            {service.points.slice(0, 4).map((point, index) => (
              <div key={index} className="vector-feature-item">
                <span className="vector-feature-bullet">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M5 8L7 10L11 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="vector-feature-text">{point}</span>
              </div>
            ))}
          </div>

          {/* Compact Telemetry & Action Command Bar */}
          <div className="service-command-bottom-bar">
            {service.metrics && (
              <div className="service-telemetry-row">
                {service.metrics.map((m, i) => (
                  <div key={i} className="service-telemetry-item">
                    <strong className="telemetry-value">{m.val}</strong>
                    <span className="telemetry-label">{m.label}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="service-command-actions">
              <Link className="button service-primary-btn" to="/contact">
                <span>Get Started</span> <span>↗</span>
              </Link>
              <a
                className="button service-whatsapp-btn"
                href={`https://wa.me/919824900460?text=Hello%20Adora%20Solution,%20I%20am%20interested%20in%20${encodeURIComponent(service.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>WhatsApp</span>
                <span className="btn-chat-icon" aria-hidden="true">💬</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Custom Animated Vector Illustration Canvas */}
        <div className="service-command-visual">
          <div className="service-visual-window">
            <div className="service-visual-header">
              <div className="window-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <span className="visual-terminal-label">ADORA // {service.name.toUpperCase()} ENGINE</span>
              <span className="visual-status-pill">Active Live</span>
            </div>

            <div className="service-visual-canvas-body">
              <ServiceVectors serviceId={serviceKey} />
            </div>

            <div className="service-visual-footer">
              <div className="visual-status-item">
                <span className="status-dot-pulse" />
                <span>Zero Jargon Guarantee</span>
              </div>
              <span className="visual-location-stamp">Surat &amp; Pan-India</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ServiceCard
