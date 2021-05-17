import React from 'react';
import { Checkout, CheckoutParams, Locale, MercadoPagoCheckoutProps } from '../src/typings';
declare global {
    class MercadoPago {
        constructor(publicKey: string, options?: {
            locale: Locale;
        });
        checkout: (params: CheckoutParams) => Checkout;
    }
}
declare const MercadoPagoCheckout: React.FC<MercadoPagoCheckoutProps>;
export default MercadoPagoCheckout;
