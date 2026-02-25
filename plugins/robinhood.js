var sourceId = "robin";
var sourceName = "Robin Hood Library";
var baseUrl = "https://mis-archivos-web.pages.dev/";

function popularNovels(page) {
  return Promise.resolve([
    {
      name: "Verdant (Twoony)",
      path: "Ver-Two/chap_1.xhtml",
      cover: ""
    }
  ]);
}

function parseNovel(novelPath) {
  return Promise.resolve({
    name: "Verdant (Twoony)",
    path: novelPath,
    chapters: [{ name: "Capítulo 1", path: novelPath }]
  });
}

function parseChapter(chapterPath) {
  return fetch(baseUrl + chapterPath)
    .then(function(res) { return res.text(); })
    .then(function(html) {
      var parts = html.split('<div class="calibreEbookContent">');
      var text = parts.length > 1 ? parts[1].split('<div class="calibreEbNavBottom">')[0] : "Error de carga";
      return {
        chapterName: "Capítulo 1",
        chapterText: text
      };
    });
}

module.exports = {
  default: {
    id: sourceId,
    sourceName: sourceName,
    sourceUrl: baseUrl,
    site: baseUrl,
    version: "1.0.4",
    lang: "Español",
    popularNovels: popularNovels,
    parseNovel: parseNovel,
    parseChapter: parseChapter
  }
};
