{
  const button = document.querySelector(".main__button");
  const caption = document.querySelector(".table__caption");
  const facebook_icon = document.querySelector("#facebook_icon");
  const twitter_icon = document.querySelector("#twitter_icon");
  const instagram_icon = document.querySelector("#instagram_icon");
  const youtube_icon = document.querySelector("#youtube_icon");

  const welcome = () => {
    console.log("Cześć !, Witam wszystkich bardzo serdecznie :) ");
  };

  scrollPage = () => {
    window.scrollTo(0, 0);
  };

  const changeCaptionSide = () => {
    caption.style.captionSide === "bottom"
      ? (caption.style.captionSide = "top")
      : (caption.style.captionSide = "bottom");
  };

  const facebookIconOpacityMouseoverChange = () => {
    facebook_icon.style.opacity = "100%";
  };

  const facebookIconOpacityMousoutChange = () => {
    facebook_icon.style.opacity = "30%";
  };

  const twitterIconOpacityMouseoverChange = () => {
    twitter_icon.style.opacity = "100%";
  };

  const twitterIconOpacityMousoutChange = () => {
    twitter_icon.style.opacity = "30%";
  };

  const instagramIconOpacityMouseoverChange = () => {
    instagram_icon.style.opacity = "100%";
  };

  const instagramIconOpacityMouseoutChange = () => {
    instagram_icon.style.opacity = "30%";
  };

  const youtubeIconOpacityMouseoverChange = () => {
    youtube_icon.style.opacity = "100%";
  };

  const youtubeIconOpacityMouseoutChange = () => {
    youtube_icon.style.opacity = "30%";
  };

  const init = () => {
    const li_facebook = document.querySelector("#facebook");
    const li_twitter = document.querySelector("#twitter");
    const li_instagram = document.querySelector("#instagram");
    const li_youtube = document.querySelector("#youtube");

    welcome();

    button.addEventListener("click", scrollPage);

    caption.addEventListener("click", changeCaptionSide);

    li_facebook.addEventListener(
      "mouseover",
      facebookIconOpacityMouseoverChange
    );

    li_facebook.addEventListener("mouseout", facebookIconOpacityMousoutChange);

    li_twitter.addEventListener("mouseover", twitterIconOpacityMouseoverChange);

    li_twitter.addEventListener("mouseout", twitterIconOpacityMousoutChange);

    li_instagram.addEventListener(
      "mouseover",
      instagramIconOpacityMouseoverChange
    );

    li_instagram.addEventListener(
      "mouseout",
      instagramIconOpacityMouseoutChange
    );

    li_youtube.addEventListener("mouseover", youtubeIconOpacityMouseoverChange);

    li_youtube.addEventListener("mouseout", youtubeIconOpacityMouseoutChange);
  };

  init();
}
