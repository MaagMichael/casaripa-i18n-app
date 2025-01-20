// https://medium.com/@salihbezai98/how-to-set-up-api-routes-in-next-js-15-7a53e2e09b50

// database import
import { blogs } from "./blogs"

export async function GET(req: Request, context: { params: { id: string } }) {
    const { params } = context;
    const blog = blogs.filter((blog) => blog.id === params.id.toString())
    
    if (blog.length === 0) return new Response(JSON.stringify({ error: "Blog not found !" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
    })

    return new Response(JSON.stringify(blog), {
        status: 200,
        headers: { "Content-Type": "application/json" }
    })
}
// http://localhost:3000/api/blog/1 or 2 or 3