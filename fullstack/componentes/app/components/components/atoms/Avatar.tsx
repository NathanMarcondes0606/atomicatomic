type AvatarProps = {
  gradient: string
}

export default function Avatar({ gradient }: AvatarProps) {
  return (
    <div
      className={`w-12 h-12 bg-gradient-to-tr ${gradient} rounded-full`}
    />
  )
}