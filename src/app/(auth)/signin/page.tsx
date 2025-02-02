
const SigninPage = () => {
  return (
    <>
    <section className="w-1/2 mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Signin Page</h1>
      <form className="flex flex-col w-1/2 h-full mx-auto bg-gray-100 p-4 rounded-md shadow-md">
        <input className="border border-gray-300 rounded-md px-4 py-2 mb-4" type="text" placeholder="Username" />
        <input className="border border-gray-300 rounded-md px-4 py-2 mb-4" type="password" placeholder="Password" />
        <button className="bg-blue-500 text-white rounded-md px-4 py-2" type="submit">Sign In</button>
      </form>
    </section>
    </>
  )
}

export default SigninPage