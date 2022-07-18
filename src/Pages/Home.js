export default function Home() {
  return (
    <div className="max-w-[1400px] mx-auto p-4">
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 mx-auto gap-12 items-center">
        <img
          className="h-40 rounded-full justify-self-center"
          src="https://i5.walmartimages.ca/images/Enlarge/094/514/6000200094514.jpg"
          alt="Zack Kelly"
        />
        <div className="justify-self-center">
          <div className="text-5xl">Zack Kelly</div>
          <div className="text-lg">Full-Stack Developer</div>
        </div>
      </div>
      <div className="mt-12">
        <p className="text-xl w-3/4 mx-auto">
          Lorem ipsum dolor sit amet scaf pong hibe jo milde. Lorem ipsum dolor
          sit amet scaf pong hibe jo milde. Lorem ipsum dolor sit amet scaf pong
          hibe jo milde. Lorem ipsum dolor sit amet scaf pong hibe jo milde.
          Lorem ipsum dolor sit amet scaf pong hibe jo milde. Lorem ipsum dolor
          sit amet scaf pong hibe jo milde.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2">
        <div className="justify-self-center w-60 h-80 border-2 border-black rounded-md p-2">
          Portfolio
        </div>
        <div className="justify-self-center w-60 h-80 border-2 border-black rounded-md p-2">
          Blog Posts
        </div>
      </div>
    </div>
  );
}
