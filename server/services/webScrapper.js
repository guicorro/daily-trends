"use strict";

const cheerio = require("cheerio");
const request = require("request");

module.exports = {
  scrappData: async function() {
    await request("https://elpais.com", (err, res, body) => {
      if (!err && res.statusCode == 200) {
        let $ = cheerio.load(body);
        const news = $("div[class=articulo__interior]");
        for (let i = 0; i <= 4; i++) {
          var publisher = "El pais";
          var title = $(news[i])
            .find("h2[class=articulo-titulo]")
            .find("a")
            .text();
          var image = $(news[i])
            .find("img")
            .attr("src");
          var body = $(news[i])
            .find("p[class=articulo-entradilla]")
            .text();
          var source = $(news[i])
            .find("h2[class=articulo-titulo]")
            .find("a")
            .attr("href");

          var options = {
            method: "POST",
            url: "http://localhost:8080/feed",
            headers: { "Content-Type": "application/json" },
            body: {
              title: title,
              body: body,
              image: image,
              source: source,
              publisher: publisher
            },
            json: true
          };

          request(options, function(error, response, body) {
            if (error){
              throw new Error(error);
            } 
          });
        }
      }
    });

    await request("https://www.elmundo.es", (err, res, body) => {
      if (!err && res.statusCode == 200) {
        let $ = cheerio.load(body);
        const news = $("div[class=ue-c-cover-content__body]");
        for (let i = 0; i <= 4; i++) {
          var publisher = "El mundo";
          var title = $(news[i])
            .find("h2")
            .text();
          var image = $(news[i])
            .find("img")
            .attr("src");
          var body = $(news[i])
            .find("div[class=ue-c-cover-content__list-inline]")
            .text();
          var source = $(news[i])
            .find("a[class=ue-c-cover-content__link]")
            .attr("href");

          var options = {
            method: "POST",
            url: "http://localhost:8080/feed",
            headers: { "Content-Type": "application/json" },
            body: {
              title: title,
              body: body,
              image: image,
              source: source,
              publisher: publisher
            },
            json: true
          };

          request(options, function(error, response, body) {
            if (error){
              throw new Error(error);
            }
          });
        }
      }
    });
  }
};
