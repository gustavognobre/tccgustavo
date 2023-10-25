import RemoveBtn from "../removebtntopicslist/RemoveBtn"
import Link from "next/link";
import { IoMdCreate } from "react-icons/io"
import styles from "./TopicsList.module.css"

const getTopics = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/topics', {
            cache: "no-store",
        })
        if (!res.ok) {
            throw new Error("Failed to fetch topics");

        }
        return res.json();

    } catch (error) {
        console.log("Error loading topics: ", error);
    }
}
export default async function TopicsList() {

    const { topics } = await getTopics();

    return <>
        <div class="grid grid-cols-3">
            <div className={styles.topicslistadd}>
                <span>
                    <Link href="/addTopic">
                        <div class="flex justify-center">
                            <svg width="50" height="50" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M42 7C22.715 7 7 22.715 7 42C7 61.285 22.715 77 42 77C61.285 77 77 61.285 77 42C77 22.715 61.285 7 42 7ZM56 44.625H44.625V56C44.625 57.435 43.435 58.625 42 58.625C40.565 58.625 39.375 57.435 39.375 56V44.625H28C26.565 44.625 25.375 43.435 25.375 42C25.375 40.565 26.565 39.375 28 39.375H39.375V28C39.375 26.565 40.565 25.375 42 25.375C43.435 25.375 44.625 26.565 44.625 28V39.375H56C57.435 39.375 58.625 40.565 58.625 42C58.625 43.435 57.435 44.625 56 44.625Z" fill="#5A189A" />
                            </svg>
                        </div>
                        <div>
                            <h4 class="text-purple-900 text-xs font-bold">Adicionar novo Exame</h4>

                        </div>
                    </Link>

                </span>

            </div>
            {topics.map(t =>
                <div className={styles.topicslist}>
                    <div>
                        <h2 className={styles.title}>{t.hemoglobina}</h2>
                        <div>{t.hematocrito}</div>
                    </div>
                    <div className={styles.btn}>
                        <RemoveBtn id={t._id} />
                        <Link href={`/editTopic/${t._id}`}><IoMdCreate size={24} /></Link>
                    </div>

                </div>
            )}
        </div>

    </>;
}