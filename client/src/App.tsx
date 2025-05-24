import { Button } from "@/components/ui/button";

function App() {
	return (
		<div className="flex items-center justify-center h-screen">
			<Button variant={"outline"} className="cursor-pointer hover:scale-105">
				Click me
			</Button>
		</div>
	);
}

export default App;
