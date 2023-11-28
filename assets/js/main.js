const lenis = new Lenis();

gsap.registerPlugin(CustomEase);
lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);
/*************************************************/

// header
$("[data-menu]").each(function () {
    $(this).click(function (e) {
        e.preventDefault();
        var dataValue = $(this).data("menu");
        scrollToMenu(dataValue);
        $(this).addClass("on").siblings().removeClass("on");
    });
});

function scrollToMenu(menuSelector) {
    var conHeight = $(menuSelector).offset().top;
    console.log(menuSelector);
    $("html, body").animate({ scrollTop: conHeight }, 500);
}

// sc-main

var mainTl = gsap.timeline({});

setTimeout(() => {
    $(".loading").addClass("on");
}, 1000);

const headTxt = new SplitType(".sc-main .text-area", { types: "words, chars" });

gsap.from(".sc-main .text-area .char", {
    yPercent: 100,
    stagger: {
        from: "random",
        each: 0.1,
    },
});

gsap.registerPlugin(ScrollTrigger);

let barm = gsap.matchMedia();
barm.add("(max-width: 1920px)", () => {
    gsap.to(".sc-main .main-video .bar", {
        scrollTrigger: {
            trigger: ".sc-main .main-video",
            start: "0% 20%",
            end: "100% 0%",
            scrub: 0,
            // markers: true,
        },
        height: "100%",
        stagger: {
            from: "random",
            each: 0.1,
        },
    });
});

$(".project-wrap .project-item a").hover(
    function (e) {
        gsap.to($(this), {
            "--height": "100%",
        });
    },
    function () {
        gsap.to($(this), {
            "--height": "0%",
        });
    }
);

$(".textModul").hover(
    function (e) {
        e.preventDefault();

        var hoverTimeline = gsap.timeline();

        hoverTimeline.to($(this).find("span"), {
            fontWeight: "700",
            stagger: {
                amount: 0.5,
            },
        });

        hoverTimeline.play();

        $(this).data("hoverTimeline", hoverTimeline);
    },
    function (e) {
        e.preventDefault();

        var hoverTimeline = $(this).data("hoverTimeline");

        if (hoverTimeline) {
            hoverTimeline.kill();
        }

        gsap.to($(this).find("span"), {
            fontWeight: "400",
            stagger: {
                amount: 1,
            },
        });
    }
);

//sc-project

const proTxt2 = new SplitType(".sc-project .left .text-box .top .title", {
    types: "words, chars",
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".sc-project .left .top .title .char", {
    yPercent: 100,
    stagger: {
        from: "first",
        each: 0.1,
    },
    scrollTrigger: {
        trigger: ".sc-project",
        start: "0% 50%",
        end: "100% 50%",
        toggleActions: "play reverse restart reverse",
    },
});

//.sc-im
const imgTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".sc-im",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 0,
    },

    ease: "none",
});

imgTl.from(".sc-im .img-wrap .img-area .img-box div", {
    opacity: 0,
    stagger: 0.1,
    ease: "none",
});

imgTl.to(
    ".sc-im .img-wrap .img-area .img-box div",
    {
        opacity: 0,
        transform: "translate3d(0px, 0px, 50vw) ",
        stagger: 0.1,
        ease: "none",
    },
    "a+=0.01"
);

const imTxt = new SplitType(".sc-im .text-box .title", {
    types: "words, chars",
});
imgTl.to(".sc-im .text-box .title .word:first-child .char:last-child", 2, {
    scale: 150,
});

// .sc-contact
ScrollTrigger.create({
    trigger: ".bg-switch",
    start: "80% 0%",
    end: "100% 50%",
    markers: true,
    toggleClass: { targets: "body", className: "dark" },
});

gsap.to(".sc-contact .text-box", {
    scrollTrigger: {
        trigger: ".sc-contact",
        start: "0% 50%",
        end: "100% 100%",
        scrub: 1,
        // markers: true,
    },
    opacity: 1,
});
