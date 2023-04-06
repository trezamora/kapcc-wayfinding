// SCROLL TRIGGER ANIMATION
// CHANGE ACTIVE STATE FOR ALL SECTIONS WITH INTERSECTION OBSERVER

const myobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.setAttribute("data-sectionstate", "active");
        } else {
            entry.target.setAttribute("data-sectionstate", "inactive");
        }
    });
});


document.querySelectorAll(".animate-on-scroll").forEach((section) => {
    myobserver.observe(section);
});

// FULLPAGE INIT
new fullpage('#fullpage', {
    licenseKey: 'gplv3-license'
});

new fullpage('#fullpage', {
    //options here
    scrollingSpeed: 700,
    autoScrolling: true,
    navigation: true,
});
