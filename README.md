# Gift Ifechukwu — Portfolio

Personal portfolio site for **Nwegwu Gift Ifechukwu**, certified brand strategist, brand consultant
and social media strategist based in Lagos, Nigeria.

Plain HTML, CSS and JavaScript. No build step, no framework, no dependencies to install.

---

## Running it locally

Open `index.html` in a browser. That's it.

If you prefer a local server (needed if you later add anything that fetches files):

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

---

## Putting it on GitHub Pages

1. Create a new repository on GitHub — for example `gift-portfolio`.
2. Push these files to it:

   ```bash
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/gift-portfolio.git
   git push -u origin main
   ```

3. In the repository, go to **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch**, pick `main` and the `/ (root)` folder, then save.
5. The site goes live at `https://YOUR-USERNAME.github.io/gift-portfolio/` within a minute or two.

### Using a custom domain

Add a file named `CNAME` at the root containing only the domain, for example:

```
giftifechukwu.com
```

Then point an `A` record at GitHub's IPs, or a `CNAME` record at `YOUR-USERNAME.github.io`, with
your domain registrar.

### Other hosts

The same files work unchanged on **Netlify**, **Vercel** or **Cloudflare Pages** — drag the folder
in, or connect the repository. There is no build command and no output directory.

---

## Files

```
index.html        the whole page — all sections, in order
css/style.css     every style, including the animations
js/main.js        intro sequence, scroll reveals, counters, story bar
assets/gift.jpg   portrait, used in the intro and the hero
```

---

## Changing the content

Almost everything is plain text in `index.html`. The sections appear in this order:

| Section | What's in it |
| --- | --- |
| Intro overlay | Greeting, rotating job title, enter button |
| Hero | Name, summary, the three statistics |
| Marquee | Scrolling list of disciplines |
| About | Bio, industry chips, skill bars |
| Services | Six service cards |
| Work | Seven brand case cards with Instagram links |
| Experience | Timeline of roles |
| Testimonials | Three client quotes |
| Contact | WhatsApp, email, Instagram, LinkedIn |

**The rotating titles in the intro** are set in `js/main.js`:

```js
var roles=['brand strategist','content manager','social media strategist','brand consultant'];
```

**The statistics** count up from zero. Change the target in `index.html`:

```html
<div class="n" data-to="4" data-suf="+">0</div>
```

**The skill bars** fill to a percentage. Change `data-w`:

```html
<div class="tr"><i data-w="96"></i></div>
```

**Adding a case card** — copy one `.case` block in the work section and change the gradient, the
label, the title, the description and the Instagram link.

**The story bar** at the top of the page has one segment per section. If you add or remove a
section, update the two arrays at the top of that block in `js/main.js`:

```js
var ids=['top','about','services','work','experience','contact'];
var names=['Intro','About','Services','Work','Experience','Contact'];
```

---

## Colours and type

Every colour is a token at the top of `css/style.css`. Change one value and it updates everywhere:

```css
--ink:#0B0A10;    /* page background      */
--paper:#F6F3EC;  /* body text            */
--coral:#FF5C45;  /* primary accent       */
--gold:#F2B544;   /* secondary accent     */
--muted:#9A94AE;  /* secondary text       */
```

Fonts load from Google Fonts in the `<head>` of `index.html`: Bricolage Grotesque for display,
Plus Jakarta Sans for body text, DM Mono for small labels.

---

## Accessibility and behaviour

- Respects `prefers-reduced-motion` — all animation is switched off for anyone who asks for it
- Keyboard focus is visible throughout
- The email address copies to the clipboard on click rather than opening a mail client
- No horizontal scrolling at any width; the layout stacks to one column below 860px
- Works without JavaScript: content is visible, only the animation and the intro overlay are lost

---

## Contact

Nwegwu Gift Ifechukwu
Lagos, Nigeria
[@the_gifted_consultant](https://www.instagram.com/the_gifted_consultant) ·
[LinkedIn](https://www.linkedin.com/in/gift-nwegwu-273827227)
