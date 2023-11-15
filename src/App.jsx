import { useState } from 'react'
import Header from './components/Header'
export default function App() {
  const [expression, setExpression] = useState('')

  return (
    <div className="font-Roboto flex flex-col h-screen w-screen bg-gray-300">
      <Header />
      <main className="grow p-2 flex gap-2">
        {/* Sección 1 */}
        <section className="w-1/3 bg-gray-50 h-full rounded-md p-5 flex flex-col">
          <div className="h-1/2">
            <h3 className="text-2xl"> Expresión </h3>
            <p className="border bg-gray-50 ">{`[1-9]`}</p>
          </div>
          <div>
            <h3 className="text-2xl">Automata</h3>

            <img className="border bg-gray-300  h-52 w-full" />
          </div>
        </section>

        {/* sección 2 */}
        <section className="w-2/3 relative bg-gray-50 rounded-md h-full flex justify-center items-center">
          <form className="border p-5 bg-gray-200 border-gray-400 rounded-xl shadow-xl">
            <label className="label">
              Expresión a evaluar
              <input type="text" className="txt" />
            </label>
            ta bien, ta mal
          </form>
          <Anim />
        </section>
      </main>
    </div>
  )
}

const Circle = ({ className, style }) => {
  return (
    <div
      className={`bg-gradient-to-tr h-1/2 w-1/2 rounded-full animate-bounce blur-2xl mix-blend-multiply absolute bottom-0  ${className}`}
      style={style}
    ></div>
  )
}
const Cuadrado = ({ children, className }) => {
  return (
    <div className={`h-full w-full top-0 left-0 absolute ${className}`}>
      {children}
    </div>
  )
}

const Anim = ({ className }) => {
  return (
    <div
      className={`absolute  h-96 w-96 overflow-clip rounded-full top-5 left-5 z-30 ${className}`}
    >
      <div className="relative h-full w-full">
        <Cuadrado>
          <Circle
            style={{ animationDuration: '3s' }}
            className="from-red-400 to-yellow-300"
          />
        </Cuadrado>
        <Cuadrado className="rotate-90">
          <Circle
            style={{ animationDuration: '4s' }}
            className="from-teal-400 to-purple-500"
          />
        </Cuadrado>
        <Cuadrado className="rotate-180">
          <Circle
            style={{ animationDuration: '2s' }}
            className="from-fuchsia-400 to-purple-400"
          />
        </Cuadrado>
        <Cuadrado className="-rotate-90">
          <Circle
            style={{ animationDuration: '2.5s' }}
            className="from-lime-200 to-lime-500"
          />
        </Cuadrado>
      </div>
    </div>
  )
}
