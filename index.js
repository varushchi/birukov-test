import data from "./data.json" assert {type: 'json'}

const services = data.services

const main = document.querySelector('main')
services.sort((obj1,obj2) => obj1.sorthead - obj2.sorthead)

for (let i = 0; i < services.length; i++)
{   
    let newDivElem = document.getElementById(services[i].id.toString())

    if (!newDivElem)
    {
        newDivElem = document.createElement("div")
        newDivElem.id = services[i].id
    }

    newDivElem.prepend(`${services[i].name} (${services[i].price})`)

    if (services[i].head === null)
    {
        main.append(newDivElem)
    }

    else
    {
        let findId = services.find(obj => services[i].head === obj.id && services[i].id >= obj.id).id
        
            let newListDiv = document.getElementById(findId.toString())
            newDivElem.classList.add('list-div')
            
            if(!newListDiv)
            {
                let newNodeDiv = document.createElement("div")
                newNodeDiv.id = findId
                newNodeDiv.append(newDivElem)
                main.append(newNodeDiv)
            }

            else
            {
                newListDiv.append(newDivElem)
            }
    }
}






