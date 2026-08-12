// Placeholder stats — replace with your real numbers.
const stats = [
  { value: "+2", label: "Years of Experience" },
  { value: "+5", label: "Projects Completed" },
  { value: "+10", label: "Happy Clients" },
];

function Home() {
  return (
    <div className="w-full flex flex-col items-center lg:items-start px-6 pb-16">
      <h1 className="text-center lg:text-left text-6xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.95] tracking-normal">
        <span className="block text-white">IT</span>
        <span className="block text-neutral-700">Engineer</span>
      </h1>

      <p className="body-text mt-6 max-w-md text-center lg:text-left">
        Developer with experience to work with multi-disciplinary teams to bring
        the best benefits with help of coding and AI. Let's craft your idea into
        a product!
      </p>

      <div className="mt-10 flex flex-wrap text-left lg:justify-start gap-10 sm:gap-16">
        {stats.map(({ value, label }) => (
          <div key={label}>
            <div className="text-4xl md:text-7xl font-semibold text-white">
              {value}
            </div>
            <div className="mt-2 max-w-32 text-s uppercase tracking-normal text-stone-400">
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
