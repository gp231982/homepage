console.log(
  "Cześć !, przesyłam pracę z modułu czwartego i proszę o uwagi i wskazówki :) "
);

let button = document.querySelector(".main__button");
let caption = document.querySelector(".section__caption");
let li_facebook = document.querySelector("#facebook");
let li_twitter = document.querySelector("#twitter");
let li_instagram = document.querySelector("#instagram");
let li_youtube = document.querySelector("#youtube");
let facebook_icon = document.querySelector("#facebook_icon");
let twitter_icon = document.querySelector("#twitter_icon");
let instagram_icon = document.querySelector("#instagram_icon");
let youtube_icon = document.querySelector("#youtube_icon");

button.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

caption.addEventListener("click", () => {
  caption.style.captionSide === "bottom"
    ? (caption.style.captionSide = "top")
    : (caption.style.captionSide = "bottom");
});

li_facebook.addEventListener("mouseover", (e) => {
  facebook_icon.style.opacity = "100%";
});

li_facebook.addEventListener("mouseout", () => {
  facebook_icon.style.opacity = "30%";
  
});

li_twitter.addEventListener("mouseover", (e) => {
  twitter_icon.style.opacity = "100%";
  
});

li_twitter.addEventListener("mouseout", () => {
  twitter_icon.style.opacity = "30%";
  
});

li_instagram.addEventListener("mouseover", (e) => {
  instagram_icon.style.opacity = "100%";
  
});

li_instagram.addEventListener("mouseout", () => {
  instagram_icon.style.opacity = "30%";
  
});

li_youtube.addEventListener("mouseover", (e) => {
  youtube_icon.style.opacity = "100%";
  
});

li_youtube.addEventListener("mouseout", () => {
  youtube_icon.style.opacity = "30%";
  
});
