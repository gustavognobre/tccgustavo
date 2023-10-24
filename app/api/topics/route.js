import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb"
import Topic from "../../../models/topic";


export async function POST(request) {
    const { hemoglobina, hematocrito } = await request.json();
    await connectMongoDB();
    await Topic.create({ hemoglobina, hematocrito });
    return NextResponse.json({ message: "Exame Criado" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const topics = await Topic.find();
    return NextResponse.json({ topics });
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message:"Exame deletado com sucesso!"}, {status:200});

}