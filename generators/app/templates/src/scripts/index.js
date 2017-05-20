(function ($, nx, global) {

  var Widget = nx.declare({
    statics: {
      options: {
        interval: 300
      }
    },
    methods: {
      init: function (inOptions) {
        this.options = $.extend({}, Widget.options, inOptions);

        this.inject();
      },
      inject: function () {
        var $html = $('<div class="<%= project_name %>"><span>返回顶部</span></div>');
        $(document.body).append($html);
      }
    }
  });


  $.fn.<%= projectName %> = function (inOptions) {
    new Widget(inOptions);
  };

}($, nx, nx.GLOBAL));

