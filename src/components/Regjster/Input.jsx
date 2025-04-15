export function Input({ type, name, onHandler, inputValue }) {
  return (
    <input
      type={type}
      name={name}
      onBlur={onHandler}
      value={inputValue}
      className="border border-zinc-800 w-full py-3 px-4 rounded-xl outline"
    />
  )
}
