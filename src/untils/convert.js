const toHTML = (stringHTML)=>{
    let cover = document.createElement('template');
    cover.innerHTML = stringHTML.trim();
    return cover.content.firstChild;
}
export default toHTML;