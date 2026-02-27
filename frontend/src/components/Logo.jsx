export default function Logo({ size = 36, color = 'white' }) {
    return (
        <svg 
            width={size} 
            height={size} 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Background circle with subtle fill */}
            <circle cx="50" cy="50" r="46" fill={color} opacity="0.08" />
            
            {/* Outer circle border */}
            <circle cx="50" cy="50" r="46" stroke={color} strokeWidth="2" fill="none" />
            
            {/* Top triangle/pyramid */}
            <path d="M50 15 L75 40 L50 40 L25 40 Z" stroke={color} strokeWidth="2" fill="none" />
            
            {/* Inner top triangle */}
            <path d="M50 15 L62.5 27.5 L50 27.5 L37.5 27.5 Z" stroke={color} strokeWidth="2" fill="none" />
            
            {/* Center diamond */}
            <path d="M50 40 L65 55 L50 70 L35 55 Z" stroke={color} strokeWidth="2" fill="none" />
            
            {/* Horizontal center line */}
            <path d="M35 55 L65 55" stroke={color} strokeWidth="2" />
            
            {/* Vertical center line */}
            <path d="M50 40 L50 70" stroke={color} strokeWidth="2" />
            
            {/* Bottom inverted triangle */}
            <path d="M25 60 L50 60 L75 60 L50 85 Z" stroke={color} strokeWidth="2" fill="none" />
            
            {/* Inner bottom triangle */}
            <path d="M37.5 72.5 L50 72.5 L62.5 72.5 L50 85 Z" stroke={color} strokeWidth="2" fill="none" />
            
            {/* Vertical connecting lines */}
            <path d="M25 40 L25 60" stroke={color} strokeWidth="2" />
            <path d="M75 40 L75 60" stroke={color} strokeWidth="2" />
            <path d="M37.5 27.5 L35 55" stroke={color} strokeWidth="1.5" />
            <path d="M62.5 27.5 L65 55" stroke={color} strokeWidth="1.5" />
        </svg>
    )
}
