import z from 'zod'

import { RoomConfigDtoSchema, type RoomConfigDto } from '@/dtos/room-config.dto'
import { serializeData } from '@/lib/serialize'

import { BaseApiAdapterClass } from './base-api-adapter'

export class RoomConfigApiAdapterClass extends BaseApiAdapterClass {
  private getRoomConfigUrl() {
    return '/room-configs'
  }

  async listRoomConfigs() {
    const raw = await this.get<RoomConfigDto[]>(this.getRoomConfigUrl())
    return serializeData(raw, z.array(RoomConfigDtoSchema)) ?? []
  }
}
