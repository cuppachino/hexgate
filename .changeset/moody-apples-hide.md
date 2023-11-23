---
"hexgate": patch
---

fix poll onRetry: pass count to callback

The function was polling correctly, but not incrementing the attempt variable intended for debugging.
