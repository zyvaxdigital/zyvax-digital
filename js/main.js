const menuBtn =
    document.getElementById("menuBtn");

  const navMenu =
    document.getElementById("navMenu");

  menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("open");

    menuBtn.textContent =
      navMenu.classList.contains("open")
        ? "×"
        : "☰";

  });


  document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

      link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        menuBtn.textContent = "☰";

      });

    });


  /* =========================================================
     FAQ ACCORDION
     ========================================================= */

  document
    .querySelectorAll(".faq-question")
    .forEach(button => {

      button.addEventListener("click", () => {

        const item =
          button.parentElement;

        document
          .querySelectorAll(".faq-item")
          .forEach(other => {

            if (other !== item) {

              other.classList.remove("active");

            }

          });

        item.classList.toggle("active");

      });

    });


  /* =========================================================
     SCROLL REVEAL
     ========================================================= */

  const observer =
    new IntersectionObserver(

      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

          }

        });

      },

      {
        threshold: .12
      }

    );


  document
    .querySelectorAll(".reveal")
    .forEach(element => {

      observer.observe(element);

    });


  /* =========================================================
     CTA CONFIGURATION
     =========================================================

     IMPORTANT:

     Replace this URL with your REAL Google Form URL.

     You can then replace every placeholder Google Forms
     link in the page with this URL if desired.

  ========================================================= */

  const GOOGLE_FORM_URL =
    "https://forms.google.com/";


  /* Automatically replace placeholder form links */

  document
    .querySelectorAll(
      'a[href="https://forms.google.com/"]'
    )
    .forEach(button => {

      button.href = GOOGLE_FORM_URL;

    });
