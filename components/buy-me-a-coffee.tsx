'use client'

import Script from 'next/script'

export function BuyMeACoffee() {
  return (
    <Script
      src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
      strategy="afterInteractive"
      data-name="BMC-Widget"
      data-cfasync="false"
      data-id="mommylouisebudgetph"
      data-description="Support me on Buy me a coffee!"
      data-message=""
      data-color="#F471FF"
      data-position="Right"
      data-x_margin="18"
      data-y_margin="18"
      onLoad={() => window.dispatchEvent(new Event('DOMContentLoaded'))}
    />
  )
}
