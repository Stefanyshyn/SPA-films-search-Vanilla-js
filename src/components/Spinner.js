import toHTML from '../untils/convert'

const AwaitElement = ()=>{
    let awaitStr = `
        <div class="spinner-wait">
            <div class="spinner-border"></div>
        </spin>
    `

    let AwaitElement = toHTML(awaitStr);

    return AwaitElement;
}

export default AwaitElement;