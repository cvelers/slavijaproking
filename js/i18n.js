/* ============================================
   SLAVIJA PROKING — Internationalization
   ============================================ */

const translations = {
  sr: {
    // Meta
    'meta.title': 'Slavija PROKING — Projektovanje, Nadzor, Konsalting',
    'meta.description': 'Slavija PROKING d.o.o. — Respektabilna kompanija u oblasti građevinarstva. Projektovanje, nadzor, konsalting, rušenje objekata i humano deminiranje od 2008.',

    // Nav
    'nav.home': 'Početna',
    'nav.about': 'O nama',
    'nav.services': 'Usluge',
    'nav.references': 'Reference',
    'nav.values': 'Vrednosti',
    'nav.partners': 'Partneri',
    'nav.contact': 'Kontakt',

    // Hero
    'hero.badge': 'Od 2008. godine',
    'hero.title': 'Gradimo <span class="text-accent">budućnost</span><br>sa poverenjem',
    'hero.subtitle': 'Projektovanje, nadzor projekata i konsalting u građevinarstvu. Respektabilna kompanija sa timom kompetentnih stručnjaka.',
    'hero.cta.services': 'Naše usluge',
    'hero.cta.contact': 'Kontaktirajte nas',

    // About
    'about.label': 'O nama',
    'about.title': 'Kompanija na koju<br>se možete <span class="text-accent">osloniti</span>',
    'about.lead': 'Slavija PROKING d.o.o. je od svog osnivanja 2008. godine zabeležila stalan rast poslovnih mogućnosti i realizovala brojne građevinsko-zanatske radove.',
    'about.p1': 'Danas smo respektabilna kompanija koju čini tim kompetentnih stručnjaka iz oblasti visokogradnje, niskogradnje, hidrotehnike, mašinskih i elektro instalacija, sanacije objekata, hidroizolaterskih radova, kao i rušenja objekata invazivnim i neinvazivnim metodama.',
    'about.p2': 'Naš uspeh zasnivamo na primeni najboljih praksi, kontinuiranom istraživanju i kvalitetnom kadru koji upravlja građevinskim projektima kroz ceo životni ciklus — od prethodne analize do realizacije.',
    'about.director.title': 'Direktor',
    'about.stat.years': 'Godina iskustva',
    'about.stat.projects': 'Realizovanih projekata',
    'about.stat.partners': 'Partnera u saradnji',
    'about.stat.certs': 'ISO sertifikata',

    // Services
    'services.label': 'Usluge',
    'services.title': 'Kompletna <span class="text-accent">građevinska</span><br>rešenja',
    'services.intro': 'Pružamo širok spektar profesionalnih usluga u oblasti građevinarstva, od projektovanja do izvođenja radova.',
    'services.design.title': 'Projektovanje',
    'services.design.desc': 'Izrada kompletne projektne dokumentacije za objekte visokogradnje, niskogradnje i hidrotehnike.',
    'services.supervision.title': 'Nadzor projekata',
    'services.supervision.desc': 'Stručni nadzor nad izvođenjem građevinskih radova sa garantovanim kvalitetom i poštovanjem rokova.',
    'services.consulting.title': 'Konsalting',
    'services.consulting.desc': 'Stručno savetovanje u svim fazama građevinskog projekta — od idejnog rešenja do primopredaje.',
    'services.expertise.title': 'Veštačenje',
    'services.expertise.desc': 'Ekspertize i veštačenja u oblasti građevinarstva za potrebe sudskih i vansudskih postupaka.',
    'services.construction.title': 'Izvođenje radova',
    'services.construction.desc': 'Kompletno izvođenje građevinskih i građevinsko-zanatskih radova po sistemu "ključ u ruke".',
    'services.demolition.title': 'Rušenje objekata',
    'services.demolition.desc': 'Profesionalno rušenje objekata invazivnim i neinvazivnim metodama uz izradu glavnih projekata rušenja.',
    'services.demining.title': 'Humano deminiranje',
    'services.demining.desc': 'Specijalizovane usluge humanog deminiranja sa poštovanjem najviših standarda bezbednosti.',
    'services.viewAll': 'Sve usluge',

    // Stats Banner
    'stats.years': 'Godina rada',
    'stats.projects': 'Projekata',
    'stats.engineers': 'Inženjera',
    'stats.certs': 'ISO sertifikata',

    // References
    'ref.label': 'Reference',
    'ref.title': 'Istaknuti <span class="text-accent">projekti</span>',
    'ref.intro': 'Pregled nekih od naših realizovanih projekata u oblasti projektovanja, izvođenja radova i nadzora.',
    'ref.tab.all': 'Svi',
    'ref.tab.construction': 'Izvođenje',
    'ref.tab.design': 'Projektovanje',
    'ref.tab.demolition': 'Rušenje',

    // Reference cards
    'ref.zicka.title': 'Stambeno-poslovni kompleks ŽIČKA 5',
    'ref.zicka.desc': 'Temeljni radovi i podzemni nivoi (3 etaže) za stambeno-poslovni objekat.',
    'ref.kuehne.title': 'Carinski magacin Kuehne+Nagel',
    'ref.kuehne.desc': 'Proširenje armiranobetonskog carinskog magacina za međunarodnu logističku kompaniju.',
    'ref.fizika.title': 'Institut za fiziku — sanacija konstrukcije',
    'ref.fizika.desc': 'Kompletna sanacija konstrukcije objekta Instituta za fiziku.',
    'ref.umka.title': 'Porodična kuća sa bazenom — Umka',
    'ref.umka.desc': 'Izgradnja porodične kuće sa bazenom i zaštitom od klizišta.',
    'ref.mcdonalds.title': 'McDonald\'s — fasaderski radovi',
    'ref.mcdonalds.desc': 'Kompletni fasaderski radovi na objektu McDonald\'s u trgovačkom centru.',
    'ref.drmno.title': 'Magacin pomoćne mehanizacije DRMNO',
    'ref.drmno.desc': 'Izgradnja magacina pomoćne mehanizacije za potrebe termoelektrane.',
    'ref.mlekara.title': 'Mlekara Stara Planina — rekonstrukcija',
    'ref.mlekara.desc': 'Projektovanje rekonstrukcije hale mlekare sa kompletnom tehničkom dokumentacijom.',
    'ref.diplon.title': 'Tržni centar Diplon — Zemun Polje',
    'ref.diplon.desc': 'Kompletno projektovanje tržnog centra sa pratećom infrastrukturom.',
    'ref.school.title': 'OŠ „Milan Ilić Čiča" — rekonstrukcija',
    'ref.school.desc': 'Projektovanje i nadzor rekonstrukcije osnovne škole.',
    'ref.rivers.title': 'Regulacija korita reka Jošanica i Samokovka',
    'ref.rivers.desc': 'Izrada projektne dokumentacije za regulaciju rečnih korita.',
    'ref.sportshall.title': 'Sportska hala — zamena krova i fasade',
    'ref.sportshall.desc': 'Projekat zamene krovnog pokrivača i fasadnih elemenata sportske hale.',
    'ref.nis.title': 'Klinički centar Niš — kotlarnica',
    'ref.nis.desc': 'Izrada projekta i rušenje kotlarnice Kliničkog centra Niš.',
    'ref.bulevar.title': 'Bul. Kneza A. Karađorđevića — rušenje',
    'ref.bulevar.desc': 'Projekat rušenja i izvođenje rušenja stambenog objekta na bulevaru.',
    'ref.protica.title': 'Namesnika Protića — stambeni objekat',
    'ref.protica.desc': 'Izrada projekta rušenja za stambenu konstrukciju u centru Beograda.',

    // Values
    'values.label': 'Vrednosti',
    'values.title': 'Vizija, misija i <span class="text-accent">principi</span>',
    'values.vision.title': 'Vizija',
    'values.vision.desc': 'Inovativno i efikasno preduzeće fokusirano na pouzdana i kvalitetna rešenja za partnere.',
    'values.mission.title': 'Misija',
    'values.mission.desc': 'Ostvarivanje vizije kroz kontinuirani rast poslovanja. Profesionalnim radom i kvalitetom usluga garantujemo potpuno zadovoljstvo partnera.',
    'values.safety.title': 'Bezbednost',
    'values.safety.desc': 'Briga o zdravlju i bezbednosti zaposlenih i zaštiti imovine u obavljanju poslovnih aktivnosti.',
    'values.partnership.title': 'Partnerstvo',
    'values.partnership.desc': 'Uspostavljanje pouzdanih partnerstava i socijalno odgovorno poslovanje u skladu sa zakonskim i etičkim normama.',
    'values.education.title': 'Edukacija',
    'values.education.desc': 'Ulaganje u razvoj stručnog kadra kroz kontinuiranu edukaciju iz oblasti građevinarstva i upravljanja projektima.',
    'values.ecology.title': 'Ekologija',
    'values.ecology.desc': 'Primena tehnologija i materijala sa smanjenim štetnim uticajem na životnu sredinu.',

    // Certifications
    'certs.title': 'Sertifikovani kvalitet',
    'certs.iso9001': 'Upravljanje kvalitetom',
    'certs.iso14001': 'Životna sredina',
    'certs.ohsas': 'Zdravlje i bezbednost',

    // Partners
    'partners.label': 'Partneri',
    'partners.title': 'Pouzdani <span class="text-accent">saradnici</span>',
    'partners.intro': 'Naš uspeh gradimo sa mrežom od preko 30 proverenih partnera i dobavljača.',

    // CTA
    'cta.title': 'Imate projekat na umu?',
    'cta.text': 'Javite nam se i zajedno ćemo pronaci optimalno rešenje za vaše građevinske potrebe.',
    'cta.btn': 'Kontaktirajte nas',

    // Contact
    'contact.label': 'Kontakt',
    'contact.title': 'Stupite u <span class="text-accent">kontakt</span>',
    'contact.address': 'Adresa',
    'contact.phone': 'Telefon / Fax',
    'contact.email': 'Email',
    'contact.web': 'Web',
    'contact.form.name': 'Ime i prezime',
    'contact.form.email': 'Email adresa',
    'contact.form.subject': 'Predmet',
    'contact.form.message': 'Vaša poruka',
    'contact.form.submit': 'Pošaljite poruku',
    'contact.form.defaultSubject': 'Upit sa sajta',

    // Footer
    'footer.nav': 'Navigacija',
    'footer.contact': 'Kontakt',
    'footer.desc': 'Projektovanje, nadzor projekata i konsalting u građevinarstvu od 2008. godine.',
    'footer.rights': 'Sva prava zadržana.',

    // Reg number label
    'contact.reg': 'Matični broj',
  },

  en: {
    // Meta
    'meta.title': 'Slavija PROKING — Design, Supervision, Consulting',
    'meta.description': 'Slavija PROKING d.o.o. — A reputable construction company. Design, project supervision, consulting, building demolition and humanitarian demining since 2008.',

    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.references': 'Projects',
    'nav.values': 'Values',
    'nav.partners': 'Partners',
    'nav.contact': 'Contact',

    // Hero
    'hero.badge': 'Since 2008',
    'hero.title': 'Building the <span class="text-accent">future</span><br>with trust',
    'hero.subtitle': 'Design, project supervision and construction consulting. A reputable company with a team of competent professionals.',
    'hero.cta.services': 'Our services',
    'hero.cta.contact': 'Get in touch',

    // About
    'about.label': 'About us',
    'about.title': 'A company you<br>can <span class="text-accent">rely on</span>',
    'about.lead': 'Since its founding in 2008, Slavija PROKING d.o.o. has recorded steady growth in business opportunities and completed numerous construction projects.',
    'about.p1': 'Today we are a reputable company comprised of competent specialists in the fields of high-rise construction, civil works, hydroengineering, mechanical and electrical installations, building remediation, waterproofing, as well as building demolition using both invasive and non-invasive methods.',
    'about.p2': 'Our success is built on applying best practices, continuous research, and a quality workforce that manages construction projects through their entire lifecycle — from preliminary analysis to completion.',
    'about.director.title': 'Director',
    'about.stat.years': 'Years of experience',
    'about.stat.projects': 'Completed projects',
    'about.stat.partners': 'Trusted partners',
    'about.stat.certs': 'ISO certifications',

    // Services
    'services.label': 'Services',
    'services.title': 'Complete <span class="text-accent">construction</span><br>solutions',
    'services.intro': 'We provide a wide range of professional services in the construction industry, from design to project execution.',
    'services.design.title': 'Design',
    'services.design.desc': 'Complete project documentation for high-rise, civil, and hydrotechnical construction.',
    'services.supervision.title': 'Project supervision',
    'services.supervision.desc': 'Expert supervision of construction works with guaranteed quality and adherence to deadlines.',
    'services.consulting.title': 'Consulting',
    'services.consulting.desc': 'Expert advice in all phases of construction projects — from concept design to handover.',
    'services.expertise.title': 'Expert testimony',
    'services.expertise.desc': 'Construction expertise and evaluations for judicial and extrajudicial proceedings.',
    'services.construction.title': 'Construction',
    'services.construction.desc': 'Complete execution of construction and finishing works on a turnkey basis.',
    'services.demolition.title': 'Demolition',
    'services.demolition.desc': 'Professional building demolition using invasive and non-invasive methods with full project documentation.',
    'services.demining.title': 'Humanitarian demining',
    'services.demining.desc': 'Specialized humanitarian demining services adhering to the highest safety standards.',
    'services.viewAll': 'All services',

    // Stats Banner
    'stats.years': 'Years in business',
    'stats.projects': 'Projects',
    'stats.engineers': 'Engineers',
    'stats.certs': 'ISO certifications',

    // References
    'ref.label': 'Projects',
    'ref.title': 'Featured <span class="text-accent">projects</span>',
    'ref.intro': 'An overview of our completed projects in design, construction, and supervision.',
    'ref.tab.all': 'All',
    'ref.tab.construction': 'Construction',
    'ref.tab.design': 'Design',
    'ref.tab.demolition': 'Demolition',

    // Reference cards
    'ref.zicka.title': 'ŽIČKA 5 Residential-Commercial Complex',
    'ref.zicka.desc': 'Foundation pit and underground levels (3 floors) for a mixed-use building.',
    'ref.kuehne.title': 'Kuehne+Nagel Customs Warehouse',
    'ref.kuehne.desc': 'Reinforced concrete expansion of customs warehouse for an international logistics company.',
    'ref.fizika.title': 'Institute of Physics — structural renovation',
    'ref.fizika.desc': 'Complete structural renovation of the Institute of Physics building.',
    'ref.umka.title': 'Family house with pool — Umka',
    'ref.umka.desc': 'Construction of a family house with pool and landslide protection.',
    'ref.mcdonalds.title': 'McDonald\'s — facade works',
    'ref.mcdonalds.desc': 'Complete facade works on the McDonald\'s building at the shopping center.',
    'ref.drmno.title': 'DRMNO Auxiliary Machinery Warehouse',
    'ref.drmno.desc': 'Construction of an auxiliary machinery warehouse for the thermal power plant.',
    'ref.mlekara.title': 'Stara Planina Dairy — reconstruction',
    'ref.mlekara.desc': 'Reconstruction design of the dairy hall with full technical documentation.',
    'ref.diplon.title': 'Diplon Shopping Center — Zemun Polje',
    'ref.diplon.desc': 'Complete design of the shopping center with supporting infrastructure.',
    'ref.school.title': '"Milan Ilić Čiča" Elementary School — reconstruction',
    'ref.school.desc': 'Design and supervision of elementary school reconstruction.',
    'ref.rivers.title': 'Jošanica and Samokovka river regulation',
    'ref.rivers.desc': 'Project documentation for riverbed regulation.',
    'ref.sportshall.title': 'Sports hall — roof and facade replacement',
    'ref.sportshall.desc': 'Roof and facade replacement project for the sports hall.',
    'ref.nis.title': 'Clinical Center Niš — boiler room',
    'ref.nis.desc': 'Demolition design and execution for the Clinical Center Niš boiler room.',
    'ref.bulevar.title': 'Kneza A. Karađorđevića Blvd. — demolition',
    'ref.bulevar.desc': 'Demolition design and execution of a residential building on the boulevard.',
    'ref.protica.title': 'Namesnika Protića — residential building',
    'ref.protica.desc': 'Demolition design for a residential structure in central Belgrade.',

    // Values
    'values.label': 'Values',
    'values.title': 'Vision, mission &<br><span class="text-accent">principles</span>',
    'values.vision.title': 'Vision',
    'values.vision.desc': 'An innovative and efficient company focused on reliable and quality solutions for our partners.',
    'values.mission.title': 'Mission',
    'values.mission.desc': 'Achieving our vision through continuous business growth. Through professional work and service quality, we guarantee complete partner satisfaction.',
    'values.safety.title': 'Safety',
    'values.safety.desc': 'Caring for the health and safety of employees and the protection of property in all business activities.',
    'values.partnership.title': 'Partnership',
    'values.partnership.desc': 'Establishing reliable partnerships and socially responsible business in accordance with legal and ethical standards.',
    'values.education.title': 'Education',
    'values.education.desc': 'Investing in professional development through continuous education in construction and project management.',
    'values.ecology.title': 'Ecology',
    'values.ecology.desc': 'Application of technologies and materials with reduced harmful impact on the environment.',

    // Certifications
    'certs.title': 'Certified quality',
    'certs.iso9001': 'Quality management',
    'certs.iso14001': 'Environmental',
    'certs.ohsas': 'Health & safety',

    // Partners
    'partners.label': 'Partners',
    'partners.title': 'Trusted <span class="text-accent">partners</span>',
    'partners.intro': 'We build our success with a network of over 30 verified partners and suppliers.',

    // CTA
    'cta.title': 'Have a project in mind?',
    'cta.text': 'Get in touch and together we\'ll find the optimal solution for your construction needs.',
    'cta.btn': 'Contact us',

    // Contact
    'contact.label': 'Contact',
    'contact.title': 'Get in <span class="text-accent">touch</span>',
    'contact.address': 'Address',
    'contact.phone': 'Phone / Fax',
    'contact.email': 'Email',
    'contact.web': 'Web',
    'contact.form.name': 'Full name',
    'contact.form.email': 'Email address',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Your message',
    'contact.form.submit': 'Send message',
    'contact.form.defaultSubject': 'Website inquiry',

    // Footer
    'footer.nav': 'Navigation',
    'footer.contact': 'Contact',
    'footer.desc': 'Design, project supervision and construction consulting since 2008.',
    'footer.rights': 'All rights reserved.',

    // Reg number label
    'contact.reg': 'Reg. number',
  }
};

class I18n {
  constructor() {
    this.currentLang = localStorage.getItem('sp-lang') || 'sr';
  }

  t(key) {
    return translations[this.currentLang]?.[key] || translations.sr[key] || key;
  }

  setLang(lang) {
    this.currentLang = lang;
    localStorage.setItem('sp-lang', lang);
    document.documentElement.setAttribute('lang', lang);
    this.applyTranslations();
  }

  toggle() {
    this.setLang(this.currentLang === 'sr' ? 'en' : 'sr');
  }

  applyTranslations() {
    // Update page title and meta
    document.title = this.t('meta.title');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', this.t('meta.description'));

    // Translate all [data-i18n] elements (innerHTML)
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      el.innerHTML = this.t(key);
    });

    // Translate all [data-i18n-text] elements (textContent only)
    document.querySelectorAll('[data-i18n-text]').forEach(el => {
      const key = el.dataset.i18nText;
      el.textContent = this.t(key);
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      el.setAttribute('placeholder', this.t(key));
    });

    // Translate aria-labels
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.dataset.i18nAria;
      el.setAttribute('aria-label', this.t(key));
    });

    // Update lang toggle button text
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
      const label = langBtn.querySelector('.lang-toggle__label');
      if (label) label.textContent = this.currentLang === 'sr' ? 'EN' : 'SR';
    }
  }
}

window.i18n = new I18n();
