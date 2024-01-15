"use client";

export default function Docs() {

    function copy(text: string) {
        navigator.clipboard.writeText(text)
    }

    function CodeSection({ children }: { children?: React.ReactNode }) {
        return <code 
        // onClick={() => copy(code)} 
        className="text-sm tracking-tighter text-left w-1/2 p-4
        bg-neutral-950/90 rounded-lg mx-2 cursor-pointer text-white">
            {children}
        </code>
    }

    return (
        <div className='w-full h-fit relative mt-32 py-12 text-center m-auto overflow-hidden flex flex-col justify-center items-center'>
            <div className='w-fit h-fit p-4 bg-blue-500/40 rounded-full my-6'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} className="w-16 h-16 stroke-blue-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
            </div>

            <h1 className='text-4xl sm:text-5xl md:text-6xl tracking-tighter font-black px-4'>
                Start Building with Blazze.js
            </h1>

            <div className='px-20 md:px-0 max-w-xl m-auto my-12 text-md  text-neutral-500'>
                Not a new framework for you to learn, Zero learning curve, built to enhance developer experience.
                Get started by checking out few foundational rules of blazze.
            </div>

            <section className="w-full h-screen">
                <div className="flex items-center justify-between w-10/12 m-auto">
                    <CodeSection>
                        <div>
                            npm install blazze@latest <br/>
                            npx blazze-init
                        </div>
                    </CodeSection>
                    <div className='group w-1/2 h-52 md:h-44 p-8 rounded-xl flex 
						flex-col items-start justify-center text-left gap-2'>
                        <h1 className='tracking-tighter font-black text-2xl lg:text-3xl m-4 flex items-center gap-1'>
                            <span className='rounded-full w-10 text-base mx-2 h-10 flex items-center justify-center p-2
                            bg-black text-white dark:bg-white dark:text-white'>
                                1
                            </span>
                            Create Project
                        </h1>
                        <div className='px-4 text-sm'></div>
                    </div>
                </div>
            </section>

            {/* <div className="flex items-center justify-center gap-5 z-50">
                <button className="py-2 px-4 bg-white text-black para text-sm md:text-base">
                    <a href="https://github.com/Axnjr/Blazze.js/blob/main/README.md">Quick Docs 🤓</a>
                </button>
            </div> */}

            <div className="mt-24 w-full px-6 pt-12 border-t border-neutral-800">
                Written in React x TypeScript with devotion by <a className="underline" href="https://twitter.com/YC59094"> Axn</a> for my project Blazze.js. Improve this page on <a className="underline" href="https://github.com/Axnjr/Blazze.js">Github</a>.
            </div>
            {/* <svg className='m-auto absolute z-0 left-1/2 bottom-0 -translate-x-1/2 translate-y-80' fill="none" height={640} viewBox="0 0 1744 640" width={1744} xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_f_521_2815)" opacity="0.25"><ellipse cx={872} cy={330} fill="#D6DBDC" rx={792} ry={230} /></g><g filter="url(#filter1_f_521_2815)" opacity="0.2"><ellipse cx={464} cy="411.5" fill="#6ADDF4" rx={256} ry="129.5" /></g><g filter="url(#filter2_f_521_2815)" opacity="0.2"><ellipse cx={592} cy="364.5" fill="#6AB2F4" rx={128} ry="176.5" /></g><g filter="url(#filter3_f_521_2815)" opacity="0.2"><ellipse cx={1162} cy="396.5" fill="#6ADDF4" rx={256} ry="129.5" /></g><g filter="url(#filter4_f_521_2815)" opacity="0.2"><ellipse cx={1162} cy="256.5" fill="#6AB2F4" rx={128} ry="176.5" /></g><defs><filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height={620} id="filter0_f_521_2815" width={1744} x={0} y={20}><feFlood floodOpacity={0} result="BackgroundImageFix" /><feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" /><feGaussianBlur result="effect1_foregroundBlur_521_2815" stdDeviation={40} /></filter><filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height={419} id="filter1_f_521_2815" width={672} x={128} y={202}><feFlood floodOpacity={0} result="BackgroundImageFix" /><feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" /><feGaussianBlur result="effect1_foregroundBlur_521_2815" stdDeviation={40} /></filter><filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height={513} id="filter2_f_521_2815" width={416} x={384} y={108}><feFlood floodOpacity={0} result="BackgroundImageFix" /><feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" /><feGaussianBlur result="effect1_foregroundBlur_521_2815" stdDeviation={40} /></filter><filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height={419} id="filter3_f_521_2815" width={672} x={826} y={187}><feFlood floodOpacity={0} result="BackgroundImageFix" /><feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" /><feGaussianBlur result="effect1_foregroundBlur_521_2815" stdDeviation={40} /></filter><filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height={513} id="filter4_f_521_2815" width={416} x={954} y={0}><feFlood floodOpacity={0} result="BackgroundImageFix" /><feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" /><feGaussianBlur result="effect1_foregroundBlur_521_2815" stdDeviation={40} /></filter></defs></svg> */}
        </div>
    )
}
{/* <div className='w-2/3 h-3/4 z-10 p-4 grid place-content-center rounded-xl m-auto bg-[#0a0a0a] mt-4 border border-neutral-800'>
    <ul className='para text-neutral-50 m-auto'>
        <li className='flex items-center my-4'>
            <div className='mx-2 w-6 h-6 p-1 text-xs bg-neutral-50 text-zinc-700 rounded-full'>1</div>
            Start by creating a new project using blazze CLI :
            <CodeSection code="npx blazze-init" />
        </li>
        <li className='flex flex-col items-center my-4'>
            <div className="flex items-center">
                <div className='mx-2 w-6 h-6 p-1 text-xs bg-neutral-50 text-zinc-700 rounded-full'>2</div>
                You will be asked a few questions to configure <CodeSection code="blazze.config.js" />
            </div>
            <br />
            <div className='cursor-pointer w-64 h-10 border border-neutral-500/10 mx-2 bg-neutral-800/40 rounded-lg flex items-center justify-between p-4'>
                <code className="text-sm">npx blazze-init</code>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-6 h-6 hover:bg-neutral-200/70 p-1 rounded-md stroke-neutral-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                </svg>
            </div>
        </li>
    </ul>
</div> */}