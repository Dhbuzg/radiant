document.addEventListener('DOMContentLoaded', () => {
  const pile = document.querySelector('.pile-images');
  const placeholder = document.querySelector('.placeholder');
  let currentProject = null;

  // Définition des projets avec leurs médias associés (uniquement .webm et .webp)
  const projects = {
    projet6: ['projets/severance/video_1.webm', 'projets/severance/video_2.webm'],
    projet5: ['projets/gargaloup/img_1.webp', 'projets/gargaloup/img_2.webp', 'projets/gargaloup/img_3.webp','projets/gargaloup/img_4.webp', 'projets/gargaloup/img_5.webp'],
    projet4: ['projets/sport/img_1.webp', 'projets/sport/img_2.webp', 'projets/sport/img_3.webp', 'projets/sport/img_4.webp', 'projets/sport/img_5.webp'],
    projet3: ['projets/lucitron/img_1.webp', 'projets/lucitron/img_2.webp'],
    projet2: ['', '', ''],
    projet1: ['projets/fournil/img_1.webp', 'projets/fournil/img_2.webp', 'projets/fournil/img_3.webp', 'projets/fournil/img_4.webp', 'projets/fournil/img_5.webp'],
    projet0: ['projets/radiant/theo.webp','projets/radiant/hugo.webp'],
  };

  // Rotations fixes pour chaque média de chaque projet (valeurs en degrés)
  const fixedRotations = {
    projet6: [-10, 5, 20],
    projet5: [-10, 5, 20, -5 , 10],
    projet4: [-10, 5, 20, -5 , 10],
    projet3: [70, 12, 7],
    projet2: [-10, 5, 20],
    projet1: [-10, 5, 20, -5 , 10],
  };

  // Fonction de chargement des médias mélangés
    const loadProjectMedias = (projectId) => {
    if (currentProject === projectId) return;
    currentProject = projectId;
    pile.innerHTML = '';
    if (placeholder) placeholder.style.display = 'none';

    // Filtrer d'abord les sources valides puis mélanger
    const allMedias = projects[projectId] || [];
    const validMedias = allMedias.filter(src => /(\.webm|\.webp)$/i.test(src));
    const shuffled = validMedias.slice().sort(() => Math.random() - 0.5);

    shuffled.forEach(src => {
      let element;
      if (/\.webm$/i.test(src)) {
        element = document.createElement('video');
        element.src = src;
        element.loop = true;
        element.autoplay = true;
        element.muted = true;
        element.setAttribute('playsinline', '');
      } else {
        element = document.createElement('img');
        element.src = src;
        element.alt = 'Image du projet';
      }

      // Rotation aléatoire initiale
      const randomAngle = Math.floor(Math.random() * 41) - 20;
      element.style.transform = `rotate(${randomAngle}deg)`;

      pile.appendChild(element);
    });
  };

  // Survol avec mouseenter pour éviter les rechargements multiples
  document.querySelectorAll('.projets li').forEach(li => {
    li.addEventListener('mouseenter', () => {
      loadProjectMedias(li.getAttribute('data-projet'));
    });
  });

  // Clic : tourner aléatoirement et repousser en fin de pile
  pile.addEventListener('click', () => {
    const firstMedia = pile.querySelector('img, video');
    if (!firstMedia) return;
    const randomAngle = Math.floor(Math.random() * 41) - 20;
    firstMedia.style.transform = `rotate(${randomAngle}deg)`;
    pile.appendChild(firstMedia);
  });

  // Charger par défaut le projet Radiant (ex: "projet1")
  loadProjectMedias('projet0');
});
