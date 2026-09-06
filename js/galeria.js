// =====================================================
// GALICIA WHOOP LEAGUE
// GALERÍA
// =====================================================


// -----------------------------------------------------
// FILTROS
// -----------------------------------------------------

const galleryFilters =
    document.querySelectorAll(".gallery-filter");

const galleryItems =
    document.querySelectorAll(".gallery-item");


galleryFilters.forEach((button) => {

    button.addEventListener("click", () => {

        galleryFilters.forEach((filter) => {
            filter.classList.remove("active");
        });

        button.classList.add("active");


        const filter =
            button.dataset.filter;


        galleryItems.forEach((item) => {

            const category =
                item.dataset.category;


            if (
                filter === "all" ||
                category === filter
            ) {

                item.classList.remove(
                    "gallery-hidden"
                );

            } else {

                item.classList.add(
                    "gallery-hidden"
                );

            }

        });

    });

});



// -----------------------------------------------------
// LIGHTBOX
// -----------------------------------------------------

const lightbox =
    document.getElementById("galleryLightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxClose =
    document.getElementById("lightboxClose");

const lightboxPrev =
    document.getElementById("lightboxPrev");

const lightboxNext =
    document.getElementById("lightboxNext");

const lightboxCounter =
    document.getElementById("lightboxCounter");


let currentGalleryIndex = 0;


const galleryImages =
    Array.from(
        document.querySelectorAll(
            ".gallery-item img"
        )
    );


function openLightbox(index) {

    currentGalleryIndex = index;

    updateLightbox();

    lightbox.classList.add("open");

    document.body.style.overflow =
        "hidden";

}


function closeLightbox() {

    lightbox.classList.remove("open");

    document.body.style.overflow =
        "";

}


function updateLightbox() {

    const image =
        galleryImages[currentGalleryIndex];

    lightboxImage.src =
        image.src;

    lightboxImage.alt =
        image.alt;

    lightboxCounter.textContent =
        `${currentGalleryIndex + 1} / ${galleryImages.length}`;

}


galleryImages.forEach(
    (image, index) => {

        image.closest(".gallery-item")
            .addEventListener(
                "click",
                () => {

                    openLightbox(index);

                }
            );

    }
);


lightboxNext.addEventListener(
    "click",
    () => {

        currentGalleryIndex++;

        if (
            currentGalleryIndex >=
            galleryImages.length
        ) {

            currentGalleryIndex = 0;

        }

        updateLightbox();

    }
);


lightboxPrev.addEventListener(
    "click",
    () => {

        currentGalleryIndex--;

        if (
            currentGalleryIndex < 0
        ) {

            currentGalleryIndex =
                galleryImages.length - 1;

        }

        updateLightbox();

    }
);


lightboxClose.addEventListener(
    "click",
    closeLightbox
);


lightbox.addEventListener(
    "click",
    (event) => {

        if (
            event.target === lightbox
        ) {

            closeLightbox();

        }

    }
);


// TECLADO

document.addEventListener(
    "keydown",
    (event) => {

        if (
            !lightbox.classList.contains(
                "open"
            )
        ) {
            return;
        }


        if (event.key === "Escape") {

            closeLightbox();

        }


        if (event.key === "ArrowRight") {

            lightboxNext.click();

        }


        if (event.key === "ArrowLeft") {

            lightboxPrev.click();

        }

    }
);



// -----------------------------------------------------
// VÍDEOS - REPRODUCIR AL PASAR EL RATÓN
// -----------------------------------------------------

const filmCards =
    document.querySelectorAll(".film-card");


filmCards.forEach((card) => {

    const video =
        card.querySelector("video");


    card.addEventListener(
        "mouseenter",
        () => {

            video.play();

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            video.pause();

        }
    );

});