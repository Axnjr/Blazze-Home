import { CodeSection } from './code'

export default function StartBuilding() {
  return (
    <div className="flex items-start justify-between w-10/12 m-auto">
                    <CodeSection type="big">
                        <div>
                            <span className="text-neutral-500 text-xs">_users/GET.ts</span>
                            <br />
                            <br />
                            import {"{"} <span className="text-fuchsia-500">Request, Response</span> {"}"} from <span className="text-blue-500">"express"</span>;
                            <br />
                            <br />
                            <span className="text-cyan-500">export </span>default async function (<span className="text-fuchsia-500">req</span>: Request,<span className="text-fuchsia-500">res</span>: Response){"{"}
                            <br />
                            &nbsp;&nbsp;&nbsp; <span className="text-neutral-500">// do something usefull here ...</span><br />
                            &nbsp;&nbsp;&nbsp; let query = req.query;<br />
                            &nbsp;&nbsp;&nbsp; let params = req.params;<br />
                            {"}"}
                        </div>
                    </CodeSection>
                    <div className='group w-1/2 px-8 rounded-xl flex flex-col items-start text-left gap-2 -mt-2'>
                        <h1 className='tracking-tighter font-black text-2xl lg:text-3xl m-4 flex items-center gap-1'>
                            <span className='rounded-full w-8 text-sm mx-2 h-8 flex items-center justify-center p-2
                            bg-blue-500/40 text-blue-500'>
                                4
                            </span>
                            Start Building !
                        </h1>
                        <div className='px-4 text-sm'>
                            You need to <CodeSection type="small">export</CodeSection> a default normal function from each file,
                            this function recives express <CodeSection type="small">req</CodeSection> & <CodeSection type="small">res</CodeSection> objects.
                            <div className="bg-blue-500/30 text-blue-500 p-2 w-full rounded-lg my-3 flex items-center">
                                <svg className="w-5 h-5 my-1 mx-2 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="red">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                </svg>
                                Exporting arrow functions can cause build errors.
                            </div>
                        </div>
                    </div>
                </div>
  )
}
