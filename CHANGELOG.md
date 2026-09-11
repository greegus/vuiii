# Changelog

## 1.2.2

- The published package is 4.8% smaller (74.3 kB → 70.8 kB). `dialogs` in the dialog stack is now
  explicitly typed, which stops an inferred type from expanding Vue's `Component` structurally and
  cuts the emitted declarations by 19%; the lib build no longer copies `public/favicon.ico` into
  `dist`; and two utilities that nothing referenced were removed. No API or runtime change —
  `vuiii.js` and `vuiii.css` are byte-identical to 1.2.1.

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
