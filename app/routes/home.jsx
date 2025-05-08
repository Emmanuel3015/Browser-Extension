export function meta() {
  return [
    { title: "Browser Extension" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto">
      <div className="mt-10">
        <img src="/logo.svg" />
      </div>

      <Extension />
      <Items />
    </main>
  );
}

function Extension() {
  return (
    <div className="flex justify-between mt-8">
      <h1 className="text-3xl font-bold">Extension List</h1>
      <div className="space-x-2">
        <Button name="All" />
        <Button name="Active" />
        <Button name="Inactive" />
      </div>
    </div>
  );
}

function Items() {
  // return (
  //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  //     <Card
  //       image="/logo-devlens.svg"
  //       head="DevLens"
  //       paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed."
  //     />
  //     <Card
  //       image="/logo-style-spy.svg"
  //       head="StyleSpy"
  //       paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed."
  //     />
  //     <Card
  //       image="/logo-speed-boost.svg"
  //       head="SpeedBoost"
  //       paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed."
  //     />
  //     <Card
  //       image="/logo-json-wizard.svg"
  //       head="JSON wizard"
  //       paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed."
  //     />
  //     <Card
  //       image="/logo-tab-master-pro.svg"
  //       head="TabMaster Pro"
  //       paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed."
  //     />
  //     <Card
  //       image="/logo-viewport-buddy.svg"
  //       head="ViewportBuddy"
  //       paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed."
  //     />
  //     <Card
  //       image="/logo-markup-notes.svg"
  //       head="Markup Notes"
  //       paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed."
  //     />
  //     <Card
  //       image="/logo-palette-picker.svg"
  //       head="Palette Picker"
  //       paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed."
  //     />
  //     <Card
  //       image="/logo-link-checker.svg"
  //       head="LinkChecker"
  //       paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed."
  //     />
  //     <Card
  //       image="/logo-dom-snapshot.svg"
  //       head="DOM Snapshot"
  //       paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed."
  //     />
  //     <Card
  //       image="/logo-console-plus.svg"
  //       head="ConsolePlus"
  //       paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed."
  //     />
  //   </div>
  // );
  let cards = [
    {
      id: 1,
      image: "/logo-devlens.svg",
      head: "DevLens",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    },
    {
      id: 2,
      image: "/logo-style-spy.svg",
      head: "StyleSpy",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    },
    {
      id: 3,
      image: "/logo-speed-boost.svg",
      head: "SpeedBoost",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    },
    {
      id: 4,
      image: "/logo-json-wizard.svg",
      head: "JSON wizard",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    },
    {
      id: 5,
      image: "/logo-tab-master-pro.svg",
      head: "TabMaster Pro",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    },
    {
      id: 6,
      image: "/logo-viewport-buddy.svg",
      head: "ViewportBuddy",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    },
    {
      id: 7,
      image: "/logo-markup-notes.svg",
      head: "Markup Notes",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    },
    {
      id: 8,
      image: "/logo-palette-picker.svg",
      head: "Palette Picker",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    },
    {
      id: 9,
      image: "/logo-link-checker.svg",
      head: "LinkChecker",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    },
    {
      id: 10,
      image: "/logo-dom-snapshot.svg",
      head: "DOM Snapshot",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    },
    {
      id: 11,
      image: "/logo-console-plus.svg",
      head: "ConsolePlus",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
      {cards.map(({ id, image, head, paragraph }) => (
        <Card key={id} image={image} head={head} paragraph={paragraph} />
      ))}
    </div>
  );
}

function Card({ head, paragraph, image }) {
  return (
    <div className="border-2 border-gray-400  rounded-lg">
      <div className="flex items-center p-5">
        <img src={image} alt={`${head} logo`} />
        <div className="ml-5 mt-3">
          <h1 className="font-bold text-[20px]">{head}</h1>
          <p className="text-[14px] text-gray-400">{paragraph}</p>
        </div>
      </div>
      <div className="mt-5 ml-5">
        <Button name="Remove" />
      </div>
    </div>
  );
}

function Button({ name }) {
  return (
    <button type="button" className="border-2 rounded-full px-4 py-2 mb-4">
      {name}
    </button>
  );
}
