var app_routes = [
  {
    path: '/bid/',
    templateUrl: './bid.html',
    on: {
      pageInit: function (e, page) {
        var request = {};

        request.action = 'radios_refresh';
        sendRequest(request, socket_radios);

        page.$el.find('#radios_action_btn').on('click', function () {
          radios_action_sheet.open();
        });
      },
    }
  },
];
