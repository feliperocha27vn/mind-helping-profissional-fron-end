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
      className="border border-zinc-950 w-full py-2 px-4 rounded-md outline text-sm"
    />
  )
}
