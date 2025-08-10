const anchorElement = {
    type : 'a',
    title: 'Click me to visit google !',
    props:{
        href:'https://www.google.com/',
        target:'_blank'
    }
}

function renderElement(element, container)
{
    const domElement = document.createElement(element.type)

    domElement.innerHTML = element.title
    //domElement.setAttribute('href', element.props.href)
    //domElement.setAttribute('target', element.props.target)
    for(const prop in element.props){
        domElement.setAttribute(prop, element.props[prop])
    }

    container.appendChild(domElement)
}

const root = document.querySelector('#root')

renderElement(anchorElement, root)



