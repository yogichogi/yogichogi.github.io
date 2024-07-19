import algoliasearch from "algoliasearch/lite";
import instantsearch from "instantsearch.js";
import {
  searchBox,
  hits,
  pagination,
  refinementList,
  rangeSlider,
} from "instantsearch.js/es/widgets";

const searchClient = algoliasearch(
  "YMNPMTXRZS",
  "f9a38e240e972a777ee18bc87b224ab1"
);

const search = instantsearch({
  indexName: "products",
  searchClient,
});

search.addWidgets([
  searchBox({
    container: "#searchbox",
    placeholder: "Search for products...",
  }),
  hits({
    container: "#hits",
    templates: {
      item: `
        <div class="hit">
          <img src="{{image}}" alt="{{name}}" class="hit-image" />
          <div class="hit-content">
            <div class="hit-title">
              {{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}
            </div>
            <div class="hit-price">
              \${{#price}}{{price}}{{/price}}
            </div>
          </div>
        </div>
      `,
    },
    transformItems(items) {
      console.log("Items:", items);
      return items;
    },
  }),
  pagination({
    container: "#pagination",
  }),
  refinementList({
    container: "#brand-list",
    attribute: "brand",
    searchable: false,
    templates: {
      header: "Brand",
    },
  }),
  rangeSlider({
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
