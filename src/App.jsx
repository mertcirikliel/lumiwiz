import { useState } from 'react'
import { Button } from '@/components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-4xl font-bold">Lumiwiz</h1>
      <p>Electron + Vite + React + Tailwind</p>
      <Button onClick={() => setCount(c => c + 1)}>
        Count is {count}
      </Button>
    </div>
  )
}

export default App
