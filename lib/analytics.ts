/** GA4 — single source of truth for Measurement ID */
export const GA_MEASUREMENT_ID = "G-5RCRE54FJG" as const

export const GA_GTAG_SRC = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`

/** Consent + dataLayer stub (must run before gtag/js loads). */
export const GA_CONSENT_AND_STUB = `
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{
  analytics_storage:'granted',
  ad_storage:'granted',
  ad_user_data:'granted',
  ad_personalization:'granted'
});
`.trim()

/** Runs after gtag/js; send_page_view true so hits do not depend on React hydration. */
export const GA_INIT = `
gtag('js',new Date());
gtag('config','${GA_MEASUREMENT_ID}',{send_page_view:true});
`.trim()
