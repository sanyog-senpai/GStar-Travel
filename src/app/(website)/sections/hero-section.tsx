import Image from "next/image";

export default function Hero() {
  return (
    // Outer frame — creates the white border / whitespace around the section
    <div className="w-full bg-white p-3 md:p-4">
      <section className="relative flex h-[92vh] min-h-162.5 w-full items-end overflow-hidden rounded-2xl md:rounded-3xl">
        {/* Background image */}
        <Image
          src="/section/Background.png"
          alt="Himalayan mountain peak in Nepal"
          fill
          priority
          className="object-cover"
        />

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

        {/* Hero content */}
        <div className="relative z-10 w-full px-6 md:px-10 md:pb-8">
          <div className="max-w-5xl">
            <h1 className="font-poppins text-4xl  font-normal leading-tight text-white md:text-5xl">
              Nepal is best walked with
              <br />
              someone{" "}
              <span className="font-great-vibes text-5xl font-normal text-orange-400 md:text-6xl">
                who lives here.
              </span>
            </h1>

            <p className="mt-1 max-w-md text-xs leading-tight text-white/80 md:text-base">
              We are eleven people in Kathmandu. Tell us what you want out of
              the epic scene of us planted it, then watch it with you. You
              will love the name of the person who drawn it.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600">
                Explore Destinations
              </button>
              <button className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10">
                Plan with a Specialist
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}