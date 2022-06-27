import { calculateRange } from '../../services/calculate-range'
import { PaginationContext } from '../../services/pagination-context'
import { TableColor } from '../../services/table-color-context'
import React, { useContext } from 'react'

interface PaginationNumberProps {
  data: Array<{ [key: string]: any }>
  entries: number
}

export const PaginationNumber: React.FC<PaginationNumberProps> = ({
  data,
  entries,
}): JSX.Element => {
  const bgColor = useContext(TableColor).value
  const pageNo: number = useContext(PaginationContext).value
  const setPageNo: React.Dispatch<React.SetStateAction<number>> =
    useContext(PaginationContext).setValue

  return (
    <span data-testid="pagination-btn-container">
      {calculateRange(data, entries).map((btn) => (
        <button
          className={btn === pageNo ? 'active' : ''}
          style={btn === pageNo ? { backgroundColor: bgColor } : {}}
          aria-controls="data-table"
          key={btn}
          onClick={() => setPageNo(btn)}
        >
          {btn}
        </button>
      ))}
    </span>
  )
}
