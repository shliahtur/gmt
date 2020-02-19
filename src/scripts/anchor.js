
const setAnchors = () =>{
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
    animationTime = 300,
    framesCount = 20;
anchors.forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        let el = document.querySelector(item.getAttribute("href"))
        console.log(item.getAttribute("href"))
        let coordY = el && el.getBoundingClientRect().top;
        let scroller = setInterval(function () {
            let scrollBy = coordY / framesCount;

            if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                window.scrollBy(0, scrollBy);
            } else {
                window.scrollTo(0, coordY);
                clearInterval(scroller);
            }
        }, animationTime / framesCount);
    });
});
}
export default setAnchors;
