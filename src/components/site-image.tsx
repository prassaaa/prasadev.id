import { useState, type ComponentProps } from 'react'
import { cn } from 'cn'

type Props = ComponentProps<'img'> & {
  src: string
  alt: string
  /** Render image in-flow at its natural aspect ratio instead of cropping into a fixed frame. */
  natural?: boolean
}

export function SiteImage({ src, alt, className, natural = false, onError, ...props }: Props) {
  const [failedSource, setFailedSource] = useState<string | null>(null)
  return (
    <div className={cn('relative overflow-hidden bg-muted', className)}>
      {failedSource === src ? (
        <div
          role="img"
          aria-label={alt}
          className={cn(
            'flex flex-col items-center justify-center gap-2 p-3 text-center text-xs text-muted-foreground',
            natural ? 'min-h-48' : 'absolute inset-0',
          )}>
          <span>Gambar tidak tersedia</span>
          <span>{alt}</span>
        </div>
      ) : (
        <img
          {...props}
          ref={(image) => {
            if (image?.complete && image.naturalWidth === 0) setFailedSource(src)
          }}
          src={src}
          alt={alt}
          className={
            natural
              ? 'block h-auto w-full object-cover'
              : 'absolute inset-0 size-full object-cover'
          }
          onError={(event) => {
            setFailedSource(src)
            onError?.(event)
          }}
        />
      )}
    </div>
  )
}