const currentPath = window.location.pathname;

document.querySelectorAll("[data-route]").forEach((link) => {
  const route = link.dataset.route;
  const isCurrent = route === "/" ? currentPath === "/" : currentPath.startsWith(route);

  if (isCurrent) {
    link.classList.add("is-active");
    link.setAttribute("aria-current", "page");
  }
});
