const TOC = () => {
  return (
    <section className="bg-[#fdf5e6] p-48 flex min-h-screen min-w-screen">
      <h1 className="text-3xl font-bold mb-6 mr-6">Table of Contents</h1>
      <ul className="space-y-4 flex flex-col">
        <li className="flex items-center">
          <a className="flex items-center" to="/#intro">
            <span className="bg-[#bf3415] text-white rounded-full h-10 w-10 flex items-center justify-center mr-4 font-bold">
              1
            </span>
            <span className="flex-1">Introduction</span>
          </a>
        </li>
        <li className="flex items-center">
          <a className="flex items-center" href="#">
            <span className="bg-[#bf3415] text-white rounded-full h-10 w-10 flex items-center justify-center mr-4 font-bold">
              2
            </span>
            <span className="flex-1">Related Work</span>
          </a>
        </li>
        <li className="flex items-center">
          <a className="flex items-center" href="#">
            <span className="bg-[#bf3415] text-white rounded-full h-10 w-10 flex items-center justify-center mr-4 font-bold">
              3
            </span>
            <span className="flex-1">Data Description and Implementation</span>
          </a>
        </li>
        <li className="flex items-center">
          <a className="flex items-center" href="#">
            <span className="bg-[#bf3415] text-white rounded-full h-10 w-10 flex items-center justify-center mr-4 font-bold">
              4
            </span>
            <span className="flex-1">
              Understanding the Socio-political Landscape of the Joseon Dynasty
            </span>
          </a>
        </li>
        <li className="flex items-center">
          <a className="flex items-center" href="#">
            <span className="bg-[#bf3415] text-white rounded-full h-10 w-10 flex items-center justify-center mr-4 font-bold">
              5
            </span>
            <span className="flex-1">
              Measuring Career Success of Yangbans in the Joseon Dynasty
            </span>
          </a>
        </li>

        <li className="flex items-center">
          <a className="flex items-center" href="#">
            <span className="bg-[#bf3415] text-white rounded-full h-10 w-10 flex items-center justify-center mr-4 font-bold">
              6
            </span>
            <span className="flex-1">Concluding Remarks</span>
          </a>
        </li>
      </ul>
    </section>
  );
};
export default TOC;
