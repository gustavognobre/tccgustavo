import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.css'
import { IoMdChatbubbles, IoMdNotifications } from "react-icons/io"
export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div>
                <Link href={"/"} className={styles.link}>
                    <div class={styles.logo_container}>
                        <div id="logo">
                            <Image src="./logo_endocare.svg" alt="Logo" width={180} height={170} />
                        </div>
                    </div>
                </Link>
            </div>
            <div>
                <form>
                    <input type="search" className={styles.searchbar} placeholder='O que você procura?' />
                    <button type='submit'>
                        <i class="fa fa-search"></i>
                    </button>
                </form>
            </div>
            <div>
                <div className={styles.tripla}>
                    <div className={styles.profile_container}>
                        <div className={styles.icon}>
                            <IoMdChatbubbles size={20} />
                        </div>
                        <div className={styles.icon}>
                            <IoMdNotifications size={20} />
                        </div>
                        <div className={styles.itens_pessoal}>

                        </div>
                        <Image src="./avatar.svg" width={48} height={40} />
                        <div >
                        <p className={styles.profile_text1}>Bem-vindo, Gustavo</p>
                        <p id="lema" className={styles.profile_text2}>Sua Saúde agora está em suas mãos</p>
                        </div>
                        
                    </div>
                    
                </div>




            </div>

        </nav>
    )

}