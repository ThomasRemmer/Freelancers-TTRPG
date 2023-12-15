export default function CharacterSheet() {
  return (
    <>
      <main className="flex flex-col min-h-screen justify-between p-24">
        <div className="grid grid-cols-3 grid-rows-2 w-9/10 h-screen mx-full">
          <div className="col-span-1 row-span-1 bg-red-500 h-full"></div>
          <div className="col-span-1 row-span-1 bg-green-500 h-full"></div>
          <div className="col-span-1 row-span-1 bg-blue-500 h-full"></div>
          <div className="col-span-3 row-span-1 bg-yellow-500 h-full"></div>
        </div>
      </main>
    </>
  );
}
