import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { revalidatePath } from 'next/cache';

export async function POST(request: Request) {
  try {
    const translations = await request.json();
    const backupDir = path.join(process.cwd(), 'messages');
    const filePath = path.join(process.cwd(), 'messages', 'de.json');
    
    // Create backup directory if it doesn't exist
    await mkdir(backupDir, { recursive: true });
    await writeFile(filePath, JSON.stringify(translations, null, 2), 'utf8');
    
    // Revalidate the paths that use the translations
    revalidatePath('/[locale]');  // Revalidate all locale paths
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving translations:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}