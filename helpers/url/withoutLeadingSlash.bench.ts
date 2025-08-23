/**
 * This file is part of helpers4.
 * Copyright (C) 2025 baxyz
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { withoutLeadingSlash } from 'radashi'

describe('withoutLeadingSlash', () => {
  bench('with no input', () => {
    withoutLeadingSlash(undefined)
  })
  bench('with empty string', () => {
    withoutLeadingSlash('')
  })
  bench('with leading slash', () => {
    withoutLeadingSlash('/some/path')
  })
  bench('without leading slash', () => {
    withoutLeadingSlash('some/path')
  })
})
