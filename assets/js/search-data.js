// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "CV Last Updated: July 8th 2025.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/assets/pdf/ebrahimi_cv.pdf";
          },
        },{id: "nav-photos",
          title: "photos",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/photos/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-our-paper-model-based-ranking-of-source-languages-for-zero-shot-cross-lingual-transfer-was-accepted-to-emnlp-2025",
          title: 'Our paper, Model-Based Ranking of Source Languages for Zero-Shot Cross-Lingual Transfer was accepted...',
          description: "",
          section: "News",},{id: "news-i-have-successfully-defended-my-dissertation-and-will-graduate-in-may-2026-i-am-actively-looking-for-postdoc-and-industry-opportunities-please-reach-out-if-you-know-of-any-openings-which-would-be-a-good-fit",
          title: 'I have successfully defended my dissertation and will graduate in May 2026. I...',
          description: "",
          section: "News",},{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/abteen-ebrahimi", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=38YRik0AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
