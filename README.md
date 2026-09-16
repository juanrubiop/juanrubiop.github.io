# juanrubiop.github.io

Personal GitHub Pages site. Plain HTML, CSS and JavaScript; no build dependencies.

## Alexandria

| Page | Public URL | Source |
| --- | --- | --- |
| Homepage | https://juanrubiop.github.io/Alexandria/ | `Alexandria/index.html` |
| Privacy policy | https://juanrubiop.github.io/Alexandria/privacy/ | `Alexandria/privacy/index.html` |
| Beta terms | https://juanrubiop.github.io/Alexandria/terms/ | `Alexandria/terms/index.html` |

Keep the uppercase `A` in `/Alexandria/`: it is the requested public route and GitHub Pages paths are case-sensitive. The route stylesheet is `Alexandria/alexandria.css`; it does not change the personal site's other pages. The Projects page links to the app.

Public operator: Juan Pablo Rubio Perez, Mexico. Support and privacy email: `juanprp20@gmail.com`.

The privacy text reflects the current beta implementation: direct Google Drive app-data sync, optional Mac OpenRouter chat, local copies, 30-day Trash expiry, deletion markers and retained offline edits. Recheck it when those behaviors change. General Legal's CC0 templates were used as a drafting reference, without copying their US-company assumptions.

## Before publishing

- Confirm the public operator details in the privacy policy remain current, including the owner-supplied contact address: Paseo de los Geranios 5481, Monterrey, Mexico. The policy includes a contact path for ARCO requests under Mexico's [private-sector data protection law](https://www.ordenjuridico.gob.mx/Documentos/Federal/html/wo125102.html).
- Review the policy and terms as the operator. This draft does not establish legal compliance or Google's approval.
- Confirm Pages is serving the `main` branch at `/ (root)` in repository **Settings → Pages**. The site already uses static route folders; no separate deployment framework is needed.
- Publish the website changes through the normal repository workflow, then check that all three public URLs load without sign-in. Local changes alone are not a deployment.

## Google Search Console verification

Use an account that is an Owner or Editor of the corresponding Google Cloud project.

1. Open [Search Console](https://search.google.com/search-console/) and add the **URL-prefix** property `https://juanrubiop.github.io/`.
2. Choose **HTML tag** verification. The owner-supplied `google-site-verification` meta tag is installed inside `<head>` in the repository-root `index.html`, the homepage of this property. Confirm it matches the token shown in your Search Console account. Installing the tag does not itself complete verification.
3. Alternatively, publish Google's supplied verification HTML file unchanged at the exact URL it specifies, normally at the repository root.
4. Deploy, confirm the token is visible in the live HTML or file, then click **Verify** in Search Console. Keep the verification token published permanently.

An HTML tag or file verifies a URL-prefix property. A Domain property needs DNS control, which is not available for the parent `github.io` domain. See [Google's ownership-verification instructions](https://support.google.com/webmasters/answer/9008080?hl=en).

## Google Auth Platform settings

In the same Cloud project as the native OAuth clients, open **Google Auth Platform → Branding**:

| Field | Value |
| --- | --- |
| App name | Alexandria |
| User support email | juanprp20@gmail.com |
| Application home page | https://juanrubiop.github.io/Alexandria/ |
| Application privacy policy link | https://juanrubiop.github.io/Alexandria/privacy/ |
| Application terms of service link | https://juanrubiop.github.io/Alexandria/terms/ |
| Authorized domain | juanrubiop.github.io |
| Developer contact email | juanprp20@gmail.com |

The authorized-domain field takes the hostname, with no `https://` or path. Use the exact same privacy URL in the consent configuration and in the app.

Request brand verification after the pages are live and ownership is verified. Publish approved branding when Google offers that step. Configure **Audience → External → In production** for ongoing beta use; this is separate from publishing branding or releasing an app on the App Store. Production removes the special seven-day authorization expiry associated with OAuth Testing; normal token invalidation can still require sign-in.

The planned scope set is `openid`, `userinfo.email`, `userinfo.profile`, and `https://www.googleapis.com/auth/drive.appdata`. The last scope is non-sensitive. Do not add full-Drive scopes for this implementation.

Native Mac/iPad OAuth client IDs, bundle IDs, signing, Drive API enablement and app configuration remain in the app repository's `GOOGLE_SYNC_SETUP.md`. A static website is not an OAuth redirect server and does not need a web client secret.

## App integration still to complete

This website change does not edit the separately active Alexandria app checkout. Before submitting branding:

- Link the homepage, privacy policy and terms from app Settings, with the privacy policy easily available near sign-in.
- Make sure the app's disclosures before optional AI requests explain which document content is sent. The web policy alone is not a substitute for in-product notice or consent where required.
- Test real signed builds with the configured Google clients and keep the website's behavior descriptions aligned with the shipped beta.

References: [Google brand verification](https://developers.google.com/identity/protocols/oauth2/production-readiness/brand-verification), [verification requirements](https://support.google.com/cloud/answer/13464321?hl=en), [Audience and publishing status](https://support.google.com/cloud/answer/15549945?hl=en), [Drive app-data storage](https://developers.google.com/workspace/drive/api/guides/appdata).

## Local preview

From the repository root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/Alexandria/` and check the homepage, Privacy, Terms and contact links at desktop and mobile widths. Stop the server with Ctrl+C. Opening the HTML as a `file://` URL does not resolve the site's root-relative asset links correctly.
