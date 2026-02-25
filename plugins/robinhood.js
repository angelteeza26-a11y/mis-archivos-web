const RobinHoodLibrary = {
  id: "robinhood_lib",
  name: "Robin Hood Library",
  site: "https://angelteeza26-a11y.github.io/mis-archivos-web/",
  version: "1.0.0",
  icon: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1768245550i/246490524.jpg",

  popularNovels: async function() {
    return [{
      name: "Verdant (Twoony)",
      path: "Ver-Two/chap_1.xhtml",
      cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1768245550i/246490524.jpg"
    }];
  },

  parseNovel: async function(path) {
    return {
      name: "Verdant (Twoony)",
      path: path,
      chapters: [{ name: "Capítulo 1", path: path }]
    };
  },

  parseChapter: async function(path) {
    const response = await fetch(this.site + path);
    const html = await response.text();
    // Limpieza de texto segura
    const parts = html.split('<div class="calibreEbookContent">');
    if (parts.length < 2) return { chapterText: "Error de formato" };
    const chapterText = parts[1].split('<div class="calibreEbNavBottom">')[0];

    return {
      chapterName: "Capítulo 1",
      chapterText: chapterText
    };
  }
};

export default RobinHoodLibrary;
