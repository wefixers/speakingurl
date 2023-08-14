import { describe, expect, it } from 'vitest'
import { getSlug } from '../src'

describe('getSlug translate hungarian letters', () => {
  it('umlaut should be single letter transliteration', () => {
    expect(getSlug('AÁEÉIÍOÓÖŐUÚÜŰ', { lang: 'hu' })).toBe('aaeeiioooouuuu')

    expect(getSlug('aáeéiíoóöőuúüű', { lang: 'hu' })).toBe('aaeeiioooouuuu')

    expect(getSlug('AÁEÉIÍOÓÖŐUÚÜŰ AÁEÉIÍOÓÖŐUÚÜŰ', { lang: 'hu' })).toBe('aaeeiioooouuuu-aaeeiioooouuuu')

    expect(getSlug('aáeéiíoóöőuúüű aáeéiíoóöőuúüű', { lang: 'hu' })).toBe('aaeeiioooouuuu-aaeeiioooouuuu')
  })
})
