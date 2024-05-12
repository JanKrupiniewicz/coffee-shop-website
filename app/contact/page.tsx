export default function Contact() {
    return (
        <div className="m-5 text-center">
            <h1 className="text-center text-5xl fraunces my-5">
                Contact Us
            </h1>
            <div className="flex justify-center items-center">
                <form className="w-full md:w-3/4" action="">
                    <div className="flex flex-col items-center">
                        <div className="text-sm lato flex justify-between w-full">
                            <input type="text" placeholder="First Name" className="p-5 bg-gray-100 border-l border-t border-gray-600 w-1/2" />
                            <input type="text" placeholder="Last Name" className="p-5 bg-gray-100 border border-gray-600 w-1/2" />
                        </div>
                        <div className="text-sm lato flex justify-between w-full">
                            <input type="email" placeholder="Email" className="p-5 bg-gray-100 border border-gray-600 w-1/2" />
                            <input type="text" placeholder="Phone" className="p-5 bg-gray-100 border-r border-b border-gray-600 w-1/2" />
                        </div>

                        <textarea 
                            name=""
                            id="" 
                            cols={30} 
                            rows={10} 
                            placeholder="Type your message here..." 
                            className="p-5 bg-gray-100 text-sm border-l border-r border-b border-gray-600 w-full"
                        ></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button 
                            className="bg-grey-500 w-1/3 border-b border-l border-r border-gray-600 lato text-md text-gray-800 p-5 hover:bg-stone-500 hover:text-white"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
