export type Locale =
  | 'es-AR'
  | 'es-CL'
  | 'es-CO'
  | 'es-MX'
  | 'es-VE'
  | 'es-UY'
  | 'es-PE'
  | 'pt-BR'
  | 'en-US'

interface RenderParams {
  /** Selector (id, class) for the container element */
  container: string
  /** Label for the checkout trigger button */
  label?: string
  /** Type for the checkout trigger button */
  type?: string
}

interface ThemeParams {
  /** Checkout elements color (e.g., buttons, labels) */
  elementsColor?: string
  /** Color for the checkout header */
  headerColor?: string
}

export interface CheckoutParams {
  preference: {
    id: string
  }
  autoOpen?: boolean
  /** Visual customization data */
  theme?: ThemeParams
}

export interface Checkout {
  render: (params: RenderParams) => void
  open: () => void
}

export interface MercadoPagoCheckoutProps {
  publicKey: string
  preferenceId: string
  options?: {
    locale?: Locale
    theme?: ThemeParams
  }
}
