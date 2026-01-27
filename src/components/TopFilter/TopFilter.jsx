import "./TopFilter.css"

const TopFilter = ({ filterValue, onClick }) => {

  const FILTER = [
    'Women',
    'Men',
    'Unisex',
    'Children',
    'New',
  ]

  return (
    <div className="filter">
      <div className="container">
        <ul className="filter__list">
          {FILTER.map((item) => (
            <li key={item} className="filter__item">
              <button
                className={`filter__button ${filterValue === item && 'filter__button--active'}`}
                type="button"
                onClick={() => onClick(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TopFilter;