import React from 'react'
import { CodeSection } from './code'

const cliQuestions = [
    "What is your project named ? (myApp)",
    "What will be root endpoint for your project ? (api/v1)",
    "Would you like to use TypeScript ? (yes)",
    "Which port should the server listen to ? (3000)",
    "Where would you like to keep your static content like html, imgs, etc ? (public)",
    "Would you like to enable request caching ?"
]

export default function Create() {
    return (
        <div className="flex items-start justify-between w-10/12 m-auto">
            <CodeSection type="big">
                <div>
                    npm install <span className="text-blue-500">blazze@latest</span>
                    {" >> "}
                    npx <span className="text-fuchsia-500">blazze-init</span>
                    <br />
                    <br />
                    {cliQuestions.map((q, id) => {
                        return <React.Fragment key={id}><span><span className="text-neutral-400 dark:text-neutral-500">{id+1}&nbsp;</span> {q}</span><br /></React.Fragment>
                    })}
                </div>
            </CodeSection>
            <div className='group w-1/2 px-8 rounded-xl flex flex-col items-start text-left gap-2 -mt-2'>
                <h1 className='tracking-tighter font-black text-2xl lg:text-3xl m-4 flex items-center gap-1'>
                    <span className='rounded-full w-8 text-sm mx-2 h-8 flex items-center justify-center p-2
                            bg-blue-500/40 text-blue-500'>
                        1
                    </span>
                    Create & Configure
                </h1>
                <div className='px-4 text-sm'>
                    Get started quickly with Blazze cli. You will be asked a few questions
                    to configure <CodeSection type="small">blazze.config.js</CodeSection>
                </div>
            </div>
        </div>
    )
}
