import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
  color?: string;
}

// 1. Club House Icon
export const IconClubhouse: React.FC<IconProps> = ({ className = "w-8 h-8", color = "#B08D4F", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {/* Roof */}
    <path d="M8 28L32 10L56 28" />
    <path d="M12 25V50H52V25" />
    {/* Pillars / Door */}
    <path d="M26 50V36H38V50" />
    <path d="M20 50V38" />
    <path d="M44 50V38" />
    {/* Arches / Windows */}
    <path d="M20 28A4 4 0 0 1 28 28" />
    <path d="M36 28A4 4 0 0 1 44 28" />
    <path d="M4 50H60" />
    {/* Decorative Musical Notes / Stars */}
    <circle cx="18" cy="18" r="1.5" fill={color} />
    <circle cx="46" cy="18" r="1.5" fill={color} />
  </svg>
);

// 2. Swimming Pool Icon
export const IconSwimmingPool: React.FC<IconProps> = ({ className = "w-8 h-8", color = "#B08D4F", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {/* Waves */}
    <path d="M8 44C12 42 16 42 20 44C24 46 28 46 32 44C36 42 40 42 44 44C48 46 52 46 56 44" />
    <path d="M8 52C12 50 16 50 20 52C24 54 28 54 32 52C36 50 40 50 44 52C48 54 52 54 56 52" />
    {/* Pool Ladder */}
    <path d="M42 42V18C42 15 45 13 48 13C51 13 54 15 54 18V42" />
    <path d="M42 24H54" />
    <path d="M42 30H54" />
    <path d="M42 36H54" />
    {/* Umbrella / Sun Lounger */}
    <path d="M16 28L26 18L32 24" />
    <path d="M14 34L26 22" />
    <path d="M18 16C22 12 28 14 30 18" />
  </svg>
);

// 3. Lawn Tennis Icon
export const IconLawnTennis: React.FC<IconProps> = ({ className = "w-8 h-8", color = "#B08D4F", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {/* Tennis Racket 1 */}
    <ellipse cx="26" cy="24" rx="12" ry="15" transform="rotate(-30 26 24)" />
    <path d="M34 33L48 49" />
    {/* Racket Grid */}
    <path d="M20 18L32 30" strokeWidth="1" />
    <path d="M22 28L30 16" strokeWidth="1" />
    {/* Net Grid below */}
    <path d="M10 50H54" />
    <path d="M14 44H50" strokeWidth="1" />
    <path d="M18 44V50" strokeWidth="1" />
    <path d="M26 44V50" strokeWidth="1" />
    <path d="M34 44V50" strokeWidth="1" />
    <path d="M42 44V50" strokeWidth="1" />
    {/* Tennis Ball */}
    <circle cx="46" cy="18" r="5" />
    <path d="M43 15C45 17 45 19 43 21" strokeWidth="1" />
  </svg>
);

// 4. Yoga Zone Icon
export const IconYogaZone: React.FC<IconProps> = ({ className = "w-8 h-8", color = "#B08D4F", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {/* Head */}
    <circle cx="32" cy="16" r="6" />
    {/* Raised Arms */}
    <path d="M18 24C22 20 28 18 32 24C36 18 42 20 46 24" />
    <path d="M22 34L14 26" />
    <path d="M42 34L50 26" />
    {/* Body / Torso */}
    <path d="M32 22V42" />
    {/* Crossed Legs (Padmasana Lotus) */}
    <path d="M14 50C22 42 28 42 32 46C36 42 42 42 50 50" />
    <path d="M10 50H54" />
  </svg>
);

// 5. Cricket Net Icon
export const IconCricketNet: React.FC<IconProps> = ({ className = "w-8 h-8", color = "#B08D4F", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {/* Net Frame */}
    <rect x="10" y="16" width="44" height="34" rx="2" />
    {/* Net Grid Lines */}
    <path d="M10 26H54" strokeWidth="1" />
    <path d="M10 36H54" strokeWidth="1" />
    <path d="M21 16V50" strokeWidth="1" />
    <path d="M32 16V50" strokeWidth="1" />
    <path d="M43 16V50" strokeWidth="1" />
    {/* Stumps inside */}
    <path d="M28 36V50" strokeWidth="2" />
    <path d="M32 36V50" strokeWidth="2" />
    <path d="M36 36V50" strokeWidth="2" />
    <path d="M26 36H38" strokeWidth="2" />
  </svg>
);

// 6. Toddler Play Area Icon
export const IconToddlerPlay: React.FC<IconProps> = ({ className = "w-8 h-8", color = "#B08D4F", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {/* Seesaw Base */}
    <path d="M32 50L24 38H40L32 50Z" />
    {/* Seesaw Plank */}
    <path d="M10 40L54 28" strokeWidth="2.5" />
    {/* Kid 1 (Left) */}
    <circle cx="14" cy="26" r="4" />
    <path d="M14 30V38" />
    <path d="M10 35H18" />
    {/* Kid 2 (Right) */}
    <circle cx="50" cy="16" r="4" />
    <path d="M50 20V28" />
    <path d="M46 25H54" />
    <path d="M6 50H58" />
  </svg>
);

// 7. Gated Security / Community Icon
export const IconGatedCommunity: React.FC<IconProps> = ({ className = "w-8 h-8", color = "#B08D4F", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {/* Gate Pillars */}
    <rect x="8" y="16" width="8" height="34" rx="1" />
    <rect x="48" y="16" width="8" height="34" rx="1" />
    {/* Pillar Tops */}
    <path d="M6 16H18L12 10L6 16Z" />
    <path d="M46 16H58L52 10L46 16Z" />
    {/* Gate Bars */}
    <path d="M16 22H48" />
    <path d="M16 32H48" />
    <path d="M16 42H48" />
    <path d="M24 22V48" />
    <path d="M32 22V48" />
    <path d="M40 22V48" />
    <path d="M4 50H60" />
  </svg>
);

// 8. Temple Zone / Vaastu Icon
export const IconTempleZone: React.FC<IconProps> = ({ className = "w-8 h-8", color = "#B08D4F", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {/* Mandala / Sun Vastu emblem */}
    <circle cx="32" cy="32" r="14" />
    <circle cx="32" cy="32" r="6" />
    {/* Petals / Rays */}
    <path d="M32 10V18" />
    <path d="M32 46V54" />
    <path d="M10 32H18" />
    <path d="M46 32H54" />
    <path d="M16 16L22 22" />
    <path d="M42 42L48 48" />
    <path d="M48 16L42 22" />
    <path d="M22 42L16 48" />
  </svg>
);

// 9. Multipurpose Garden Icon
export const IconMultipurposeGarden: React.FC<IconProps> = ({ className = "w-8 h-8", color = "#B08D4F", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {/* Tree */}
    <path d="M44 48C50 48 54 42 52 36C55 30 50 24 44 25C42 18 34 18 30 22C24 18 18 22 18 28C14 28 12 34 15 40C12 46 16 48 22 48" />
    <path d="M32 32V50" strokeWidth="2.5" />
    {/* Lamp post / Bench */}
    <path d="M12 50H52" />
    <path d="M14 42H26" />
    <path d="M16 42V50" />
    <path d="M24 42V50" />
  </svg>
);

// 10. Squash Court Icon
export const IconSquashCourt: React.FC<IconProps> = ({ className = "w-8 h-8", color = "#B08D4F", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {/* Court Wall */}
    <path d="M10 14V50H54V14" />
    <path d="M10 38H54" strokeWidth="1" />
    {/* Squash Player */}
    <circle cx="28" cy="22" r="4" />
    <path d="M28 26L34 36L26 48" />
    <path d="M34 28L46 22" />
    {/* Racket */}
    <circle cx="48" cy="20" r="4" />
    <circle cx="20" cy="30" r="2" fill={color} />
  </svg>
);

// 11. Card Room Icon
export const IconCardRoom: React.FC<IconProps> = ({ className = "w-8 h-8", color = "#B08D4F", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {/* Card 1 */}
    <rect x="14" y="16" width="22" height="32" rx="3" transform="rotate(-10 14 16)" />
    {/* Card 2 */}
    <rect x="28" y="14" width="22" height="32" rx="3" transform="rotate(10 28 14)" />
    {/* Ace Symbols */}
    <path d="M23 26L26 32H20L23 26Z" />
    <path d="M40 24L42 28L40 32L38 28Z" />
  </svg>
);

// 12. Table Tennis Icon
export const IconTableTennis: React.FC<IconProps> = ({ className = "w-8 h-8", color = "#B08D4F", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {/* TT Paddle 1 */}
    <circle cx="24" cy="24" r="12" />
    <path d="M32 32L42 46" strokeWidth="3" />
    {/* TT Paddle 2 */}
    <circle cx="40" cy="24" r="10" />
    <path d="M46 32L54 42" strokeWidth="2.5" />
    {/* Ping Pong Ball */}
    <circle cx="16" cy="46" r="4" fill={color} />
  </svg>
);

// 13. Indoor Gym Icon
export const IconIndoorGym: React.FC<IconProps> = ({ className = "w-8 h-8", color = "#B08D4F", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {/* Barbell */}
    <path d="M10 28H54" strokeWidth="3" />
    {/* Weights Left */}
    <rect x="14" y="18" width="6" height="20" rx="1" />
    <rect x="8" y="22" width="6" height="12" rx="1" />
    {/* Weights Right */}
    <rect x="44" y="18" width="6" height="20" rx="1" />
    <rect x="50" y="22" width="6" height="12" rx="1" />
    {/* Bench */}
    <path d="M18 48H46" strokeWidth="2" />
    <path d="M24 48V38H40V48" />
  </svg>
);

// 14. 24x7 Surveillance / Security Icon
export const IconSurveillance: React.FC<IconProps> = ({ className = "w-8 h-8", color = "#B08D4F", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {/* CCTV Camera Head */}
    <path d="M18 20L44 14L48 28L22 34Z" />
    {/* Camera Lens */}
    <ellipse cx="46" cy="21" rx="3" ry="7" />
    {/* Wall Mount Stand */}
    <path d="M10 12V38H22" />
    <path d="M14 26L22 26" />
    {/* Signal Waves */}
    <path d="M52 14C56 18 56 24 52 28" strokeWidth="1.5" />
    <path d="M56 10C62 16 62 26 56 32" strokeWidth="1.5" />
  </svg>
);

// 15. Daily Need Shops Icon
export const IconDailyShops: React.FC<IconProps> = ({ className = "w-8 h-8", color = "#B08D4F", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {/* Canopy / Awning */}
    <path d="M12 24L16 14H48L52 24" />
    <path d="M12 24C14 27 18 27 20 24C22 27 26 27 28 24C30 27 34 27 36 24C38 27 42 27 44 24C46 27 50 27 52 24" />
    {/* Storefront Box */}
    <rect x="14" y="24" width="36" height="26" />
    {/* Window / Door */}
    <rect x="26" y="34" width="12" height="16" />
    {/* 24 Badge */}
    <circle cx="32" cy="18" r="5" />
  </svg>
);

// 16. Outdoor Games Icon
export const IconOutdoorGames: React.FC<IconProps> = ({ className = "w-8 h-8", color = "#B08D4F", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {/* Basketball / Volleyball */}
    <circle cx="26" cy="26" r="12" />
    <path d="M14 26H38" strokeWidth="1" />
    <path d="M26 14V38" strokeWidth="1" />
    {/* Shuttlecock */}
    <path d="M42 38L52 26L48 48Z" />
    <circle cx="43" cy="46" r="3" />
  </svg>
);
