// navbar start
{
  let btn = document.getElementById('menu-showHide-button');
  let navbarBrand = document.getElementsByClassName('navbar-brand')[0];
  let menu = document.getElementsByClassName('navbar-nav')[0];
  
  
  btn.addEventListener('click', () => {
    navbarBrand.classList.toggle('navbar-brand-left');
    menu.classList.toggle('navbar-nav-show');
  })
}
// navbar end


// banner slider start
$('.banner-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  prevArrow: `<button type='button' class='slick-prev text-white'><span><i class="fas fa-angle-left"></i></span></button>`,
  nextArrow: `<button type='button' class='slick-next text-white'><span><i class="fas fa-angle-right"></i></span></button>`,
});
// banner slider end
