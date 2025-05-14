// src/composables/useCustomCursor.js
export function useCustomCursor() {
    const initCustomCursor = () => {
        // Cacher le curseur par défaut
        document.body.style.cursor = 'none';
    
        // Créer un élément div pour le curseur personnalisé
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.position = 'fixed';
        cursor.style.pointerEvents = 'none';
        cursor.style.width = '32px';  // Ajuster selon la taille de ton image
        cursor.style.height = '32px';  // Ajuster selon la taille de ton image
        cursor.style.backgroundImage = 'url(/img/cursor.png)'; // Chemin vers ton image
        cursor.style.backgroundSize = 'contain';
        cursor.style.backgroundRepeat = 'no-repeat';
        cursor.style.zIndex = '9999';
        cursor.style.transform = 'translate(-50%, -50%)'; // Centrer le curseur
        document.body.appendChild(cursor);

        // Mettre à jour la position du curseur lors du déplacement de la souris
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // Agrandir le curseur lorsque la souris est sur un élément cliquable
        document.addEventListener('mouseover', (e) => {
            if (e.target.tagName.toLowerCase() === 'a' || 
                e.target.tagName.toLowerCase() === 'button' ||
                e.target.hasAttribute('role') && e.target.getAttribute('role') === 'button' ||
                e.target.classList.contains('clickable')) {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                e.target.style.cursor = 'none'; // Masquer le curseur par défaut sur les éléments cliquables
            }
        });

        // Rétablir la taille du curseur quand la souris quitte un élément cliquable
        document.addEventListener('mouseout', (e) => {
            if (e.target.tagName.toLowerCase() === 'a' || 
                e.target.tagName.toLowerCase() === 'button' ||
                e.target.hasAttribute('role') && e.target.getAttribute('role') === 'button' ||
                e.target.classList.contains('clickable')) {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            }
        });
    };

    return {
        initCustomCursor
    };
}
