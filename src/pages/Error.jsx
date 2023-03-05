import { Link } from 'react-router-dom'
import { useRouteError } from 'react-router-dom'
import Button from '../components/Button'

export default function Error() {
  const error = useRouteError()

  return (
    <div className="mt-60 flex flex-col items-center text-center">
      <h1 className="text-h1 font-bold">Oops, something went wrong</h1>
      <p className="mt-6 text-h3 mb-10">{error.message}</p>
      <Link to="/">
        <Button>Go to homepage</Button>
      </Link>
    </div>
  )
}
