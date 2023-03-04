import { Link } from 'react-router-dom'

export default function Card({ item }) {
  return (
    <Link to={`/job/${item.id}`} className="pb-8 pr-10 pl-8 bg-white dark:bg-very-dark-blue rounded-input">
      <div
        className="w-[50px] h-[50px] rounded-card-logo flex justify-center items-center mt-[-25px]"
        style={{ backgroundColor: item.logoBackground }}
      >
        <img src={item.logo} alt={item.company} />
      </div>
      <div className="text-dark-grey mt-6">
        <span>{item.postedAt}</span>
        <span className="mr-3 ml-3">•</span>
        <span>{item.contract}</span>
      </div>
      <div className="mt-3 font-bold text-h3">{item.position}</div>
      <div className="mt-4 text-dark-grey leading-none">{item.company}</div>
      <div className="mt-11 text-h4 text-primary font-bold leading-none">{item.location}</div>
    </Link>
  )
}
