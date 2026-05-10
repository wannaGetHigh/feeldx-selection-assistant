import z from 'zod'

import { RoomConfigDtoSchema, type RoomConfigDto, type RoomConfigPayload, type RoomType} from '@/dtos/room-config.dto'
import { serializeData } from '@/lib/serialize'

import { BaseApiAdapterClass } from './base-api-adapter'

export class RoomConfigApiAdapterClass extends BaseApiAdapterClass {
  private getRoomConfigsUrl() {
    return '/room-configs'
  }

  async roomConfig(room: RoomType) {
    const queryParams = new URLSearchParams({ room })
    return await this.get<RoomConfigPayload>(`${this.getRoomConfigsUrl()}/room?${queryParams.toString()}`) ?? {}
  }

  async listRoomConfigs() {
    const raw = await this.get<RoomConfigDto[]>(this.getRoomConfigsUrl())
    return serializeData(raw, z.array(RoomConfigDtoSchema)) ?? []
  }

  async updateRoomConfig(payload: { room: RoomType, config: RoomConfigPayload }) {
    return this.put(this.getRoomConfigsUrl(), payload)
  }
}
