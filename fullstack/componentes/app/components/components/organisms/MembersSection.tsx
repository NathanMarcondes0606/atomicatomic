import MemberCard from "../molecules/MemberCard"

const members = [
  {
    name: "Ana Silva",
    role: "Full-stack Developer",
    description: "Especialista em React e Node.js. Adora café e Docker.",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    name: "Bruno Costa",
    role: "UI/UX Designer",
    description: "Focado em acessibilidade e design systems escaláveis.",
    gradient: "from-green-500 to-teal-500",
  },
  {
    name: "Carla Dias",
    role: "DevOps Engineer",
    description:
      "Mestre em Kubernetes e automação de pipelines CI/CD.",
    gradient: "from-orange-500 to-red-500",
  },
]

export default function MembersSection() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {members.map((member, index) => (
        <MemberCard key={index} {...member} />
      ))}
    </main>
  )
}
