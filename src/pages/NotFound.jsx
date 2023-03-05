import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mt-60 flex flex-col items-center text-center">
      <h1 className="text-h1 font-bold mb-6">The page you're looking for was not found</h1>
      <Link
        to="/"
        className="inline-block px-5 py-[0.875rem] rounded-btn font-bold text-white bg-primary hover:bg-primary-hover"
      >
        Go to homepage
      </Link>
    </div>
  )
}
