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
          <img src="{{image}}" align="left" alt="{{name}}" />
          <div class="hit-content">
            <div class="hit-title">
              {{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}
            </div>
            <div class="hit-price">
              \${{price}}
            </div>
          </div>
        </div>
      `,
    },
  }),
  pagination({
    container: "#pagination",
  }),
  refinementList({
    container: "#brand-list",
    attribute: "brand",
    searchable: true,
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
  }),
]);

search.start();
