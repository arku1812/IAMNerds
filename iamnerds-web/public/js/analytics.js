/*
 * Cookieless web analytics with Azure Application Insights (EU region).
 * Nothing is stored on the visitor's device (no cookies, no local or session
 * storage). Browsers that send Do Not Track are not recorded. The privacy
 * policy (/datenschutz) describes exactly this setup, so change both together.
 * The connection string is public by design: it only allows sending telemetry.
 */
(function () {
  'use strict';
  if (navigator.doNotTrack === '1') return;
  var sdk = window.Microsoft && window.Microsoft.ApplicationInsights;
  if (!sdk || !sdk.ApplicationInsights) return;

  var ai = new sdk.ApplicationInsights({
    config: {
      connectionString:
        'InstrumentationKey=97360684-08c7-4071-960a-36d3d201d929;IngestionEndpoint=https://germanywestcentral-1.in.applicationinsights.azure.com/;LiveEndpoint=https://germanywestcentral.livediagnostics.monitor.azure.com/;ApplicationId=1f320c2d-ab45-4ce4-a6f8-be5766d8133f',
      disableCookiesUsage: true,
      isStorageUseDisabled: true,
      enableSessionStorageBuffer: false,
      disableAjaxTracking: true,
      disableFetchTracking: true,
      disableExceptionTracking: true,
      // No remote SDK config from js.monitor.azure.com (blocked by our CSP anyway)
      extensionConfig: { AppInsightsCfgSyncPlugin: { syncMode: 0, blkCdnCfg: true } }
    }
  });
  ai.loadAppInsights();
  ai.addTelemetryInitializer(function (item) {
    item.tags = item.tags || {};
    item.tags['ai.cloud.role'] = 'iamnerds.io';
  });
  ai.trackPageView();
})();
