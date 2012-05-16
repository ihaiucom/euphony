// Generated by CoffeeScript 1.3.1
(function() {
  var LoaderWidget;

  LoaderWidget = (function() {

    LoaderWidget.name = 'LoaderWidget';

    LoaderWidget.prototype.opts = {
      color: '#aaaaaa',
      width: 4
    };

    function LoaderWidget() {
      var $window;
      $window = $(window);
      this.overlay = $('<div>').width($window.width()).height($window.height()).hide().css({
        position: 'absolute',
        top: 0,
        left: 0,
        'z-index': 10000,
        background: 'rgba(0, 0, 0, 0.7)',
        'text-align': 'center'
      }).appendTo(document.body).on('selectstart', (function() {
        return false;
      }));
      this.box = $('<div>').width(300).height(200).css({
        position: 'absolute',
        top: ($window.height() - 200) / 2,
        left: ($window.width() - 300) / 2
      }).appendTo(this.overlay);
      this.canvas = $('<div>').height(100).appendTo(this.box);
      this.text = $('<div>').css({
        color: '#ddd',
        'font-size': '0.9em',
        cursor: 'default'
      }).appendTo(this.box);
    }

    LoaderWidget.prototype.message = function(msg) {
      if (!this.isActive) {
        this.start();
      }
      return this.text.html(msg);
    };

    LoaderWidget.prototype.start = function() {
      this.overlay.fadeIn();
      if (this.spin) {
        this.spin.spin(this.canvas[0]);
      } else {
        this.spin = new Spinner(this.opts);
        this.spin.spin(this.canvas[0]);
      }
      return this.isActive = true;
    };

    LoaderWidget.prototype.stop = function() {
      var _ref;
      this.overlay.fadeOut('slow');
      if ((_ref = this.spin) != null) {
        _ref.stop();
      }
      return this.isActive = false;
    };

    return LoaderWidget;

  })();

  this.LoaderWidget = LoaderWidget;

}).call(this);
