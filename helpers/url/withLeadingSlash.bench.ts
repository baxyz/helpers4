/**
 * This file is part of helpers4.
 * Copyright (C) 2025 baxyz
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { withLeadingSlash } from 'radashi'

describe('withLeadingSlash', () => {
  bench('with no input', () => {
    withLeadingSlash(undefined)
  })
  bench('with empty string', () => {
    withLeadingSlash('')
  })
  bench('with missing leading slash', () => {
    withLeadingSlash('some/path')
  })
  bench('with leading slash', () => {
    withLeadingSlash('/some/path')
  })
})
