export default function Kapcsolat() {
  return (
    <div className="my-8 px-16">
      <h1 className="text-2xl font-bold mb-4">Kapcsolat</h1>

      <div className="flex flex-col gap-6 text-lg">
        <div>
          <p className="font-semibold">Borlói Anikó</p>
          <p>
            email:{" "}
            <a
              href="mailto:fairyadventurer@web.de"
              className="text-blue-600 hover:underline"
            >
              fairyadventurer@web.de
            </a>
          </p>
        </div>

        <div>
          <p className="font-semibold">Borlói Ildikó</p>
          <p>
            email:{" "}
            <a
              href="mailto:borloi.ildiko24@gmail.com"
              className="text-blue-600 hover:underline"
            >
              borloi.ildiko24@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
