App = {
  web3Provider: null,
  contracts: {},
  account: null,
  

  /**
   * Initializes web application using current account and provider
   */
  init: function(accounts) {
    App.accounts = accounts;
    App.account = App.getAccount(window.location.pathname);

    /* Initialize web3 */
    App.web3Provider = new Web3.providers.HttpProvider(App.account.provider);

    web3 = new Web3(App.web3Provider);

    App.account.hash = web3.eth.accounts[0];

    App.initContract();
    
  },
  uploadData: function() {
    $.getJSON("Real.json", function(data) {
      App.contracts.Real = TruffleContract(data); 

      App.contracts.Real.setProvider(App.web3Provider);

      App.contracts.Real.deployed()
      .then(function(result) {
        instance = result;
       
        var longitude = "-73.957771";
        var latitude = "40.673447";
        var bin = 3029288;
        var zipCode = "11238";
        var street = "sterling";
        var borough = "Brooklyn";

        instance.setBuilding(
            longitude,
            latitude,
            bin,
            zipCode,
            street,
            borough
        );
          
        console.log("point 6");
      //   return instance;
      // })
      // .then(function(instance){
  

      //   longitude = "-73.979975";
      //   latitude = "40.779623";
      //   bin = 1030037;
      //   zipCode = "11045";
      //   street = "west 74th street";
      //   borough = "Manhattan"; 

      //   instance.setBuilding(
      //       longitude,
      //       latitude,
      //       bin,
      //       zipCode,
      //       street,
      //       borough
      //   );
      });
      
      
        
      


        // longitude = "-73.994506";
        // latitude = "40.769802";
        // bin = 4023450;
        // zipCode = "11369";
        // street = "98th street";
        // borough = "Queens"; 

        // instance.setBuilding(
        //     longitude,
        //     latitude,
        //     bin,
        //     zipCode,
        //     street,
        //     borough
        // );


        // //-73.919382,40.744436,4001896,11104,Hunters Point,Queens

        // longitude = "-73.919382";
        // latitude = "40.744436";
        // bin = 4001896;
        // zipCode = "11104";
        // street = "Hunters Point";
        // borough = "Queens"; 

        // instance.setBuilding(
        //     longitude,
        //     latitude,
        //     bin,
        //     zipCode,
        //     street,
        //     borough
        // );



        // // // -73.946786,40.818629,1060638,10030,Edgecombe avenue,Manhattan

        // longitude = "--73.946786";
        // latitude = "40.818629";
        // bin = 1060638;
        // zipCode = "10030";
        // street = "Edgecombe avenue";
        // borough = "Manhattan"; 

        // instance.setBuilding(
        //     longitude,
        //     latitude,
        //     bin,
        //     zipCode,
        //     street,
        //     borough
        // );


        // // //-73.994506,40.71837,1005627,10002,Grand Street,Manhattan

        // longitude = "-73.994506";
        // latitude = "40.71837";
        // bin = 1005627;
        // zipCode = "10002";
        // street = "Grand Street";
        // borough = "Manhattan"; 

        // instance.setBuilding(
        //     longitude,
        //     latitude,
        //     bin,
        //     zipCode,
        //     street,
        //     borough
        // );

      });
       
    //});


  },
  // initBoroughs: function(boroughs) {

  // },
  /**
   * Initializes smart contract on web application
   */
  initContract: function() { 
    $.getJSON("Real.json", function(data) {
      App.contracts.Real = TruffleContract(data);

      App.contracts.Real.setProvider(App.web3Provider);

      //App.uploadData(data);

      App.contracts.Real.deployed()
      .then(function(result) {
        instance = result;
       
        var longitude = "-73.957771";
        var latitude = "40.673447";
        var bin = 3029288;
        var zipCode = "11238";
        var street = "sterling";
        var borough = "Brooklyn";

        console.log("point 5");

        instance.setBuilding(
            longitude,
            latitude,
            bin,
            zipCode,
            street,
            borough
        );
        console.log("point 6");
        //App.fetchItems(instance);

      });
     
      console.log("point 7");
      return;
    });

    return App.setupPage(); 
  },
 /**
   * Sets up HTML elements based on available contract data
   */
  setupPage: function() {
  //   var template = $("#borough-item");
  //   $("#borough-name").text(App.borough.name);
  

  //   Object.keys(App.boroughs).forEach(function(key, index) {
  //     var borough = App.boroughs[key];
  //     template.find(".dropdown-item").attr("href", "/" + (index + 1));
  //     template.find(".dropdown-item").text(borough.name);
  //     template.find(".dropdown-item").toggleClass("active", App.borough === borough);
  //     $(".dropdown-menu").append(template.html());
  //   });

  //   return App.bindEvents();
   },
  /**
   * Switches accounts based on browser routes
   */
  getAccount: function(pathname) {
    switch (window.location.pathname) {
      case "/1":
        return App.accounts[0];
      case "/2":
        return App.accounts[1];
      case "/3":
        return App.accounts[2];
      default:
        return App.accounts[0];
    }
  },
    /**
   * Retrieves items from Market.sol smart contract
   */
  fetchItems: function(instance) {

    bins = instance.getBins('Queens');

    // var instance;
    // var itemRow = $("#itemRow");
    // var itemTemplate = $("#itemTemplate"); 

    // App.contracts.Real.deployed()
    //   .then(function(result) {
    //     instance = result;
    //     console.log(instance);
    //     instance.getBins('Queens');
    //   });
    //   // .then(function(bins) {

    //   //   console.log(bins.length)
    //   //   for (i = 0; i < bins.length; i++) {
    //   //     instance.getBuild(bins[i].toNumber()).then(function(building) {

    //   //       console.log("--------------");
    //   //       console.log(building[0]);
    //   //       console.log(building[1]);
    //   //       console.log(building[2].toNumber());
    //   //       console.log(building[3]);
    //   //       console.log(building[4]);
    //   //       console.log(building[5]);

    //   //       // var itemEl = App.fillElement(marketplaceItem, itemTemplate);
    //   //       // itemEl.find(".marketplace-item").attr("data-id", marketplaceItem[0]);

    //   //       // itemRow.append(itemEl.html());
    //   //     });
    //   //   }
    //   // }); 
  },
};

$(function() {
  $(window).load(function() {
    $.getJSON("json/accounts.json").then(function(data) {
      App.init(data);
    });
    // $.getJSON("json/boroughs.json").then(function(data) {
    //   App.initBoroughs(data);
    // });
  });
});
