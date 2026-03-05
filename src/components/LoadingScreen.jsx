import { useState, useEffect, useRef } from 'react'

export default function LoadingScreen({ onDone }) {
  const [count, setCount] = useState(0)
  const [exit, setExit] = useState(false)
  const intervalRef = useRef(null)

  const isReturn = typeof sessionStorage !== 'undefined' && sessionStorage.getItem('visited')

  useEffect(() => {
    if (isReturn) {
      onDone()
      return
    }
    sessionStorage.setItem('visited', '1')

    let current = 0
    const duration = 1800
    const steps = 40
    const step = duration / steps

    intervalRef.current = setInterval(() => {
      current += Math.floor(Math.random() * 6) + 2
      if (current >= 100) {
        current = 100
        clearInterval(intervalRef.current)
        setTimeout(() => {
          setExit(true)
          setTimeout(onDone, 800)
        }, 300)
      }
      setCount(current)
    }, step)

    return () => clearInterval(intervalRef.current)
  }, [])

  if (isReturn) return null

  const hundreds = Math.floor(count / 100)
  const tens = Math.floor((count % 100) / 10)
  const ones = count % 10

  return (
    <div className="loading-container" style={{ pointerEvents: exit ? 'none' : 'all' }}>
      <div className={`loading-screen ${exit ? 'exit' : ''}`}>
        <div className="loading-progress">
          <div className="loading-progress-inner" style={{ height: `${count}%` }} />
        </div>
        <div className="loading-numbers">
          <div className="loading-number-group">
            <div className="loading-number-wrap" style={{ transform: `translateY(${-hundreds * 100}%)` }}>
              {[0, 1].map(n => <span key={n} className="loading-number">{n}</span>)}
            </div>
          </div>
          <div className="loading-number-group">
            <div className="loading-number-wrap" style={{ transform: `translateY(${-tens * 10}%)` }}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => <span key={n} className="loading-number">{n}</span>)}
            </div>
          </div>
          <div className="loading-number-group">
            <div className="loading-number-wrap" style={{ transform: `translateY(${-ones * 10}%)` }}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => <span key={n} className="loading-number">{n}</span>)}
            </div>
          </div>
          <div className="loading-pct-wrap">
            <span className="loading-number">%</span>
          </div>
        </div>
      </div>
    </div>
  )
}
