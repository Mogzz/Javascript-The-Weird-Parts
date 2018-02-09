// GREETR APP

(function(window, jQuery) { //Safe code with a IIFE


  // 'new' an object
  var Greetr = function(firstname, lastname, language) {
    return new Greetr.init(firstname, lastname, language);
  }

  // set up supported languages only accessed via here
  var supportedLanguages = ['en', 'es'];


  //informal greetings
  var greetings = {
    en: "Hello",
    es: "Hola"
  };


  //formal greetiengs
  var formalGreetings = {
    en: "Salutations",
    es: "Saludos"
  };


  //logger messages
  var logMessages = {
    en: 'Logged in',
    es: 'Logged in'
  };


  //Prototype for object to store methods
  Greetr.prototype = {

    //full name function to display full name
    fullName: function() {
      return this.firstname + " " + this.lastname;
    },
    //validate method - used to ensure accepted language is used
    validate: function() {
      if (supportedLanguages.indexOf(this.language) === -1) {
        throw "Invalid Language";
      }
    },
    //greeting method - call for standard greeting
    greeting: function() {
      return greetings[this.language] + " " + this.firstname + "!";
    },
    //formal greeting method - call for a more formal greeting
    formalGreeting: function() {
      return formalGreetings[this.language] + ', ' + this.fullName();
    },
    //greet method, takes a formal arg to check if regular greeting or formal
    greet: function(formal) {
      var msg;

      if (formal) { //check if formal
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }
      if (console) {
        console.log(msg);
      }

      return this; //return this allows us to chain methods
    },

    log: function() {
      if (console) {
        console.log(logMessages[this.language] + ': ' + this.fullName());
      }
      return this;
    },
    //set language method - call this to set the language 
    setLang: function(lang) {
      this.language = lang;
      this.validate();
      return this;
    },

    HTMLGreeting: function(selector, formal) {
      if (!$) {
        throw 'jQuery not loaded';
      }
      if (!selector) {
        throw 'Missing jQuery Selector';
      }

      var msg;
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }
      $(selector).html(msg);

      return this;
    }




  };

  //Initiate the Greetr Object - actual object created allowing us not have to call 'new'
  Greetr.init = function(firstname, lastname, language) {
    var self = this;

    // set values or set default
    self.firstname = firstname || '';
    self.lastname = lastname || '';
    self.language = language || 'en';

    self.validate();

  }

  Greetr.init.prototype = Greetr.prototype; //set prototype

  window.Greetr = window.G$ = Greetr; // set up global reference

})(window, jQuery);