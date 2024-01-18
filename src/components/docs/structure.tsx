import { CodeSection } from './code'

const methods = ["get", "post", "put", "patch", "delete"]

export default function Structure() {
    return (
        <div className="flex items-start justify-between w-10/12 m-auto flex-row-reerse">
            <CodeSection type="big">
                <div>
                    YourBlazzeApp<br />
                    ├── api/v1 (root-endpoint)<br />
                    │   ├── Route-1<br />
                    │   │   ├── GET.ts<br />
                    │   │   ├── POST.ts<br />
                    │   │   ├── PUT.ts<br />
                    │   │   ├── DELETE.ts<br />
                    │   │   ├── PATCH.ts
                    <br />
                    │   └── Other-routes / ... <br />
                    ├── blazze (for typescript)<br />
                    ├── cache (if enabled)<br />
                    ├── public (static-root)<br />
                    ├── blaze.config.js (from blazze-init)<br />
                    ├── package.json<br />
                    ├── packagelock.json<br />
                    └── ...<br />
                </div>
            </CodeSection>
            <div className='group w-1/2 px-8 rounded-xl flex flex-col items-start text-left gap-2 -mt-2'>
                <h1 className='tracking-tighter font-black text-2xl lg:text-3xl m-4 flex items-center gap-1'>
                    <span className='rounded-full w-8 text-sm mx-2 h-8 flex items-center justify-center p-2
                            bg-blue-500/40 text-blue-500'>
                        2
                    </span>
                    Project Structure
                </h1>
                <div className='px-4 text-sm'>
                    Blazze creates a root endpoint dir that you specified in the cli. You can add your <CodeSection type="small">API</CodeSection> routes in it, each with its own respective files namely:
                    <ul>
                        {
                            methods.map((ele, id) => <li className="flex items-center justify-between my-2 p-1 border-b dark:border-neutral-800" key={id}>
                                <CodeSection type="small">{ele.toLocaleUpperCase()}</CodeSection>
                                To handle {ele} requests
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
