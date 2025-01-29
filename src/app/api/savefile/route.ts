import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const translations = await request.json();
    const backupDir = path.join(process.cwd(), 'messages', 'backup');
    const filePath = path.join(backupDir, 'backup_de.json');
    
    // Create backup directory if it doesn't exist
    await mkdir(backupDir, { recursive: true });
    await writeFile(filePath, JSON.stringify(translations, null, 2), 'utf8');
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving translations:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
