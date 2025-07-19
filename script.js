document.addEventListener('DOMContentLoaded', () => {
  const pile = document.querySelector('.pile-images');
  const placeholder = document.querySelector('.placeholder');
  let currentProject = null;

  // 1. Générateur de nombre aléatoire (float) entre min et max
  const randomBetween = (min, max) => Math.random() * (max - min) + min;

  // 2. Définition des projets et de leurs médias (.webm / .webp)
  const projects = {
    projet7: [
      'projets/severance/video_1.webm',
      'projets/severance/video_2.webm',
      'projets/severance/video_3.webm'
    ],
    projet6: [
      'projets/gargaloup/img_1.webp',
      'projets/gargaloup/img_2.webp',
      'projets/gargaloup/img_3.webp',
      'projets/gargaloup/img_4.webp',
      'projets/gargaloup/img_5.webp'
    ],
    projet5: [
      'projets/clay/video_1.webm'
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
      'projets/radiant/theo.webp',
      'projets/radiant/hugo.webp'
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

  // 5. Interaction : au clic, on fait tourner le premier média puis on le met en fin de pile
  pile.addEventListener('click', () => {
    const firstMedia = pile.querySelector('img, video');
    if (!firstMedia) return;
    const angle = randomBetween(-10, 10);
    firstMedia.style.transform = `rotate(${angle}deg)`;
    pile.appendChild(firstMedia);
  });

  // 6. Chargement par défaut du projet Radiant
  loadProjectMedias('projet0');
});
