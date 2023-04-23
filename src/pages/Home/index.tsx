import { ShoppingCart } from "phosphor-react"
import into from "../../assets/Intro.png"
import coffee from "../../assets/coffees/americano.png"
import { IntroContainer, IntroImage, Title, Items, CardContent, Subtitle } from "./style"
import { Card } from "./components/Card"
export function Home() {
  return (
    <div>
      <IntroContainer>
        <div>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
          <Items>
            <p> Compra simples e segura</p>
            <p>Entrega rápida e rastreada</p>
            <p>Embalagem mantém o café intacto</p>
            <p>O café chega fresquinho até você</p>
          </Items>
        </div>
        <div>
          <IntroImage src={into} />
        </div>
      </IntroContainer>

      <Subtitle>Nossos Café</Subtitle>
      <Card 
        key={1}
        pathImage={coffee}
        title="Expresso Tradicional"
        description="O tradicional café feito com água quente e grãos moídos"
        value={9.9}
        tags={["Tradicional", "Leite"]}
      />
    </div>
  )
}