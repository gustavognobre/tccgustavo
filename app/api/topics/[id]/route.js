import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb"
import Topic from "../../../../models/topic"
export async function PUT(request,{params}){
    const {id} = params;
    const {newHemoglobina: hemoglobina, newHematocrito: hematocrito} = await request.json();
    await connectMongoDB();
    await Topic.findByIdAndUpdate(id, {hemoglobina, hematocrito});
    return NextResponse.json({message:"Exame Atualizado"}, {status:200})
}

export async function GET(request,{params}){
    const {id} = params;
    await connectMongoDB();
    const topic = await Topic.findOne({_id: id});
    return NextResponse.json({topic}, {status:200});
}