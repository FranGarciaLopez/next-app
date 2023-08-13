import { Counter } from "./Counter.jsx"

export default function PostLayout ({ children }) {
          return (
                    <div>
                              <Counter />
                              {children}
                    </div>
          )
}