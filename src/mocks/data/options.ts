import type { MaterialOptionDto } from '@/dtos/room-config.dto'

import ceramicTileFlooringImg from '@/assets/ceramic_tile_flooring.png'
import concreteFlooringImg from '@/assets/concrete_flooring.png'
import herringboneTimberFlooringImg from '@/assets/herringbone_timber_flooring.png'
import timberFlooringImg from '@/assets/timber_looring.png'
import vinylFlooringImg from '@/assets/vinyl_flooring.png'
import whiteMarbleFlooringImg from '@/assets/white_marble_flooring.png'
import whiteMarlbeBenchtopImg from '@/assets/white_marble_benchtop.png'
import blackPendantLightImg from '@/assets/black_pendantLight.png'
import concreteDiningTableImg from '@/assets/concrete_dining_table.png'
import glassCoffeeTableImg from '@/assets/glass_coffee_table.png'
import linenModularSofaImg from '@/assets/linen_modular_sofa.png'
import platformBedFrameImg from '@/assets/platform_bed_frame.png'
import rattanSideTableImg from '@/assets/rattan_side_table.png'
import sageGreenCabinetImg from '@/assets/sage_green_kitchen_cabinet.png'
import timberChairImg from '@/assets/timber_chair.png'

export const FLOORING_OPTIONS: MaterialOptionDto[] = [
  { id: 'flooring-timber', name: 'Timber', costTier: 'medium', shade: 'neutral', imageUrl: timberFlooringImg },
  { id: 'flooring-marble', name: 'Marble', costTier: 'high', shade: 'light', imageUrl: whiteMarbleFlooringImg },
  { id: 'flooring-concrete', name: 'Concrete', costTier: 'medium', shade: 'dark', imageUrl: concreteFlooringImg },
  { id: 'flooring-vinyl', name: 'Vinyl', costTier: 'low', shade: 'neutral', imageUrl: vinylFlooringImg },
  { id: 'flooring-tiles', name: 'Ceramic Tiles', costTier: 'low', shade: 'light', imageUrl: ceramicTileFlooringImg },
  { id: 'flooring-herringbone', name: 'Herringbone Timber', costTier: 'high', shade: 'dark', imageUrl: herringboneTimberFlooringImg },
]

export const WALL_FINISH_OPTIONS: MaterialOptionDto[] = [
  { id: 'wall-white-paint', name: 'White Paint', costTier: 'low', shade: 'light' },
  { id: 'wall-limewash', name: 'Limewash', costTier: 'medium', shade: 'light' },
  { id: 'wall-dark-paint', name: 'Dark Paint', costTier: 'low', shade: 'dark' },
  { id: 'wall-marble-tile', name: 'Marble Tile', costTier: 'high', shade: 'light' },
  { id: 'wall-subway-tile', name: 'Subway Tile', costTier: 'medium', shade: 'light' },
  { id: 'wall-timber-panel', name: 'Timber Panel', costTier: 'high', shade: 'dark' },
]

export const BENCHTOP_OPTIONS: MaterialOptionDto[] = [
  { id: 'bench-marble', name: 'Marble', costTier: 'high', shade: 'light', imageUrl: whiteMarlbeBenchtopImg },
  { id: 'bench-engineered-stone', name: 'Engineered Stone', costTier: 'medium', shade: 'neutral' },
  { id: 'bench-laminate', name: 'Laminate', costTier: 'low', shade: 'neutral' },
  { id: 'bench-timber', name: 'Solid Timber', costTier: 'high', shade: 'dark' },
  { id: 'bench-concrete', name: 'Concrete', costTier: 'medium', shade: 'dark' },
]

export const CABINETRY_OPTIONS: MaterialOptionDto[] = [
  { id: 'cab-white-gloss', name: 'White Gloss', costTier: 'low', shade: 'light' },
  { id: 'cab-matte-white', name: 'Matte White', costTier: 'medium', shade: 'light' },
  { id: 'cab-natural-oak', name: 'Natural Oak', costTier: 'high', shade: 'neutral' },
  { id: 'cab-navy', name: 'Navy Blue', costTier: 'medium', shade: 'dark' },
  { id: 'cab-black', name: 'Matte Black', costTier: 'medium', shade: 'dark' },
  { id: 'cab-sage', name: 'Sage Green', costTier: 'medium', shade: 'neutral', imageUrl: sageGreenCabinetImg },
]

export const LIGHTING_OPTIONS: MaterialOptionDto[] = [
  { id: 'light-pendant', name: 'Pendant Light', costTier: 'medium', shade: 'neutral', imageUrl: blackPendantLightImg },
  { id: 'light-recessed', name: 'Recessed Downlights', costTier: 'low', shade: 'neutral' },
  { id: 'light-chandelier', name: 'Chandelier', costTier: 'high', shade: 'light' },
  { id: 'light-track', name: 'Track Lighting', costTier: 'medium', shade: 'neutral' },
  { id: 'light-wall-sconce', name: 'Wall Sconce', costTier: 'medium', shade: 'neutral' },
]

export const SOFA_OPTIONS: MaterialOptionDto[] = [
  { id: 'sofa-linen', name: 'Linen Sofa', costTier: 'medium', shade: 'light', imageUrl: linenModularSofaImg },
  { id: 'sofa-leather', name: 'Leather Sofa', costTier: 'high', shade: 'dark' },
  { id: 'sofa-velvet', name: 'Velvet Sofa', costTier: 'high', shade: 'dark' },
  { id: 'sofa-fabric', name: 'Fabric Sofa', costTier: 'low', shade: 'neutral' },
  { id: 'sofa-modular', name: 'Modular Sofa', costTier: 'high', shade: 'neutral', imageUrl: linenModularSofaImg },
]

export const TABLE_OPTIONS: MaterialOptionDto[] = [
  { id: 'table-timber', name: 'Timber Dining Table', costTier: 'medium', shade: 'dark' },
  { id: 'table-marble', name: 'Marble Coffee Table', costTier: 'high', shade: 'light' },
  { id: 'table-glass', name: 'Glass Coffee Table', costTier: 'medium', shade: 'light', imageUrl: glassCoffeeTableImg },
  { id: 'table-concrete', name: 'Concrete Table', costTier: 'medium', shade: 'dark', imageUrl: concreteDiningTableImg },
  { id: 'table-rattan', name: 'Rattan Side Table', costTier: 'low', shade: 'neutral', imageUrl: rattanSideTableImg },
]

export const CHAIR_OPTIONS: MaterialOptionDto[] = [
  { id: 'chair-timber', name: 'Timber Chair', costTier: 'medium', shade: 'dark', imageUrl: timberChairImg },
  { id: 'chair-upholstered', name: 'Upholstered Armchair', costTier: 'high', shade: 'neutral' },
  { id: 'chair-rattan', name: 'Rattan Chair', costTier: 'low', shade: 'neutral', imageUrl: rattanSideTableImg },
  { id: 'chair-velvet', name: 'Velvet Accent Chair', costTier: 'high', shade: 'dark' },
]

export const BED_OPTIONS: MaterialOptionDto[] = [
  { id: 'bed-timber', name: 'Timber Bed Frame', costTier: 'medium', shade: 'dark' },
  { id: 'bed-upholstered', name: 'Upholstered Bed', costTier: 'high', shade: 'neutral' },
  { id: 'bed-rattan', name: 'Rattan Bed', costTier: 'medium', shade: 'neutral', imageUrl: rattanSideTableImg },
  { id: 'bed-platform', name: 'Platform Bed', costTier: 'low', shade: 'neutral', imageUrl: platformBedFrameImg },
  { id: 'bed-metal', name: 'Metal Bed Frame', costTier: 'low', shade: 'dark' },
]

export const DINING_TABLE_OPTIONS: MaterialOptionDto[] = [
  { id: 'dtable-timber', name: 'Solid Timber', costTier: 'medium', shade: 'dark' },
  { id: 'dtable-marble', name: 'Marble Top', costTier: 'high', shade: 'light' },
  { id: 'dtable-glass', name: 'Glass Top', costTier: 'medium', shade: 'light', imageUrl: glassCoffeeTableImg },
  { id: 'dtable-concrete', name: 'Concrete Top', costTier: 'medium', shade: 'dark', imageUrl: concreteDiningTableImg },
  { id: 'dtable-rattan', name: 'Rattan & Timber', costTier: 'low', shade: 'neutral', imageUrl: rattanSideTableImg },
]

export const DINING_CHAIR_OPTIONS: MaterialOptionDto[] = [
  { id: 'dchair-timber', name: 'Timber (set of 4)', costTier: 'low', shade: 'dark', imageUrl: timberChairImg },
  { id: 'dchair-upholstered', name: 'Upholstered (set of 4)', costTier: 'medium', shade: 'neutral' },
  { id: 'dchair-velvet', name: 'Velvet (set of 4)', costTier: 'high', shade: 'dark' },
  { id: 'dchair-rattan', name: 'Rattan (set of 4)', costTier: 'low', shade: 'neutral', imageUrl: rattanSideTableImg },
  { id: 'dchair-metal', name: 'Metal Frame (set of 4)', costTier: 'medium', shade: 'neutral' },
]

export const DESK_OPTIONS: MaterialOptionDto[] = [
  { id: 'desk-timber', name: 'Solid Timber', costTier: 'medium', shade: 'dark' },
  { id: 'desk-laminate', name: 'Laminate', costTier: 'low', shade: 'neutral' },
  { id: 'desk-glass', name: 'Glass Top', costTier: 'medium', shade: 'light', imageUrl: glassCoffeeTableImg },
  { id: 'desk-marble', name: 'Marble Top', costTier: 'high', shade: 'light', imageUrl: whiteMarlbeBenchtopImg },
  { id: 'desk-standing', name: 'Sit-Stand Adjustable', costTier: 'high', shade: 'neutral' },
]

export const DECKING_OPTIONS: MaterialOptionDto[] = [
  { id: 'deck-hardwood', name: 'Hardwood Timber', costTier: 'high', shade: 'dark' },
  { id: 'deck-composite', name: 'Composite Decking', costTier: 'medium', shade: 'neutral' },
  { id: 'deck-concrete', name: 'Stamped Concrete', costTier: 'medium', shade: 'dark', imageUrl: concreteDiningTableImg },
  { id: 'deck-tiles', name: 'Outdoor Porcelain Tiles', costTier: 'medium', shade: 'light' },
  { id: 'deck-pebble', name: 'Pebble & Aggregate', costTier: 'low', shade: 'neutral' },
]

export const OUTDOOR_FURNITURE_OPTIONS: MaterialOptionDto[] = [
  { id: 'outdoor-wicker', name: 'Wicker Lounge Set', costTier: 'medium', shade: 'neutral', imageUrl: rattanSideTableImg },
  { id: 'outdoor-teak', name: 'Teak Dining Set', costTier: 'high', shade: 'dark' },
  { id: 'outdoor-metal', name: 'Powder-Coat Metal Set', costTier: 'low', shade: 'neutral' },
  { id: 'outdoor-concrete', name: 'Concrete & Steel', costTier: 'high', shade: 'dark', imageUrl: concreteDiningTableImg },
  { id: 'outdoor-rope', name: 'Rope & Aluminium', costTier: 'medium', shade: 'neutral' },
]
