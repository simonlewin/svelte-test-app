const backgrounds = ['galaxy', 'iss', 'space', 'moon'];

export const getBackgroundImage = id => {
  return `background-image: url(/assets/images/${
    backgrounds[Number(id) % backgrounds.length]
  }.jpg)`;
};
