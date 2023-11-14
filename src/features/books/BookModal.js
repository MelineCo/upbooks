export const BookModal = () => {
    return (
        <div class="relative z-10" role="dialog" aria-modal="true">
            {/*
            Background backdrop, show/hide based on modal state.

            Entering: "ease-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
            Leaving: "ease-in duration-200"
            From: "opacity-100"
            To: "opacity-0"
  */}
            <div class="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block"></div>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span class="hidden md:inline-block md:h-screen md:align-middle" aria-hidden="true">&#8203;</span>

                    {/*
                    Modal panel, show/hide based on modal state.

                    Entering: "ease-out duration-300"
                    From: "opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                    To: "opacity-100 translate-y-0 md:scale-100"
                    Leaving: "ease-in duration-200"
                    From: "opacity-100 translate-y-0 md:scale-100"
                    To: "opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
     */}
                    <div class="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                        <div class="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                            <button type="button" class="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8">
                                <span class="sr-only">Close</span>
                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div class="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:items-center lg:gap-x-8">
                                <div class="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                                    <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg" alt="" class="object-cover object-center" />
                                </div>
                                <div class="sm:col-span-8 lg:col-span-7">
                                    <h2 class="text-xl font-medium text-gray-900 sm:pr-12">{book.volumeInfo.title}</h2>

                                    <section aria-labelledby="information-heading" class="mt-1">
                                        <h3 id="information-heading" class="sr-only">Product information</h3>

                                        <p class="font-medium text-gray-900">{book.volumeInfo.authors}</p>
                                    </section>

                                    <section aria-labelledby="options-heading" class="mt-8">
                                        <h3 id="options-heading" class="sr-only">Product options</h3>

                                        <form>
                                            <p class="absolute left-4 top-4 text-center sm:static sm:mt-8">
                                                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">View full details</a>
                                            </p>
                                        </form>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}