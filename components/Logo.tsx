import Image from 'next/image';
import { cn } from '@/utils/cn';
import logoImage from '@/assets/AravedAdnokLogo.jpeg';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="relative">
        <div className="w-10 h-10 flex items-center justify-center">
          <Image
            src={logoImage}
            alt="Araved Adnok Logo"
            width={40}
            height={40}
            className="object-contain"
            priority
          />
        </div>
      </div>

      {showText && (
        <span className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
          Araved Adnok
        </span>
      )}
    </div>
  );
}