const addToggleMenu = () => {
  const OPENED_CLASS = 'is-opened';
  const root = document.querySelector('.header');
  const toggle = root.querySelector('.toggle');
  const nav = root.querySelector('.nav');

  const onDocumentKeydown = (evt) => {
    return evt.key === 'Escape' ? closeMenu() : null;
  };

  const isMenu = (evt) => {
    return (evt.target.closest('.header') && evt.target.closest('.toggle') || evt.target.closest('.nav')) ? evt.preventDefault() : closeMenu();
  };

  const openMenu = () => {
    root.classList.add(OPENED_CLASS);
    toggle.classList.add(OPENED_CLASS);
    nav.classList.add(OPENED_CLASS);
    document.addEventListener('keydown', onDocumentKeydown);
    document.addEventListener('click', isMenu);
    window.scrollLock.disableScrolling();
    document.addEventListener('click', onDocumentOutside);
  };

  const closeMenu = () => {
    root.classList.remove(OPENED_CLASS);
    toggle.classList.remove(OPENED_CLASS);
    nav.classList.remove(OPENED_CLASS);
    document.removeEventListener('keydown', onDocumentKeydown);
    document.removeEventListener('click', isMenu);
    window.scrollLock.enableScrolling();
    document.removeEventListener('click', onDocumentOutside);
  };

  const onDocumentOutside = (evt) => {
    if (evt.target === root || root.contains(evt.target)) {
      return;
    } else {
      closeMenu();
    }
  };
  toggle.addEventListener('click', () => {
    return !toggle.classList.contains(OPENED_CLASS) ? openMenu() : closeMenu();
  });
};

export {addToggleMenu};
