import { ApiFetcher } from '@common/types/api'
import { Checkout, CheckoutCreatePayload, Maybe } from "@framework/schema"
import { checkoutCreateMutation } from './mutations'

const createCheckout = async (
  fetch: ApiFetcher<{checkoutCreate: CheckoutCreatePayload}>
): Promise<Maybe<Checkout | undefined>> => {
  const { data } = await fetch({
    query: checkoutCreateMutation
  })

  const { checkout } = data.checkoutCreate
  const checkoutId = checkout?.id

  if (checkoutId) {
    const options = {
      expires: SHOPIFY_COOKIE_EXPIRE
    }

    Cookies.set(SHOPIFY_CHECKOUT_ID_COOKIE, checkoutId, options)
    Cookies.set(SHOPIFY_CHECKOUT_URL_COOKIE, checkout?.webUrl, options)
  }

  return checkout
}

export default createCheckout
