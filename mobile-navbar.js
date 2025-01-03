class MobileNavbar {
  constructor () {
    this.mobilemenu = document.querySelector (mobilemenu);
    this.navlist = document.querySelector (navlist);
    this.navlinks = document.querySelectorAll (navlinks);
    this.activeClass = "active";
  }

  addClickEvent () {
    this.mobilemenu.addEventListener("click", () => console.log())
  }
}