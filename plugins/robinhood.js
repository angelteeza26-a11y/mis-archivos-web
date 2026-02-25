const sourceId = 123456; 
const sourceName = "Robin Hood Library";
const baseUrl = "https://angelteeza26-a11y.github.io/mis-archivos-web/";

const RobinHoodLibrary = {
  id: "robinhood_lib",
  name: sourceName,
  icon: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1768245550i/246490524.jpg",
  site: baseUrl,
  version: "1.0.0",

  popularNovels: async function(page) {
    return [
      {
        name: "Verdant (Twoony)",
        path: "Ver-Two/chap_1.xhtml",
        cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1768245550i/246490524.jpg" 
      }
    ];
  },

  parseNovel: async function(novelPath) {
    return {
      name: "Verdant (Twoony)",
      path: novelPath,
      cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1768245550i/246490524.jpg",
      chapters: [{ name: "Capítulo 1", path: novelPath }]
    };
  },

  parseChapter: async function(chapterPath) {
    const url = baseUrl + chapterPath;
    const response = await fetch(url);
    const html = await response.text();
    
    // Tu lógica de limpieza de texto
    const chapterText = html.split('<div class="calibreEbookContent">')[1].split('<div class="calibreEbNavBottom">')[0];

    return {
      chapterName: "Capítulo 1",
      chapterText: chapterText,
    };
  }
};

export default RobinHoodLibrary;
