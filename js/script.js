// =============================================
// GALICIA WHOOP LEAGUE
// CUENTA ATRÁS - MARIN GAMING 2026
// =============================================


// Elementos del contador
const daysElement =
    document.getElementById("days");

const hoursElement =
    document.getElementById("hours");

const minutesElement =
    document.getElementById("minutes");

const secondsElement =
    document.getElementById("seconds");


// Solo ejecutar el contador si existe en la página
if (
    daysElement &&
    hoursElement &&
    minutesElement &&
    secondsElement
) {

    // Fecha de inicio del evento
    const raceDate = new Date(
        "2026-12-05T10:00:00+01:00"
    ).getTime();


    // Actualizar contador
    function updateCountdown() {

        const now =
            new Date().getTime();

        const distance =
            raceDate - now;


        // Si todavía no ha llegado el evento
        if (distance > 0) {

            const days =
                Math.floor(
                    distance /
                    (1000 * 60 * 60 * 24)
                );


            const hours =
                Math.floor(
                    (
                        distance %
                        (1000 * 60 * 60 * 24)
                    ) /
                    (1000 * 60 * 60)
                );


            const minutes =
                Math.floor(
                    (
                        distance %
                        (1000 * 60 * 60)
                    ) /
                    (1000 * 60)
                );


            const seconds =
                Math.floor(
                    (
                        distance %
                        (1000 * 60)
                    ) /
                    1000
                );


            daysElement.innerText =
                String(days).padStart(2, "0");


            hoursElement.innerText =
                String(hours).padStart(2, "0");


            minutesElement.innerText =
                String(minutes).padStart(2, "0");


            secondsElement.innerText =
                String(seconds).padStart(2, "0");

        } else {

            // Si ya llegó la fecha
            daysElement.innerText = "00";
            hoursElement.innerText = "00";
            minutesElement.innerText = "00";
            secondsElement.innerText = "00";

        }

    }


    // Ejecutar inmediatamente
    updateCountdown();


    // Actualizar cada segundo
    setInterval(
        updateCountdown,
        1000
    );

}



// =============================================
// ANIMACIONES AL HACER SCROLL
// =============================================

const revealElements =
    document.querySelectorAll(
        ".scroll-reveal"
    );


if (
    revealElements.length > 0 &&
    "IntersectionObserver" in window
) {

    const revealObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                });

            },

            {
                threshold: 0.15
            }

        );


    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });

}



// =============================================
// CONTADORES ANIMADOS
// =============================================

const statNumbers =
    document.querySelectorAll(
        ".stat-number[data-target]"
    );


let countersStarted = false;


const statsSection =
    document.querySelector(
        ".stats-section"
    );


if (
    statsSection &&
    statNumbers.length > 0 &&
    "IntersectionObserver" in window
) {

    const counterObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (
                        entry.isIntersecting &&
                        !countersStarted
                    ) {

                        countersStarted = true;

                        startCounters();

                    }

                });

            },

            {
                threshold: 0.25
            }

        );


    counterObserver.observe(
        statsSection
    );

}



function startCounters() {

    statNumbers.forEach((counter) => {

        const target =
            Number(
                counter.dataset.target
            );


        const duration =
            1600;


        const startTime =
            performance.now();


        function updateCounter(
            currentTime
        ) {

            const elapsed =
                currentTime - startTime;


            const progress =
                Math.min(
                    elapsed / duration,
                    1
                );


            /*
            Movimiento suave:
            empieza rápido y termina lentamente
            */

            const easedProgress =
                1 -
                Math.pow(
                    1 - progress,
                    3
                );


            const currentValue =
                Math.floor(
                    easedProgress *
                    target
                );


            counter.textContent =
                currentValue;


            if (progress < 1) {

                requestAnimationFrame(
                    updateCounter
                );

            } else {

                counter.textContent =
                    target;

            }

        }


        requestAnimationFrame(
            updateCounter
        );

    });

}



/* ==========================================================
   MENÚ MÓVIL
========================================================== */

const menuToggle =
    document.getElementById(
        "menuToggle"
    );

const mainNav =
    document.getElementById(
        "mainNav"
    );


if (menuToggle && mainNav) {

    menuToggle.addEventListener(
        "click",
        function () {

            menuToggle.classList.toggle(
                "active"
            );

            mainNav.classList.toggle(
                "open"
            );


            const abierto =
                mainNav.classList.contains(
                    "open"
                );


            menuToggle.setAttribute(
                "aria-expanded",
                abierto
            );

        }
    );


    /* CERRAR AL PULSAR UN ENLACE */

    const menuLinks =
        mainNav.querySelectorAll("a");


    menuLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    menuToggle.classList.remove(
                        "active"
                    );

                    mainNav.classList.remove(
                        "open"
                    );


                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        }
    );

}
