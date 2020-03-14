import toHTML from '../untils/convert'

const EmptyElement = (title, message)=>{
    let empty = `
        <div class="empty-container">
            <h4>${title}</h4>
            <p>${message}</p>
        </div>
    `

    let EmptyElement = toHTML(empty);

    return EmptyElement;
}

export default EmptyElement;