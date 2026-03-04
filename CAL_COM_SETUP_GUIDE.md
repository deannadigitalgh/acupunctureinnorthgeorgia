# 📅 Cal.com Setup Guide for Deanna Stennett

## Overview

This guide will walk you through setting up your Cal.com account and configuring it to work with your Acupuncture in North Georgia website. The calendar is already embedded on your homepage - we just need to connect it to your actual availability!

---

## Step 1: Create Your Cal.com Account

1. **Go to** https://cal.com
2. Click **"Sign Up"** (top right corner)
3. Choose to sign up with:
   - Google account (recommended - easiest integration), OR
   - Email address
4. Follow the on-screen instructions to complete registration

✅ **Done!** You now have a Cal.com profile at: `https://cal.com/deannastennett`

---

## Step 2: Connect Your Calendar

### If Using Google Calendar (Recommended):

1. Log into your Cal.com dashboard
2. Go to **Settings** → **Connections**
3. Click **"Google Calendar"**
4. Sign in with your Google account
5. Grant permission for Cal.com to access your calendar
6. Choose which calendar(s) to sync:
   - ✅ Select your primary Google Calendar
   - ✅ Uncheck "Show as busy" for personal events (optional)

### If Using Apple Calendar:

1. Go to **Settings** → **Connections**
2. Click **"iCal/Outlook"**
3. Copy the **iCal URL** provided
4. In Apple Calendar app:
   - File → New Subscription
   - Paste the iCal URL
   - Set refresh interval to 5 minutes

---

## Step 3: Create Your First Event Type

### New Patient Acupuncture Appointment (90 minutes)

1. In Cal.com dashboard, click **"Event Types"** (left sidebar)
2. Click **"+ Add event type"**
3. Fill in the details:

```
Name: New Patient - Acupuncture
Duration: 90 minutes
Description: First visit includes comprehensive health assessment, treatment plan, and initial acupuncture session. Please arrive 15 minutes early to complete paperwork.
Price: $130 (optional - can remove if you handle payment offline)
```

4. **Availability** tab:
   - Click **"Add new schedule"**
   - Set your working hours (e.g., Mon-Fri 9AM-5PM)
   - Add buffer time between appointments (recommended: 15 minutes)
   
5. **Booking Settings**:
   - ✅ Enable "Require booking confirmation" (so you approve each appointment)
   - ✅ Set "Advance booking" to allow bookings up to 30 days out
   - ✅ Enable email notifications for yourself and clients

6. Click **"Save"**

---

### Follow-up Appointment (60 minutes)

1. Click **"+ Add event type"** again
2. Fill in:

```
Name: Follow-up - Acupuncture
Duration: 60 minutes
Description: Continuing acupuncture treatment session.
Price: $90 (optional)
```

3. Copy the same availability settings from your first event type
4. Click **"Save"**

---

### NAET Allergy Treatment (as needed)

1. Click **"+ Add event type"** again
2. Fill in:

```
Name: NAET Allergy Treatment
Duration: 60 minutes
Description: NAET (Nambudripad's Allergy Elimination Techniques) treatment session.
Price: Contact for pricing
```

3. Set availability and save

---

## Step 4: Get Your Event Type URL

After creating your event types, you'll need the exact URL slug to update on your website.

### For Each Event Type:

1. Go to **Event Types** in Cal.com dashboard
2. Click on the event type name (e.g., "New Patient - Acupuncture")
3. Scroll down to **"Share"** section
4. You'll see a URL like: `https://cal.com/deannastennett/new-patient-acupuncture`

The **slug** is everything after your username:
- Full URL: `https://cal.com/deannastennett/new-patient-acupuncture`
- Slug to use: `deannastennett/new-patient-acupuncture`

---

## Step 5: Update Your Website Configuration

### Option A: If You're Comfortable Editing Code

1. Open the file: `/src/config/contact.ts` in your project folder
2. Find this section (around line 130):

```typescript
export const CAL_COM = {
  calLink: 'deannastennett/newacuellijay', // Your event type slug from Cal.com
  containerId: 'my-cal-inline-newacuellijay',
  layout: 'month_view' as const,
} as const;
```

3. Update the `calLink` value to match your actual event type slug:

```typescript
calLink: 'deannastennett/new-patient-acupuncture', // ← Change this!
```

4. Save the file and commit/push to GitHub - your site will update automatically!

### Option A: If You Prefer Not to Edit Code

Just let me know which event type slug you want to use, and I'll update it for you!

---

## Step 6: Test Your Integration

1. **Open your website** in a browser (or run `npm run dev` locally)
2. Scroll down to the **"Book Your Appointment Online"** section on the homepage
3. You should see a month-view calendar appear
4. Click on an available date → select a time slot
5. Fill out the booking form with test information
6. Check your email for the confirmation

✅ **If you receive the confirmation email, it's working!**

---

## Step 7: Customize Your Calendar Appearance (Optional)

### Change Calendar Layout

By default, we're using `month_view`. You can change this in `/src/config/contact.ts`:

```typescript
layout: 'week_view' as const,  // Show weekly view instead
// OR
layout: 'day_view' as const,   // Show daily view
```

### Add Booking Questions

In Cal.com dashboard for each event type:

1. Go to **"Booking Questions"** tab
2. Click **"Add question"**
3. Add questions like:
   - "What brings you in today?" (text)
   - "Do you have any allergies?" (yes/no)
   - "Preferred appointment time of day?" (morning/afternoon/evening)

### Set Up SMS Reminders (Optional)

1. Go to **Settings** → **"Notifications"**
2. Enable SMS reminders
3. Add your phone number for test notifications

---

## Troubleshooting

### Calendar Not Showing Up?

1. Check browser console (F12) for errors
2. Verify the `calLink` in `/src/config/contact.ts` matches your Cal.com event type slug exactly
3. Make sure you're using `set:html={config.getCalEmbedHtml()}` in the Astro template (not `{config.getCalEmbedScript()}`)

### Wrong Dates Showing as Available?

1. Check that your Google Calendar is properly connected
2. Go to **Settings** → **"Connections"** → verify sync status
3. Try refreshing your calendar connection

### Clients Can't Book?

1. Verify you've set up availability in the event type settings
2. Make sure "Require booking confirmation" is enabled (so you can approve appointments)
3. Check spam folder for Cal.com emails

---

## Next Steps After Setup

Once your Cal.com account is configured:

1. ✅ **Test the full booking flow** with a real appointment
2. ✅ **Share your calendar link** on social media and in email signatures
3. ✅ **Monitor bookings** daily via Cal.com dashboard
4. ✅ **Collect reviews** from happy clients who booked online

---

## Support

If you run into any issues:

1. Check the [Cal.com Help Center](https://help.cal.com)
2. Email me with screenshots of any error messages
3. I can also hop on a quick call to walk through it together!

---

## Quick Reference

| Item | Value |
|------|-------|
| **Your Cal.com Profile** | https://cal.com/deannastennett |
| **Event Type URL Format** | https://cal.com/deannastennett/[event-slug] |
| **Dashboard Login** | https://app.cal.com |
| **Default Layout** | Month view (customizable) |
| **Embed Code Location** | Homepage contact section |

---

## Benefits You're Getting

✅ **24/7 Booking** - Clients can book outside office hours  
✅ **No Phone Tag** - Eliminates back-and-forth calls  
✅ **Calendar Sync** - Automatic conflict prevention  
✅ **Email Notifications** - Reminders for you and clients  
✅ **Free Tier** - No monthly cost for basic features  
✅ **SEO Boost** - Google can index your calendar content  

---

**Last Updated:** February 2026  
**Version:** 1.0
