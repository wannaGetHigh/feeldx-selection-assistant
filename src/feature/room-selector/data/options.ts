import type { MaterialOption } from '../types'

export const FLOORING_OPTIONS: MaterialOption[] = [
  { id: 'flooring-timber', name: 'Timber', costTier: 'medium', shade: 'neutral' },
  { id: 'flooring-marble', name: 'Marble', costTier: 'high', shade: 'light' },
  { id: 'flooring-concrete', name: 'Concrete', costTier: 'medium', shade: 'dark' },
  { id: 'flooring-vinyl', name: 'Vinyl', costTier: 'low', shade: 'neutral' },
  { id: 'flooring-tiles', name: 'Ceramic Tiles', costTier: 'low', shade: 'light' },
  { id: 'flooring-herringbone', name: 'Herringbone Timber', costTier: 'high', shade: 'dark' },
]

export const WALL_FINISH_OPTIONS: MaterialOption[] = [
  { id: 'wall-white-paint', name: 'White Paint', costTier: 'low', shade: 'light' },
  { id: 'wall-limewash', name: 'Limewash', costTier: 'medium', shade: 'light' },
  { id: 'wall-dark-paint', name: 'Dark Paint', costTier: 'low', shade: 'dark' },
  { id: 'wall-marble-tile', name: 'Marble Tile', costTier: 'high', shade: 'light' },
  { id: 'wall-subway-tile', name: 'Subway Tile', costTier: 'medium', shade: 'light' },
  { id: 'wall-timber-panel', name: 'Timber Panel', costTier: 'high', shade: 'dark' },
]

export const BENCHTOP_OPTIONS: MaterialOption[] = [
  { id: 'bench-marble', name: 'Marble', costTier: 'high', shade: 'light' },
  { id: 'bench-engineered-stone', name: 'Engineered Stone', costTier: 'medium', shade: 'neutral' },
  { id: 'bench-laminate', name: 'Laminate', costTier: 'low', shade: 'neutral' },
  { id: 'bench-timber', name: 'Solid Timber', costTier: 'high', shade: 'dark' },
  { id: 'bench-concrete', name: 'Concrete', costTier: 'medium', shade: 'dark' },
]

export const CABINETRY_OPTIONS: MaterialOption[] = [
  { id: 'cab-white-gloss', name: 'White Gloss', costTier: 'low', shade: 'light' },
  { id: 'cab-matte-white', name: 'Matte White', costTier: 'medium', shade: 'light' },
  { id: 'cab-natural-oak', name: 'Natural Oak', costTier: 'high', shade: 'neutral' },
  { id: 'cab-navy', name: 'Navy Blue', costTier: 'medium', shade: 'dark' },
  { id: 'cab-black', name: 'Matte Black', costTier: 'medium', shade: 'dark' },
  { id: 'cab-sage', name: 'Sage Green', costTier: 'medium', shade: 'neutral' },
]

export const LIGHTING_OPTIONS: MaterialOption[] = [
  { id: 'light-pendant', name: 'Pendant Light', costTier: 'medium', shade: 'neutral' },
  { id: 'light-recessed', name: 'Recessed Downlights', costTier: 'low', shade: 'neutral' },
  { id: 'light-chandelier', name: 'Chandelier', costTier: 'high', shade: 'light' },
  { id: 'light-track', name: 'Track Lighting', costTier: 'medium', shade: 'neutral' },
  { id: 'light-wall-sconce', name: 'Wall Sconce', costTier: 'medium', shade: 'neutral' },
]

export const SOFA_OPTIONS: MaterialOption[] = [
  { id: 'sofa-linen', name: 'Linen Sofa', costTier: 'medium', shade: 'light' },
  { id: 'sofa-leather', name: 'Leather Sofa', costTier: 'high', shade: 'dark' },
  { id: 'sofa-velvet', name: 'Velvet Sofa', costTier: 'high', shade: 'dark' },
  { id: 'sofa-fabric', name: 'Fabric Sofa', costTier: 'low', shade: 'neutral' },
  { id: 'sofa-modular', name: 'Modular Sofa', costTier: 'high', shade: 'neutral' },
]

export const TABLE_OPTIONS: MaterialOption[] = [
  { id: 'table-timber', name: 'Timber Dining Table', costTier: 'medium', shade: 'dark' },
  { id: 'table-marble', name: 'Marble Coffee Table', costTier: 'high', shade: 'light' },
  { id: 'table-glass', name: 'Glass Coffee Table', costTier: 'medium', shade: 'light' },
  { id: 'table-concrete', name: 'Concrete Table', costTier: 'medium', shade: 'dark' },
  { id: 'table-rattan', name: 'Rattan Side Table', costTier: 'low', shade: 'neutral' },
]

export const CHAIR_OPTIONS: MaterialOption[] = [
  { id: 'chair-timber', name: 'Timber Chair', costTier: 'medium', shade: 'dark' },
  { id: 'chair-upholstered', name: 'Upholstered Armchair', costTier: 'high', shade: 'neutral' },
  { id: 'chair-rattan', name: 'Rattan Chair', costTier: 'low', shade: 'neutral' },
  { id: 'chair-velvet', name: 'Velvet Accent Chair', costTier: 'high', shade: 'dark' },
]

export const BED_OPTIONS: MaterialOption[] = [
  { id: 'bed-timber', name: 'Timber Bed Frame', costTier: 'medium', shade: 'dark' },
  { id: 'bed-upholstered', name: 'Upholstered Bed', costTier: 'high', shade: 'neutral' },
  { id: 'bed-rattan', name: 'Rattan Bed', costTier: 'medium', shade: 'neutral' },
  { id: 'bed-platform', name: 'Platform Bed', costTier: 'low', shade: 'neutral' },
  { id: 'bed-metal', name: 'Metal Bed Frame', costTier: 'low', shade: 'dark' },
]
