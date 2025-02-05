export default function Home() {
  return <main className="bg-gray-100 h-screen flex items-center justify-center p-5">
    <div className="bg-white w-full shadow-lg p-5 rounded-3xl max-w-screen-sm flex flex-col gap-2">
      <input type="text" placeholder="Search here..." 
      className="w-full rounded-full h-10 bg-gray-200 pl-4 outline-none transition-shadow 
        ring ring-transparent 
        placeholder:text-orange-500 
        placeholder:drop-shadow
        focus:ring-red-400 
        focus:ring-offset-2" />
      <button className="bg-black 
        text-white 
        py-2 
        rounded-full 
        active:scale-90 
        transition-transform 
        font-medium 
        outline-none">Search
      </button>
    </div>
  </main>
}
