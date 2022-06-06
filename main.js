const get = (target) => document.querySelector(target);

window.addEventListener("DOMContentLoaded", () => {
  get("#container").addEventListener("click", (e) => {
    if (e.target.tagName == "LI") {
      let target = get(e.target.getAttribute("linked-section")).offsetTop;

      scroll({
        behavior: "smooth",
        top: target,
      });
    }
  });

  get("#url").setAttribute("content", window.location);
});
