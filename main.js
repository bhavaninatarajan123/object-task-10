var library=[{
    author:'Bill Gates',
    title:'The Road Ahead',
    readingstatus:true
},

{
    author:'Steve Jobs',
    title:'Walter Isaacson',
    readingstatus:true
},

{
    author:'Suzanne Collins',
    title:'Mockingjay:The Final Book of The Hunger Games',
    readingstatus:false
},
]

let a=library.map(function(e){
    if(e.readingstatus==true){
        var b=`Already read '${e.author}' by The ${e.title}.`
            }

            else{
                var b=`You still need to read '${e.title}'by ${e.author}.`
            }
            
            document.write(b+"<br>");
})
