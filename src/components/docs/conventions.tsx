import { CodeSection } from './code'

export default function Conventions() {
    return (
        <div className="flex items-start justify-between w-10/12 m-auto">
            <CodeSection type="big">
                <div>
                    <span className="text-neutral-500">1.</span> For nested route like this
                    <span className="text-blue-500"> "users/new/payments"</span> create this <br />
                    <span className="text-blue-500">&nbsp;&nbsp; "users@new@payments"</span> route folder.
                    <br />
                    <br />
                    <span className="text-neutral-500">2.</span> For dynamic routes create folder with "_" (underscore)<br />
                    &nbsp;&nbsp; at the beggining ex: <span className="text-blue-500"> "_users"</span>
                </div>
            </CodeSection>
            <div className='group w-1/2 px-8 rounded-xl flex flex-col items-start text-left gap-2 -mt-2'>
                <h1 className='tracking-tighter font-black text-2xl lg:text-3xl m-4 flex items-center gap-1'>
                    <span className='rounded-full w-8 text-sm mx-2 h-8 flex items-center justify-center p-2
                            bg-blue-500/40 text-blue-500'>
                        3
                    </span>
                    Conventions
                </h1>
                <div className='px-4 text-sm'>
                    To have nested <CodeSection type="small">API</CodeSection> routes use <CodeSection type="small">"@"</CodeSection> symbol,
                    and for dynamic routes use <CodeSection type="small">"_"</CodeSection> underscore symbol.
                </div>
            </div>
        </div>
    )
}
