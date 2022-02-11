import { Product } from '@common/types/product';


type AvailableChoices = "color" | "size" | string

export type Choices = {
  [P in AvailableChoices]: string
}

export function getVariant(product: Product, choices: Choices) {

  const variant = product.variants.find((variant) => {
    console.log(variant.options)
    console.log("SHOULD MATCH")
    console.log(choices)
  })

  return variant
}
