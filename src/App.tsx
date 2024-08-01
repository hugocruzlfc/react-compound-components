import DropdownProvider from "./components/compound/Dropdown";
import { Dropdown } from "./components/standar/Dropdown";

function App() {
  return (
    <div className="flex flex-col gap-10 text-center mt-20">
      <h2 className="text-2xl">Understand Compound Components</h2>
      <div className="flex flex-row justify-center items-start gap-5">
        <Dropdown
          items={["item1", "item2", "item3"]}
          text="Dropdown"
          footerHeading="Footer Heading"
          footerDescription="Footer Description"
          showIcons={true}
          hasFooter={true}
        />

        <DropdownProvider>
          <DropdownProvider.Button>Solutions</DropdownProvider.Button>
          <DropdownProvider.Menu>
            <DropdownProvider.Item>New Features</DropdownProvider.Item>
            <DropdownProvider.Item>Productivity</DropdownProvider.Item>
          </DropdownProvider.Menu>
          <DropdownProvider.Footer>
            <h1>Footer Heading</h1>
            <p>Footer Description</p>
          </DropdownProvider.Footer>
        </DropdownProvider>
      </div>
    </div>
  );
}

export default App;
