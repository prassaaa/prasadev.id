import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Button } from '@/components/ui/button'
import './index.css'

function Smoke() {
  const [count, setCount] = useState(0)
  return <main className="flex gap-4 p-8"><Button onClick={() => setCount(count + 1)}>Count {count}</Button><Button disabled>Disabled</Button><Button asChild variant="outline"><a href="#target">Anchor</a></Button><p id="target">Target</p></main>
}
createRoot(document.getElementById('root')!).render(<Smoke />)
