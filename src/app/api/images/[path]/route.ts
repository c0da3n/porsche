// background cache setting
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET({ params }: { params: { path: string } }) {
  const { path: imgPath } = params;
  const filePath = path.resolve(".", "public", "assets", "img", imgPath);

  if (fs.existsSync(filePath)) {
    const fileBuffer = fs.readFileSync(filePath);
    const response = new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
    return response;
  } else {
    return NextResponse.json({ error: "Image not found" }, { status: 404 });
  }
}
