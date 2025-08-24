/**
 * This file is part of helpers4.
 * Copyright (C) 2025 baxyz
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { withoutTrailingSlash } from 'radashi'

describe('withoutTrailingSlash', () => {
  bench('with no input', () => {
    withoutTrailingSlash(undefined)
  })
  bench('with empty string', () => {
    withoutTrailingSlash('')
  })
  bench('with trailing slash', () => {
    withoutTrailingSlash('some/path/')
  })
  bench('without trailing slash', () => {
    withoutTrailingSlash('some/path')
  })
})
