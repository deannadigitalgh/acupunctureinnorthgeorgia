# Cal.com Embed Warnings - Known Issues & Resolution

## Overview

The Cal.com inline embed on the homepage generates two console warnings in Chrome. These are **known third-party library issues** that do not affect functionality.

---

## Warning 1: `markdownToSafeHTML` Should Not Be Imported Client-Side

### What It Is
```
markdownToSafeHTML.ts:8 `markdownToSafeHTML` should not be imported on the client side.
```

### Root Cause
This is a bug in Cal.com's embed script. The library incorrectly imports a server-side utility function that should only be used during build time, not at runtime in the browser.

### Impact
- **None** - This is purely a console warning
- The markdown rendering functionality still works correctly
- No user-facing issues

### Resolution
This cannot be fixed without Cal.com releasing an updated embed script. We are monitoring their repository for fixes: https://github.com/calcom/cal.com

---

## Warning 2: Zustand Deprecation Notice

### What It Is
```
[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'.
```

### Root Cause
Cal.com's embed script uses an older version of the zustand state management library that has been deprecated in favor of equality function-based stores.

### Impact
- **None** - This is a deprecation warning, not an error
- The booking calendar functions correctly
- No performance or functionality issues

### Resolution
This will be fixed when Cal.com updates their embed script to use the newer zustand API. Check their changelog for updates.

---

## Warning 3: aria-hidden Focus Issue (Accessibility)

### What It Is
```
Blocked aria-hidden on an element because its descendant retained focus.
The focus must not be hidden from assistive technology users.
```

### Root Cause
This occurs when Cal.com's modal dialog sets `aria-hidden="true"` on a parent element while a child element still has keyboard focus. This is an accessibility issue in Cal.com's component library.

### Impact
- **Minor** - Screen reader users may experience confusion during the booking flow
- Does not prevent booking appointments
- Affects only assistive technology users

### Resolution Options

#### Option 1: Accept as Third-Party Limitation (Recommended)
Since this is in Cal.com's code, we cannot fix it directly. The alternative (using a different scheduling platform) would require significant rework.

**Action**: Monitor Cal.com's accessibility updates and file an issue if not already reported.

#### Option 2: Use Iframe Embed Instead of Inline
Switching to an iframe embed would isolate the aria-hidden issue but has trade-offs:

| Feature | **Inline Embed** (Current) | **Iframe Embed** |
|---------|---------------------------|------------------|
| SEO Indexing | ✅ Google can index content | ❌ Hidden from crawlers |
| Conversion Rate | ✅ Higher (visible immediately) | ⚠️ Slightly lower |
| Accessibility Issues | ⚠️ aria-hidden warning | ✅ Isolated in iframe |
| Mobile UX | ✅ Native scroll | ⚠️ Can be tricky |
| Professional Look | ✅ Trustworthy for healthcare | ⚠️ Looks more like ad |

**Recommendation**: Keep inline embed (better for SEO and conversions) and monitor Cal.com's accessibility fixes.

---

## Why We're Not Suppressing These Warnings

You might wonder why we don't just suppress these console warnings with:
```javascript
console.warn = () => {}; // Don't do this!
```

**We intentionally don't suppress them because:**

1. **Debugging Value**: If Cal.com releases a breaking change, we need to know immediately
2. **Transparency**: Developers reviewing the code should see these warnings and understand they're third-party issues
3. **Best Practice**: Silencing all warnings makes it harder to catch real problems in our own code

---

## Monitoring & Future Actions

### ✅ What We've Done
- Documented these warnings clearly for future reference
- Verified functionality is not impacted
- Confirmed these are Cal.com library issues, not our implementation bugs

### 📋 Ongoing Tasks
1. **Monitor Cal.com Releases**: Check https://github.com/calcom/cal.com/releases for fixes to:
   - `markdownToSafeHTML` client-side import issue
   - Zustand deprecation updates
   - Accessibility improvements (aria-hidden handling)

2. **File Issues if Needed**: If these issues persist after Cal.com releases updates, file GitHub issues:
   - https://github.com/calcom/cal.com/issues

3. **Evaluate Alternatives**: If these warnings become critical for accessibility compliance, consider:
   - Calendly (different pricing model)
   - Square Appointments (free tier available)
   - Setmore (free tier with good accessibility)

---

## Testing Checklist

After any Cal.com updates, verify:

- [ ] Calendar loads correctly on homepage
- [ ] Booking flow completes successfully
- [ ] Email confirmations are sent
- [ ] Google Calendar sync works (if configured)
- [ ] Mobile display is functional
- [ ] No new console errors appear

---

## Contact

If you have questions about these warnings or want to discuss alternative scheduling solutions, review the main README.md for project context and contact information.

**Last Updated**: February 2026  
**Status**: Monitoring - No action required at this time
