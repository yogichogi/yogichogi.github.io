const { algoliasearch, instantsearch } = window;

const searchClient = algoliasearch(
  "YMNPMTXRZS",
  "f9a38e240e972a777ee18bc87b224ab1"
);

const search = instantsearch({
  indexName: "products",
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: "#searchbox",
    placeholder: "Search for products...",
  }),
  instantsearch.widgets.hits({
    container: "#hits",
    templates: {
      item: `
        <div class="hit">
          <img src="{{image}}" alt="{{name}}" class="hit-image" />
          <div class="hit-content">
            <div class="hit-name">
              {{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}
            </div>
            <div class="hit-price">
              \${{price}}
            </div>
          </div>
        </div>
      `,
    },
    cssClasses: {
      item: "ais-Hits-item",
    },
    transformItems(items) {
      console.log("Items:", items);
      return items;
    },
  }),
  instantsearch.widgets.pagination({
    container: "#pagination",
  }),
  instantsearch.widgets.refinementList({
    container: "#brand-list",
    attribute: "brand",
    searchable: false,
    templates: {
      header: "Brand",
    },
  }),
  instantsearch.widgets.rangeSlider({
    container: "#price-range",
    attribute: "price",
    templates: {
      header: "Price",
    },
    tooltips: {
      format(rawValue) {
        return `$${Math.round(rawValue)}`;
      },
    },
  }),
]);

search.start();

console.log("Hits container:", document.querySelector("#hits"));
console.log("Main content:", document.querySelector(".main-content"));
