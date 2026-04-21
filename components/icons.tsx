type IconProps = { className?: string };

export function MountainIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 20 L8.5 9 L12 15 L15.5 10 L21 20 Z" />
    </svg>
  );
}

export function CompassIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3 L12 5" />
      <path d="M12 19 L12 21" />
      <path d="M3 12 L5 12" />
      <path d="M19 12 L21 12" />
      <polygon points="12,7 13.8,12 12,11 10.2,12" fill="currentColor" opacity="0.9"/>
      <polygon points="12,17 10.2,12 12,13 13.8,12" fill="currentColor" opacity="0.35"/>
    </svg>
  );
}

export function MilestoneIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="6" y1="4" x2="6" y2="20" />
      <path d="M6 4 L20 4 L17 8 L20 12 L6 12" />
    </svg>
  );
}

export function TeamIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="8" cy="7" r="3" />
      <circle cx="16" cy="7" r="3" />
      <path d="M2 21 C2 17 5 15 8 15 C11 15 14 17 14 21" />
      <path d="M16 15 C19 15 22 17 22 21" />
    </svg>
  );
}

export function CopperIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 2 L13 6 C16.3 6.5 19 9.5 19 13 C19 17.4 15.4 21 11 21 C6.6 21 3 17.4 3 13 C3 9.5 5.7 6.5 9 6 L9 2" />
      <path d="M9 2 L13 2" />
      <circle cx="11" cy="13" r="2.5" />
    </svg>
  );
}

export function ShieldIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2 L4 5 L4 11 C4 16 7.5 20.5 12 22 C16.5 20.5 20 16 20 11 L20 5 Z" />
    </svg>
  );
}

export function GlobeIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12 L21 12" />
      <path d="M12 3 C9 6 8 9 8 12 C8 15 9 18 12 21 C15 18 16 15 16 12 C16 9 15 6 12 3 Z" />
    </svg>
  );
}

export function ChevronRightIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 18 L15 12 L9 6" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12 L19 12" />
      <path d="M13 6 L19 12 L13 18" />
    </svg>
  );
}

export function LeafIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22 C12 22 3 17 3 10 C3 6.7 5.7 4 9 4 C10.5 4 12 4.6 13 5.6 C13 5.6 19 4 21 8 C21 14 15 18 12 22 Z" />
      <path d="M12 22 L12 12" strokeDasharray="2 1" opacity="0.5"/>
    </svg>
  );
}

export function BuildingIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="9" width="8" height="13" />
      <rect x="13" y="5" width="8" height="17" />
      <path d="M3 5 L11 5 L11 9" />
      <line x1="7" y1="13" x2="7" y2="13.01" strokeWidth="2"/>
      <line x1="17" y1="9" x2="17" y2="9.01" strokeWidth="2"/>
      <line x1="17" y1="13" x2="17" y2="13.01" strokeWidth="2"/>
    </svg>
  );
}

export function MapPinIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2 C8.7 2 6 4.7 6 8 C6 12.5 12 20 12 20 C12 20 18 12.5 18 8 C18 4.7 15.3 2 12 2 Z" />
      <circle cx="12" cy="8" r="2.5" />
    </svg>
  );
}

export function MenuIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      <line x1="3" y1="7" x2="21" y2="7" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="17" x2="21" y2="17" />
    </svg>
  );
}

export function CloseIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
