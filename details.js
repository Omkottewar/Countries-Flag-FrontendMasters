async function detailsCard(){

    try{
        let data = await fetch("http://localhost:3001/counteries");

        if(!data){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const response = await data.json();
        return response;
    }catch(e){
        return 0
    }
  
}



async function filterCity(city){
    const display = await detailsCard();

    let list = Object.keys(display).filter((ele)=>{
            console.log(ele.includes="Asia")
    })
    console.log(list)
}
filterCity("Asia")