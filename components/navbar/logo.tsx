import Link from 'next/link';

export const Logo = () => (
  <Link href="/" className="flex items-center gap-3">
    <img 
      src="/logo/worthsnap.svg" 
      alt="WorthSnap" 
      className="h-8 w-8"
    />
    <span className="text-xl font-bold text-white">
      WorthSnap
    </span>
  </Link>
);
