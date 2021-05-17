var react = require('react');

var MercadoPagoCheckout = function MercadoPagoCheckout(_ref) {
  var publicKey = _ref.publicKey,
      id = _ref.preferenceId,
      options = _ref.options;
  react.useEffect(function () {
    var script = document.createElement('script');
    script.src = 'https://sdk.mercadopago.com/js/v2';

    script.onload = function () {
      var mercadopago = new MercadoPago(publicKey, options !== null && options !== void 0 && options.locale ? {
        locale: options.locale
      } : undefined);
      mercadopago.checkout({
        preference: {
          id: id
        },
        autoOpen: true,
        theme: options === null || options === void 0 ? void 0 : options.theme
      });
    };

    document.body.appendChild(script);
    return function () {
      for (var i = document.body.children.length - 1; i > document.body.children.length - 3; i--) {
        document.body.removeChild(document.body.children[i]);
      }

      document.body.removeChild(script);
    };
  }, []);
  return null;
};

module.exports = MercadoPagoCheckout;
//# sourceMappingURL=index.js.map
