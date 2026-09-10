# Changelog

## 1.2.1

- The published package no longer contains type declarations for Storybook-only files
  (`dist/stories/**`). Nothing in the public API ever referenced them, so this removes unused
  files from the package rather than changing anything consumers could import.

## 1.2.0

- `usePageFromRouteQuery` accepts a `replace` option and forwards it to `useRouteQuery`, so paging
  through a list can update the current history entry instead of adding one entry per page.
  Defaults to `push`, so existing callers are unaffected.

## 1.1.0

- `useRouteQuery` accepts a `replace` option. When set, `setQuery` and `setQueryParam` call
  `router.replace()` instead of `router.push()`, so keeping filters in the URL no longer adds a
  history entry per change. Defaults to `push`, so existing callers are unaffected.

## 1.0.0

Version 1.0 🎉
