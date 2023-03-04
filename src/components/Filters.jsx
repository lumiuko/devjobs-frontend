import { useState } from 'react'
import Modal from 'react-modal'
import Button from './Button'
import Checkbox from './Checkbox'

Modal.setAppElement('#root')

const customStyles = {
  overlay: {
    backgroundColor: null
  },
  content: {
    border: null,
    borderRadius: null,
    padding: null,
    inset: null,
    backgroundColor: null
  }
}

export default function Filters({ filters, setFilters, fetchJobs }) {
  const [modalIsOpen, setIsOpen] = useState(false)

  function handleChange(event) {
    const { name, type, value, checked } = event.target

    setFilters(prevFilter => ({
      ...prevFilter,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  function closeModal() {
    setIsOpen(false)
  }

  function handleSubmit(event) {
    event.preventDefault()
    closeModal()
    fetchJobs()
  }

  return (
    <form
      className="flex justify-between bg-white dark:bg-very-dark-blue rounded-input -mt-10 h-[80px] overflow-hidden"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <div className="flex w-full">
        <input
          type="text"
          className="ml-6 w-full md:basis-1/3 bg-white dark:bg-very-dark-blue focus:outline-none h-full md:bg-search bg-no-repeat bg-left md:pl-10 xl:basis-[45%]"
          placeholder="Filter by title…"
          value={filters.title}
          name="title"
          onChange={handleChange}
        />
        <div className="hidden md:block max-w-[150px] md:basis-1/3 md:max-w-full border-l-[1px] border-l-[#e2e6ea] dark:border-[#2a3442] border-l-solid md:pl-6 xl:basis-[30%]">
          <input
            type="text"
            className="bg-white dark:bg-very-dark-blue focus:outline-none h-full bg-location bg-no-repeat bg-left pl-8"
            placeholder="Filter by location…"
            value={filters.location}
            name="location"
            onChange={handleChange}
          />
        </div>
        <div className="hidden md:flex md:basis-1/3 md:items-center border-l-[1px] pl-6 border-l-[#e2e6ea] dark:border-[#2a3442] xl:basis-[25%]">
          <Checkbox checked={filters.forceFullTime} name="forceFullTime" onChange={handleChange} id="fullTime" />
          <label className="ml-4 font-bold" htmlFor="fullTime">
            Full Time <span className="hidden xl:inline">Only</span>
          </label>
        </div>
      </div>

      <div className="flex gap-4 mx-4 shrink-0">
        <button type="button" className="w-[48px] px-[0.875rem] md:hidden" onClick={() => setIsOpen(true)}>
          <img src="/assets/mobile/icon-filter.svg" alt="Filter icon" className="dark:hidden" />
          <img src="/assets/mobile/icon-filter-dark.svg" alt="Filter icon" className="hidden dark:block" />
        </button>
        <button className="px-[0.875rem] my-4 bg-primary hover:bg-primary-hover rounded-btn text-white font-bold xl:px-9">
          <img src="/assets/mobile/icon-search.svg" alt="Search icon" className="md:hidden" />
          <span className="sr-only md:not-sr-only">Search</span>
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        closeTimeoutMS={200}
        contentLabel="Rules"
      >
        <div className="px-6 border-b-[1px] border-[#e2e6ea] dark:border-[#2a3442]">
          <input
            type="text"
            className="bg-white py-6 dark:bg-very-dark-blue focus:outline-none h-full bg-location bg-no-repeat bg-left pl-8"
            placeholder="Filter by location"
            value={filters.location}
            name="location"
            onChange={handleChange}
          />
        </div>
        <div className="p-6">
          <div className="flex items-center">
            <Checkbox checked={filters.forceFullTime} name="forceFullTime" onChange={handleChange} id="modalFullTime" />
            <label className="ml-4 font-bold" htmlFor="modalFullTime">
              Full Time Only
            </label>
          </div>
          <Button onClick={handleSubmit} additionalClasses="mt-6 w-full text-center">
            Search
          </Button>
        </div>
      </Modal>
    </form>
  )
}
