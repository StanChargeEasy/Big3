# Big3 Astrología — Copy ES completo v1.0

**Fecha:** 2026-06-07 · **Tratamiento:** `tú` (informal, cálido; neutro pan-hispano, sin voseo) · **Términos:** «carta astral» (primario) + «carta natal» (sinónimo LatAm).
**Estado:** set ES completo (transcreado del EN v1.0). EN + DE + ES = los tres idiomas listos.
**Formato:** según el bloqueo. **Claves YAML idénticas a EN** (valores en español); `translationKey` idéntico a EN (conecta hreflang); slugs localizados; `canonical` bajo `/es/`.

**Mapeo del repo**
```
src/i18n/es.yaml            → §1
src/data/big3.es.yaml       → §2
src/content/pages/es/*.md   → §3
src/content/blog/es/*.md    → §4
```

---

# §1 — Textos de interfaz — `src/i18n/es.yaml`

```yaml
nav:
  home: "Inicio"
  reading: "Lectura"
  intro_call: "Llamada de 15 min"
  about: "Sobre mí"
  blog: "Diario"
  book: "Reservar lectura"

footer:
  tagline: "Astrología humana en español, inglés y alemán: leída por una astróloga real, no por un algoritmo."
  disclaimer: "La astrología se ofrece para la introspección y la reflexión personal. No es asesoramiento médico, psicológico, financiero ni legal, y nunca anula tu libre albedrío."
  rights: "© 2026 Big Astrology GmbH"
  links_legal: "Aviso legal"
  links_terms: "Términos"
  links_privacy: "Privacidad"
  links_refund: "Cancelaciones y reembolsos"

form:
  heading: "Tus Big 3 — gratis"
  date_label: "Fecha de nacimiento"
  time_label: "Hora de nacimiento"
  time_helper: "Lo más exacta posible. ¿No la sabes? Déjala en blanco: aun así tendrás tu Sol y tu Luna."
  place_label: "Lugar de nacimiento"
  place_helper: "Ciudad y país: empieza a escribir y elige de la lista."
  country_label: "País"
  submit: "Ver mis Big 3"
  no_time_note: "No has indicado la hora de nacimiento: te mostramos el Sol y la Luna. Tu Ascendente necesita una hora exacta."

result:
  sun_heading: "Tu Sol"
  sun_sub: "Lo que te impulsa"
  moon_heading: "Tu Luna"
  moon_sub: "Lo que necesitas para sentirte seguro"
  rising_heading: "Tu Ascendente"
  rising_sub: "Cómo te encuentra el mundo al principio"
  synthesis_heading: "Todo junto"
  cta_heading: "Esos son tus Big 3: ahora la conversación de verdad"
  cta_body: "Esta es la versión corta de tres posiciones. Tu carta completa tiene mucho más que decir, y una lectura la convierte en algo que puedes usar."
  cta_primary: "Reservar una lectura completa — CHF 180"
  cta_secondary: "¿Prefieres conocernos antes? Reserva una llamada de 15 minutos (CHF 20)"

booking:
  choose_time: "Elige una hora que te venga bien"
  meet_note: "Las sesiones se hacen por Google Meet: recibirás el enlace con tu confirmación."
  pay_note: "Pago seguro con tarjeta o TWINT."
  processing: "Confirmando tu reserva …"

confirmation:
  heading: "Reservado: nos vemos pronto"
  body: "Tu sesión está confirmada. Recibirás un correo con la fecha, tu enlace de Google Meet y un breve formulario para enviar tus datos de nacimiento, para que Gabriela pueda prepararse."
  prep_heading: "Antes de tu sesión"
  prep_body: "Envía tus datos exactos de nacimiento —fecha, hora y lugar— mediante el enlace de tu correo. Cuanto más precisa la hora, más precisa la lectura."
  calendar: "Añadir al calendario"

errors:
  place_not_found: "No encontramos ese lugar: prueba con la ciudad grande más cercana, con el país."
  generic: "Algo salió mal. Inténtalo de nuevo en un momento."

# 5 testimonios reales de clientes (localizados al español).
# Nota: para máxima autenticidad, idealmente usar el texto original de los clientes hispanohablantes.
testimonials:
  - quote: "La lectura de Gabriela fue sorprendentemente precisa. Salí con claridad real, no con misticismo vago."
    name: "Anna"
    city: "Zúrich"
  - quote: "Explicó mi carta de una forma que se sintió reflexiva, con los pies en la tierra y profundamente personal."
    name: "Marc"
    city: "Basilea"
  - quote: "Me sentí comprendida en minutos. La sesión fue tranquila, lúcida y de verdad útil."
    name: "Sofia"
    city: "Madrid"
  - quote: "Lo que más valoré fue lo práctico que resultó. Me dio palabras para cosas que llevaba años sintiendo."
    name: "Lukas"
    city: "Winterthur"
  - quote: "Cálida, inteligente y muy humana. Vine por curiosidad y salí con una comprensión que pude usar de verdad."
    name: "Julia"
    city: "Barcelona"
```

---

# §2 — Biblioteca de arquetipos — `src/data/big3.es.yaml`

```yaml
# Claves idénticas a EN (sun/moon/rising · aries…pisces); valores en español.
# 60–90 palabras · «tú» · cálido, psicológico, no fatalista.

sun:
  aries: |
    Con el Sol en Aries, estás hecho para empezar. Donde otros sopesan y esperan, algo en ti simplemente se
    mueve: prefieres actuar y ajustar que quedarte parado. Ese coraje es real, y la gente se vuelve más
    valiente a tu lado. Tu punto de crecimiento: no todo momento necesita ímpetu, y la paciencia no es lo
    mismo que rendirse. En tu mejor versión, no solo persigues tus propias metas: vas primero para que otros
    se atrevan a seguir.
  taurus: |
    Con el Sol en Tauro, construyes cosas que duran. Donde otros corren, avanzas a tu propio ritmo pausado,
    confiando en lo que puedes ver, tocar y en lo que puedes apoyarte. Esa constancia es un regalo: la gente
    se siente segura con lo que creas. El punto: no todo cambio es una amenaza, y aferrarte demasiado puede
    dejar fuera cosas buenas. En tu mejor versión, conviertes la paciencia en algo sólido sobre lo que los
    demás podemos apoyarnos.
  gemini: |
    Con el Sol en Géminis, tu mente está siempre en movimiento: curiosa, rápida, hambrienta de la próxima
    idea o conversación. Conectas cosas, y personas, que otros mantienen separadas, y haces que aprender
    parezca un juego. El punto: con tantas puertas abiertas, terminar cuesta más que empezar, y la
    profundidad a veces pierde frente a la variedad. En tu mejor versión, mantienes una sala pensando: ágil y
    de verdad interesado en todos.
  cancer: |
    Con el Sol en Cáncer, lideras desde el cuidado. Sientes el clima emocional de una sala antes de que nadie
    hable, y haces que la gente se sienta sostenida casi sin pensarlo. El hogar —donde y quienquiera que
    sea— te importa más que casi nada. El punto: protegerte retirándote no es lo mismo que estar a salvo, y
    no todos necesitan que los cuides. En tu mejor versión, tu calidez es una fuerza: ves a las personas que el
    mundo pasa por alto.
  leo: |
    Con el Sol en Leo, estás hecho para brillar: cálido, generoso y atraído de forma natural a crear y liderar.
    Cuando estás en tu elemento, la gente se enciende a tu alrededor; tu aliento puede cambiar cómo alguien
    se ve a sí mismo. El punto: cuando el foco se vuelve el objetivo, tu confianza se vuelve frágil, y puedes
    confundir el aplauso con el amor. En tu mejor versión, usas tu calidez para hacer protagonistas a los
    demás, no solo a ti.
  virgo: |
    Con el Sol en Virgo, ves cómo las cosas podrían estar mejor, y en silencio te pones a mejorarlas. Eres
    preciso, útil y feliz de servir de formas que a menudo pasan inadvertidas. El punto: la misma mirada
    afilada que diriges a un problema puede volverse contra ti, y «suficientemente bueno» se siente imposible.
    En tu mejor versión, aportas cuidado a los detalles que todos los demás pasan por alto, y aprendes a
    dirigir esa amabilidad hacia dentro.
  libra: |
    Con el Sol en Libra, estás hecho para la conexión y el equilibrio. Ves cada lado de una situación, suavizas
    el conflicto casi por instinto y llevas gracia y justicia a donde vas. El punto: sopesar las necesidades de
    todos puede dejar las tuyas sin decir, y «me da igual» no siempre es verdad. En tu mejor versión, no solo
    mantienes la paz: creas el tipo de justicia y belleza que hace que la gente se sienta de verdad tenida en
    cuenta.
  scorpio: |
    Con el Sol en Escorpio, vives en la profundidad. Las superficies no te bastan: quieres lo real, aunque sea
    incómodo, y no temes las partes de la vida de las que otros apartan la mirada. Esa intensidad te hace leal,
    perceptivo y silenciosamente poderoso. El punto: protegerte con control o secreto puede dejar fuera la
    misma cercanía que deseas. En tu mejor versión, puedes sostener cualquier cosa, y ayudar a otros a
    transformar lo que creían que debían esconder.
  sagittarius: |
    Con el Sol en Sagitario, eres un buscador: de sentido, de horizontes, del cuadro completo. Llevas
    optimismo y honestidad a donde vas, y tu apetito de experiencia saca a otros de su zona de confort. El
    punto: la próxima aventura siempre parece más brillante que terminar esta, y el gran entusiasmo a veces
    supera lo que puedes cumplir. En tu mejor versión, recuerdas a todos que la vida se vive en grande, no
    solo se administra.
  capricorn: |
    Con el Sol en Capricornio, estás hecho para la subida larga. Te pones metas serias y de verdad las
    alcanzas: con disciplina, paciencia y un sentido callado de responsabilidad en el que otros confían. El
    punto: cuando el valor se ata al logro, el descanso se siente como debilidad y la cima se aleja sin parar. En
    tu mejor versión, eres la mano firme que construye cosas hechas para perdurar, y aprendes que siempre
    tuviste permiso para disfrutar la vista.
  aquarius: |
    Con el Sol en Acuario, ves lo que podría ser distinto. Eres un pensador original: independiente, con
    principios, atraído por las ideas y por el bien del grupo más que por tu propia comodidad. El punto: vivir
    en el reino de las ideas puede poner distancia entre tú y las emociones más desordenadas, las tuyas y las
    de otros. En tu mejor versión, imaginas una forma más justa y libre de hacer las cosas, y reúnes a la
    gente en torno a ella.
  pisces: |
    Con el Sol en Piscis, sientes el mundo casi sin filtro: profundamente empático, imaginativo, sintonizado
    con cosas que otros apenas saben nombrar. Llevas compasión y una especie de magia callada a la gente a
    tu alrededor. El punto: sin límites claros, las emociones de otros se vuelven tuyas, y soñar puede
    convertirse en un escondite. En tu mejor versión, conviertes toda esa sensibilidad en arte, sanación, o
    simplemente el regalo de hacer que la gente se sienta de verdad comprendida.

moon:
  aries: |
    Con la Luna en Aries, sientes rápido y con todo. Las emociones llegan como el clima: intensas, inmediatas
    y a menudo se van tan rápido como vinieron; prefieres actuar sobre un sentimiento que quedarte en él. El
    punto: esa chispa rápida puede saltar sobre quien no la encendió, y no todo sentimiento necesita
    respuesta al instante. En el día a día, llevas honestidad y energía a quienes amas: no hay nada escondido
    en cómo te sientes.
  taurus: |
    Con la Luna en Tauro, te calma lo que es constante y real: el confort, la rutina, la buena comida, las
    personas y lugares que no cambian sin parar. Tus emociones se mueven despacio y hondo, y cuando te
    sientes seguro, eres una presencia tranquila que da tierra. El punto: el cambio puede sentirse como
    amenaza aunque no lo sea, y el confort se vuelve, en silencio, una rutina estancada. Quienes te conocen
    saben que tu amor es paciente, físico y absolutamente fiable.
  gemini: |
    Con la Luna en Géminis, procesas los sentimientos hablándolos y pensándolos: nombrarlos es como los
    vuelves seguros. Necesitas estímulo mental y variedad para sentirte emocionalmente vivo, y a menudo
    eres quien aligera un ambiente pesado. El punto: quedarte en la cabeza puede ser una forma de evitar
    sentir, y la inquietud puede leerse como distancia. Quienes te conocen reciben a un compañero curioso e
    ingenioso que de verdad quiere entenderlos.
  cancer: |
    Con la Luna en Cáncer, lo sientes todo profundamente: esta es la Luna en casa. Necesitas pertenencia y
    seguridad emocional como otros necesitan el aire, y cuidas a quienes amas casi sin pensarlo. El punto: tus
    estados de ánimo se mueven como mareas, y proteger tu centro blando retirándote deja a otros
    adivinando. En el día a día, ofreces un cuidado poco común: la sensación de ser de verdad atendido,
    recordado y sostenido.
  leo: |
    Con la Luna en Leo, tu corazón es grande y cálido, y te sientes más seguro cuando sabes que le importas
    a quienes amas. Das cariño con generosidad y eres ferozmente leal, pero necesitas esa calidez de vuelta.
    El punto: cuando no te sientes visto, la herida sale como orgullo o drama. Quienes te conocen reciben a
    alguien que los celebra de corazón y hace que los momentos comunes se sientan un poco más dorados.
  virgo: |
    Con la Luna en Virgo, te sientes seguro cuando hay orden y puedes ser útil: ordenar, ayudar, resolver es
    tu manera de calmarte. Muestras amor con actos prácticos más que con grandes palabras. El punto: esa
    voz interior puede ser duramente crítica, con otros y sobre todo contigo, y no todo sentimiento necesita
    arreglarse. En el día a día, eres quien nota lo que la gente necesita y se ocupa en silencio antes de que lo
    pidan.
  libra: |
    Con la Luna en Libra, te sientes más a gusto cuando todo está en armonía y tus relaciones cercanas son
    estables: la discordia te inquieta de verdad. Te calman la belleza, la justicia y la buena compañía. El
    punto: mantener la paz puede significar tragarte tus propias necesidades, y puedes apoyarte en una pareja
    para sentirte completo. Quienes te conocen reciben una presencia considerada y atenta que trabaja duro
    para que todos se sientan bien tratados.
  scorpio: |
    Con la Luna en Escorpio, sientes en profundidad: en privado, intenso, todo o nada. Percibes lo que hay
    bajo la superficie mucho antes de que alguien lo diga, y la seguridad, para ti, es confianza ganada despacio
    y luego sostenida con fuerza. El punto es aprender que la cercanía no es una prueba y que ser visto no es
    perder el control. En el día a día, eres a quien la gente le cuenta lo verdadero: puedes sostener lo que a la
    mayoría desbordaría.
  sagittarius: |
    Con la Luna en Sagitario, te sientes seguro cuando eres libre: espacio para moverte, explorar, creer en
    algo más grande que el día que tienes delante. Recibes la emoción con optimismo y perspectiva, y odias
    sentirte encerrado. El punto: el impulso de huir, o de «verle el lado bueno», puede pasar por encima de
    sentimientos que piden ser sentidos. En el día a día, llevas ligereza, fe y la sensación de que las cosas
    saldrán bien.
  capricorn: |
    Con la Luna en Capricornio, te sientes más seguro cuando eres competente y tienes el control: prefieres
    resolver las cosas tú mismo que necesitar a alguien. Los sentimientos son privados; los gestionas en
    silencio y mantienes una superficie tranquila. El punto: la autosuficiencia puede endurecerse en una
    armadura emocional, y puedes decidir que no tienes permiso para necesitar consuelo. Quien se acerca
    encuentra a alguien profundamente leal y fiable: el que aparece, cada vez, y lo dice en serio.
  aquarius: |
    Con la Luna en Acuario, necesitas espacio y libertad emocional: cercanía que no te agobie. Tiendes a
    entender los sentimientos antes de permitirte sentirlos, y eres calmado y ecuánime en una crisis. El punto:
    dar un paso atrás para analizar puede dejar a otros sintiéndose tenidos a distancia, y algunos sentimientos
    no se dejan razonar. En el día a día, ofreces un amor que acepta y no posee, y un oído refrescantemente
    sin juicio.
  pisces: |
    Con la Luna en Piscis, sientes casi todo —lo tuyo y lo de todos los demás— y necesitas suavidad y un
    retiro tranquilo para volver a ti. Eres infinitamente compasivo e intuitivo sobre lo que otros cargan. El
    punto: sin límites absorbes estados de ánimo que no son tuyos, y es tentador irte a la deriva cuando la
    realidad duele. Quienes te conocen reciben un corazón tierno y que perdona, que los hace sentir
    profundamente comprendidos y rara vez juzgados.

rising:
  aries: |
    Con Ascendente Aries, das una impresión directa, enérgica y lista: la gente percibe que actuarás mientras
    otros aún deciden. Te enfrentas al mundo de frente, y resulta refrescante lo poco que finges. El punto: esa
    energía hacia delante puede leerse como impaciencia o brusquedad antes de que vean la calidez debajo.
    La primera impresión de ti es alguien vivo y sin miedo: el que entra y pone las cosas en marcha.
  taurus: |
    Con Ascendente Tauro, transmites calma: constante, con los pies en la tierra, sin prisa, con una calidez
    que tranquiliza. Te mueves por el mundo a tu propio ritmo y llevas una presencia que asienta a donde vas.
    El punto: esa misma constancia puede parecer terquedad o reticencia cuando la vida pide velocidad. La
    primera impresión de ti es alguien sólido y de fiar: en quien los demás sienten por instinto que pueden
    apoyarse.
  gemini: |
    Con Ascendente Géminis, das una impresión luminosa, curiosa y fácil de tratar: rápido con una pregunta,
    una broma o una conexión. Recibes a personas y situaciones nuevas con interés genuino y te adaptas
    sobre la marcha. El punto: todo ese movimiento puede leerse como inquietud o difícil de captar antes de
    que vean tu profundidad. La primera impresión de ti es una mente ágil y lúcida: la que hace que una sala
    despierte un poco.
  cancer: |
    Con Ascendente Cáncer, das una impresión suave, cálida y de cuidado callado: la gente siente que puede
    ser tierna a tu lado. Te acercas al mundo con algo de cautela al principio, midiendo la seguridad antes de
    abrirte. El punto: esa cautela temprana puede leerse como timidez o cambios de humor hasta que se
    construye la confianza. La primera impresión de ti es alguien amable y accesible: a quien otros terminan
    confiándose antes de lo que esperaban.
  leo: |
    Con Ascendente Leo, dejas huella: cálido, expresivo, magnético por naturaleza, el tipo de presencia que
    una sala nota. Te acercas al mundo con confianza y generosidad, y la gente se siente atraída por tu brillo.
    El punto: cuando percibes que no te ven, esa calidez puede inclinarse hacia la actuación o el orgullo. La
    primera impresión de ti es alguien luminoso y de gran corazón: el que hace a otros sentirse un poco más
    vivos solo con aparecer.
  virgo: |
    Con Ascendente Virgo, das una impresión serena, modesta y observadora: lo notas todo y rara vez haces
    aspaviento. Te acercas al mundo listo para ser útil, y la gente siente que está en manos capaces y
    cuidadosas. El punto: esa reserva puede leerse como frialdad o crítica antes de que asome tu calidez
    genuina. La primera impresión de ti es alguien con los pies en la tierra y de fiar: en quien otros confían
    para manejar los detalles y acertar.
  libra: |
    Con Ascendente Libra, la primera impresión de ti suele ser cálida: equilibrado, fácil de tratar, con ojo para
    la belleza y un don para poner a la gente a gusto. Lees una sala y suavizas sus aristas casi en automático.
    El punto: al mantener la paz, tu propia preferencia queda sin decir; «me da igual» no siempre es verdad.
    Bajo la diplomacia hay alguien que en silencio disfruta de liderar, en cuanto te lo permites.
  scorpio: |
    Con Ascendente Escorpio, tienes una presencia que la gente siente antes de que digas mucho: intensa,
    magnética y no fácil de leer. Te acercas al mundo con cautela y revelas poco hasta que decides que
    alguien se lo ha ganado. El punto: ese misterio puede leerse como reserva o intimidación antes de que
    descubran tu lealtad. La primera impresión de ti es profundidad y poder callado: alguien que atrae y, a la
    vez, inspira algo de respeto.
  sagittarius: |
    Con Ascendente Sagitario, das una impresión abierta, cálida y entusiasta: franco, divertido y dispuesto a
    lo que venga. Te acercas al mundo esperando que sea interesante, y tu optimismo se contagia. El punto:
    esa franqueza e inquietud puede leerse como descuido o difícil de captar. La primera impresión de ti es un
    espíritu ligero y aventurero: el que hace que la vida parezca un poco más grande y posible.
  capricorn: |
    Con Ascendente Capricornio, das una impresión capaz, serena y de seriedad callada: la gente da por
    hecho que eres alguien a tomar en serio, a menudo antes de que lo hayas demostrado. Te acercas al
    mundo con mesura y sentido de responsabilidad. El punto: esa reserva puede leerse como frialdad o
    distancia hasta que ven el humor seco y la calidez debajo. La primera impresión de ti es alguien fiable y
    con los pies en la tierra: a quien otros miran por instinto al frente.
  aquarius: |
    Con Ascendente Acuario, das una impresión particular: amable y a la vez un poco aparte, claramente tu
    propia persona. Te acercas al mundo en tus términos, curioso por la gente pero sin que te preocupe
    encajar. El punto: esa independencia puede leerse como distancia o difícil de conocer antes de que sientan
    tu buena voluntad genuina. La primera impresión de ti es un original: el que hace que otros se sientan
    libres de ser también un poco más ellos mismos.
  pisces: |
    Con Ascendente Piscis, das una impresión suave, dulce y algo soñadora: accesible de un modo que pone
    a la gente a gusto y la invita a abrirse. Te acercas al mundo con empatía, absorbiendo a menudo su
    estado de ánimo. El punto: esa apertura puede leerse como vaguedad o que te influyen fácil, y tus límites
    pueden difuminarse. La primera impresión de ti es una presencia amable y dulce: a cuyo lado otros se
    sienten en calma y comprendidos.

synthesis:
  opening: |
    Juntos, tus Big 3 no son tres etiquetas separadas, sino tres capas de una misma persona: lo que te
    impulsa (Sol), lo que necesitas para sentirte seguro (Luna) y cómo te encuentra el mundo al principio
    (Ascendente). Así encajan los tuyos.
  element_fire: "Hay mucho fuego en ti: impulso, calidez y las ganas de moverte. Lideras con energía y estás más vivo cuando vas tras algo que te importa."
  element_earth: "Hay un fuerte hilo de tierra en ti: con los pies en el suelo, práctico, más feliz cuando construyes algo real y duradero. La gente confía en ti porque cumples."
  element_air: "Hay mucho aire en ti: vives en las ideas, las palabras y la conexión, y entiendes el mundo pensándolo y hablándolo. La gente se siente atraída por tu mente."
  element_water: "Hay agua profunda en ti: sientes las cosas de forma intensa e intuitiva y lees la corriente emocional bajo la superficie mucho antes de que se diga."
  element_distinct: "Tus tres signos beben de elementos distintos, lo que te hace de verdad polifacético: puedes actuar, sentir y conectar en registros diferentes según lo que pida el momento. El arte está en dejar que esas facetas trabajen juntas, no una contra otra."
  modality_cardinal: "Estás hecho para iniciar: arrancar cosas, marcar la dirección y poner a otros en marcha. Los comienzos te salen naturales; la práctica es llevarlos hasta el final."
  modality_fixed: "Estás hecho para la constancia: cuando te comprometes, sostienes. Esa lealtad y determinación son fortalezas reales; la práctica es mantenerte abierto al cambio cuando toca."
  modality_mutable: "Eres notablemente adaptable: te doblas, ajustas y fluyes con lo que llega. Esa flexibilidad es un regalo; la práctica es elegir una dirección y confiar en ella el tiempo suficiente para llegar."
  modality_mixed: "Llevas una mezcla sana de impulso, constancia y flexibilidad: puedes arrancar, sostener o adaptarte según lo pida la situación, lo que te hace insólitamente equilibrado bajo presión."
  sunmoon_same_sign: "Tu Sol y tu Luna están en el mismo signo, lo que concentra todo: lo que te impulsa y lo que necesitas son una y la misma cosa. Te vuelve entero e inconfundible, aunque puede faltarte un contrapeso de fábrica."
  sunmoon_same_element: "Tu Sol y tu Luna comparten elemento, así que lo que quieres y lo que necesitas suelen tirar en la misma dirección: hay en ti una constancia interior, una sensación de estar a gusto contigo."
  sunmoon_tension: "Tu Sol y tu Luna están hechos de materias distintas: lo que te impulsa hacia fuera y lo que te calma por dentro no siempre hablan el mismo idioma. Puede sentirse como un tira y afloja interior, pero también es lo que te da amplitud: dos fortalezas muy distintas en una persona."
  sunmoon_complement: "Tu Sol y tu Luna se complementan: tu impulso hacia fuera y tus necesidades internas se equilibran en vez de confundirse, dándote a la vez empuje y una forma de recargarte."
  closing: |
    Esta es la versión corta. Una lectura completa toma los tres —y el resto de tu carta— y los convierte en
    algo que de verdad puedes usar: dónde te ayudan estas energías, dónde te hacen tropezar y qué hacer al
    respecto. Cuando estés listo, esa es la conversación.
  opening_no_time: |
    Sin tu hora exacta de nacimiento no podemos fijar tu Ascendente: ese necesita el reloj, no solo la fecha.
    Pero tu Sol y tu Luna ya dicen mucho: lo que te impulsa y lo que necesitas para sentirte seguro.
  closing_no_time: |
    Tu Ascendente —cómo te encuentra el mundo al principio— es la pieza que falta, y vale la pena hallarla.
    Podemos rastrear tu hora de nacimiento juntos; es de las primeras cosas que resolveríamos. Cuando estés
    listo, hablemos.
```

**Ensamblaje:** misma lógica que EN (§2 del entregable EN) — mismas claves, valores en español; los mapas de elemento/modalidad/signo son independientes del idioma (usan los identificadores `aries…pisces`).

---

# §3 — Páginas — `src/content/pages/es/`

## 3.1 Inicio — `home.md`

```markdown
---
title: "Astrología Big 3 — tu Sol, tu Luna y tu Ascendente"
description: "Tus Big 3 —Sol, Luna y Ascendente— gratis, y luego una lectura completa de tu carta astral con una astróloga real. En ES, EN y DE."
canonical: "https://www.big3astrology.com/es/"
lang: "es"
translationKey: "home"
slug: ""
draft: false
---

# Tu Sol, tu Luna y tu Ascendente: leídos por una persona, no por un algoritmo

Introduce tu fecha, hora y lugar de nacimiento. En unos segundos tendrás tus **Big 3**: las tres posiciones que dan forma a cómo actúas, cómo sientes y cómo te encuentra el mundo al principio. Gratis, y escritas para que de verdad signifiquen algo.

[ Formulario: fecha · hora · lugar · país → **Ver mis Big 3** ]

*¿No sabes la hora exacta? Aun así tendrás tu Sol y tu Luna; con el resto te ayudamos.*

## Cuando quieras lo de verdad, hablas con una persona

Tus Big 3 gratis son un vistazo. Una **lectura completa de tu carta astral** con Gabriela es la conversación de verdad: tu carta entera, preparada de antemano y conversada en directo, con un resumen escrito para conservar. Es la lectura por la que vienen la mayoría.

[ **Reservar una lectura completa — CHF 180** ]   ·   ¿Aún con dudas? [Empieza con una llamada de 15 minutos (CHF 20)](/es/llamada-introductoria/)

## Por qué Astrología Big 3
- **Una astróloga real, no una app.** Gabriela lee tu carta ella misma: con los pies en la tierra, concreta y de tu lado.
- **Psicológica, no adivinación.** Tu carta es un mapa de patrones y potencial, nunca un destino fijo.
- **En tu idioma.** Lecturas en español, inglés y alemán.

> «La lectura de Gabriela fue sorprendentemente precisa. Salí con claridad real, no con misticismo vago.» — Anna, Zúrich
```

## 3.2 Sobre mí — `about.md`

```markdown
---
title: "Sobre Gabriela Brecht — astróloga psicológica, Zúrich"
description: "Gabriela Brecht — astróloga psicológica y antigua líder empresarial en Zúrich, formada en el método Debra Silverman. Lecturas en ES, EN y DE."
canonical: "https://www.big3astrology.com/es/sobre-mi/"
lang: "es"
translationKey: "about"
slug: "sobre-mi"
schemaType: "Person"
draft: false
---

# Gabriela Brecht

Leo cartas como antes leía equipos: buscando lo que de verdad pasa por debajo, y lo que quiere ocurrir a continuación.

Antes de que la astrología fuera mi trabajo, era la lente que nunca dejaba. Pasé años en el mundo empresarial, tengo dos titulaciones —una en Suiza, otra de Cambridge— y dirigí personas. Lo que siempre tiraba de mí era la misma pregunta que hace la astrología: *¿por qué nos movemos como nos movemos, y para qué estamos aquí cada uno para crecer?*

Hoy llevo las dos mitades a la silla. Soy **astróloga psicológica**: trato tu carta no como un destino fijo, sino como un mapa de patrones, dones y puntos de crecimiento; algo con lo que trabajas, nunca algo que decide por ti. Mi formación está en astrología psicológica y arquetípica, incluido el **método Debra Silverman** (EE. UU.) y programas de astrología psicológica en Suiza y Alemania, y bebo de años de práctica en coaching de vida.

Nacida en Caracas, viviendo en Zúrich, madre de dos, trabajo en **español, inglés y alemán**: los tres idiomas en los que pienso y siento. Me atrae especialmente donde la astrología toca la vida real: las relaciones, las decisiones y la forma en que las personas trabajan juntas en equipo.

Si esto resuena contigo, tus Big 3 son un buen primer paso. Cuando quieras el cuadro completo, [hablemos](/es/lectura-carta-astral/).

*Gabriela Brecht, astróloga psicológica, Zúrich.*

*La astrología se ofrece aquí para la introspección y la reflexión personal. No es asesoramiento médico, psicológico, financiero ni legal, y nunca anula tu libre albedrío.*
```

## 3.3 Lectura de carta astral (PRIMARIA) — `natal-reading.md`

```markdown
---
title: "Lectura de carta astral en directo + resumen (CHF 180)"
description: "Lectura psicológica completa de tu carta astral: 90+ min de preparación, sesión en directo de 60 min por Google Meet y un resumen escrito. CHF 180."
canonical: "https://www.big3astrology.com/es/lectura-carta-astral/"
lang: "es"
translationKey: "natal-reading"
slug: "lectura-carta-astral"
schemaType: "Service"
offerType: "Service"
price: "180"
currency: "CHF"
duration: "PT60M"
draft: false
---

# Tu lectura completa de carta astral — CHF 180

El cuadro completo, leído por una persona y preparado solo para ti. No es un informe generado: preparación real, una conversación real y algo para llevarte. Es la lectura que la mayoría busca de verdad.

## Cómo funciona
- **90+ minutos de preparación** antes de vernos: estudio tu carta a fondo para que nuestro tiempo juntos sea sobre *ti*, no sobre la puesta a punto.
- **Una sesión en directo de 60 minutos** por Google Meet para conversarla, preguntar lo que quieras y conectarla con tu vida real.
- **Un resumen escrito** después, para que la comprensión se quede contigo mucho más allá de la llamada.

Esto es astrología psicológica: tus fortalezas, tus patrones, tus puntos de crecimiento, y cómo trabajar de verdad con ellos. Te vas entendiéndote un poco más claro que antes.

[ **Reservar una lectura completa** ]

¿En pareja? Añade una [lectura de pareja (CHF 250 en total)](/es/lectura-de-pareja/).
```

## 3.4 Llamada de 15 minutos (SECUNDARIA) — `15-minute-call.md`

```markdown
---
title: "Llamada de 15 minutos — ¿aún con dudas? Empieza aquí (CHF 20)"
description: "¿Aún no listo para una lectura completa? Reserva una llamada de 15 minutos con la astróloga Gabriela Brecht: una mini-lectura y conoceros. CHF 20."
canonical: "https://www.big3astrology.com/es/llamada-introductoria/"
lang: "es"
translationKey: "precall"
slug: "llamada-introductoria"
schemaType: "Service"
offerType: "Service"
price: "20"
currency: "CHF"
duration: "PT15M"
draft: false
---

# ¿Aún con dudas? Conozcámonos primero — CHF 20

Si una lectura completa te parece un gran primer paso, empieza más pequeño. En 15 minutos te haces una idea real de cómo trabajo y recibes una mini-lectura sobre algo que está vivo ahora mismo en tu carta, para que decidas sobre una lectura completa sin adivinar.

**Recibes**
- Una videollamada enfocada de 15 minutos por Google Meet
- Una mini-lectura sobre un tema que te importa ahora
- Una valoración honesta de si una lectura completa es para ti

**Bueno saberlo:** esta llamada es algo en sí mismo; los CHF 20 no se descuentan de una lectura completa. Es, simplemente, la forma más fácil de conocerme antes de comprometerte. ¿Prefieres el cuadro completo ya? [Reserva una lectura completa (CHF 180)](/es/lectura-carta-astral/).

[ **Reservar la llamada de 15 minutos** ]
```

## 3.5 Lectura de pareja — `relationship-reading.md`

```markdown
---
title: "Lectura de pareja — dos cartas juntas (CHF 250)"
description: "Una lectura completa para dos: cómo se encuentran vuestras cartas, dónde fluís y dónde os tensáis. CHF 250 (CHF 180 + CHF 70 por la segunda persona)."
canonical: "https://www.big3astrology.com/es/lectura-de-pareja/"
lang: "es"
translationKey: "relationship-reading"
slug: "lectura-de-pareja"
schemaType: "Service"
offerType: "Service"
price: "250"
currency: "CHF"
duration: "PT60M"
draft: false
---

# Lectura de pareja — CHF 250

Dos cartas, lado a lado. Miramos cómo os encontráis tú y otra persona de verdad: dónde fluís con facilidad, dónde os tensáis y qué necesita cada uno para sentirse visto y comprendido.

Es la lectura completa de carta astral, ampliada a dos personas: la misma preparación a fondo, una sesión en directo de 60 minutos por Google Meet y un resumen escrito, con una segunda carta añadida por **CHF 70** sobre los CHF 180 habituales.

Buena para parejas, pero igual de valiosa para cualquier vínculo que importe: en el amor, en la familia, en la amistad o en lo profesional.

[ **Reservar una lectura de pareja** ]
```

## 3.6 Aviso legal — `legal-notice.md`

```markdown
---
title: "Aviso legal — Big Astrology GmbH"
description: "Aviso legal y datos de la empresa Big Astrology GmbH, Küsnacht ZH."
canonical: "https://www.big3astrology.com/es/aviso-legal/"
lang: "es"
translationKey: "legal-notice"
slug: "aviso-legal"
draft: false
---

# Aviso legal

**Big Astrology GmbH**
Ränkestrasse 21
8700 Küsnacht ZH
Suiza

Correo: info@big3astrology.com

Directora gerente: Gabriela Brecht
Registro mercantil / IVA: [UID CHE-___.___.___ — se añadirá una vez registrada la GmbH]

Responsable del contenido: Gabriela Brecht, dirección como arriba.
```

## 3.7 Términos y condiciones — `terms.md`

```markdown
---
title: "Términos y condiciones — Big Astrology GmbH"
description: "Términos y condiciones de las lecturas y servicios de Big Astrology GmbH."
canonical: "https://www.big3astrology.com/es/terminos/"
lang: "es"
translationKey: "terms"
slug: "terminos"
draft: false
---

# Términos y condiciones

## 1. Proveedor
Estos términos rigen los servicios de Big Astrology GmbH, Ränkestrasse 21, 8700 Küsnacht ZH, Suiza («nosotros»). Contacto: info@big3astrology.com.

## 2. Servicios
Ofrecemos lecturas astrológicas: un resumen Big 3 gratuito, una llamada introductoria de 15 minutos (CHF 20), una lectura completa de carta astral (CHF 180) y una lectura de pareja (CHF 250). Las lecturas se realizan en directo por Google Meet, con resumen escrito cuando se indica.

## 3. Reservas y pago
Las reservas se hacen mediante nuestro proveedor de agenda. El pago se realiza al reservar, con tarjeta o TWINT, a través de nuestro proveedor de pagos. Los precios son en francos suizos (CHF) e incluyen el IVA suizo aplicable.

## 4. Cancelaciones y cambios
Consulta nuestra página de [Cancelaciones y reembolsos](/es/cancelaciones-reembolsos/).

## 5. Naturaleza de los servicios — importante
Nuestras lecturas se ofrecen para la introspección, la reflexión y el entretenimiento. **No** son asesoramiento médico, psicológico, financiero ni legal, ni sustituyen la atención profesional. Tú sigues siendo responsable de tus propias decisiones. La astrología no predice ni determina el futuro y nunca anula tu libre albedrío.

## 6. Responsabilidad
En la medida que permita la ley, nuestra responsabilidad se limita al dolo y a la negligencia grave. No respondemos por las decisiones que tomes a partir de una lectura.

## 7. Ley aplicable
Se aplica el Derecho suizo. El fuero es Küsnacht ZH, Suiza, en la medida que permita la ley.
```

## 3.8 Cancelaciones y reembolsos — `cancellations-refunds.md`

```markdown
---
title: "Cancelaciones y reembolsos — Big Astrology GmbH"
description: "Política de cancelación, cambio de cita y reembolso de las lecturas de Big Astrology GmbH."
canonical: "https://www.big3astrology.com/es/cancelaciones-reembolsos/"
lang: "es"
translationKey: "cancellations-refunds"
slug: "cancelaciones-reembolsos"
draft: false
---

# Cancelaciones y reembolsos

- **Cambiar la cita:** gratis hasta 24 horas antes de tu sesión, con el enlace de tu correo de confirmación.
- **Cancelar:** al menos 24 horas antes de tu sesión para un reembolso completo. Dentro de las 24 horas, la tarifa no es reembolsable, ya que el tiempo de preparación se ha reservado para ti.
- **No presentarse:** si faltas a tu sesión sin avisar, la tarifa no es reembolsable.
- **La llamada de 15 minutos (CHF 20)** no es reembolsable una vez realizada y no se descuenta de otras lecturas.
- **Problemas por nuestra parte:** si tenemos que cancelar o cambiar la cita, se te ofrece una nueva hora o un reembolso completo, a tu elección.

¿Preguntas? Escribe a info@big3astrology.com.
```

## 3.9 Privacidad — `privacy.md`

```markdown
---
title: "Privacidad — Big Astrology GmbH"
description: "Cómo trata tus datos Big Astrology GmbH: analítica sin cookies, datos mínimos, sin seguimiento publicitario."
canonical: "https://www.big3astrology.com/es/privacidad/"
lang: "es"
translationKey: "privacy"
slug: "privacidad"
draft: false
---

# Privacidad

Lo mantenemos simple y recogemos lo menos posible.

- **Tus datos de nacimiento** (fecha, hora, lugar) se usan solo para calcular tus Big 3 y preparar tu lectura. No los vendemos ni los compartimos con fines publicitarios.
- **Reserva y pago** se gestionan a través de nuestros proveedores de agenda y de pagos, que procesan tu nombre, correo y datos de pago para prestar el servicio.
- **Analítica:** usamos analítica respetuosa con la privacidad y sin cookies. No usamos cookies publicitarias ni seguimiento entre sitios, por lo que no hay banner de cookies que aceptar.
- **Tus derechos:** escribe a info@big3astrology.com para saber qué guardamos sobre ti, o para corregirlo o eliminarlo.

Responsable: Big Astrology GmbH, Ränkestrasse 21, 8700 Küsnacht ZH, Suiza.
```

---

# §4 — Páginas pilar — `src/content/blog/es/`

## 4.1 `carta-astral-gratis.md`  (keyword: *carta astral gratis*)

```markdown
---
title: "Carta astral gratis: tus Big 3 en segundos"
description: "Consigue tu carta astral gratis —tus Big 3 de Sol, Luna y Ascendente— en segundos, y descubre qué significa cada uno. Sin registro."
canonical: "https://www.big3astrology.com/es/carta-astral-gratis/"
lang: "es"
translationKey: "free-birth-chart"
slug: "carta-astral-gratis"
schemaType: "Article"
draft: false
---

# Carta astral gratis: tus Big 3, explicados

**Respuesta corta:** una carta astral es un mapa del cielo en el momento exacto de tu nacimiento. Los tres puntos más importantes en ella son tu **Sol, tu Luna y tu Ascendente**: tus «Big 3». Aquí los consigues los tres gratis en unos segundos, introduciendo tu fecha, hora y lugar de nacimiento. [Consigue tus Big 3 gratis.](/es/#big3)

Una carta astral completa tiene decenas de piezas: planetas, signos, casas, ejes. Pero no necesitas todo para descubrir algo real sobre ti. Los Big 3 llevan la mayor parte de la señal, y por eso son el lugar por donde empezar.

## ¿Qué es una carta astral?
Una carta astral (también llamada carta natal) es una instantánea de dónde estaban el Sol, la Luna y los planetas, desde tu punto de vista en la Tierra, en el momento de tu nacimiento. Como el cielo se mueve sin parar, tu carta es prácticamente única: incluso personas nacidas el mismo día en lugares distintos tienen Ascendentes distintos.

Para calcularla con precisión necesitas tres cosas:
- **Fecha de nacimiento**: fija el Sol y la mayoría de las posiciones planetarias.
- **Hora de nacimiento**: fija tu Ascendente y las casas. Es la que más gente no tiene a mano.
- **Lugar de nacimiento**: sitúa la carta en tu punto de la Tierra.

## Tus Big 3: los tres que más cuentan
- **Sol — lo que te impulsa.** Tu identidad central y lo que te enciende. El signo que ya conoces («soy Leo»).
- **Luna — lo que necesitas para sentirte seguro.** Tu mundo interior y emocional: cómo sientes, te calmas y recargas.
- **Ascendente — cómo te encuentra el mundo al principio.** La impresión que das y tu forma instintiva de acercarte a la vida.

Juntos explican por qué dos personas «del mismo signo» pueden sentirse completamente distintas. [Mira los tuyos.](/es/#big3)

## ¿Necesito mi hora exacta de nacimiento?
Para el Sol y la Luna, normalmente no: suele bastar tu fecha. Para tu **Ascendente, sí**: cambia cada dos horas aproximadamente, así que hasta una hora aproximada ayuda, y una exacta es lo mejor. ¿No la sabes? Aun así tendrás tu Sol y tu Luna, y te ayudamos a rastrear la hora para una lectura completa.

## Qué puede decirte una carta gratis, y qué no
Unos Big 3 gratis son un punto de partida real y preciso, pero un resumen, no la historia completa. No muestran cómo interactúan tus posiciones, dónde están de verdad tus fortalezas y tus roces, ni qué hacer con todo ello. Esa es la tarea de una lectura completa: una astróloga real que toma tu carta entera y la convierte en algo útil. [Más sobre la lectura de carta astral.](/es/lectura-carta-astral/)

## Preguntas frecuentes

### ¿La carta astral es de verdad gratis?
Sí: tus Big 3 (Sol, Luna y Ascendente) y una breve síntesis son gratis, sin registro.

### ¿Es preciso?
Sí. Calculamos posiciones planetarias reales para tu fecha, hora y lugar: la misma astronomía que usan los profesionales.

### ¿Y si no sé mi hora de nacimiento?
Tendrás tu Sol y tu Luna. Tu Ascendente necesita una hora exacta; te ayudamos a encontrarla.

### ¿Qué diferencia hay entre esto y una lectura?
La carta gratis es un resumen que lees por tu cuenta. Una lectura es una conversación en directo con una astróloga que interpreta tu carta entera para tu vida real.

*La astrología se ofrece para la introspección y la reflexión personal; no es asesoramiento médico, psicológico, financiero ni legal.*
```

## 4.2 `calcular-ascendente.md`  (keyword: *calcula el ascendente y su significado*)

```markdown
---
title: "Calcula el ascendente y su significado"
description: "Calcula tu ascendente gratis en segundos y descubre qué significa para cómo te ve el mundo. Se necesita la hora de nacimiento."
canonical: "https://www.big3astrology.com/es/calcular-ascendente/"
lang: "es"
translationKey: "calculate-rising-sign"
slug: "calcular-ascendente"
schemaType: "Article"
draft: false
---

# Calcula el ascendente y su significado

**Respuesta corta:** tu ascendente es el signo del zodiaco que asomaba por el horizonte en el minuto exacto de tu nacimiento. Para calcularlo necesitas tu fecha de nacimiento, la **hora exacta** y el lugar. Introdúcelos aquí y consíguelo gratis en segundos. [Calcula tu ascendente.](/es/#big3)

## ¿Qué es el ascendente?
Mientras tu signo solar trata de quién eres en lo esencial, tu **ascendente trata de cómo te muestras**: tu estilo instintivo, tu primera impresión, la «puerta de entrada» por la que la gente llega a ti. También fija la estructura de toda tu carta (las casas), y por eso importa tanto en astrología.

## Por qué necesitas tu hora exacta de nacimiento
El ascendente se mueve rápido: recorre los doce signos en 24 horas, así que **un signo nuevo cada dos horas** aproximadamente. Por eso tu fecha por sí sola no puede darlo, y una hora que se desvíe aunque sea una hora puede dejarte en el signo equivocado. Con hora exacta, tu ascendente es preciso; con solo una hora aproximada, tómalo como una buena estimación.

### Cómo encontrar tu hora de nacimiento
- Mira tu **partida de nacimiento**: en muchos países consta la hora.
- Pregunta a **tus padres o a un familiar cercano**.
- Solicita tu **registro de nacimiento** en el hospital o registro civil de tu lugar de nacimiento.

## Qué significa tu ascendente
Tu ascendente tiñe todo, desde tu lenguaje corporal hasta cómo afrontas situaciones nuevas. Un esbozo rápido por elemento:
- **Ascendente de fuego (Aries, Leo, Sagitario):** das una impresión directa, cálida, enérgica.
- **Ascendente de tierra (Tauro, Virgo, Capricornio):** das una impresión sólida, capaz, serena.
- **Ascendente de aire (Géminis, Libra, Acuario):** das una impresión sociable, curiosa, fácil de tratar.
- **Ascendente de agua (Cáncer, Escorpio, Piscis):** das una impresión sensible, magnética, algo más difícil de leer.

Tu resultado gratis te da una descripción más completa y personal de tu ascendente concreto. [Mira el tuyo.](/es/#big3)

## Ascendente, Sol y Luna: el cuadro completo
Tu ascendente es un tercio de tus Big 3. Junto a tu **Sol** (lo que te impulsa) y tu **Luna** (lo que necesitas), explica la distancia entre cómo te lee la gente al principio y quién eres de verdad por debajo. Una lectura completa conecta los tres —y el resto de tu carta— en algo que puedes usar. [Más sobre la lectura de carta astral.](/es/lectura-carta-astral/)

## Preguntas frecuentes

### ¿Puedo saber mi ascendente sin la hora de nacimiento?
No de forma fiable. El ascendente cambia cada dos horas aproximadamente, así que hace falta una hora exacta. Sin ella, te mostramos el Sol y la Luna.

### ¿El ascendente es más importante que mi signo solar?
Ninguno es más importante: describen cosas distintas. Tu signo solar es tu esencia; tu ascendente, tu efecto hacia fuera. Juntos dan un cuadro más completo.

### ¿Por qué mi ascendente es distinto de mi signo solar?
Miden cosas distintas: tu Sol es tu esencia; tu ascendente es tu estilo externo y la disposición momentánea de tu carta. En la mayoría difieren.

*La astrología se ofrece para la introspección y la reflexión personal; no es asesoramiento médico, psicológico, financiero ni legal.*
```

## 4.3 `calcular-signo-lunar.md`  (keyword: *calcula el signo lunar*)

```markdown
---
title: "Calcula tu signo lunar y su significado"
description: "Calcula tu signo lunar gratis en segundos y descubre qué significa para tus emociones y tu vida interior. Normalmente sin hora exacta."
canonical: "https://www.big3astrology.com/es/calcular-signo-lunar/"
lang: "es"
translationKey: "calculate-moon-sign"
slug: "calcular-signo-lunar"
schemaType: "Article"
draft: false
---

# Calcula tu signo lunar y su significado

**Respuesta corta:** tu signo lunar es el signo del zodiaco en el que estaba la Luna cuando naciste. Representa tu mundo interior y emocional: lo que sientes y lo que necesitas para sentirte seguro. Introduce tu fecha y lugar de nacimiento y consíguelo gratis en segundos. [Calcula tu signo lunar.](/es/#big3)

## ¿Qué es un signo lunar?
Si tu signo solar es quién eres a la luz del día, tu **signo lunar es quién eres en privado**: tus emociones, tus instintos, lo que te calma y lo que necesitas de quienes tienes más cerca. A menudo es la posición en la que más se reconoce la gente al leerla.

## ¿Necesito mi hora exacta de nacimiento?
Normalmente no. La Luna recorre un signo en unos **dos a dos días y medio**, así que tu fecha suele bastar para situarla. La excepción: si naciste un día en que la Luna cambió de signo, la hora importa; cuando es el caso, te avisamos. (Tu **Ascendente** es el que siempre necesita una hora exacta.)

## Qué significa tu signo lunar
Tu Luna describe tu estilo emocional: cómo procesas los sentimientos, te consuelas y te vinculas con otros. Un esbozo rápido por elemento:
- **Luna en fuego (Aries, Leo, Sagitario):** los sentimientos son rápidos, cálidos, expresivos.
- **Luna en tierra (Tauro, Virgo, Capricornio):** los sentimientos son estables, prácticos, con los pies en la tierra.
- **Luna en aire (Géminis, Libra, Acuario):** los sentimientos se procesan pensando y hablando.
- **Luna en agua (Cáncer, Escorpio, Piscis):** los sentimientos son profundos, intuitivos y fuertes.

Tu resultado gratis te da una descripción personal de tu signo lunar concreto, con su fortaleza y su punto de crecimiento. [Mira el tuyo.](/es/#big3)

## Por qué tu signo lunar puede sorprenderte
Mucha gente se siente más cercana a su signo lunar que a su Sol. Es porque tu signo solar suele ser el yo que muestras, mientras que tu Luna es el yo que de verdad sientes, y los dos no siempre coinciden. Verlos lado a lado es la parte interesante.

## Luna, Sol y Ascendente: el cuadro completo
Tu Luna es un tercio de tus Big 3, junto a tu **Sol** (lo que te impulsa) y tu **Ascendente** (cómo te encuentra el mundo). Una lectura completa toma los tres —y el resto de tu carta— y los convierte en comprensión práctica sobre tus relaciones, tus patrones y lo que necesitas para florecer. [Más sobre la lectura de carta astral.](/es/lectura-carta-astral/)

## Preguntas frecuentes

### ¿Puedo saber mi signo lunar sin la hora de nacimiento?
Normalmente sí: la fecha suele bastar. Solo si naciste un día en que la Luna cambió de signo importa la hora.

### ¿Por qué mi signo lunar se siente más «yo» que mi signo solar?
Porque tu Luna es tu yo privado y emocional, mientras que tu Sol suele ser el yo que muestras. Mucha gente se identifica fuerte con ella.

### ¿Qué diferencia hay entre un signo lunar y un signo solar?
Tu Sol es tu identidad central y tu impulso; tu Luna son tus necesidades emocionales y tus instintos. Tienes ambos, y trabajan juntos.

*La astrología se ofrece para la introspección y la reflexión personal; no es asesoramiento médico, psicológico, financiero ni legal.*
```

---

# §5 — QA (específico de ES)

- **Tratamiento `tú` consistente** en todos los textos, arquetipos, páginas y pilares; **voseo evitado** (neutro pan-hispano). ✓
- **Anclas de keyword** en `title`/H1/intro de los pilares: «carta astral gratis», «calcula el ascendente y su significado», «calcula el signo lunar» (slug + contenido). Nota: el título lunar usa la variante natural «Calcula tu signo lunar…»; el ancla exacta «el signo lunar» se puede forzar si prefieres coincidencia literal. ✓ (1 punto menor marcado)
- **`translationKey` idéntico a EN/DE** en cada página (conecta hreflang); **slugs localizados**; `canonical` bajo `/es/`. ✓
- **Claves YAML idénticas a EN** (sun/moon/rising · aries…pisces · synthesis.*), solo valores en español. ✓
- **Terminología:** Sol / Luna / Ascendente; carta astral (keyword) + carta natal (sinónimo). Signos: Tauro, Géminis, Cáncer, Escorpio, Sagitario, Capricornio, Acuario, Piscis. ✓
- **Puntuación española:** ¿…? / ¡…! y comillas angulares «…» en texto visible. ✓
- **Google Meet, CHF 180 primaria / CHF 20 secundaria / CHF 250 (180+70), descargo** trasladados. ✓
- **Longitudes meta:** títulos ≤ ~60, descripciones ≤ ~155. ✓
- **Flag pendiente:** añadir el UID en el Aviso legal una vez registrada la GmbH.

**Los tres idiomas (EN/DE/ES) están completos y mapeados al repo.** Siguiente fase sugerida: pantallas en Claude Design → build en Claude Code (repo + motor Big-3 + `/api/big3`) → deploy en Cloudflare Pages.
