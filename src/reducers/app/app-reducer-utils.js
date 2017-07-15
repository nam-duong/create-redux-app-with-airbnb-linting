const titleList = [
  'Welcome to React with Redux and Airbnb ESlint preconfigured!',
  'Lorem Ipsum.',
];

export const changeTitle = (state) => {
  if (!state.title.includes('Redux')) {
    return { ...state, title: titleList[0] };
  } else {
    return { ...state, title: titleList[1] };
  }
};
