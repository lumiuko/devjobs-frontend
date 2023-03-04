export default function Checkbox({ ...props }) {
  return (
    <input
      type="checkbox"
      className="appearance-none transition-colors w-[24px] h-[24px] bg-[#e8e8ea] rounded-[3px] focus:border-purple checked:border-purple checked:bg-primary dark:bg-[#303742] dark:checked:bg-primary checked:bg-checkmark checked:bg-no-repeat checked:bg-center checked:bg-check shrink-0 cursor-pointer"
      {...props}
    />
  )
}
