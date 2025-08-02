// src/components/sections/Features.jsx
import {
  ChatBubbleOvalLeftIcon,
  BoltIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const Feature = () => {
  return (
    <div className="bg-white">
      <section
        id="features"
        className="relative block px-6 py-10 md:py-20 md:px-10 bg-gray-100 dark:bg-gray-800"
      >
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="my-3 flex items-center justify-center font-Playfair text-2xl text-gray-800 dark:text-gray-100">
            Why work with me?
          </span>
          <h2 className="text-black font-Playfair text-3xl sm:text-4xl dark:text-gray-100">
            Experience, efficiency, and a personalized approach
          </h2>
          <p className="mx-auto my-4 w-full max-w-xl text-center font-Madefor text-gray-600 dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
            turpis ac orci gravida volutpat. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-md border border-black dark:bg-gray-800 dark:border-gray-100 p-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md border bg-gray-300">
              <ChatBubbleOvalLeftIcon className="w-6 h-6 text-black" />
            </div>
            <h3 className="mt-6 text-black dark:text-gray-100">
              Clear Communication
            </h3>
            <p className="my-4 mb-0 font-Madefor text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              gravida efficitur magna, ut tincidunt lorem tristique a.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-md border border-black dark:bg-gray-800 dark:border-gray-100 p-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md border bg-gray-300">
              <BoltIcon className="w-6 h-6 text-black" />
            </div>
            <h3 className="mt-6 text-black dark:text-gray-100">
              Fast Delivery
            </h3>
            <p className="my-4 mb-0 font-Madefor text-gray-600 dark:text-gray-300">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-md border border-black dark:bg-gray-800 dark:border-gray-100 p-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md border bg-gray-300">
              <WrenchScrewdriverIcon className="w-6 h-6 text-black" />
            </div>
            <h3 className="mt-6 text-black dark:text-gray-100">
              Tailored solutions
            </h3>
            <p className="my-4 mb-0 font-Madefor text-gray-600 dark:text-gray-300">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
