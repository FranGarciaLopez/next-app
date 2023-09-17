/* import { Counter } from "./Counter.jsx" */

export default function PostLayout ({ children }) {
          return (
                    <div>
                              <marquee style={{ background: 'black', color: 'white' }}>Esta es la mejor web.</marquee>
                              {/* <Counter /> */}
                              {children}
                    </div>
          )
}