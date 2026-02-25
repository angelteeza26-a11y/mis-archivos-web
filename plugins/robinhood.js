const sourceId = 123456;
const sourceName = "Robin Hood Library";
const baseUrl = "https://angelteeza26-a11y.github.io/mis-archivos-web/";

async function popularNovels(page) {
  return [
    {
      name: "Verdant (Twoony)",
      link: "Ver-Two/chap_1.xhtml",
      cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1768245550i/246490524.jpg"
    }
  ];
}

async function parseNovel(novelLink) {
  return {
    name: "Verdant (Twoony)",
    sourceId: sourceId,
    chapters: [{ name: "Capítulo 1", link: novelLink }]
  };
}

async function parseChapter(chapterLink) {
  const url = baseUrl + chapterLink;
  const response = await fetch(url);
  const html = await response.text();
  
  const chapterText = html.split('<div class="calibreEbookContent">')[1].split('<div class="calibreEbNavBottom">')[0];

  return {
    chapterName: "Capítulo 1",
    chapterText: chapterText
  };
}

// En v2.0.3 NO se usa export default. Se dejan las funciones sueltas.
