export default function CardSkeleton() {
  return (
    <div className="bg-white dark:bg-[#19202D] h-[228px] rounded-input pb-9 pr-10 pl-8 animate-pulse">
      <div className="w-[50px] h-[50px] rounded-card-logo mt-[-25px] bg-[#dadada] dark:bg-dark-grey"></div>
      <div className="mt-8 h-[16px] bg-[#dadada] dark:bg-dark-grey rounded-input"></div>
      <div className="mt-4 h-[16px] bg-[#dadada] dark:bg-dark-grey rounded-input"></div>
      <div className="mt-4 h-[16px] bg-[#dadada] dark:bg-dark-grey rounded-input"></div>
      <div className="mt-4 h-[16px] bg-[#dadada] dark:bg-dark-grey rounded-input"></div>
    </div>
  )
}
