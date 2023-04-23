import { Minus, Plus, ShoppingCart } from "phosphor-react"
import { CardContent, CardImage, ItensButton, ShoppingCartButton, SepareteButton, TagsContent } from "./style"
import { useState } from "react"

interface ICardProps {
  pathImage: string
  tags: string[]
  title: string
  description: string
  value: number
}

export function Card(props: ICardProps) {
  const [totalItem, setTotalIten] = useState(1);

  function handleAddItem(){
    setTotalIten(totalItem + 1)
  }

  function handleRemoveItem(){
    if(totalItem > 1) {
      setTotalIten(totalItem - 1)
    }
  }

  function handleAddShoppingCart() {
    console.log('add Shopping cart - ' + totalItem)
  }

  return (
    <CardContent>
          <CardImage src={props.pathImage}/>
        <header>
          <TagsContent>
            {props.tags.map((tag) => {
              return (<p key={tag}>{tag}</p>)
            })}
          </TagsContent>
          <b>{props.title}</b>
          <p>{props.description}</p>
        </header>
        <footer>
          <span>{props.value}</span>
          <ItensButton onClick={handleAddItem}>
            <Plus size={16} weight="bold"/>
          </ItensButton>
          
          <SepareteButton>
          {totalItem}
            </SepareteButton>
          <ItensButton onClick={handleRemoveItem}>
            <Minus size={16} weight="bold" />
          </ItensButton>
          <ShoppingCartButton
            onClick={handleAddShoppingCart}
          >
            <ShoppingCart size={20} weight="fill"/>
          </ShoppingCartButton>
        </footer>
    </CardContent>
  )
}