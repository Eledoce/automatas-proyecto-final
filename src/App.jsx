import { useState } from 'react'
import Header from './components/Header'
import Automata from './assets/Autamata.svg'

export default function App() {
  const [expression, setExpression] = useState('a')

  const regex = /^[0-9]((\+|\-|\/|\*)[0-9])+$/
  const value = regex.test(expression)
  console.log(expression.match(/([0-9]+|[\+\-\*\/])/g))

  return (
    <div className="font-Roboto flex flex-col h-screen w-screen bg-gray-300 ">
      <Header />
      <main className="grow p-2 flex gap-2 overflow-clip">
        {/* Sección 1 */}
        <section className="w-1/3 bg-gray-50 h-full rounded-md p-5 flex flex-col overflow-y-auto">
          <div className="py-5">
            <TextG className="from-orange-600 to-rose-100 text-3xl font-semibold">
              Expresión
            </TextG>
            <p className="bg-gray-50 text-2xl">{String.raw`/^[0-9]((\+|\-|\/|\*)[0-9])+$/`}</p>
          </div>
          <div className="py-5">
            <TextG className="to-violet-600 from-fuchsia-300 text-3xl font-semibold">
              Automata
            </TextG>
            <img src={Automata} alt="error" className="p-4 h-52 w-full" />
          </div>

          <Tabla
            arr={value ? expression.match(/([0-9]+|[\+\-\*\/])/g) : null}
          />
        </section>

        {/* sección 2 */}
        <section className="w-2/3 bg-gray-50 rounded-md h-full flex justify-center items-center">
          <div className="w-1/2 h-1/2 absolute">
            {/* anim */}
            <div
              className={`absolute top-0 left-0 rounded-2xl h-full w-full scale-110 overflow-clip transition-all z-10 ${
                value ? 'opacity-100' : 'opacity-30'
              }`}
            >
              <div className="relative w-full h-full">
                <Cuadrado>
                  <Circle
                    className="from-red-400 to-yellow-300  animate-spin"
                    style={{ animationDuration: '4s' }}
                  />
                </Cuadrado>
                <Cuadrado className="rotate-90">
                  <Circle
                    className="from-teal-400 to-purple-400 animate-spin"
                    style={{ animationDuration: '3s' }}
                  />
                </Cuadrado>
                <Cuadrado className="-rotate-90">
                  <Circle
                    className="from-orange-400 to-fuchsia-300 animate-spin"
                    style={{ animationDuration: '2s' }}
                  />
                </Cuadrado>
                <Cuadrado className="rotate-180">
                  <Circle
                    className="from-blue-500 to-red-500 animate-spin"
                    style={{ animationDuration: '3s' }}
                  />
                </Cuadrado>
              </div>
            </div>

            <form
              className="absolute border p-5  h-full w-full z-20 bg-gray-200 border-gray-400 rounded-xl shadow-xl"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* colores */}
              <label className="label">
                Expresión a evaluar
                <input
                  type="text"
                  className="txt"
                  autoComplete="off"
                  onChange={(e) => setExpression(e.target.value)}
                />
              </label>
              {expression}
              <br />
              {value ? 'ta bien' : 'ta mal'}
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

const TextG = ({ children, className }) => {
  return (
    <p
      className={`bg-gradient-to-r bg-clip-text text-transparent ${className}`}
    >
      {children}
    </p>
  )
}

const Tabla = ({ arr }) => {
  const a = {
    0: 'NUMERO',
    1: 'NUMERO',
    2: 'NUMERO',
    3: 'NUMERO',
    4: 'NUMERO',
    5: 'NUMERO',
    6: 'NUMERO',
    7: 'NUMERO',
    8: 'NUMERO',
    9: 'NUMERO',
    '+': 'OPERADOR',
    '-': 'OPERADOR',
    '*': 'OPERADOR',
    '/': 'OPERADOR',
  }

  if (!arr) return <></>
  return (
    <table className="table-auto text-center border border-green-800 bg-gray-50 shadow-xl">
      <thead className="border-b border-green-800">
        <tr className="bg-gradient-to-r from-teal-600 to-green-400 text-white ">
          <th>cosa</th>
          <th className="border-l border-green-800">token</th>
        </tr>
      </thead>
      <tbody>
        {arr.map((e, i) => (
          <tr key={e + '' + i} className={i % 2 ? 'bg-teal-100' : ''}>
            <td className="border-r border-green-800">{e}</td>
            <td>{a[e]}</td>
          </tr>
        ))}
      </tbody>
    </table>
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
const Cuadrado = ({ children, className, style }) => {
  return (
    <div
      style={style}
      className={`h-full w-full top-0 left-0 absolute ${className}`}
    >
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
