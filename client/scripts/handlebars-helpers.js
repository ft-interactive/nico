var Handlebars = require('hbsfy/runtime');

Handlebars.registerHelper('join', function (array, separator) {
  return array.join(separator);
});

Handlebars.registerHelper('upperCase', function (content) {
  return content.toUpperCase();
});

Handlebars.registerHelper('href', function (text) {
  if (!text) {
    return '';
  }

  var uuid = /^uuid\:\/{2}/;

  if (uuid.test(text)) {
    return 'http://www.ft.com/cms/0/' + text.split(uuid)[1] + '.html';
  }

  return text;
});

Handlebars.createGlobalHelper = function (name, hash, commands) {
  commands = commands || {};
  Handlebars.registerHelper(name, function (context) {
    if (!context) {
      return '';
    }

    var c = context.toString();
    var val = hash[c];
    var fn = typeof commands[c] === 'function' ? commands[c] : null;

    if (fn) {
      context = val;
      val = fn.apply(this, arguments);
    }

    return val;
  });
};

Handlebars.createOptionsHelpers = function (options) {
  Handlebars.registerHelper('option', function (optName) {
    return options[optName];
  });
};

Handlebars.registerHelper('linebreaks', function (text) {
  if (!text) {
    return '';
  }

  var html = text.replace(/\n/g, '<br><br>');

  return new Handlebars.SafeString(html);
});
