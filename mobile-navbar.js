class MobileNavbar {
  constructor(mobilemenu, navlist, navlinks) {
    this.mobilemenu = document.querySelector(mobilemenu);
    this.navlist = document.querySelector(navlist);
    this.navlinks = document.querySelectorAll(navlinks);
    this.activeClass = "active";

    this.handleClik = this.handleClik.bind(this);

  }

  animateLinks() {
    this.navlinks.forEach((link, index) => {
      link.style.animation
      ? (link.style.animation = "")
      : (link.style.animation = `navLinkFade 0.5 ease forwards $ { indez / 7 + 0.3}s`)
    });
  }

  handleClik () {
    this.navlist.classList.toggle(this.activeClass);
    this.mobilemenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobilemenu.addEventListener("click", this.handleClik);
  }

  init() {
    console.log(this.mobilemenu)
    if (this.mobilemenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();
