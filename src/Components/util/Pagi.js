import React from 'react'
import { Container } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';


function Pagi({ count, onPress }) {
  const handlePageClick = (data) => {
    onPress(data.selected + 1)


  }



  return (
    <Container className='d-flex justify-content-center my-2'>

      <ReactPaginate className=''
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        pageCount={count}
        previousLabel="< previous"
        containerclassName={'pagination justify-content-center gold'}
        pageclassName={"page-item "}
        pageLinkclassName={"page-link "}
        previousclassName={"page-item "}
        nextclassName={"page-item "}
        previousLinkclassName={"page-link "}
        nextLinkclassName={"page-link "}
        breakLinkclassName={"page-link "}
        breakclassName={"page-item "}
        activeclassName="active "
      />
    </Container>

  )
}

export default Pagi