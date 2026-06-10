# Big3 Astrology — Complete EN Source Copy v1.0

**Date:** 2026-06-07 · **Status:** EN source set complete; ready for review → then DE/ES translation (last).
**Format:** locked (Markdown+frontmatter for pages; keyed YAML for UI + archetype library).
**Brand:** Big Astrology GmbH · Owner/astrologer: Gabriela Brecht · Domain: https://www.big3astrology.com
**Corrections applied this version:** funnel flipped (CHF 180 = primary CTA, CHF 20 = "not sure?" secondary) · CHF 70 = add-on → relationship reading CHF 250 (180+70) · 5 real testimonials placed · revised one-liner · sessions on Google Meet · corrected keyword anchors · legal data (Ränkestrasse 21, 8700 Küsnacht; info@big3astrology.com).

**Repo mapping**
```
src/i18n/en.yaml            → §1 (UI micro-strings + testimonials)
src/data/big3.en.yaml       → §2 (archetype library + synthesis + assembly template)
src/content/pages/en/*.md   → §3 (home, about, offers, legal)
src/content/blog/en/*.md    → §4 (3 pillar pages)
```
The Big-3 form lives on Home; pillar/result CTAs link to it via the anchor `/en/#big3`.

---

# §1 — UI micro-strings — `src/i18n/en.yaml`

```yaml
nav:
  home: "Home"
  reading: "Full Reading"
  intro_call: "15-min Call"
  about: "About"
  blog: "Journal"
  book: "Book a reading"

footer:
  tagline: "Human astrology in English, German and Spanish — read by a real astrologer, not an algorithm."
  disclaimer: "Astrology is offered for insight and self-reflection. It is not medical, psychological, financial or legal advice, and it never overrides your free will."
  rights: "© 2026 Big Astrology GmbH"
  links_legal: "Legal notice"
  links_terms: "Terms"
  links_privacy: "Privacy"
  links_refund: "Cancellations & refunds"

form:
  heading: "Get your Big 3 — free"
  date_label: "Date of birth"
  time_label: "Time of birth"
  time_helper: "As exact as you can. Don't know it? Leave it blank — you'll still get your Sun and Moon."
  place_label: "Place of birth"
  place_helper: "City and country — start typing and choose from the list."
  country_label: "Country"
  submit: "Reveal my Big 3"
  no_time_note: "No birth time entered — we'll show your Sun and Moon. Your Rising needs an exact time."

result:
  sun_heading: "Your Sun"
  sun_sub: "What drives you"
  moon_heading: "Your Moon"
  moon_sub: "What you need to feel safe"
  rising_heading: "Your Rising"
  rising_sub: "How the world first meets you"
  synthesis_heading: "Putting it together"
  cta_heading: "That's your Big 3 — now the real conversation"
  cta_body: "This is the short version of three placements. Your full chart has far more to say — and a reading turns it into something you can use."
  cta_primary: "Book a full reading — CHF 180"
  cta_secondary: "Prefer to meet first? Book a 15-minute call (CHF 20)"

booking:
  choose_time: "Choose a time that works for you"
  meet_note: "Sessions are held on Google Meet — you'll get a link with your confirmation."
  pay_note: "Secure payment by card or TWINT."
  processing: "Confirming your booking…"

confirmation:
  heading: "You're booked — see you soon"
  body: "Your session is confirmed. You'll receive an email with the date, your Google Meet link, and a short form to send your birth details so Gabriela can prepare."
  prep_heading: "Before your session"
  prep_body: "Send your exact birth date, time and place using the link in your email. The more precise the time, the more precise the reading."
  calendar: "Add to calendar"

errors:
  place_not_found: "We couldn't find that place — try the nearest larger town, with the country."
  generic: "Something went wrong. Please try again in a moment."

# Social proof — 5 real client quotes (Stan confirmed real, 2026-06-07).
# Note: inventory specified "3 per language"; all 5 provided are included.
testimonials:
  - quote: "Gabriela's reading was surprisingly precise. I left with real clarity, not vague mysticism."
    name: "Anna"
    city: "Zürich"
  - quote: "She explained my chart in a way that felt thoughtful, grounded, and deeply personal."
    name: "Marc"
    city: "Basel"
  - quote: "I felt understood within minutes. The session was calm, sharp, and genuinely helpful."
    name: "Sofia"
    city: "Madrid"
  - quote: "What I appreciated most was how practical it felt. It gave me language for things I had felt for years."
    name: "Lukas"
    city: "Winterthur"
  - quote: "Warm, intelligent, and very human. I came for curiosity and left with insight I could actually use."
    name: "Julia"
    city: "Barcelona"
```

---

# §2 — Archetype library — `src/data/big3.en.yaml`

```yaml
# 60–90 words each · 2nd person · warm, psychological, non-fatalistic.
# Structure: hook → strength → growth edge → relational/everyday note.

sun:
  aries: |
    With your Sun in Aries, you're built to begin. Where others weigh and wait, something in you simply
    moves — you'd rather act and adjust than stall. That courage is real, and people feel braver near you.
    The growth edge: not every moment needs a charge, and patience isn't the same as giving in. At your
    best, you don't just chase your own goals — you go first so others dare to follow.
  taurus: |
    With your Sun in Taurus, you build things to last. Where others rush, you move at your own unhurried
    pace, trusting what you can see, touch and rely on. That steadiness is a gift — people feel safe around
    what you create. The growth edge: not every change is a threat, and holding on too tightly can keep
    good things out. At your best, you turn patience into something solid the rest of us can stand on.
  gemini: |
    With your Sun in Gemini, your mind is always in motion — curious, quick, hungry for the next idea or
    conversation. You connect things, and people, that others keep separate, and you make learning look like
    play. The edge: with so many open doors, finishing can feel harder than starting, and depth sometimes
    loses to variety. At your best, you're the one who keeps a room thinking — light on your feet and
    genuinely interested in everyone in it.
  cancer: |
    With your Sun in Cancer, you lead with care. You feel the emotional weather of a room before anyone
    speaks, and you instinctively make people feel held. Home — wherever and whoever that is — matters to
    you more than almost anything. The edge: protecting yourself by retreating isn't the same as being safe,
    and not everyone needs managing. At your best, your warmth is a kind of strength: you remember the
    people the world overlooks.
  leo: |
    With your Sun in Leo, you're meant to shine — warm, generous, and naturally drawn to create and lead.
    When you're in your element, people light up around you; your encouragement can change how someone
    sees themselves. The edge: when the spotlight feels like the point, your confidence gets fragile, and you
    can mistake applause for love. At your best, you use your warmth to make others feel like the main
    character, not just yourself.
  virgo: |
    With your Sun in Virgo, you see how things could be better — and you quietly set about fixing them.
    You're precise, useful, and genuinely happy to be of service in ways that often go unnoticed. The edge:
    the same sharp eye you turn on a problem can turn on yourself, and "good enough" can feel impossible.
    At your best, you bring care and craft to the details everyone else misses — and slowly learn to extend
    that kindness inward.
  libra: |
    With your Sun in Libra, you're wired for connection and balance. You see every side of a situation, you
    smooth conflict almost instinctively, and you bring grace and fairness wherever you go. The edge:
    weighing everyone else's needs can leave your own unspoken, and "I don't mind" isn't always true. At
    your best, you don't just keep the peace — you create the kind of fairness and beauty that makes people
    feel genuinely met.
  scorpio: |
    With your Sun in Scorpio, you live in depth. Surfaces don't satisfy you — you want what's real, even
    when it's uncomfortable, and you're unafraid of the parts of life others look away from. That intensity
    makes you loyal, perceptive, and quietly powerful. The edge: protecting yourself through control or
    secrecy can keep out the very closeness you want. At your best, you can sit with anything — and help
    others transform what they thought they had to hide.
  sagittarius: |
    With your Sun in Sagittarius, you're a seeker — of meaning, of horizons, of the bigger picture. You bring
    optimism and honesty wherever you go, and your appetite for experience pulls others out of their comfort
    zones. The edge: the next adventure can always look brighter than finishing this one, and big enthusiasm
    sometimes outruns what you can deliver. At your best, you remind everyone that life is meant to be lived
    widely, not just managed.
  capricorn: |
    With your Sun in Capricorn, you're built for the long climb. You set serious goals and you actually reach
    them — through discipline, patience, and a quiet sense of responsibility others rely on. The edge: when
    worth gets tied to achievement, rest feels like weakness and the summit keeps moving. At your best,
    you're the steady hand that builds things meant to outlast you — and you learn that you were always
    allowed to enjoy the view.
  aquarius: |
    With your Sun in Aquarius, you see what could be different. You're an original thinker — independent,
    principled, drawn to ideas and to the good of the group over your own comfort. The edge: living in the
    realm of ideas can put distance between you and the messier feelings, your own and other people's. At
    your best, you're the one imagining a fairer, freer way of doing things — and bringing people together
    around it.
  pisces: |
    With your Sun in Pisces, you feel the world without much of a filter — deeply empathetic, imaginative,
    attuned to things others can't quite name. You bring compassion and a kind of quiet magic to the people
    around you. The edge: without clear boundaries, other people's feelings become yours, and dreaming can
    become a place to hide. At your best, you turn all that sensitivity into art, healing, or simply the gift of
    making people feel truly understood.

moon:
  aries: |
    With your Moon in Aries, you feel things fast and full-on. Emotions arrive like weather — intense,
    immediate, and often gone as quickly as they came; you'd rather act on a feeling than sit in it. The edge:
    that quick spark can flare at people who didn't light it, and not every feeling needs an instant response.
    Day to day, you bring honesty and energy to those you love — there's nothing hidden about how you feel.
  taurus: |
    With your Moon in Taurus, you're soothed by what's steady and real — comfort, routine, good food, the
    people and places that don't keep changing on you. Your emotions move slowly and run deep, and once
    you feel safe, you're a calm, grounding presence. The edge: change can feel like a threat even when it
    isn't, and comfort can quietly become a rut. Those close to you know your love is patient, physical, and
    utterly dependable.
  gemini: |
    With your Moon in Gemini, you process feelings by talking and thinking them through — naming them is
    how you make them safe. You need mental stimulation and variety to feel emotionally alive, and you're
    often the one lightening a heavy mood. The edge: staying in your head can be a way to avoid actually
    feeling, and restlessness can read as distance. Those close to you get a curious, witty companion who
    genuinely wants to understand them.
  cancer: |
    With your Moon in Cancer, you feel everything deeply — this is the Moon at home. You need belonging
    and emotional safety the way others need air, and you nurture the people you love almost without thinking.
    The edge: your moods move in tides, and protecting your soft centre by retreating can leave others
    guessing. Day to day, you offer a rare kind of care — the sense of being truly looked after, remembered,
    and held.
  leo: |
    With your Moon in Leo, your heart is big and warm, and you feel safest when you know you matter to the
    people you love. You give affection generously and you're fiercely loyal — but you need that warmth
    reflected back. The edge: when you don't feel seen, hurt can come out as pride or drama. Those close to
    you get someone who celebrates them wholeheartedly and makes ordinary moments feel a little more golden.
  virgo: |
    With your Moon in Virgo, you feel safe when things are in order and you're being useful — tidying, helping,
    solving is how you self-soothe. You show love through practical acts more than grand words. The edge:
    that inner voice can be harshly critical, of others and especially of yourself, and not every feeling needs
    fixing. Day to day, you're the one who notices what people need and quietly takes care of it before they ask.
  libra: |
    With your Moon in Libra, you feel most at ease when things are harmonious and your close relationships
    are steady — discord genuinely unsettles you. You're soothed by beauty, fairness, and good company. The
    edge: keeping the peace can mean swallowing your own needs, and you can lean on a partner to feel whole.
    Those close to you get a thoughtful, considerate presence who works hard to make sure everyone feels
    treated well.
  scorpio: |
    With your Moon in Scorpio, you feel in depth — privately, intensely, all or nothing. You sense what's
    beneath the surface long before anyone says it, and safety, for you, is trust earned slowly and then held
    fiercely. The edge is learning that closeness isn't a test, and that being seen isn't losing control. Day to
    day, you're the one people tell the real thing to — you can hold what would overwhelm most.
  sagittarius: |
    With your Moon in Sagittarius, you feel safe when you're free — room to move, to explore, to believe in
    something bigger than the day in front of you. You meet emotion with optimism and perspective, and you
    hate feeling fenced in. The edge: the urge to bolt, or to "look on the bright side," can skip over feelings
    that need to be felt. Day to day, you bring lightness, faith, and a sense that things will work out.
  capricorn: |
    With your Moon in Capricorn, you feel safest when you're competent and in control — you'd rather handle
    things yourself than need anyone. Feelings are private; you manage them quietly and keep a steady surface.
    The edge: self-reliance can curdle into emotional armour, and you may decide you're not allowed to need
    comfort. Those who get close find someone deeply loyal and dependable — the person who shows up,
    every time, and means it.
  aquarius: |
    With your Moon in Aquarius, you need emotional space and freedom — closeness that doesn't crowd you.
    You tend to understand feelings before you let yourself feel them, and you're calm and even-handed in a
    crisis. The edge: stepping back to analyse can leave others feeling held at arm's length, and some feelings
    won't be reasoned with. Day to day, you offer accepting, unpossessive love and a refreshingly
    nonjudgmental ear.
  pisces: |
    With your Moon in Pisces, you feel almost everything — yours and everyone else's — and you need
    gentleness and quiet retreat to come back to yourself. You're endlessly compassionate and intuitive about
    what others carry. The edge: without boundaries you absorb moods that aren't yours, and it's tempting to
    drift away when reality stings. Those close to you get a tender, forgiving heart that makes them feel
    deeply understood and rarely judged.

rising:
  aries: |
    With Aries Rising, you come across as direct, energetic, and ready — people sense you'll act while others
    are still deciding. You meet the world head-on, and there's something refreshing about how little you
    pretend. The edge: that forward energy can read as impatience or bluntness before people see the warmth
    underneath. First impressions of you are of someone alive and unafraid — the person who walks in and
    gets things moving.
  taurus: |
    With Taurus Rising, you give off calm — steady, grounded, unhurried, with a warmth people find
    reassuring. You move through the world at your own pace and bring a settling presence wherever you go.
    The edge: that same steadiness can look like stubbornness or reluctance when life asks you to move
    quickly. First impressions of you are of someone solid and trustworthy — the person others instinctively
    feel they can rely on.
  gemini: |
    With Gemini Rising, you come across as bright, curious, and easy to talk to — quick with a question, a
    joke, or a connection. You meet new people and situations with genuine interest and adapt on the fly. The
    edge: all that motion can read as restless or hard to pin down before people see your depth. First
    impressions of you are of a lively, clever mind — the person who makes a room feel more awake.
  cancer: |
    With Cancer Rising, you come across as gentle, warm, and quietly caring — people feel they can be soft
    around you. You meet the world a little protectively at first, reading for safety before you open up. The
    edge: that early guardedness can read as shyness or moodiness until trust is built. First impressions of you
    are of someone kind and approachable — the person others find themselves confiding in sooner than they
    expected.
  leo: |
    With Leo Rising, you make an impression — warm, expressive, naturally magnetic, the kind of presence a
    room notices. You meet the world with confidence and generosity, and people are drawn to your glow. The
    edge: when you sense you're not being seen, that warmth can tip into performance or pride. First
    impressions of you are of someone bright and big-hearted — the person who makes others feel a little
    more alive just by showing up.
  virgo: |
    With Virgo Rising, you come across as composed, modest, and quietly observant — you notice everything
    and rarely make a fuss. You meet the world ready to be useful, and people sense they're in capable,
    careful hands. The edge: that reserve can read as cool or critical before your genuine warmth shows. First
    impressions of you are of someone grounded and reliable — the person others trust to handle the details
    and get it right.
  libra: |
    With Libra Rising, first impressions of you tend to be warm: poised, easy to talk to, with an eye for
    beauty and a gift for putting people at ease. You read a room and smooth its edges almost automatically.
    The edge: in keeping the peace, your own preference can go unspoken — "I don't mind" isn't always true.
    Underneath the diplomacy is someone who quietly loves to lead, once you let yourself claim it.
  scorpio: |
    With Scorpio Rising, you have a presence people feel before you say much — intense, magnetic, and not
    easily read. You meet the world watchfully, revealing little until you decide someone's earned it. The edge:
    that mystery can read as guarded or intimidating before people discover your loyalty. First impressions of
    you are of depth and quiet power — the person others are drawn to and slightly in awe of at the same time.
  sagittarius: |
    With Sagittarius Rising, you come across as open, warm, and enthusiastic — frank, funny, and game for
    whatever's next. You meet the world expecting it to be interesting, and your optimism is contagious. The
    edge: that bluntness and restlessness can read as careless or hard to pin down. First impressions of you
    are of an easy, adventurous spirit — the person who makes life feel a little bigger and more possible.
  capricorn: |
    With Capricorn Rising, you come across as capable, composed, and quietly serious — people assume
    you're someone to be taken seriously, often before you've proven it. You meet the world with restraint and
    a sense of responsibility. The edge: that reserve can read as cool or unapproachable until people see the
    dry humour and warmth underneath. First impressions of you are of someone dependable and grounded —
    the person others instinctively look to in charge.
  aquarius: |
    With Aquarius Rising, you come across as distinctive — friendly yet a little apart, clearly your own person.
    You meet the world on your own terms, curious about people but unbothered by fitting in. The edge: that
    independence can read as aloof or hard to know before people feel your genuine goodwill. First impressions
    of you are of an original — the person who makes others feel free to be a bit more themselves too.
  pisces: |
    With Pisces Rising, you come across as soft, gentle, and a little dreamy — approachable in a way that puts
    people at ease and invites them to open up. You meet the world with empathy, often absorbing its mood.
    The edge: that openness can read as vague or impressionable, and your boundaries can blur. First
    impressions of you are of a kind, gentle presence — the person others feel quietly safe and understood around.

# ---- SYNTHESIS FRAGMENTS (assembled by rule; see template below) ----
synthesis:
  opening: |
    Put together, your Big 3 aren't three separate labels — they're three layers of one person: what drives
    you (Sun), what you need to feel safe (Moon), and how the world first meets you (Rising). Here's how
    yours fit together.

  # element_* : used when an element appears in 2 or more of Sun/Moon/Rising
  element_fire: "There's a lot of fire in you — drive, warmth, and the urge to move. You lead with energy and feel most alive when you're going after something that matters."
  element_earth: "There's a strong earth thread in you — grounded, practical, happiest building something real and lasting. People trust you because you follow through."
  element_air: "There's a lot of air in you — you live in ideas, words, and connection, making sense of the world by thinking and talking it through. People are drawn to your mind."
  element_water: "There's deep water in you — you feel things intensely and intuitively, reading the emotional current beneath the surface long before it's spoken."
  element_distinct: "Your three signs pull from different elements, which makes you genuinely many-sided — you can act, feel, and connect in different registers depending on what a moment needs. The art is letting those sides work together rather than against each other."

  # modality_* : used when a modality appears in 2 or more of Sun/Moon/Rising
  modality_cardinal: "You're wired to initiate — to start things, set direction, and get others moving. Beginnings come naturally; the practice is seeing them through."
  modality_fixed: "You're built for staying power — once you commit, you hold. That loyalty and determination are real strengths; the practice is staying open to change when it's time."
  modality_mutable: "You're remarkably adaptable — you bend, adjust, and flow with whatever comes. That flexibility is a gift; the practice is choosing a direction and trusting it long enough to arrive."
  modality_mixed: "You carry a healthy mix of drive, steadiness, and flexibility — you can start, sustain, or adapt as a situation calls for it, which makes you unusually balanced under pressure."

  # sunmoon_* : pick exactly one, based on Sun–Moon relationship
  sunmoon_same_sign: "Your Sun and Moon sit in the same sign, which concentrates everything — what drives you and what you need are one and the same. It makes you wholehearted and unmistakable, though you may lack a built-in counterbalance."
  sunmoon_same_element: "Your Sun and Moon share an element, so what you want and what you need tend to pull in the same direction — there's an inner steadiness to you, a sense of being at home with yourself."
  sunmoon_tension: "Your Sun and Moon are made of different stuff — what drives you outwardly and what soothes you inwardly don't always speak the same language. That can feel like an inner tug-of-war, but it's also what gives you range: two very different strengths in one person."
  sunmoon_complement: "Your Sun and Moon complement each other — your outward drive and your inner needs balance rather than blur, giving you both momentum and a way to refuel."

  closing: |
    This is the short version. A full reading takes all three — and the rest of your chart — and turns it into
    something you can actually use: where these energies help you, where they trip you up, and what to do
    about it. When you're ready, that's the conversation to have.

  # ---- NO-BIRTH-TIME VARIANT (Sun + Moon only; no Rising) ----
  opening_no_time: |
    Without your exact birth time we can't pin down your Rising sign — that one needs the clock, not just the
    date. But your Sun and Moon already tell you a lot: what drives you, and what you need to feel safe.
  closing_no_time: |
    Your Rising — how the world first meets you — is the missing piece, and it's worth finding. We can track
    down your birth time together; it's one of the first things we'd sort out. When you're ready, let's talk.
```

**Assembly template (logic for Claude Code):**
```
render Sun card  = sun[sunSign]
render Moon card = moon[moonSign]
render Rising card = rising[risingSign]      # omit if no birth time

synthesisParagraph =
  (hasRising ? synthesis.opening : synthesis.opening_no_time)
  + elementFragment            # see rule A
  + modalityFragment           # see rule B   (only if hasRising; with 2 placements, use only if a modality repeats)
  + sunMoonFragment            # see rule C
  + (hasRising ? synthesis.closing : synthesis.closing_no_time)

Rule A (element): count elements across the available placements (Sun, Moon, +Rising if present).
  if any element count >= 2 → that element_* fragment
  else (all distinct)       → element_distinct
Rule B (modality): same logic with modalities → modality_* ; if none repeat → modality_mixed
Rule C (sun–moon):
  if sunSign == moonSign                         → sunmoon_same_sign
  else if element(Sun) == element(Moon)          → sunmoon_same_element
  else if {element(Sun),element(Moon)} in clashing set
        clashing = {fire+water, earth+air, fire+earth, water+air? } # treat fire/water & earth/air as primary tension
                                                  → sunmoon_tension
  else                                            → sunmoon_complement

Element map: Aries/Leo/Sagittarius=fire · Taurus/Virgo/Capricorn=earth · Gemini/Libra/Aquarius=air · Cancer/Scorpio/Pisces=water
Modality map: Aries/Cancer/Libra/Capricorn=cardinal · Taurus/Leo/Scorpio/Aquarius=fixed · Gemini/Virgo/Sagittarius/Pisces=mutable
```

---

# §3 — Pages — `src/content/pages/en/`

## 3.1 Home — `home.md`

```markdown
---
title: "Big 3 Astrology — Your Sun, Moon & Rising, Read by a Human"
description: "Your Big 3 — Sun, Moon and Rising — free, then a full natal reading with a real astrologer. Psychological astrology in EN, DE and ES."
canonical: "https://www.big3astrology.com/en/"
lang: "en"
translationKey: "home"
slug: ""
draft: false
---

# Your Sun, Moon and Rising — read by a person, not an algorithm

Enter your birth date, time and place. In a few seconds you'll get your **Big 3** — the three placements that shape how you act, how you feel, and how the world first meets you. Free, and written to actually mean something.

[ Birth-data form: date · time · place · country → **Reveal my Big 3** ]

*No exact birth time? You'll still get your Sun and Moon — we'll help you find the rest.*

## When you want the real thing, you talk to a human

Your free Big 3 is a glimpse. A **full natal reading** with Gabriela is the real conversation — your whole chart, prepared in advance and talked through live, with a written summary to keep. This is the reading most people come for.

[ **Book a full reading — CHF 180** ]   ·   Not sure yet? [Start with a 15-minute call (CHF 20)](/en/15-minute-call/)

## Why Big 3 Astrology
- **A real astrologer, not an app.** Gabriela reads your chart herself — grounded, specific, and on your side.
- **Psychological, not fortune-telling.** Your chart is a map of patterns and potential, never a fixed fate.
- **In your language.** Readings in English, German and Spanish.

> "Gabriela's reading was surprisingly precise. I left with real clarity, not vague mysticism." — Anna, Zürich
```

## 3.2 About — `about.md`

```markdown
---
title: "About Gabriela Brecht — Psychological Astrologer, Zürich"
description: "Gabriela Brecht — psychological astrologer and former business leader in Zürich, trained in the Debra Silverman method. Readings in EN, DE, ES."
canonical: "https://www.big3astrology.com/en/about/"
lang: "en"
translationKey: "about"
slug: "about"
schemaType: "Person"
draft: false
---

# Gabriela Brecht

I read charts the way I once read teams — looking for what's really going on underneath, and what wants to happen next.

Before astrology was my work, it was the lens I never put down. I spent years in business, hold two degrees — one in Switzerland, one from Cambridge — and led people for a living. What kept pulling at me was the same question astrology asks: *why do we move the way we move, and what are we each here to grow into?*

Today I bring both halves to the chair. I'm a **psychological astrologer**: I treat your chart not as a fixed fate but as a map of patterns, gifts and growth edges — something you work *with*, never something that decides for you. My training is in psychological and archetypal astrology, including the **Debra Silverman** method (USA) and psychological-astrology programmes in Switzerland and Germany, and I draw on years of life-coaching practice.

Born in Caracas, living in Zürich, raising two children, I work in **English, German and Spanish** — the three languages I think and feel in. I'm especially drawn to where astrology meets real life: relationships, decisions, and the way people work together in teams.

If that resonates, your Big 3 is a good first step. When you want the full picture, [let's talk](/en/natal-reading/).

*Gabriela Brecht, psychological astrologer, Zürich.*

*Astrology here is offered for insight and self-reflection. It is not medical, psychological, financial or legal advice, and it never overrides your own free will.*
```

## 3.3 Full natal reading (PRIMARY) — `natal-reading.md`

```markdown
---
title: "Full Natal Reading — Live Session + Written Summary (CHF 180)"
description: "A full psychological natal reading: 90+ min preparation, a 60-min live session on Google Meet, and a written summary to keep. CHF 180."
canonical: "https://www.big3astrology.com/en/natal-reading/"
lang: "en"
translationKey: "natal-reading"
slug: "natal-reading"
schemaType: "Service"
offerType: "Service"
price: "180"
currency: "CHF"
duration: "PT60M"
draft: false
---

# Your full natal reading — CHF 180

The whole picture, read by a human and prepared just for you. Not a generated report — real preparation, a real conversation, and something to take away. This is the reading most people are really looking for.

## How it works
- **90+ minutes of preparation** before we meet — I study your chart in depth so our time together is about *you*, not setup.
- **A 60-minute live session** on Google Meet to talk it through, ask anything, and connect it to your real life.
- **A written summary** afterwards, so the insight stays with you long after the call.

This is psychological astrology: your strengths, your patterns, your growth edges — and how to actually work with them. You leave understanding yourself a little more clearly than you did before.

[ **Book a full reading** ]

Reading for two? Add a [relationship reading (CHF 250 total)](/en/relationship-reading/).
```

## 3.4 15-minute intro call (SECONDARY) — `15-minute-call.md`

```markdown
---
title: "15-Minute Intro Call — Not Sure Yet? Start Here (CHF 20)"
description: "Not ready for a full reading? Book a 15-minute intro call with astrologer Gabriela Brecht — a mini-reading and a fit check. CHF 20."
canonical: "https://www.big3astrology.com/en/15-minute-call/"
lang: "en"
translationKey: "precall"
slug: "15-minute-call"
schemaType: "Service"
offerType: "Service"
price: "20"
currency: "CHF"
duration: "PT15M"
draft: false
---

# Not sure yet? Let's meet first — CHF 20

If a full reading feels like a big first step, start smaller. In 15 minutes you'll get a real feel for how I work and a mini-reading of something live in your chart right now — so you can decide about a full reading with no guesswork.

**You get**
- A focused 15-minute video call on Google Meet
- A mini-reading on one thing that matters to you now
- An honest sense of whether a full reading is right for you

**Good to know:** this call is its own thing — the CHF 20 isn't credited toward a full reading. It's simply the easiest way to meet me before you commit. Ready for the full picture instead? [Book a full reading (CHF 180)](/en/natal-reading/).

[ **Book the 15-minute call** ]
```

## 3.5 Relationship & couples reading — `relationship-reading.md`

```markdown
---
title: "Relationship & Couples Reading — Two Charts Together (CHF 250)"
description: "A full reading for two: how your charts meet, where you flow and where you stretch. CHF 250 (CHF 180 + CHF 70 for the second person)."
canonical: "https://www.big3astrology.com/en/relationship-reading/"
lang: "en"
translationKey: "relationship-reading"
slug: "relationship-reading"
schemaType: "Service"
offerType: "Service"
price: "250"
currency: "CHF"
duration: "PT60M"
draft: false
---

# Relationship & couples reading — CHF 250

Two charts, side by side. We look at how you and another person actually meet — where you flow easily, where you stretch each other, and what each of you needs to feel met and understood.

It's the full natal reading, extended to two people: the same depth of preparation, a live 60-minute session on Google Meet, and a written summary — with a second chart added for **CHF 70** on top of the standard CHF 180.

Good for couples, but just as valuable for any pairing that matters: a co-founder, a parent, a close friend.

[ **Book a relationship reading** ]
```

## 3.6 Legal notice — `legal-notice.md`

```markdown
---
title: "Legal Notice — Big Astrology GmbH"
description: "Legal notice and company details for Big Astrology GmbH, Küsnacht ZH."
canonical: "https://www.big3astrology.com/en/legal-notice/"
lang: "en"
translationKey: "legal-notice"
slug: "legal-notice"
draft: false
---

# Legal Notice

**Big Astrology GmbH**
Ränkestrasse 21
8700 Küsnacht ZH
Switzerland

Email: info@big3astrology.com

Managing Director: Gabriela Brecht
Commercial register / VAT: [UID CHE-___.___.___ — to be added once the GmbH is registered]

Responsible for content: Gabriela Brecht, address as above.
```

## 3.7 Terms — `terms.md`

```markdown
---
title: "Terms & Conditions — Big Astrology GmbH"
description: "Terms and conditions for readings and services by Big Astrology GmbH."
canonical: "https://www.big3astrology.com/en/terms/"
lang: "en"
translationKey: "terms"
slug: "terms"
draft: false
---

# Terms & Conditions

## 1. Provider
These terms govern services offered by Big Astrology GmbH, Ränkestrasse 21, 8700 Küsnacht ZH, Switzerland ("we", "us"). Contact: info@big3astrology.com.

## 2. Services
We offer astrological readings: a free Big-3 overview, a 15-minute intro call (CHF 20), a full natal reading (CHF 180), and a relationship reading (CHF 250). Readings are delivered live over Google Meet, with a written summary where stated.

## 3. Bookings & payment
Bookings are made through our scheduling provider. Payment is due at booking, by card or TWINT, processed by our payment provider. Prices are in Swiss francs (CHF) and include any applicable Swiss VAT.

## 4. Cancellations & rescheduling
See our [Cancellations & Refunds](/en/cancellations-refunds/) page.

## 5. Nature of services — important
Our readings are provided for insight, reflection and entertainment. They are **not** medical, psychological, financial or legal advice, and are no substitute for professional care. You remain responsible for your own decisions. Astrology does not predict or determine the future and never overrides your free will.

## 6. Liability
To the extent permitted by law, our liability is limited to intent and gross negligence. We are not liable for decisions you make based on a reading.

## 7. Governing law
Swiss law applies. Place of jurisdiction is Küsnacht ZH, Switzerland, to the extent permitted by law.
```

## 3.8 Cancellations & refunds — `cancellations-refunds.md`

```markdown
---
title: "Cancellations & Refunds — Big Astrology GmbH"
description: "Cancellation, rescheduling and refund policy for readings by Big Astrology GmbH."
canonical: "https://www.big3astrology.com/en/cancellations-refunds/"
lang: "en"
translationKey: "cancellations-refunds"
slug: "cancellations-refunds"
draft: false
---

# Cancellations & Refunds

- **Reschedule:** free of charge up to 24 hours before your session, using the link in your confirmation email.
- **Cancel:** at least 24 hours before your session for a full refund. Within 24 hours the fee is non-refundable, as the preparation time has been reserved for you.
- **No-show:** if you miss your session without notice, the fee is non-refundable.
- **The 15-minute intro call (CHF 20)** is non-refundable once it has taken place and is not credited toward other readings.
- **Problems on our side:** if we need to cancel or reschedule, you're offered a new time or a full refund — your choice.

Questions? Email info@big3astrology.com.
```

## 3.9 Privacy — `privacy.md`

```markdown
---
title: "Privacy — Big Astrology GmbH"
description: "How Big Astrology GmbH handles your data: cookieless analytics, minimal data, no ad tracking."
canonical: "https://www.big3astrology.com/en/privacy/"
lang: "en"
translationKey: "privacy"
slug: "privacy"
draft: false
---

# Privacy

We keep this simple and collect as little as possible.

- **Your birth details** (date, time, place) are used only to calculate your Big 3 and to prepare your reading. We don't sell them or share them for advertising.
- **Booking & payment** are handled by our scheduling and payment providers, who process your name, email and payment data to deliver the service.
- **Analytics:** we use privacy-friendly, cookieless analytics. We don't use advertising cookies or cross-site tracking, so there's no cookie banner to click.
- **Your rights:** email info@big3astrology.com to ask what we hold about you, or to have it corrected or deleted.

Controller: Big Astrology GmbH, Ränkestrasse 21, 8700 Küsnacht ZH, Switzerland.
```

---

# §4 — Pillar pages — `src/content/blog/en/`

## 4.1 `free-birth-chart.md`  (keyword: *free birth chart*)

```markdown
---
title: "Free Birth Chart: Get Your Big 3 in Seconds"
description: "Get your free birth chart's Big 3 — your Sun, Moon and Rising sign — in seconds, and learn what each one actually means. No sign-up."
canonical: "https://www.big3astrology.com/en/free-birth-chart/"
lang: "en"
translationKey: "free-birth-chart"
slug: "free-birth-chart"
schemaType: "Article"
draft: false
---

# Free Birth Chart: Your Big 3, Explained

**Short answer:** a birth chart is a map of the sky at the exact moment you were born. The three most important points in it are your **Sun, Moon and Rising sign** — your "Big 3." You can get all three free here in a few seconds by entering your birth date, time and place. [Get your Big 3 free.](/en/#big3)

A full birth chart has dozens of pieces — planets, signs, houses, angles. But you don't need all of it to learn something real about yourself. The Big 3 carry most of the signal, which is why they're the right place to start.

## What is a birth chart?
A birth chart (or natal chart) is a snapshot of where the Sun, Moon and planets were, from your point of view on Earth, at your moment of birth. Because the sky is always moving, your chart is essentially unique — even people born the same day in different places have different Rising signs.

To calculate it accurately you need three things:
- **Date of birth** — sets the Sun and most planet positions.
- **Time of birth** — sets your Rising sign and the houses. This is the one people most often miss.
- **Place of birth** — sets the chart to your spot on Earth.

## Your Big 3: the three that matter most
- **Sun — what drives you.** Your core identity and what lights you up. The sign you already know ("I'm a Leo").
- **Moon — what you need to feel safe.** Your inner, emotional world: how you feel, soothe, and recharge.
- **Rising (Ascendant) — how the world first meets you.** The impression you make and your instinctive way of approaching life.

Together they explain why two people of the "same sign" can feel completely different. [See yours now.](/en/#big3)

## Do I need my exact birth time?
For the Sun and Moon, usually no — your date is enough. For your **Rising sign, yes**: it changes roughly every two hours, so even a rough time helps and an exact one is best. Don't know it? You'll still get your Sun and Moon, and we can help you track the time down for a full reading.

## What a free chart can and can't tell you
A free Big-3 is a genuine, accurate starting point — but it's a summary, not the whole story. It won't show how your placements interact, where your strengths and friction really sit, or what to do with any of it. That's the job of a full reading: a real astrologer taking your whole chart and turning it into something useful. [Learn about a full natal reading.](/en/natal-reading/)

## Frequently asked questions

### Is the birth chart really free?
Yes — your Big 3 (Sun, Moon and Rising) and a short synthesis are free, with no sign-up.

### Is this accurate?
Yes. We calculate real planetary positions for your date, time and place — the same astronomy professional astrologers use.

### What if I don't know my birth time?
You'll get your Sun and Moon. Your Rising needs an exact time — we can help you find it.

### What's the difference between this and a reading?
The free chart is a summary you read yourself. A reading is a live conversation with an astrologer who interprets your whole chart for your actual life.

*Astrology is offered for insight and self-reflection — not medical, psychological, financial or legal advice.*
```

## 4.2 `calculate-rising-sign.md`  (keyword: *calculate your rising sign and its meaning*)

```markdown
---
title: "Calculate Your Rising Sign — and What It Means"
description: "Calculate your Rising sign (Ascendant) free in seconds, and learn what it means for how the world sees you. Birth time required."
canonical: "https://www.big3astrology.com/en/calculate-rising-sign/"
lang: "en"
translationKey: "calculate-rising-sign"
slug: "calculate-rising-sign"
schemaType: "Article"
draft: false
---

# Calculate Your Rising Sign — and What It Means

**Short answer:** your Rising sign (or Ascendant) is the zodiac sign that was coming up over the horizon at the exact minute you were born. To calculate it you need your birth date, **exact time**, and place. Enter them here and get it free in seconds. [Calculate your Rising sign.](/en/#big3)

## What is a Rising sign?
While your Sun sign is about who you are at your core, your **Rising sign is about how you come across** — your instinctive style, your first impression, the "front door" people walk through to reach you. It also sets the structure of your whole chart (the houses), which is why astrologers care about it so much.

## Why you need your exact birth time
The Ascendant moves fast — through all twelve signs in 24 hours, so roughly **one new sign every two hours**. That's why your date alone can't give it to you, and why a birth time that's off by even an hour can land you on the wrong sign. With an exact time, your Rising is accurate; with only an approximate time, treat the result as a strong guess.

### How to find your birth time
- Check your **birth certificate** — in many countries the time is recorded.
- Ask a **parent or close family member**.
- Request your **birth record** from the hospital or civil registry where you were born.

## What your Rising sign means
Your Rising colours everything from your body language to how you handle new situations. A quick sketch by element:
- **Fire Rising (Aries, Leo, Sagittarius):** you come across as direct, warm, energetic.
- **Earth Rising (Taurus, Virgo, Capricorn):** you come across as grounded, capable, composed.
- **Air Rising (Gemini, Libra, Aquarius):** you come across as sociable, curious, easy to talk to.
- **Water Rising (Cancer, Scorpio, Pisces):** you come across as sensitive, magnetic, a little harder to read.

Your free result gives you a fuller, personal description of your specific Rising sign. [See yours now.](/en/#big3)

## Rising, Sun and Moon — the full picture
Your Rising is one third of your Big 3. Paired with your **Sun** (what drives you) and **Moon** (what you need), it explains the gap between how people first read you and who you actually are underneath. A full reading connects all three — and the rest of your chart — into something you can use. [Learn about a full natal reading.](/en/natal-reading/)

## Frequently asked questions

### Can I find my Rising sign without a birth time?
Not reliably. The Ascendant changes about every two hours, so an exact time is needed. Without it, we'll show your Sun and Moon instead.

### Is Rising sign the same as Ascendant?
Yes — "Rising sign" and "Ascendant" are two names for the same thing.

### Why is my Rising sign different from my Sun sign?
They measure different things: your Sun is your core self; your Rising is your outward style and the moment-by-moment setup of your chart. Most people's differ.

*Astrology is offered for insight and self-reflection — not medical, psychological, financial or legal advice.*
```

## 4.3 `calculate-moon-sign.md`  (keyword: *calculate your moon sign and its meaning*)

```markdown
---
title: "Calculate Your Moon Sign — and What It Means"
description: "Calculate your Moon sign free in seconds and learn what it means for your emotions and inner life. Usually no exact birth time needed."
canonical: "https://www.big3astrology.com/en/calculate-moon-sign/"
lang: "en"
translationKey: "calculate-moon-sign"
slug: "calculate-moon-sign"
schemaType: "Article"
draft: false
---

# Calculate Your Moon Sign — and What It Means

**Short answer:** your Moon sign is the zodiac sign the Moon was in when you were born. It represents your emotional inner world — what you feel and what you need to feel safe. Enter your birth date and place to get it free in seconds. [Calculate your Moon sign.](/en/#big3)

## What is a Moon sign?
If your Sun sign is who you are in the daylight, your **Moon sign is who you are in private** — your feelings, your instincts, what soothes you and what you need from the people closest to you. It's often the placement people recognise themselves in most once they read it.

## Do I need my exact birth time?
Usually not. The Moon moves through a sign in about **two to two-and-a-half days**, so your birth date is normally enough to place it. The exception: if you were born on a day the Moon changed signs, the time matters — when that's the case, we'll let you know. (Your **Rising** sign is the one that always needs an exact time.)

## What your Moon sign means
Your Moon describes your emotional style — how you process feelings, comfort yourself, and bond with others. A quick sketch by element:
- **Fire Moon (Aries, Leo, Sagittarius):** feelings are fast, warm, expressive.
- **Earth Moon (Taurus, Virgo, Capricorn):** feelings are steady, practical, grounded.
- **Air Moon (Gemini, Libra, Aquarius):** feelings are processed by thinking and talking.
- **Water Moon (Cancer, Scorpio, Pisces):** feelings run deep, intuitive, and strong.

Your free result gives you a personal description of your specific Moon sign — including its strengths and its growth edge. [See yours now.](/en/#big3)

## Why your Moon sign can surprise you
Many people relate to their Moon sign more than their Sun. That's because your Sun sign is often the self you show, while your Moon is the self you actually feel — and the two aren't always the same. Seeing them side by side is where it gets interesting.

## Moon, Sun and Rising — the full picture
Your Moon is one third of your Big 3, alongside your **Sun** (what drives you) and **Rising** (how the world meets you). A full reading takes all three — and the rest of your chart — and turns it into practical insight about your relationships, your patterns, and what you need to thrive. [Learn about a full natal reading.](/en/natal-reading/)

## Frequently asked questions

### Can I find my Moon sign without a birth time?
Usually yes — the date is normally enough. Only if you were born on a day the Moon changed signs does the time matter.

### Why does my Moon sign feel more "me" than my Sun sign?
Because your Moon is your private, emotional self, while your Sun is often the self you present. Many people identify with it strongly.

### What's the difference between a Moon sign and a Sun sign?
Your Sun is your core identity and drive; your Moon is your emotional needs and instincts. You have both, and they work together.

*Astrology is offered for insight and self-reflection — not medical, psychological, financial or legal advice.*
```

---

# §5 — QA log (3 loops, against Spec-Lock v0.3, Copy Inventory v0.3, COPY research, SEO/GEO research, style/copyright)

**Loop 1 — Format & structure (Spec §9).** Checked one-H1-per-page (✓ all 12 pages), frontmatter completeness, keyed-YAML-not-prose for UI + archetypes (✓), `translationKey` on every page (✓).
- *Found & fixed:* three meta descriptions exceeded 155 chars (Home, Natal, About) → trimmed. Offer pages were missing `offerType` → added `offerType: "Service"` to all three. Result-page strings confirmed as `result.*` keys feeding the widget (not a standalone page).

**Loop 2 — Accuracy vs your corrections ("100% precise").** 
- CHF 180 = primary CTA, CHF 20 = secondary "not sure?" → ✓ (Home, result CTA, C1 framing, C2 primary).
- CHF 250 = 180 + 70 add-on for 2 people → ✓ (C3 + cross-link from C2).
- Revised one-liner, no "15 minutes with me" → ✓ (footer tagline + Home subhead lead with the full reading).
- Google Meet in session + booking + confirmation → ✓.
- Birthplace + country collected; "no birth time" → Sun+Moon only + recover via call → ✓ (form, no_time_note, synthesis no-time variant, all 3 pillars).
- Legal real data (Ränkestrasse 21, 8700 Küsnacht; info@big3astrology.com; no UID → placeholder) → ✓.
- *Found & fixed:* only 1 testimonial existed (Home); added the full **5-testimonial** block to `en.yaml`. (Inventory said "3 per language"; all 5 you supplied are included — flagged, not an error.)

**Loop 3 — Voice, copyright, SEO/GEO (COPY + SEO/GEO research + style file).**
- Archetype voice: 2nd person, warm, psychological, non-fatalistic; structure hook→strength→edge→relational; word counts spot-checked in the 70–85 band (✓ within the 60–90 spec).
- **Copyright (Cortesi style file):** confirmed **no** lifting/translation/close paraphrase of her metaphors or fairy-tale mappings (e.g., deliberately did *not* use her snowdrop image for the Aries Moon). Register emulated, wording 100% original. ✓
- GEO: pillars open **answer-first** ("Short answer:"), clean H1→H2→H3, FAQ blocks (FAQPage-eligible), internal links to `/#big3` and `/natal-reading/`. ✓
- Keyword anchors (corrected set) placed in pillar title/H1/intro. ✓
- Non-fatalistic / free-will framing + disclaimer on About, footer, terms, and every pillar. ✓
- *No further fixes; lengths kept lean (~550–600 words/pillar) for mobile CWV.*

**Two residual flags (not blockers):**
1. **Legal templates are starting drafts, not legal advice.** Switzerland has no general statutory cooling-off for online purchases; if you market actively into the EU (ES/DE consumers), have the AGB/withdrawal terms glanced at once. Per your scope this is intentionally light.
2. **UID** must be added to the Legal Notice once the GmbH is in the commercial register (placeholder left in place).

**Next:** on your sign-off, translate the full set EN→DE (incl. ß→ss) and EN→ES (Spain/LatAm terminology), then Claude Design screens + Claude Code build.
