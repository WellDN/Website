import { useEffect, useState } from "react";

 export function shuffle<A>(array: A[]): A[] {
    const a = [...array];
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
       
        a[i] = a[j];
       
        a[j] = x;
    }
    return a;
}


const handler = shuffle ([
    'TypeScript',
    'React',
    'CSS',
    'TailwindCSS',
    'HTML',
])

function sleep(ms: number) {
    return new Promise<void>((resolve) => setTimeout(resolve,ms))
}

export function Change() {
    const [show, setShow] = useState(true);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        let running = true
    
        void (async () => {
          while (running) {
            await sleep(3000)
            setShow(false)
            await sleep(500)
            setIndex((index) => index + 1)
            await sleep(500)
            setShow(true)
          }
        })()

        return () => {
            running = false
        }
    }, [])
    return(
        <span className="sm:text-7xl text-5xl font-light pb-5 sm:pb-10 text-cyan-300">
        <span className={`inline-block transition ${
          show ? "ease-out opacity-100" : "ease-in translate-y-2 opacity-0"
        }`}
         >   
            {handler[index % handler.length]}
        </span>
        </span>
    )
}