import { useState, type ComponentProps } from 'react'
import { cn } from 'cn'

type Props = ComponentProps<'img'> & { src: string; alt: string }

export function SiteImage({ src, alt, className, onError, ...props }: Props) {
  const [failedSource, setFailedSource] = useState<string | null>(null)
  return (
    <div className={cn('relative overflow-hidden bg-muted', className)}>
      {failedSource === src ? (
        <div role="img" aria-label={alt} className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-3 text-center text-xs text-muted-foreground">
          <span>Gambar demo tidak tersedia</span><span>{alt}</span>
        </div>
      ) : (
        <img {...props} ref={(image) => { if (image?.complete && image.naturalWidth === 0) setFailedSource(src) }} src={src} alt={alt} className="absolute inset-0 size-full object-cover" onError={(event) => { setFailedSource(src); onError?.(event) }} />
      )}
    </div>
  )
}
