import initNavigation from './navigation.js';
import initLazyImages from './lazy-images.js';

const initMobileMapTwoFingerMode = () => {
  const mapIframe = document.querySelector('.location__map-iframe');

  if (!mapIframe) {
    return;
  }

  const mapWrap = mapIframe.closest('.location__map-wrap');

  if (!mapWrap) {
    return;
  }

  const mobileQuery = window.matchMedia('(max-width: 900px)');
  let unlockTimer = null;

  const lockMap = () => {
    if (mobileQuery.matches) {
      mapIframe.style.pointerEvents = 'none';
    } else {
      mapIframe.style.pointerEvents = 'auto';
    }
  };

  const unlockMapTemporarily = () => {
    mapIframe.style.pointerEvents = 'auto';
    window.clearTimeout(unlockTimer);
    unlockTimer = window.setTimeout(lockMap, 5000);
  };

  mapWrap.addEventListener(
    'touchstart',
    (event) => {
      if (!mobileQuery.matches) {
        return;
      }

      if (event.touches.length >= 2) {
        unlockMapTemporarily();
      }
    },
    { passive: true }
  );

  mobileQuery.addEventListener('change', lockMap);
  lockMap();
};

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initLazyImages();
  initMobileMapTwoFingerMode();
});
