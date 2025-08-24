/**
 * This file is part of helpers4.
 * Copyright (C) 2025 baxyz
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Simple helper that check if two lists shared at least an item in common.
 *
 * @param a One list
 * @param b Another list
 * @returns `true` if one item is in common, `false` otherwise.
 */
export function oneInCommon<T>(a: readonly T[], b: readonly T[]): boolean {
    return a.some((i) => b.includes(i));
}
