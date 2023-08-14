import { describe, expect, it } from 'vitest'
import { getSlug } from '../src'

describe('getSlug translate cyrillic letters', () => {
  it('should be ', () => {
    expect(getSlug('Пью')).toBe('pyu')
  })
})
