import { describe, expect, it } from 'vitest'
import { getSlug } from '../src'

describe('getSlug languages', () => {
  it('should replace language specific symbols', () => {
    const symbolMap = {
      ar: {
        '∆': 'delta',
        '∞': 'la-nihaya',
        '♥': 'hob',
        '&': 'wa',
        '|': 'aw',
        '<': 'aqal-men',
        '>': 'akbar-men',
        '∑': 'majmou',
        '¤': 'omla',
      },

      cs: {
        '∆': 'delta',
        '∞': 'nekonecno',
        '♥': 'laska',
        '&': 'a',
        '|': 'nebo',
        '<': 'mensi nez',
        '>': 'vetsi nez',
        '∑': 'soucet',
        '¤': 'mena',
      },

      de: {
        '∆': 'delta',
        '∞': 'unendlich',
        '♥': 'Liebe',
        '&': 'und',
        '|': 'oder',
        '<': 'kleiner als',
        '>': 'groesser als',
        '∑': 'Summe von',
        '¤': 'Waehrung',
      },

      en: {
        '∆': 'delta',
        '∞': 'infinity',
        '♥': 'love',
        '&': 'and',
        '|': 'or',
        '<': 'less than',
        '>': 'greater than',
        '∑': 'sum',
        '¤': 'currency',
      },

      es: {
        '∆': 'delta',
        '∞': 'infinito',
        '♥': 'amor',
        '&': 'y',
        '|': 'u',
        '<': 'menos que',
        '>': 'mas que',
        '∑': 'suma de los',
        '¤': 'moneda',
      },

      fr: {
        '∆': 'delta',
        '∞': 'infiniment',
        '♥': 'Amour',
        '&': 'et',
        '|': 'ou',
        '<': 'moins que',
        '>': 'superieure a',
        '∑': 'somme des',
        '¤': 'monnaie',
      },

      hu: {
        '∆': 'delta',
        '∞': 'vegtelen',
        '♥': 'szerelem',
        '&': 'es',
        '|': 'vagy',
        '<': 'kisebb mint',
        '>': 'nagyobb mint',
        '∑': 'szumma',
        '¤': 'penznem',
      },

      my: {
        '∆': 'kwahkhyaet',
        '∞': 'asaonasme',
        '♥': 'akhyait',
        '&': 'nhin',
        '|': 'tho',
        '<': 'ngethaw',
        '>': 'kyithaw',
        '∑': 'paungld',
        '¤': 'ngwekye',
      },

      nl: {
        '∆': 'delta',
        '∞': 'oneindig',
        '♥': 'liefde',
        '&': 'en',
        '|': 'of',
        '<': 'kleiner dan',
        '>': 'groter dan',
        '∑': 'som',
        '¤': 'valuta',
      },

      it: {
        '∆': 'delta',
        '∞': 'infinito',
        '♥': 'amore',
        '&': 'e',
        '|': 'o',
        '<': 'minore di',
        '>': 'maggiore di',
        '∑': 'somma',
        '¤': 'moneta',
      },

      pl: {
        '∆': 'delta',
        '∞': 'nieskonczonosc',
        '♥': 'milosc',
        '&': 'i',
        '|': 'lub',
        '<': 'mniejsze niz',
        '>': 'wieksze niz',
        '∑': 'suma',
        '¤': 'waluta',
      },

      pt: {
        '∆': 'delta',
        '∞': 'infinito',
        '♥': 'amor',
        '&': 'e',
        '|': 'ou',
        '<': 'menor que',
        '>': 'maior que',
        '∑': 'soma',
        '¤': 'moeda',
      },

      ru: {
        '∆': 'delta',
        '∞': 'beskonechno',
        '♥': 'lubov',
        '&': 'i',
        '|': 'ili',
        '<': 'menshe',
        '>': 'bolshe',
        '∑': 'summa',
        '¤': 'valjuta',
      },

      sk: {
        '∆': 'delta',
        '∞': 'nekonecno',
        '♥': 'laska',
        '&': 'a',
        '|': 'alebo',
        '<': 'menej ako',
        '>': 'viac ako',
        '∑': 'sucet',
        '¤': 'mena',
      },

      tr: {
        '∆': 'delta',
        '∞': 'sonsuzluk',
        '♥': 'ask',
        '&': 've',
        '|': 'veya',
        '<': 'kucuktur',
        '>': 'buyuktur',
        '∑': 'toplam',
        '¤': 'para birimi',
      },

      vn: {
        '∆': 'delta',
        '∞': 'vo cuc',
        '♥': 'yeu',
        '&': 'va',
        '|': 'hoac',
        '<': 'nho hon',
        '>': 'lon hon',
        '∑': 'tong',
        '¤': 'tien te',
      },

    }

    Object.keys(symbolMap)
      .forEach((l) => {
        // console.log('\ncheck language: ' + l);

        Object.keys(symbolMap[l])
          .forEach((s) => {
            const k = symbolMap[l][s]

            // console.log('check symbol: ' + s);

            expect(getSlug(`Foo ${s} Bar`, { lang: l, maintainCase: true })).toBe(`Foo-${getSlug(k, { maintainCase: true })}-Bar`)

            expect(getSlug(`Foo ${s} Bar`, { lang: l })).toBe(`foo-${getSlug(k)}-bar`)
          })
      })

    expect(getSlug('EN Foo & Bar ')).toBe('en-foo-and-bar')

    expect(getSlug('EN Foo & Bar ', { lang: 'en' })).toBe('en-foo-and-bar')

    expect(getSlug('de Foo & Bar ', { lang: 'de' })).toBe('de-foo-und-bar')

    expect(getSlug('True Foo & Bar ', { lang: true })).toBe('true-foo-and-bar')

    expect(getSlug('False Foo & Bar ', { lang: false })).toBe('false-foo-bar')

    expect(getSlug('False Foo & Bar ', { lang: false, symbols: true })).toBe('false-foo-bar')

    expect(getSlug('xx Foo & Bar ', { lang: 'xx' })).toBe('xx-foo-and-bar')

    expect(getSlug('obj Foo & Bar ', { lang: {} })).toBe('obj-foo-and-bar')

    expect(getSlug('array Foo & Bar ', { lang: [] })).toBe('array-foo-and-bar')

    expect(getSlug('array Foo & Bar ', { lang: [], symbols: false })).toBe('array-foo-bar')

    expect(getSlug('null Foo & Bar ', { lang: null })).toBe('null-foo-and-bar')

    expect(getSlug('null Foo & Bar ', { lang: null, symbols: false })).toBe('null-foo-bar')

    expect(getSlug('null Foo & Bar ', { lang: null, symbols: true })).toBe('null-foo-and-bar')
  })
})
