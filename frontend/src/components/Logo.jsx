export default function Logo({ size = 36, color = 'white' }) {
    return (
        <svg 
            width={size} 
            height={size} 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Geometric pattern based on the provided design */}
            <circle cx="50" cy="50" r="48" fill="currentColor" opacity="0.1" />
            
            {/* Top pyramid */}
            <path d="M50 10 L85 45 L50 45 L15 45 Z" stroke={color} strokeWidth="1.5" fill="none" />
            <path d="M50 10 L67.5 27.5 L50 27.5 L32.5 27.5 Z" stroke={color} strokeWidth="1.5" fill="none" />
            
            {/* Center diamond */}
            <path d="M50 45 L67.5 62.5 L50 80 L32.5 62.5 Z" stroke={color} strokeWidth="1.5" fill="none" />
            <path d="M32.5 62.5 L50 62.5 L67.5 62.5" stroke={color} strokeWidth="1.5" />
            <path d="M50 45 L50 80" stroke={color} strokeWidth="1.5" />
            
            {/* Bottom pyramid (inverted) */}
            <path d="M15 55 L50 55 L85 55 L50 90 Z" stroke={color} strokeWidth="1.5" fill="none" />
            <path d="M32.5 72.5 L50 72.5 L67.5 72.5 L50 90 Z" stroke={color} strokeWidth="1.5" fill="none" />
            
            {/* Connecting lines */}
            <path d="M15 45 L15 55" stroke={color} strokeWidth="1.5" />
            <path d="M85 45 L85 55" stroke={color} strokeWidth="1.5" />
            <path d="M32.5 27.5 L32.5 62.5" stroke={color} strokeWidth="1.5" />
            <path d="M67.5 27.5 L67.5 62.5" stroke={color} strokeWidth="1.5" />
        </svg>
    )
}
