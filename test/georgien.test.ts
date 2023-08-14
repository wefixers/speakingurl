import { describe, expect, it } from 'vitest'
import { getSlug } from '../src'

describe('getSlug translate georgien letters', () => {
  it('should be ', () => {
    expect(getSlug('აბ', { lang: 'ge' })).toBe('ab')
  })
})
