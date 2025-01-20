// https://makerkit.dev/blog/tutorials/nextjs-api-best-practices

// new in NextJS
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // For URL: /api/search?query=hello&page=1
  const searchParams = request.nextUrl.searchParams;

  // Get single parameter
  const query = searchParams.get('query');      // "hello"
  const page = searchParams.get('page');        // "1"

  // Get all parameters
  const allParams = Object.fromEntries(searchParams.entries());

  // Check if parameter exists
  const hasFilter = searchParams.has('filter');

  // Get multiple values for same parameter
  // URL: /api/search?tag=news&tag=tech
  const tags = searchParams.getAll('tag');      // ["news", "tech"]

  return NextResponse.json({
    query,
    page,
    allParams,
    hasFilter,
    tags
  });
}

// http://localhost:3000/api/search?query=hello&page=1

// http://localhost:3000/api/search?tag=news&tag=tech