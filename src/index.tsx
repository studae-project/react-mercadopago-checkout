import React, { useEffect } from 'react'
import {
  Checkout, CheckoutParams, Locale,
  // eslint-disable-next-line no-unused-vars
  MercadoPagoCheckoutProps
} from '../src/typings'

declare global {
  class MercadoPago {
    constructor(publicKey: string, options?: { locale: Locale })
    checkout: (params: CheckoutParams) => Checkout
  }
}

const MercadoPagoCheckout: React.FC<MercadoPagoCheckoutProps> = ({
  publicKey,
  preferenceId: id,
  options
}) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://sdk.mercadopago.com/js/v2'
    script.onload = () => {
      const mercadopago = new MercadoPago(
        publicKey,
        options?.locale ? { locale: options.locale } : undefined
      )
      mercadopago.checkout({
        preference: { id },
        autoOpen: true,
        theme: options?.theme
      })
    }

    document.body.appendChild(script)

    return () => {
      for (let i = document.body.children.length - 1; i > document.body.children.length - 3; i--)
        document.body.removeChild(document.body.children[i])
      document.body.removeChild(script)
    }
  }, [])

  return null
}

export default MercadoPagoCheckout