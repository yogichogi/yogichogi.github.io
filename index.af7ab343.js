const{algoliasearch:e,instantsearch:t}=window,i=t({indexName:"products",searchClient:e("YMNPMTXRZS","f9a38e240e972a777ee18bc87b224ab1")});i.addWidgets([t.widgets.searchBox({container:"#searchbox",placeholder:"Search for products..."}),t.widgets.hits({container:"#hits",templates:{item:`
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
      `},transformItems:e=>(console.log("Items:",e),e)}),t.widgets.pagination({container:"#pagination"}),t.widgets.refinementList({container:"#brand-list",attribute:"brand",searchable:!1,templates:{header:"Brand"}}),t.widgets.rangeSlider({container:"#price-range",attribute:"price",templates:{header:"Price"},tooltips:{format:e=>`$${Math.round(e)}`}})]),i.start(),console.log("Hits container:",document.querySelector("#hits")),console.log("Main content:",document.querySelector(".main-content"));
//# sourceMappingURL=index.af7ab343.js.map
