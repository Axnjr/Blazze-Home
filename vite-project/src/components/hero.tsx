// import { Balancer } from "react-wrap-balancer"

export default function Hero() {
    return (
        <div className="w-full h-fit flex flex-col gap-4 items-center justify-start pt-24 ">
            <div className="bg-neutral-100 dark:bg-neutral-900 py-1 px-2 rounded-lg text-base font-medium">
                🎉 Introducing yet another js framework, Blazze.js ✨
            </div>
            <div className="relative flex w-fit mx-auto text-center">
                <h1 className="text-5xl sm:text-6xl lg:text-6xl text-center tracking-tighter font-[700]
                px-8 py-2 rounded-2xl lg:[word-spacing:-1.5px] text-black dark:text-white">
                    Build your web apps with ease
                </h1>
            </div>
            <div className="max-w-2/3 w-8/12 text-center font-medium text-sm md:text-lg tracking-tight leading-0 my-2 text-zinc-500">
                Blazze.js enables you to write Typesafe API's for the web with ease and powerfull Rust-based JavaScript
                tooling for the fastest builds. It makes you complete your projects blazzingly fast.
            </div>

            <div className="flex items-center justify-center gap-5 z-50">
                <button className="py-2 px-4 dark:bg-white bg-black text-white dark:text-black text-sm md:text-base rounded-xl hover:bg-black/90 dark:hover:bg-white/90">
                    Star on Github🎉
                </button>
                <button className="px-4 py-2 rounded-xl flex items-center dark:hover:bg-neutral-900 z-50
			    bg-white dark:bg-neutral-950 dark:border-neutral-900 border-neutral-100 border-2 group hover:bg-neutral-100 ">
                    Get Started 🚀
                </button>
            </div>

            <div className="w-11/12 h-screen mt-12 shadow-[0_0_8rem_-0.5rem_#862FE7] rounded-2xl">
                {/* <iframe src="https://codesandbox.io/p/devbox/blazze-js-app-3fvzgj?file=%2Fapi%2Fv1%2Fusers%2FGET.ts&embed=1&showConsole=true&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clrdeay4f0006356hfeczlqeg%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clrdeay4e0002356hdx9yyzhf%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clrdeay4e0004356h1u0953ke%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clrdeay4e0005356hdeii9juj%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clrdeay4e0002356hdx9yyzhf%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clrdeay4d0001356hvynu2dp9%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522id%2522%253A%2522clreqay050002356hg5jbfnuh%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A5%252C%2522startColumn%2522%253A35%252C%2522endLineNumber%2522%253A5%252C%2522endColumn%2522%253A35%257D%255D%252C%2522filepath%2522%253A%2522%252Fapi%252Fv1%252Fnew%252FGET.ts%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522clrdeay4e0002356hdx9yyzhf%2522%252C%2522activeTabId%2522%253A%2522clreqay050002356hg5jbfnuh%2522%257D%252C%2522clrdeay4e0005356hdeii9juj%2522%253A%257B%2522id%2522%253A%2522clrdeay4e0005356hdeii9juj%2522%252C%2522activeTabId%2522%253A%2522clreqhji400jb356hb6acpu39%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A3000%252C%2522id%2522%253A%2522clreqhji400jb356hb6acpu39%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252Findex.html%2522%257D%255D%257D%252C%2522clrdeay4e0004356h1u0953ke%2522%253A%257B%2522id%2522%253A%2522clrdeay4e0004356h1u0953ke%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clreqc6u800f8356hhw1qlbhv%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clreqc7zo000dehhw8lxscsnu%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clreqc6u800f8356hhw1qlbhv%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D"
                    // style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
                    className="w-full h-full rounded-lg overflow-hidden"
                    title="Blazze.js App"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe> */}
            </div>

        </div>
    )
}


{/* <div className="rounded-2xl h-96 lg:w-full md:h-[34rem] mt-4 shadow-[0_0_8rem_.5rem_#669eff] lg:shadow-none">
    <section className="flex flex-col lg:flex-row items-center justify-center gap-2 w-11/12 h-full m-auto">
        <img className="w-1/2 h-full hidden lg:block lg:scale-[1.005] lg:shadow-[0_0_8rem_.5rem_#669eff] rounded-2xl" src="./dir.svg" alt="" />
        <img className="w-full z-10 bg-cover lg:w-1/2 h-full lg:shadow-[0_0_8rem_.5rem_#669eff] rounded-2xl" src="./img.svg" alt="" />
    </section>
</div> */}
