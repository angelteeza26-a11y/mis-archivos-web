const sourceId = 123456; 
const sourceName = "Robin Hood Library";
const baseUrl = "https://angelteeza26-a11y.github.io/mis-archivos-web/";

async function popularNovels(page) {
  return [
    {
      name: "Verdant (Twoony)",
      link: "Ver-Two/chap_1.xhtml",
      cover: "https://raw.githubusercontent.com/angelteeza26-a11y/mis-archivos-web/main/cover.jpg" 
    }
  ];
}

async function parseChapter(chapterLink) {
  const url = baseUrl + chapterLink;
  const response = await fetch(url);
  const html = await response.text();
    
  const chapterText = html.split('<div class="calibreEbookContent">')[1].split('<div class="calibreEbNavBottom">')[0];

  return {
    chapterName: "Capítulo",
    chapterText: chapterText,
  };
}
