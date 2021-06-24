function firstEigth(a, b) {
    var arrayElement = []
    
    function n (x){return x*8}
    
    function Constructor(name, height, weight, life_span, image,id) {
        this.name = name,
        this.id=id,
        this.height = height,
        this.weight = weight,
        this.life_span = life_span
        this.image = image
    }
    for (let i = 0; i < 8; i++) {
        if (a[(n(b)-8)+i]) {
            const { name, height, weight, age, image, id } = a[(n(b)-8)+i]
            var element = new Constructor(name, height, weight, age, image,id )
            arrayElement.push(element)
        }
        else{return arrayElement}
    }
    return arrayElement
}


function search(array, query) {
    filter = array.filter(elem => elem.name.toUpperCase().includes(query.toUpperCase()))
    return filter;
}

function temeperamentos(x){
    var narra=[]
    var ola= []
    for (let i=0; i<x.length;i++){
        if(x[i].temperament){
        var asa=x[i].temperament.split(', ')
        ola= narra.concat(asa,ola)}
        else{}
        }
        
    let result = ola.filter((item,index)=> ola.indexOf(item) === index)
    return  result
}

module.exports = { firstEigth, search , temeperamentos}

