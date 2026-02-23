import SearchBar from "@/components/molecules/SearchBar"
import MembersSection from "@/components/organisms/MembersSection"

export default function ComunidadePage() {
  return (
    <div className="min-h-screen bg-gray-900 p-8 text-white">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">Membros do Grupo</h1>
        <SearchBar />
      </header>

      <MembersSection />

      <footer className="mt-12 text-center text-gray-500 text-xs">
        <p>© 2026 - Engenharia de Software - Full-Stack Class</p>
        <button className="mt-2 text-blue-400 hover:underline">
          Sair do sistema
        </button>
      </footer>
    </div>
  )
}