import EditExame from "../../../components/editexame/EditExame"

const getTopicById = async(id) =>{
    try{
        const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
            cache:"no-store",
    });

    if(!res.ok){
        throw new Error("Could not find topic");
    }

    return res.json();
    }catch(error){
        console.log(error);
    }
};

export default async function EditTopic({params}){
    const {id} = params;
    const {topic} = await getTopicById(id);
    const{hemoglobina, hematocrito} = topic;
    return <EditExame id={id} hemoglobina={hemoglobina} hematocrito={hematocrito}/>
}