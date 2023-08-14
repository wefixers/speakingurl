import { describe, expect, it } from 'vitest'
import { getSlug } from '../src'

describe('getSlug symbols', () => {
  it('should convert symbols', () => {
    expect(getSlug('Foo & Bar | Baz')).toBe('foo-and-bar-or-baz')

    expect(getSlug('Foo & Bar | Baz', { lang: 'en' })).toBe('foo-and-bar-or-baz')

    expect(getSlug('Foo & Bar | Baz', { lang: 'de' })).toBe('foo-und-bar-oder-baz')

    expect(getSlug('Foo & Bar | Baz', { lang: 'fr' })).toBe('foo-et-bar-ou-baz')

    expect(getSlug('Foo & Bar | Baz', { lang: 'es' })).toBe('foo-y-bar-u-baz')

    expect(getSlug('Foo & Bar | Baz', { lang: 'ru' })).toBe('foo-i-bar-ili-baz')

    expect(getSlug('Foo & Bar | Baz', { lang: 'cs' })).toBe('foo-a-bar-nebo-baz')

    expect(getSlug('Foo & Bar | Baz', { lang: 'sk' })).toBe('foo-a-bar-alebo-baz')
  })

  it('should not convert symbols with uric flag true', () => {
    expect(getSlug('Foo & Bar | Baz', { uric: true })).toBe('foo-&-bar-or-baz')

    expect(getSlug('Foo & Bar | Baz', { lang: 'en', uric: true })).toBe('foo-&-bar-or-baz')

    expect(getSlug('Foo & Bar | Baz', { lang: 'de', uric: true })).toBe('foo-&-bar-oder-baz')

    expect(getSlug('Foo & Bar | Baz', { lang: 'fr', uric: true })).toBe('foo-&-bar-ou-baz')

    expect(getSlug('Foo & Bar | Baz', { lang: 'es', uric: true })).toBe('foo-&-bar-u-baz')

    expect(getSlug('Foo & Bar | Baz', { lang: 'ru', uric: true })).toBe('foo-&-bar-ili-baz')

    expect(getSlug('Foo & Bar | Baz', { lang: 'cs', uric: true })).toBe('foo-&-bar-nebo-baz')

    expect(getSlug('Foo & Bar | Baz', { lang: 'sk', uric: true })).toBe('foo-&-bar-alebo-baz')
  })

  it('should not convert symbols with uricNoSlash flag true', () => {
    expect(getSlug('Foo & Bar | Baz', { uricNoSlash: true })).toBe('foo-&-bar-or-baz')

    expect(getSlug('Foo & Bar | Baz', { lang: 'en', uricNoSlash: true })).toBe('foo-&-bar-or-baz')

    expect(getSlug('Foo & Bar | Baz', { lang: 'de', uricNoSlash: true })).toBe('foo-&-bar-oder-baz')

    expect(getSlug('Foo & Bar | Baz', { lang: 'fr', uricNoSlash: true })).toBe('foo-&-bar-ou-baz')

    expect(getSlug('Foo & Bar | Baz', { lang: 'es', uricNoSlash: true })).toBe('foo-&-bar-u-baz')

    expect(getSlug('Foo & Bar | Baz', { lang: 'ru', uricNoSlash: true })).toBe('foo-&-bar-ili-baz')

    expect(getSlug('Foo & Bar | Baz', { lang: 'cs', uricNoSlash: true })).toBe('foo-&-bar-nebo-baz')

    expect(getSlug('Foo & Bar | Baz', { lang: 'sk', uricNoSlash: true })).toBe('foo-&-bar-alebo-baz')
  })

  it('should not convert symbols with mark flag true', () => {
    expect(getSlug('Foo (Bar) . Baz', { mark: true, symbols: false })).toBe('foo-(bar)-.-baz')

    expect(getSlug('Foo (Bar) . Baz', { lang: 'en', mark: true })).toBe('foo-(bar)-.-baz')

    expect(getSlug('Foo (Bar) . & Baz', { lang: 'en', mark: true })).toBe('foo-(bar)-.-and-baz')

    expect(getSlug('Foo (Bar) . Baz', { lang: 'de', mark: true })).toBe('foo-(bar)-.-baz')

    expect(getSlug('Foo (Bar) . Baz', { lang: 'fr', mark: true })).toBe('foo-(bar)-.-baz')

    expect(getSlug('Foo (Bar) . Baz', { lang: 'es', mark: true })).toBe('foo-(bar)-.-baz')

    expect(getSlug('Foo (Bar) . Baz', { lang: 'ru', mark: true })).toBe('foo-(bar)-.-baz')

    expect(getSlug('Foo (Bar) . Baz', { lang: 'cs', mark: true })).toBe('foo-(bar)-.-baz')

    expect(getSlug('Foo (Bar) . Baz', { lang: 'sk', mark: true })).toBe('foo-(bar)-.-baz')
  })

  it('should convert symbols with flags true', () => {
    expect(getSlug('Foo (♥) ; Baz=Bar', { lang: 'en', uric: true, uricNoSlash: true, mark: true })).toBe('foo-(love)-;-baz=bar')

    expect(getSlug('Foo (♥) ; Baz=& Bar', { lang: 'en', uric: true, uricNoSlash: true, mark: true })).toBe('foo-(love)-;-baz=&-bar')

    expect(getSlug('Foo (♥) ; Baz=& Bar', { lang: 'en', mark: true })).toBe('foo-(love)-baz-and-bar')

    expect(getSlug('Foo (♥) ; Baz=Bar', { lang: 'de', uric: true, uricNoSlash: true, mark: true })).toBe('foo-(liebe)-;-baz=bar')

    expect(getSlug('Foo (♥) ; Baz=Bar', { lang: 'fr', uric: true, uricNoSlash: true, mark: true })).toBe('foo-(amour)-;-baz=bar')

    expect(getSlug('Foo (♥) ; Baz=Bar', { lang: 'es', uric: true, uricNoSlash: true, mark: true })).toBe('foo-(amor)-;-baz=bar')

    expect(getSlug('Foo (♥) ; Baz=Bar', { lang: 'ru', uric: true, uricNoSlash: true, mark: true })).toBe('foo-(lubov)-;-baz=bar')

    expect(getSlug('Foo (♥) ; Baz=Bar', { lang: 'cs', uric: true, uricNoSlash: true, mark: true })).toBe('foo-(laska)-;-baz=bar')

    expect(getSlug('Foo (♥) ; Baz=Bar', { lang: 'sk', uric: true, uricNoSlash: true, mark: true })).toBe('foo-(laska)-;-baz=bar')

    expect(getSlug(' Sch(* )ner (♥)Ti♥tel ♥läßt grüßen!? Bel♥♥ été !', { lang: 'en', uric: true, uricNoSlash: true, mark: true, maintainCase: true })).toBe('Sch(*-)ner-(love)Ti-love-tel-love-laesst-gruessen!?-Bel-love-love-ete-!')
  })

  it('should not convert symbols with flags true', () => {
    expect(getSlug('Foo (♥) ; Baz=Bar', { lang: 'en', mark: true, symbols: false })).toBe('foo-(-)-baz-bar')

    expect(getSlug('Foo (♥) ; Baz=& Bar', { lang: 'en', mark: true, symbols: false })).toBe('foo-(-)-baz-bar')

    expect(getSlug('Foo (♥) ; Baz=& Bar', { lang: 'en', mark: true, symbols: false })).toBe('foo-(-)-baz-bar')

    expect(getSlug('Foo (♥) ; Baz= & Bar', { lang: 'de', mark: true, symbols: false })).toBe('foo-(-)-baz-bar')

    expect(getSlug('Foo (♥) ; Baz=& Bar', { lang: 'fr', mark: true, symbols: false })).toBe('foo-(-)-baz-bar')

    expect(getSlug('Foo (♥) ; Baz=& Bar', { lang: 'es', mark: true, symbols: false })).toBe('foo-(-)-baz-bar')

    expect(getSlug('Foo (♥) ; Baz=& Bar', { lang: 'ru', mark: true, symbols: false })).toBe('foo-(-)-baz-bar')

    expect(getSlug('Foo (♥) ; Baz=& Bar', { lang: 'cs', mark: true, symbols: false })).toBe('foo-(-)-baz-bar')

    expect(getSlug('Foo (♥) ; Baz=& Bar', { lang: 'sk', mark: true, symbols: false })).toBe('foo-(-)-baz-bar')

    expect(getSlug(' Sch(* )ner (♥)Ti♥tel ♥läßt grüßen!? Bel♥♥ été !', { lang: 'en', mark: true, maintainCase: true, symbols: false })).toBe('Sch(*-)ner-(-)Ti-tel-laesst-gruessen!-Bel-ete-!')
  })

  it('should replace symbols (de)', () => {
    expect(getSlug('Äpfel & Birnen', { lang: 'de' })).toBe('aepfel-und-birnen')

    expect(getSlug('ÄÖÜäöüß', { lang: 'de', maintainCase: true })).toBe('AeOeUeaeoeuess')
  })

  it('should not replace symbols (de)', () => {
    expect(getSlug('Äpfel & Birnen', { lang: 'de', symbols: false })).toBe('aepfel-birnen')

    expect(getSlug('ÄÖÜäöüß & Äpfel', { lang: 'de', maintainCase: true, symbols: false })).toBe('AeOeUeaeoeuess-Aepfel')
  })

  it('should replace chars by cs language standards', () => {
    expect(getSlug('AaÁáBbCcČčDdĎďEeÉéĚěFfGgHhChchIiÍíJjKkLlMmNnŇňOoÓóPpQqRrŘřSsŠšTtŤťUuÚúŮůVvWwXxYyÝýZzŽž', { lang: 'cs' })).toBe('aaaabbccccddddeeeeeeffgghhchchiiiijjkkllmmnnnnooooppqqrrrrssssttttuuuuuuvvwwxxyyyyzzzz')

    expect(getSlug('AaÁáBbCcČčDdĎďEeÉéĚěFfGgHhChchIiÍíJjKkLlMmNnŇňOoÓóPpQqRrŘřSsŠšTtŤťUuÚúŮůVvWwXxYyÝýZzŽž', { lang: 'cs', maintainCase: true })).toBe('AaAaBbCcCcDdDdEeEeEeFfGgHhChchIiIiJjKkLlMmNnNnOoOoPpQqRrRrSsSsTtTtUuUuUuVvWwXxYyYyZzZz')
  })

  it('should replace chars by sk language standards', () => {
    expect(getSlug('AaÁaÄäBbCcČčDdĎďDzdzDždžEeÉéFfGgHhChchIiÍíJjKkLlĹĺĽľMmNnŇňOoÓóÔôPpQqRrŔŕSsŠšTtŤťUuÚúVvWwXxYyÝýZzŽž', { lang: 'sk' })).toBe('aaaaaabbccccdddddzdzdzdzeeeeffgghhchchiiiijjkkllllllmmnnnnooooooppqqrrrrssssttttuuuuvvwwxxyyyyzzzz')

    expect(getSlug('AaÁaÄäBbCcČčDdĎďDzdzDždžEeÉéFfGgHhChchIiÍíJjKkLlĹĺĽľMmNnŇňOoÓóÔôPpQqRrŔŕSsŠšTtŤťUuÚúVvWwXxYyÝýZzŽž', { lang: 'sk', maintainCase: true })).toBe('AaAaAaBbCcCcDdDdDzdzDzdzEeEeFfGgHhChchIiIiJjKkLlLlLlMmNnNnOoOoOoPpQqRrRrSsSsTtTtUuUuVvWwXxYyYyZzZz')
  })

  it('should ignore not available language param', () => {
    expect(getSlug('Äpfel & Birnen', { lang: 'xx' })).toBe('aepfel-and-birnen')
  })

  it('should convert currency symbols to lowercase', () => {
    expect(getSlug('NEXUS4 only €199!', { maintainCase: false })).toBe('nexus4-only-eur199')

    expect(getSlug('NEXUS4 only €299.93', { maintainCase: false })).toBe('nexus4-only-eur299-93')

    expect(getSlug('NEXUS4 only 円399.73', { maintainCase: false })).toBe('nexus4-only-yen399-73')
  })

  it('should convert currency symbols to uppercase', () => {
    expect(getSlug('NEXUS4 only €199!', { maintainCase: true })).toBe('NEXUS4-only-EUR199')

    expect(getSlug('NEXUS4 only €299.93', { maintainCase: true })).toBe('NEXUS4-only-EUR299-93')

    expect(getSlug('NEXUS4 only 円399.73', { maintainCase: true })).toBe('NEXUS4-only-YEN399-73')
  })
})
