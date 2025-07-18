document.addEventListener('DOMContentLoaded', () => {
  const pile = document.querySelector('.pile-images');
  const placeholder = document.querySelector('.placeholder');

  // Définition des projets avec leurs médias associés (uniquement .webm et .webp)
  const projects = {
    projet6: ['projets/severance/video_1.webm', '', ''],
    projet5: ['projets/gargaloup/img_1.webp', 'projets/gargaloup/img_2.webp', 'projets/gargaloup/img_3.webp','projets/gargaloup/img_4.webp', 'projets/gargaloup/img_5.webp'],
    projet4: ['projets/sport/img_1.webp', 'projets/sport/img_2.webp', 'projets/sport/img_3.webp', 'projets/sport/img_4.webp', 'projets/sport/img_5.webp'],
    projet3: ['projets/lucittron/img_3.webp', 'projets/lucittron/img_2.webp'],
    projet2: ['', '', ''],
    projet1: ['projets/fournil/img_1.webp', 'projets/fournil/img_2.webp', 'projets/fournil/img_3.webp', 'projets/fournil/img_4.webp', 'projets/fournil/img_5.webp'],
  };

  // Rotations fixes pour chaque média de chaque projet (valeurs en degrés)
  const fixedRotations = {
    projet6: [],
    projet5: [-10, 5, 20, -5 , 10],
    projet4: [-10, 5, 20, -5 , 10],
    projet3: [70, 12, 7],
    projet2: [],
    projet1: [-10, 5, 20, -5 , 10],
  };

  // Charge les médias d'un projet en ne gardant que .webm et .webp
  const loadProjectMedias = (projectId) => {
    pile.innerHTML = '';
    if (placeholder) placeholder.style.display = 'none';

    const medias = projects[projectId] || [];
    medias.forEach((src, index) => {
      // Ne traiter que les .webm et .webp
      if (!/\.(webm|webp)$/i.test(src)) return;

      let element;
      if (/\.webm$/i.test(src)) {
        element = document.createElement('video');
        element.src = src;
        element.controls = false;
        element.loop = true;
        element.autoplay = true;
        element.muted = true;
        element.setAttribute('playsinline', '');
      } else {
        element = document.createElement('img');
        element.src = src;
        element.alt = 'Image du projet';
      }

      // Appliquer la rotation fixe
      const rotations = fixedRotations[projectId] || [];
      const angle = rotations[index] || 0;
      element.style.transform = `rotate(${angle}deg)`;

      pile.appendChild(element);
    });
  };

  // Survol des projets
  document.querySelectorAll('.projets li').forEach(li => {
    li.addEventListener('mouseover', () => {
      loadProjectMedias(li.getAttribute('data-projet'));
    });
  });

  // Clic pour faire tourner aléatoirement et remonter la première image/vidéo
  pile.addEventListener('click', () => {
    const firstMedia = pile.querySelector('img, video');
    if (!firstMedia) return;
    // Générer un angle aléatoire entre -20 et 20 degrés
    const randomAngle = Math.floor(Math.random() * 41) - 20;
    firstMedia.style.transform = `rotate(${randomAngle}deg)`;
    // Remettre l'élément en fin de pile
    pile.appendChild(firstMedia);
  });
});
