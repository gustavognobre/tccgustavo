import RemoveBtn from "../removebtntopicslist/RemoveBtn"
import Link from "next/link";
import{IoMdCreate} from "react-icons/io"
import styles from "./TopicsList.module.css"

const getTopics = async () =>{
    try{
        const res =  await fetch('http://localhost:3000/api/topics',{
            cache: "no-store",
        })
        if(!res.ok){
            throw new Error("Failed to fetch topics");

        }
        return res.json();

    }catch(error){
        console.log("Error loading topics: ", error);
    }
}
export default async function TopicsList(){

    const {topics} = await getTopics();

    return <>
    {topics.map(t=>
    <div className={styles.topicslist}>
        <div>
            <h2 className={styles.title}>{t.hemoglobina}</h2>
            <div>{t.hematocrito}</div>
        </div>
        <div className={styles.btn}>
            <RemoveBtn id={t._id}/>
            <Link href={`/editTopic/${t._id}`}><IoMdCreate size={24}/></Link>
        </div>
        
    </div>
    )}
    </>;
}