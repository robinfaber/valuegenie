import Link from 'next/link';

export const Logo = () => (
  <Link href="/" className="flex items-center gap-3">
    <img 
      src="/logo/smarthomescanlogo3.svg" 
      alt="SafeHomeScan" 
      className="h-8 w-8"
    />
    <span className="text-xl font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
      SafeHomeScan
    </span>
  </Link>
);
