
import type { InferGetStaticPropsType } from 'next';
import { getAllProducts } from '@framework/product';
import { getConfig } from "@framework/api/config"
import { Layout } from '@components/common'
import { ProductCard } from "@components/product"
import { Grid, Hero, Marquee } from '@components/ui'

export async function getStaticProps() {
  const config = getConfig()
  const products = await getAllProducts(config)

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}

export default function Home({
  products
}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
      <Grid>
        {products.slice(0, 3).map(product =>
          <ProductCard
            key={product.id}
            product={product}
          />
        )}
      </Grid>
      <Hero
        headline="Cookies, ice cream and muffin"
        description="Pudding jujubes jelly-o cotton candy dessert powder. Jelly cheesecake sweet danish icing dragée gummi bears marzipan. Jelly-o cupcake danish cake brownie danish. Jelly beans gummi bears cupcake fruitcake gummies cheesecake. Pastry chocolate cake candy canes sweet roll candy oat cake. Candy biscuit shortbread cupcake fruitcake. Icing topping cake bonbon candy canes gummi bears icing powder. Toffee pudding powder liquorice lemon drops bonbon carrot cake oat cake. d"
      />
      <Marquee>
      {products.slice(0, 3).map(product =>
        <ProductCard
          key={product.id}
          variant="slim"
          product={product}
        />
      )}
      </Marquee>
      <Grid layout="B">
        {products.slice(0, 3).map(product =>
          <ProductCard
            key={product.id}
            product={product}
          />
        )}
      </Grid>
      <Marquee variant="secondary">
      { products.slice(0, 3).map(product =>
        <ProductCard
          key={product.id}
          variant="slim"
          product={product}
        />
      )}
      </Marquee>
    </>
  )
}


Home.Layout = Layout
