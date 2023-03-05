import { Link } from 'react-router-dom'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <div className="mt-60 flex flex-col items-center text-center">
      <h1 className="text-h1 font-bold mb-6">The page you're looking for was not found</h1>
      <Link to="/">
        <Button>Go to homepage</Button>
      </Link>
    </div>
  )
}
