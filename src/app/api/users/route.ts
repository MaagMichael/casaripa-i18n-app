// https://makerkit.dev/blog/tutorials/nextjs-api-best-practices


// Handle GET requests
export async function GET(request: Request) {
    return Response.json({ message: 'Getting users' })
  }
  
  // Handle POST requests
  export async function POST(request: Request) {
    const data = await request.json()
    return Response.json({ message: 'Creating user', data })
  }
  
  // Handle PUT requests
  export async function PUT(request: Request) {
    const data = await request.json()
    return Response.json({ message: 'Updating user', data })
  }
  
  // Handle DELETE requests
  export async function DELETE(request: Request) {
    return Response.json({ message: 'Deleting user' })
  }
  
  // Handle PATCH requests
  export async function PATCH(request: Request) {
    const data = await request.json()
    return Response.json({ message: 'Patching user', data })
  }
  
  // Handle OPTIONS requests
  export async function OPTIONS(request: Request) {
    return new Response(null, {
      status: 204,
      headers: {
        'Allow': 'GET, POST, PUT, DELETE, PATCH, OPTIONS'
      }
    })
  }
  