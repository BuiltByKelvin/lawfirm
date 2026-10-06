(function () {
  "use strict";

  /* ---------- Attorney Data ---------- */
  const attorneys = {
    brian: {
      name: "Brian O'Donnell",
      role: "Founding Attorney — J.D., LL.M., ACTEC",
      photo: "brain.jpeg",
      bio: "Brian O'Donnell is a dedicated attorney with over 24 years of experience providing effective legal solutions for individuals and businesses. He is Board Certified in Estate Planning, Trust & Probate Law and a Fellow of the American College of Trust and Estate Counsel (ACTEC).",
      email: "brian@brianodonnelllaw.com",
      phone: "+1 (808) 301 1471",
      phoneRaw: "+18083011471",
      practice: [
        "Real Estate & Property Law",
        "Estate Planning, Trust & Probate",
        "Business Legal Matters",
        "Contract & Agreement Review",
        "Dispute Resolution",
      ],
      creds: [
        "J.D., LL.M., ACTEC",
        "Board Certified Specialist — Estate Planning, Trust & Probate",
        "Fellow, American College of Trust and Estate Counsel",
        "24+ Years of Legal Practice",
      ],
    },
    sarah: {
      name: "Sarah Chen",
      role: "Senior Associate — Real Estate Law",
      photo: "sarah.jpg",
      bio: "Sarah Chen is a senior associate with 12 years of experience in residential and commercial real estate transactions. She guides clients through closings, title issues, and complex property matters with clarity and care.",
      email: "info@chenlegalgroup.com",
      phone: "+1 (212) 564-0147",
      phoneRaw: "+12125640147",
      practice: [
        "Residential Closings",
        "Commercial Real Estate",
        "Title Review & Disputes",
        "Landlord & Tenant",
      ],
      creds: [
        "J.D., University of Hawaii",
        "Member, Hawaii State Bar Association",
        "12+ Years of Real Estate Practice",
      ],
    },
    michael: {
      name: "Michael Rodriguez",
      role: "Associate — Business & Contract Law",
      photo: "spnish.jpg",
      bio: "Michael Rodriguez advises small businesses, startups, and investors on contract negotiation, entity formation, and commercial disputes. He combines sharp drafting with practical business judgment.",
      email: "legal@rodriguezlawpartners.com",
      phone: "+1 (305) 934-0183",
      phoneRaw: "+13059340183",
      practice: [
        "Business Formation",
        "Contract Drafting & Review",
        "Commercial Transactions",
        "Dispute Resolution",
      ],
      creds: [
        "J.D., UCLA School of Law",
        "Member, Hawaii State Bar Association",
        "8+ Years of Business Law Practice",
      ],
    },
    jennifer: {
      name: "Jennifer Park",
      role: "Associate — Estate Planning & Probate",
      photo: "jenifer.jpg",
      bio: "Jennifer Park helps families protect their legacy through thoughtful estate planning, trust administration, and probate guidance. She handles sensitive matters with compassion and precision.",
      email: "jenniferpark@law.com",
      phone: "+1 (415) 038-0162",
      phoneRaw: "+14150380162",
      practice: [
        "Wills & Trusts",
        "Probate Administration",
        "Trust Administration",
        "Estate Tax Planning",
      ],
      creds: [
        "J.D., University of Southern California",
        "Member, Hawaii State Bar Association",
        "Member, Estate Planning Council of Honolulu",
      ],
    },
  };

  /* ---------- Media Data ---------- */
  const media = {
    article1: {
      outlet: "Legal Times",
      date: "March 2024",
      title: "Estate Planning in a Changing Tax Landscape",
      text: `
        <p>In a wide-ranging interview with Legal Times, Brian O'Donnell discussed how recent changes to federal estate tax thresholds are reshaping the way families approach long-term planning. While the current exemption remains historically high, Brian cautioned that families should not rely on the exemption staying at its current level forever.</p>
        <p>"We're in a window where families have a rare opportunity to transfer wealth efficiently," Brian said. "But that window may not stay open. The families who plan now — rather than waiting for certainty — are the ones who will be best positioned when the rules shift."</p>
        <p>Brian outlined several strategies he commonly uses with clients: establishing irrevocable trusts, using annual exclusion gifts, structuring LLCs to hold real property, and using life insurance to provide liquidity for estate tax obligations. He emphasized that no single strategy works for everyone and that each plan should be built around the client's specific goals.</p>
        <p>The full article is available in the March 2024 print edition of Legal Times.</p>
      `,
      // videos: [
      //   { url: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Estate Planning Overview" },
      //   { url: "https://www.youtube.com/embed/9bZkp7q19f0", title: "Tax Strategies Explained" }
      // ]
    },

    article2: {
      outlet: "Hawaii Business",
      date: "January 2024",
      title: "Commercial Real Estate Trends in Honolulu",
      text: `
        <p>In this feature, Brian O'Donnell shared his perspective on the shifting commercial real estate market in Honolulu. Drawing on more than two decades of experience with commercial transactions, Brian highlighted several key trends: rising demand for mixed-use properties, the stabilization of office leasing after the pandemic, and a growing interest in sustainable development.</p>
        <p>"Commercial real estate in Hawaii is resilient," Brian noted. "But buyers need to be more careful than ever. Due diligence — especially title review and zoning compliance — is where deals are either made or broken."</p>
        <p>Brian also addressed the importance of working with an attorney who understands both the local market and the technical aspects of commercial transactions. "Every deal has its own quirks. Having counsel who has seen hundreds of them makes a real difference."</p>
      `,
      // videos: [
      //   { url: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Commercial Real Estate Insights" },
      //   { url: "https://www.youtube.com/embed/9bZkp7q19f0", title: "Market Trends Discussion" }
      // ]
    },

    article3: {
      outlet: "Pacific Law Review",
      date: "November 2023",
      title: "Trust Structures for Multi-Property Families",
      text: `
        <p>Brian O'Donnell contributed a detailed analysis to Pacific Law Review on the use of trust structures to hold and protect multi-property family holdings across generations. The article examined several common structures — revocable living trusts, irrevocable trusts, and LLCs held within trusts — and discussed the practical and tax implications of each.</p>
        <p>"Families with multiple properties face a unique challenge," Brian explained. "Without the right structure, they can face probate, disputes among heirs, and unexpected tax exposure. With the right structure, they can preserve and pass on their assets smoothly."</p>
        <p>Brian emphasized the importance of tailoring each trust to the specific family's needs, rather than adopting a one-size-fits-all approach. He also noted that periodic reviews are essential as tax laws and family circumstances change.</p>
      `,
      // videos: [
      //   { url: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Trust Structures Explained" },
      //   { url: "https://www.youtube.com/embed/9bZkp7q19f0", title: "Multi-Property Planning" }
      // ]
    },
  };

  /* Mobile Nav Toggle */
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      navToggle.classList.toggle("active", isOpen);
      navToggle.setAttribute("aria-expanded", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    });
    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (link.hasAttribute("data-dropdown")) return;
        if (window.innerWidth <= 768) {
          mainNav.classList.remove("open");
          navToggle.classList.remove("active");
          navToggle.setAttribute("aria-expanded", "false");
          document.body.style.overflow = "";
        }
      });
    });
  }

  /* Header Scroll Shadow */
  const header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener(
      "scroll",
      () => {
        header.classList.toggle("scrolled", window.scrollY > 10);
      },
      { passive: true },
    );
  }

  /* ============================================
     DROPDOWN TOGGLING — Works on desktop and mobile
     ============================================ */
  document.querySelectorAll("[data-dropdown]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const parent = link.closest(".has-dropdown");
      const wasOpen = parent.classList.contains("open");

      // Close any other open dropdowns first
      document.querySelectorAll(".has-dropdown.open").forEach((item) => {
        if (item !== parent) item.classList.remove("open");
      });

      parent.classList.toggle("open", !wasOpen);
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".has-dropdown")) {
      document.querySelectorAll(".has-dropdown.open").forEach((item) => {
        item.classList.remove("open");
      });
    }
  });

  // Close dropdowns when a menu item inside is clicked
  document.querySelectorAll(".dropdown a").forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".has-dropdown.open").forEach((item) => {
        item.classList.remove("open");
      });
    });
  });

  /* Hero Slider */
  const slides = document.querySelectorAll(".hero-slide");
  if (slides.length > 1) {
    let current = 0;
    setInterval(() => {
      slides[current].classList.remove("active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("active");
    }, 6000);
  }

  /* Animated Counters */
  const counters = document.querySelectorAll(".counter");
  if (counters.length > 0) {
    const animateCounter = (el) => {
      const target = parseInt(el.getAttribute("data-target"));
      const duration = 2000;
      const startTime = performance.now();
      const update = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target).toLocaleString();
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = target.toLocaleString();
      };
      requestAnimationFrame(update);
    };
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.dataset.animated) {
            entry.target.dataset.animated = "true";
            animateCounter(entry.target);
          }
        });
      },
      { threshold: 0.3 },
    );
    counters.forEach((counter) => counterObserver.observe(counter));
  }

  /* Scroll Reveal */
  const revealEls = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-scale",
  );
  if (revealEls.length > 0) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" },
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  }

  /* Background Read More */
  const bgReadMoreBtn = document.getElementById("bgReadMoreBtn");
  const bgMore = document.getElementById("bgMore");
  if (bgReadMoreBtn && bgMore) {
    bgReadMoreBtn.addEventListener("click", () => {
      const isOpen = bgMore.classList.toggle("open");
      bgReadMoreBtn.classList.toggle("open", isOpen);
      bgReadMoreBtn.setAttribute("aria-expanded", isOpen);
      bgReadMoreBtn.innerHTML = isOpen
        ? 'Read Less <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>'
        : 'Read More <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';
    });
  }

  /* Credentials Read More */
  document.querySelectorAll(".cred-read-more").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.getAttribute("data-cred"));
      const isOpen = target.classList.toggle("open");
      btn.classList.toggle("open", isOpen);
      btn.innerHTML = isOpen
        ? 'Read Less <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>'
        : 'Read More <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';
    });
  });

  /* Attorney Modal */
  const attorneyModal = document.getElementById("attorneyModal");
  const modalPhoto = document.getElementById("modalPhoto");
  const modalName = document.getElementById("modalName");
  const modalRole = document.getElementById("modalRole");
  const modalBio = document.getElementById("modalBio");
  const modalPractice = document.getElementById("modalPractice");
  const modalCreds = document.getElementById("modalCreds");
  const modalClose = attorneyModal?.querySelector(".attorney-modal-close");

  function openAttorneyModal(key) {
    const data = attorneys[key];
    if (!data || !attorneyModal) return;
    modalPhoto.src = data.photo;
    modalPhoto.alt = data.name;
    modalName.textContent = data.name;
    modalRole.textContent = data.role;
    modalBio.textContent = data.bio;
    modalPractice.innerHTML = data.practice
      .map((p) => `<li>${p}</li>`)
      .join("");
    modalCreds.innerHTML = data.creds.map((c) => `<li>${c}</li>`).join("");

    const modalEmail = document.getElementById("modalEmail");
    const modalPhone = document.getElementById("modalPhone");
    modalEmail.textContent = data.email;
    modalEmail.href = "mailto:" + data.email;
    modalPhone.textContent = data.phone;
    modalPhone.href = "tel:" + data.phoneRaw;

    attorneyModal.classList.add("open");
    attorneyModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeAttorneyModal() {
    attorneyModal?.classList.remove("open");
    attorneyModal?.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  document.querySelectorAll("[data-attorney]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      openAttorneyModal(link.getAttribute("data-attorney"));
    });
  });

  modalClose?.addEventListener("click", closeAttorneyModal);
  attorneyModal?.addEventListener("click", (e) => {
    if (e.target === attorneyModal) closeAttorneyModal();
  });

  /* Media Modal */
  const mediaModal = document.getElementById("mediaModal");
  const mediaModalOutlet = document.getElementById("mediaModalOutlet");
  const mediaModalTitle = document.getElementById("mediaModalTitle");
  const mediaModalDate = document.getElementById("mediaModalDate");
  const mediaModalText = document.getElementById("mediaModalText");
  const mediaModalVideos = document.getElementById("mediaModalVideos");
  const mediaModalClose = mediaModal?.querySelector(".media-modal-close");

  function openMediaModal(key) {
    const data = media[key];
    if (!data || !mediaModal) return;
    mediaModalOutlet.textContent = data.outlet;
    mediaModalTitle.textContent = data.title;
    mediaModalDate.textContent = data.date;
    mediaModalText.innerHTML = data.text;

    if (data.videos && data.videos.length) {
      mediaModalVideos.innerHTML = data.videos
        .map(
          (v) => `
        <div class="video-item">
          <iframe src="${v.url}" title="${v.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      `,
        )
        .join("");
    } else {
      mediaModalVideos.innerHTML = "";
    }

    mediaModal.classList.add("open");
    mediaModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeMediaModal() {
    mediaModal?.classList.remove("open");
    mediaModal?.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (mediaModalVideos) mediaModalVideos.innerHTML = "";
  }

  document.querySelectorAll("[data-media]").forEach((btn) => {
    btn.addEventListener("click", () =>
      openMediaModal(btn.getAttribute("data-media")),
    );
  });

  mediaModalClose?.addEventListener("click", closeMediaModal);
  mediaModal?.addEventListener("click", (e) => {
    if (e.target === mediaModal) closeMediaModal();
  });

  /* FAQ Accordion */
  document.querySelectorAll(".faq-question").forEach((btn) => {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      const answer = btn.nextElementSibling;
      document.querySelectorAll(".faq-question").forEach((other) => {
        if (other !== btn) {
          other.setAttribute("aria-expanded", "false");
          other.nextElementSibling.hidden = true;
        }
      });
      btn.setAttribute("aria-expanded", !expanded);
      answer.hidden = expanded;
    });
  });

  /* Case Results Read More */
  document.querySelectorAll(".read-more-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.getAttribute("data-target"));
      const isVisible = target.classList.toggle("visible");
      btn.innerHTML = isVisible
        ? "Read Less <span>−</span>"
        : "Read More <span>+</span>";
    });
  });

  /* Gallery Lightbox */
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = lightbox?.querySelector("img");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxDesc = document.getElementById("lightbox-desc");
  const lightboxClose = lightbox?.querySelector(".lightbox-close");

  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      if (!img || !lightbox || !lightboxImg) return;
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxTitle.textContent =
        item.getAttribute("data-title") || "Gallery Image";
      lightboxDesc.innerHTML = item.getAttribute("data-desc") || "";
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  });

  function closeLightbox() {
    lightbox?.classList.remove("open");
    lightbox?.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  lightboxClose?.addEventListener("click", closeLightbox);
  lightbox?.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeLightbox();
      closeAttorneyModal();
      closeMediaModal();
    }
  });

  /* Comment Form */
  const commentForm = document.getElementById("commentForm");
  const testimonialTrack = document.getElementById("testimonialTrack");
  if (commentForm && testimonialTrack) {
    commentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("cName").value.trim();
      const role = document.getElementById("cRole").value.trim() || "Client";
      const comment = document.getElementById("cComment").value.trim();
      const rating = document.querySelector(
        'input[name="rating"]:checked',
      ).value;
      const stars =
        "★".repeat(parseInt(rating)) + "☆".repeat(5 - parseInt(rating));
      const newTestimonial = document.createElement("div");
      newTestimonial.className = "testimonial";
      newTestimonial.innerHTML = `<div class="stars">${stars}</div><p class="testimonial-quote">"${comment}"</p><p class="testimonial-author">— ${name}</p><p class="testimonial-role">${role}</p>`;
      testimonialTrack.prepend(newTestimonial);
      commentForm.reset();
      alert(
        "Thank you! Your comment has been posted to the scrolling testimonials.",
      );
    });
  }

  /* Consultation Form */
  const consultationForm = document.getElementById("consultationForm");
  const formStatus = document.getElementById("formStatus");
  if (consultationForm) {
    consultationForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const submitButton = consultationForm.querySelector(
        'button[type="submit"]',
      );
      const originalText = submitButton.textContent;
      submitButton.textContent = "Sending...";
      submitButton.disabled = true;
      formStatus.style.display = "none";
      const formData = new FormData(consultationForm);
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
        const result = await response.json();
        if (result.success) {
          formStatus.textContent =
            "✓ Thank you! Your consultation request has been sent successfully. We will contact you shortly.";
          formStatus.style.color = "#4ade80";
          formStatus.style.display = "block";
          consultationForm.reset();
        } else {
          formStatus.textContent =
            "✗ There was an error sending your request. Please try again.";
          formStatus.style.color = "#f87171";
          formStatus.style.display = "block";
        }
      } catch (error) {
        formStatus.textContent = "✗ Network error. Please try again.";
        formStatus.style.color = "#f87171";
        formStatus.style.display = "block";
      } finally {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }
    });
  }

  /* Footer Year */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
