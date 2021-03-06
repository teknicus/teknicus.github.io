function fun1() {
    var x = document.getElementById('title-card');
    var y1 = document.getElementById('initHide1');
    var y2 = document.getElementById('initHide2');
    var z = document.getElementById('bodyDiv');
    x.style.opacity = "0";
    y1.style.opacity = '1';
    y2.style.opacity = '1';
    x.style.animation = "slideup 2000ms";

    z.innerHTML = "<div class='head-banner-shadow initHide'> <div class='head-banner' id='initHide2'> abc </div></div>"

}



particlesJS("particles-js", {
    particles: {
        number: {
            value: 150,
            density: {
                enable: !0,
                value_area: 800
            }
        },
        color: {
            value: "#000000"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: .5,
            random: !1,
            anim: {
                enable: !1,
                speed: 3,
                opacity_min: .1,
                sync: !1
            }
        },
        size: {
            value: 5,
            random: !0,
            anim: {
                enable: !1,
                speed: 40,
                size_min: .1,
                sync: !1
            }
        },
        line_linked: {
            enable: !0,
            distance: 150,
            color: "#888",
            opacity: .4,
            width: 1
        },
        move: {
            enable: !0,
            speed: 6,
            direction: "none",
            random: !1,
            straight: !1,
            out_mode: "out",
            attract: {
                enable: !1,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: !0,
                mode: "repulse"
            },
            onclick: {
                enable: !0,
                mode: "push"
            },
            resize: !0
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: !0,
    config_demo: {
        hide_card: !1,
        background_color: "#b61924",
        background_image: "",
        background_position: "50% 50%",
        background_repeat: "no-repeat",
        background_size: "cover"
    }
})





console.log("loaded");