const video = document.querySelector('.video__content');
const videoButton = document.querySelector('.video__button');

const workVideo = () => {
  if (document.querySelector('.video')) {
    videoButton.addEventListener('click', () => {
      videoButton.classList.add('visually-hidden');
      video.setAttribute('controls', 'controls');
      video.play();
    });
  }
};

export {workVideo};
