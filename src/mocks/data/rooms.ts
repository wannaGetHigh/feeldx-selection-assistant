import type { RoomConfigDto } from '@/dtos/room-config.dto'
import {
  BED_OPTIONS,
  BENCHTOP_OPTIONS,
  CABINETRY_OPTIONS,
  CHAIR_OPTIONS,
  DECKING_OPTIONS,
  DESK_OPTIONS,
  DINING_CHAIR_OPTIONS,
  DINING_TABLE_OPTIONS,
  FLOORING_OPTIONS,
  LIGHTING_OPTIONS,
  OUTDOOR_FURNITURE_OPTIONS,
  SOFA_OPTIONS,
  TABLE_OPTIONS,
  WALL_FINISH_OPTIONS,
} from './options'

export const ROOM_CONFIGS: RoomConfigDto[] = [
  {
    type: 'kitchen',
    label: 'Kitchen',
    emoji: '🍳',
    categories: [
      { id: 'flooring', label: 'Flooring', options: FLOORING_OPTIONS },
      { id: 'wall-finish', label: 'Wall Finish', options: WALL_FINISH_OPTIONS },
      { id: 'benchtop', label: 'Benchtop', options: BENCHTOP_OPTIONS },
      { id: 'cabinetry', label: 'Cabinetry Finish', options: CABINETRY_OPTIONS },
      { id: 'lighting', label: 'Lighting', options: LIGHTING_OPTIONS },
    ],
  },
  {
    type: 'bathroom',
    label: 'Bathroom',
    emoji: '🚿',
    categories: [
      { id: 'flooring', label: 'Flooring', options: FLOORING_OPTIONS },
      { id: 'wall-finish', label: 'Wall Finish', options: WALL_FINISH_OPTIONS },
      { id: 'benchtop', label: 'Benchtop', options: BENCHTOP_OPTIONS },
      { id: 'cabinetry', label: 'Cabinetry Finish', options: CABINETRY_OPTIONS },
      { id: 'lighting', label: 'Lighting', options: LIGHTING_OPTIONS },
    ],
  },
  {
    type: 'living-room',
    label: 'Living Room',
    emoji: '🛋️',
    categories: [
      { id: 'flooring', label: 'Flooring', options: FLOORING_OPTIONS },
      { id: 'wall-finish', label: 'Wall Finish', options: WALL_FINISH_OPTIONS },
      { id: 'sofa', label: 'Sofa', options: SOFA_OPTIONS },
      { id: 'table', label: 'Table', options: TABLE_OPTIONS },
      { id: 'lighting', label: 'Lighting', options: LIGHTING_OPTIONS },
    ],
  },
  {
    type: 'bedroom',
    label: 'Bedroom',
    emoji: '🛏️',
    categories: [
      { id: 'flooring', label: 'Flooring', options: FLOORING_OPTIONS },
      { id: 'wall-finish', label: 'Wall Finish', options: WALL_FINISH_OPTIONS },
      { id: 'bed', label: 'Bed', options: BED_OPTIONS },
      { id: 'chair', label: 'Chair', options: CHAIR_OPTIONS },
      { id: 'lighting', label: 'Lighting', options: LIGHTING_OPTIONS },
    ],
  },
  {
    type: 'laundry',
    label: 'Laundry',
    emoji: '🫧',
    categories: [
      { id: 'flooring', label: 'Flooring', options: FLOORING_OPTIONS },
      { id: 'wall-finish', label: 'Wall Finish', options: WALL_FINISH_OPTIONS },
      { id: 'cabinetry', label: 'Cabinetry Finish', options: CABINETRY_OPTIONS },
      { id: 'lighting', label: 'Lighting', options: LIGHTING_OPTIONS },
    ],
  },
  {
    type: 'dining-room',
    label: 'Dining Room',
    emoji: '🍽️',
    categories: [
      { id: 'flooring', label: 'Flooring', options: FLOORING_OPTIONS },
      { id: 'wall-finish', label: 'Wall Finish', options: WALL_FINISH_OPTIONS },
      { id: 'dining-table', label: 'Dining Table', options: DINING_TABLE_OPTIONS },
      { id: 'dining-chair', label: 'Dining Chairs', options: DINING_CHAIR_OPTIONS },
      { id: 'lighting', label: 'Lighting', options: LIGHTING_OPTIONS },
    ],
  },
  {
    type: 'home-office',
    label: 'Home Office',
    emoji: '💼',
    categories: [
      { id: 'flooring', label: 'Flooring', options: FLOORING_OPTIONS },
      { id: 'wall-finish', label: 'Wall Finish', options: WALL_FINISH_OPTIONS },
      { id: 'desk', label: 'Desk', options: DESK_OPTIONS },
      { id: 'chair', label: 'Chair', options: CHAIR_OPTIONS },
      { id: 'lighting', label: 'Lighting', options: LIGHTING_OPTIONS },
    ],
  },
  {
    type: 'outdoor',
    label: 'Outdoor',
    emoji: '🌿',
    categories: [
      { id: 'decking', label: 'Decking', options: DECKING_OPTIONS },
      { id: 'outdoor-furniture', label: 'Outdoor Furniture', options: OUTDOOR_FURNITURE_OPTIONS },
      { id: 'lighting', label: 'Lighting', options: LIGHTING_OPTIONS },
    ],
  },
]
