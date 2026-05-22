ACCT39 HTML output
==================
Purpose: lock the GST Registration page and continue HTML-only review without repeatedly changing the already approved GST page.

Source base: ACCT38_SERVICE_BOXED_CONTENT_FOOTER_FIX.
Current company: JNS Accounting Solutions.
Project type: static HTML only. No MVC/Razor files included.

Locked page rule:
- registrations/gst-registration/index.html is now locked.
- GST content, section order, and GST page CSS should not be changed in future updates unless a bug is reported.
- Allowed future GST fixes: broken local link, missing asset path, header/footer global shell issue, or mobile/browser rendering bug.

Open first:
- ACCT39/index.html

Direct GST page:
- ACCT39/registrations/gst-registration/index.html
