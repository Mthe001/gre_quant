export function KmfLogo() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-blue-500/20 dark:bg-blue-500/30 animate-pulse-slow" />
      <div className="relative w-full h-full flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="45" fill="#4285F4" />
          <path
            d="M30,30 L50,50 L30,70"
            stroke="white"
            strokeWidth="4"
            fill="none"
          />
          <path
            d="M55,30 L75,30 L55,50 L75,70"
            stroke="white"
            strokeWidth="4"
            fill="none"
          />
        </svg>
        <div className="absolute bottom-1 text-center text-xs font-bold text-white">
          KMF考满分
        </div>
      </div>
    </div>
  );
}
