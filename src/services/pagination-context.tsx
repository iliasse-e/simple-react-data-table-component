import { createContext } from 'react'

interface ContextType {
  value: number
  setValue: React.Dispatch<React.SetStateAction<number>> | any
}

export const PaginationContext: React.Context<ContextType> = createContext({
  value: 1,
  setValue: null,
})
