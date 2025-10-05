document.addEventListener('DOMContentLoaded', () => {
  const pile = document.querySelector('.pile-images');
  const placeholder = document.querySelector('.placeholder');
  let currentProject = null;

  // 1. Générateur de nombre aléatoire (float) entre min et max
  const randomBetween = (min, max) => Math.random() * (max - min) + min;

  // 2. Définition des projets et de leurs médias (.webm / .webp)
  const projects = {
    projet20: [
      'projets/psd/img-1.webp',
      'projets/psd/img-2.webp',
      'projets/psd/img-3.webp',
      'projets/psd/img-4.webp',
      'projets/psd/img-5.webp',
      'projets/psd/img-6.webp',
      'projets/psd/img-7.webp',
    ],


    projet19: [
      'projets/foot/img-1.webp',
      'projets/foot/img-2.webp',
      'projets/foot/img-3.webp',
      'projets/foot/img-4.webp',
      'projets/foot/img-5.webp',
      'projets/foot/img-6.webp',
      'projets/foot/img-7.webp',
      'projets/foot/img-8.webp',
      'projets/foot/img-9.webp',
    ],

    projet18: [
      'projets/balade_graphique/img-1.webp',
      'projets/balade_graphique/img-2.webp',
      'projets/balade_graphique/img-3.webp',
      'projets/balade_graphique/img-4.webp',
      'projets/balade_graphique/img-5.webp',
      'projets/balade_graphique/img-6.webp',
      'projets/balade_graphique/img-7.webp',
      'projets/balade_graphique/img-8.webp',
    ],

        projet17: [
      'projets/tenk/img-1.webp',
      'projets/tenk/img-2.webp',
    ],

    projet16: [
      'projets/surf/img-1.webp',
      'projets/surf/img-2.webp',
      'projets/surf/img-3.webp',
      'projets/surf/img-4.webp',
      'projets/surf/img-5.webp',
      'projets/surf/img-6.webp',
      'projets/surf/img-7.webp',
    ],

    projet15: [
      'projets/panzani/img-1.webp',
      'projets/panzani/img-2.webp',
      'projets/panzani/img-3.webp',
      'projets/panzani/img-4.webp',
      'projets/panzani/img-5.webp',
    ],

    projet14: [
      'projets/besoin_envie/img-1.webp',
      'projets/besoin_envie/img-2.webp',
      'projets/besoin_envie/img-3.webp',
      'projets/besoin_envie/img-4.webp',
      'projets/besoin_envie/img-5.webp',
      'projets/besoin_envie/img-6.webp',
      'projets/besoin_envie/img-7.webp',
    ],

    projet13: [
      'projets/hem/img_1.webp',
      'projets/hem/img_2.webp',
      'projets/hem/img_3.webp',
      'projets/hem/img_4.webp',
      'projets/hem/img_5.webp',
      'projets/hem/img_6.webp',
    ],

    projet12: [
      'projets/font/img_1.webp',
      'projets/font/img_2.webp',
      'projets/font/img_3.webp',
      'projets/font/img_4.webp',
      'projets/font/img_5.webp',
      'projets/font/img_6.webp',
    ],
    projet11: [
      'projets/fouillegeo/img_1.webp',
      'projets/fouillegeo/img_2.webp',
      'projets/fouillegeo/img_3.webp',
      'projets/fouillegeo/img_4.webp',
      'projets/fouillegeo/img_5.webp',
      'projets/fouillegeo/img_6.webp',
      'projets/fouillegeo/img_7.webp',
    ],

    projet10: [
      'projets/13_du_mois/img_1.webp',
      'projets/13_du_mois/img_2.webp',
      'projets/13_du_mois/img_3.webp',
      'projets/13_du_mois/img_4.webp',
      'projets/13_du_mois/img_5.webp',
      'projets/13_du_mois/img_6.webp',
      'projets/13_du_mois/img_7.webp',
    ],

    projet9: [
      'projets/pot_series/video_1.webm',
      'projets/pot_series/video_2.webm',
      'projets/pot_series/video_3.webm',
      'projets/pot_series/video_4.webm'
    ],
    projet8: [
      'projets/lego/video_1.webm',
      'projets/lego/video_2.webm',
      'projets/lego/video_3.webm',
      'projets/lego/video_4.webm'
    ],
    projet7: [
      'projets/severance/video_1.webm',
      'projets/severance/video_2.webm',
      'projets/severance/video_3.webm',
      'projets/severance/video_4.webm'
    ],
    projet6: [
      'projets/gargalou/img_1.webp',
      'projets/gargalou/img_2.webp',
      'projets/gargalou/img_3.webp',
      'projets/gargalou/img_4.webp',
      'projets/gargalou/img_5.webp'
    ],
    projet5: [
      'projets/clay/video_1.webm',
      'projets/clay/video_2.webm'
    ],
    projet4: [
      'projets/sport/img_1.webp',
      'projets/sport/img_2.webp',
      'projets/sport/img_3.webp',
      'projets/sport/img_4.webp',
      'projets/sport/img_5.webp'
    ],
    projet3: [
      'projets/lucitron/img_1.webp',
      'projets/lucitron/video_2.webm',
      'projets/lucitron/img_2.webp',
      'projets/lucitron/video_1.webm'
      
    ],
    projet2: [
      'projets/honeygrapes/video_1.webm'
    ],
    projet1: [
      'projets/fournil/img_1.webp',
      'projets/fournil/img_2.webp',
      'projets/fournil/img_3.webp',
      'projets/fournil/img_4.webp',
      'projets/fournil/img_5.webp'
    ],
    projet0: [
      'projets/radiants/theo.webp',
      'projets/radiants/hugo.webp'
    ],
  };

  // 3. Charge et affiche les médias (shuffled + rotation)
  const loadProjectMedias = (projectId) => {
    if (currentProject === projectId) return;
    currentProject = projectId;
    pile.innerHTML = '';
    if (placeholder) placeholder.style.display = 'none';

    const allMedias = projects[projectId] || [];
    const validMedias = allMedias.filter(src => /\.(webm|webp)$/i.test(src));
    const shuffled = validMedias.sort(() => Math.random() - 0.5);

    shuffled.forEach(src => {
      let element;
      if (/\.webm$/i.test(src)) {
        element = document.createElement('video');
        element.src = src;
        element.loop = true;
        element.autoplay = true;
        element.muted = true;
        element.draggable = false;
        element.setAttribute('playsinline', '');
      } else {
        element = document.createElement('img');
        element.src = src;
        element.draggable = false;
        element.alt = 'Image du projet';
      }

      // Rotation aléatoire initiale entre -15° et +15°
      const angle = randomBetween(-10, 10);
      element.style.transform = `rotate(${angle}deg)`;

      pile.appendChild(element);
    });
  };

  // 4. Interaction : survol des items de la liste pour charger un projet
  document.querySelectorAll('.projets li').forEach(li => {
    li.addEventListener('mouseenter', () => {
      loadProjectMedias(li.getAttribute('data-projet'));
    });
  });

  // 5. Interaction : clic gauche → pile à gauche, clic droit → pile à droite
pile.addEventListener('click', () => {
  const firstMedia = pile.querySelector('img, video');
  if (!firstMedia) return;
  const angle = randomBetween(-10, 10);
  firstMedia.style.transform = `rotate(${angle}deg)`;
  pile.appendChild(firstMedia); // vers la droite (fin de pile)
});

pile.addEventListener('contextmenu', (e) => {
  e.preventDefault(); // empêche le menu contextuel
  const medias = pile.querySelectorAll('img, video');
  if (medias.length === 0) return;
  const lastMedia = medias[medias.length - 1];
  const angle = randomBetween(-10, 10);
  lastMedia.style.transform = `rotate(${angle}deg)`;
  pile.prepend(lastMedia); // vers la gauche (début de pile)
});


  // 6. Chargement par défaut du projet Radiant
  loadProjectMedias('projet0');
});
