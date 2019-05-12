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

    return App.initContract();
  },
  // initBoroughs: function(boroughs) {

  // },
  /**
   * Initializes smart contract on web application
   */
  initContract: function() { 

    return App.setupPage();
  },
 /**
   * Sets up HTML elements based on available contract data
   */
  // setupPage: function() {
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
  // },
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
