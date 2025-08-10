const anchorElement = {
    type : 'a',
    title: 'Click me to visit google !',
    props:{
        href:'htpps://goolge.com',
        target:'_blank'
    }
}

function renderElement(element, container)
{
    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.title

    container.appendChild(domElement)
}

const root = document.querySelector('#root')

renderElement(anchorElement, root)


