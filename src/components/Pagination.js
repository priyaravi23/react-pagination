export const Pagination = ({memesPerPage, totalMemes, paginate}) => {
    let pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalMemes/memesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            <nav>
                <ul className="paginate">
                    {pageNumbers.map(number => (
                        <li key={number} className="number-link">
                            <a href="!#" onClick={() => paginate(number)}>
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}