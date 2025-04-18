export function Input({
  type,
  name,
  onHandlerBlur,
  inputValue,
  onHandlerChange,
}) {
  return (
    <input
      type={type}
      name={name}
      onBlur={onHandlerBlur}
      onChange={onHandlerChange}
      value={inputValue}
      className="border border-zinc-800 w-full py-3 px-4 rounded-xl outline"
    />
  )
}
