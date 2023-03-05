import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

import { useLoaderFetch } from '../utils/api'
import Button from '../components/Button'

export function loader(info) {
  return useLoaderFetch(`/jobs/${info.params.id}`)
}

export default function JobDetail() {
  useEffect(() => {
    document.documentElement.scrollTop = 0
  }, [])

  const data = useLoaderData()

  function getListItems(items) {
    return items.map((item, index) => <li key={index}>{<span className="relative left-4">{item}</span>}</li>)
  }

  return (
    <>
      <main className="max-w-[810px] mx-auto px-6 md:px-10">
        <div className="flex flex-col items-center text-center -mt-4 bg-white dark:bg-very-dark-blue rounded-input pb-8 md:flex-row md:pb-0 md:text-left">
          <div
            className="w-[50px] h-[50px] rounded-card-logo flex justify-center items-center mt-[-25px] md:w-[140px] md:h-[140px] md:mt-0 md:rounded-input md:rounded-r-none md:px-[1.875rem]"
            style={{ backgroundColor: data.logoBackground }}
          >
            <img className="md:w-full" src={data.logo} />
          </div>
          <div className="md:ml-10">
            <div className="mt-6 font-bold text-h3 md:text-h2">{data.company}</div>
            <div className="mt-2 text-dark-grey mb-6">{data.company.toLowerCase().split(' ').join('-')}.com</div>
          </div>
          <Button type={2} href={data.website} target="_blank" additionalClasses="md:ml-auto md:mr-10">
            Company Site
          </Button>
        </div>
        <div className="bg-white dark:bg-very-dark-blue rounded-input mt-6 mb-16 px-6 py-10 md:p-12">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div>
              <div className="text-dark-grey">
                <span>{data.postedAt}</span>
                <span className="mr-3 ml-3">•</span>
                <span>{data.contract}</span>
              </div>
              <h1 className="mt-2 font-bold text-h3 md:text-h1">{data.position}</h1>
              <div className="mt-2 text-h4 text-primary font-bold ">{data.location}</div>
            </div>
            <div className="mt-[3.125rem] flex flex-col text-center md:mt-0 md:self-center">
              <Button href={data.apply} target="_blank">
                Apply Now
              </Button>
            </div>
          </div>
          <div className="mt-8 text-dark-grey dark:text-gray leading-[1.625rem] md:mt-10">
            <p>{data.description}</p>
            <h2 className="mt-10 mb-6 font-bold text-h3 text-very-dark-blue dark:text-white">Requirements</h2>
            <p>{data.requirements.content}</p>
            <ul className="mt-8 list-disc px-4 marker:text-primary flex flex-col gap-2">
              {getListItems(data.requirements.items)}
            </ul>
            <h2 className="mt-10 mb-6 font-bold text-h3 text-very-dark-blue dark:text-white">What You Will Do</h2>
            <p>{data.role.content}</p>
            <ol className="mt-8 list-decimal px-4 flex flex-col gap-2 marker:text-primary marker:font-bold">
              {getListItems(data.role.items)}
            </ol>
          </div>
        </div>
      </main>

      <footer className="bg-white dark:bg-very-dark-blue">
        <div className="max-w-[810px] p-6 mx-auto flex flex-col justify-between md:px-10 md:flex-row md:py-[1.375rem]">
          <div className="hidden md:block">
            <div className="font-bold text-h3">{data.company}</div>
            <div className="mt-2 text-dark-grey">{data.position}</div>
          </div>
          <Button href={data.apply} target="_blank" additionalClasses="text-center md:self-center">
            Apply Now
          </Button>
        </div>
      </footer>
    </>
  )
}
