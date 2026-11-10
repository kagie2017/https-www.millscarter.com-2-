# Rebuilding this design in Wix (Wix Studio or Wix Editor)

Everything in this design uses standard Wix building blocks: sections, strips, text, images, buttons, a horizontal menu with a dropdown, a Pro Gallery and Wix Forms. No custom code is required.

## 1. Theme settings

**Colors** (Site Design → Colors)

| Name | Hex | Used for |
| --- | --- | --- |
| Ink | `#15232D` | Headings, body text, dark sections |
| Fjord | `#173F4F` | Accents, step numbers |
| Fjord deep | `#0F2D39` | Footer background |
| Paper | `#F2F4F3` | Light grey section backgrounds |
| White | `#FFFFFF` | Page background |
| Steel | `#56666F` | Secondary text |
| Line | `#D3DADC` | Dividers, borders |
| Signal | `#F2B705` | Buttons, highlights, route line, CTA band |

**Font:** Archivo (in Wix's Google Fonts list; or upload the files from `assets/fonts`).

| Style | Size (desktop / mobile) | Weight | Notes |
| --- | --- | --- | --- |
| Heading 1 | 84px / 40px | Bold | Use "Archivo Expanded"/wide width if available, line height 0.98 |
| Heading 2 | 48px / 30px | Bold | Line height 1.08 |
| Heading 3 | 20px | Bold | |
| Lead paragraph | 20px | Regular | Line height 1.5 |
| Body | 17px | Regular | Line height 1.6 |
| Small | 14px | Medium | |

**Buttons:** primary = Signal background, Ink text, 3px corners, 48px tall. Secondary = 2px outline in the text color.

## 2. Header and footer (global)

- Header: sticky, white, 1px bottom border. Logo left. Menu right: Home, About, Services (dropdown: All services, Product sourcing, Warehousing, Shipping, Construction materials, Energy and generators), Gallery, Contact. Then a "Request a quote" button linking to Contact.
- Remove the old "More" menu item.
- Footer: Fjord deep background, white logo, four columns: short description, Company links, Services links, Get in touch (email, address, Google Maps link). Bottom line "© 2026 Mills Carter. All rights reserved."

## 3. Pages and sections (top to bottom)

**Home**
1. Hero: full-width world-map photo with dark overlay, H1 "Global reach. Local know-how.", lead text, two buttons, three short facts.
2. Route strip (Ink background): "From factory floor to your customer's door" with 4 stops (Source, Produce, Store, Deliver) joined by a dashed Signal line. Each stop links to its service page.
3. "One partner instead of five suppliers": text left, building photo right.
4. "Why brands work with us" (Paper background): 3 columns with a thin top rule.
5. "Services and capabilities": 3 alternating image/text rows.
6. "Supplying construction and energy" (Ink background): two side-by-side panels with photo, heading, text and link to each new service page.
7. "Our warehouse" (Paper background): 3 warehouse photos linking to Gallery.
8. CTA strip (Signal background): "Ready to get started?"

**About:** page header + photo, What we do, How we're set up (dark), What you can expect, How a project runs (4 numbered steps), CTA.

**Services:** page header, 5 service rows with checklists and "Read more" links, 4-step process, CTA.

**Product sourcing / Warehousing / Shipping:** page header with breadcrumb and wide photo, intro split, 3 key points, comparison table (sourcing and shipping), CTA, "Keep exploring" links.

**Construction materials:** page header with cranes photo, examples of materials (checklist), 3 key points (dark), "Who we supply" table, 4-step process, CTA, "Keep exploring" links.

**Energy and generators:** page header with power station photo, examples of equipment (checklist), "Choosing the right generator" table (standby / prime / portable), 3 key points (dark), CTA, "Keep exploring" links.

Photos for these two pages are free Unsplash images; Wix has Unsplash built into its media library, or use the client's own photos.

**Gallery:** use a Wix Pro Gallery with the 3 warehouse photos, lightbox on click.

**Contact:** contact details + Google Maps element on the left, Wix Form on the right with First name, Last name, Email, Company (optional), Topic dropdown (Product sourcing, Warehousing, Shipping, Construction materials, Energy and generators, Several services, Something else), Message. Set the form's notification email to inquiry@millscarter.com and the success message to "Thanks, your message has been sent. We'll get back to you soon."

## 4. Link fixes compared to the old site

| Old problem | Fix |
| --- | --- |
| About, Services and Gallery menu items all went to Home | Each now has its own page |
| "Learn more" on the Warehousing card went to Shipping | Goes to Warehousing |
| Service cards linked to an outside website (thesourcing.co) | Link to Mills Carter's own service pages |
| "More" menu item had no link | Removed |
| Contact page URL was `/contact-8` | Now `/contact`, with a 301 redirect from `/contact-8` (Wix: SEO → URL Redirect Manager) |

## 5. Before going live

- Remove the "noindex" setting (this staging code hides itself from Google).
- Confirm with Mills Carter: office locations to list, a phone number if they want one shown, and any client logos or testimonials they can share.
