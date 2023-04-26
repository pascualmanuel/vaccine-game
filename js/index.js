window.onload = () => {
  // const font = new FontFace(
  //   "PermanentMarker",
  //   "url(./css/PermanentMarker-Regular.ttf)"
  // );

  const font = new FontFace("GameFont", "url(./css/Game-Font.ttf)");

  font.load().then((loadedFont) => {
    document.fonts.add(loadedFont);

    // Initialize and start your game after the font is loaded
    covidGame.init();
  });
};
