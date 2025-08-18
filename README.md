# karibu-nyumbani
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Karibu Nyumbani by TJ — Cozy 1BR Stay in Nairobi</title>
  <meta name="description" content="Karibu Nyumbani by TJ — a cozy, minimalist 1BR Airbnb in Nairobi. Fast Wi‑Fi, self check‑in, quiet workspace, near cafes and transit. Book direct & save." />
  <meta property="og:title" content="Karibu Nyumbani by TJ — Cozy 1BR Stay in Nairobi" />
  <meta property="og:description" content="Cozy, minimalist 1BR with fast Wi‑Fi, self check‑in, and a quiet workspace. Book direct & save." />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop" />
  <meta name="theme-color" content="#0F766E" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">
  <style>
    :root{
      --brand:#0F766E;       /* teal */
      --brand-dark:#0b5a53;
      --bg:#0b0e11;          /* deep slate */
      --card:#12161b;
      --muted:#9fb4b0;
      --text:#EAF4F2;
      --accent:#F59E0B;      /* warm amber */
      --ring: 0 0 0 4px rgba(15,118,110,.35);
    }
    *{box-sizing:border-box}
    html,body{margin:0;background:linear-gradient(180deg,#0b0e11 0%,#111418 100%);color:var(--text);font-family:Inter,system-ui,Segoe UI,Roboto,Arial,sans-serif}
    a{color:inherit;text-decoration:none}
    img{max-width:100%;display:block;border-radius:16px}
    .container{max-width:1100px;margin:0 auto;padding:24px}
    header{position:sticky;top:0;z-index:50;background:rgba(11,14,17,.7);backdrop-filter:saturate(180%) blur(12px);border-bottom:1px solid rgba(255,255,255,.06)}
    .nav{display:flex;align-items:center;justify-content:space-between;gap:16px}
    .brand{display:flex;align-items:center;gap:12px;font-weight:800}
    .logo{width:36px;height:36px;border-radius:50%;display:grid;place-items:center;background:conic-gradient(from 120deg,var(--brand),#14b8a6,#0ea5e9);box-shadow:0 4px 28px rgba(20,184,166,.35)}
    .menu{display:flex;gap:18px;align-items:center}
    .btn{display:inline-flex;align-items:center;gap:10px;padding:12px 18px;border-radius:14px;outline:none;border:1px solid rgba(255,255,255,.08);background:linear-gradient(180deg,#10151a 0%,#0c1015 100%);color:var(--text);cursor:pointer;transition:.2s ease;box-shadow:0 4px 22px rgba(0,0,0,.3)}
    .btn:hover{transform:translateY(-1px);border-color:rgba(255,255,255,.16)}
    .btn.primary{background:linear-gradient(180deg,#0fb2a5 0%,#0F766E 100%);border-color:transparent;color:#071311}
    .btn.primary:hover{filter:brightness(1.05)}
    .btn.ghost{background:transparent;border-color:rgba(255,255,255,.14)}

    /* Hero */
    .hero{padding:48px 0 24px}
    .hero-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:28px;align-items:center}
    .badge{display:inline-flex;align-items:center;gap:8px;font-weight:600;color:#0f172a;background:linear-gradient(90deg,#fef08a,#facc15,#f59e0b);padding:6px 10px;border-radius:999px}
    h1{font-size:44px;line-height:1.05;margin:14px 0 8px}
    .lead{color:var(--muted);font-size:18px}
    .hero-cta{display:flex;gap:12px;flex-wrap:wrap;margin-top:16px}
    .statbar{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:18px}
    .stat{border:1px solid rgba(255,255,255,.06);background:linear-gradient(180deg,#12161b 0%,#0f1317 100%);padding:14px;border-radius:16px;text-align:center}
    .stat strong{font-size:22px}

    /* Sections */
    section{padding:36px 0}
    .section-title{font-size:28px;margin:0 0 8px}
    .section-sub{color:var(--muted);margin:0 0 18px}

    .grid{display:grid;gap:16px}
    .amenities{grid-template-columns:repeat(auto-fit,minmax(220px,1fr))}
    .card{border:1px solid rgba(255,255,255,.06);background:linear-gradient(180deg,#12161b 0%,#0f1317 100%);border-radius:18px;padding:16px}

    .gallery{grid-template-columns:repeat(12,1fr)}
    .gallery img{height:100%;object-fit:cover}
    .span-7{grid-column:span 7}
    .span-5{grid-column:span 5}
    .span-4{grid-column:span 4}
    .span-8{grid-column:span 8}

    .reviews{grid-template-columns:repeat(auto-fit,minmax(280px,1fr))}
    .review .meta{display:flex;align-items:center;gap:10px;margin-bottom:6px}
    .avatar{width:36px;height:36px;border-radius:999px;object-fit:cover}

    .booking{display:grid;grid-template-columns:1.1fr .9fr;gap:20px}
    label{display:block;margin-bottom:6px;color:var(--muted)}
    input,textarea,select{width:100%;padding:12px 14px;border-radius:12px;border:1px solid rgba(255,255,255,.1);background:#0e1318;color:var(--text);outline:none}
    input:focus,textarea:focus,select:focus{box-shadow:var(--ring);border-color:#1b3}
    .help{font-size:12px;color:var(--muted)}
    .toast{position:fixed;inset:auto 16px 16px auto;background:#0F766E;color:#06100f;padding:12px 14px;border-radius:10px;opacity:0;transform:translateY(10px);transition:.25s}
    .toast.show{opacity:1;transform:translateY(0)}

    footer{padding:28px 0;border-top:1px solid rgba(255,255,255,.06);color:var(--muted)}

    /* Mobile */
    @media (max-width: 900px){
      .hero-grid,.booking{grid-template-columns:1fr}
      .hero{padding-top:28px}
      .gallery{grid-template-columns:repeat(6,1fr)}
      .span-7{grid-column:span 6}
      .span-8{grid-column:span 6}
      .span-5{grid-column:span 6}
      .span-4{grid-column:span 3}
    }
  </style>
</head>
<body>
  <header>
    <div class="container nav">
      <a class="brand" href="#home" aria-label="Home">
        <span class="logo" aria-hidden="true">🏡</span>
        <span>Karibu Nyumbani <span style="opacity:.7">by TJ</span></span>
      </a>
      <nav class="menu">
        <a href="#amenities">Amenities</a>
        <a href="#gallery">Gallery</a>
        <a href="#location">Location</a>
        <a href="#reviews">Reviews</a>
        <a class="btn primary" href="#book">Book Now</a>
      </nav>
    </div>
  </header>

  <main id="home" class="container">
    <!-- HERO -->
    <section class="hero" aria-label="Hero">
      <div class="hero-grid">
        <div>
          <span class="badge">✨ Cozy 1BR • Self Check‑In • Fast Wi‑Fi</span>
          <h1>Feel at home in Nairobi — stay at <span style="color:var(--accent)">Karibu Nyumbani</span></h1>
          <p class="lead">Minimalist comfort near cafes and transit. Perfect for weekend getaways, business trips, and digital nomads. Quiet workspace, 200Mbps Wi‑Fi, free parking.</p>
          <div class="hero-cta">
            <a class="btn primary" id="cta-book" href="https://wa.me/254700000000?text=Hi%20TJ!%20I'd%20like%20to%20book%20Karibu%20Nyumbani%20from%20[check‑in]%20to%20[check‑out]." target="_blank" rel="noopener">💬 WhatsApp to Book</a>
            <a class="btn ghost" href="https://www.airbnb.com/rooms/your-listing-id" target="_blank" rel="noopener">🏠 View on Airbnb</a>
          </div>
          <div class="statbar">
            <div class="stat"><strong>4.9★</strong><br><span class="help">Guest rating</span></div>
            <div class="stat"><strong>200 Mbps</strong><br><span class="help">Speedy Wi‑Fi</span></div>
            <div class="stat"><strong>Self</strong><br><span class="help">Check‑in</span></div>
          </div>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1505692794403-34d4982f88aa?q=80&w=1100&auto=format&fit=crop" alt="Bright, cozy living room with plants and soft lighting" />
        </div>
      </div>
    </section>

    <!-- AMENITIES -->
    <section id="amenities" aria-label="Amenities">
      <h2 class="section-title">Amenities you’ll love</h2>
      <p class="section-sub">Everything you need for a smooth, comfortable stay.</p>
      <div class="grid amenities">
        <div class="card"><h3>🔑 Self check‑in</h3><p>Smart lock access with unique code for every guest.</p></div>
        <div class="card"><h3>⚡ Fast Wi‑Fi</h3><p>Work or stream with reliable 200 Mbps fiber.</p></div>
        <div class="card"><h3>🧺 In‑suite laundry</h3><p>Washer, dryer, and essentials included.</p></div>
        <div class="card"><h3>☕ Equipped kitchen</h3><p>Cookware, toaster, kettle, and French press.</p></div>
        <div class="card"><h3>🅿️ Free parking</h3><p>Secure, on‑site parking spot.</p></div>
        <div class="card"><h3>🛏️ Hotel‑quality linens</h3><p>Fresh sheets, plush towels, and extra pillows.</p></div>
      </div>
    </section>

    <!-- GALLERY -->
    <section id="gallery" aria-label="Gallery">
      <h2 class="section-title">A peek inside</h2>
      <p class="section-sub">Replace these placeholders with your real photos for trust + bookings.</p>
      <div class="grid gallery">
        <img class="span-7" src="https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1200&auto=format&fit=crop" alt="Minimalist bedroom with warm lighting"/>
        <img class="span-5" src="https://images.unsplash.com/photo-1549187774-b4e9b0445b41?q=80&w=1200&auto=format&fit=crop" alt="Kitchen with wooden textures"/>
        <img class="span-4" src="https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=1200&auto=format&fit=crop" alt="Cozy seating area with plants"/>
        <img class="span-8" src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1200&auto=format&fit=crop" alt="Desk and workspace"/>
      </div>
    </section>

    <!-- LOCATION -->
    <section id="location" aria-label="Location">
      <h2 class="section-title">Central, safe, and convenient</h2>
      <p class="section-sub">Near cafes, groceries, and public transit — 15 minutes to CBD.</p>
      <div class="card" style="overflow:hidden">
        <iframe title="Map" width="100%" height="340" style="border:0; border-radius:14px" loading="lazy" allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63818.73736467924!2d36.758!3d-1.292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d3b3a8bb1f%3A0x8383d90b1e01c2e0!2sNairobi!5e0!3m2!1sen!2ske!4v1688477600000"></iframe>
      </div>
    </section>

    <!-- REVIEWS -->
    <section id="reviews" aria-label="Guest reviews">
      <h2 class="section-title">What guests say</h2>
      <div class="grid reviews">
        <div class="card review">
          <div class="meta">
            <img class="avatar" src="https://i.pravatar.cc/72?img=5" alt="Guest avatar">
            <div><strong>Aisha</strong><div class="help">July 2025</div></div>
          </div>
          <p>“Super clean and quiet. Wi‑Fi was fast for Zoom calls and the self check‑in was a breeze.”</p>
        </div>
        <div class="card review">
          <div class="meta">
            <img class="avatar" src="https://i.pravatar.cc/72?img=12" alt="Guest avatar">
            <div><strong>Ken</strong><div class="help">June 2025</div></div>
          </div>
          <p>“Loved the minimalist vibe and the location. Will definitely stay again!”</p>
        </div>
        <div class="card review">
          <div class="meta">
            <img class="avatar" src="https://i.pravatar.cc/72?img=24" alt="Guest avatar">
            <div><strong>Sylvia</strong><div class="help">May 2025</div></div>
          </div>
          <p>“Everything exactly as described. Clear communication and comfy bed.”</p>
        </div>
      </div>
    </section>

    <!-- BOOKING -->
    <section id="book" aria-label="Book direct">
      <h2 class="section-title">Book your stay</h2>
      <p class="section-sub">Send a request below — we’ll confirm availability and send payment details.</p>
      <div class="booking">
        <form name="booking" class="card" data-netlify="true" netlify-honeypot="bot-field">
          <!-- NOTE: Netlify forms work only when deployed on Netlify -->
          <input type="hidden" name="form-name" value="booking">
          <p style="display:none">
            <label>Don’t fill this out: <input name="bot-field" /></label>
          </p>
          <div class="grid" style="grid-template-columns:1fr 1fr; gap:12px">
            <div>
              <label for="name">Full name</label>
              <input id="name" name="name" required placeholder="e.g., Theresa Aoko" />
            </div>
            <div>
              <label for="phone">WhatsApp number</label>
              <input id="phone" name="phone" type="tel" required placeholder="e.g., +2547…" />
            </div>
            <div>
              <label for="checkin">Check‑in</label>
              <input id="checkin" name="checkin" type="date" required />
            </div>
            <div>
              <label for="checkout">Check‑out</label>
              <input id="checkout" name="checkout" type="date" required />
            </div>
            <div>
              <label for="guests">Guests</label>
              <select id="guests" name="guests">
                <option>1</option><option selected>2</option><option>3</option>
              </select>
            </div>
            <div>
              <label for="message">Message</label>
              <input id="message" name="message" placeholder="Any special requests?" />
            </div>
          </div>
          <div style="display:flex;gap:10px;align-items:center;margin-top:14px">
            <button class="btn primary" type="submit">Request to Book</button>
            <span class="help">We’ll reply on WhatsApp within a few hours.</span>
          </div>
          <p class="help" style="margin-top:10px">Not using Netlify? Replace this form with Formspree or a mailto link — see code comments.</p>
        </form>
        <div class="card">
          <h3>Prefer instant messaging?</h3>
          <p>Tap below to chat with us directly about availability and discounts:</p>
          <a class="btn primary" id="wa-direct" href="https://wa.me/254700000000?text=Hi%20TJ!%20I’d%20like%20to%20book%20Karibu%20Nyumbani%20from%20[check‑in]%20to%20[check‑out]." target="_blank" rel="noopener">💬 Message on WhatsApp</a>
          <p class="help" style="margin-top:10px">Replace the number with your business WhatsApp.<br>To link email instead, use: <code>mailto:hello@yourdomain.com?subject=Booking%20Request</code></p>
          <hr style="border-color:rgba(255,255,255,.06)">
          <h3>Direct booking perks</h3>
          <ul>
            <li>Best price guarantee</li>
            <li>Flexible check‑in times (when available)</li>
            <li>Early check‑in / late check‑out priority</li>
          </ul>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">
      <div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap">
        <p>© <span id="yr"></span> Karibu Nyumbani by TJ. All rights reserved.</p>
        <p>
          <a href="#" class="help">House rules</a> ·
          <a href="#" class="help">Privacy</a> ·
          <a href="#" class="help">Contact</a>
        </p>
      </div>
    </div>
  </footer>

  <div class="toast" id="toast" role="status" aria-live="polite">Thank you! We’ve received your request. 🎉</div>

  <script>
    // --- Helpers ---
    const $ = (q)=>document.querySelector(q);
    const today = new Date().toISOString().split('T')[0];
    const ci = $('#checkin');
    const co = $('#checkout');
    if(ci){ ci.min = today; }
    if(co){ co.min = today; }

    if(ci && co){
      ci.addEventListener('change', ()=> co.min = ci.value || today);
    }

    // Toast for Netlify success (also works if you add ?success in URL)
    const toast = $('#toast');
    function showToast(){ toast.classList.add('show'); setTimeout(()=>toast.classList.remove('show'), 3500); }

    // If using Netlify, it redirects to same page on successful submission if you set an action.
    // Simulate in-place toast instead (client-side):
    const form = document.forms['booking'];
    if(form){
      form.addEventListener('submit', function(e){
        // If hosted on Netlify, you can omit preventDefault to let Netlify handle it.
        // Keep this to make it feel instant on free/static hosting too.
        e.preventDefault();
        const data = new FormData(form);
        fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(data).toString() })
          .then(()=>{ form.reset(); showToast(); })
          .catch(()=>{ showToast(); });
      });
    }

    // Auto-fill WhatsApp CTA with chosen dates
    function updateWA(){
      const base = 'https://wa.me/254700000000?text=';
      const msg = encodeURIComponent(`Hi TJ! I'd like to book Karibu Nyumbani from ${ci?.value||'[check‑in]'} to ${co?.value||'[check‑out]'}.`);
      const url = base + msg;
      const wa1 = $('#wa-direct');
      const wa2 = $('#cta-book');
      if(wa1) wa1.href = url;
      if(wa2) wa2.href = url;
    }
    if(ci) ci.addEventListener('change', updateWA);
    if(co) co.addEventListener('change', updateWA);
    updateWA();

    // Year in footer
    $('#yr').textContent = new Date().getFullYear();
  </script>

  <!--
  ────────────────────────────────
  CUSTOMIZE THIS STARTER
  1) Replace WhatsApp number in two places (wa.me/254700000000).
  2) Swap hero + gallery images with your own photos.
  3) Replace Airbnb URL with your listing link.
  4) Edit copy: headline, lead, amenities, reviews.

  OPTIONAL: FORM SUBMISSION (if not using Netlify)
  - Formspree: change <form> to action="https://formspree.io/f/your-id" method="POST" and remove JS fetch.
  - Email: replace the whole <form> with a mailto link/button.

  DEPLOY FOR FREE
  - GitHub Pages: commit this single file as index.html to a repo, enable Pages in repo Settings > Pages (branch: main, folder: /root).
  - Netlify: drag‑and‑drop this file into Netlify dashboard or connect your GitHub repo; Netlify Forms will work automatically.
  - Vercel: import repo; framework = "Other" (static).
  ────────────────────────────────
  -->
</body>
</html>
