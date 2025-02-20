import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-black">
      {/* Background image with overlay */}
      <Image
        src="/images/terraformed_planet.webp"
        alt="Space background"
        fill
        className="object-cover"
        priority
        quality={100}
      />
      <div className="absolute inset-0 bg-black/85" /> {/* Dark overlay */}

      <div className="relative flex min-h-screen flex-col items-center justify-center px-4">
        {/* Game logo/title */}
        <h1 className="mb-8 font-pixel text-5xl font-bold text-white">
          HABITABLE
        </h1>

        {/* Login form */}
        <div className="w-full max-w-md rounded-lg border-2 border-purple-500 bg-black/80 p-8 shadow-lg backdrop-blur">
          <form className="space-y-6">
            <div>
              <label htmlFor="username" className="font-pixel text-sm text-purple-300">
                USERNAME
              </label>
              <input
                type="text"
                id="username"
                className="mt-1 w-full rounded border border-purple-500 bg-black/50 px-3 py-2 text-white focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
            </div>

            <div>
              <label htmlFor="password" className="font-pixel text-sm text-purple-300">
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 w-full rounded border border-purple-500 bg-black/50 px-3 py-2 text-white focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="font-pixel w-full rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              >
                LOGIN
              </button>
            </div>
          </form>

          <div className="mt-4 text-center">
            <Link
              href="/register"
              className="font-pixel text-sm text-purple-300 hover:text-purple-400"
            >
              Create new account
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}