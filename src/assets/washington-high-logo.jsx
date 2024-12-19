export default function WashingtonHighLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <linearGradient id="washingtonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#065F46"/>
          <stop offset="100%" stopColor="#059669"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="url(#washingtonGradient)" rx="10"/>
      <path d="M15 40h70v45H15z" fill="white" opacity="0.9"/>
      <path d="M25 30h50L50 10z" fill="white" opacity="0.9"/>
      <rect x="25" y="45" width="50" height="5" fill="url(#washingtonGradient)"/>
      <rect x="25" y="55" width="50" height="5" fill="url(#washingtonGradient)"/>
      <rect x="25" y="65" width="50" height="5" fill="url(#washingtonGradient)"/>
      <circle cx="50" cy="25" r="5" fill="url(#washingtonGradient)"/>
    </svg>
  );
}
