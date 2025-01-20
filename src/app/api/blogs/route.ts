// https://medium.com/@salihbezai98/how-to-set-up-api-routes-in-next-js-15-7a53e2e09b50

const blogs = [
  {
      "id": "1",
      "author": "Mark",
      "content": "blog 1 content is here",
    
    },
    
  {
      "id": "2",
      "author": "Mohamed",
      "content": "blog 2 content is here",
    
    },
    
  {
      "id": "3",
      "author": "Amine",
      "content": "blog 3 content is here",
    
    }
  
  ]
  
  export async function GET(req:Request){
      return new Response(JSON.stringify(blogs),{
          status:200,
          headers:{ "Content-Type": "application/json" }
      })
  }

  // http://localhost:3000/api/blogs
  
  // export async function GET(request: Request) {
  //   return Response.json({ message: 'Getting users' })
  // }