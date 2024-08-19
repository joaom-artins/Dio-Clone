import React from 'react'

import {ButtonContainer} from './styles'

const Button =({title,variant = "primary", onCLick}) => {
  return (
    <ButtonContainer variant = {variant} onClick={onCLick} title= {title}>
        {title}
    </ButtonContainer>
  )
}

export {Button}
