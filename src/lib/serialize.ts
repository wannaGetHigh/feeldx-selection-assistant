import type { ZodType } from "zod"

export function serializeData<T>(raw: unknown, schema: ZodType<T>): T | null {
  const result = schema.safeParse(raw)
  if (!result.success) {
    if (import.meta.env.DEV) {
      console.warn('[serialize] Parse failed:', result.error.issues)
    }
    return null
  }
  return result.data
}
