export function Input({ type, name }) {
  return (
    <input
      type={type}
      name={name}
      className="border border-zinc-500 w-full py-3 px-4 rounded-xl outline"
    />
  )
}
