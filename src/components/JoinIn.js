import photo from '../sincerely-media-oKbHnbz2njQ-unsplash.jpg'

const JoinIn = () => {
    return (
        <>
            <header className="container max-w-2xl mb-6">
                <div className="bg-slate-50 sm:rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <h3 className="text-xl font-semibold leading-6 text-gray-900">Welcome bookworm!</h3>
                        <div className="mt-2 mb-6 max-w-xl text-sm text-gray-500">
                            <p>We're a place of book lovers.<br />
                                Join in and help others prioritize<br /> their reading piles.
                            </p>
                            <div className="flex flex-col mt-4">
                                <button type="button" class="m-1 rounded-md bg-rose-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Join in</button>
                                <button type="button" class="m-1 rounded-md hover:bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Sign in</button>

                            </div>
                        </div>
                        <img src={photo} alt="bookworm" className="sm:rounded-lg mx:6" />
                    </div>
                </div>
            </header>
        </>
    );
};

export default JoinIn;

