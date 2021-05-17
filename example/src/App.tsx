import React, { useCallback, useState } from 'react'
import MercadoPagoCheckout from 'react-mercadopago-checkout'

const App = () => {
  const [preferenceId, setPreferenceId] = useState<string | undefined>()

  const handleCheckout = useCallback(async () => {
    const response = await fetch('YOUR BACKEND URL THAT PROCESS THE PAYMENT')

    const data = await response.json();
    setPreferenceId(data['id'])
  }, [])

  return (<>
    <button onClick={handleCheckout}>Open checkout</button>
    { preferenceId && <MercadoPagoCheckout
      publicKey={process.env.REACT_APP_MERCADOPAGO_PUBLIC_KEY as string}
      preferenceId={preferenceId}
    />
    }
  </>)
}

export default App
