/* ============================================================
   Content data — kept separate from rendering so a Korean
   version can be added later as content.ko without touching
   the render/router logic below.
   ============================================================ */
const content = {
  en: {
    name: "Seong Wuk (Steve) Park",
    role: "Software Engineer, Mobile Specialist",
    email: "seongwuk.park@gmail.com",
    github: "https://github.com/goodexpert",
    linkedin: "https://www.linkedin.com/in/goodexpert/",
    workAuth:
      "New Zealand Citizen — Full Work Rights in Australia & New Zealand · Open to relocating to Melbourne or Sydney",
    interviewAvailability:
      "Only 2–3 hours ahead of Australian time zones — flexible for interviews within AU business hours",

    heroTagline:
      "I'm a software engineer specializing in mobile — building multiplatform clients and the SDKs and cloud systems behind them.",
    heroSub:
      "15+ years turning the same recurring problem — connecting client, platform, and cloud into one reliable system — into shipped products, from a 2012 set-top box streaming pipeline to a 2026 multi-market retail app, by way of a no-code design tool, agency-scale white-label delivery, and native iOS.",

    stats: [
      { num: "15+", label: "Years of experience" },
      { num: "8", label: "Companies & products shipped" },
      { num: "3", label: "Kotlin Multiplatform / KMM projects" },
    ],

    skills: [
      {
        title: "Kotlin Multiplatform",
        desc: "Shared core logic across iOS, Android, and Web (KMP/KMM), from interaction engines to payments and analytics.",
      },
      {
        title: "Performance & Algorithms",
        desc: "Memory, rendering, and load-time optimization with measurable, shipped results.",
      },
      {
        title: "Cloud & Real-Time Infrastructure",
        desc: "Designed real-time infrastructure on AWS for live broadcast and streaming workloads.",
      },
      {
        title: "0→1 Org & Product Building",
        desc: "Built an Android engineering organization from zero, including its first QA process.",
      },
      {
        title: "Modular / Multi-Market Architecture",
        desc: "Designed modular Android architecture serving multiple markets from a single codebase.",
      },
      {
        title: "Cross-Platform Leadership",
        desc: "Led development spanning embedded hardware, mobile, and cloud at the same time.",
      },
    ],

    timeline: [
      {
        company: "Woolworths",
        period: "2024–Present",
        role: "Senior Android Developer",
        desc: "Owned NZ market-entry execution and a BFF-driven CMS component system inside a modular Android app serving Australia and New Zealand.",
        current: true,
      },
      {
        company: "StudioXID",
        period: "2022–2024",
        role: "Senior Software Engineer",
        desc: "Kotlin Multiplatform core engine for ProtoPie, shared across iOS, Android, and Web.",
      },
      {
        company: "Xplor (Clubware NZ)",
        period: "2022",
        role: "Senior Mobile Engineer",
        desc: "Delivered native iOS payments features for a gym-management member app on SwiftUI and AWS Amplify.",
      },
      {
        company: "PIXO",
        period: "2020–2022",
        role: "Senior Mobile Engineer, Android Lead",
        desc: "Solo-shipped a flagship app in ~7 weeks, then grew the Android org from zero and built the company's first QA process.",
      },
      {
        company: "FrequencyNZ",
        period: "2020",
        role: "Contract Full-Stack Developer",
        desc: "Shipped COVID-19 contact-tracing for a construction safety platform across four technology stacks in a two-month contract.",
      },
      {
        company: "Coretex",
        period: "2019–2020",
        role: "Software Engineer (Contract)",
        desc: "Built Android fleet-management features backed by AWS Lambda serverless functions for a production fleet-tracking product.",
      },
      {
        company: "Marker Studio",
        period: "2016–2019",
        role: "Senior Software Engineer",
        desc: "Built a production BLE/iBeacon luggage-tracking feature and hardened security for an NZX-listed travel app; shipped a first production Kotlin app within months of its debut.",
      },
      {
        company: "YESSHOP",
        period: "2015–2016",
        role: "Software Engineer",
        desc: "Built backend systems end-to-end for a TV-based home shopping platform on the company's in-house X2Framework, covering warehouse inventory management and the order-dispatch pipeline from purchase through fulfilment.",
      },
      {
        company: "Emcor Consulting",
        period: "2015",
        role: "Technical Lead",
        desc: "Led a 6-person development team (3 senior + 2 junior developers, 1 designer) delivering client projects across POS and web/mobile services.",
      },
      {
        company: "Megatel",
        period: "2012–2015",
        role: "Senior Software Engineer",
        desc: "Real-time streaming infrastructure (KoreanIPTV) — set-top box, iOS/Android apps, and AWS-based live relay.",
      },
      {
        company: "Zenitum",
        period: "2009–2011",
        role: "Senior Researcher & Software Engineer",
        desc: "Developed high-speed Natural Feature Tracking (NFT) AR engines optimized for parallel processing on ARM cores; served as lead architect and iOS developer for corporate AR projects, including work for Hyundai Capital and other leading Korean enterprises.",
      },
    ],

    about: {
      paragraphs: [
        "I'm a software engineer with 15+ years of experience, specializing in mobile — the place where a product's core logic has to work identically across platforms, run fast on constrained hardware, and stay connected to a backend in real time.",
        "That's shown up in different forms across my career: real-time streaming infrastructure tying a set-top box to mobile apps and the cloud, agency-scale white-label delivery across five concurrent codebases, a two-month sprint shipping COVID-19 contact-tracing across four stacks, building an Android engineering organization from scratch, a native iOS chapter shipping payments features, consolidating a no-code design tool's interaction engine into a single Kotlin Multiplatform codebase, and architecting a modular Android app that serves two markets from one codebase.",
        "I like problems where the client, the platform layer, and the systems underneath it all have to agree — and where getting the abstraction boundaries right is what makes everything downstream easier.",
      ],
    },

    education: [
      {
        institution: "Hanyang University — Graduate School",
        credential: "Graduate Coursework, Intelligent Robot Engineering",
        period: "2009–2010",
        note: "Coursework completed; thesis not submitted",
      },
      {
        institution: "Dankook University",
        credential: "Bachelor of Engineering, Electronic Engineering",
        period: "1992–2003",
        note: "NZQA-assessed as equivalent to a NZ Bachelor of Engineering Technology, Level 7",
      },
    ],

    openSource: [
      {
        title: "PinBlock.mobile",
        desc: "Cross-platform (Android/iOS) PIN block encoding/decoding (ISO-0–3) for payment card processing, built with Kotlin Multiplatform.",
        url: "https://github.com/goodexpert/PinBlock.mobile",
        linkLabel: "View on GitHub →",
      },
      {
        title: "Open-Source Contribution — SVGView",
        desc: "Fixed two rendering bugs in a widely-used SwiftUI SVG library (854★ on GitHub) — gradient fill-opacity handling and radial-gradient scale parsing — found while working on watchOS rendering.",
        links: [
          { url: "https://github.com/exyte/SVGView/pull/46", label: "View PR #46 →" },
          { url: "https://github.com/exyte/SVGView/pull/47", label: "View PR #47 →" },
        ],
      },
      {
        title: "Jetpack Compose Developer Challenge",
        desc: "Built a gesture-driven countdown timer UI for Google's official #AndroidDevChallenge, adopting Jetpack Compose before its 1.0 release.",
        url: "https://github.com/goodexpert/Countdown.android",
        linkLabel: "View on GitHub →",
      },
      {
        title: "RideFit — Taxi Driver Service POC",
        desc: "Leading Android development on a POC proposed by an industry contact: one-tap TTS announcements that standardize passenger service and encourage rating participation, shipped with Firebase Remote Config feature flagging and a Fastlane release pipeline. Currently in alpha testing.",
        url: "https://github.com/goodexpert/RideFit",
        linkLabel: "View on GitHub →",
      },
    ],

    featuredSlugs: ["pixo", "protopie", "woolworths"],

    projects: [
      {
        slug: "woolworths",
        title: "NZ Market Entry & Modular Android Architecture",
        company: "Woolworths",
        role: "Senior Android Developer",
        period: "2024–Present",
        icon: "WW",
        blurb:
          "Owned NZ market-entry execution and a BFF-driven CMS component system inside a modular Android app serving Australia and New Zealand.",
        tags: ["Modular Architecture", "Multi-Market", "Auth Migration"],
        background:
          "Woolworths' Android app serves two markets — Australia and New Zealand — sharing most functionality but diverging in payments, fulfilment, and market-specific rules. Landing NZ into a codebase built for AU, without breaking AU, required both careful architecture and careful sequencing of risky migrations like identity.",
        approach:
          "Owned execution of the NZ market-entry effort end to end, built a BFF-driven CMS component system so marketing content ships without app releases, and led a Gigya-to-Auth0 identity migration — including the call to roll it back when production risk outweighed the benefit, then re-landing it safely afterward.",
        results: [
          { value: "197", label: "Pull requests merged over 24 months" },
          { value: "+29K", label: "Net lines of code shipped" },
          { value: "v25→v26", label: "Room database migration delivered" },
        ],
        highlights: [
          "Owned NZ market-entry execution into a shared AU/NZ codebase",
          "Built a BFF-driven CMS component system for app content without app releases",
          "Led the Gigya→Auth0 identity migration, including a deliberate rollback and safe re-landing",
          "Shipped \"Business Name in Checkout\" solo, end to end",
          "Improved order tracking and Direct-to-Boot fulfilment UX",
          "Expanded UI test automation alongside a strong production-stability track record",
        ],
      },
      {
        slug: "protopie",
        title: "ProtoPie Core Engine",
        company: "StudioXID",
        role: "Senior Software Engineer",
        period: "2022–2024",
        icon: "PP",
        blurb:
          "Consolidated a no-code interaction engine into a single Kotlin Multiplatform codebase shared across iOS, Android, and Web.",
        tags: ["Kotlin Multiplatform", "Performance", "Rendering"],
        background:
          "ProtoPie is a no-code interaction design tool where iOS, Android, and Web each maintained a separate codebase for the same core logic — trigger-action rules, rendering, and animation. That split created constant risk: behavior drifted across platforms, and every fix had to be built and verified three times over.",
        approach:
          "Consolidated the interaction engine's core logic into a single Kotlin Multiplatform (KMP) codebase, then redesigned the rendering pipeline and resource-loading path to close the performance gap between platforms. Also added Kotlin Multiplatform tvOS and watchOS targets, and shipped a visionOS build within about two months of Vision Pro's general availability.",
        results: [
          { value: "20%↓", label: "Memory footprint cut via rendering optimization" },
          { value: "10–15%↑", label: "Interaction engine throughput improved" },
          { value: "10–20%↑", label: "Initial content load time improved" },
        ],
        highlights: [
          "One shared engine consumed by iOS, Android, and Web clients — instead of three drifting implementations",
          "Designed the abstraction boundary between the shared core and each platform's rendering surface",
          "Extended KMP to tvOS and watchOS, and shipped a visionOS build within ~2 months of Vision Pro's launch",
          "Optimization work spanned memory, throughput, and load time — not just one metric",
        ],
      },
      {
        slug: "xplor",
        title: "Native iOS Delivery Alongside an Android/KMP-Heavy Career",
        company: "Xplor Technologies (Clubware NZ)",
        role: "Senior Mobile Engineer",
        period: "2022",
        icon: "XP",
        blurb:
          "Owned the Pay Overdue feature end to end for Clubware's gym-management member app, proving the same client/platform/cloud instincts hold up across platforms, not just Android.",
        tags: ["iOS", "SwiftUI", "AWS Amplify"],
        background:
          "Clubware's Member App (SwiftUI + AWS Amplify) needed payment-related features built out — including overdue-payment handling with an in-app payment flow, and payment-method management — for gym members managing their accounts.",
        approach:
          "Joined as a senior iOS engineer in a gap between two KMP/Android-heavy chapters, working in Swift/SwiftUI against an AWS Amplify backend. Took the Pay Overdue feature from design through delivery, integrating a WebView-based payment-provider flow with a custom native numpad UI, and backed both it and the Payment Method feature with automation test coverage across the backend and payment-provider paths.",
        highlights: [
          "305 of the app's 5,402 total commits during a ~7-month engagement",
          "Owned the Pay Overdue feature end to end, including a WebView-integrated payment-provider flow with a custom numpad UI",
          "Shipped the Payment Method management feature and backed both features with automation tests spanning backend and payment-provider paths",
          "Proof of native iOS depth alongside an otherwise Android/KMP-centered career",
        ],
      },
      {
        slug: "pixo",
        title: "Building PIXO's Android Organization",
        company: "PIXO",
        role: "Senior Mobile Engineer, Android Lead",
        period: "2020–2022",
        icon: "PX",
        blurb:
          "Solo-shipped a flagship app in 7 weeks, then grew the Android org from zero and built the company's first QA process.",
        tags: ["KMM", "Jetpack Compose", "Team Building"],
        background:
          "PIXO had no Android engineering organization at all, while preparing to launch several products at once — starting with a single-engineer sprint to get its first app to market, then scaling into a real team shipping multiple products in parallel. Team structure, quality process, and technical standards all had to be built from zero, alongside shipping.",
        approach:
          "Solo-shipped Focus Keeper, a Kotlin Pomodoro app, to Google Play in roughly 7 weeks, then grew the team to ship LogoMaker and Baby Story alongside it and built the company's first QA unit. Adopted Jetpack Compose in production about 4 months after its 1.0 GA — earlier than most teams at the time — and led the org's first Kotlin Multiplatform (KMP) rollout on LogoMaker over 11 months, building a shared Billing/Analytics/Network/Storage library that used an adapter-pattern provider substitution to work across a 4-repository platform split. Also drove a pivot from a self-built CMS to a headless CMS (Contentful), enabling content updates without app releases, and automated the team's CI/CD pipeline. Reviewed 250+ team pull requests along the way.",
        highlights: [
          "Solo-shipped Focus Keeper (Kotlin Pomodoro app) to Google Play in ~7 weeks",
          "Grew the team to ship 3 flagship products (LogoMaker, Focus Keeper, Baby Story)",
          "First QA process established company-wide",
          "Adopted Jetpack Compose in production ~4 months after its 1.0 GA",
          "Led the org's first KMP rollout (LogoMaker, 11 months) with a shared Billing/Analytics/Network/Storage library spanning a 4-repo platform split",
          "Pivoted from a self-built CMS to headless CMS (Contentful) for app-release-free content updates",
          "Automated CI/CD and reviewed 250+ team pull requests",
        ],
      },
      {
        slug: "frequencynz",
        title: "COVID-19 Contact Tracing Under a Two-Month Deadline",
        company: "FrequencyNZ",
        role: "Contract Full-Stack Developer",
        period: "2020 (2 months)",
        icon: "FQ",
        blurb:
          "Shipped COVID-19 contact-tracing for a NZ construction safety platform across four different technology stacks in a two-month contract.",
        tags: ["Full-Stack", "Kotlin", "Swift", "Rapid Delivery"],
        background:
          "SiteCheck (Project One) is a construction-industry health & safety platform. When COVID-19 reached New Zealand in early 2020, the platform needed contact-tracing capability added fast, across web, cloud functions, and both native mobile apps.",
        approach:
          "Worked across React/Redux (web), C#/Azure Functions (backend), Kotlin (Android), and Swift (iOS) within a single short contract, prioritizing the fastest safe path to shipping a feature that mattered for public health in the moment.",
        highlights: [
          "171 commits across 4 different technology stacks in ~2 months",
          "COVID-19 contact-tracing feature shipped May 2020, during the initial pandemic response",
          "Delivered production code across web, backend, Android, and iOS in a single short engagement",
        ],
      },
      {
        slug: "coretex",
        title: "Android Fleet Management on a Serverless Backend",
        company: "Coretex",
        role: "Software Engineer (Contract)",
        period: "2019–2020",
        icon: "CX",
        blurb:
          "Built Android features for a production fleet-tracking product, backed by AWS Lambda serverless functions spanning client and backend.",
        tags: ["Android", "AWS Lambda", "Serverless"],
        background:
          "Coretex's fleet-management product needed new mobile capability delivered for customers tracking vehicle fleets in production, with backend logic built to scale on demand rather than on fixed infrastructure.",
        approach:
          "Built Android fleet-management features end to end, pairing client work with AWS Lambda serverless functions on the backend so the same short contract covered both the mobile app and the services behind it.",
        highlights: [
          "Shipped Android features for a production fleet-tracking product",
          "Built AWS Lambda serverless functions powering those features",
          "Owned both client and backend service layers within a single short engagement",
        ],
      },
      {
        slug: "marker",
        title: "BLE Luggage Tracking and Security Hardening for an NZX-Listed Travel App",
        company: "Marker Studio",
        role: "Senior Software Engineer",
        period: "2016–2019",
        icon: "MK",
        blurb:
          "Shipped a production BLE/iBeacon luggage-tracking feature and hardened security across Serko's white-label travel apps, and shipped a first production Kotlin app four months after Kotlin's Google I/O debut.",
        tags: ["Bluetooth (BLE)", "Security", "White-Label Apps"],
        background:
          "Marker Studio built white-label mobile apps for enterprise clients, including Serko — an NZX-listed corporate travel company shipping the same core product as several distinct branded apps in parallel, each with its own release cadence and client-specific requirements.",
        approach:
          "Built a production iBeacon luggage-tracking feature on the Estimote SDK, including a custom radar view and beacon-management flow, and rolled it out across four of Serko's white-label brand variants. Hardened app security with TLS certificate pinning and migrated PIN storage to encrypted Jasypt storage. Also worked across other concurrent codebases (Adeption, Affco, OCD, WorldVision), keeping shared logic reusable while brand-specific presentation stayed isolated, and adopted Kotlin in production on the WorldVision app within months of its official announcement, ahead of most of the industry at the time.",
        highlights: [
          "Shipped a production BLE/iBeacon luggage-tracking feature (Estimote SDK, custom radar view, beacon management) across 4 white-label Serko apps",
          "Hardened security with TLS certificate pinning and encrypted (Jasypt) PIN storage",
          "495 commits across Serko's 11 white-label brand variants for an NZX-listed client",
          "164 commits across Adeption's 3 brand variants",
          "First production Kotlin project (WorldVision, Sept 2017) — shipped ~4 months after Kotlin's Google I/O announcement",
        ],
      },
      {
        slug: "megatel",
        title: "Real-Time Streaming Infrastructure",
        company: "Megatel",
        role: "Senior Software Engineer",
        period: "2012–2015",
        icon: "MG",
        blurb:
          "Rebuilt KoreanIPTV end to end — set-top box, mobile apps, and an AWS-based real-time broadcast pipeline.",
        tags: ["AWS", "Real-Time Systems", "Embedded"],
        background:
          "KoreanIPTV needed to be rebuilt from the ground up — tying a local hardware device (a set-top box), iOS/Android apps, and a live broadcast pipeline together into one reliable system.",
        approach:
          "Designed and built real-time live-broadcast relay infrastructure on AWS, then led development on both the set-top box and the mobile apps — owning the communication path between local device, cloud, and client end to end.",
        highlights: [
          "Real-time integration between a set-top box and companion mobile apps",
          "AWS-based live relay infrastructure designed and built from scratch",
          "Led development across 3 platforms (set-top box, iOS, Android) simultaneously",
        ],
      },
    ],
  },
};

const lang = "en";
const data = content[lang];

/* ============================================================
   Small render helpers
   ============================================================ */
function tag(t) {
  return `<span class="tag">${t}</span>`;
}

function statBlock(s) {
  return `
    <div class="stat-item">
      <div class="stat-num">${s.value}</div>
      <div class="stat-label">${s.label}</div>
    </div>`;
}

function projectCard(p) {
  return `
    <a class="card-link" href="#/projects/${p.slug}">
      <div class="card">
        <div class="card-icon">${p.icon}</div>
        <div class="card-meta">${p.company} · ${p.period}</div>
        <h3>${p.title}</h3>
        <p>${p.blurb}</p>
        <div class="card-tags">${p.tags.map(tag).join("")}</div>
        <div class="card-arrow">View project →</div>
      </div>
    </a>`;
}

/* ============================================================
   Page renderers
   ============================================================ */
function renderHome() {
  const featured = data.featuredSlugs
    ? data.featuredSlugs
        .map((slug) => data.projects.find((p) => p.slug === slug))
        .filter(Boolean)
    : data.projects.slice(0, 3);
  return `
    <section class="hero container">
      <div class="eyebrow">${data.role} · Portfolio</div>
      <h1>${data.name}</h1>
      <div class="badge">🇳🇿 ${data.workAuth}</div>
      <p class="lede">${data.heroTagline}</p>
      <p class="lede">${data.heroSub}</p>
      <div class="btn-row">
        <a class="btn btn-primary" href="#/projects">View Projects</a>
        <a class="btn btn-outline" href="mailto:${data.email}">Get in Touch</a>
      </div>
      <div class="hero-stats">
        ${data.stats
          .map(
            (s) => `
          <div>
            <div class="stat-num">${s.num}</div>
            <div class="stat-label">${s.label}</div>
          </div>`
          )
          .join("")}
      </div>
    </section>

    <section class="container tight">
      <div class="section-head">
        <h2>Featured Projects</h2>
        <a class="see-all" href="#/projects">See all projects →</a>
      </div>
      <div class="grid grid-3">
        ${featured.map(projectCard).join("")}
      </div>
    </section>

    <section class="container tight">
      <div class="section-head">
        <h2>Core Skills</h2>
        <a class="see-all" href="#/experience">Full experience →</a>
      </div>
      <div class="grid grid-3">
        ${data.skills
          .slice(0, 3)
          .map(
            (s) => `
          <div class="skill-card">
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
          </div>`
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderProjectsList() {
  return `
    <section class="container hero" style="padding-bottom: 8px;">
      <div class="eyebrow">Work</div>
      <h1 style="font-size:38px;">Projects</h1>
      <p class="lede">Eight systems across 14 years and as many kinds of constraints — from a 2012 set-top box to a 2026 multi-market retail app — with one shared thread: connecting client, SDK, and cloud into something reliable.</p>
    </section>
    <section class="container tight">
      <div class="grid grid-3">
        ${data.projects.map(projectCard).join("")}
      </div>
    </section>
  `;
}

function renderProjectDetail(slug) {
  const idx = data.projects.findIndex((p) => p.slug === slug);
  if (idx === -1) return renderNotFound();
  const p = data.projects[idx];
  const prev = data.projects[(idx - 1 + data.projects.length) % data.projects.length];
  const next = data.projects[(idx + 1) % data.projects.length];

  const resultsBlock = p.results
    ? `<div class="detail-block"><h3>Results</h3><div class="stat-block">${p.results
        .map(statBlock)
        .join("")}</div></div>`
    : `<div class="detail-block"><h3>Highlights</h3>
        <div class="highlight-box"><ul>${p.highlights
          .map((h) => `<li>${h}</li>`)
          .join("")}</ul></div>
       </div>`;

  const highlightsBlock =
    p.results && p.highlights
      ? `<div class="highlight-box"><h3>Highlights</h3><ul>${p.highlights
          .map((h) => `<li>${h}</li>`)
          .join("")}</ul></div>`
      : "";

  return `
    <section class="container hero" style="padding-bottom:0;">
      <a class="detail-back" href="#/projects">← All projects</a>
      <div class="detail-header">
        <div class="eyebrow">${p.company}</div>
        <h1 style="font-size:36px;">${p.title}</h1>
        <div class="detail-meta">${p.company} · ${p.role} · ${p.period}</div>
        <div class="tag-row">${p.tags.map(tag).join("")}</div>
      </div>
    </section>
    <section class="container tight" style="padding-top:0;">
      <div class="detail-grid">
        <div>
          <div class="detail-block">
            <h3>Background &amp; Problem</h3>
            <p>${p.background}</p>
          </div>
          <div class="detail-block">
            <h3>Approach</h3>
            <p>${p.approach}</p>
          </div>
          ${highlightsBlock}
        </div>
        <div>
          ${resultsBlock}
        </div>
      </div>
      <div class="project-pager">
        <a href="#/projects/${prev.slug}">← ${prev.title}</a>
        <a href="#/projects/${next.slug}">${next.title} →</a>
      </div>
    </section>
  `;
}

function renderExperience() {
  return `
    <section class="container hero" style="padding-bottom:8px;">
      <div class="eyebrow">Background</div>
      <h1 style="font-size:38px;">Experience</h1>
      <p class="lede">15+ years across real-time streaming infrastructure, agency-scale white-label delivery, a 0→1 product organization, native iOS, a no-code design tool, and multi-market retail.</p>
    </section>
    <section class="container tight">
      <div class="section-head"><h2>Timeline</h2></div>
      <div class="timeline">
        ${data.timeline
          .map(
            (t) => `
          <div class="timeline-item ${t.current ? "current" : ""}">
            <div class="timeline-dot"></div>
            <div class="timeline-title">${t.company}</div>
            <div class="timeline-sub">${t.period}${t.role ? " · " + t.role : ""}</div>
            ${
              t.list
                ? `<ul class="timeline-list">${t.list
                    .map((it) => `<li><strong>${it.company}</strong>: ${it.text}</li>`)
                    .join("")}</ul>`
                : `<div class="timeline-desc">${t.desc}</div>`
            }
          </div>`
          )
          .join("")}
      </div>
    </section>
    <section class="container tight">
      <div class="section-head"><h2>Core Skills</h2></div>
      <div class="grid grid-3">
        ${data.skills
          .map(
            (s) => `
          <div class="skill-card">
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
          </div>`
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderAbout() {
  return `
    <section class="container hero">
      <div class="eyebrow">About</div>
      <h1 style="font-size:38px;">${data.name}</h1>
      <div class="badge">🇳🇿 ${data.workAuth}</div>
      <div class="about-grid mt-lg">
        ${data.about.paragraphs.map((p) => `<p>${p}</p>`).join("")}
        <div class="contact-card">
          <h3>Let's talk</h3>
          <p>Open to Software Engineer roles with a mobile specialty — Android, iOS, and Kotlin Multiplatform — where client, SDK, and cloud all have to work together.</p>
          <div class="contact-row">🇳🇿 ${data.workAuth}</div>
          <div class="contact-row">🕐 ${data.interviewAvailability}</div>
          <div class="contact-row">✉️ <a href="mailto:${data.email}">${data.email}</a></div>
          <div class="contact-row">🔗 <a href="${data.github}" target="_blank" rel="noopener">github.com/goodexpert</a></div>
          <div class="contact-row">💼 <a href="${data.linkedin}" target="_blank" rel="noopener">linkedin.com/in/goodexpert</a></div>
        </div>
      </div>
    </section>

    <section class="container tight">
      <div class="section-head">
        <h2>Education</h2>
      </div>
      <div class="grid grid-2">
        ${data.education
          .map(
            (e) => `
          <div class="skill-card">
            <h3>${e.institution}</h3>
            <p>${e.credential}</p>
            <p style="margin-top:8px;color:var(--muted-2);font-size:12.5px;">${e.period}${e.note ? " · " + e.note : ""}</p>
          </div>`
          )
          .join("")}
      </div>
    </section>

    <section class="container tight">
      <div class="section-head">
        <h2>Open Source &amp; Personal Projects</h2>
      </div>
      <div class="grid grid-2">
        ${data.openSource
          .map(
            (o) => `
          <div class="skill-card">
            <h3>${o.title}</h3>
            <p>${o.desc}</p>
            ${(o.links || [{ url: o.url, label: o.linkLabel }])
              .map(
                (l) =>
                  `<a class="card-arrow" style="display:block;" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`
              )
              .join("")}
          </div>`
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderNotFound() {
  return `
    <section class="container hero text-center">
      <h1>Page not found</h1>
      <p class="lede" style="margin-left:auto;margin-right:auto;">That page doesn't exist.</p>
      <div class="btn-row" style="justify-content:center;">
        <a class="btn btn-primary" href="#/">Back home</a>
      </div>
    </section>
  `;
}

/* ============================================================
   Router
   ============================================================ */
const app = document.getElementById("app");

function parseHash() {
  const raw = window.location.hash.replace(/^#/, "") || "/";
  return raw.split("/").filter(Boolean); // e.g. ["projects", "protopie"]
}

function setActiveNav(routeRoot) {
  document.querySelectorAll(".nav a, .nav-mobile a").forEach((a) => {
    const r = a.getAttribute("data-route");
    a.classList.toggle("active", r !== undefined && r === routeRoot);
  });
}

function render() {
  const parts = parseHash();
  let html = "";
  let title = "Seong Wuk (Steve) Park — Software Engineer, Mobile Specialist";
  let routeRoot = "/";

  if (parts.length === 0) {
    html = renderHome();
  } else if (parts[0] === "projects" && parts.length === 1) {
    html = renderProjectsList();
    title = "Projects — Seong Wuk (Steve) Park";
    routeRoot = "/projects";
  } else if (parts[0] === "projects" && parts.length === 2) {
    html = renderProjectDetail(parts[1]);
    const p = data.projects.find((x) => x.slug === parts[1]);
    title = p ? `${p.title} — Seong Wuk (Steve) Park` : title;
    routeRoot = "/projects";
  } else if (parts[0] === "experience") {
    html = renderExperience();
    title = "Experience — Seong Wuk (Steve) Park";
    routeRoot = "/experience";
  } else if (parts[0] === "about") {
    html = renderAbout();
    title = "About — Seong Wuk (Steve) Park";
    routeRoot = "/about";
  } else {
    html = renderNotFound();
  }

  app.innerHTML = html;
  document.title = title;
  setActiveNav(routeRoot);
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });

  const navMobile = document.getElementById("navMobile");
  if (navMobile) navMobile.classList.remove("open");
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  const toggle = document.getElementById("navToggle");
  const navMobile = document.getElementById("navMobile");
  if (toggle && navMobile) {
    toggle.addEventListener("click", () => navMobile.classList.toggle("open"));
  }
  render();
});
