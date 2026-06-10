# Big3 Astrologie — Vollständige DE-Copy v1.0

**Datum:** 2026-06-07 · **Anrede:** `du` (informell, warm) — siehe Registerentscheid im Chat · **Orthografie:** Schweizer `ss` (kein `ß`).
**Status:** DE-Set vollständig (transcreiert aus EN v1.0). ES folgt.
**Format:** wie gesperrt. **YAML-Schlüssel identisch zu EN** (Werte auf Deutsch); `translationKey` identisch zu EN (verdrahtet hreflang); Slugs lokalisiert; `canonical` unter `/de/`.

**Repo-Mapping**
```
src/i18n/de.yaml            → §1
src/data/big3.de.yaml       → §2
src/content/pages/de/*.md   → §3
src/content/blog/de/*.md    → §4
```

---

# §1 — UI-Strings — `src/i18n/de.yaml`

```yaml
nav:
  home: "Start"
  reading: "Beratung"
  intro_call: "15-Min-Gespräch"
  about: "Über mich"
  blog: "Journal"
  book: "Beratung buchen"

footer:
  tagline: "Menschliche Astrologie auf Deutsch, Englisch und Spanisch — gelesen von einer echten Astrologin, nicht von einem Algorithmus."
  disclaimer: "Astrologie dient der Einsicht und Selbstreflexion. Sie ist keine medizinische, psychologische, finanzielle oder rechtliche Beratung und hebt deinen freien Willen niemals auf."
  rights: "© 2026 Big Astrology GmbH"
  links_legal: "Impressum"
  links_terms: "AGB"
  links_privacy: "Datenschutz"
  links_refund: "Stornierung & Rückerstattung"

form:
  heading: "Deine Big 3 — kostenlos"
  date_label: "Geburtsdatum"
  time_label: "Geburtszeit"
  time_helper: "So genau wie möglich. Weisst du sie nicht? Lass das Feld leer — Sonne und Mond bekommst du trotzdem."
  place_label: "Geburtsort"
  place_helper: "Stadt und Land — tipp los und wähl aus der Liste."
  country_label: "Land"
  submit: "Meine Big 3 zeigen"
  no_time_note: "Keine Geburtszeit angegeben — wir zeigen dir Sonne und Mond. Dein Aszendent braucht eine genaue Zeit."

result:
  sun_heading: "Deine Sonne"
  sun_sub: "Was dich antreibt"
  moon_heading: "Dein Mond"
  moon_sub: "Was du brauchst, um dich sicher zu fühlen"
  rising_heading: "Dein Aszendent"
  rising_sub: "Wie die Welt dir zuerst begegnet"
  synthesis_heading: "Alles zusammen"
  cta_heading: "Das sind deine Big 3 — jetzt das echte Gespräch"
  cta_body: "Das ist die Kurzfassung von drei Stellungen. Dein ganzes Horoskop hat viel mehr zu sagen — und eine Beratung macht daraus etwas, das du nutzen kannst."
  cta_primary: "Ausführliche Beratung buchen — CHF 180"
  cta_secondary: "Lieber erst kennenlernen? Buch ein 15-Minuten-Gespräch (CHF 20)"

booking:
  choose_time: "Wähl eine Zeit, die dir passt"
  meet_note: "Die Sitzungen finden auf Google Meet statt — den Link bekommst du mit deiner Bestätigung."
  pay_note: "Sichere Zahlung per Karte oder TWINT."
  processing: "Deine Buchung wird bestätigt …"

confirmation:
  heading: "Gebucht — bis bald"
  body: "Deine Sitzung ist bestätigt. Du bekommst eine E-Mail mit dem Datum, deinem Google-Meet-Link und einem kurzen Formular für deine Geburtsdaten, damit Gabriela sich vorbereiten kann."
  prep_heading: "Vor deiner Sitzung"
  prep_body: "Schick deine genauen Geburtsdaten — Datum, Zeit und Ort — über den Link in deiner E-Mail. Je genauer die Zeit, desto genauer die Beratung."
  calendar: "Zum Kalender hinzufügen"

errors:
  place_not_found: "Diesen Ort haben wir nicht gefunden — versuch die nächstgrössere Stadt, mit Land."
  generic: "Etwas ist schiefgelaufen. Bitte versuch es gleich noch einmal."

# 5 echte Kundenstimmen (auf Deutsch lokalisiert).
# Hinweis: für maximale Authentizität idealerweise Original-Wortlaut der deutschsprachigen Kund:innen verwenden.
testimonials:
  - quote: "Gabrielas Beratung war überraschend präzise. Ich ging mit echter Klarheit, nicht mit vagem Mystizismus."
    name: "Anna"
    city: "Zürich"
  - quote: "Sie hat mein Horoskop auf eine Art erklärt, die durchdacht, geerdet und zutiefst persönlich war."
    name: "Marc"
    city: "Basel"
  - quote: "Ich fühlte mich innerhalb von Minuten verstanden. Die Sitzung war ruhig, klar und wirklich hilfreich."
    name: "Sofia"
    city: "Madrid"
  - quote: "Am meisten schätzte ich, wie praktisch es war. Es gab mir Worte für Dinge, die ich seit Jahren gespürt hatte."
    name: "Lukas"
    city: "Winterthur"
  - quote: "Warm, klug und sehr menschlich. Ich kam aus Neugier und ging mit Einsicht, die ich wirklich nutzen konnte."
    name: "Julia"
    city: "Barcelona"
```

---

# §2 — Archetypen-Bibliothek — `src/data/big3.de.yaml`

```yaml
# Schlüssel identisch zu EN (sun/moon/rising · aries…pisces); Werte auf Deutsch.
# 60–90 Wörter · „du" · warm, psychologisch, nicht-fatalistisch.

sun:
  aries: |
    Mit der Sonne im Widder bist du zum Anfangen gemacht. Wo andere abwägen und zögern, bist du längst
    in Bewegung — lieber handeln und nachjustieren als stehen bleiben. Dieser Mut ist echt, und andere
    werden in deiner Nähe mutiger. Deine Wachstumskante: Nicht jeder Moment braucht Vollgas, und Geduld
    ist nicht dasselbe wie Aufgeben. Im besten Fall jagst du nicht nur deinen eigenen Zielen nach — du gehst
    voran, damit andere sich trauen zu folgen.
  taurus: |
    Mit der Sonne im Stier baust du Dinge, die bleiben. Wo andere hetzen, gehst du dein eigenes, ruhiges
    Tempo und vertraust auf das, was du sehen, anfassen und worauf du dich verlassen kannst. Diese
    Beständigkeit ist ein Geschenk — Menschen fühlen sich sicher bei dem, was du schaffst. Die Kante: Nicht
    jede Veränderung ist eine Bedrohung, und zu festes Halten kann Gutes draussen lassen. Im besten Fall
    machst du aus Geduld etwas Solides, auf dem wir anderen stehen können.
  gemini: |
    Mit der Sonne in den Zwillingen ist dein Kopf ständig in Bewegung — neugierig, schnell, hungrig auf die
    nächste Idee oder das nächste Gespräch. Du verbindest Dinge und Menschen, die andere getrennt lassen,
    und lässt Lernen wie Spiel aussehen. Die Kante: Bei so vielen offenen Türen fällt Abschliessen schwerer
    als Anfangen, und Tiefe verliert manchmal gegen Vielfalt. Im besten Fall hältst du einen Raum in
    Bewegung — leichtfüssig und ehrlich an allen interessiert.
  cancer: |
    Mit der Sonne im Krebs führst du mit Fürsorge. Du spürst die Stimmung eines Raums, bevor jemand
    spricht, und gibst Menschen instinktiv das Gefühl, gehalten zu sein. Zuhause — wo und wer auch immer
    das ist — bedeutet dir fast alles. Die Kante: Sich durch Rückzug zu schützen ist nicht dasselbe wie sicher
    zu sein, und nicht jeder muss umsorgt werden. Im besten Fall ist deine Wärme eine Stärke: Du siehst die
    Menschen, die der Rest übersieht.
  leo: |
    Mit der Sonne im Löwen bist du zum Leuchten gemacht — warm, grosszügig und ganz natürlich fürs
    Gestalten und Führen geschaffen. Wenn du in deinem Element bist, leben Menschen um dich herum auf;
    dein Zuspruch kann verändern, wie jemand sich selbst sieht. Die Kante: Wenn das Rampenlicht zum Sinn
    wird, wird dein Selbstvertrauen brüchig, und du verwechselst Applaus mit Liebe. Im besten Fall machst du
    mit deiner Wärme andere zur Hauptfigur, nicht nur dich.
  virgo: |
    Mit der Sonne in der Jungfrau siehst du, wie Dinge besser sein könnten — und machst dich leise daran,
    sie zu verbessern. Du bist präzise, nützlich und hilfst gern auf eine Art, die oft unbemerkt bleibt. Die
    Kante: Derselbe scharfe Blick, den du auf ein Problem richtest, kann sich gegen dich selbst richten, und
    „gut genug" fühlt sich unmöglich an. Im besten Fall bringst du Sorgfalt in die Details, die alle anderen
    übersehen — und lernst, diese Güte auch nach innen zu richten.
  libra: |
    Mit der Sonne in der Waage bist du auf Verbindung und Ausgleich gepolt. Du siehst jede Seite einer
    Situation, glättest Konflikte fast instinktiv und bringst Anmut und Fairness mit, wohin du auch gehst. Die
    Kante: Wenn du die Bedürfnisse aller abwägst, bleiben deine eigenen unausgesprochen, und „mir egal"
    stimmt nicht immer. Im besten Fall hältst du nicht nur den Frieden — du schaffst die Art von Fairness und
    Schönheit, die Menschen sich wirklich gesehen fühlen lässt.
  scorpio: |
    Mit der Sonne im Skorpion lebst du in der Tiefe. Oberflächen genügen dir nicht — du willst das Echte,
    auch wenn es unangenehm ist, und scheust die Seiten des Lebens nicht, vor denen andere wegschauen.
    Diese Intensität macht dich loyal, hellsichtig und still kraftvoll. Die Kante: Sich durch Kontrolle oder
    Geheimnis zu schützen kann genau die Nähe draussen lassen, die du dir wünschst. Im besten Fall kannst
    du alles aushalten — und anderen helfen, das zu verwandeln, was sie zu verbergen glaubten.
  sagittarius: |
    Mit der Sonne im Schützen bist du ein Suchender — nach Sinn, nach Horizonten, nach dem grossen
    Ganzen. Du bringst Optimismus und Ehrlichkeit mit, wohin du gehst, und deine Lust auf Erfahrung zieht
    andere aus ihrer Komfortzone. Die Kante: Das nächste Abenteuer sieht immer heller aus als dieses zu
    Ende zu bringen, und grosse Begeisterung überholt manchmal das, was du halten kannst. Im besten Fall
    erinnerst du alle daran, dass Leben gelebt und nicht nur verwaltet werden will.
  capricorn: |
    Mit der Sonne im Steinbock bist du für den langen Aufstieg gemacht. Du setzt dir ernsthafte Ziele und
    erreichst sie auch — durch Disziplin, Geduld und ein stilles Verantwortungsgefühl, auf das andere zählen.
    Die Kante: Wenn Wert an Leistung hängt, fühlt sich Ruhe wie Schwäche an, und der Gipfel verschiebt
    sich immer weiter. Im besten Fall bist du die ruhige Hand, die Dinge baut, die dich überdauern — und
    lernst, dass du die Aussicht immer geniessen durftest.
  aquarius: |
    Mit der Sonne im Wassermann siehst du, was anders sein könnte. Du bist ein origineller Kopf —
    unabhängig, prinzipientreu, mehr von Ideen und vom Wohl der Gruppe angezogen als von eigener
    Bequemlichkeit. Die Kante: Im Reich der Ideen zu leben kann Abstand schaffen zwischen dir und den
    unordentlicheren Gefühlen, deinen eigenen und denen anderer. Im besten Fall stellst du dir eine fairere,
    freiere Art vor, Dinge zu tun — und bringst Menschen dafür zusammen.
  pisces: |
    Mit der Sonne in den Fischen fühlst du die Welt fast ohne Filter — tief empathisch, fantasievoll, fein
    abgestimmt auf Dinge, die andere kaum benennen können. Du bringst Mitgefühl und eine stille Magie zu
    den Menschen um dich. Die Kante: Ohne klare Grenzen werden die Gefühle anderer zu deinen, und
    Träumen kann zum Versteck werden. Im besten Fall machst du aus all dieser Feinfühligkeit Kunst, Heilung
    — oder einfach das Geschenk, Menschen sich wirklich verstanden fühlen zu lassen.

moon:
  aries: |
    Mit dem Mond im Widder fühlst du schnell und mit voller Wucht. Gefühle kommen wie das Wetter —
    heftig, sofort, und oft so rasch wieder weg, wie sie kamen; lieber handelst du auf ein Gefühl hin, als darin
    zu sitzen. Die Kante: Dieser schnelle Funke kann Menschen treffen, die ihn nicht entzündet haben, und
    nicht jedes Gefühl braucht sofort eine Antwort. Im Alltag bringst du Ehrlichkeit und Energie zu denen, die
    du liebst — an deinen Gefühlen ist nichts versteckt.
  taurus: |
    Mit dem Mond im Stier beruhigt dich, was beständig und echt ist — Geborgenheit, Routine, gutes Essen,
    die Menschen und Orte, die sich nicht ständig verändern. Deine Gefühle bewegen sich langsam und tief,
    und wenn du dich sicher fühlst, bist du eine ruhige, erdende Gegenwart. Die Kante: Veränderung kann
    sich wie eine Bedrohung anfühlen, auch wenn sie keine ist, und Bequemlichkeit wird leise zur Sackgasse.
    Die dir Nahen wissen: Deine Liebe ist geduldig, körperlich und absolut verlässlich.
  gemini: |
    Mit dem Mond in den Zwillingen verarbeitest du Gefühle, indem du sie durchdenkst und aussprichst —
    Benennen macht sie für dich sicher. Du brauchst geistige Anregung und Abwechslung, um dich emotional
    lebendig zu fühlen, und bist oft der, der eine schwere Stimmung auflockert. Die Kante: Im Kopf zu bleiben
    kann eine Art sein, dem Fühlen auszuweichen, und Unruhe kann wie Distanz wirken. Die dir Nahen
    bekommen einen neugierigen, geistreichen Begleiter, der sie wirklich verstehen will.
  cancer: |
    Mit dem Mond im Krebs fühlst du alles zutiefst — das ist der Mond zuhause. Du brauchst Zugehörigkeit
    und emotionale Sicherheit wie andere die Luft, und du umsorgst die Menschen, die du liebst, fast ohne
    nachzudenken. Die Kante: Deine Stimmungen bewegen sich in Gezeiten, und deinen weichen Kern durch
    Rückzug zu schützen lässt andere rätseln. Im Alltag schenkst du eine seltene Fürsorge — das Gefühl,
    wirklich umsorgt, erinnert und gehalten zu sein.
  leo: |
    Mit dem Mond im Löwen ist dein Herz gross und warm, und du fühlst dich am sichersten, wenn du weisst,
    dass du den Menschen, die du liebst, wichtig bist. Du gibst Zuneigung grosszügig und bist leidenschaftlich
    loyal — aber du brauchst diese Wärme zurück. Die Kante: Wenn du dich nicht gesehen fühlst, kommt
    Verletzung als Stolz oder Drama heraus. Die dir Nahen bekommen jemanden, der sie von Herzen feiert
    und gewöhnliche Momente etwas goldener macht.
  virgo: |
    Mit dem Mond in der Jungfrau fühlst du dich sicher, wenn Ordnung herrscht und du nützlich sein kannst —
    Aufräumen, Helfen, Lösen ist deine Art, dich zu beruhigen. Du zeigst Liebe eher durch praktische Taten
    als durch grosse Worte. Die Kante: Diese innere Stimme kann hart kritisch sein, gegenüber anderen und
    besonders gegenüber dir selbst, und nicht jedes Gefühl muss repariert werden. Im Alltag bist du der, der
    bemerkt, was Menschen brauchen, und sich leise darum kümmert, bevor sie fragen.
  libra: |
    Mit dem Mond in der Waage fühlst du dich am wohlsten, wenn alles harmonisch ist und deine engen
    Beziehungen stabil sind — Unstimmigkeit verunsichert dich wirklich. Dich beruhigen Schönheit, Fairness
    und gute Gesellschaft. Die Kante: Frieden zu halten kann heissen, eigene Bedürfnisse zu schlucken, und
    du kannst dich auf einen Partner stützen, um dich ganz zu fühlen. Die dir Nahen bekommen eine
    nachdenkliche, rücksichtsvolle Gegenwart, die hart dafür arbeitet, dass sich alle gut behandelt fühlen.
  scorpio: |
    Mit dem Mond im Skorpion fühlst du in der Tiefe — privat, intensiv, ganz oder gar nicht. Du spürst, was
    unter der Oberfläche liegt, lange bevor es jemand ausspricht, und Sicherheit ist für dich langsam
    verdientes und dann fest gehaltenes Vertrauen. Die Kante ist zu lernen, dass Nähe keine Prüfung ist und
    Gesehenwerden kein Kontrollverlust. Im Alltag bist du der, dem Menschen das Echte erzählen — du
    kannst tragen, was die meisten überfordern würde.
  sagittarius: |
    Mit dem Mond im Schützen fühlst du dich sicher, wenn du frei bist — Raum, dich zu bewegen, zu
    erkunden, an etwas Grösseres zu glauben als den Tag vor dir. Du begegnest Gefühlen mit Optimismus
    und Weitblick und hasst es, eingezäunt zu sein. Die Kante: Der Drang wegzulaufen oder „das Positive zu
    sehen" kann über Gefühle hinweggehen, die gefühlt werden wollen. Im Alltag bringst du Leichtigkeit,
    Zuversicht und das Gefühl, dass es gut werden wird.
  capricorn: |
    Mit dem Mond im Steinbock fühlst du dich am sichersten, wenn du kompetent und in Kontrolle bist —
    lieber regelst du Dinge selbst, als jemanden zu brauchen. Gefühle sind privat; du verwaltest sie leise und
    hältst eine ruhige Oberfläche. Die Kante: Selbstgenügsamkeit kann zu emotionalem Panzer werden, und
    du entscheidest vielleicht, dass du keinen Trost brauchen darfst. Wer dir nahekommt, findet jemanden
    zutiefst Loyalen und Verlässlichen — den, der jedes Mal da ist und es ernst meint.
  aquarius: |
    Mit dem Mond im Wassermann brauchst du emotionalen Raum und Freiheit — Nähe, die dich nicht
    einengt. Du neigst dazu, Gefühle zu verstehen, bevor du dir erlaubst, sie zu fühlen, und bist in der Krise
    ruhig und besonnen. Die Kante: Einen Schritt zurückzutreten, um zu analysieren, kann andere auf
    Armlänge gehalten fühlen lassen, und manche Gefühle lassen sich nicht wegdenken. Im Alltag schenkst
    du annehmende, unbesitzergreifende Liebe und ein erfrischend wertfreies Ohr.
  pisces: |
    Mit dem Mond in den Fischen fühlst du fast alles — deines und das aller anderen — und du brauchst
    Sanftheit und stillen Rückzug, um zu dir zurückzufinden. Du bist endlos mitfühlend und intuitiv für das,
    was andere tragen. Die Kante: Ohne Grenzen nimmst du Stimmungen auf, die nicht deine sind, und es ist
    verlockend wegzudriften, wenn die Realität schmerzt. Die dir Nahen bekommen ein zartes, verzeihendes
    Herz, das sie sich zutiefst verstanden und selten verurteilt fühlen lässt.

rising:
  aries: |
    Mit Aszendent Widder wirkst du direkt, energiegeladen und bereit — Menschen spüren, dass du handelst,
    während andere noch überlegen. Du begegnest der Welt frontal, und es ist erfrischend, wie wenig du dich
    verstellst. Die Kante: Diese Vorwärtsenergie kann als Ungeduld oder Schroffheit wirken, bevor man die
    Wärme darunter sieht. Der erste Eindruck von dir ist jemand Lebendiges und Unerschrockenes — der, der
    hereinkommt und Dinge in Gang bringt.
  taurus: |
    Mit Aszendent Stier strahlst du Ruhe aus — beständig, geerdet, gelassen, mit einer Wärme, die Menschen
    beruhigt. Du bewegst dich in deinem eigenen Tempo durch die Welt und bringst eine entspannende
    Gegenwart mit, wohin du gehst. Die Kante: Dieselbe Beständigkeit kann wie Sturheit oder Widerwille
    aussehen, wenn das Leben Tempo verlangt. Der erste Eindruck von dir ist jemand Solides und
    Vertrauenswürdiges — der, auf den sich andere instinktiv verlassen.
  gemini: |
    Mit Aszendent Zwillinge wirkst du hell, neugierig und leicht ansprechbar — schnell mit einer Frage, einem
    Witz oder einer Verbindung. Du begegnest neuen Menschen und Situationen mit echtem Interesse und
    passt dich im Flug an. Die Kante: All diese Bewegung kann ruhelos oder schwer fassbar wirken, bevor
    man deine Tiefe sieht. Der erste Eindruck von dir ist ein wacher, kluger Geist — der, der einen Raum
    wacher macht.
  cancer: |
    Mit Aszendent Krebs wirkst du sanft, warm und still fürsorglich — Menschen fühlen, dass sie bei dir weich
    sein dürfen. Du begegnest der Welt zuerst etwas schützend und prüfst auf Sicherheit, bevor du dich
    öffnest. Die Kante: Diese frühe Vorsicht kann als Schüchternheit oder Launenhaftigkeit wirken, bis
    Vertrauen entsteht. Der erste Eindruck von dir ist jemand Freundliches und Nahbares — der, dem andere
    sich früher anvertrauen, als sie erwartet hätten.
  leo: |
    Mit Aszendent Löwe machst du Eindruck — warm, ausdrucksstark, natürlich magnetisch, die Art Präsenz,
    die ein Raum bemerkt. Du begegnest der Welt mit Selbstvertrauen und Grosszügigkeit, und Menschen
    werden von deinem Leuchten angezogen. Die Kante: Wenn du spürst, dass du nicht gesehen wirst, kann
    diese Wärme in Inszenierung oder Stolz kippen. Der erste Eindruck von dir ist jemand Helles und
    Grossherziges — der, der andere ein bisschen lebendiger macht, einfach indem er auftaucht.
  virgo: |
    Mit Aszendent Jungfrau wirkst du gefasst, bescheiden und still beobachtend — du bemerkst alles und
    machst selten Aufhebens. Du begegnest der Welt bereit, nützlich zu sein, und Menschen spüren, dass sie
    in fähigen, sorgfältigen Händen sind. Die Kante: Diese Zurückhaltung kann kühl oder kritisch wirken, bevor
    deine echte Wärme zeigt. Der erste Eindruck von dir ist jemand Geerdetes und Verlässliches — der, dem
    man zutraut, die Details zu meistern.
  libra: |
    Mit Aszendent Waage ist der erste Eindruck von dir meist warm: ausgeglichen, leicht ansprechbar, mit
    einem Auge für Schönheit und einer Gabe, Menschen zu entspannen. Du liest einen Raum und glättest
    seine Kanten fast automatisch. Die Kante: Beim Friedenhalten bleibt deine eigene Vorliebe
    unausgesprochen — „mir egal" stimmt nicht immer. Unter der Diplomatie steckt jemand, der still gern
    führt, sobald du dir das zugestehst.
  scorpio: |
    Mit Aszendent Skorpion hast du eine Präsenz, die Menschen spüren, bevor du viel sagst — intensiv,
    magnetisch und nicht leicht zu lesen. Du begegnest der Welt wachsam und gibst wenig preis, bis du
    entscheidest, dass jemand es sich verdient hat. Die Kante: Dieses Geheimnis kann verschlossen oder
    einschüchternd wirken, bevor man deine Loyalität entdeckt. Der erste Eindruck von dir ist Tiefe und stille
    Kraft — der, zu dem man sich hingezogen und zugleich ein wenig in Ehrfurcht fühlt.
  sagittarius: |
    Mit Aszendent Schütze wirkst du offen, warm und begeistert — direkt, witzig und bereit für das, was als
    Nächstes kommt. Du begegnest der Welt in der Erwartung, dass sie interessant ist, und dein Optimismus
    ist ansteckend. Die Kante: Diese Direktheit und Ruhelosigkeit kann sorglos oder schwer fassbar wirken.
    Der erste Eindruck von dir ist ein unbeschwerter, abenteuerlustiger Geist — der, der das Leben etwas
    grösser und möglicher erscheinen lässt.
  capricorn: |
    Mit Aszendent Steinbock wirkst du fähig, gefasst und still ernsthaft — man nimmt an, du seist jemand,
    den man ernst nehmen sollte, oft bevor du es bewiesen hast. Du begegnest der Welt mit Zurückhaltung
    und Verantwortungsgefühl. Die Kante: Diese Zurückhaltung kann kühl oder unnahbar wirken, bis man den
    trockenen Humor und die Wärme darunter sieht. Der erste Eindruck von dir ist jemand Verlässliches und
    Geerdetes — der, zu dem andere instinktiv aufschauen.
  aquarius: |
    Mit Aszendent Wassermann wirkst du unverwechselbar — freundlich und doch ein wenig abseits, klar dein
    eigener Mensch. Du begegnest der Welt zu deinen Bedingungen, neugierig auf Menschen, aber
    unbeeindruckt davon, dazuzugehören. Die Kante: Diese Unabhängigkeit kann distanziert oder schwer
    fassbar wirken, bevor man deine echte Zugewandtheit spürt. Der erste Eindruck von dir ist ein Original —
    der, der andere freier macht, auch ein bisschen mehr sie selbst zu sein.
  pisces: |
    Mit Aszendent Fische wirkst du sanft, weich und ein wenig verträumt — nahbar auf eine Art, die Menschen
    entspannt und einlädt, sich zu öffnen. Du begegnest der Welt mit Empathie und nimmst oft ihre Stimmung
    auf. Die Kante: Diese Offenheit kann vage oder leicht beeinflussbar wirken, und deine Grenzen können
    verschwimmen. Der erste Eindruck von dir ist eine freundliche, sanfte Gegenwart — der, bei dem andere
    sich still sicher und verstanden fühlen.

synthesis:
  opening: |
    Zusammen sind deine Big 3 keine drei getrennten Etiketten — sie sind drei Schichten eines Menschen:
    was dich antreibt (Sonne), was du brauchst, um dich sicher zu fühlen (Mond), und wie die Welt dir zuerst
    begegnet (Aszendent). So passen deine zusammen.
  element_fire: "In dir steckt viel Feuer — Antrieb, Wärme und der Drang, dich zu bewegen. Du führst mit Energie und bist am lebendigsten, wenn du etwas verfolgst, das dir wichtig ist."
  element_earth: "In dir steckt ein starker Erd-Faden — geerdet, praktisch, am glücklichsten, wenn du etwas Echtes und Bleibendes baust. Menschen vertrauen dir, weil du dranbleibst."
  element_air: "In dir steckt viel Luft — du lebst in Ideen, Worten und Verbindung und verstehst die Welt, indem du sie durchdenkst und besprichst. Menschen werden von deinem Geist angezogen."
  element_water: "In dir steckt tiefes Wasser — du fühlst Dinge intensiv und intuitiv und liest die emotionale Strömung unter der Oberfläche, lange bevor sie ausgesprochen wird."
  element_distinct: "Deine drei Zeichen schöpfen aus verschiedenen Elementen, was dich wirklich vielseitig macht — du kannst handeln, fühlen und dich verbinden, je nachdem, was ein Moment braucht. Die Kunst ist, diese Seiten zusammenwirken statt gegeneinander arbeiten zu lassen."
  modality_cardinal: "Du bist fürs Initiieren gemacht — Dinge anzustossen, Richtung zu geben und andere in Bewegung zu bringen. Anfänge fallen dir leicht; die Übung ist, sie zu Ende zu bringen."
  modality_fixed: "Du bist für Ausdauer gebaut — wenn du dich einmal festlegst, hältst du. Diese Loyalität und Entschlossenheit sind echte Stärken; die Übung ist, offen für Veränderung zu bleiben, wenn es Zeit ist."
  modality_mutable: "Du bist bemerkenswert anpassungsfähig — du biegst dich, justierst und fliesst mit dem, was kommt. Diese Flexibilität ist ein Geschenk; die Übung ist, eine Richtung zu wählen und ihr lange genug zu vertrauen, um anzukommen."
  modality_mixed: "Du trägst eine gesunde Mischung aus Antrieb, Beständigkeit und Flexibilität — du kannst anfangen, durchhalten oder dich anpassen, wie eine Situation es verlangt, was dich unter Druck ungewöhnlich ausgeglichen macht."
  sunmoon_same_sign: "Deine Sonne und dein Mond stehen im selben Zeichen, was alles bündelt — was dich antreibt und was du brauchst, sind ein und dasselbe. Das macht dich ganzherzig und unverwechselbar, auch wenn dir ein eingebautes Gegengewicht fehlen mag."
  sunmoon_same_element: "Deine Sonne und dein Mond teilen ein Element, also ziehen das, was du willst, und das, was du brauchst, meist in dieselbe Richtung — es gibt eine innere Beständigkeit in dir, ein Gefühl, bei dir selbst zuhause zu sein."
  sunmoon_tension: "Deine Sonne und dein Mond sind aus verschiedenem Stoff — was dich nach aussen antreibt und was dich innen beruhigt, sprechen nicht immer dieselbe Sprache. Das kann sich wie ein inneres Tauziehen anfühlen, gibt dir aber auch Bandbreite: zwei sehr verschiedene Stärken in einem Menschen."
  sunmoon_complement: "Deine Sonne und dein Mond ergänzen sich — dein äusserer Antrieb und deine inneren Bedürfnisse gleichen sich aus, statt zu verschwimmen, und geben dir sowohl Schwung als auch eine Art aufzutanken."
  closing: |
    Das ist die Kurzfassung. Eine ausführliche Beratung nimmt alle drei — und den Rest deines Horoskops —
    und macht daraus etwas, das du wirklich nutzen kannst: wo diese Energien dir helfen, wo sie dich
    stolpern lassen und was du damit tun kannst. Wenn du bereit bist, ist das das Gespräch dazu.
  opening_no_time: |
    Ohne deine genaue Geburtszeit können wir deinen Aszendenten nicht festlegen — der braucht die Uhr,
    nicht nur das Datum. Aber deine Sonne und dein Mond erzählen schon viel: was dich antreibt und was du
    brauchst, um dich sicher zu fühlen.
  closing_no_time: |
    Dein Aszendent — wie die Welt dir zuerst begegnet — ist das fehlende Stück, und es lohnt sich, es zu
    finden. Wir können deine Geburtszeit gemeinsam aufspüren; das ist eines der ersten Dinge, die wir klären
    würden. Wenn du bereit bist, lass uns reden.
```

**Assembly:** identical logic to EN (§2 of the EN deliverable) — same keys, German values; element/modality/sign maps are language-independent (use the same `aries…pisces` identifiers).

---

# §3 — Seiten — `src/content/pages/de/`

## 3.1 Start — `home.md`

```markdown
---
title: "Big 3 Astrologie — deine Sonne, dein Mond, dein Aszendent"
description: "Deine Big 3 — Sonne, Mond und Aszendent — kostenlos, dann eine ausführliche Geburtshoroskop-Beratung bei einer echten Astrologin. Auf DE, EN und ES."
canonical: "https://www.big3astrology.com/de/"
lang: "de"
translationKey: "home"
slug: ""
draft: false
---

# Deine Sonne, dein Mond und dein Aszendent — gelesen von einem Menschen, nicht von einem Algorithmus

Gib dein Geburtsdatum, deine Geburtszeit und deinen Geburtsort ein. In wenigen Sekunden bekommst du deine **Big 3** — die drei Stellungen, die prägen, wie du handelst, wie du fühlst und wie die Welt dir zuerst begegnet. Kostenlos, und so geschrieben, dass es wirklich etwas bedeutet.

[ Formular: Datum · Zeit · Ort · Land → **Meine Big 3 zeigen** ]

*Keine genaue Geburtszeit? Sonne und Mond bekommst du trotzdem — beim Rest helfen wir dir.*

## Wenn du das Echte willst, sprichst du mit einem Menschen

Deine kostenlosen Big 3 sind ein erster Blick. Eine **ausführliche Geburtshoroskop-Beratung** bei Gabriela ist das echte Gespräch — dein ganzes Horoskop, im Voraus vorbereitet und live besprochen, mit einer schriftlichen Zusammenfassung zum Behalten. Das ist die Beratung, für die die meisten kommen.

[ **Ausführliche Beratung buchen — CHF 180** ]   ·   Noch unsicher? [Starte mit einem 15-Minuten-Gespräch (CHF 20)](/de/kennenlern-gespraech/)

## Warum Big 3 Astrologie
- **Eine echte Astrologin, keine App.** Gabriela liest dein Horoskop selbst — geerdet, konkret und auf deiner Seite.
- **Psychologisch, keine Wahrsagerei.** Dein Horoskop ist eine Landkarte von Mustern und Potenzial, niemals ein festes Schicksal.
- **In deiner Sprache.** Beratungen auf Deutsch, Englisch und Spanisch.

> „Gabrielas Beratung war überraschend präzise. Ich ging mit echter Klarheit, nicht mit vagem Mystizismus." — Anna, Zürich
```

## 3.2 Über mich — `about.md`

```markdown
---
title: "Über Gabriela Brecht — psychologische Astrologin, Zürich"
description: "Gabriela Brecht — psychologische Astrologin und frühere Wirtschaftsführungskraft in Zürich, ausgebildet in der Debra-Silverman-Methode. Beratungen auf DE, EN, ES."
canonical: "https://www.big3astrology.com/de/ueber-mich/"
lang: "de"
translationKey: "about"
slug: "ueber-mich"
schemaType: "Person"
draft: false
---

# Gabriela Brecht

Ich lese Horoskope so, wie ich früher Teams gelesen habe — auf der Suche danach, was wirklich darunter vorgeht und was als Nächstes geschehen will.

Bevor Astrologie meine Arbeit wurde, war sie die Linse, die ich nie weglegte. Ich habe Jahre in der Wirtschaft verbracht, halte zwei Abschlüsse — einen in der Schweiz, einen aus Cambridge — und habe Menschen geführt. Was mich immer wieder zog, war dieselbe Frage, die auch die Astrologie stellt: *Warum bewegen wir uns, wie wir uns bewegen, und worin sind wir hier, um zu wachsen?*

Heute bringe ich beide Hälften an den Tisch. Ich bin **psychologische Astrologin**: Ich behandle dein Horoskop nicht als festes Schicksal, sondern als Landkarte von Mustern, Gaben und Wachstumskanten — etwas, mit dem du arbeitest, nie etwas, das über dich entscheidet. Meine Ausbildung liegt in psychologischer und archetypischer Astrologie, unter anderem in der **Debra-Silverman-Methode** (USA) sowie in Programmen für psychologische Astrologie in der Schweiz und in Deutschland, und ich schöpfe aus jahrelanger Erfahrung im Life-Coaching.

Geboren in Caracas, lebend in Zürich, Mutter von zwei Kindern, arbeite ich auf **Deutsch, Englisch und Spanisch** — den drei Sprachen, in denen ich denke und fühle. Besonders zieht mich, wo Astrologie das echte Leben berührt: Beziehungen, Entscheidungen und die Art, wie Menschen in Teams zusammenarbeiten.

Wenn dich das anspricht, sind deine Big 3 ein guter erster Schritt. Wenn du das ganze Bild willst, [lass uns reden](/de/geburtshoroskop-beratung/).

*Gabriela Brecht, psychologische Astrologin, Zürich.*

*Astrologie dient hier der Einsicht und Selbstreflexion. Sie ist keine medizinische, psychologische, finanzielle oder rechtliche Beratung und hebt deinen freien Willen niemals auf.*
```

## 3.3 Geburtshoroskop-Beratung (PRIMÄR) — `natal-reading.md`

```markdown
---
title: "Geburtshoroskop-Beratung — Live-Sitzung + Zusammenfassung (CHF 180)"
description: "Ausführliche psychologische Geburtshoroskop-Beratung: 90+ Min. Vorbereitung, 60-Min.-Live-Sitzung auf Google Meet, schriftliche Zusammenfassung. CHF 180."
canonical: "https://www.big3astrology.com/de/geburtshoroskop-beratung/"
lang: "de"
translationKey: "natal-reading"
slug: "geburtshoroskop-beratung"
schemaType: "Service"
offerType: "Service"
price: "180"
currency: "CHF"
duration: "PT60M"
draft: false
---

# Deine Geburtshoroskop-Beratung — CHF 180

Das ganze Bild, gelesen von einem Menschen und eigens für dich vorbereitet. Kein generierter Report — echte Vorbereitung, ein echtes Gespräch und etwas zum Mitnehmen. Das ist die Beratung, nach der die meisten wirklich suchen.

## So läuft es ab
- **90+ Minuten Vorbereitung**, bevor wir uns treffen — ich studiere dein Horoskop in der Tiefe, damit es in unserer Zeit um *dich* geht, nicht um die Einrichtung.
- **Eine 60-minütige Live-Sitzung** auf Google Meet, um alles zu besprechen, alles zu fragen und es mit deinem echten Leben zu verbinden.
- **Eine schriftliche Zusammenfassung** danach, damit die Einsicht lange nach dem Gespräch bei dir bleibt.

Das ist psychologische Astrologie: deine Stärken, deine Muster, deine Wachstumskanten — und wie du wirklich damit arbeitest. Du gehst und verstehst dich ein Stück klarer als zuvor.

[ **Ausführliche Beratung buchen** ]

Zu zweit? Ergänze eine [Beziehungsanalyse (CHF 250 gesamt)](/de/beziehungsanalyse/).
```

## 3.4 15-Minuten-Gespräch (SEKUNDÄR) — `15-minute-call.md`

```markdown
---
title: "15-Minuten-Gespräch — noch unsicher? Starte hier (CHF 20)"
description: "Noch nicht bereit für eine ausführliche Beratung? Buch ein 15-Minuten-Gespräch mit Astrologin Gabriela Brecht — ein Mini-Reading und ein Kennenlernen. CHF 20."
canonical: "https://www.big3astrology.com/de/kennenlern-gespraech/"
lang: "de"
translationKey: "precall"
slug: "kennenlern-gespraech"
schemaType: "Service"
offerType: "Service"
price: "20"
currency: "CHF"
duration: "PT15M"
draft: false
---

# Noch unsicher? Lernen wir uns zuerst kennen — CHF 20

Wenn eine ausführliche Beratung ein grosser erster Schritt ist, fang kleiner an. In 15 Minuten bekommst du ein echtes Gefühl dafür, wie ich arbeite, und ein Mini-Reading zu etwas, das gerade in deinem Horoskop lebendig ist — damit du ohne Rätselraten über eine ausführliche Beratung entscheiden kannst.

**Du bekommst**
- Ein fokussiertes 15-minütiges Videogespräch auf Google Meet
- Ein Mini-Reading zu einem Thema, das dir gerade wichtig ist
- Eine ehrliche Einschätzung, ob eine ausführliche Beratung für dich passt

**Gut zu wissen:** Dieses Gespräch steht für sich — die CHF 20 werden nicht an eine ausführliche Beratung angerechnet. Es ist einfach der leichteste Weg, mich kennenzulernen, bevor du dich festlegst. Lieber gleich das ganze Bild? [Ausführliche Beratung buchen (CHF 180)](/de/geburtshoroskop-beratung/).

[ **15-Minuten-Gespräch buchen** ]
```

## 3.5 Beziehungsanalyse — `relationship-reading.md`

```markdown
---
title: "Beziehungsanalyse — zwei Horoskope zusammen (CHF 250)"
description: "Eine ausführliche Beratung zu zweit: wie eure Horoskope sich begegnen, wo ihr fliesst und wo ihr euch fordert. CHF 250 (CHF 180 + CHF 70 für die zweite Person)."
canonical: "https://www.big3astrology.com/de/beziehungsanalyse/"
lang: "de"
translationKey: "relationship-reading"
slug: "beziehungsanalyse"
schemaType: "Service"
offerType: "Service"
price: "250"
currency: "CHF"
duration: "PT60M"
draft: false
---

# Beziehungsanalyse für Paare — CHF 250

Zwei Horoskope, nebeneinander. Wir schauen, wie du und ein anderer Mensch sich wirklich begegnen — wo es leicht fliesst, wo ihr euch fordert und was ihr beide braucht, um euch gesehen und verstanden zu fühlen.

Es ist die ausführliche Geburtshoroskop-Beratung, erweitert auf zwei Menschen: dieselbe tiefe Vorbereitung, eine 60-minütige Live-Sitzung auf Google Meet und eine schriftliche Zusammenfassung — mit einem zweiten Horoskop für **CHF 70** zusätzlich zu den regulären CHF 180.

Gut für Paare, aber genauso wertvoll für jede Verbindung, die zählt — in der Liebe, in der Familie, in der Freundschaft oder im Business.

[ **Beziehungsanalyse buchen** ]
```

## 3.6 Impressum — `legal-notice.md`

```markdown
---
title: "Impressum — Big Astrology GmbH"
description: "Impressum und Firmenangaben der Big Astrology GmbH, Küsnacht ZH."
canonical: "https://www.big3astrology.com/de/impressum/"
lang: "de"
translationKey: "legal-notice"
slug: "impressum"
draft: false
---

# Impressum

**Big Astrology GmbH**
Ränkestrasse 21
8700 Küsnacht ZH
Schweiz

E-Mail: info@big3astrology.com

Geschäftsführerin: Gabriela Brecht
Handelsregister / MwSt.: [UID CHE-___.___.___ — wird nach Eintrag der GmbH ergänzt]

Verantwortlich für den Inhalt: Gabriela Brecht, Adresse wie oben.
```

## 3.7 AGB — `terms.md`

```markdown
---
title: "AGB — Big Astrology GmbH"
description: "Allgemeine Geschäftsbedingungen für Beratungen und Leistungen der Big Astrology GmbH."
canonical: "https://www.big3astrology.com/de/agb/"
lang: "de"
translationKey: "terms"
slug: "agb"
draft: false
---

# Allgemeine Geschäftsbedingungen

## 1. Anbieterin
Diese Bedingungen regeln die Leistungen der Big Astrology GmbH, Ränkestrasse 21, 8700 Küsnacht ZH, Schweiz („wir", „uns"). Kontakt: info@big3astrology.com.

## 2. Leistungen
Wir bieten astrologische Beratungen: eine kostenlose Big-3-Übersicht, ein 15-minütiges Kennenlern-Gespräch (CHF 20), eine ausführliche Geburtshoroskop-Beratung (CHF 180) und eine Beziehungsanalyse (CHF 250). Beratungen finden live über Google Meet statt, mit schriftlicher Zusammenfassung, wo angegeben.

## 3. Buchung & Zahlung
Buchungen erfolgen über unseren Terminanbieter. Die Zahlung ist bei Buchung fällig, per Karte oder TWINT, abgewickelt über unseren Zahlungsanbieter. Die Preise verstehen sich in Schweizer Franken (CHF) inkl. allfälliger Schweizer MwSt.

## 4. Stornierung & Umbuchung
Siehe unsere Seite [Stornierung & Rückerstattung](/de/stornierung-rueckerstattung/).

## 5. Art der Leistungen — wichtig
Unsere Beratungen dienen der Einsicht, Reflexion und Unterhaltung. Sie sind **keine** medizinische, psychologische, finanzielle oder rechtliche Beratung und ersetzen keine professionelle Betreuung. Du bleibst für deine eigenen Entscheidungen verantwortlich. Astrologie sagt die Zukunft weder voraus noch bestimmt sie sie und hebt deinen freien Willen niemals auf.

## 6. Haftung
Soweit gesetzlich zulässig, ist unsere Haftung auf Vorsatz und grobe Fahrlässigkeit beschränkt. Für Entscheidungen, die du auf Basis einer Beratung triffst, haften wir nicht.

## 7. Anwendbares Recht
Es gilt Schweizer Recht. Gerichtsstand ist Küsnacht ZH, Schweiz, soweit gesetzlich zulässig.
```

## 3.8 Stornierung & Rückerstattung — `cancellations-refunds.md`

```markdown
---
title: "Stornierung & Rückerstattung — Big Astrology GmbH"
description: "Stornierungs-, Umbuchungs- und Rückerstattungsregeln für Beratungen der Big Astrology GmbH."
canonical: "https://www.big3astrology.com/de/stornierung-rueckerstattung/"
lang: "de"
translationKey: "cancellations-refunds"
slug: "stornierung-rueckerstattung"
draft: false
---

# Stornierung & Rückerstattung

- **Umbuchen:** kostenlos bis 24 Stunden vor deiner Sitzung, über den Link in deiner Bestätigungs-E-Mail.
- **Stornieren:** mindestens 24 Stunden vor deiner Sitzung für eine volle Rückerstattung. Innerhalb von 24 Stunden ist die Gebühr nicht erstattbar, da die Vorbereitungszeit für dich reserviert wurde.
- **Nichterscheinen:** Verpasst du deine Sitzung ohne Nachricht, ist die Gebühr nicht erstattbar.
- **Das 15-Minuten-Gespräch (CHF 20)** ist nach Durchführung nicht erstattbar und wird nicht an andere Beratungen angerechnet.
- **Probleme auf unserer Seite:** Müssen wir absagen oder umbuchen, bekommst du einen neuen Termin oder eine volle Rückerstattung — deine Wahl.

Fragen? Schreib an info@big3astrology.com.
```

## 3.9 Datenschutz — `privacy.md`

```markdown
---
title: "Datenschutz — Big Astrology GmbH"
description: "Wie die Big Astrology GmbH mit deinen Daten umgeht: cookielose Analyse, minimale Daten, kein Ad-Tracking."
canonical: "https://www.big3astrology.com/de/datenschutz/"
lang: "de"
translationKey: "privacy"
slug: "datenschutz"
draft: false
---

# Datenschutz

Wir halten das einfach und erheben so wenig wie möglich.

- **Deine Geburtsdaten** (Datum, Zeit, Ort) werden nur verwendet, um deine Big 3 zu berechnen und deine Beratung vorzubereiten. Wir verkaufen sie nicht und geben sie nicht für Werbung weiter.
- **Buchung & Zahlung** werden über unsere Termin- und Zahlungsanbieter abgewickelt, die deinen Namen, deine E-Mail und Zahlungsdaten verarbeiten, um die Leistung zu erbringen.
- **Analyse:** Wir nutzen datenschutzfreundliche, cookielose Analyse. Wir verwenden keine Werbe-Cookies und kein seitenübergreifendes Tracking — deshalb gibt es kein Cookie-Banner zum Wegklicken.
- **Deine Rechte:** Schreib an info@big3astrology.com, um zu erfahren, was wir über dich gespeichert haben, oder um es korrigieren oder löschen zu lassen.

Verantwortliche: Big Astrology GmbH, Ränkestrasse 21, 8700 Küsnacht ZH, Schweiz.
```

---

# §4 — Pillar-Seiten — `src/content/blog/de/`

## 4.1 `geburtshoroskop-kostenlos.md`  (Keyword: *Geburtshoroskop kostenlos*)

```markdown
---
title: "Geburtshoroskop kostenlos: deine Big 3 in Sekunden"
description: "Hol dir dein Geburtshoroskop kostenlos — deine Big 3 aus Sonne, Mond und Aszendent — in Sekunden, und erfahre, was jedes bedeutet. Ohne Anmeldung."
canonical: "https://www.big3astrology.com/de/geburtshoroskop-kostenlos/"
lang: "de"
translationKey: "free-birth-chart"
slug: "geburtshoroskop-kostenlos"
schemaType: "Article"
draft: false
---

# Geburtshoroskop kostenlos: deine Big 3, erklärt

**Kurz gesagt:** Ein Geburtshoroskop ist eine Landkarte des Himmels im genauen Moment deiner Geburt. Die drei wichtigsten Punkte darin sind deine **Sonne, dein Mond und dein Aszendent** — deine „Big 3". Du bekommst alle drei hier kostenlos in wenigen Sekunden, indem du Geburtsdatum, -zeit und -ort eingibst. [Hol dir deine Big 3 kostenlos.](/de/#big3)

Ein vollständiges Geburtshoroskop hat Dutzende Bausteine — Planeten, Zeichen, Häuser, Achsen. Aber du brauchst nicht alles, um etwas Echtes über dich zu erfahren. Die Big 3 tragen den grössten Teil des Signals — deshalb sind sie der richtige Anfang.

## Was ist ein Geburtshoroskop?
Ein Geburtshoroskop (auch Radix oder Geburtschart) ist eine Momentaufnahme davon, wo Sonne, Mond und Planeten aus deiner Sicht auf der Erde im Moment deiner Geburt standen. Weil der Himmel sich ständig bewegt, ist dein Horoskop praktisch einzigartig — sogar Menschen, die am selben Tag an verschiedenen Orten geboren sind, haben verschiedene Aszendenten.

Für eine genaue Berechnung brauchst du drei Dinge:
- **Geburtsdatum** — legt die Sonne und die meisten Planetenstände fest.
- **Geburtszeit** — legt deinen Aszendenten und die Häuser fest. Das fehlt den meisten am ehesten.
- **Geburtsort** — setzt das Horoskop auf deinen Punkt auf der Erde.

## Deine Big 3: die drei, die am meisten zählen
- **Sonne — was dich antreibt.** Dein Kern und was dich aufleben lässt. Das Zeichen, das du schon kennst („Ich bin Löwe").
- **Mond — was du brauchst, um dich sicher zu fühlen.** Deine innere, emotionale Welt: wie du fühlst, dich beruhigst und auftankst.
- **Aszendent — wie die Welt dir zuerst begegnet.** Der Eindruck, den du machst, und deine instinktive Art, dem Leben zu begegnen.

Zusammen erklären sie, warum sich zwei Menschen „desselben Zeichens" völlig verschieden anfühlen können. [Sieh dir deine an.](/de/#big3)

## Brauche ich meine genaue Geburtszeit?
Für Sonne und Mond meist nicht — dein Datum reicht in der Regel. Für deinen **Aszendenten ja**: Er wechselt etwa alle zwei Stunden, also hilft schon eine ungefähre Zeit, und eine genaue ist am besten. Du kennst sie nicht? Sonne und Mond bekommst du trotzdem, und beim Aufspüren der Zeit für eine ausführliche Beratung helfen wir dir.

## Was ein kostenloses Horoskop kann — und was nicht
Kostenlose Big 3 sind ein echter, genauer Anfang — aber eine Zusammenfassung, nicht die ganze Geschichte. Sie zeigen nicht, wie deine Stellungen zusammenwirken, wo deine Stärken und Reibungen wirklich liegen oder was du damit tun sollst. Das ist die Aufgabe einer ausführlichen Beratung: eine echte Astrologin, die dein ganzes Horoskop nimmt und daraus etwas Nützliches macht. [Mehr zur Geburtshoroskop-Beratung.](/de/geburtshoroskop-beratung/)

## Häufige Fragen

### Ist das Geburtshoroskop wirklich kostenlos?
Ja — deine Big 3 (Sonne, Mond und Aszendent) und eine kurze Zusammenführung sind kostenlos, ohne Anmeldung.

### Ist das genau?
Ja. Wir berechnen echte Planetenstände für dein Datum, deine Zeit und deinen Ort — dieselbe Astronomie, die auch Fachleute nutzen.

### Was, wenn ich meine Geburtszeit nicht kenne?
Du bekommst Sonne und Mond. Dein Aszendent braucht eine genaue Zeit — wir helfen dir, sie zu finden.

### Was ist der Unterschied zwischen dem und einer Beratung?
Das kostenlose Horoskop ist eine Zusammenfassung, die du selbst liest. Eine Beratung ist ein Live-Gespräch mit einer Astrologin, die dein ganzes Horoskop für dein echtes Leben deutet.

*Astrologie dient der Einsicht und Selbstreflexion — sie ist keine medizinische, psychologische, finanzielle oder rechtliche Beratung.*
```

## 4.2 `aszendent-berechnen.md`  (Keyword: *Aszendent berechnen und Bedeutung herausfinden*)

```markdown
---
title: "Aszendent berechnen — und seine Bedeutung herausfinden"
description: "Berechne deinen Aszendenten kostenlos in Sekunden und finde heraus, was er für deine Wirkung bedeutet. Geburtszeit erforderlich."
canonical: "https://www.big3astrology.com/de/aszendent-berechnen/"
lang: "de"
translationKey: "calculate-rising-sign"
slug: "aszendent-berechnen"
schemaType: "Article"
draft: false
---

# Aszendent berechnen — und seine Bedeutung herausfinden

**Kurz gesagt:** Dein Aszendent ist das Tierkreiszeichen, das in der genauen Minute deiner Geburt am Horizont aufstieg. Um ihn zu berechnen, brauchst du dein Geburtsdatum, die **genaue Zeit** und den Ort. Gib sie hier ein und erhalte ihn kostenlos in Sekunden. [Aszendent berechnen.](/de/#big3)

## Was ist der Aszendent?
Während dein Sonnenzeichen davon handelt, wer du im Kern bist, handelt dein **Aszendent davon, wie du rüberkommst** — deine instinktive Art, dein erster Eindruck, die „Eingangstür", durch die Menschen zu dir gelangen. Er legt auch die Struktur deines ganzen Horoskops fest (die Häuser) — deshalb ist er in der Astrologie so wichtig.

## Warum du deine genaue Geburtszeit brauchst
Der Aszendent bewegt sich schnell — in 24 Stunden durch alle zwölf Zeichen, also etwa **alle zwei Stunden ein neues Zeichen**. Deshalb kann dein Datum allein ihn nicht liefern, und eine Geburtszeit, die nur eine Stunde danebenliegt, kann dich aufs falsche Zeichen setzen. Mit genauer Zeit stimmt dein Aszendent; mit nur ungefährer Zeit nimm das Ergebnis als gute Schätzung.

### So findest du deine Geburtszeit
- Schau auf deine **Geburtsurkunde** — in vielen Ländern ist die Zeit vermerkt.
- Frag **Eltern oder enge Verwandte**.
- Fordere deinen **Geburtseintrag** beim Spital oder Zivilstandsamt deines Geburtsorts an.

## Was dein Aszendent bedeutet
Dein Aszendent färbt alles, von deiner Körpersprache bis dazu, wie du mit neuen Situationen umgehst. Eine kurze Skizze nach Element:
- **Feuer-Aszendent (Widder, Löwe, Schütze):** du wirkst direkt, warm, energiegeladen.
- **Erd-Aszendent (Stier, Jungfrau, Steinbock):** du wirkst geerdet, fähig, gefasst.
- **Luft-Aszendent (Zwillinge, Waage, Wassermann):** du wirkst gesellig, neugierig, leicht ansprechbar.
- **Wasser-Aszendent (Krebs, Skorpion, Fische):** du wirkst feinfühlig, magnetisch, etwas schwerer zu lesen.

Dein kostenloses Ergebnis gibt dir eine ausführlichere, persönliche Beschreibung deines konkreten Aszendenten. [Sieh dir deinen an.](/de/#big3)

## Aszendent, Sonne und Mond — das ganze Bild
Dein Aszendent ist ein Drittel deiner Big 3. Zusammen mit deiner **Sonne** (was dich antreibt) und deinem **Mond** (was du brauchst) erklärt er die Lücke zwischen dem, wie Menschen dich zuerst lesen, und dem, wer du darunter wirklich bist. Eine ausführliche Beratung verbindet alle drei — und den Rest deines Horoskops — zu etwas, das du nutzen kannst. [Mehr zur Geburtshoroskop-Beratung.](/de/geburtshoroskop-beratung/)

## Häufige Fragen

### Kann ich meinen Aszendenten ohne Geburtszeit finden?
Nicht zuverlässig. Der Aszendent wechselt etwa alle zwei Stunden, also ist eine genaue Zeit nötig. Ohne sie zeigen wir dir stattdessen Sonne und Mond.

### Ist der Aszendent wichtiger als mein Sonnenzeichen?
Keiner ist wichtiger — sie beschreiben Verschiedenes. Dein Sonnenzeichen ist dein Kern, dein Aszendent deine Wirkung nach aussen. Zusammen ergeben sie ein volleres Bild.

### Warum ist mein Aszendent anders als mein Sonnenzeichen?
Sie messen Verschiedenes: Deine Sonne ist dein Kern; dein Aszendent ist deine äussere Art und die momentane Einrichtung deines Horoskops. Bei den meisten unterscheiden sie sich.

*Astrologie dient der Einsicht und Selbstreflexion — sie ist keine medizinische, psychologische, finanzielle oder rechtliche Beratung.*
```

## 4.3 `mondzeichen-berechnen.md`  (Keyword: *Mondzeichen berechnen und Bedeutung herausfinden*)

```markdown
---
title: "Mondzeichen berechnen — und seine Bedeutung herausfinden"
description: "Berechne dein Mondzeichen kostenlos in Sekunden und finde heraus, was es für deine Gefühle und dein Innenleben bedeutet. Meist ohne genaue Geburtszeit."
canonical: "https://www.big3astrology.com/de/mondzeichen-berechnen/"
lang: "de"
translationKey: "calculate-moon-sign"
slug: "mondzeichen-berechnen"
schemaType: "Article"
draft: false
---

# Mondzeichen berechnen — und seine Bedeutung herausfinden

**Kurz gesagt:** Dein Mondzeichen ist das Tierkreiszeichen, in dem der Mond bei deiner Geburt stand. Es steht für deine innere, emotionale Welt — was du fühlst und was du brauchst, um dich sicher zu fühlen. Gib dein Geburtsdatum und deinen Geburtsort ein und erhalte es kostenlos in Sekunden. [Mondzeichen berechnen.](/de/#big3)

## Was ist ein Mondzeichen?
Wenn dein Sonnenzeichen ist, wer du im Tageslicht bist, ist dein **Mondzeichen, wer du im Privaten bist** — deine Gefühle, deine Instinkte, was dich beruhigt und was du von den Menschen brauchst, die dir am nächsten sind. Es ist oft die Stellung, in der sich Menschen am meisten wiedererkennen, sobald sie sie lesen.

## Brauche ich meine genaue Geburtszeit?
Meist nicht. Der Mond zieht in etwa **zwei bis zweieinhalb Tagen** durch ein Zeichen, also reicht dein Geburtsdatum normalerweise, um ihn zu verorten. Die Ausnahme: Wurdest du an einem Tag geboren, an dem der Mond das Zeichen wechselte, kommt es auf die Zeit an — ist das der Fall, sagen wir dir Bescheid. (Dein **Aszendent** ist der, der immer eine genaue Zeit braucht.)

## Was dein Mondzeichen bedeutet
Dein Mond beschreibt deinen emotionalen Stil — wie du Gefühle verarbeitest, dich tröstest und dich mit anderen verbindest. Eine kurze Skizze nach Element:
- **Feuer-Mond (Widder, Löwe, Schütze):** Gefühle sind schnell, warm, ausdrucksstark.
- **Erd-Mond (Stier, Jungfrau, Steinbock):** Gefühle sind beständig, praktisch, geerdet.
- **Luft-Mond (Zwillinge, Waage, Wassermann):** Gefühle werden durch Denken und Reden verarbeitet.
- **Wasser-Mond (Krebs, Skorpion, Fische):** Gefühle sind tief, intuitiv und stark.

Dein kostenloses Ergebnis gibt dir eine persönliche Beschreibung deines konkreten Mondzeichens — samt seiner Stärke und seiner Wachstumskante. [Sieh dir deins an.](/de/#big3)

## Warum dein Mondzeichen dich überraschen kann
Viele Menschen fühlen sich ihrem Mondzeichen näher als ihrer Sonne. Das liegt daran, dass dein Sonnenzeichen oft das Selbst ist, das du zeigst, während dein Mond das Selbst ist, das du wirklich fühlst — und beide sind nicht immer dasselbe. Sie nebeneinander zu sehen, ist der spannende Teil.

## Mond, Sonne und Aszendent — das ganze Bild
Dein Mond ist ein Drittel deiner Big 3, neben deiner **Sonne** (was dich antreibt) und deinem **Aszendenten** (wie die Welt dir begegnet). Eine ausführliche Beratung nimmt alle drei — und den Rest deines Horoskops — und macht daraus praktische Einsicht über deine Beziehungen, deine Muster und das, was du zum Aufblühen brauchst. [Mehr zur Geburtshoroskop-Beratung.](/de/geburtshoroskop-beratung/)

## Häufige Fragen

### Kann ich mein Mondzeichen ohne Geburtszeit finden?
Meist ja — das Datum reicht normalerweise. Nur wenn du an einem Tag geboren wurdest, an dem der Mond das Zeichen wechselte, kommt es auf die Zeit an.

### Warum fühlt sich mein Mondzeichen mehr nach „mir" an als mein Sonnenzeichen?
Weil dein Mond dein privates, emotionales Selbst ist, während deine Sonne oft das Selbst ist, das du zeigst. Viele identifizieren sich stark damit.

### Was ist der Unterschied zwischen Mondzeichen und Sonnenzeichen?
Deine Sonne ist dein Kern und Antrieb; dein Mond sind deine emotionalen Bedürfnisse und Instinkte. Du hast beide, und sie wirken zusammen.

*Astrologie dient der Einsicht und Selbstreflexion — sie ist keine medizinische, psychologische, finanzielle oder rechtliche Beratung.*
```

---

# §5 — QA (DE-spezifisch)

- **Anrede konsequent `du`** über alle Strings, Archetypen, Seiten, Pillars geprüft. ✓ (Globaler Hebel — bei Wunsch auf `Sie` neu generieren.)
- **`ß → ss`** durchgehend (gross, grösser, grosszügig, weisst, heisst, fliesst, geniessen, draussen, schliessen, Strasse). Kein `ß` im Set. ✓
- **Keyword-Anchors** in Pillar-`title`/H1/Intro: „Geburtshoroskop kostenlos", „Aszendent berechnen … Bedeutung herausfinden", „Mondzeichen berechnen … Bedeutung herausfinden". ✓
- **`translationKey` identisch zu EN** auf jeder Seite (verdrahtet hreflang); **Slugs lokalisiert**; `canonical` unter `/de/`. ✓
- **YAML-Schlüssel identisch zu EN** (sun/moon/rising · aries…pisces · synthesis.*), nur Werte deutsch. ✓
- **Terminologie:** Sonne / Mond / Aszendent; Geburtshoroskop (Keyword), Radix als Synonym. ✓
- **Deutsche Anführungszeichen** („…") in sichtbarem Text. ✓
- **Google Meet, CHF 180 primär / CHF 20 sekundär / CHF 250 (180+70), Disclaimer** übernommen. ✓
- **Meta-Längen:** Titel/Descriptions im Zielrahmen gehalten (Titel teils nahe 60 Z. — deutsche Länge, akzeptabel). ✓
- **Restflag:** UID im Impressum nachtragen, sobald die GmbH eingetragen ist.

**Nächster Schritt:** Auf Bestätigung des Registers (`du`) erstelle ich das **ES-Set** (`tú`, Spanien-/LatAm-Terminologie: „carta astral gratis", „calcula el signo lunar", „calcula el ascendente y su significado"). Bei Wunsch `Sie` passe ich zuerst dieses DE-Set an.
