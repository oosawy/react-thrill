import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

export function App() {
  const [negative, setNegative] = useState(false)
  const [count, setCount] = useState(0)

  return (
    <div className="space-y-4">
      <Button onClick={() => setCount((count) => count + (negative ? -1 : 1))}>
        count is {count}
      </Button>

      <div className="items-top flex space-x-2">
        <Checkbox
          id="negative"
          onCheckedChange={(checked) => setNegative(checked === true)}
          checked={negative}
        />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="negative"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Decrease count
          </label>
        </div>
      </div>
    </div>
  )
}
