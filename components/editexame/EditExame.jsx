"use client";

import styles from "./EditExame.module.css"
import { useRouter } from "next/navigation"
import { useState } from "react";

export default function EditExame({id, hemoglobina, hematocrito}) {

    const [newHemoglobina, setNewHemoglobina] = useState(hemoglobina);
    const [newHematocrito, setNewHematocrito] = useState(hematocrito);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ newHemoglobina, newHematocrito }),
            });

            if (!res.ok) {
                throw new Error("Failed to update topic")
            };
            router.push("/exames");

        } catch (error) {
            console.log(error);
        }

    };

    return (

        <form onSubmit={handleSubmit} className={styles.line} >
            
            <input
                onChange={(e) => setNewHemoglobina(e.target.value)}
                value={newHemoglobina}
                className={styles.input}
                type="text"
                name="hemoglobina"
                
            />

           
            <input
                onChange={(e) => setNewHematocrito(e.target.value)}
                value={newHematocrito}
                type="text"
                name="hematocrito"
                className={styles.input}
            />

            <button className={styles.savebtn} >SAVE</button>
        </form>

    );
}