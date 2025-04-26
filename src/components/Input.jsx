export function Input({
  type,
  name,
  onHandlerBlur,
  inputValue,
  onHandlerChange,
  textPlaceholder,
}) {
  return (
    <input
      type={type}
      name={name}
      onBlur={onHandlerBlur}
      onChange={onHandlerChange}
      value={inputValue}
      placeholder={textPlaceholder}
      className="border border-zinc-800 w-full py-3 px-4 rounded-xl outline"
    />
  )
}
