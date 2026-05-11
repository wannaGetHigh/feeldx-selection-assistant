import { ImageIcon } from 'lucide-react'
import { useState } from 'react'

import type { MaterialOptionDto, RoomConfigDto, RoomConfigPayload } from '@/dtos/room-config.dto'

interface PreviewCardProps {
  categoryLabel: string
  option: MaterialOptionDto
}

function PreviewCard({ categoryLabel, option }: PreviewCardProps) {
  const [imgError, setImgError] = useState(false)
  const showImage = !!option.imageUrl && !imgError

  return (
    <div className="flex flex-col overflow-hidden rounded-md border border-border bg-card">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        {showImage ? (
          <img
            src={option.imageUrl}
            alt={option.name}
            loading="lazy"
            className="h-full w-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <ImageIcon className="h-6 w-6 text-muted-foreground/40" />
          </div>
        )}
      </div>
      <div className="px-2 py-1.5">
        <p className="truncate text-[10px] text-muted-foreground">{categoryLabel}</p>
        <p className="truncate text-xs font-medium leading-tight">{option.name}</p>
      </div>
    </div>
  )
}

interface PreviewGalleryProps {
  roomConfig: RoomConfigDto
  selections: RoomConfigPayload
}

export function PreviewGallery({ roomConfig, selections }: PreviewGalleryProps) {
  const selected = roomConfig.categories.flatMap((category) => {
    const option = category.options.find((o) => o.id === selections[category.id])
    return option ? [{ category, option }] : []
  })

  if (selected.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-1.5 py-6 text-center">
        <ImageIcon className="h-7 w-7 text-muted-foreground/30" />
        <p className="text-xs text-muted-foreground">Select items to see previews</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-2 pb-1">
      {selected.map(({ category, option }) => (
        <PreviewCard key={category.id} categoryLabel={category.label} option={option} />
      ))}
    </div>
  )
}
