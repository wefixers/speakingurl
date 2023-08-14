import { describe, expect, it } from 'vitest'
import { getSlug } from '../src'

describe('getSlug with custom replacement', () => {
  it('should be transliterated', () => {
    expect(getSlug('буу', { lang: false, custom: { б: 'б', у: 'у' } })).toBe('буу')

    expect(getSlug('[nodejs]', { custom: { '[': '[', ']': ']' } })).toBe('[nodejs]')

    expect(getSlug('[Äpfel]', { custom: { '[': '[', ']': ']' } })).toBe('[aepfel]')

    expect(getSlug('[Äpfel]', { lang: false, custom: { '[': '[', ']': ']' } })).toBe('[aepfel]')
  })

  it('should be extended with allowed chars', () => {
    expect(getSlug('буу', { custom: ['б', 'у'] })).toBe('буу')

    expect(getSlug('[Knöpfe]', { custom: ['[', ']'] })).toBe('[knoepfe]')

    expect(getSlug('[Knöpfe & Ösen]', { custom: ['[', ']'] })).toBe('[knoepfe-and-oesen]')

    expect(getSlug('[Knöpfe & Ösen]', { custom: ['[', ']'], lang: 'de' })).toBe('[knoepfe-und-oesen]')

    expect(getSlug('[Knöpfe]', { maintainCase: true, custom: ['[', ']'] })).toBe('[Knoepfe]')

    expect(getSlug('[Knöpfe haben Löcher]', { titleCase: true, custom: ['[', ']'] })).toBe('[Knoepfe-Haben-Loecher]')

    expect(getSlug('[knöpfe haben runde löcher]', { titleCase: ['haben', 'runde'], custom: ['[', ']'] })).toBe('[Knoepfe-haben-runde-Loecher]')

    expect(getSlug('[knöpfe haben runde löcher]', { titleCase: ['haben', 'runde'], maintainCase: true, custom: ['[', ']'] })).toBe('[Knoepfe-haben-runde-Loecher]')
  })
})
