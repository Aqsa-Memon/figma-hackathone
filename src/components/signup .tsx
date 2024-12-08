export default function SignupSection() {
    return (
      <section className="bg-gray-100 py-16 flex justify-center items-center">
        <div className="bg-white shadow-md rounded-lg w-11/12 max-w-2xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join the club and get the benefits</h2>
          <p className="text-gray-600 mb-8">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
          </p>
          <form className="flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full sm:w-auto flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800 transition-colors"
            >
              Sign up
            </button>
          </form>
        </div>
      </section>
    );
  }
  