import Input from "../atoms/Input"
import Button from "../atoms/Button"

export default function SearchBar() {
  return (
    <div className="flex gap-2">
      <Input />
      <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-all">
        Buscar
      </Button>
    </div>
  )
}