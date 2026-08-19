import React, { useState } from 'react';

export function isImageUrl(val?: string | null): boolean {
  if (!val) return false;
  const str = val.trim();
  return (
    str.startsWith('data:image/') ||
    str.startsWith('http://') ||
    str.startsWith('https://') ||
    str.startsWith('/') ||
    str.startsWith('blob:')
  );
}

interface UserAvatarProps {
  avatarUrl?: string | null;
  fallbackEmoji?: string;
  name?: string;
  className?: string; // e.g. "w-8 h-8 rounded-full"
  textClassName?: string; // e.g. "text-xl"
}

export const UserAvatar: React.FC<UserAvatarProps> = ({
  avatarUrl,
  fallbackEmoji = '🦊',
  name = 'User Avatar',
  className = 'w-8 h-8 rounded-full',
  textClassName = 'text-xl'
}) => {
  const [imageError, setImageError] = useState(false);

  const cleanUrl = avatarUrl?.trim();

  if (cleanUrl && isImageUrl(cleanUrl) && !imageError) {
    return (
      <img
        src={cleanUrl}
        alt={name}
        className={`${className} object-cover shrink-0 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs`}
        onError={() => setImageError(true)}
      />
    );
  }

  const displayEmoji = (cleanUrl && !isImageUrl(cleanUrl)) ? cleanUrl : fallbackEmoji;

  return (
    <span className={`${textClassName} shrink-0 flex items-center justify-center leading-none select-none`}>
      {displayEmoji}
    </span>
  );
};
