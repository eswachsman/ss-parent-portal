export default function LincolnElementaryLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <linearGradient id="lincolnGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E40AF"/>
          <stop offset="100%" stopColor="#3B82F6"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="url(#lincolnGradient)" rx="10"/>
      <path d="M50 15L15 35v30L50 85l35-20V35L50 15z" fill="white" opacity="0.9"/>
      <path d="M50 20L20 38v24L50 80l30-18V38L50 20z" fill="url(#lincolnGradient)"/>
      <path d="M50 30L30 42v16L50 70l20-12V42L50 30z" fill="white"/>
      <path d="M46 40h8v20h-8z" fill="url(#lincolnGradient)"/>
      <path d="M38 45h24v6H38z" fill="url(#lincolnGradient)"/>
    </svg>
  );
}
