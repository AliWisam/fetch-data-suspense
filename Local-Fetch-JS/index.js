  const getData = async ()=>{
  
  const response =await fetch('https://jsonplaceholder.typicode.com/todos/1')  
  console.log("response", response)
  const data = await response.json()
  console.log("data", data) 

  }

  getData(); 

  const postData = async ()=>{
  
    const response =await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: "POST",
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    })  
    console.log("response", response)
    const data = await response.json()
    console.log("data", data) 
    }
  
    postData(); 