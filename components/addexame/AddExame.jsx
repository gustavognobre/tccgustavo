"use client";
import styles from "./AddExame.module.css"
import { useState } from 'react';
import { useRouter } from "next/navigation";

export default function AddExame() {
    const [hemoglobina, setHemoglobina] = useState("");
    const [hematocrito, setHematocrito] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!hemoglobina || !hematocrito) {
            alert('Preencha todos os campos')
            return;
        }
        try {
            const res = await fetch('http://localhost:3000/api/topics', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ hemoglobina, hematocrito }),
            });
           
            if(res.ok){
                router.push("/exames");
                }
            else {
                throw new Error("Failed to create a topic")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form className={styles.line} onSubmit={handleSubmit} >
                <h2>Hemoglobinas</h2>
                <input onChange={(e) => setHemoglobina(e.target.value)} value={hemoglobina} type="text" name="hemoglobina" className={styles.input} placeholder="Recomendado: Hemoglobina (Hb): Homens: 13,5 a 17,5 g/dL" />

                <h2>Hematócrito</h2>
                <input onChange={(e) => setHematocrito(e.target.value)} value={hematocrito} type="text" name="hematocrito" className={styles.input} placeholder="Recomendado: Hematócrito (Ht):  Homens: 38,8% a 50,0%: Hemoglobina (Hb): Homens: 13,5 a 17,5 g/dL" />

                <button type="submit" className={styles.savebtn} >SAVE</button>
            </form>
        </div>
    )
}