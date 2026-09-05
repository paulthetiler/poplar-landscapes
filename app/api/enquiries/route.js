import { NextResponse } from "next/server";
import { appendFile, mkdir, readFile } from "node:fs/promises";
import path from "node:path";

const dir = path.join("/tmp", "poplar-landscapes");
const file = path.join(dir, "enquiries.ndjson");

export async function GET() {
  try {
    const raw = await readFile(file, "utf8").catch(() => "");
    const enquiries = raw
      .split("\n")
      .filter(Boolean)
      .map(line => JSON.parse(line))
      .reverse();
    return NextResponse.json({ enquiries });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error:"Unable to load enquiries." }, { status:500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    if (!body?.name || !body?.phone || !body?.postcode || !body?.projectType) {
      return NextResponse.json({ error:"Please complete the required fields." }, { status:400 });
    }

    const id = "PL-" + Date.now().toString(36).toUpperCase();
    const enquiry = { id, createdAt:new Date().toISOString(), ...body };

    await mkdir(dir, { recursive:true });
    await appendFile(file, JSON.stringify(enquiry) + "\n", "utf8");

    console.log("Poplar Landscapes enquiry", enquiry);
    return NextResponse.json({ ok:true, id });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error:"Unable to save enquiry." }, { status:500 });
  }
}
