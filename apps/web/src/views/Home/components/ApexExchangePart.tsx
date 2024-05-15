
const ApexExchangePart = () => {
    return (
        <div>
            <section className='p-28 mx-auto grid place-items-center max-md:p-5'>
                <div className="grid grid-cols-12 place-items-center max-md:block">
                    <div className="col-span-4 space-y-5">
                        <p className='text-2xl font-semibold'>ACCELERATE WITH</p>
                        <p className='text-6xl font-bold'>ApeX Pro</p>
                        <p className='text-xl leading-normal font-medium'>Permissionless, non-custodial, and non-KYC DEX delivering cross-margined perpetual contracts with multi-chain support, up to 30x leverage and instant settlement.</p>
                        <button className='bg-yellow-500 px-20 py-5 rounded-[50px] text-xl'>Launch App</button>
                    </div>
                    <div className="col-span-8 space-y-5 max-md:my-10">
                        {/* <div className="grid grid-flow-row"> */}
                        <div className="flex gap-5 border-[2px] border-white border-[2px] bg-gray-800  backdrop-blur-2xl min-box drop-shadow-2xl items-center align-middle px-14 pe-40 py-5 rounded-xl w-full max-md:px-5 max-md:pe-3 max-md:py-5">
                            <div className="img-gif">
                                <video autoPlay loop className='w-20 rounded'><source src="https://www.apex.exchange/static/videos/apex_1.webm" type="video/mp4" /></video>
                            </div>
                            <div className="texts">
                                <p className='text-xl'>Maximize Returns, Minimize Fees</p>
                                <p className='text-[17px]'>Maker: 0.02% / Taker: 0.05%</p>
                            </div>
                        </div>

                        <div className="flex gap-5 border-white border-[2px] bg-gray-800  backdrop-blur-2xl min-box drop-shadow-2xl dark:bg-gray-800 dark:text-white  items-center align-middle px-14  py-5 rounded-xl w-full max-md:px-5">
                            <div className="img-gif">
                                <video autoPlay loop className='w-20 rounded'><source src="https://www.apex.exchange/static/videos/apex_2.webm" type="video/mp4" /></video>
                            </div>
                            <div className="texts">
                                <p className='text-xl'>Seamless Decentralized Trading</p>
                                <p className='text-[17px]'>Intuitive Trading Experience with Order books</p>
                            </div>
                        </div>
                        <div className="flex gap-5 border-white border-[2px] bg-gray-800  backdrop-blur-2xl min-box drop-shadow-2xl dark:bg-gray-800 dark:text-white  items-center align-middle px-14  py-5 rounded-xl w-full max-md:px-5">
                            <div className="img-gif">
                                <video autoPlay loop className='w-20 rounded'><source src="https://www.apex.exchange/static/videos/apex_3.webm" type="video/mp4" /></video>
                            </div>
                            <div className="texts">
                                <p className='text-xl'>Stay Ahead with High-Speed Trading</p>
                                <p className='text-[17px]'>Up to 50 Trades and 1,000 Orders per Second</p>
                            </div>
                        </div>
                        <div className="flex gap-5 border-white border-[2px] bg-gray-800  backdrop-blur-2xl min-box drop-shadow-2xl dark:bg-gray-800 dark:text-white  items-center align-middle px-14  py-5 rounded-xl w-full max-md:px-5">
                            <div className="img-gif">
                                <video autoPlay loop className='w-20 rounded'><source src="https://www.apex.exchange/static/videos/apex_4.webm" type="video/mp4" /></video>
                            </div>
                            <div className="texts">
                                <p className='text-xl'>Enhanced Privacy and Security</p>
                                <p className='text-[17px]'>Guaranteed by Zero Knowledge Proofs and Validium</p>
                            </div>
                        </div>
                        <div className="flex gap-5 border-white border-[2px] bg-gray-800  backdrop-blur-2xl min-box drop-shadow-2xl dark:bg-gray-800 dark:text-white  items-center align-middle px-14  py-5 rounded-xl w-full max-md:px-3">
                            <div className="img-gif">
                                <video autoPlay loop className='w-20 rounded'><source src="https://www.apex.exchange/static/videos/apex_5.webm" type="video/mp4" /></video>
                            </div>
                            <div className="texts">
                                <p className='text-xl'>Unlock Additional Benefits via Revenue Sharing</p>
                                <p className='text-[17px]'>Earn Real Yield with ApeX Staking and SLP</p>
                                <div className="flex items-center text-[16px] py-1 gap-10">
                                    <a href="" className="flex items-center gap-1">
                                        Staking
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                    </a>
                                    <a href="" className="flex items-center gap-1">
                                        SLP V2
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ApexExchangePart