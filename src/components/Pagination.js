import toHTML from '../untils/convert'
import getPage from '../controllers/paginationController/getPage'; 

const Pagination = (functoinSearchMovie, pageNumber, totalPages)=>{
    let pagination = toHTML(`<div class="pagination"> </div>`)
    if(pageNumber > totalPages)
        pageNumber = totalPages;

    if(pageNumber != 1){
        let prevPage = 
        toHTML(`
            <div class="pagination-next">
                <img src="../../arrow_left_burned.png" alt="<-">
                <span>${pageNumber-1}</span>
            </div>
        `)
        prevPage.addEventListener('click',getPage(functoinSearchMovie, pageNumber-1))
        pagination.appendChild(prevPage)
    }

    let inputNumber = toHTML(`
        <div class="pagination-input">
            <input value="${pageNumber}"/>
            <span>/${totalPages}</span>
        </div>
    `)

    inputNumber.addEventListener('keypress', (e)=>{
        if (e.key === 'Enter') {
            let page = new Number(e.target.value);
            if(page > totalPages)
                page = totalPages;
            else if(page < 1)
                page = 1;
            getPage(functoinSearchMovie, page)(e)
        }
    })

    pagination.appendChild(inputNumber)

    if(pageNumber !== totalPages){
        let nextPage = 
        toHTML(`
            <div class="pagination-prev">
                <span>${pageNumber+1}</span>
                <img src="../../arrow_right_burned.png" alt="->">
            </div>
        `)
        nextPage.addEventListener('click',getPage(functoinSearchMovie, pageNumber+1))
        pagination.appendChild(nextPage)
    }
    let PaginationElement = pagination;
    
    return PaginationElement;
}

export default Pagination;