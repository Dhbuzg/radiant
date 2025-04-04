'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const pile = document.querySelector('.pile-images');
  const placeholder = document.querySelector('.placeholder');

  // Définition des projets avec leurs médias et rotations associés
  const projects = {
    projet1: {
      medias: ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg'],
      rotations: [-10, 5, 15]
    },
    projet2: {
      medias: ['images/image4.jpg', 'images/image5.jpg', 'images/image6.jpg'],
      rotations: [10, -5, 0]
    },
    projet3: {
      medias: ['videos/video1.mp4', 'videos/video2.mp4', 'videos/video3.mp4',],
      rotations: [-20, 12, 7]
    }
  };

  // Stocker le projet actuellement affiché pour éviter des rechargements inutiles
  let currentProject = null;

  // Fonction qui charge les médias d'un projet
  const loadProjectMedias = (projectId) => {
    if (currentProject === projectId) return; // Pas de rechargement si le projet est déjà affiché
    currentProject = projectId;

    // Vider la pile et masquer le placeholder
    pile.innerHTML = '';
    if (placeholder) {
      placeholder.style.display = 'none';
    }

    const project = projects[projectId];
    if (!project) return;
    const { medias, rotations } = project;

    medias.forEach((src, index) => {
      let element;
      if (src.toLowerCase().endsWith('.mp4')) {
        element = document.createElement('video');
        element.src = src;
        element.controls = false;
        element.loop = true;
        element.autoplay = true;
        element.muted = true;
        element.setAttribute('playsinline', '');
        element.preload = 'auto';
      } else {
        element = document.createElement('img');
        element.src = src;
        element.alt = "Image du projet";
      }
      // Appliquer la rotation définie pour ce média
      const angle = rotations[index] !== undefined ? rotations[index] : 0;
      element.style.transform = `rotate(${angle}deg)`;
      pile.appendChild(element);
    });
  };

  // Utilisation de la délégation d'événements pour le survol des projets
  const projectList = document.querySelector('.projets');
  if (projectList) {
    projectList.addEventListener('mouseover', (event) => {
      const li = event.target.closest('li');
      if (li && projectList.contains(li)) {
        const projectId = li.getAttribute('data-projet');
        if (projectId) {
          loadProjectMedias(projectId);
        }
      }
    });
  }

  // Permettre de faire remonter le média du haut à la fin de la pile au clic
  pile.addEventListener('click', () => {
    const firstMedia = pile.querySelector('img, video');
    if (firstMedia) {
      pile.appendChild(firstMedia);
    }
  });
});
