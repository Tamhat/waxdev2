
const SkoofyPart = () => {
    return (
        <section className='grid place-items-center mx-auto'>
            <div className="grid  grid-cols-6 place-items-center gap-10 max-md:block  max-md:gap-2  max-md:space-y-10">
                <div className="col-span-2 p-10 rounded-xl bg-gray-800" >
                    <a href="" className="space-y-10">
                        <div className="flex justify-between items-center gap-10">
                            <h1 className='text-3xl'>Stake BOO</h1>
                            <img className="w-7" src="data:image/png;base64,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" alt="" />
                        </div>
                        <p className='text-xl text-gray-500 w-72'>Stake BOO for xBOO to claim your portion of trade fees from all DEX trades.</p>
                        <a href="" className="text-xl py-5">Stake now</a>
                    </a>
                </div>
                <div className="col-span-2 p-10 rounded-xl bg-gray-800" >
                    <a href="" className="space-y-10">
                        <div className="flex justify-between items-center gap-10">
                            <h1 className='text-3xl'>Earn</h1>
                            <img className="w-10" src="data:image/png;base64,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" alt="" />
                        </div>
                        <p className='text-xl text-gray-500 w-72'>Provide liquidity to pools on SpookySwap and earn fees on swaps.</p>
                        <a href="" className="text-xl py-5">Provide liquidity</a>
                    </a>
                </div>
                <div className="col-span-2 p-10 rounded-xl bg-gray-800" >
                    <a href="" className="space-y-10">
                        <div className="flex justify-between items-center gap-10">
                            <h1 className='text-3xl'>Bridge</h1>
                            <img className="w-10" src="data:image/png;base64,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" alt="" />
                        </div>
                        <p className='text-xl text-gray-500 w-72'>Bridge and Cross-Chain swap tokens using bridges provided by our partners.
                        </p>
                        <a href="" className="text-xl py-5 mt-[50px]">Developer docs</a>
                    </a>
                </div>
            </div>
           
            <div className="max-md:mx-0 max-md:w-96">
                <div className="flex items-start max-md:block w-[87vw]  max-md:w-full my-10  max-md:my-5 justify-between mx-20  max-md:mx-2  bg-gray-800 px-10  max-md:px-10 font-mono py-10 rounded-2xl  max-md:space-y-10  max-md:gap-10" >
                    <div className="space-y-5">
                        <img src="https://spooky.fi/static/media/SpookySwapFooter.1caeda376d21e961e314e9f5ae0fefe7.svg" alt="" className="w-[200px]"/>
                        <div className="flex gap-3 items-center justify-around">
                            {/* <div> */}
                            <a href="https://discord.com/invite/9sypcPUMnS" target="_blank" rel="noopener noreferrer" className="AboutFooter__SocialLink-sc-6ec6c422-6 eiFKdQ"><img className="w-10" src="https://www.svgrepo.com/show/452188/discord.svg" alt /></a>
                            <a href="https://discord.com/invite/9sypcPUMnS" target="_blank" rel="noopener noreferrer" className="AboutFooter__SocialLink-sc-6ec6c422-6 eiFKdQ"><img className="w-10" src="https://www.svgrepo.com/show/475689/twitter-color.svg" alt /></a>
                            <a href="https://discord.com/invite/9sypcPUMnS" target="_blank" rel="noopener noreferrer" className="AboutFooter__SocialLink-sc-6ec6c422-6 eiFKdQ"><img className="w-10" src="https://www.svgrepo.com/show/452211/github.svg" alt /></a>
                            {/* </div> */}

                        </div>
                        <p className="text-white">© 2024 SpookySwap Team</p>
                    </div>
                    <div className="space-y-5">
                        <h1 className="text-[18px] font-semibold text-white">App</h1>
                        <ul className="space-y-3 font-normal text-[17px] text-white">
                            <li>Swap</li>
                            <li>Liquidity</li>
                            <li>Farms</li>
                        </ul>
                    </div>
                    <div className="space-y-5">
                        <h1 className="text-[18px] font-semibold text-white">Community</h1>
                        <ul className="space-y-3 font-normal text-[17px] text-white">
                            <li>Discord</li>
                            <li>Twitter</li>
                            <li>Telegram</li>
                            <li>Reddit</li>
                        </ul>
                    </div>
                    <div className="space-y-5">
                        <h1 className="text-[18px] font-semibold text-white">Info</h1>
                        <ul className="space-y-3 font-normal text-[17px] text-white">
                            <li>News</li>
                            <li>Medium</li>
                            <li>Docs</li>
                            <li>FAQs</li>
                            <li>Help</li>
                            <li>Media Kit</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="space-y-5">
                        <h1 className="text-[18px] font-semibold text-white">Participate</h1>
                        <ul className="space-y-3 font-normal text-[17px] text-white">
                            <li>Vote</li>
                            <li>Forum</li>
                            <li>Apply for Collab</li>
                            <li>Apply for Token Listing</li>
                            <li>Apply for Farm</li>
                            <li>Bug Bounty</li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default SkoofyPart