import toHTML from '../untils/convert'

const EmptyElement = ()=>{
    let empty = `
        <div class="empty-container">
            <h4>Nothing found</h4>
            <p>Try other keywords</p>
        </div>
    `

    let EmptyElement = toHTML(empty);

    return EmptyElement;
}

export default EmptyElement;