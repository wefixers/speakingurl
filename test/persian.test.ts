import { describe, expect, it } from 'vitest'
import { getSlug } from '../src'

describe('getSlug translate persian letters/numbers', () => {
  it('should be ', () => {
    expect(getSlug('گ چ پ ژ ک ی ۰ ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹', { lang: 'fa' })).toBe('g-ch-p-zh-k-y-0-1-2-3-4-5-6-7-8-9')
  })
})
