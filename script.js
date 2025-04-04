document.addEventListener('DOMContentLoaded', () => {
  const pile = document.querySelector('.pile-images');
  const placeholder = document.querySelector('.placeholder');

  // Définition des projets avec leurs médias associés
  const projects = {
    projet1: ['projets/image1.jpg', 'projets/image2.jpg', 'projets/image3.jpg'],
    projet2: ['projets/lucittron/img_3.webp', 'projets/lucittron/img_2.webp'],
    projet3: ['']
  };

  // Rotations fixes pour chaque média de chaque projet (les valeurs sont en degrés)
  const fixedRotations = {
    projet1: [-10, 5, 15],
    projet2: [10, -5, 0],
    projet3: [-20, 12, 7]
  };

  // Fonction qui charge les médias d'un projet avec les rotations fixes
  const loadProjectMedias = (projectId) => {
    pile.innerHTML = '';
    if (placeholder) {
      placeholder.style.display = 'none';
    }

    const medias = projects[projectId] || [];
    medias.forEach((src, index) => {
      let element;
      if (src.endsWith('.mp4')) {
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
        element.alt = "Image du projet";
      }
      // Utilisation des rotations fixes définies pour ce projet
      const angle = fixedRotations[projectId][index];
      element.style.transform = `rotate(${angle}deg)`;
      pile.appendChild(element);
    });
  };

  // Afficher les médias au survol du projet
  const projectListItems = document.querySelectorAll('.projets li');
  projectListItems.forEach(li => {
    li.addEventListener('mouseover', () => {
      const projectId = li.getAttribute('data-projet');
      loadProjectMedias(projectId);
    });
  });

  // Faire remonter le média du haut à la fin de la pile au clic
  pile.addEventListener('click', () => {
    const firstMedia = pile.querySelector('img, video');
    if (firstMedia) {
      pile.appendChild(firstMedia);
    }
  });
});
