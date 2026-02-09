function Logo() {
  return (
    <h1 className="group flex items-center gap-2 text-xl md:text-2xl font-bold cursor-pointer select-none">
      {/* </> Symbol */}
      <span
        className="
          text-blue-400
          transition-all duration-300 ease-out
          group-hover:rotate-[-8deg]
          group-hover:scale-110
          group-hover:text-blue-300
        "
      >
        &lt;/&gt;
      </span>

      {/* Name */}
      <span
        className="
          transition-all duration-300 ease-out
          group-hover:tracking-wide
        "
      >
        Diego{" "}
        <span
          className="
            text-blue-400
            relative
            inline-block
            transition-all duration-300 ease-out
            group-hover:text-blue-300
            after:absolute after:left-0 after:-bottom-1
            after:h-[2px] after:w-0
            after:bg-blue-400
            after:transition-all after:duration-300
            group-hover:after:w-full
          "
        >
          Ortiz
        </span>
      </span>
    </h1>
  );
}

export default Logo;
